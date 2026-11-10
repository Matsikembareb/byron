// Blog helpers shared by the homepage, /blog, post pages and the RSS feed.
import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;

export const CATEGORY_META: Record<BlogPost['data']['category'], { label: string; glyph: string }> = {
  python: { label: 'Python', glyph: '{ }' },
  'build-log': { label: 'Build log', glyph: '</>' },
  career: { label: 'Career', glyph: '→' },
  community: { label: 'Community', glyph: '“ ”' },
};

/** Published posts, newest first. Drafts never reach a page, the feed or the sitemap. */
export async function getPublishedPosts(): Promise<BlogPost[]> {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((a, b) => (b.data.date?.getTime() ?? 0) - (a.data.date?.getTime() ?? 0));
}

/** Unwritten drafts in their planned order. */
export async function getUpcoming(limit = 2): Promise<BlogPost[]> {
  const drafts = await getCollection('blog', ({ data }) => data.draft);
  return drafts.sort((a, b) => (a.data.queue ?? 99) - (b.data.queue ?? 99)).slice(0, limit);
}

/** Minutes to read: frontmatter wins, else ~200 words a minute. */
export function readingMinutes(post: BlogPost): number {
  if (post.data.readingTime) return post.data.readingTime;
  const words = post.body.replace(/```[\s\S]*?```/g, ' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function formatDate(d?: Date): string {
  return d ? d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : '';
}

/** "9 NOV 2026 · PYTHON · 4 MIN" style label. */
export function postLabel(post: BlogPost, withDate = true): string {
  const parts = [CATEGORY_META[post.data.category].label, `${readingMinutes(post)} min`];
  if (withDate && post.data.date) parts.unshift(formatDate(post.data.date));
  return parts.join(' · ');
}
