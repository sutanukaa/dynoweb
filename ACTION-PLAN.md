
# DynoWeb — SEO Action Plan

Prioritised by impact × effort. All paths assume Next.js App Router with the Metadata API.

---

## CRITICAL — ship this week

### 1. Add `robots.txt`
**File:** `app/robots.ts`
```ts
import { MetadataRoute } from 'next';
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/_next/', '/api/'] }],
    sitemap: 'https://www.dynoweb.app/sitemap.xml',
    host: 'https://www.dynoweb.app',
  };
}
```

### 2. Add `sitemap.xml`
**File:** `app/sitemap.ts`
```ts
import { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.dynoweb.app';
  const now = new Date();
  return [
    { url: `${base}/`,                priority: 1.0, lastModified: now, changeFrequency: 'weekly' },
    { url: `${base}/use-cases`,       priority: 0.8, lastModified: now, changeFrequency: 'monthly' },
    { url: `${base}/help`,            priority: 0.7, lastModified: now, changeFrequency: 'monthly' },
    { url: `${base}/contact-us`,      priority: 0.5, lastModified: now, changeFrequency: 'yearly' },
    { url: `${base}/privacy-policy`,  priority: 0.3, lastModified: now, changeFrequency: 'yearly' },
  ];
}
```

### 3. Add `SoftwareApplication` + `Organization` JSON-LD
**File:** `app/layout.tsx` — render a `<script type="application/ld+json">` inside `<head>`.
```ts
const ld = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'DynoWeb',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Shopify',
      url: 'https://www.dynoweb.app',
      sameAs: ['https://apps.shopify.com/dynoweb'],
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, // adjust to real plan
      description: 'AI-powered CRO tool that pinpoints revenue-leaking pages in your Shopify store and hands your dev the exact fix.',
    },
    {
      '@type': 'Organization',
      name: 'DynoWeb',
      url: 'https://www.dynoweb.app',
      logo: 'https://www.dynoweb.app/logo.png',
      sameAs: ['https://apps.shopify.com/dynoweb'],
    },
  ],
};
```
Validate with the [Rich Results Test](https://search.google.com/test/rich-results) after deploy.

### 4. Add per-page `metadata` for `/contact-us` and `/privacy-policy`
Both currently inherit the homepage `<title>` and `<meta description>`. In each `page.tsx`:
```ts
export const metadata = {
  title: 'Contact DynoWeb',
  description: 'Get in touch with the DynoWeb team about installation, billing, or product feedback.',
  alternates: { canonical: 'https://www.dynoweb.app/contact-us' },
};
```
Same shape for `/privacy-policy`. While you're in there, add an `<h1>` to `/contact-us` — currently zero H1s on that page.

### 5. Add canonical link on every page
Set `metadata.alternates.canonical` in each `page.tsx`. Cheap insurance against future utm/query-string duplicate-URL indexing.

---

## HIGH — within 1 week

### 6. Decide what `/pricing`, `/about`, `/features` should be
All three currently 404. Two options:

- **Same-page anchors (current state):** redirect those URLs to `/#pricing`, `/#features` via `next.config.js` `redirects()` so external links don't dead-end.
- **Dedicated routes:** create `app/pricing/page.tsx` etc. Better long-term for ranking on "dynoweb pricing" and for App Store deep-linking. Recommended once you have more than one tier.

### 7. Add Open Graph + Twitter card metadata
The site currently has no `og:image`, `og:title`, `og:description`, `twitter:card`. Without them, Shopify-merchant audiences who paste your link into Slack, WhatsApp, X, or Reddit see no preview.
```ts
// in metadata
openGraph: {
  title: 'DynoWeb — See exactly what to fix in your Shopify store',
  description: '...',
  url: 'https://www.dynoweb.app',
  siteName: 'DynoWeb',
  images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'DynoWeb dashboard' }],
  type: 'website',
},
twitter: { card: 'summary_large_image', title: '...', description: '...', images: ['/og-image.png'] },
```
Design `/og-image.png` at 1200×630.

### 8. Add `FAQPage` JSON-LD to the homepage FAQ
The "Frequently asked questions" section is already visible — wrap it with `FAQPage` schema. Each question becomes a `Question` with `acceptedAnswer`. High rich-result yield, ~1 hour of work.

### 9. Fix the duplicate `<title>` artifact
Next.js is emitting both the `notFound` template title and the real page title into successful renders. Investigate `app/not-found.tsx` and the root layout — likely the `notFound` component is being rendered eagerly in the metadata tree.

### 10. Make marketing copy SSR (not RSC payload only)
The raw HTML for `/` only contains ~5 occurrences of marketing phrases. Most copy lives inside the streamed RSC payload (`__next_f.push`). AI crawlers without JS execution (currently most of them) see only the page chrome. Move hero, value-prop, and FAQ copy out of `'use client'` components so it's emitted into the initial HTML body.

### 11. Add `alt` text to the logo image
Currently 1 of 3 homepage images has no `alt`. The product hero image should have a descriptive alt that doubles as accessibility + GEO ranking signal.

---

## MEDIUM — within 1 month

### 12. Harden security headers
Add to `next.config.js` `headers()`:
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- `X-Frame-Options: SAMEORIGIN` (or CSP `frame-ancestors 'self' https://*.shopify.com` if you embed inside Shopify admin)
- Upgrade HSTS: `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload` and submit to [hstspreload.org](https://hstspreload.org/) once stable.

### 13. Publish `llms.txt`
**File:** `public/llms.txt`
```
# DynoWeb
> AI-powered CRO tool that finds revenue-leaking pages in Shopify stores
> and hands developers the exact file, diff, and projected lift.

## Core docs
- [Home](https://www.dynoweb.app/): product overview
- [Use cases](https://www.dynoweb.app/use-cases): friction, mobile UX, journeys, safer changes
- [Help center](https://www.dynoweb.app/help): setup and product docs
- [Install on Shopify](https://apps.shopify.com/dynoweb)

## Contact
- [Contact us](https://www.dynoweb.app/contact-us)
```

### 14. Rewrite homepage `<meta description>`
Current: *"Powerful Shopify store analytics and insights extension for admins"* (generic).
Suggested: *"DynoWeb watches every tap, scroll, and rage-click in your Shopify store, then hands your dev the exact file, before/after diff, and projected lift. Sub-40 KB tracker, SEO-safe, native Shopify app."*

### 15. Publish at least one named case study
File a `/case-studies` route with one merchant + before/after metric. Demonstrably moves E-E-A-T from "Experience only" to "Expertise + Authority".

### 16. Add a "DynoWeb vs Hotjar / Clarity / Lucky Orange" comparison page
Your hero already positions against Hotjar ("Hotjar shows a heatmap. We give you the fix."). Ship `/compare/hotjar`, `/compare/clarity`, `/compare/lucky-orange`. These pages rank on competitor-brand terms with low effort and convert at high rates because the visitor has high intent.

### 17. Add `BreadcrumbList` JSON-LD to `/use-cases`, `/help`, `/contact-us`, `/privacy-policy`

### 18. Add a manifest + favicon variants
- `apple-touch-icon` (180×180)
- `site.webmanifest`
- `<meta name="theme-color">`
Cheap polish that Lighthouse rewards.

---

## LOW — backlog

- Add `.well-known/security.txt` (trust signal, free).
- Verify `next/image` is emitting explicit `width`/`height` to prevent CLS — confirm with PSI.
- Consider adding a `/changelog` or `/releases` route — both are well-loved by Shopify merchants and create natural internal-link expansion.
- Drop the redundant word "DynoWeb" from `/help`'s title ("Help Center | DynoWeb Help" → "Help Center | DynoWeb").
- Once you ship more locales, add `hreflang` annotations and a localised sitemap per language.
- Wire up Google Search Console + GA4 → re-run this audit with the `seo-google` agent for field CWV, indexation status, and organic traffic enrichment.

---

## Effort estimate

- **Critical (items 1–5):** ~3 hours total — one focused PR.
- **High (items 6–11):** ~1 day total — split into a metadata PR and a refactor PR.
- **Medium (items 12–18):** ~2 days spread over a sprint.

The first PR alone should lift the SEO Health Score from **47 → ~70**.
