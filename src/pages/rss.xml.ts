// RSS feed of published posts (WEBSITE_VISION.md §4). Drafts are excluded.
import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE } from '../config.ts';
import { getPublishedPosts } from '../lib/blog.ts';

export async function GET(context: APIContext) {
  const posts = await getPublishedPosts();
  return rss({
    title: `${SITE.shortTitle} – Blog`,
    description: 'Notes on Python, Flask, Django and React, and on studying and building software in Zimbabwe.',
    site: context.site!,
    trailingSlash: false, // match the canonical URLs (/blog/post, no slash)
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date!,
      link: `/blog/${post.slug}`,
      categories: [post.data.category, ...post.data.tags],
    })),
    customData: '<language>en</language>',
  });
}
