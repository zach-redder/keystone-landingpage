# Keystone Landing Page

Marketing and waitlist site for **Keystone**, a personal-development mobile app. This repo is the public website only — the mobile app and its backend live in sibling repos ([`keystone-app`](../keystone-app), [`keystone-ai-service`](../keystone-ai-service)).

## Overview

A single-page marketing site (`https://thekeystoneapp.com`) that pitches the product ("Affirm who you are. Question who you're becoming. Find your mean."), collects waitlist emails, links out to a Discord community, and shows placeholder pricing tiers ahead of launch. It also hosts static legal pages, `.well-known` files for universal links, and a `/verify` route that hands Supabase email-confirmation/password-reset callbacks back to the mobile app via the `keystone://` deep-link scheme — forwarding the raw Supabase payload unmodified rather than establishing a session itself, since the mobile app has to be the one to redeem it (see [Architecture](#architecture) in `CLAUDE.md` for why).

## Tech Stack

- **Next.js 15** (App Router), **React 18**, **TypeScript** (strict)
- **Tailwind CSS** (configured, but most components actually use inline styles + `<style jsx>` — see [Styling](#styling))
- **Supabase** (`@supabase/ssr`) — used only for the `/verify` auth-callback handoff
- **Resend** — waitlist signup (contact + welcome email)
- **Spline** — embedded interactive 3D scene in the hero section
- Deployed on **Vercel** (implicit — `vercel` CLI dependency + `@vercel/analytics`, no `vercel.json`)

## Getting Started

### Prerequisites
- Node.js and npm

### Install

```bash
npm install
```

### Configure

Copy `.env.example` to `.env.local` and fill in real values (see [Environment Variables](#environment-variables)).

### Run

```bash
npm run dev      # Start dev server → http://localhost:3000
npm run build    # Production build — also the source of truth for TS type errors
npm run start    # Serve the production build
npm run lint     # ESLint (extends "next")
```

There is no test suite configured.

## Project Structure

```
app/
├── page.tsx                  # Home page — imports and stacks all section components
├── layout.tsx                 # Root layout: Header, Footer, MuteToggle, AudioProvider, Analytics
├── globals.css                 # Global styles, CSS color variables, animation keyframes
├── privacy-policy/page.tsx     # Static privacy policy
├── terms/page.tsx               # Static terms & conditions
├── verify/page.tsx               # Supabase email-confirmation handler → keystone:// deep link
└── api/
    ├── supabase.ts                # Browser Supabase client
    └── waitlist/route.ts          # POST — validates email, adds Resend contact, sends welcome email
components/                    # One component per landing-page section (Hero, Pricing, FAQ, etc.)
context/AudioContext.tsx       # Ambient background-audio provider (localStorage-persisted volume)
hooks/
├── useSound.ts                  # One-off sound-effect hook (button clicks, etc.)
└── useWaitlistSubmit.ts          # Shared waitlist submit/status logic (used by Hero and WaitlistForm)
lib/waitlistSchema.ts          # Shared zod email schema (used by Hero and WaitlistForm)
public/
├── audio/, images/               # Site assets
└── .well-known/                  # apple-app-site-association / assetlinks.json for universal links
```

## Page Sections

Rendered in this order on `/` (`app/page.tsx`): `Hero → ProblemAgitation → HowItWorks → Features → AboutFounder → Waitlist → Community → Pricing → FAQ`. A `Testimonial` component exists but is currently commented out (contains placeholder testimonials, not real ones — don't re-enable without replacing the content).

## Environment Variables

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Resend email API key (waitlist signup + welcome email) |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL (shared with `keystone-app`) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key |

The Resend client throws at init if `RESEND_API_KEY` is missing. See `.env.example`.

## Deployment

No `vercel.json` exists — deployment is dashboard-driven on **Vercel** (inferred from the `vercel` CLI dependency, `@vercel/analytics`, and an auto-generated `vercel/react-server-components-cve-*` remote branch from Vercel's security-patch bot). No CI/CD config in-repo.

## Known Limitations

- **No automated tests** and no CI/CD pipeline.
- **Universal links need real values** — `public/.well-known/apple-app-site-association` and `assetlinks.json` exist but have placeholder Apple Team ID / Android signing-cert values; the custom `keystone://` scheme works regardless.
- `.expo/` at the repo root is stray and unrelated to this Next.js project — now gitignored and untracked (it was previously committed by mistake).
- The `vercel/react-server-components-cve-*` remote branch (Vercel's automated security-patch bot) is stale relative to `master` and shouldn't be merged as-is — `master` is already on a newer `next` version than what that branch would install.
