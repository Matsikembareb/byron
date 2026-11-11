// Tells Bing, and through IndexNow also Yandex, Seznam and Naver, about pages straight away
// (Google doesn't take IndexNow: use Search Console's "Request indexing" there).
//   npm run indexnow                    every URL in the live sitemap
//   npm run indexnow -- /blog/some-post  just these paths
// The key file public/c731345184dd5bfd98c05fefa2853dd4.txt proves the site is ours; keep it published.
const SITE = 'https://byronmatsikembare.com';
const KEY = 'c731345184dd5bfd98c05fefa2853dd4';

const paths = process.argv.slice(2);
const urls = paths.length
  ? paths.map((p) => new URL(p, SITE).href)
  : [...(await (await fetch(`${SITE}/sitemap-0.xml`)).text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: new URL(SITE).host, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList: urls }),
});
console.log(`IndexNow: ${res.status} ${res.statusText || ''} for ${urls.length} URL(s)`);
if (!res.ok) process.exitCode = 1;
