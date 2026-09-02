# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Marketing/waitlist landing page for **Keystone**, a companion mobile app (deep-link scheme `keystone://`). This repo is the public website only — the mobile app lives in `../keystone-app`, its AI backend in `../keystone-ai-service`. The site's job is to collect waitlist emails, explain the product, and link out to the Discord community.

## Tech Stack

- Next.js 15, App Router, React 18, TypeScript (strict)
- Tailwind CSS (configured; see Styling below for how it's actually used)
- `@supabase/ssr` — auth-callback handling only
- Resend — waitlist signup
- `@splinetool/react-spline` — hero 3D scene
- Deployed on Vercel (implicit, no `vercel.json`)

## Development Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build — also the source of truth for type errors
npm run start    # Serve the production build
npm run lint     # ESLint (extends "next")
```

There is no test suite configured.

## Architecture

Single locale, mostly client components (`'use client'`). Almost everything renders on `/` (`app/page.tsx`) as a stack of section components imported from `components/`, in this order: `Hero → ProblemAgitation → HowItWorks → Features → AboutFounder → Waitlist → Community → Pricing → FAQ`. `Testimonial` exists but is currently commented out of the page — it contains placeholder/fabricated testimonials, so don't re-enable it without replacing the content with real ones. `app/layout.tsx` wraps every route with the fixed `Header` and `Footer` plus Vercel `Analytics`.

Other routes are minimal, standalone pages: `app/privacy-policy`, `app/terms`, and `app/verify`.

**`app/verify/page.tsx`** handles Supabase email-confirmation/password-reset/email-change redirects and deep-links back into the mobile app via `keystone://emailconfirmation`, `keystone://signin`, or `keystone://resetpassword` (falling back to the marketing site after ~2.5s if the app isn't installed). **It deliberately does NOT call `exchangeCodeForSession`/`verifyOtp` itself** — it reads `type` (from the query string or hash, checking both since Supabase can use either shape) to pick the target path, falling back to `emailconfirmation` when only a bare `code` is present with no `type` (the app's `flowType: 'pkce'` means Supabase's confirmation/recovery links normally arrive as `?code=...` with no `type` at all — `type` is only present on older token_hash/OTP-style links), then forwards the *entire* incoming query string and hash, unmodified, onto the `keystone://` URI. This matters because a Supabase PKCE code is single-use and tied to whichever client's local storage holds the matching verifier — that's the mobile app (it initiated the `resetPasswordForEmail`/`signUp` call), not this browser page. If this page consumed the code first, the app's own later exchange attempt would fail. If you're asked to "fix" this page to establish a session here, don't — the mobile app (`keystone-app/app/_layout.js`) is the one that completes the exchange, using whichever payload shape Supabase actually sent (`token_hash`+`type` via `verifyOtp`, `access_token`/`refresh_token` via `setSession`, or a `code` via `exchangeCodeForSession`).

**Waitlist signup flow**: `components/WaitlistForm.tsx` (react-hook-form) and `components/Hero.tsx` (plain controlled input) are two separate visual layouts that both need to submit a waitlist email, so they share logic instead of markup: `lib/waitlistSchema.ts` exports the one zod email schema both use, and `hooks/useWaitlistSubmit.ts` exports the one hook that does the actual `fetch('/api/waitlist', ...)` call and status/message state. If the API contract or validation rules change, update those two shared files — don't add new validation logic directly inside either component. `app/api/waitlist/route.ts` validates the email again server-side with zod, adds the contact to a Resend audience, and sends a welcome email via Resend. The Resend audience ID is hardcoded in that route. Required env var: `RESEND_API_KEY`.

**Supabase**: `app/api/supabase.ts` exports a browser client (`createBrowserClient` from `@supabase/ssr`) used only by `app/verify/page.tsx` to exchange the auth callback hash for a session. Required env vars: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`. This is the same Supabase project used by `keystone-app` and `keystone-ai-service`.

## Styling conventions (as the code actually is, not as configured)

Tailwind is configured (`tailwind.config.mjs`, content globs cover `app/`, `components/`, `hooks/`, `lib/`) and `app/globals.css` loads Tailwind's layers, but in practice most section components use **inline `style={{}}` objects** with `clamp()` for responsive sizing, plus scoped `<style jsx>` blocks for hover states and breakpoint overrides. When touching an existing component, match its existing pattern (inline styles + styled-jsx) rather than converting to Tailwind classes mid-file — the two approaches are mixed across the codebase and consistency within a single component matters more than migrating it.

Theme colors are duplicated in two places and must be kept in sync if changed: CSS custom properties in `app/globals.css` (`--background`, `--accent`, etc., used inline as `var(--accent)`) and `tailwind.config.mjs` `theme.extend.colors` (used for Tailwind utility classes like `bg-background`, `text-white`). Primary accent is `#D4DE95`, background is `#2A2A2A` — both files now agree on this value; keep them in sync if it changes.

Scroll-triggered fade-in animations use the `animate-on-scroll` / `animate-in` CSS classes (`app/globals.css`) combined with an `IntersectionObserver` set up in `app/page.tsx`; new sections added to the homepage should follow this same pattern if they need entrance animation.

## Environment Variables

`RESEND_API_KEY`, `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`. See `.env.example`. The Resend client uses a non-null assertion on its key, so a missing `RESEND_API_KEY` throws at import time.

## Related Repos

- **`../keystone-app`** — the Expo/React Native mobile app that this site funnels signups toward. Connected via the shared Supabase auth project and the `keystone://` deep-link scheme (`/verify` forwards email-confirmation, email-change, and password-reset payloads to it — see the note on `app/verify/page.tsx` above) — no compile-time or API dependency.
- **`../keystone-ai-service`** — no direct integration from this repo.

## Gotchas / Known Gaps

- **Don't "fix" `app/verify/page.tsx` to call `exchangeCodeForSession`/`verifyOtp` itself** — see the detailed note under Architecture above. That's an intentional design, not an oversight.
- **Universal links need real values** — `public/.well-known/apple-app-site-association` and `assetlinks.json` exist but have placeholder Apple Team ID / Android signing-cert values. `next.config.js` sets the `Content-Type: application/json` header for the `apple-app-site-association` file (it has no extension, so some clients need that header to accept it as JSON).
- `.expo/` at the repo root is stray/unrelated to this Next.js project, and is now gitignored — it was previously committed by mistake; don't re-add it.
- No CI config, no automated tests currently in this repo.
- Pricing tiers in `Pricing.tsx` are display-only — buttons scroll to `#waitlist`, there's no real checkout/payment integration on this site.
- An unmerged `vercel/react-server-components-cve-*` remote branch exists (Vercel's automated security-patch bot) but is stale — it branched off a commit several behind `master` and would revert newer features (the ambient audio system, the current Hero) and downgrade `next` below what `master` already has. Don't merge it as-is; if the underlying CVE still applies, bump `next`/`eslint-config-next` directly instead.
