# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Marketing/waitlist landing page for **Keystone**, a companion mobile app (deep-link scheme `keystone://`). This repo is the public website only — the mobile app lives elsewhere. The site's job is to collect waitlist emails, explain the product, and link out to the Discord community.

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build — also the source of truth for type errors
npm run start    # Serve the production build
npm run lint     # ESLint (extends "next")
```

There is no test suite configured.

## Architecture

Next.js 15 App Router, single locale, mostly client components (`'use client'`). Almost everything renders on `/` (`app/page.tsx`) as a stack of section components imported from `components/`, in this order: `Hero → ProblemAgitation → HowItWorks → Features → AboutFounder → Waitlist → Community → Pricing → FAQ`. `Testimonial` exists but is currently commented out of the page. `app/layout.tsx` wraps every route with the fixed `Header` and `Footer` plus Vercel `Analytics`.

Other routes are minimal, standalone pages: `app/privacy-policy`, `app/terms`, and `app/verify` (handles Supabase email-confirmation redirects and attempts to deep-link back into the mobile app via `keystone://...`, falling back to the marketing site after a timeout).

**Waitlist signup flow**: `components/WaitlistForm.tsx` (react-hook-form + zod validation) posts to `app/api/waitlist/route.ts`, which validates the email again with zod, adds the contact to a Resend audience, and sends a welcome email via Resend. The Resend audience ID is hardcoded in that route. Required env var: `RESEND_API_KEY`.

**Supabase**: `app/api/supabase.ts` exports a browser client (`createBrowserClient` from `@supabase/ssr`) used only by `app/verify/page.tsx` to exchange the auth callback hash for a session. Required env vars: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`.

## Styling conventions (as the code actually is, not as configured)

Tailwind is configured (`tailwind.config.mjs`, scanning `app/`, `components/`, `sections/`, `lib/`) and `app/globals.css` loads Tailwind's layers, but in practice most section components use **inline `style={{}}` objects** with `clamp()` for responsive sizing, plus scoped `<style jsx>` blocks for hover states and breakpoint overrides. When touching an existing component, match its existing pattern (inline styles + styled-jsx) rather than converting to Tailwind classes mid-file — the two approaches are mixed across the codebase and consistency within a single component matters more than migrating it.

Theme colors are duplicated in two places and must be kept in sync if changed: CSS custom properties in `app/globals.css` (`--background`, `--accent`, etc., used inline as `var(--accent)`) and `tailwind.config.mjs` `theme.extend.colors` (used for Tailwind utility classes like `bg-background`, `text-white`). Primary accent is `#D4DE95`, background is `#2A2A2A`/`#2B2B2B`.

Scroll-triggered fade-in animations use the `animate-on-scroll` / `animate-in` CSS classes (`app/globals.css`) combined with an `IntersectionObserver` set up in `app/page.tsx`; new sections added to the homepage should follow this same pattern if they need entrance animation.

## Notes

- `.expo/` at the repo root is stray/unrelated to this Next.js project — not part of the build.
- No CI config, no automated tests currently in this repo.
