# Full SEO Audit — dynoweb.app

**Audited domain:** `dynoweb.app` → 307 → `https://www.dynoweb.app/`
**Audit date:** 2026-05-23
**Business type detected:** SaaS / vertical Shopify app (B2B, non-local)
**Pages crawled:** 5 live (`/`, `/use-cases`, `/help`, `/contact-us`, `/privacy-policy`) + 3 expected-but-404 (`/pricing`, `/about`, `/features`)
**Stack detected:** Next.js (App Router, RSC) on Vercel CDN

---

## Executive Summary

### SEO Health Score: **47 / 100**

| Category | Weight | Raw | Weighted |
|---|---:|---:|---:|
| Technical SEO | 22% | 35 | 7.7 |
| Content Quality | 23% | 65 | 14.95 |
| On-Page SEO | 20% | 55 | 11.0 |
| Schema / Structured Data | 10% | 0 | 0.0 |
| Performance (CWV — lab estimate) | 10% | 75 | 7.5 |
| AI Search Readiness | 10% | 30 | 3.0 |
| Images | 5% | 65 | 3.25 |
| **Total** | **100%** |  | **~47** |

CWV is a lab estimate from inspection of asset count, CDN, preloads, and TTFB — not field data. Run PageSpeed Insights or wire up Search Console/CrUX for an authoritative number.

### Top 5 Critical Issues
1. **`robots.txt` returns HTTP 404** — search engines have no crawl guidance and no sitemap reference.
2. **`sitemap.xml` returns HTTP 404** — there is no URL-discovery surface for Google, Bing, or AI crawlers.
3. **Zero structured data (JSON-LD) anywhere on the site** — no `SoftwareApplication`, `Organization`, `FAQPage`, `BreadcrumbList`, or `Product` schema, even though the homepage contains an FAQ block and the product is a clear `SoftwareApplication`/`MobileApplication` listed on the Shopify App Store.
4. **Marketing content is rendered client-side via React Server Components payload** — only ~5 occurrences of marketing phrases were found in the 147 KB raw HTML for the homepage. Search engines that render JS will see it; AI crawlers (ChatGPT scraper, Perplexity, Claude bot) that do *not* execute JS will see only the page chrome.
5. **No canonical `<link rel="canonical">` on any audited page** — leaves the site exposed to duplicate-URL signals (apex vs www, query params, trailing slashes, future utm tracking links).

### Top 5 Quick Wins
1. Add a minimal `app/robots.ts` and `app/sitemap.ts` (Next.js 13+ Metadata API) — both can ship in one PR; immediately fixes the two 404s above.
2. Add a single `<script type="application/ld+json">` block in `app/layout.tsx` (or per-page) containing `SoftwareApplication` + `Organization` + `WebSite` — high-leverage rich-result eligibility for one afternoon of work.
3. Add per-page `metadata.title` / `metadata.description` for `/contact-us` and `/privacy-policy` (currently both fall back to the default homepage title/description).
4. Add `metadata.openGraph` and `metadata.twitter` blocks with a hero image — your CTAs go to Shopify App Store, so social shares need to look credible.
5. Decide whether `/pricing` should be a real route or a same-page anchor — right now `/pricing` is a 404 even though the homepage has a Pricing section. If you keep it as an anchor, make sure no external link or App Store profile points to `/pricing`.

---

## Technical SEO

### Crawlability
- `https://dynoweb.app/` → **307 redirect** to `https://www.dynoweb.app/`. Single hop, fast (~360 ms). Consistent canonical host. ✓
- `robots.txt`: **HTTP 404** (Next.js notFound fallback served). ✗ — Critical
- `sitemap.xml`: **HTTP 404**. ✗ — Critical
- `sitemap_index.xml`: HTTP 404. ✗
- `llms.txt`: HTTP 404. ✗ (relevant for AI surfaces)
- `.well-known/security.txt`: HTTP 404. Low priority but a free trust signal.

Because `robots.txt` does not exist, crawlers default to "allow all". That is permissive but means:
- No `Sitemap:` directive for discovery.
- No `Disallow:` for `/_next/`, `/api/`, query-string variants, etc.
- Bots cannot find pages that aren't internally linked from the home page (Pricing, FAQ are sections, not URLs).

### Indexability
- No `<meta name="robots" content="noindex">` on `/`, `/use-cases`, `/help`, `/contact-us`, or `/privacy-policy`. ✓
- True 404 routes (`/pricing`, `/about`, `/features`) correctly return HTTP 404 *and* render the Next.js notFound page with `noindex`. ✓
- The duplicate `<title>` tag observed in raw HTML (one is `404: This page could not be found.`, the other is the real page title) is a Next.js Metadata API artifact from the notFound template existing alongside the page's metadata. Browsers honour the last `<title>`, but it's visually noisy and confusing to crawler debuggers. Suppress the notFound title from leaking into successful renders.

### Security headers
Only these are sent from `https://www.dynoweb.app/`:
- `Strict-Transport-Security: max-age=63072000` ✓ (but missing `includeSubDomains; preload`)
- `Server: Vercel`
- `Cache-Control: public, max-age=0, must-revalidate`
- `Access-Control-Allow-Origin: *`

Missing:
- `Content-Security-Policy`
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY` (or CSP frame-ancestors)
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy`
- `Cross-Origin-Opener-Policy` / `Cross-Origin-Resource-Policy`

These don't directly move rankings, but several are part of Lighthouse's *Best Practices* score and harden the app inside Shopify's iframe sandbox.

### Core Web Vitals — lab estimate
No field data available without Search Console + CrUX wired up. Static-asset inspection shows:
- **TTFB**: ~360 ms over residential connection on a Vercel cache HIT — good.
- **LCP candidates**: `/logo.png` and `/VisitorTracking.png` are preloaded as images. ✓
- **Font loading**: 2 woff2 fonts preloaded with `crossorigin`. ✓
- **JS payload**: 9+ async chunks (`806bdb8e4a6a9b95.js`, `a8caf86c79dc84cd.js`, `aee6c7720838f8a2.js`, turbopack runtime, plus 5 more streamed). React Server Components + Turbopack. Hydration is the most likely INP risk; verify with PSI.
- **CLS risk**: explicit `width`/`height` on the preloaded images is not visible in the raw HTML — confirm `next/image` is rendering with explicit dimensions to avoid layout shift.
- **No third-party analytics / chat widgets** were detected in the homepage HTML.

**Action:** generate a PSI report (`https://pagespeed.web.dev/?url=https%3A%2F%2Fwww.dynoweb.app%2F`) and paste the field-data section into a follow-up.

---

## Content Quality

| URL | Title | Description present | Word-count signal | H1 | Verdict |
|---|---|---|---|---|---|
| `/` | DynoWeb - Shopify Analytics Extension | ✓ generic | High (full landing copy) | "Stop guessing. See exactly what to fix." | ✓ |
| `/use-cases` | Use Cases \| DynoWeb | ✓ page-specific | High | 1× H1 | ✓ |
| `/help` | Help Center \| DynoWeb Help | ✓ page-specific | High | 1× H1 | ✓ (note: "DynoWeb" appears twice in title) |
| `/contact-us` | DynoWeb - Shopify Analytics Extension | ✗ default fallback | Moderate | **0** H1 | ✗ |
| `/privacy-policy` | DynoWeb - Shopify Analytics Extension | ✗ default fallback | Moderate | 1× H1 | ✗ |

### E-E-A-T
- **Experience/Expertise**: Hero copy is direct and specific ("CTA contrast too low — costing ~18% of checkout taps. Increase weight & size. assets/theme.css …"). Demonstrates first-hand product knowledge. ✓
- **Authority**: No founder bio, no team page, no `/about`, no published case studies, no customer quotes with names + store URLs. ✗
- **Trust**: Privacy policy exists. Contact page exists. No security disclosure, no Shopify Partner badge in the visible HTML, no review counts pulled from the App Store. ✗

### Thin / duplicate content
- `/contact-us` has no H1 in the rendered HTML and inherits the homepage's title and meta description — Google will likely treat it as a duplicate of `/` for indexing purposes.
- `/privacy-policy` has the same default title/description problem.
- The "Pricing" and "FAQ" sections live as scroll anchors on the homepage rather than as discrete URLs — this concentrates link equity on `/` (fine for early-stage product) but forfeits direct-URL traffic on terms like *"dynoweb pricing"* and *"dynoweb [feature] faq"*.

### Readability
- Hero, "How it works," and FAQ blocks all use short paragraphs and labelled steps. Reading level looks ~Grade 8-9, appropriate for a Shopify merchant audience.

---

## On-Page SEO

### Titles
- `/`: 56 chars — fine, includes product + category.
- `/use-cases`: 21 chars — could be richer ("Shopify CRO Use Cases | DynoWeb").
- `/help`: 31 chars — "DynoWeb" appears twice ("Help Center | DynoWeb **Help**"); drop the trailing word.
- `/contact-us`, `/privacy-policy`: inheriting the default homepage title — fix.

### Meta descriptions
- Homepage: *"Powerful Shopify store analytics and insights extension for admins"* — generic, doesn't match the actual product positioning ("DynoWeb pinpoints where visitors get frustrated and hands your dev the exact fix"). Rewrite to match the hero.
- `/use-cases` and `/help` have unique, specific descriptions. ✓
- `/contact-us` and `/privacy-policy` are inheriting the homepage default. ✗

### Heading structure
- Homepage: 1× H1, 10 H2/H3 (good outline: *Meet DynoWeb*, *How it works*, *Get started*, *Pricing*, *Frequently asked questions*, *Automatic Visitor Tracking*).
- `/contact-us` has **no `<h1>`** in raw HTML. Add one ("Contact DynoWeb" or similar).

### Internal linking
Homepage links to only 4 unique internal URLs: `/`, `/use-cases`, `/help`, `/contact-us`, `/privacy-policy`. Once you ship dedicated URLs for pricing / features / app-store-comparison pages, link to them from the hero or below-fold sections.

### Canonical tags
**None.** Add `metadata.alternates.canonical` in every `page.tsx` (Next.js Metadata API).

### hreflang
Not applicable yet (English-only site, no internationalisation signals). Re-evaluate if you launch other locales.

---

## Schema / Structured Data

**Zero JSON-LD on every audited page.**

Natural fits for this site (in priority order):

1. **`SoftwareApplication`** (or `MobileApplication`) — name, applicationCategory `BusinessApplication`, operatingSystem "Shopify", `offers` (free trial + paid tier), `aggregateRating` if you have App Store reviews, link to `apps.shopify.com/dynoweb`.
2. **`Organization`** — name, url, logo, sameAs (Shopify App Store, Twitter, LinkedIn). Place in `app/layout.tsx`.
3. **`WebSite`** — name, url, potentialAction `SearchAction` (only if you add site search; otherwise skip).
4. **`FAQPage`** — wrap the visible homepage FAQ block. Each Q→A becomes a `Question` with `acceptedAnswer`. High rich-result yield for low effort.
5. **`BreadcrumbList`** on `/use-cases`, `/help`, `/contact-us`, `/privacy-policy`.

`Product` schema is technically valid for an app, but `SoftwareApplication` is the Google-preferred choice for software listings.

---

## Performance (CWV) — see Technical SEO above

Lab signals look OK. Verify with PageSpeed Insights. Field data via CrUX or Search Console will be the authoritative answer; recommend wiring those up.

---

## Images

Total `<img>` tags on homepage: 3. With alt: 2. Without alt: 1 (the logo `<img src="/logo.png">` — the second visual is preloaded as a background or via `next/image`).

- The `next/image` preloads `/logo.png` and `/VisitorTracking.png` — good for LCP.
- Use descriptive alt text on the logo: `alt="DynoWeb logo"` (or empty `alt=""` if purely decorative *and* there's nearby text identifying the brand).
- The product hero `/VisitorTracking.png` should have alt text describing what's visible (e.g., *"DynoWeb dashboard showing CTA contrast issue with code diff"*) — useful for image SERPs and for AI surfaces that index alt text as visible content.
- No `srcset` or `<picture>` was visible in the raw HTML for full-resolution images — confirm `next/image` is emitting responsive variants for mobile.
- Consider adding an OG image (1200×630) for social sharing; currently there are no `og:image` tags.

---

## AI Search Readiness (GEO)

| Signal | Status | Notes |
|---|---|---|
| AI crawlers allowed (GPTBot, PerplexityBot, ClaudeBot, Googlebot) | ✓ all return 200 | No `robots.txt` to gate them; implicit allow |
| `llms.txt` published | ✗ 404 | Add at root to summarise product + key URLs |
| Content readable without JS | ✗ | Marketing copy lives in RSC payload; non-JS bots see chrome only |
| `SoftwareApplication` / `Organization` JSON-LD | ✗ | Critical for being cited as the canonical entity |
| Author / E-E-A-T signals | Weak | No founder bio, team page, or named case studies |
| FAQ structured as `FAQPage` | ✗ | High-leverage GEO win |
| Brand mention surfaces (review sites, news) | Not measured | Outside this audit's scope |

The single biggest AI-readiness fix is making the marketing copy server-rendered (or at minimum, present in the initial HTML body, not only inside the RSC `__next_f.push` payload). For a Next.js App Router site this usually means rendering content from a server component without dynamic boundaries that defer it.

---

## SXO (Search Experience) — quick read

For the query *"shopify CRO suggestions"* or *"shopify checkout friction app"*, the SERP rewards (a) App Store listings, (b) comparison/alternatives pages, (c) deep tutorials. The DynoWeb landing page currently has none of those formats. Consider:
- A "DynoWeb vs Hotjar / Microsoft Clarity / Lucky Orange" comparison page (the hero copy already positions against Hotjar).
- A "How to find revenue-leaking pages in Shopify" guide that ranks on its own merit and links to the app install.
- A `/case-studies` route with at least one named merchant + before/after metrics.

---

## What was NOT audited (and why)

- **Field CWV / CrUX**: no Search Console or CrUX access available.
- **Backlinks**: no Moz / Bing Webmaster credentials configured. Common Crawl checks not run.
- **Visual / screenshot QA**: Playwright not invoked.
- **Local SEO**: not applicable — this is a B2B SaaS app, not a local business.
- **E-commerce / product feeds**: not applicable — DynoWeb is the seller, not a merchant.

If you want any of these, say the word and I'll spawn the matching agent (`seo-google`, `seo-backlinks`, `seo-visual`) in a follow-up.
