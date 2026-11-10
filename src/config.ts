// ─── Site-wide config ────────────────────────────────────────────────────────
// EDIT THESE before deploying:
//   1. SITE_URL — your real production URL (canonical, sitemap, OG tags, schema).
//      PORTFOLIO_CONTENT.md recommends registering byronmatsikembare.com.
//   2. WEB3FORMS_ACCESS_KEY — get one free at https://web3forms.com (enter
//      matsikembareb@gmail.com; the key arrives by email). It is designed to be
//      public, so it is safe in this file. While empty, /contact shows the email
//      route instead of a form that would silently drop every message.
//   3. public/og.jpg — a 1200x630 social-share image (JPEG, under 200KB).
//   4. PROFILE.portrait in data.ts — a real headshot.

export const SITE_URL = 'https://byronmatsikembare.com';

/** Web3Forms access key. Leave empty until you have one. See note above. */
export const WEB3FORMS_ACCESS_KEY = 'dcc9967b-14a2-4777-a8a5-c83a0dc9892d';
export const CONTACT_FORM_ENDPOINT = 'https://api.web3forms.com/submit';

export const SITE = {
  title: 'Byron Matsikembare – Python Full-Stack Developer, Harare',
  shortTitle: 'Byron Matsikembare',
  description:
    'Byron Matsikembare is a Python full-stack developer and Computer Science student at HIT, building Flask, Django and React web apps in Harare, Zimbabwe.',
  ogImage: '/og.jpg',
  locale: 'en',
  keywords:
    'Byron Matsikembare, Python developer Harare, Python full-stack developer, Flask developer Zimbabwe, Django developer, React developer Harare, Harare Institute of Technology',
};
