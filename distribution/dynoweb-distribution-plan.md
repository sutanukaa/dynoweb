# DynoWeb Distribution Plan

> **Companion docs:** [dynoweb-icp.md](dynoweb-icp.md) — the canonical ICP (read first; every list,
> keyword and channel bet is gated by it) · [dynoweb-offer.md](dynoweb-offer.md) — the canonical
> offer (positioning, entry offer, pricing, objection kill; the *what we sell* behind the *how we reach*).
>
> **Updated:** 2026-07-17 — materially revised after the ICP research (§0); offer doc added (see §8–9);
> §6 Bullseye rebuilt with primary-source competitor-distribution + App Store research.

---

## 0 · What the ICP research changed

The ICP work produced one finding that rewrites this plan's assumptions:

> **Zero of our ~18 real installed stores sit inside the ICP.** Exactly one clears the 5,000
> sessions/month detectability floor — and it's a jewelry store, the one vertical we should
> avoid. The base skews heavily INR. Most stores are 5–10x below the traffic level at which our
> instruments can honestly see anything.

**Our 0 paying customers is not a sales problem or a pricing problem. It is an
acquisition-targeting problem.** We acquired stores structurally incapable of getting recurring
value: they install, the heatmap shows noise, there's nothing to act on, they never pay.

Two revisions follow:

1. **The warm-18 is downgraded from "fastest revenue" to "best interviews."** Earlier drafts of
   this plan assumed 3–5 paying conversions from warm users. On the evidence, that's optimistic —
   selling a paid plan to a below-floor store violates philosophy P8 and earns a refund plus a
   1-star review. Interview them. Don't count on their money. (One exception:
   `mexican-oaxacan-silver-jewelry` is above-floor *and* capped — a real upgrade conversation.)
2. **The named-50 list is a hunting spec, not a description of our base.** It must be built from
   stores we don't have yet, gated by the ICP.

---

## 1 · Starting point (verified, not estimated)

| Fact | Value | Source |
|---|---|---|
| Real paying customers | **0** | `Billing` — 4 "paid" rows are a test store, a seeded showcase, a dev store, and a partner |
| Real installed stores | ~18 (of 25 rows) | `Shop` where `uninstalledAt IS NULL`, minus `isTestStore` |
| Stores inside the ICP | **0** | `TrafficDailyRollup`, 30d |
| Install rate | ~1/week, stalled 6 weeks | `Shop.installedAt` by week |
| Listing rewrite | **Drafted May 20, never shipped** | `shopify.app.toml` still `name = "DynoWeb"` |
| Time budget | 15–20 hrs/week | Confirmed |

**Treat month 1 as validation, not volume.** Zero self-serve trial→paid conversions have ever
happened. We are proving a paid motion exists — not scaling one.

---

## 2 · The plan in order

The spine: **you cannot write the message, shoot the video, or pitch the list until you have
listened to merchants.** Everything before the interviews is preparation; everything after is
execution.

| # | Step | Why it comes here |
|---|---|---|
| 1 | Define the ICP | ✅ **Done** — [dynoweb-icp.md](dynoweb-icp.md) |
| 2 | Interview — warm 18 first | The customers hand you the words. Before any asset work. |
| 3 | Pick ≤3 value points | No focused value prop today. The interviews decide the 3. |
| 4 | Remake video, images, site | Only now — around validated words, not guesses. |
| 5 | Bullseye traction research | Map all 19 channels + how App Store competitors get installs. |
| 6 | Test 3 channels, pick 1 | 3-in, 1-out. Not do-everything. |
| 7 | Build the 50-lead sheet, pitch by hand | ICP-gated. Track the funnel, not vibes. |
| 8 | Credibility: BFS badge + reviews | The trust gap. Runs alongside everything. |
| 9 | Free CRO report as the hook | Not a channel — the ammunition for 7 and 8. |

---

## 3 · Interview the warm 18

This is the correction Charlie Ngo pushed and it's right: **interview your ideal customer; don't
ask peers to grade your listing.**

**Reframed goal:** these interviews are now primarily **diagnostic**, not sales. The single most
valuable question we can answer is *what did these below-floor stores think they were installing?*
Their answer tells us what our listing currently promises, and to whom it's wrongly aimed.

What each interview must extract:

- The **exact words** they use for the problem → these become headline and outreach openers.
- What made them install — and what stopped them short of paying.
- Which single output they found genuinely useful (heatmap? replay? a finding? a nudge?).
- Whether they ever saw *anything actionable* — the below-floor hypothesis is that they did not.

**Priority order** (live traffic, 30d — not the capped Billing counter):

| Store | Sessions/30d | CR | Why |
|---|---|---|---|
| mexican-oaxacan-silver-jewelry | 5,511 | 0.20% | Above floor + capped. **The one real upgrade conversation.** |
| freshleafindia | 2,540 | 1.18% | Best revenue ($11.3k/30d). Below floor, wrong geo — but a real business. |
| esselbath1 | 2,050 | **0.00%** | Zero conversions on 2k sessions. Either broken or a genuine find. |
| cofainc | 1,481 | 0.00% | Real usage, no conversions |
| bd00fa-3 | 940 | 0.00% | Longest-installed real user (since Feb) |
| kitchener-printkia | 687 | 0.87% | Converting — ask what's working |
| skyline-decor | 681 | 0.15% | Real, steady |
| corporatedrivertrainingaustralia | 390 | 0.77% | Real, steady |

---

## 4 · Pick ≤3 value points — from interviews, not from us

Charlie's sharpest note: *"choose up to 3 key points to focus on — do not make your customer see
a table with a lot of stuff."*

Candidate spine, to be confirmed by §3:

> **See why visitors don't buy → get the specific fix → recover the lost sales.**

The one honest differentiator after the apply-engine was parked is that **SmartNudge deploys the
intervention** — it doesn't just report the leak.

> ⚠️ **Moat honesty check.** Wisepops and OptiMonk already ship popups with revenue attribution
> and A/B testing. "Deployed intervention + attribution" is **not** itself unique. What's plausibly
> unique is the **loop** — diagnose from replay/error data → deploy the nudge → attribute the money,
> in one app. Pressure-test this with a merchant before it becomes load-bearing marketing.

**Vocabulary is binding** (full table in the ICP doc §6): use *"lost sales"*, *"traffic but no
sales"*, *"drop off"*, *"stuck"*. **Never** *"CRO"*, *"leaking funnel"*, or *"AI CRO Expert"* —
all three are verified vendor-speak that merchants never use.

---

## 5 · Remake the promo video, images & website

Only now, with validated words in hand. Doing this first repeats the exact mistake Charlie
flagged: an unfocused message on a site that *"looks like a AI Vibe Code web."*

1. **Listing rewrite first** (drafted since May, never shipped): app name, keywords in merchant
   vocabulary, hero line, description, screenshots. No engineering needed.
2. **Promo video** — 60s: install → first finding → SmartNudge deployed, on a real store.
3. **Promo images** — rebuilt around the ≤3 points. Drop the feature-dump table.
4. **Website / product voice** — match the brand, kill the AI-generated feel, lead with the
   outcome for a specific store type, one proof element beneath it.

> **Reality check.** At near-zero traffic, polishing the site produces zero paying customers
> directly — it only improves conversion of traffic we don't have yet. Do the minimum listing fix
> now; let the first payers fund the full design lift.

---

## 6 · Bullseye — the researched outer ring, test 3, pick 1

> **Grounded 2026-07-17** by primary-source research (competitor listings/blogs, Shopify Partner
> docs, Store Leads, founder case studies). Sources live in the session research files.

### 6a · How competitors ACTUALLY acquire (the evidence)

| Competitor | Primary distribution channel (verified) |
|---|---|
| **Microsoft Clarity** | **Free (Microsoft brand) + Bing ecosystem** + zero-cost App Store listing (1,673 reviews, BFS badge, free). The default "just use Clarity, it's free" recommendation. Nobody matches "free from Microsoft." |
| **MIDA** | **Free-tier App Store wedge + programmatic comparison-SEO** ("X vs Y", "[competitor] alternatives" on mida-app.io/blog) + BSS Commerce multi-app portfolio cross-promo. 3,267 stores, +110% YoY. |
| **Propel** | **App Store ASO + free tier + the category's most disciplined comparison-SEO** (branded `/lucky-orange-alternative/`, `/microsoft-clarity-alternative/` landing pages + 2×/week blog) + own 5-app portfolio. 6,625 stores, **+142% YoY — fastest grower**. |
| **Lucky Orange** | **Owned blog/case-study content + a formal affiliate program** (50% 1st month / 20% annual, multi-network: ShareASale/Awin/CJ) + cross-platform integrations. Premium price + billing-trust wound. |
| **Privy** | **App Store + generous freemium** → 400k merchants → acquired by Attentive. Partner program 10% recurring. |
| **OptiMonk** | **Content-SEO engine** (100k+ monthly blog visitors + programmatic "[competitor] alternative/migration" pages) + structured **affiliate/agency program** (20%). Free-forever. |
| **Wisepops** | Content/comparison SEO + Klaviyo integration; **no free tier, enterprise pricing** — deliberately NOT playing App-Store-volume (63 reviews). |
| **Hotjar** | **Content-SEO at massive scale** (50–100 articles/mo topic clusters → ~47% traffic growth) + product-led freemium. No first-party Shopify app. |

### 6b · The six patterns that decide our channels

1. **Free tier is table stakes, not a differentiator** — everyone uses it; Clarity reset the floor to $0-from-Microsoft. Our free tier is entry hygiene, not an edge.
2. **Programmatic comparison-SEO is the category's dominant *discoverable* channel** — MIDA, Propel, OptiMonk, Hotjar all run "[competitor] alternative" + "best Shopify X" pages. Most copyable, most contested. **This is the compounding play.**
3. **Affiliate/partner is a real SMB channel** — Lucky Orange (50%/20%, multi-network), OptiMonk (20%), Privy (10%). The Shopify-natives (MIDA/Propel) skip it and rely on ASO+SEO. **For us: real, but needs proof/customers first — defer to month 2+.**
4. **Vendor-portfolio cross-promo** quietly drives MIDA (BSS Commerce suite) and Propel (own 5 apps). **We're single-app — this lever is closed to us; don't count on it.**
5. **No verifiable paid-ads motion by ANYONE** in the category — the free floor makes it uneconomic. **Confirms ads are not our play** (matches our ~$0 budget).
6. **ASO vocab is uniform:** every title/tagline = "Replay/Heatmap" + a loss-aversion hook ("lost sales", "friction", "hidden issues"). Matches our verified vocabulary — use it.

### 6c · Shopify App Store mechanics (what actually moves installs)

- **BFS badge:** Shopify's own stat = **+49% new installs in 14 days** of earning it (directional, self-reported); founder anecdotes +35%, "first page but **category-dependent**." **It's necessary hygiene and a ranking *multiplier*, not a demand generator by itself** — its value scales with how much search demand the category already has. *(Correction to earlier "30–50%": the real figure is Shopify's 49%/14d, category-dependent.)*
- **Reviews:** never confirmed as an explicit ranking weight, but they (a) drive **listing conversion** — the top social-proof signal a merchant reads — and (b) feed the post-Feb-2023 behavioral loop. The algorithm rewards **install velocity + retention + conversion**, and has a **"trending" mechanism that deliberately surfaces small apps gaining traction.** Good news for a cold-start app that can spike.
- **ASO rules (Shopify primary):** brand-name-first (30 char), benefit tagline not feature, **5 search terms** (complete words, one idea each), outcome-focused screenshots (16:9), keyword-stuffing is down-weighted.
- **Featured/Staff Picks:** editorial + **relationship-driven** (tell your partner manager), ~260k weekly App Store visitors, ~4× install spike for the featured week (anecdotal) — and **NOT scale-gated** (new apps can get it). BFS unlocks the *earnable, no-relationship* "Picked for you" surfaces. Both are spikes, not engines.

### 6d · The outer ring — all 19, one DynoWeb idea + who proves it

**High-leverage for us:** Founder outbound (cold-start engine — no competitor uses it because they're past cold-start) · **Shopify App Store ASO+reviews+BFS** (MIDA/Propel/Clarity's base) · **Comparison-SEO** ("Lucky Orange/Clarity alternative" — Propel/MIDA/OptiMonk's dominant channel) · Engineering-as-marketing (the free store scanner as lead magnet) · Email nurture · Partnerships (theme devs/agencies post-redesign).
**Situational:** Community (r/shopify "no sales" threads — where Clarity gets recommended) · Affiliate/referral (proven by Lucky Orange/OptiMonk — but needs customers first) · Webinars/teardowns · SEM · Social/display ads.
**Rarely primary for us:** Viral · Offline ads · PR · Trade shows · Speaking.

### 6e · The 3 to test now — cold-start weighted (test 3, ONLY 3)

The competitors' proven channels (App Store ASO + comparison-SEO + free tier) are *scale* channels
that need reviews/ranking we don't have yet. At **0 customers / 0 reviews you can't rank**, so the
cold-start mix is: **outbound for fast signal, App Store as the compounding base, one SEO page planted early.**

| # | Channel | Cheap test | Success signal | Why |
|---|---|---|---|---|
| 1 | **Founder-led outbound** (sheet + free-scan hook) | 30–40 personalized touches/wk to ICP leads | ≥3 replies / 1 call / **1 install** per 30 | The only *fast-signal* cold-start channel; nobody else does it because they're past this stage |
| 2 | **Shopify App Store base** | Ship the ASO rewrite + free tier + push review velocity + apply BFS | Install-rate or ranking movement | The front door every channel points to; the category's #1 proven channel (MIDA/Propel) |
| 3 | **One comparison-SEO page** | Publish 1 "[Lucky Orange/Clarity] alternative" page, then leave it | Ranks / 1 qualified inbound in 2–3 wks | The category's dominant *discoverable* channel — compounds; plant it now, it can't hurt |

> **Deferred on purpose** (with reasons, so they don't eat the hours): **Affiliate/referral** — real
> channel, but nothing to affiliate at 0 customers; month 2+. **Full content/SEO/GEO engine** —
> compounds over *months*, ~0 paying inside 60 days; one page now, the engine later. **Paid ads** —
> no competitor runs them; uneconomic vs the free floor; don't. **Portfolio cross-promo** — closed to
> a single-app entrant.

---

## 7 · The 50-lead sheet — ICP-gated, pitched by hand

Build from the ICP's gates (§2 of that doc). **A lead passes all six gates or it doesn't go on
the sheet.** A big list of unqualified stores is worse than a small qualified one — it
manufactures activity and hides that we're not reaching the right people.

**Sheet columns:**
`store · contact · trigger · sessions/mo (est) · vertical · geo · free-CRO-report sent? ·
touch 1/2/3 · replied? · call booked? · trialing? · paid? · notes`

### The honest funnel math

| Source | Realistic conversion | Paying |
|---|---|---|
| Warm — 8 active free stores | **Mostly below floor.** Only 1 is a real upgrade conversation | **~1–2** |
| Cold — 50-person hand list | reply 15% × call 30% × close 30% ≈ **1.3% lead→paid** | ~1 |
| Cold — to net ~15 paying | would need **~1,100 leads touched** (not possible by hand) | — |

> ### Realistic 60-day ceiling: ~5–12 paying — and it was ~8–15 before the ICP finding.
>
> A 50-person by-hand list and a 50-paying goal are mathematically incompatible; one has to change.
> **Recommendation:** keep **50 as the north star we scale into**, and make the **real 60-day win**:
> first 5–12 paying + 5–10 App Store reviews + BFS applied + a pitch converting at a *known* rate.
> Hit that and 50 becomes a volume problem we already know how to solve. Set 50-in-60 as the hard
> number and 10 will feel like failure — when 10 first-ever paying customers, from zero, from a
> correctly-targeted ICP, is the actual win.

---

## 8 · Credibility — BFS badge + reviews

Charlie named the real blocker: the app **lacks credibility — not Built-for-Shopify, and almost
no reviews.** In B2B, trust and proof dominate. This is not a nice-to-have.

- **Apply for the Built-for-Shopify badge in Week 1** — lifts App Store ranking 30–50% and is the
  credibility stamp merchants look for.
- **Founding-Merchant offer:** first 15 payers get Growth ($14/mo) at 30% off for 6 months in
  exchange for a written review once they've seen a real result. Closes faster than "try it and
  maybe upgrade," builds review count, produces case-study material. Cap at 15 — the scarcity is real.
  → **The full offer mechanics** (the outcome-gated "Free Leak Report + First Fix Free" entry, and
  the $149 done-for-you tier that breaks the self-serve ceiling) live in
  [dynoweb-offer.md](dynoweb-offer.md) — the founding-merchant deal is one lever inside it.
- Every review and case study warms the next deal. That's the **proof loop** — the one growth loop
  within reach.

**The wedge against free is not features.** Clarity's 1-star reviews are unanimous: *"would not
let me log in"*, *"no support… zero response"*, *"very difficult for a shopkeeper to grasp"*,
*"data basically unusable… all garbled."* **Not one says "I want more features."** Setup,
comprehensibility, support, and Shopify-native context are the opening.

---

## 9 · The free CRO report — the hook, not a fifth channel

*"I ran a free CRO report on your store — here's the top leak costing you sales"* is the outreach
opener that earns replies, and the proof that supports the founding offer. It gives value before
asking, it's personalized (so it can't be ignored like a template), and it demonstrates the core
promise in the first touch.

**Fold it into §7 and §8. Do not run it as its own workstream.**

---

## 10 · The 90-day cadence

| When | Focus | Target (cumulative paying) |
|---|---|---|
| **Week 1** | Ship the overdue listing fix · apply for BFS · start warm interviews · build the ICP-gated named-50 | 0 — groundwork |
| **Weeks 2–4** | Founding offer where honest · 30–40 outbound touches/week with the free CRO report as hook · track the funnel | 3–5 |
| **Weeks 5–8** | Kill the weaker lever, double the winner · watch for review-driven App Store lift | 10–14 |
| **Weeks 9–12** | Referral ask in onboarding · finish the named list · compound toward the north star | 20–30 |

---

## 11 · What has to be true — said plainly

This is aggressive for a motion with **zero proven paid conversions and zero ICP-fit stores in the
base.** It compounds only if, inside the first three weeks, at least one is true:

- **(a)** ICP-gated cold outbound converts meaningfully better than our historical
  install→paid rate (which is currently 0% — a low bar, but it has never been cleared), or
- **(b)** the Founding-Merchant discount is steep enough to overcome *"nobody has paid for this yet."*

If Week 2's scorecard shows neither converting, the honest move is to revisit the offer, the ICP,
or the number — **not** to run the same outreach at higher volume and hope.

**The deeper bet:** that the ICP is right and our base was simply wrong. If ICP-gated stores also
fail to convert, the problem is the product's value at this price, not the targeting — and that's
a different, larger conversation worth having early rather than after 1,000 cold emails.
