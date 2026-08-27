# SEO checklist

The site handles the technical SEO on its own — every page has a unique title/description, `app/sitemap.ts` lists all seven routes, and `app/robots.ts` allows everything and points at the sitemap. The rest is manual and has to happen after the site is deployed to its real domain.

## After you deploy

1. **Verify the domain in Google Search Console** (search.google.com/search-console). Add the property, verify ownership (Cloudflare Pages supports the DNS TXT record method if you're on a custom domain, or use the HTML file/meta tag method for `*.pages.dev`).
2. **Submit the sitemap.** In Search Console, go to Sitemaps and submit `https://yourdomain.com/sitemap.xml`.
3. **Request indexing** for the homepage under URL Inspection, to speed up the first crawl.
4. **Create a Google Business Profile** (business.google.com) for icodewithyou — category "Tutoring service" or "Educational consultant" fits. This is what makes the business show up on Google Maps and in local search, separate from the website itself.
5. **Put the site link in the TikTok bio** for @icodewithyou0 — link the homepage (or a link-in-bio page if you ever add multiple destinations).

## Before you do any of the above

- Replace every `[bracketed placeholder]` in `content/*.ts` and the page files with real copy — a page still showing `[Student name]` shouldn't be indexed. Either finish the content first, or add `noindex` to `app/layout.tsx` metadata and remove it once the copy is real.
- Double check `siteConfig.url` in `content/site.ts` matches the real deployed domain — the sitemap and robots.txt both derive from it.
- Confirm `public/og-image.png` and the favicon look right when you share the link in a chat app (Slack/WhatsApp/iMessage all preview OG images differently — check at least one).

## Ongoing

- Once there's real content (awards, testimonials), Google re-crawls on its own — no action needed beyond keeping `content/*.ts` up to date.
- Backlinks matter more than most on-page tweaks for a small local business — a link from any local school, competition organiser, or parent community page helps more than further metadata work.
