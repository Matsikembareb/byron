// Login for /admin/reviews: one password in the REVIEWS_ADMIN_PASSWORD env var (12+ characters).
// The session cookie holds an HMAC of that password, so changing the password logs everyone out.
import type { AstroCookies } from 'astro';
import { createHash, createHmac, timingSafeEqual } from 'node:crypto';
import { env } from './reviews.ts';

const COOKIE = 'reviews_admin';
const password = () => env('REVIEWS_ADMIN_PASSWORD');
const session = (pw: string) => createHmac('sha256', pw).update('reviews-admin-v1').digest('hex');
const same = (a: string, b: string) =>
  timingSafeEqual(createHash('sha256').update(a).digest(), createHash('sha256').update(b).digest());

export const adminConfigured = () => password().length >= 12;

export function isAdmin(cookies: AstroCookies): boolean {
  const value = cookies.get(COOKIE)?.value;
  return adminConfigured() && !!value && same(value, session(password()));
}

/** Checks the password and, if right, starts a 14-day session. */
export function logIn(cookies: AstroCookies, given: string): boolean {
  if (!adminConfigured() || !same(given, password())) return false;
  cookies.set(COOKIE, session(password()), {
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'strict',
    path: '/',
    maxAge: 60 * 60 * 24 * 14,
  });
  return true;
}

export function logOut(cookies: AstroCookies) {
  cookies.delete(COOKIE, { path: '/' });
}
