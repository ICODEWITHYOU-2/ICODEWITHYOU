# icodewithyou

Marketing site for icodewithyou — coding and robotics classes for kids. Built with Next.js (App Router, TypeScript), Tailwind CSS, and Framer Motion, exported as static HTML for Cloudflare Pages. No CMS, no database, no auth, no server at runtime — every piece of copy lives in a typed file under `/content`, and the contact form posts client-side to Formspree.

## Running it locally

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Open http://localhost:3000. The dev server hot-reloads on save.

Before deploying (or opening a PR), these should all pass clean:

```bash
npm run lint
npm run format:check
npm run build
```

`npm run format` applies Prettier if `format:check` fails.

## Where content lives

Every page reads from typed arrays in `/content` — there's no copy hard-coded in components except section headings and a handful of one-off lines (hero lead paragraph, founder story paragraphs, etc.), which are marked with `[bracketed placeholders]` directly in the page files (`app/page.tsx`, `app/courses/page.tsx`, `app/dsa-guide/page.tsx`).

| File                      | Powers                                                                                            |
| ------------------------- | ------------------------------------------------------------------------------------------------- |
| `content/site.ts`         | Site name, tagline, contact details, social links, hero trust-strip stats, founder bios           |
| `content/awards.ts`       | The `/awards` grid, its filter chips, and every stat number on that page and the home page teaser |
| `content/courses.ts`      | The `/courses` finder cards and the interest dropdown on `/contact`                               |
| `content/testimonials.ts` | The `/testimonials` masonry wall                                                                  |
| `content/gallery.ts`      | The `/gallery` grid tiles and lightbox captions                                                   |
| `content/faq.ts`          | The FAQ accordion on `/contact`                                                                   |

`Fill In Content.html` in the project root is a standalone form (open it directly in a browser, not part of the built site) that walks through every placeholder across these files — fill it in, export your answers, and hand them back to have the content files updated.

### Adding a new award

Open `content/awards.ts` and append one object to the `awards` array:

```ts
{
  id: "award-7",
  who: "student", // "student" or "mine"
  name: "[Student name]",
  category: "Coding", // "Coding" | "Robotics" | "Math" | "Science"
  year: 2027,
  placement: "gold", // "gold" | "silver" | "bronze" | "merit"
  placeLabel: "1st Place",
  competition: "[Competition name]",
  organiser: "[Organiser name]",
  description: "[What they built or solved.]",
}
```

That's it — the stat tiles, the Whose/Category/Year filter chips, and the grid on `/awards` (plus the teaser on `/`) all derive from this array. Nothing else needs to change.

### Adding a new course

Open `content/courses.ts` and append one object to the `courses` array, following the `Course` type at the top of the file. It'll immediately show up in the `/courses` finder and the course dropdown on `/contact`.

## Environment variable

`components/TrialForm.tsx` posts to [Formspree](https://formspree.io). Copy `.env.example` to `.env.local` and set:

```
NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/your-form-id
```

Without it, the form still validates client-side but shows the error state on submit (nowhere to send it) — expected until a real endpoint is set. On Cloudflare Pages, set this same variable in the project's build settings (see below).

## Deploying to Cloudflare Pages

1. Push this repo to GitHub.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**, pick this repo.
3. Build settings:
   - Framework preset: **Next.js (Static HTML Export)**
   - Build command: `npm run build`
   - Build output directory: `out`
4. Add the `NEXT_PUBLIC_FORM_ENDPOINT` environment variable under **Settings → Environment variables** with your real Formspree endpoint, for both Production and Preview.
5. Deploy. Every push to the connected branch redeploys automatically.

The site is a static export (`output: "export"` in `next.config.ts`) — there's no Next.js server involved at runtime, so any static host works, not just Cloudflare.

## Logos, favicon, OG image

`logo-horizontal.png.jpg` in the project root is the original source file — it contains two logo lockups side by side (a circular badge and a horizontal wordmark), split into `public/images/logo-horizontal.png` (header), `public/images/logo-badge.png` (footer), and `public/images/logo-mark.png` (the badge's inner circle only, used to generate the favicon and Apple touch icon since the full text ring isn't legible at that size). `app/favicon.ico`, `app/apple-icon.png`, and `public/og-image.png` are all generated from these — regenerate them from new source art rather than hand-editing the PNGs if you get updated logo files.

## The robot mascot

`components/Robot.tsx` is a hand-built inline SVG (not an imported asset), so its animations — cursor-tracking pupils, the periodic wave, the bobbing float — hook directly into refs and the Web Animations API. It respects `prefers-reduced-motion` and disables cursor tracking and waving when set.

## Stack notes

- **Tailwind v3** (not v4) — design tokens live in `tailwind.config.ts` as named colors (`navy`, `sky`, `gold`, etc.) rather than Tailwind v4's CSS-first `@theme` config.
- **Fonts** — Nunito (headings/wordmark), Inter (body), JetBrains Mono (code chips), loaded via `next/font/google` in `app/layout.tsx`.
- No dark mode, by design.
