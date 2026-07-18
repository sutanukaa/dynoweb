# DynoWeb — Marketing Design System & Build Brief

> **Audience:** the designer/agent building the new marketing site. This file is the single source
> of truth for look, motion, and section-by-section structure.
>
> **Scope:** public marketing surfaces only (`dynoweb-landing`). **NOT** the embedded Shopify admin
> app — that stays **Polaris** (`s-*` web components, native Shopify look). Never ship glass,
> brand gradient, or these fonts inside the admin. See `docs/polaris-guidelines.md`.
>
> **Status:** this is a **full replacement** of the current dark theme (`#050505` + Montserrat/Karla
> + accent `#6eb0ff` + `rounded-[2rem]` + `uv-btn` blue-glow). All of that is deprecated. Where this
> file and the live site disagree, this file wins.

---

## 0. How to use this file

Read §1 (thesis) and §2 (product truth) before designing anything. They are the constraints that
make the difference between a site that sells DynoWeb and a site that could sell anything.

- §1–§2 — why the current site fails, and what we're actually allowed to claim
- §3 — the site map: all 48 pages, grouped into 6 archetypes
- §4–§10 — the visual system (color, light, glass, type, screenshots, components)
- §11 — motion, specified in detail
- §12 — **the landing page, section by section** ← the main build target
- §13 — the other five page archetypes
- §14–§15 — accessibility and the ship checklist

---

## 1. The thesis

**The product UI is the artwork. Everything else is a frame around it.**

DynoWeb sells heatmaps, session replay, funnels, and revenue attribution. Those are *visual*
products. The highest-value pixel on any page is a real screenshot of a real heatmap over a real
storefront. Every layout decision serves that shot: get it big, get it sharp, get it early, and
put nothing near it that competes.

This inverts the old system. Glass is not ambience sprayed over the page — it is **chrome**: the
bezel around a product shot, the sticky nav, a stat chip overlapping a screenshot. Three jobs.

### Why the current site reads as AI slop

Name each failure so we don't rebuild it:

| Tell | Why it reads as generated |
|---|---|
| Radial glow behind every section | Ambient light with no source. Nothing is casting it. |
| Glass/translucency on every card | Frosting is a *material*. If everything is frosted, it's grey. |
| Pill buttons (`rounded-full`) everywhere | The default of every AI landing page since 2023. |
| Colored glow under CTAs (`uv-btn`) | Light doesn't leak out of buttons. |
| `rounded-[2rem]` on everything | One radius for a 320px card and a 1200px panel isn't a system. |
| `font-extrabold` on every heading | 800 at display size is shouting. Nothing has hierarchy. |
| Faint grid overlay on the background | Decoration that says "tech" and nothing else. |
| Icon + heading + two lines, ×3 | The shape of having nothing specific to say. |
| "Supercharge / Unlock / Seamlessly / Effortlessly" | Copy with no claim in it. |
| Gradient text on headlines | 2021, and it fails contrast. |

**The swap test, applied to every section:** *could this section appear unchanged on a landing page
for a different product?* If yes, it's decoration. Replace it with a screenshot, a real number, or
a customer's actual words. Apply this ruthlessly — it kills ~40% of a typical SaaS page, and the
page gets better.

### The one-line brief

> White, quiet, dense with real product. Navy structure, one deep blue for the click. Glass only
> where something is genuinely behind it. The screenshots do the selling; the design gets out of
> the way.

---

## 2. Product truth (what we may and may not claim)

Marketing must match the app. Source of truth is `ARCHITECTURE.md` in the **app** repo. Verify
before publishing. These constraints shape the design, not just the copy.

**What DynoWeb actually is:** a Shopify CRO loop — it *sees* behavior (heatmaps, replay, funnels),
*understands* it (3-layer AI engine), *fixes* it (SmartNudge + implementation guides), and *proves*
it (revenue attribution). Competitors stop at "sees." **That loop is the differentiator and it is
the spine of the landing page (§12).**

**Canonical facts:**
- **AI suggestion engine — 3 layers, in order:** (1) rule engine, 17+ deterministic UX rules;
  (2) statistical pattern detection — frustration clusters, scroll cliffs, mobile-vs-desktop gaps,
  confirmed with a two-proportion z-test; (3) LLM (Gemini) reasoning over pre-computed page
  contexts, never raw events. Candidates scored by **PECTI** (Proof, Ease, Cost, Time, Impact),
  **stability-gated** (must appear in 2+ runs), tagged **Quick Win / Strategic / Ambitious**, plus
  an **SEO-safety** badge. Each fix ships an implementation guide (theme-editor steps + code diff).
- **Revenue attribution:** Layer 1 (deterministic — cart attributes, order-note, pixel checkout
  token) + Layer 1.5 (fingerprint). Layer 1 misses ~15–20% of orders on custom checkouts (Shopflo,
  GoKwik, Razorpay Magic) that disable Shopify's Web Pixel; fingerprint recovers them by scoring
  cart overlap/time/geo/price/device, attributing only at **≥0.70 confidence with 7 hard vetoes**.
  Server-side via Shopify order webhooks.
- **Pricing (4-tier, session-based caps — the paywall meters sessions, not events):**
  FREE $0 / 1.5k sessions · GROWTH $14 / 7.5k · PRO $29 / 35k · CUSTOM from $79 / 100k–1M ·
  ENTERPRISE legacy.
- **Tracker:** ~5.9 KB gzipped (sub-7 KB target), 11 behavioral signals, privacy-first (form fields
  hashed, no input values). ⚠️ Live homepage copy says "sub-40 KB" (uncompressed) — don't
  contradict it without updating both.
- **Marquee features:** DynoAgent (Gemini agent, approval flow, image gen) · **SmartNudge**
  (behavior-triggered storefront interventions — the live "deploys the fix" path) · MCP server
  (~70 tools, OAuth 2.1, Claude/Cursor/ChatGPT) · session replay (rrweb; retention Free 7d /
  Growth 30d / Pro 60d / Enterprise 90d) · heatmaps (click/scroll/frustration — **frustration
  overlay is PRO**) · GEO audit (AI-search readiness) · storefront error tracking (JS + 404s).

**🚫 Hard "do not claim":**
- **No one-click auto-apply to the live theme.** Apply Engine V2 is **parked**. SmartNudge deploys
  *interventions*; suggestions ship *implementation guides*. Never design a "Fix it" button that
  implies the theme edits itself.
- No named enterprise logos we don't have. No invented metrics. No fake review counts.

### The proof we actually have (use it — it's better than a logo wall)

The references lean on social proof DynoWeb hasn't earned yet (Bogos has L'Oréal; Clarity has
enterprise quotes). **Do not copy that structure — it forces fabrication.** We have something
better: absurdly specific real numbers from four named merchants (live on `/use-cases`).

| Merchant | Logo | Real numbers |
|---|---|---|
| **The Punarvasu** — Ayurvedic wellness, India | `/Punarvasu.png` | 3,132 orders · ₹10.85L tracked sales · 837K interactions · **52,370 rage clicks** · 15,288 error clicks · 1,154 orders attributed = ₹4.28L · 44 Quick Wins · 88% mobile · ₹346.46 AOV |
| **Sahasika** — men's ethnic wear, India | `/Sahasika.png` | 598 replays · ₹97,767 in converting replayed sessions · ₹3.97L attributed · ₹9.8L referral revenue · 11,372 Facebook visits |
| **Skyline Decor** | `/SkyLine.png` | **33 live errors** caught breaking product pages |
| **Yetibeds** | `/yetibeds-logo.png` | the "one heatmap showed shoppers were clicking the wrong thing" story |

`52,370` and `₹97,767` are worth more than a logo wall, because nobody invents numbers like that.
**Design for specificity, not for logo count.** Four logos in a row looks thin; four logos each
welded to a number looks like evidence.

> **⚠️ Fix before build:** `/case-studies` currently says "anonymised pilots · merchant name
> withheld · named case studies coming soon" while `/use-cases` publishes the same merchants by
> name with full numbers. These contradict. Resolve: either merge `/case-studies` into
> `/use-cases` (recommended — one URL, redirect the other) or rewrite `/case-studies`. Do not
> design both.

---

## 3. Site map — all 48 pages

48 routes, six archetypes. **Design the six archetypes, not 48 pages.**

### A. Landing / home — 1 page — *the main build*
`/` — full spec in §12.

### B. Pillar pages — 6 — high-traffic SEO, near-landing weight
`/shopify-cro` · `/shopify-analytics` · `/shopify-heatmaps` · `/shopify-session-replay` ·
`/shopify-analytics-no-code` · `/shopify-cro-agency-alternative`

Landing structure at ~60% depth: hero (no logo band), 3–4 feature rows, one proof band, FAQ, CTA.

### C. Feature pages — 12 — one product surface each
`/features/heatmaps` · `/session-replay` · `/ai-suggestions` · `/revenue-attribution` ·
`/smartnudge` · `/dynoagent` · `/mcp-integration` · `/cart-overview` · `/impact` ·
`/seo-autopilot` · `/storefront-speed` · `/brand-dna`

Tight: hero + one big shot, 3 feature rows, "how it works", related links, CTA. **Screenshot-led —
every section anchors to a real shot from the inventory in §8.** No feature page ships without ≥3.

### D. Comparison — 5 — `/vs/*`
`/vs` (index) · `/vs/hotjar` · `/vs/microsoft-clarity` · `/vs/lucky-orange` · `/vs/glew`

The honest-table archetype. See §13. **Highest-intent traffic on the site** — a shopper comparing
tools is ready to install. Design accordingly: table above the fold, no preamble.

### E. Use cases & proof — 6
`/use-cases` (index) · `/use-cases/reduce-cart-abandonment` · `/increase-product-page-conversions` ·
`/shopify-mobile-optimization` · `/shopify-for-developers` · `/case-studies` ⚠️ (see §2 conflict)

### F. Blog — 11 — `/blog` index + 10 posts
`shopify-ab-testing-guide` · `shopify-checkout-optimization` · `shopify-conversion-rate-benchmark` ·
`shopify-dead-clicks` · `shopify-heatmap-guide` · `shopify-product-page-optimization` ·
`shopify-rage-clicks` · `shopify-scroll-depth-analytics` · `shopify-cro-checklist` ·
`why-shopify-store-not-converting`

Reading archetype. Existing kit is good (ReadingProgress, ArticleToc, Callout, TL;DR takeaways) —
**keep the structure, restyle to this system.**

### G. Standalone — 7
`/pricing` (§13) · `/help/[[...slug]]` (docs) · `/free-shopify-cro-audit` (lead-gen) ·
`/shopify-app-store` · `/our-journey` (narrative — the one page allowed to break the grid) ·
`/contact-us` · `/privacy-policy`

**Shared kit to restyle, not rebuild:** `app/components/seo/Marketing.tsx` (MarketingShell, Hero,
Section, FeatureGrid, FeatureRow, Screenshot, CTA, RelatedLinks, FAQ + JSON-LD),
`BlogArticle.tsx`, `Charts.tsx` (dependency-free SVG/CSS charts — BarChart, CompareBars,
DonutChart, FunnelChart, LineChart, MetricRow, ChartCard). **Retheme these and 45 pages follow.**
`PrimaryButton`/`uv-btn` glow → §10. `PillNav` → §10 nav.

---

## 4. Color

Navy structure, one deep action blue, white canvas. The accent is deliberately **deeper and less
saturated** than a default SaaS blue — that's most of the gap between "considered" and "generated."

```css
:root {
  /* Navy — structure, text, dark sections */
  --navy-900: #0A1633;  /* body text, dark section base */
  --navy-800: #0E1F45;
  --navy-700: #142A5C;
  --navy-600: #1C3A78;
  --navy-500: #274B96;
  --navy-400: #4A6BB8;
  --navy-300: #7E97CE;

  /* Action blue */
  --blue-700: #1A46BB;  /* pressed */
  --blue-600: #1E55E0;  /* PRIMARY — 6.1:1 on white. Buttons AND body links. */
  --blue-500: #2E6BFF;  /* 4.5:1 — charts, icons, large text. NEVER small text. */
  --blue-100: #E8EFFF;  /* tinted fills, selected states */

  /* Neutrals */
  --white:     #FFFFFF;
  --paper:     #F8FAFC;  /* section alt — near-neutral, NOT blue-tinted */
  --line:      #E4E8EF;  /* hairline borders — the primary separation tool */
  --line-soft: #EFF2F6;
  --ink:       #0A1633;
  --ink-muted: #56637B;  /* 5.9:1 on white */

  /* Data / semantic — an analytics product needs real data color */
  --success: #10805C;
  --warning: #B45309;
  --danger:  #C0334C;
  --heat-cold: #2E6BFF;
  --heat-warm: #F5A524;
  --heat-hot:  #E5484D;

  /* Glass — §6. Three uses only. */
  --glass-fill:        rgba(255, 255, 255, 0.72);
  --glass-stroke:      rgba(255, 255, 255, 0.90);
  --glass-fill-dark:   rgba(14, 31, 69, 0.55);
  --glass-stroke-dark: rgba(126, 151, 206, 0.22);
}
```

**Ratio: 80% white/paper · 15% navy · 5% blue.** One accent element per viewport — the thing you
want clicked.

**Contrast, measured not guessed:**

| Pair | Ratio | Verdict |
|---|---|---|
| `--blue-600` on white | 6.12:1 | ✅ buttons, body links, small text |
| `--blue-500` on white | **4.50:1** | ⚠️ at the AA line — large text (≥24px), icons, charts only |
| white on `--blue-600` | 6.12:1 | ✅ primary button |
| white on `--blue-500` | 4.50:1 | ⚠️ avoid — this is *why* the button is `--blue-600` |
| `--ink-muted` on white | 5.9:1 | ✅ |
| `--ink-muted` on `--paper` | 5.6:1 | ✅ |

Re-measure any pair you invent. The old doc claimed `#2E6BFF` was "~4.9:1"; it's 4.50:1. That
error is exactly how inaccessible blue ships.

**Heat colors are product colors.** `--heat-cold/warm/hot` exist so marketing heatmap graphics
match the app. Never use them as decoration.

---

## 5. Background & light

**Default: flat white.** Not off-white. Not gradient.

Light has **one source and one job: it sits behind the product screenshot**, so the shot separates
from the page and the glass bezel has something to refract. Nowhere else.

```css
/* ONLY behind a hero/feature product shot. Never on a generic section. */
.stage {
  background:
    radial-gradient(900px 420px at 50% 8%, rgba(46,107,255,0.10), transparent 62%),
    var(--white);
}
```

Separate sections with **`--paper` and hairline rules**, not glow: white → paper → white. Quieter
than a glow, and it doesn't date. This is exactly how Clarity and Mida build their pages.

**Dark sections** — navy, **max twice per page** (final CTA band, footer). Punctuation, not rhythm.

```css
.section--dark {
  background: linear-gradient(168deg, var(--navy-900) 0%, var(--navy-800) 100%);
  color: var(--white);
}
```

**Delete the grid overlay.** If a background gradient isn't lighting a specific object, delete it.

---

## 6. Glass — three jobs, no fourth

Glass says *"this floats above the product."* It only earns its place where something is genuinely
behind it.

```css
.glass {
  background: var(--glass-fill);
  backdrop-filter: blur(20px) saturate(160%);
  -webkit-backdrop-filter: blur(20px) saturate(160%);
  border: 1px solid var(--glass-stroke);
  box-shadow:
    0 1px 2px rgba(10, 22, 51, 0.04),
    0 12px 32px -8px rgba(10, 22, 51, 0.14),
    inset 0 1px 0 rgba(255, 255, 255, 0.85);  /* lit top edge — this is what sells it */
}

.glass--dark {
  background: var(--glass-fill-dark);
  border-color: var(--glass-stroke-dark);
  box-shadow:
    0 12px 32px -8px rgba(0, 0, 0, 0.40),
    inset 0 1px 0 rgba(255, 255, 255, 0.14);
}
```

**The only three places glass is allowed:**
1. **The screenshot bezel** (§8) — the hero use.
2. **The sticky nav** — it floats over scrolling content, so it's genuinely glass.
3. **Overlapping chips** — a stat or annotation half-on/half-off a screenshot's edge. The money
   shot: the blur is *visibly doing something* because the heatmap behind it is visibly blurred.
   One or two per page.

**Everything else is opaque white + hairline border.** Feature cards, pricing tiers, testimonials,
blog cards, docs. `background: #fff; border: 1px solid var(--line);`

**Rules:**
- Blur 16–22px. Below 12 is flat transparency; above 26 is grey mush.
- Fill alpha ≥ 0.65 where text sits. Frosted-and-legible beats transparent-and-pretty.
- **Never glass on glass** (double blur = grey soup).
- **Never glass over flat white.** No detail behind = no refraction = you built a grey box. If you
  can't tell it's glass, it isn't — use an opaque card.
- Fallback: without `backdrop-filter` the rgba fill is still a solid panel. Ship it, no JS detection.

---

## 7. Typography

Two faces. **Montserrat/Karla are retired** — Montserrat Extrabold is a strong "template" signal.

```css
--font-display: "Instrument Sans", "Söhne", Inter, system-ui, sans-serif;
--font-sans:    Inter, -apple-system, "Segoe UI", Roboto, system-ui, sans-serif;
--font-mono:    "Berkeley Mono", ui-monospace, "SF Mono", Menlo, monospace;
```

*Display face is the designer's call — pick one with real character at 600. If licensing blocks it,
Inter Display at `-0.03em` is the floor, not the target.* Self-host via `next/font`, subset latin,
`display: swap`.

| Role | Size | Weight | Tracking | Color |
|---|---|---|---|---|
| Hero display | `clamp(2.75rem, 5.5vw, 4.25rem)` / 1.05 | 600 | `-0.035em` | navy-900 / white |
| H2 section | `clamp(1.875rem, 3vw, 2.5rem)` / 1.15 | 600 | `-0.025em` | navy-900 |
| H3 | `1.25rem` / 1.35 | 600 | `-0.01em` | navy-800 |
| Body | `1.0625rem` / 1.6 | 400 | `0` | ink |
| Body lead (sub-hero) | `1.1875rem` / 1.55 | 400 | `-0.005em` | ink-muted |
| Small / caption | `0.8125rem` / 1.45 | 500 | `0` | ink-muted |
| Eyebrow | `0.6875rem` | 600 | `+0.10em` UPPERCASE | ink-muted |
| Stat number | `clamp(2rem, 3.5vw, 2.75rem)` | 600 | `-0.03em` `tabular-nums` | navy-900 |
| Code / metric inline | `0.9375rem` | 500 | `0` | navy-700 |

**Non-negotiables:**
- Headline weight **600, not 800.** Every `font-extrabold` on the current site drops to 600.
- Every headline gets negative tracking. Untracked display type is the flattest slop signal.
- Body caps at **~66ch**.
- **Eyebrows are `--ink-muted`, not blue.** Blue eyebrows on every section is the
  "everything glows so nothing does" failure. Save blue for the click.
- `font-variant-numeric: tabular-nums` on **every** number. Non-negotiable for an analytics
  product — it's the difference between a dashboard and a mockup.
- Current eyebrow tracking `0.28em` → **`0.10em`**. 0.28em is a costume.
- **No gradient text. Ever.**

---

## 8. Product screenshots (the most important component)

This is where the old system had nothing, and it's why the site reads generic.

```css
.shot {
  border-radius: var(--r-lg);
  overflow: hidden;
  border: 1px solid var(--glass-stroke);
  background: var(--glass-fill);
  backdrop-filter: blur(20px) saturate(160%);
  padding: var(--s-2);              /* the bezel — glass frames the UI, never covers it */
  box-shadow:
    0 2px 4px rgba(10, 22, 51, 0.04),
    0 24px 64px -16px rgba(10, 22, 51, 0.22);
}
.shot > img {
  border-radius: calc(var(--r-lg) - var(--s-2));  /* inner radius MUST be concentric */
  display: block;
  width: 100%;
}
```

**Doctrine:**
- **Real UI, real data.** Real store names, real traffic. Round numbers (1,000 / 50% / $10,000)
  are visible from orbit. We have `52,370` and `₹97,767` — use them.
- **Crop to the claim.** Section about scroll depth → show the scroll map, not the whole dashboard
  at 40% where nothing is legible. One idea per shot.
- **Bleed it.** Hero shot runs wider than the text column, crops at the viewport edge or fades at
  the fold. A shot that sits politely inside the grid reads as a thumbnail.
- **Overlap one glass chip** on the shot's edge. This is what makes glass legible *as* glass.
- **2x assets, `loading="eager"` + `priority` above the fold.** A blurry hero screenshot on an
  analytics product is self-refuting.
- App UI is **light-themed** → render on light panels. Dark UI on light sections and vice versa;
  contrast is what makes it pop, not a glow.
- Alt text describes **the insight** ("heatmap showing 68% of clicks above the fold"), not
  "dashboard screenshot".

### ⚠️ Asset inventory — filenames lie, open every image first

`public/` has ~112 images and **the names are not reliable**. Verified traps:

| File | What it actually is |
|---|---|
| `topOfPage.png` | generic Performance Dashboard — **not** a heatmap |
| `CROsuggestions.png` | findings-by-category chart — **not** the ranked queue |
| `AISuggestions.png` | ✅ the ranked suggestion queue (use this one) |
| `installation.png` | dark branded graphic, not app UI |
| `.png` | a literal zero-name file — ignore/delete |

**Open the image before you place it.** Every wrong screenshot is a credibility hole on a product
whose entire pitch is "we show you what's really happening."

**Known-good, by section (§12):**
- Heatmaps → `clickHeatmap.png`, `scrollHeatmap.png`, `Heatmaps.png`, `rageClick.png`, `heatmapFilter.png`
- Replay → `sessionReplay.png`, `Replays.png`, `replayTable.png`, `sessionexplorerTable.png`
- AI suggestions → `AISuggestions.png`, `suggestionCard.png`, `suggestionGroups-1/2/3.png`,
  `implementationguide-theme.png`, `implementationguide-code.png`, `quickStoreCheck.png`
- SmartNudge → `SmartNudge.png`, `SmartNudge-editor.png`, `SmartNudge-templates.png`,
  `SmartNudge-attribution.png`, `SmartNudge-brand.png`, `SmartNudge-usecases.png`
- Attribution → `RevenueAttribution.png`, `RevenueBreakdown.png`, `revenueByPage.png`,
  `revenuePages.png`, `KPICards.png`, `ConversionFunnel.png`
- Journeys → `Journeys.png`, `pageFlow.png`, `mostCommonpaths.png`, `sessionFlow.png`
- MCP → `MCP-feature.png`, `MCP-connector.png`, `MCP-active.png`, `MCP-mainPage.png`
- Agent → `DynoAgent.png`, `approval.png`, `ImageGeneration.png`
- Other → `CartOverview.png`, `Impact.png`, `SEOAutopilot.png`, `GEOScan-banner.png`,
  `Referrers.png`, `TopSources.png`, `UTMCampaigns.png`, `AB-testing.png`
- Logos → `Punarvasu.png`, `Sahasika.png`, `SkyLine.png`, `yetibeds-logo.png`, `logo.png`, `logo-short.png`

---

## 9. Spacing, radius, shadow

```css
:root {
  --s-1: 4px;  --s-2: 8px;  --s-3: 12px; --s-4: 16px;
  --s-5: 24px; --s-6: 32px; --s-7: 48px; --s-8: 64px; --s-9: 96px; --s-10: 128px;

  /* Radius: measured, not pill. Concentric — outer = inner + padding. */
  --r-xs: 6px;  --r-sm: 8px;  --r-md: 10px; --r-lg: 16px; --r-xl: 24px;
  --r-full: 999px;  /* ONLY avatars, dots, logo marks. NOT buttons. */

  /* Shadows: neutral navy, never colored. Two-layer = contact + cast. */
  --shadow-xs: 0 1px 2px rgba(10,22,51,0.05);
  --shadow-sm: 0 1px 2px rgba(10,22,51,0.04), 0 2px 6px -2px rgba(10,22,51,0.08);
  --shadow-md: 0 1px 2px rgba(10,22,51,0.04), 0 10px 24px -6px rgba(10,22,51,0.12);
  --shadow-lg: 0 2px 4px rgba(10,22,51,0.04), 0 24px 64px -16px rgba(10,22,51,0.22);

  --container: 1200px;
  --gutter: clamp(1.25rem, 5vw, 4rem);
}
```

- Section rhythm: **`--s-10` (128px) desktop / `--s-8` mobile** between majors. More air than feels
  comfortable — cramped rhythm is what makes a page feel cheap, and it's free to fix.
- **No colored shadows.** `--shadow-accent` is deleted. Buttons don't emit light.
- Radius is **concentric**: a 16px card with 8px padding holds an 8px-radius child. Mismatched
  radii feel subtly wrong in a way people can't name. This is why `rounded-[2rem]` on everything
  fails.

---

## 10. Components

**Primary button** — squared-off, weighty, one per viewport.
```css
.btn-primary {
  background: var(--blue-600);
  color: #fff;
  padding: 11px 20px;
  border-radius: var(--r-md);        /* 10px. NOT a pill. */
  font-weight: 550;
  font-size: 0.9375rem;
  letter-spacing: -0.01em;
  box-shadow: var(--shadow-xs), inset 0 1px 0 rgba(255,255,255,0.16);
  transition: background .12s ease, box-shadow .12s ease;
}
.btn-primary:hover  { background: var(--blue-700); box-shadow: var(--shadow-sm); }
.btn-primary:active { background: var(--blue-700); box-shadow: none; transform: translateY(0.5px); }
```
The `inset` highlight does what the old glow was reaching for — a lit edge — without pretending the
button emits light.

**Secondary button**
```css
.btn-secondary {
  background: var(--white);
  color: var(--navy-800);
  border: 1px solid var(--line);
  border-radius: var(--r-md);
  padding: 10px 19px;
  font-weight: 550;
  box-shadow: var(--shadow-xs);
}
.btn-secondary:hover { border-color: var(--navy-300); background: var(--paper); }
```

**Card (the default — opaque, not glass)**
```css
.card {
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: var(--r-lg);
  padding: var(--s-6);
  transition: border-color .12s ease;
}
.card:hover { border-color: var(--navy-300); }  /* border shift only — no lift, no shadow bloom */
```

**Sticky nav** (replaces PillNav) — `.glass`, **full-width**, `border-radius: 0`,
`border-bottom: 1px solid var(--line)`, `height: 64px`. Transparent at scroll 0 over a dark hero;
glass fill fades in past ~40px. Logo left · links center (`--ink-muted` → `--ink` on hover) · one
`.btn-primary` right ("Install free"). Dropdowns: opaque white panel, `--shadow-md`, `--r-lg`.
**Floating rounded-pill navs are a slop tell — don't.**

**Stat block** — big `tabular-nums` number, one line of context, attributed to a named store.
`52,370 rage clicks — The Punarvasu` beats `Boost conversions`. Every time.

**Glass chip** — the overlapping annotation. `.glass`, `--r-md`, `padding: var(--s-3) var(--s-4)`,
one number + one label. Positioned to straddle a screenshot edge. **Max 2 per page.**

**Logo row** — the four real merchants. Grayscale, `opacity: 0.65`, uniform **optical** height (not
bounding box), no hover color-up. **Pair each with its number (§12.3)** — a bare four-logo row
looks thin; four logos welded to numbers looks like evidence.

**Table** (comparison pages) — hairline `--line` grid, `--paper` header row, `tabular-nums`,
sticky first column on mobile scroll. ✅ `--success` / ✗ `--ink-muted` (never `--danger` — smug
loses trust).

**FAQ** — `<details>`/`<summary>`, native disclosure. Hairline divider between items, no card, no
chevron animation beyond a 90° rotate. Ships FAQPage JSON-LD.

**Charts** (`Charts.tsx`) — keep dependency-free SVG/CSS. Restyle: `--blue-500` for primary series,
`--navy-300` for comparison, heat colors only for heat data. `tabular-nums` on every axis label.

---

## 11. Motion

Restrained to the point of feeling almost still. Marketing motion should feel expensive, not busy.
**Every animation must justify itself against the swap test (§1):** if it would look identical on
any other site, cut it.

### Tokens
```css
:root {
  --ease:     cubic-bezier(0.32, 0.72, 0, 1);   /* decisive, no bounce */
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --dur-fast: 0.12s;   /* hovers, buttons, nav state */
  --dur:      0.28s;   /* reveals */
  --dur-slow: 0.6s;    /* the hero shot only */
}
```
**No spring/bounce easing.** Overshoot on a B2B analytics site reads as a toy.

### Implementation — no animation library

Use **CSS + one IntersectionObserver hook**. No framer-motion, no GSAP, no AOS. Everything below is
CSS transitions, CSS keyframes, `position: sticky`, or `animation-timeline: view()` with a
transition fallback. A motion library for this spec is 40KB to do what 30 lines of CSS does.

```css
/* Scroll reveal — the only global animation */
.reveal {
  opacity: 0;
  transform: translateY(8px);
  transition: opacity var(--dur) var(--ease), transform var(--dur) var(--ease);
}
.reveal.is-in { opacity: 1; transform: none; }
```
```js
// One observer, whole site. Unobserve after firing — reveals run ONCE.
const io = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (!e.isIntersecting) continue;
    e.target.classList.add('is-in');
    io.unobserve(e.target);           // never re-animate on scroll-back
  }
}, { rootMargin: '0px 0px -12% 0px', threshold: 0.1 });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
```

### Rules

- **Reveal:** opacity 0→1 + **8px** rise. Stagger **40ms**, **max 4 items** — then the rest arrive
  together. Fires **once**. (The old 16px/60ms is slow enough to look like a page loading badly.)
- **Hover:** border-color or background shift only. **No card lift. No glow bloom. No scale.**
- **Nav:** glass fill + border fade in over `--dur-fast` past 40px scroll. Nothing else.
- **Buttons:** background `--dur-fast`, plus `translateY(0.5px)` on `:active`. That's the whole
  interaction.
- **Never animate:** `width`, `height`, `top`, `left`, `margin`, `box-shadow` blur. Compositor
  properties only — `opacity` and `transform`. `box-shadow` swaps between prebuilt tokens.
- Above-the-fold content **must not** depend on JS to become visible. `.reveal` applies only below
  the fold; hero content is visible at paint. A JS failure must never leave a blank hero.

### 🚫 Banned outright

Parallax · counting-up numbers · typewriter text · floating blobs · marquees (except the logo row,
if it must) · scroll-jacking · cursor followers · tilt-on-hover · confetti · animated gradient
meshes · looping icon micro-animations · anything with a bounce.

**Counting-up numbers are specifically banned even though this is an analytics product.** It's the
first idea everyone has and it's a 2019 template tell. `52,370` is already impressive; making it
spin makes it look invented.

### ✅ The three animations that earn their place

Everything else on the page is static. These three are the exception because each one *is product
demonstration*, not decoration.

**1. Hero heatmap bloom** (§12.1) — the signature moment.
The hero shot loads as a clean storefront; over `--dur-slow` the heat overlay fades in and the
click dots bloom outward from center-of-mass. Runs **once**, on load, after the image decodes.
```css
@keyframes heat-bloom {
  from { opacity: 0; transform: scale(0.94); }
  to   { opacity: 1; transform: none; }
}
.hero-heat {
  animation: heat-bloom var(--dur-slow) var(--ease-out) 0.25s both;
  transform-origin: 50% 40%;
  will-change: opacity, transform;   /* remove after animation completes */
}
```
This shows the product working in one second, with no words. It's the only "wow" the page needs.

**2. The loop diagram** (§12.4) — See → Understand → Fix → Prove.
`position: sticky` diagram; the four stages highlight as the copy column scrolls past. **CSS only**
(`animation-timeline: view()` where supported, IntersectionObserver class-toggle fallback). The
user scrolls at their own pace — **no scroll-jacking, no pinning that steals the scrollbar.**
Highlight = border-color + opacity shift. Nothing moves.

**3. One muted product clip** (§12.5 or §12.6) — a real cursor over a real heatmap, or a replay
scrubbing.
`<video muted loop playsinline preload="none">` + `poster`. **Lazy-load; only autoplay when ≥50%
in view; pause when out of view.** Max ~6s, under 2MB, MP4 + WebM. This is a product demo, not
decoration — it's the one place motion sells better than a static shot.

### Reduced motion — mandatory

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  .reveal { opacity: 1; transform: none; }   /* content visible, never hidden */
  .hero-heat { animation: none; opacity: 1; }
}
```
Also: the §11 video must not autoplay under reduced motion — show the poster with a play button.
**Reduced motion must never hide content.** Kill transforms, keep everything readable.

### Performance budget
Hero LCP < 2.0s. No animation on the critical path. `content-visibility: auto` on below-fold
sections. Total JS for motion: **one observer, < 1KB.**

---

## 12. THE LANDING PAGE — section by section

**Narrative spine: See → Understand → Fix → Prove.** That's DynoWeb's actual product loop, and
competitors stop at "See." Every section earns its place on that spine. This is the structure —
not the current site's.

**Order:** Nav → 1 Hero → 2 Trust → 3 Gap → 4 Loop → 5 See → 6 Understand → 7 Fix → 8 Prove →
9 Case study → 10 Developers → 11 Install → 12 Compare → 13 Pricing → 14 FAQ → 15 CTA → Footer

15 sections is long — that's correct for high-intent SaaS (all four references run 12–18). Depth
sells; **but every section must survive the swap test or it's cut.**

---

### 12.1 Hero — `.stage` white, light behind the shot

**Job:** in 5 seconds — what it is, who it's for, what it looks like.

- **Eyebrow:** `--ink-muted`, e.g. `FOR SHOPIFY MERCHANTS`. Not blue.
- **H1** (~10 words, weight 600, `-0.035em`): name the loop, not the category. Direction:
  *"See why shoppers don't buy — and ship the fix."* Avoid "Supercharge/Unlock/Effortlessly."
- **Lead** (`--ink-muted`, ≤2 lines, ~60ch): what it does + the differentiator.
  *"Heatmaps, replays and funnels for Shopify — plus an AI that ranks the fix and attributes the
  revenue it earned."*
- **CTAs:** `.btn-primary` "Install free →" (→ `apps.shopify.com/dynoweb`) + `.btn-secondary`
  "See a live store" (→ `/use-cases#punarvasu`). **Exactly two.**
- **Under-CTA microproof** (`0.8125rem`, `--ink-muted`): *"Free plan · 1.5k sessions/mo · 5.9 KB
  tracker · no credit card."* Real, checkable, specific — beats a fake star rating.
- **The shot:** `clickHeatmap.png` in a `.shot` bezel. **Bleeds wider than the text column**,
  crops/fades at the fold. `priority`, 2x. This is the most important image on the site.
- **One glass chip** straddling the shot's edge: `52,370 rage clicks` / `caught on one store`.
- **Layout:** centered text, full-bleed shot below (Bogos/Clarity pattern). Reads better on mobile
  than a split, and the shot gets maximum width — which is the entire point.

**Motion:** hero heat bloom (§11), once, after decode. Nothing else. No `.reveal` above the fold.

---

### 12.2 Trust band — white, immediately under the hero

Four logos, each **welded to its number**. Not a bare logo row.

`Punarvasu · 837K interactions` — `Sahasika · ₹3.97L attributed` — `Skyline Decor · 33 live errors
caught` — `Yetibeds · one heatmap, one fix`

- Grayscale, `opacity: 0.65`, uniform optical height, no hover color-up.
- Above: one line, `0.8125rem`, `--ink-muted`: *"Running on real Shopify stores across India and the US."*
- Row links → `/use-cases`.
- **Four logos is thin as a wall and strong as evidence.** The numbers do the work. Don't pad with
  fake logos; don't invent a review count.

**Motion:** `.reveal`, single fade, no stagger.

---

### 12.3 The Gap — `--paper`, short, no image

**Job:** name the problem competitors leave unsolved. Earns the rest of the page.

- **H2:** *"Analytics tells you what happened. Not what to do about it."*
- **Two short paragraphs, ~60ch, centered.** Heatmap tools give you a picture and a homework
  assignment. You still have to work out which of 200 pages matters, which fix is worth shipping,
  and whether it made any money.
- **No icons. No cards. No screenshot.** The one section allowed to be just words — the reset
  before the loop. Silence is a design element; use it exactly once.

**Motion:** `.reveal` only.

---

### 12.4 The Loop — white, sticky diagram

**Job:** the spine, made visible. **The most structurally important section on the page.**

- **Eyebrow:** `HOW IT WORKS` · **H2:** *"A loop, not a dashboard."*
- **Left (sticky):** the four-stage diagram — **See → Understand → Fix → Prove** — as a closed
  loop, `--navy-300` inactive, `--blue-600` active, hairline connectors.
- **Right (scrolls):** four blocks, ~40 words each, one per stage:
  - **See** — 11 behavioral signals, 5.9 KB tracker. Heatmaps, replays, funnels, errors.
  - **Understand** — 3 layers: 17+ rules → statistical detection (z-tested) → Gemini over page
    context. Scored by PECTI, stability-gated across 2+ runs.
  - **Fix** — ranked Quick Win / Strategic / Ambitious + SEO-safety badge. Implementation guide:
    theme-editor steps + code diff. SmartNudge deploys behavior-triggered interventions live.
  - **Prove** — Shopify order webhooks tie revenue back to the exact session. Two-layer
    attribution, ≥0.70 confidence, 7 hard vetoes.
- Stages highlight as the copy scrolls past (§11 animation 2). **No scroll-jacking.**
- **Mobile:** sticky collapses to a 4-step vertical list. Don't try to preserve the diagram.

⚠️ **"Fix" copy must not imply the theme edits itself.** Apply Engine V2 is parked (§2).

---

### 12.5 SEE — white, `FeatureRow`, shot **right**

- **Eyebrow:** `SEE` · **H2:** *"Watch what your shoppers actually do."*
- **Shot:** `scrollHeatmap.png` or `rageClick.png` in `.shot`. **Crop to the claim** — the scroll
  cliff, not the whole dashboard.
- **Body + 3 specific bullets:**
  - Click, scroll, and frustration heatmaps *(frustration overlay is PRO — label it)*
  - Session replay via rrweb — 7d free, up to 90d retained
  - Storefront error tracking — JS errors and 404s, live *(Skyline Decor: 33 caught)*
- **Link:** "Explore heatmaps →" → `/features/heatmaps`
- **Optional:** this or §12.6 hosts the one product clip (§11 animation 3). **Only one of them.**

---

### 12.6 UNDERSTAND — `--paper`, shot **left**

**The differentiator. Give it the most room of any feature section.**

- **Eyebrow:** `UNDERSTAND` · **H2:** *"An engine that reads 200 pages and tells you which one matters."*
- **Shot:** `AISuggestions.png` — the ranked queue. ⚠️ **Not** `CROsuggestions.png` (§8).
- **Body:** the 3 layers in plain language. **Lead with the boring layers** — "17+ deterministic
  rules, then a two-proportion z-test, *then* the LLM" is far more credible than "AI-powered," and
  it's the truth. In 2026 "AI-powered" is a liability; a z-test is a moat.
- **Three sub-cards** (opaque, hairline): **Rules** (17+ deterministic UX checks) · **Statistics**
  (frustration clusters, scroll cliffs, mobile gaps — z-tested) · **Reasoning** (Gemini over
  pre-computed page context, never raw events).
- **PECTI callout:** a small opaque panel — Proof · Ease · Cost · Time · Impact — plus
  stability-gating ("must appear in 2+ runs before we show it"). **This is the most trust-building
  detail on the site.** It says: we withhold noise. Nobody else says that.
- **Link:** "How the engine ranks fixes →" → `/features/ai-suggestions`

---

### 12.7 FIX — white, shot **right**

- **Eyebrow:** `FIX` · **H2:** *"Every finding ships with the fix attached."*
- **Shot:** `implementationguide-theme.png` (+ `implementationguide-code.png` as the overlapping
  second layer, offset — showing both paths, no-code and code).
- **Bullets:**
  - Theme-editor walkthrough — no developer needed
  - Code diff for the ones that need one
  - **Quick Win / Strategic / Ambitious** tags + an **SEO-safety** badge on every fix
  - **SmartNudge** — behavior-triggered interventions that go live on your storefront
- **Link:** "See SmartNudge →" → `/features/smartnudge`

⚠️ **Copy discipline:** "ships with the fix attached" = a guide + SmartNudge interventions. **Never
"one click and it's live on your theme."** Apply Engine V2 is parked (§2). Getting this wrong is a
refund request.

---

### 12.8 PROVE — `--paper`, shot **left**. The money section.

- **Eyebrow:** `PROVE` · **H2:** *"Tied to orders, not guesses."*
- **Shot:** `RevenueAttribution.png` or `revenueByPage.png`.
- **Body — lead with the honest part, it's the strongest thing here:**
  > Most tools lose 15–20% of orders on custom checkouts — Shopflo, GoKwik, Razorpay Magic all
  > disable Shopify's Web Pixel. DynoWeb runs a second fingerprint layer that recovers them,
  > attributing only above 0.70 confidence, with 7 hard vetoes that throw out anything doubtful.
- **Glass chip** on the shot: `1,154 orders → ₹4.28L` / `attributed to exact sessions · Punarvasu`.
- **Bullets:** server-side via Shopify order webhooks · deterministic first (cart attributes,
  order-note, checkout token), fingerprint only as fallback · attribution is refused below
  threshold — **we'd rather show nothing than a wrong number**.
- **Link:** "How attribution works →" → `/features/revenue-attribution`

**Why this section wins:** every competitor claims attribution. Naming the exact checkouts that
break it, publishing the confidence threshold, and admitting we refuse low-confidence matches is a
claim no fabricated site would ever make. **Honesty is the differentiator — design it loud.**

---

### 12.9 Case study band — white

**Job:** the loop, run once, on one real store, with numbers nobody could invent.

- **Eyebrow:** `IN THE FIELD` · **H2:** *"How The Punarvasu found 52,370 rage clicks."*
- **Layout:** logo + `thepunarvasu.com` + "Ayurvedic wellness · India", then a 4-up stat row
  (`tabular-nums`, big):
  `837K` interactions · `52,370` rage clicks · `44` Quick Wins · `₹4.28L` attributed
- Then **3 lines of narrative**, not a wall: 88% mobile · the Gandharva Haritaki PDP stacked three
  flags at once (frustration cluster 89, "users seem confused" 83, sticky add-to-cart bug 79) ·
  the top-scored fix (95) was missing Product JSON-LD across the whole catalog.
- **Pull quote:** *"We thought our volume meant the store was fine. DynoWeb showed us tens of
  thousands of rage clicks — and exactly which product pages were causing them."*
- **Link:** "Read all four stories →" → `/use-cases`
- **Motion:** `.reveal` with 40ms stagger across the stats. **No count-up** (§11).

---

### 12.10 Developers — `--paper`

**Job:** the "oh, they're serious" section. Short — it's for a minority, but a loud one.

- **Eyebrow:** `FOR DEVELOPERS` · **H2:** *"Your store's data, in your AI tools."*
- **Shot:** `MCP-connector.png` or `MCP-active.png`.
- **Body:** MCP server, **~70 tools**, OAuth 2.1 — connect Claude, Cursor, or ChatGPT and query
  your store directly. Plus DynoAgent (Gemini, approval flow before anything ships, image gen).
- **Optional:** a small `--font-mono` snippet of a real MCP call. Devs read code, not copy.
- **Links:** `/features/mcp-integration` · `/features/dynoagent`
- **Keep it to one row.** Merchants scroll past; developers stop dead.

---

### 12.11 Install — white

**Job:** kill the "will this slow my store down?" objection. Every Shopify merchant has it.

- **Eyebrow:** `INSTALL` · **H2:** *"One click. 5.9 KB. No theme surgery."*
- **Three opaque cards:** **Install from the App Store** (OAuth, no code) · **Tracker loads**
  (~5.9 KB gzipped, 11 signals, async) · **Data within the hour** (heatmaps build as traffic
  arrives).
- **Privacy line, prominent:** form fields hashed, no input values captured, ever. GDPR-conscious
  by construction.
- ⚠️ **Tracker size:** app truth is **~5.9 KB gzipped**; live homepage says "sub-40 KB"
  (uncompressed). **Pick one and fix both surfaces.** Recommend 5.9 KB gzipped — it's the real
  number, it's a better number, and it's the one competitors can't match.

---

### 12.12 Compare — `--paper`

**Job:** intercept the "DynoWeb vs Hotjar" search on the page they're already on.

- **Eyebrow:** `COMPARE` · **H2:** *"Where DynoWeb sits."*
- **Compact table**, 4–5 rows, not the full matrix (that's `/vs/*`): Heatmaps · Session replay ·
  **Ranked AI fixes** · **Revenue attribution** · Shopify-native.
- Columns: DynoWeb · Hotjar · Clarity · Lucky Orange.
- **Be fair — Clarity is free and good, say so.** Then show the two rows where nobody else competes:
  ranked fixes and attribution. A table that wins every row is read as a lie and costs you the sale.
- ✅ `--success`, ✗ `--ink-muted` (never `--danger`).
- **Links:** four, to `/vs/hotjar`, `/vs/microsoft-clarity`, `/vs/lucky-orange`, `/vs/glew`.

---

### 12.13 Pricing preview — white

- **Eyebrow:** `PRICING` · **H2:** *"Free until it's working."*
- **Four cards, opaque, hairline.** FREE $0 / 1.5k · GROWTH $14 / 7.5k · **PRO $29 / 35k** ·
  CUSTOM from $79 / 100k–1M.
- **Featured = PRO:** `--blue-600` 1px border + `--shadow-md` + a small `--blue-100` eyebrow badge.
  **No glass, no glow, no scale transform.**
- **Say it plainly:** *"We meter sessions, not events."* — a real differentiator merchants have
  been burned by. Note frustration heatmaps + 60d retention start at PRO.
- All prices `tabular-nums`. **Link:** "Full pricing →" → `/pricing`.

---

### 12.14 FAQ — `--paper`

Six questions, native `<details>`. Ship FAQPage JSON-LD. Answer the real objections, honestly:
- Will it slow my store down? (5.9 KB, async)
- Does it work with my custom checkout? (**yes — this is the fingerprint layer's whole reason to
  exist; name Shopflo/GoKwik/Razorpay Magic**)
- Do you edit my theme? (**no — guides + SmartNudge interventions.** Say this clearly.)
- What's free vs paid?
- How is this different from Clarity? (it's free — be honest, then say what we add)
- What data do you collect? (hashed fields, no input values)

---

### 12.15 Final CTA — **dark navy**, the page's second and last dark section

- **H2:** *"Find out what your store is hiding."* · Lead: one line.
- `.btn-primary` "Install free →" + `.btn-secondary` (glass-on-dark) "Talk to us" → `/contact-us`.
- Microproof repeated: *"Free plan · 1.5k sessions · no credit card."*
- Optional: one soft light from a corner **only if** a product shot sits on it. Otherwise flat navy.

**Footer** — navy, continuous with the CTA band (no seam). Four columns: Product (12 features) ·
Compare (5) · Learn (blog, use cases, help) · Company (journey, contact, privacy). Logo + one line.
**This is the site's main internal-link surface — all 48 pages reachable within 2 clicks.**

---

## 13. Other page archetypes

**Pillar (6)** — landing at 60%: hero (no logo band, keep microproof) · 3–4 `FeatureRow`s ·
one proof band · FAQ · CTA. ~1,500 words. Each links to ≥3 features + ≥2 blog posts.

**Feature (12)** — hero + one big shot · 3 rows · "how it works" · RelatedLinks · CTA.
**≥3 real screenshots or it doesn't ship.** The `Screenshot` component (light panel) → `.shot`.

**Comparison (5)** — **table above the fold, no preamble.** Highest-intent traffic on the site.
Full matrix, honest rows, `--success`/`--ink-muted`. Then 2–3 rows on the real difference (ranked
fixes, attribution), a migration note, CTA. **Never disparage.** Losing a row builds more trust
than winning every one.

**Use case / proof (6)** — the `/use-cases` structure is already strong (StatBand, challenge →
what DynoWeb found → actions & outcome, ResultBand, quote). **Keep it, restyle it.** Stats
`tabular-nums`. Resolve the `/case-studies` conflict (§2) before designing.

**Blog (11)** — reading archetype. Body `1.0625rem`/1.6, **66ch**, `--ink`. Keep ReadingProgress,
ArticleToc (scroll-spy), Callout (`tip`/`note`/`product`), TL;DR takeaways, byline, Article JSON-LD.
Restyle only. Charts inline via `Charts.tsx`. One `.shot` per post minimum — a CRO blog with no
product screenshot wastes the traffic it earns.

**Standalone (7)** — `/pricing`: four cards + comparison matrix + FAQ; sessions-not-events stated
plainly. `/help`: docs — sidebar, `--paper` code blocks, no glass, no marketing. `/our-journey`:
**the one page allowed to break the grid** — narrative, real photos (`Yetibeds.png` etc.), long
measure, minimal chrome. `/free-shopify-cro-audit`: single-purpose lead-gen — form above the fold,
no nav distractions, `quickStoreCheck.png` as the shot.

---

## 14. Accessibility

Glass and low-contrast grey are where marketing sites quietly fail.

- **Glass contrast is measured against the lightest pixel the panel can sit over**, not the fill in
  isolation. A heatmap scrolling under the nav *will* put white behind your grey text. Failing?
  Raise fill alpha. Never darken past `--ink`, never lighten the text.
- **`--blue-500` is not a text color.** 4.50:1 — charts, icons, ≥24px only. Links and small text use
  `--blue-600` (6.12:1). Easiest mistake to reship.
- Focus: `outline: 2px solid var(--blue-600); outline-offset: 2px;` — never removed, visible on
  glass and navy both. Test the nav focus ring over a dark hero.
- Heat colors carry meaning → always pair with a legend, label, or number. **Never color alone**
  (~8% of male shoppers).
- Screenshot alt text describes **the insight**, not "dashboard screenshot".
- Text over screenshots needs a real scrim, not a prayer.
- FAQ uses native `<details>` — keyboard and screen-reader support for free (rung 4: native
  platform feature over a JS accordion).
- Video: `muted loop playsinline`, no autoplay under reduced motion, never the only source of a claim.
- Every section is reachable and readable with JS disabled.

---

## 15. Ship checklist

Per page:

- [ ] Real product screenshot **above the fold**, 2x, `priority`?
- [ ] **Every screenshot opened and verified** — not trusted by filename (§8)?
- [ ] Every number real and odd-shaped (`52,370`, not `50,000+`)?
- [ ] Every number `tabular-nums`?
- [ ] Exactly **one** primary CTA per viewport?
- [ ] Glass only as bezel / nav / overlapping chip — nowhere else?
- [ ] No glass sitting over flat white?
- [ ] Every section survives the swap test (§1)?
- [ ] Zero pill buttons, colored shadows, gradient text, emoji, grid overlays?
- [ ] Headlines at weight 600 with negative tracking?
- [ ] Contrast **measured**, not assumed, on any new pair?
- [ ] Radii concentric (outer = inner + padding)?
- [ ] Max 2 dark sections?
- [ ] Reveals fire **once**; nothing above the fold needs JS to appear?
- [ ] `prefers-reduced-motion` honored — and content still visible?
- [ ] **No claim of one-click theme apply** (§2)?
- [ ] Tracker size consistent (5.9 KB gzipped) across every surface?
- [ ] `npx next build` — all routes prerender static?
