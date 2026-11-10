// Blog content collection. Schema from WEBSITE_VISION.md §4, plus two optional fields:
//   project — slug of a related project, so every post can link to one (content kit rule)
//   queue   — order of unwritten drafts in the "Coming up" list on /blog
import { defineCollection, z } from 'astro:content';

export const CATEGORIES = ['python', 'build-log', 'career', 'community'] as const;

const blog = defineCollection({
  type: 'content',
  schema: z
    .object({
      title: z.string(),
      /** <title> tag when the visible title is longer than 60 characters. */
      seoTitle: z.string().max(60, 'Title tags must be 60 characters or fewer').optional(),
      description: z.string().max(155, 'Meta descriptions must be 155 characters or fewer'),
      date: z.coerce.date().optional(),
      updated: z.coerce.date().optional(),
      category: z.enum(CATEGORIES),
      tags: z.array(z.string()).default([]),
      cover: z.string().optional(),
      coverAlt: z.string().optional(),
      coverWidth: z.number().optional(),
      coverHeight: z.number().optional(),
      readingTime: z.number().optional(),
      source: z.enum(['blog', 'linkedin']).default('blog'),
      linkedinUrl: z.string().url().optional(),
      linkedinEmbed: z.string().url().optional(),
      project: z.string().optional(),
      queue: z.number().optional(),
      draft: z.boolean().default(false),
    })
    .refine((d) => d.draft || d.date, { message: 'Published posts need a date', path: ['date'] })
    .refine((d) => !d.cover || d.coverAlt, { message: 'A cover image needs coverAlt text', path: ['coverAlt'] }),
});

export const collections = { blog };
