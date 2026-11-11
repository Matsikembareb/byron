// Reviews: anyone can submit one at /review, Byron approves it at /admin/reviews, and only then
// does it show on /references. Server-only (runs in Vercel functions and at build time).
//
// Storage is a PRIVATE Vercel Blob store (env BLOB_READ_WRITE_TOKEN, added when the store is
// connected to the project). Nothing in it has a public URL: approved photos are served by
// /api/review-photo/<id>, pending ones only to a logged-in admin.
//   reviews/pending/<id>.json      waiting for approval (includes the optional email)
//   reviews/approved/<id>.json     live on /references (email dropped on approval)
//   reviews/photos/<state>/<id>    square photo, resized in the visitor's browser
// Without a token, `astro dev` keeps the same layout in .reviews-dev/ so the flow can be tried
// locally; a deployed site without a token just reports that reviews aren't set up.
import { del, get, list, put, rename } from '@vercel/blob';
import { mkdir, readFile, readdir, rename as fsRename, rm, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { randomUUID } from 'node:crypto';

export const RELATIONSHIPS = [
  'Lecturer or teacher',
  'Manager or supervisor',
  'Colleague',
  'Client',
  'Classmate',
  'Other',
] as const;

export const LIMITS = {
  name: 80,
  role: 120,
  commentMin: 20,
  comment: 1000,
  email: 200,
  photoBytes: 1_500_000,
  /** Stop accepting new reviews while this many wait for approval (spam brake). */
  pending: 50,
} as const;

export interface Review {
  id: string;
  name: string;
  role: string;
  relationship: string;
  comment: string;
  hasPhoto: boolean;
  createdAt: string;
  approvedAt?: string;
}

/** A pending review also carries the email the reviewer gave, which is never published. */
export interface PendingReview extends Review {
  email: string;
}

type State = 'pending' | 'approved';

const paths = {
  review: (state: State, id: string) => `reviews/${state}/${id}.json`,
  photo: (state: State, id: string) => `reviews/photos/${state}/${id}`,
};

export const isReviewId = (id: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(id);

// ─── Storage ─────────────────────────────────────────────────────────────────

interface Store {
  put(pathname: string, body: Buffer | string, contentType: string): Promise<void>;
  read(pathname: string): Promise<Buffer | null>;
  /** Pathnames directly under `prefix` (a folder ending in "/"). */
  list(prefix: string): Promise<string[]>;
  move(from: string, to: string): Promise<void>;
  remove(pathname: string): Promise<void>;
}

/** Server secrets: process.env on Vercel, .env through Vite in `astro dev`. */
export const env = (key: string): string =>
  process.env[key] || (import.meta.env as Record<string, string | undefined>)[key] || '';

function blobStore(token: string): Store {
  const access = 'private' as const;
  return {
    async put(pathname, body, contentType) {
      await put(pathname, body, { access, token, contentType, addRandomSuffix: false, allowOverwrite: true });
    },
    async read(pathname) {
      const res = await get(pathname, { access, token, useCache: false });
      if (!res || res.statusCode !== 200) return null;
      return Buffer.from(await new Response(res.stream).arrayBuffer());
    },
    async list(prefix) {
      const out: string[] = [];
      let cursor: string | undefined;
      do {
        const page = await list({ prefix, cursor, token });
        out.push(...page.blobs.map((b) => b.pathname));
        cursor = page.hasMore ? page.cursor : undefined;
      } while (cursor);
      return out;
    },
    async move(from, to) {
      await rename(from, to, { access, token, addRandomSuffix: false, allowOverwrite: true });
    },
    async remove(pathname) {
      await del(pathname, { token });
    },
  };
}

function folderStore(root: string): Store {
  const abs = (p: string) => join(root, p);
  return {
    async put(pathname, body) {
      await mkdir(dirname(abs(pathname)), { recursive: true });
      await writeFile(abs(pathname), body);
    },
    async read(pathname) {
      return readFile(abs(pathname)).catch(() => null);
    },
    async list(prefix) {
      const names = await readdir(abs(prefix)).catch(() => [] as string[]);
      return names.map((n) => prefix + n);
    },
    async move(from, to) {
      await mkdir(dirname(abs(to)), { recursive: true });
      await fsRename(abs(from), abs(to));
    },
    async remove(pathname) {
      await rm(abs(pathname), { force: true });
    },
  };
}

function store(): Store | null {
  const token = env('BLOB_READ_WRITE_TOKEN');
  if (token) return blobStore(token);
  if (import.meta.env.DEV) return folderStore(resolve('.reviews-dev'));
  return null;
}

export const reviewsEnabled = () => store() !== null;

function requireStore(): Store {
  const s = store();
  if (!s) throw new ReviewError('Reviews aren’t switched on yet. Please email Byron instead.', 503);
  return s;
}

export class ReviewError extends Error {
  constructor(message: string, readonly status = 400) {
    super(message);
  }
}

// ─── Photos ──────────────────────────────────────────────────────────────────

/** Image type from the file's first bytes, so a renamed file can't pass as a photo. */
export function sniffImage(bytes: Uint8Array): 'image/jpeg' | 'image/png' | 'image/webp' | null {
  const ascii = (from: number, to: number) => String.fromCharCode(...bytes.subarray(from, to));
  if (bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) return 'image/jpeg';
  if (bytes[0] === 0x89 && ascii(1, 4) === 'PNG') return 'image/png';
  if (ascii(0, 4) === 'RIFF' && ascii(8, 12) === 'WEBP') return 'image/webp';
  return null;
}

export async function readPhoto(id: string, state: State): Promise<{ bytes: Buffer; type: string } | null> {
  if (!isReviewId(id)) return null;
  const bytes = await requireStore().read(paths.photo(state, id));
  const type = bytes && sniffImage(bytes);
  return bytes && type ? { bytes, type } : null;
}

// ─── Submit ──────────────────────────────────────────────────────────────────

const text = (form: FormData, key: string) => String(form.get(key) ?? '').replace(/\r\n/g, '\n').trim();
const oneLine = (s: string) => s.replace(/\s+/g, ' ');

/** Validates a /review form post and saves it as pending. Throws ReviewError with a message for the visitor. */
export async function submitReview(form: FormData): Promise<void> {
  const name = oneLine(text(form, 'name'));
  const role = oneLine(text(form, 'role'));
  const relationship = text(form, 'relationship');
  const comment = text(form, 'comment').replace(/\n{3,}/g, '\n\n');
  const email = text(form, 'email');

  if (name.length < 2 || name.length > LIMITS.name) throw new ReviewError(`Please enter your name (up to ${LIMITS.name} characters).`);
  if (role.length > LIMITS.role) throw new ReviewError(`Please keep your role under ${LIMITS.role} characters.`);
  if (!(RELATIONSHIPS as readonly string[]).includes(relationship)) throw new ReviewError('Please choose how you know Byron.');
  if (comment.length < LIMITS.commentMin) throw new ReviewError(`Please write at least ${LIMITS.commentMin} characters.`);
  if (comment.length > LIMITS.comment) throw new ReviewError(`Please keep your review under ${LIMITS.comment} characters.`);
  if (email && (email.length > LIMITS.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) throw new ReviewError('That email address doesn’t look right.');
  if (form.get('consent') !== 'yes') throw new ReviewError('Please tick the box to let Byron show your review.');

  let photo: Buffer | null = null;
  const file = form.get('photo');
  if (file instanceof File && file.size > 0) {
    if (file.size > LIMITS.photoBytes) throw new ReviewError('That photo is too large. Please choose one under 1.5 MB.');
    photo = Buffer.from(await file.arrayBuffer());
    if (!sniffImage(photo)) throw new ReviewError('Please choose a JPEG, PNG or WebP photo.');
  }

  const s = requireStore();
  if ((await s.list('reviews/pending/')).length >= LIMITS.pending) {
    throw new ReviewError('Too many reviews are waiting right now. Please try again later, or email Byron.', 429);
  }

  const id = randomUUID();
  if (photo) await s.put(paths.photo('pending', id), photo, sniffImage(photo)!);
  const review: PendingReview = { id, name, role, relationship, comment, email, hasPhoto: !!photo, createdAt: new Date().toISOString() };
  await s.put(paths.review('pending', id), JSON.stringify(review), 'application/json');
}

// ─── Read and moderate ───────────────────────────────────────────────────────

/** Approved reviews, oldest first so the list reads in the order they arrived. */
export async function listReviews(state: 'approved'): Promise<Review[]>;
/** Pending reviews, newest first. */
export async function listReviews(state: 'pending'): Promise<PendingReview[]>;
export async function listReviews(state: State): Promise<Review[]> {
  const s = store();
  if (!s) return [];
  const names = (await s.list(`reviews/${state}/`)).filter((n) => n.endsWith('.json'));
  const reviews = await Promise.all(
    names.map(async (n) => {
      const raw = await s.read(n);
      try {
        return raw ? (JSON.parse(raw.toString('utf8')) as Review) : null;
      } catch {
        return null;
      }
    }),
  );
  const ok = reviews.filter((r): r is Review => !!r && isReviewId(r.id));
  return state === 'approved'
    ? ok.sort((a, b) => (a.approvedAt ?? '').localeCompare(b.approvedAt ?? ''))
    : ok.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

async function readReview(s: Store, state: State, id: string): Promise<PendingReview> {
  const raw = isReviewId(id) ? await s.read(paths.review(state, id)) : null;
  if (!raw) throw new ReviewError('That review no longer exists.', 404);
  return JSON.parse(raw.toString('utf8'));
}

export async function approveReview(id: string): Promise<void> {
  const s = requireStore();
  const { email: _email, ...review } = await readReview(s, 'pending', id);
  if (review.hasPhoto) await s.move(paths.photo('pending', id), paths.photo('approved', id));
  const approved: Review = { ...review, approvedAt: new Date().toISOString() };
  await s.put(paths.review('approved', id), JSON.stringify(approved), 'application/json');
  await s.remove(paths.review('pending', id));
}

/** Deletes a pending review and its photo. */
export async function rejectReview(id: string): Promise<void> {
  const s = requireStore();
  const review = await readReview(s, 'pending', id);
  if (review.hasPhoto) await s.remove(paths.photo('pending', id));
  await s.remove(paths.review('pending', id));
}

/** Takes an approved review off the site and deletes it. */
export async function removeReview(id: string): Promise<void> {
  const s = requireStore();
  const review = await readReview(s, 'approved', id);
  if (review.hasPhoto) await s.remove(paths.photo('approved', id));
  await s.remove(paths.review('approved', id));
}

/** "BM" from "Byron Matsikembare", for reviews without a photo. */
export const initials = (name: string) =>
  name
    .replace(/^(mr|mrs|ms|miss|dr|eng|prof)\.?\s+/i, '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join('');
