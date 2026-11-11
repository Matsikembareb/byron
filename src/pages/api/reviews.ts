// POST /api/reviews: the /review form. Saves the review as pending; nothing goes live until
// Byron approves it at /admin/reviews. Answers JSON to the page's script, and without
// JavaScript redirects back to /review#thanks or /review#failed.
import type { APIRoute } from 'astro';
import { ReviewError, submitReview } from '../../lib/reviews.ts';

export const prerender = false;

const MAX_BODY = 3_000_000;

export const POST: APIRoute = async ({ request, redirect }) => {
  const wantsJson = (request.headers.get('accept') ?? '').includes('application/json');
  const reply = (status: number, error?: string) =>
    wantsJson
      ? new Response(JSON.stringify(error ? { ok: false, error } : { ok: true }), {
          status,
          headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
        })
      : redirect(error ? '/review#failed' : '/review#thanks', 303);

  if (Number(request.headers.get('content-length') ?? 0) > MAX_BODY) {
    return reply(413, 'That’s too much to send. Please use a smaller photo.');
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return reply(400, 'That didn’t arrive properly. Please try again.');
  }

  // Honeypot: people never see this field, bots fill it in. Pretend it worked.
  if (String(form.get('company') ?? '').trim()) return reply(200);

  try {
    await submitReview(form);
    return reply(200);
  } catch (err) {
    if (err instanceof ReviewError) return reply(err.status, err.message);
    console.error('Review submit failed', err);
    return reply(500, 'Something went wrong on my side. Please try again, or email me.');
  }
};
