// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { SITE_URL } from './src/config.ts';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  output: 'static',
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
  // /cv is the print source for public/cv.pdf: noindexed and kept out of the sitemap.
  integrations: [tailwind(), sitemap({ filter: (page) => !/\/cv\/?$/.test(page) })],
  build: {
    inlineStylesheets: 'auto',
  },
});
