// Security headers for every route, kept out of next.config.js so the policy is easy to read and review.
// CommonJS because next.config.js is.

// Why 'unsafe-inline' for scripts and styles: Next's App Router emits inline bootstrap scripts, and the
// components use style attributes and styled-jsx throughout. Nonces would force every page to render on
// each request instead of being served static, which isn't worth it for a marketing site. The policy
// still blocks scripts and frames from any other origin, which is what stops most injected content.
const contentSecurityPolicy = [
  "default-src 'self'",
  // 'wasm-unsafe-eval': the Spline runtime compiles WebAssembly
  "script-src 'self' 'unsafe-inline' 'wasm-unsafe-eval'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://prod.spline.design",
  "font-src 'self' data:",
  // The hero 3D scene is fetched from Spline's CDN
  "connect-src 'self' https://prod.spline.design",
  "media-src 'self' blob:",
  "worker-src 'self' blob:",
  "frame-src 'none'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  'upgrade-insecure-requests',
].join('; ');

const baseHeaders = [
  { key: 'Content-Security-Policy', value: contentSecurityPolicy },
  // One year, without includeSubDomains/preload: those are irreversible-ish decisions for the whole domain
  { key: 'Strict-Transport-Security', value: 'max-age=31536000' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()',
  },
];

// /verify carries a single-use auth code in its URL; it must never be sent on as a Referer
const verifyHeaders = [{ key: 'Referrer-Policy', value: 'no-referrer' }];

const securityHeaders = [
  { source: '/:path*', headers: baseHeaders },
  { source: '/verify', headers: verifyHeaders },
];

module.exports = { securityHeaders, contentSecurityPolicy };
