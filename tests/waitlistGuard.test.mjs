import test from 'node:test';
import assert from 'node:assert/strict';
import {
  clientIp,
  createRateLimiter,
  isCodeRedeemed,
  isCodeUsable,
  isSameOrigin,
  isWithinCooldown,
  normalizeEmail,
  RESEND_COOLDOWN_MS,
} from '../lib/waitlistGuard.ts';

const NOW = Date.UTC(2026, 9, 16, 12, 0, 0);
const headers = (values) => ({ get: (name) => values[name] ?? null });

test('emails that differ only by case or padding are the same person', () => {
  assert.equal(normalizeEmail('  A@Example.COM '), 'a@example.com');
});

test('only requests from our own origin pass', () => {
  assert.equal(isSameOrigin('https://thekeystoneapp.com', 'thekeystoneapp.com'), true);
  assert.equal(isSameOrigin('https://evil.example', 'thekeystoneapp.com'), false);
  assert.equal(isSameOrigin('https://thekeystoneapp.com.evil.example', 'thekeystoneapp.com'), false);
  assert.equal(isSameOrigin(null, 'thekeystoneapp.com'), false);
  assert.equal(isSameOrigin('not a url', 'thekeystoneapp.com'), false);
  assert.equal(isSameOrigin('https://thekeystoneapp.com', null), false);
});

test('the client address comes from the platform header, falling back to the first forwarded hop', () => {
  assert.equal(clientIp(headers({ 'x-real-ip': '1.2.3.4', 'x-forwarded-for': '9.9.9.9' })), '1.2.3.4');
  assert.equal(clientIp(headers({ 'x-forwarded-for': '5.6.7.8, 10.0.0.1' })), '5.6.7.8');
  assert.equal(clientIp(headers({})), 'unknown');
});

test('an email is not re-sent inside the cooldown', () => {
  const justNow = new Date(NOW - 60 * 1000).toISOString();
  const longAgo = new Date(NOW - RESEND_COOLDOWN_MS - 1000).toISOString();
  assert.equal(isWithinCooldown(justNow, NOW), true);
  assert.equal(isWithinCooldown(longAgo, NOW), false);
  assert.equal(isWithinCooldown(null, NOW), false);
  assert.equal(isWithinCooldown('garbage', NOW), false);
});

test('a redeemed code blocks minting another one for the same address', () => {
  const base = { is_active: true, usage_limit: 1, used_count: 0, expires_at: null };
  assert.equal(isCodeRedeemed(base), false);
  assert.equal(isCodeRedeemed({ ...base, used_count: 1 }), true);
});

test('code usability honours active flag, limit and expiry', () => {
  const base = { is_active: true, usage_limit: 1, used_count: 0, expires_at: null };
  assert.equal(isCodeUsable(base, NOW), true);
  assert.equal(isCodeUsable({ ...base, is_active: false }, NOW), false);
  assert.equal(isCodeUsable({ ...base, used_count: 1 }, NOW), false);
  assert.equal(isCodeUsable({ ...base, usage_limit: null, used_count: 50 }, NOW), true);
  assert.equal(isCodeUsable({ ...base, expires_at: new Date(NOW - 1000).toISOString() }, NOW), false);
  assert.equal(isCodeUsable({ ...base, expires_at: new Date(NOW + 1000).toISOString() }, NOW), true);
});

test('the rate limiter allows the limit, reports the wait, then recovers', () => {
  const check = createRateLimiter(2, 60_000);
  assert.equal(check('ip', 0), 0);
  assert.equal(check('ip', 1000), 0);
  assert.equal(check('ip', 2000), 58);
  assert.equal(check('ip', 60_000), 0);
});

test('the rate limiter keeps keys apart and does not count refused calls', () => {
  const check = createRateLimiter(1, 60_000);
  assert.equal(check('a', 0), 0);
  assert.equal(check('b', 0), 0);
  for (let t = 1; t < 30; t += 1) check('a', t * 1000);
  // Refused attempts must not push the reset out
  assert.equal(check('a', 59_000), 1);
  assert.equal(check('a', 60_000), 0);
});
