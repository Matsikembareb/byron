// GET /api/review-photo/<id>: a reviewer's photo from the private store. Approved photos are
// public and cached; ?pending photos are only shown to a logged-in admin.
import type { APIRoute } from 'astro';
import { isAdmin } from '../../../lib/admin.ts';
import { readPhoto, reviewsEnabled } from '../../../lib/reviews.ts';

export const prerender = false;

export const GET: APIRoute = async ({ params, url, cookies }) => {
  const pending = url.searchParams.has('pending');
  const notFound = () => new Response('Not found', { status: 404, headers: { 'Cache-Control': 'no-store' } });
  if (!reviewsEnabled() || (pending && !isAdmin(cookies))) return notFound();

  const photo = await readPhoto(params.id ?? '', pending ? 'pending' : 'approved');
  if (!photo) return notFound();

  return new Response(new Uint8Array(photo.bytes), {
    headers: {
      'Content-Type': photo.type,
      'X-Content-Type-Options': 'nosniff',
      'Cache-Control': pending ? 'private, no-store' : 'public, max-age=3600, s-maxage=86400',
    },
  });
};
