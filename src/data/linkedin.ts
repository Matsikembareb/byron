// LinkedIn post embeds (WEBSITE_VISION.md §5, Route A).
// On LinkedIn: open a post › ⋯ › Embed this post › copy the iframe `src`, then add an entry:
//   { embed: 'https://www.linkedin.com/embed/feed/update/urn:li:share:XXXX', date: '2026-11-01', title: 'Short label', height: 600 }
// Embeds render at a FIXED 320px width (fits the smallest phone, so the height never has to
// guess at a reflow). `height` = the post's height at 320px + 24px for font differences across
// systems. The height in LinkedIn's own embed code is for 504px and won't match.
// Only posts Byron published himself. Never scrape LinkedIn: it needs a login and its terms forbid it.
export interface LinkedInEmbed {
  embed: string;
  date: string;
  title: string;
  /** Height at the fixed 320px embed width, plus 24px. See the note above. */
  height?: number;
  /** Link to the post itself, for the "View on LinkedIn" fallback. */
  url?: string;
  /** Project slug: the embed also shows on that case study page. */
  project?: string;
}

// From Byron, 10 Nov 2026. Two embed codes were his; the two ugcPost embeds were built from the
// post IDs and checked to load. Heights measured at 320px (508/472/667/667/530) + 24. Dates come from
// the post IDs. Tracking parameters stripped from the URLs. The PricePick completion post is left
// The PricePick post said "countless hours of coding"; Byron is editing it on LinkedIn to match the
// corrected case study (text in LINKEDIN_PROFILE.md §5). Embeds show the live text, so it updates itself.
const EMBED = 'https://www.linkedin.com/embed/feed/update/';
const POST = 'https://www.linkedin.com/posts/byronmatsikembare_';

export const LINKEDIN_POSTS: LinkedInEmbed[] = [
  {
    embed: `${EMBED}urn:li:share:7507724783711723520?collapsed=1`,
    date: '2026-09-21',
    title: 'Flask-Setup: a reusable Flask starter, open to collaborators',
    height: 532,
    url: `${POST}python-flask-backenddevelopment-share-7507724783711723520-TviV`,
    project: 'flask-setup',
  },
  {
    embed: `${EMBED}urn:li:share:7506648149818724352?collapsed=1`,
    date: '2026-09-18',
    title: 'Reflecting on my chapter at Muzukuru Streaming',
    height: 496,
    url: `${POST}reflecting-on-an-incredible-chapter-building-share-7506648149818724352-VqxZ`,
  },
  {
    embed: `${EMBED}urn:li:ugcPost:7467841288017555456?collapsed=1`,
    date: '2026-06-03',
    title: 'Kaspersky NEXT Business Breakfast, hosted by Axis Solutions',
    height: 691,
    url: `${POST}cybersecurity-infosec-threatintelligence-ugcPost-7467841288017555456-hRqY`,
  },
  {
    embed: `${EMBED}urn:li:ugcPost:7336341775042736128?collapsed=1`,
    date: '2025-06-05',
    title: 'Closing a chapter: HIT clubs and student advocacy',
    height: 691,
    url: `${POST}studentadvocacy-mentalhealth-srh-ugcPost-7336341775042736128-6-cW`,
  },
  {
    embed: `${EMBED}urn:li:share:7336339066491125760?collapsed=1`,
    date: '2025-06-05',
    title: 'Celebrating the completion of PricePick',
    height: 554, // 530 at 320px, re-measured after Byron's edit (10 Nov 2026)
    url: `${POST}techinnovation-pricepick-webscraping-share-7336339066491125760-HqHi`,
    project: 'pricepick',
  },
];

export const LINKEDIN_PROFILE = 'https://www.linkedin.com/in/byronmatsikembare';
