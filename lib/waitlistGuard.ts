// Abuse guards for /api/waitlist. Pure functions, so they can be tested without a server.
// Each signup mints a free-month code and sends an email, so an unguarded endpoint is a way to farm
// codes and to mail-bomb third parties from the founder's address.

export const MAX_BODY_BYTES = 2048;
// One email per address in this window, however often it is requested
export const RESEND_COOLDOWN_MS = 10 * 60 * 1000;
export const IP_LIMIT = 5;
export const IP_WINDOW_MS = 60 * 60 * 1000;
export const GLOBAL_LIMIT = 200;
export const GLOBAL_WINDOW_MS = 60 * 60 * 1000;

// "A@Example.com " and "a@example.com" are one person
export const normalizeEmail = (email: string): string => email.trim().toLowerCase();

// Browsers always send Origin on a cross-origin POST. A missing or foreign one means the request did not
// come from our own pages. This stops other sites from driving the endpoint through visitors' browsers;
// it can't stop a script that sets the header itself, which is what the rate limits are for.
export const isSameOrigin = (origin: string | null, host: string | null): boolean => {
  if (!origin || !host) return false;
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
};

export const clientIp = (headers: { get(name: string): string | null }): string => {
  // Vercel sets these itself and overwrites anything the client sent
  const real = headers.get('x-real-ip');
  if (real) return real.trim();
  const forwarded = headers.get('x-forwarded-for');
  return forwarded ? forwarded.split(',')[0].trim() : 'unknown';
};

export const isWithinCooldown = (lastSentAt: string | null | undefined, now: number): boolean => {
  if (!lastSentAt) return false;
  const sent = new Date(lastSentAt).getTime();
  return Number.isFinite(sent) && now - sent < RESEND_COOLDOWN_MS;
};

export interface CodeState {
  is_active: boolean;
  usage_limit: number | null;
  used_count: number;
  expires_at: string | null;
}

export const isCodeRedeemed = (code: CodeState): boolean => code.used_count > 0;

export const isCodeUsable = (code: CodeState, now: number): boolean =>
  code.is_active &&
  (code.usage_limit === null || code.used_count < code.usage_limit) &&
  (!code.expires_at || new Date(code.expires_at).getTime() > now);

// In-memory sliding window. On serverless this is per warm instance, so it blunts casual abuse but is
// not a hard limit; a Vercel Firewall rate-limit rule on this path is the durable layer.
export const createRateLimiter = (limit: number, windowMs: number) => {
  const hits = new Map<string, number[]>();

  return (key: string, now: number = Date.now()): number => {
    const recent = (hits.get(key) ?? []).filter((at) => now - at < windowMs);
    if (recent.length >= limit) {
      hits.set(key, recent);
      return Math.max(1, Math.ceil((windowMs - (now - recent[0])) / 1000));
    }
    recent.push(now);
    hits.set(key, recent);

    // Keep the map from growing without bound across a long-lived instance
    if (hits.size > 5000) {
      for (const [entryKey, entryHits] of hits) {
        if (entryHits.every((at) => now - at >= windowMs)) hits.delete(entryKey);
      }
    }
    return 0;
  };
};
