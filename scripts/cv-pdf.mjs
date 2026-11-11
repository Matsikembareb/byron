// Prints the /cv page to public/cv.pdf (A4, one page).
// Usage: npm run cv   (builds, prints, then rebuilds so the "Download CV" button appears)
// Needs a Chromium. Set CHROME=/path/to/chrome if it isn't the Playwright one below.
import { spawn } from 'node:child_process';
import { existsSync, statSync, readFileSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { createServer } from 'node:http';
import { extname, join, resolve } from 'node:path';
import { homedir } from 'node:os';

const CHROME = process.env.CHROME ?? `${homedir()}/.cache/ms-playwright/chromium-1248/chrome-linux64/chrome`;
const PORT = 4399;
const OUT = resolve('public/cv.pdf');
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

if (!existsSync(CHROME)) {
  console.error(`Chromium not found at ${CHROME}. Set CHROME=/path/to/chrome and run again.`);
  process.exit(1);
}

// Serve the built static files just long enough to print one page. (`astro preview` can't:
// the Vercel adapter doesn't support it. /cv is prebuilt, so the static output is enough.)
const STATIC = resolve('.vercel/output/static');
const TYPES = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp' };
const server = createServer(async (req, res) => {
  const path = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  for (const file of extname(path) ? [path] : [join(path, 'index.html'), `${path}.html`]) {
    const abs = join(STATIC, file);
    if (!abs.startsWith(STATIC)) break;
    try {
      const body = await readFile(abs);
      res.writeHead(200, { 'Content-Type': TYPES[extname(abs)] ?? 'application/octet-stream' }).end(body);
      return;
    } catch {}
  }
  res.writeHead(404).end();
}).listen(PORT);
try {
  let up = false;
  for (let i = 0; i < 50 && !up; i++) {
    try { up = (await fetch(`http://localhost:${PORT}/cv`)).ok; } catch {}
    if (!up) await wait(200);
  }
  if (!up) throw new Error('Preview server did not start.');

  await new Promise((done, fail) => {
    const chrome = spawn(CHROME, [
      '--headless=new', '--no-sandbox', '--disable-gpu', '--no-pdf-header-footer',
      '--virtual-time-budget=8000', // let Poppins load before printing
      `--print-to-pdf=${OUT}`, `http://localhost:${PORT}/cv`,
    ], { stdio: 'ignore' });
    chrome.on('exit', (code) => (code === 0 ? done() : fail(new Error(`Chrome exited with ${code}`))));
  });
  const pages = (readFileSync(OUT, 'latin1').match(/\/Type\s*\/Page\b/g) ?? []).length;
  console.log(`Wrote ${OUT} (${Math.round(statSync(OUT).size / 1024)} KB, ${pages} page${pages === 1 ? '' : 's'})`);
  if (pages !== 1) {
    console.error('Warning: the CV no longer fits on one page. Trim src/data.ts or tighten src/pages/cv.astro.');
    process.exitCode = 1;
  }
} finally {
  server.close();
}
