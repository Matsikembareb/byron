// Renders scripts/og-card.html to public/og.jpg (1200x630, JPEG, kept under 200 KB).
// Usage: npm run og   (needs Chromium + Python with Pillow; set CHROME=/path if needed)
import { spawnSync } from 'node:child_process';
import { existsSync, statSync, mkdtempSync, rmSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { homedir, tmpdir } from 'node:os';

const CHROME = process.env.CHROME ?? `${homedir()}/.cache/ms-playwright/chromium-1248/chrome-linux64/chrome`;
if (!existsSync(CHROME)) { console.error(`Chromium not found at ${CHROME}. Set CHROME=/path/to/chrome.`); process.exit(1); }

const dir = mkdtempSync(join(tmpdir(), 'og-'));
const png = join(dir, 'og.png');
const OUT = resolve('public/og.jpg');
try {
  const shot = spawnSync(CHROME, [
    '--headless=new', '--no-sandbox', '--disable-gpu', '--hide-scrollbars',
    '--window-size=1200,630', '--virtual-time-budget=8000', // wait for Poppins
    `--screenshot=${png}`, `file://${resolve('scripts/og-card.html')}`,
  ], { stdio: 'ignore' });
  if (shot.status !== 0 || !existsSync(png)) throw new Error('Chromium screenshot failed.');
  const jpg = spawnSync('python3', ['-I', '-c',
    'import sys; from PIL import Image; Image.open(sys.argv[1]).convert("RGB").save(sys.argv[2], "JPEG", quality=90, optimize=True, progressive=True, subsampling=0)',
    png, OUT], { stdio: 'inherit' });
  if (jpg.status !== 0) throw new Error('JPEG conversion failed (is Pillow installed?).');
  const kb = Math.round(statSync(OUT).size / 1024);
  console.log(`Wrote ${OUT} (${kb} KB)`);
  if (kb > 200) { console.error('Warning: over 200 KB; some platforms may skip it.'); process.exitCode = 1; }
} finally {
  rmSync(dir, { recursive: true, force: true });
}
