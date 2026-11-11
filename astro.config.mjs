// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { readdirSync, readFileSync } from 'node:fs';
import { SITE_URL } from './src/config.ts';

/**
 * @astrojs/vercel 7 (the last version for Astro 4) only knows Node 18 and 20, and labels any
 * newer build machine's functions "nodejs18.x", a runtime Vercel has retired. After it writes its
 * output, set the functions to the Node version doing the build: on Vercel, the project's setting.
 * @param {import('astro').AstroIntegration} adapter
 */
function withBuildNodeRuntime(adapter) {
  const done = adapter.hooks['astro:build:done'];
  adapter.hooks['astro:build:done'] = async (options) => {
    await done?.(options);
    const runtime = `nodejs${process.versions.node.split('.')[0]}.x`;
    const functions = new URL('../functions/', options.dir); // dir is .vercel/output/static/
    for (const fn of await readdir(functions).catch(() => [])) {
      const file = new URL(`${fn}/.vc-config.json`, functions);
      const config = JSON.parse(await readFile(file, 'utf8').catch(() => 'null'));
      if (config?.runtime && config.runtime !== runtime) {
        await writeFile(file, JSON.stringify({ ...config, runtime }, null, '\t'));
        options.logger.info(`${fn}: runtime set to ${runtime}`);
      }
    }
  };
  return adapter;
}

/** Sitemap lastmod: each published post's `updated` or `date`; the homepage and /blog get the newest. */
function postDates() {
  const dir = new URL('./src/content/blog/', import.meta.url);
  /** @type {Record<string, string>} */
  const dates = {};
  for (const file of readdirSync(dir).filter((f) => f.endsWith('.md'))) {
    const front = readFileSync(new URL(file, dir), 'utf8').split('---')[1] ?? '';
    if (/^draft:\s*true/m.test(front)) continue;
    const date = (front.match(/^updated:\s*(\S+)/m) ?? front.match(/^date:\s*(\S+)/m))?.[1];
    if (date) dates[file.replace(/\.md$/, '')] = date;
  }
  return dates;
}
const POST_DATES = postDates();
const NEWEST_POST = Object.values(POST_DATES).sort().at(-1);

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  // Pages are prebuilt as before. The few that opt out with `export const prerender = false`
  // (/references, /admin/reviews and the /api routes behind reviews) run as Vercel functions.
  output: 'hybrid',
  adapter: withBuildNodeRuntime(vercel()),
  // Refuse cross-site form posts to those functions (review submissions and admin actions).
  security: { checkOrigin: true },
  // One address per page: /about, never /about/. Matches the canonical tags; vercel.json
  // redirects the slashed form so Google doesn't see two copies of each page.
  trailingSlash: 'never',
  // /skills and /education are folded into /qualifications by the content kit.
  redirects: {
    '/skills': '/qualifications',
    '/education': '/qualifications',
  },
  // Code blocks in both themes (WEBSITE_VISION.md §4): Shiki emits light colours inline plus
  // --shiki-dark variables, which src/styles/global.css switches to under data-theme="dark".
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
    },
  },
  // Noindexed pages stay out of the sitemap: /cv (print source for public/cv.pdf), the review
  // form and the reviews admin.
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !/\/(cv|review|admin\/reviews)\/?$/.test(page),
      serialize(item) {
        const path = new URL(item.url).pathname.replace(/\/$/, '');
        const date = path.startsWith('/blog/') ? POST_DATES[path.slice(6)] : path === '' || path === '/blog' ? NEWEST_POST : undefined;
        if (date) item.lastmod = new Date(date).toISOString();
        return item;
      },
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
