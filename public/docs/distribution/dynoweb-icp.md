# DynoWeb ICP — The Definitive Profile

> **Status:** Canonical. This is the one document we follow. Every outreach list, listing
> keyword, landing headline, and channel bet is checked against it. If a decision contradicts
> this doc, either the decision is wrong or this doc needs a documented update — never both silently.
>
> **Established:** 2026-07-17 · **Method:** DynoWeb repo docs (`philosophy.md`, founder docs) +
> live production DB + primary-source web research (Shopify Community threads, App Store reviews,
> SEC filings, Store Leads). Blogspam and uncited statistics were actively rejected.

---

## The ICP, in one sentence

> **A US or EU Shopify store doing 5,000–50,000 sessions/month in Beauty/Personal-Care or
> Apparel, that just changed something — a redesign, a theme swap, a migration, or a new paid-ads
> push — and is now watching sales fall or flatline while traffic holds, with no dev on call and
> no idea which specific thing broke.**

The trigger is what turns a fit into a *now*. Without it you have a store that qualifies but
won't buy this month.

---

## 1. The binding constraint is detectability — not willingness to pay

This is the core insight, and it inverts the usual way of picking an ICP.

The value bar is trivially easy to clear. A sustained +0.5pp conversion lift is worth:

| Sessions/mo | AOV $30 | AOV $60 | AOV $100 |
|---|---|---|---|
| 1,000 | $150 | $300 | $500 |
| 5,000 | $750 | $1,500 | $2,500 |
| 25,000 | $3,750 | $7,500 | $12,500 |

At **~580–1,900 sessions/month** a merchant already gets 10x ROI on $29/mo. So "can they afford
it / is it worth it" is not the constraint — almost any real store clears that.

**The constraint is whether our instruments can see anything at their traffic level:**

| Instrument | Minimum traffic to be honest | Consequence below it |
|---|---|---|
| Session replay | **20–30 recordings** | Works — this is our zero-traffic-ish asset |
| Static store/theme/SEO scan | **0 sessions** | Works — philosophy P4's first-session value |
| Heatmaps | **400–600 per page** (200–300 per device type), 1,000+ to act | "Noise dressed up as signal" — 4 users clicking the same spot looks like a hotspot |
| Nudge attribution | ~5,000+/mo for a credible read | Attribution numbers we can't stand behind |
| A/B test (+10% lift) | **~161,000–216,000 sessions** | Arithmetically unavailable to our entire market |

**The consequence, stated plainly: A/B testing can never be DynoWeb's proof mechanism.** It is
out of reach for every store in our ICP and beyond it. Replay (works at 30) and per-nudge
attribution are the only honest evidence we can offer. Anyone who asks us to "prove it with a
split test" is asking for something the math doesn't allow at this store size — say so, and
show replay + attribution instead.

### The gap that defines us

> Between **~2,000 and ~20,000 sessions/month**, a conversion lift is **worth real money but
> cannot be proven by A/B test.** That gap is our market. Stores in it need someone to *see* the
> problem for them, because they can't test their way to it. That is exactly what we sell.

### The floor and the ceiling

- **Floor: ~5,000 sessions/month** for a *paying* customer. Below this, heatmaps are noise and
  attribution isn't credible — we'd be selling a mirror that can't focus. **This is physics, not
  preference.** (Our FREE tier at 1,500 sessions honestly serves below-floor stores with the
  static scan + replay. That is the correct home for them — not a paid plan.)
- **Ceiling: ~50,000 sessions/month.** Above this they hire CRO agencies (Speero gates at 100k
  uniques / $10k/mo) and buy real experimentation platforms. We lose to specialists.

### Our pricing already encodes this — confirm it, don't fight it

| Tier | Sessions | Who it's actually for |
|---|---|---|
| Free $0 | 1,500 | Below-floor stores. Static scan + replay. **Not a failed sale — the right home.** |
| **Growth $14** | **7,500** | **← THE ICP TIER.** Sits right above the 5,000 detectability floor. |
| Pro $29 | 35,000 | Upper ICP, approaching the agency ceiling |
| Custom $39+ | 100k+ | Above ICP — rare, mostly bespoke |

**Growth ($14 / 7,500 sessions) is the ICP product.** Everything in acquisition should aim a
merchant at that tier. This is a strong signal we priced right even before we knew why.

---

## 2. The qualification gates (a lead passes ALL of these, or it isn't a lead)

| # | Gate | Pass | Reject |
|---|---|---|---|
| 1 | **Traffic** | 5,000–50,000 sessions/mo | <5,000 (can't see) · >50,000 (agency buys) |
| 2 | **Vertical** | Beauty & Personal Care, Apparel/Fashion | Jewelry/Luxury, Home & Furniture (see §3) |
| 3 | **Geography** | US, UK, EU, CA, AU | India (see §4) |
| 4 | **Trigger** | Redesign/migration/theme change, or new/scaled paid ads, in the last ~90 days | No trigger = qualifies but won't buy now |
| 5 | **Baseline** | Store is ≥6 months old with a conversion-rate history to miss | Brand-new store — nothing to compare against, and usually pre-product-market-fit |
| 6 | **Ownership** | Owner/ops lead reachable, no dev team on call | Has an in-house dev/CRO team → they build or buy enterprise |

Gate 5 deserves emphasis. **An established store that *used to* convert and now doesn't is our
best customer**, because the problem is a specific, findable regression — not "my whole business
idea is unproven." A brand-new store with no sales usually has a product/market problem that no
heatmap can fix, and telling them otherwise violates philosophy P8 (honesty over hype).

---

## 3. Vertical — and the trap

**Target: Beauty & Personal Care first, Apparel/Fashion second.** These are also the two largest
Shopify categories (Apparel 780,769 stores / 27.2%; Beauty & Fitness 312,461 / 10.9% — Store Leads).

The counterintuitive part — sessions needed to read a +10% lift, by vertical baseline CR:

| Vertical | Typical CR | Sessions to prove +10% | Verdict |
|---|---|---|---|
| Beauty & Personal Care | 5.37% | ~58,000 | **Best** — highest CR = fastest signal |
| Fashion / Apparel | 2.81% | ~114,000 | **Good** — plus it's the biggest category |
| Home & Furniture | 1.2% | ~271,000 | Weak |
| **Luxury & Jewelry** | **0.71%** | **~460,000** | **AVOID — the trap** |

> **The jewelry/luxury trap.** Highest AOV ($386), lowest CR (0.71%) — it *looks* like the
> perfect CRO customer: lots of money on the table per conversion. It is the worst one.
> It needs **8x Beauty's traffic** to produce a readable signal, while burning through our
> session-metered cap the entire way. **Under a session-based paywall, low-CR verticals are
> structurally our worst-margin customers.** Low CR is a cost, not an opportunity.

This is not academic — see §7. Our single highest-traffic store is a jewelry store converting at
0.20%. It is our best-looking lead and our worst-fitting one.

---

## 4. Geography — US/EU, not India

The evidence is one-directional and the founder being India-based does not change it:

- **Market size:** US 1,090,648 Shopify stores (38.0%) vs India 121,839 (4.2%) — 8.9x (Store Leads, Jul 2026).
- **Spending power:** India doesn't reach the top-6 Plus countries despite 4.2% store share — a
  heavy under-index. US sits at parity (38.0% stores / 37.5% Plus).
- **The decisive fact — we cannot price for India even if we wanted to.** Shopify's managed
  pricing has **no per-country pricing.** Local currency billing (INR) is supported, but that is
  a display/settlement feature, not regional pricing. A $14 plan is $14 everywhere. Shopify's own
  pricing discounts India 47% on Basic — we structurally cannot match that gesture.
- **The metric itself is corrupted in India:** COD RTO hits 58% in festive season (Unicommerce
  D2C Report 2026, 6,000+ brands). A large share of Indian "conversions" never become revenue —
  which poisons the exact number a CRO app sells against. We'd be optimizing a lie.

**Being India-based is a cost advantage. It is not a market signal. Decouple them.**
Convenient: India over-indexes in Apparel (47,683 stores, 1.45x), so a Beauty+Apparel focus
doesn't *exclude* Indian merchants — we just don't *price*, *target*, or *build* for them.

---

## 5. Trigger events — ranked by evidence strength

**1 · Post-redesign / theme change / migration — the BEST trigger (use this one)**
An established store with a baseline it can miss. Verbatim, from Shopify Community:

> *"In the last few years our conversation rate has dropped off a cliff to now around 0.3/4 we
> use to be around 1.8."* — baby boutique owner, Feb 2026
>
> Resolution 3 weeks later: *"**We found out what this was. The discount code was not applying in
> the cart drawer slider. Fixed it and it was like night and day.**"*

**Every community responder guessed wrong** — they blamed emojis, cluttered navigation, missing
trust badges. The actual cause was a technical bug that only session replay or storefront error
tracking would have caught, and it cost her ~1.4pp of conversion for weeks. **That thread is our
entire product thesis, documented in the wild by a stranger.** Use it as the reference case.

**2 · Started or scaled paid ads — the highest-volume trigger**
Nearly every "traffic but no sales" post is ad-triggered. Verbatim:

> *"I am getting a decent amount of sessions per day (~300) but I am not getting ANY sales."*
> *"I had about 2,500 visitors over the 10 days... I've only had 3 add-to-carts and zero sales."*

Caution: many of these are brand-new stores failing Gate 5 — the pain is loud but the store is
often pre-PMF. Filter hard on store age and baseline.

**3 · BFCM / seasonal — WEAK, do not build on it.** Searching produced Shopify-staff and vendor
checklists, **not merchant distress posts.** Plausible, unevidenced.

---

## 6. Vocabulary — verified, refuted, and the one we use

> **Full guide:** the complete, per-feature, paste-able version lives in
> [dynoweb-vocabulary.md](dynoweb-vocabulary.md) — use that when writing any ad, page, listing, or
> email. This section is the ICP-level summary; the vocab doc adds two more verified bans
> (**"nudge"** → say "popup"; **"attribution"** → say "what's making you money"), the emotional
> tone, and ready copy for all 16 features.

This section is binding on all copy: listing, site, outreach, video.

| Phrase | Verdict | Evidence |
|---|---|---|
| **"lost sales"** | ✅ **THE category phrase — use it** | MIDA: *"Fix lost sales: live replays…"* · Propel: *"Fix lost sales: record session replays…"* · Plerdy: *"Avoid lost sales…"* — three competitors independently converged on the same words |
| **"traffic but no sales"** | ✅ **VERIFIED merchant vocabulary** | Six+ Shopify Community thread titles use it near-verbatim: *"Have visitors but no sales"*, *"Over 1000 Visitors No Sales"*, *"High website traffic, but no sales"* |
| **"drop off" / "stuck" / "friction"** | ✅ Merchant verbs, from their own reviews | *"where customers drop off or get stuck"*, *"spot where visitors get stuck, what they ignore"* |
| **"conversion rate"** | ✅ Native merchant vocabulary | *"Conversion rate dropped off a cliff"*, *"Plummeting Conversion Rate"* |
| **"leaking funnel" / "funnel leak"** | ❌ **REFUTED — vendor vocabulary** | **Zero merchant posts found.** Only vendor marketing (Shopify's own blog, OptiMonk, HulkApps). Using it = speaking vendor-to-vendor |
| **"CRO"** | ❌ **REFUTED — vendor vocabulary** | Every CRO-titled community thread was posted by an app vendor or consultant, with vendor repliers. **The CRO threads are vendors talking to each other** |
| **"AI CRO Expert"** | ❌ Dead on both counts | Merchant says neither "CRO" nor "expert"; and "AI-powered" is now table-stakes (Clarity free, MIDA $9.90, Propel scaled) |

**The dominant merchant verbs are: see · watch · spot · find.** Merchants want to *see*.

> ⚠️ **Tension to hold consciously.** "Fix lost sales" is proven to be what merchants respond to —
> and it's the *exact* tagline MIDA and Propel already use. Match it for **discovery** (it's what
> they search and recognize); do **not** stop there for **differentiation**. Our distinct claim is
> the loop — *diagnose from replay/error data → deploy the nudge → attribute the money, in one
> app.* Same door, different room.

---

## 7. The reality check: our current installed base is NOT our ICP

This is the most important finding in this document, and it reframes the whole distribution plan.
Pulled live from production, 2026-07-17 (`TrafficDailyRollup`, 30-day window):

| Store | Sessions/30d | CR | Currency | Vertical | ICP verdict |
|---|---|---|---|---|---|
| mexican-oaxacan-silver-jewelry | **5,511** | 0.20% | USD | **jewelry** | ⚠️ Only store above floor — **in the trap vertical** |
| freshleafindia | 2,540 | 1.18% | INR | — | ❌ Below floor · wrong geo (best revenue: $11.3k/30d) |
| esselbath1 | 2,050 | **0.00%** | INR | — | ❌ Below floor · zero conversions (broken?) |
| cofainc | 1,481 | 0.00% | CAD | — | ❌ Below floor |
| sahasika *(partner)* | 1,104 | 0.18% | INR | fashion/ethnic | ❌ Below floor · wrong geo |
| bd00fa-3 | 940 | 0.00% | USD | home/furniture | ❌ Below floor · weak vertical |
| kitchener-printkia | 687 | 0.87% | CAD | — | ❌ Below floor |
| skyline-decor | 681 | 0.15% | USD | — | ❌ Below floor |
| *…11 more* | <700 | — | mostly INR | — | ❌ Far below floor |

**Verdict: zero of our ~18 real stores sit in the ICP.** Exactly one clears the traffic floor, and
it is jewelry — the one vertical we should avoid. The base skews heavily INR. Most stores are 5–10x
below the floor where our instruments can honestly see anything.

### What this actually means — read this twice

**Our 0 paying customers is not a sales problem or a pricing problem. It is an acquisition-targeting
problem.** We have been acquiring stores that are *structurally incapable* of getting recurring
value from the product. They install, the heatmap shows noise (because 400 sessions can't fill one),
there's nothing to act on, and they never pay. That is the honest mechanism, and it's consistent
with every number above.

**Three consequences, all uncomfortable:**

1. **The warm-18 is a weak source of paying customers.** Earlier planning assumed warm converts
   fastest (3–5 paying). On this evidence that is optimistic — most of them are below the floor
   where we can deliver honestly, and selling to them anyway would violate philosophy P8. They are
   still the **best source of interviews** (they're real merchants who installed and can say why
   they stalled) — just not the best source of revenue. **Interview them; don't count on their money.**
   The exception: **mexican-oaxacan-silver-jewelry** is capped and above-floor — a real upgrade
   conversation, despite the vertical.
2. **The named-50 list must be built from stores we do not have yet.** The ICP is a *hunting*
   spec, not a description of our base.
3. **Free-tier below-floor installs are not failures** — they're correctly-placed. But they should
   never be counted as pipeline, and the plan's targets must not assume they convert.

### Data gap worth fixing
`Shop.businessType` is **null for 13 of 18 real stores** — we cannot segment our own base by
vertical. Since vertical is now an ICP gate, this field should be populated (it's already
inferred for some stores via `businessTypeSource`). Cheap fix, high leverage.

---

## 8. The anti-ICP — who we explicitly do not serve

Saying this out loud is what makes the ICP real. We do **not** serve:

- **Stores under ~5,000 sessions/mo** on a *paid* plan. Our instruments can't see. Free tier is
  their honest home. Selling them Growth is a refund and a 1-star review.
- **Brand-new stores with no sales.** Usually a product/market problem. No heatmap fixes that,
  and pretending otherwise is the fabrication philosophy P8 forbids.
- **Jewelry / luxury.** The trap. Low CR = unreadable signal + worst margin under a session cap.
- **India-based merchants** as a *target* (they're welcome, we just don't build/price/hunt for them).
- **Stores with an in-house dev or CRO team.** They build it or buy enterprise (FullStory,
  Contentsquare).
- **>50,000 sessions/mo.** They hire agencies and buy experimentation platforms.
- **Anyone who needs an A/B test as proof.** Arithmetically impossible at this store size — we'd
  be promising what we can't deliver.

---

## 9. Two competitive facts the ICP must respect

**1 · Heatmaps and replays cannot be what we charge for.** Microsoft Clarity set that price at
**$0** and out-reviewed the entire paid field (1,570 reviews) within 12 months. MIDA undercuts our
$14 at **$9.90 for 5,000 sessions** with a **4.9★**. Our $14/7,500 wins marginally on
sessions-per-dollar, and our free tier (1,500 vs MIDA's 250) is 6x more generous — but we are
still priced above the category's most-loved paid entry while a free competitor gives away more.
**The mirror is a commodity. The act is the product** (philosophy P1).

**2 · Clarity's 1-star reviews tell us where the money is — and it isn't features:**

> *"the system would not let me log in or properly link my account"*
> *"no support available. I've repeatedly emailed microsoft… I get zero response."*
> *"Very difficult for a shopkeeper/retailer to grasp"*
> *"popup makes the data basically unusable… site content is all garbled"*

**Every complaint is "I can't set it up / can't read it / nobody helps me." Not one is "I want
more features."** That maps exactly onto philosophy P6 (*plain language over jargon*, *one clear
next action*) and P1 (*act, don't mirror*). Setup, comprehensibility, support, and Shopify-native
context are the wedge against free.

> ⚠️ **Moat honesty check.** Wisepops and OptiMonk (4.7★, free to 10k pageviews, $29/20k)
> **already ship popups with revenue attribution and A/B testing.** "Deployed intervention +
> attribution" is *not* itself unique. What is plausibly unique is the **loop** — diagnose →
> deploy → attribute, in one app. Pressure-test that claim before it becomes load-bearing marketing.

**3 · Bot filtering is an ICP-level risk, not a hygiene task.** MIDA's 1-star reviews are dominated
by it:

> *"MIDA recorded 350+ 'sessions'… all clearly bot traffic. **Consumed my entire free 250-session
> limit immediately.** NO bot filtering. All data meaningless."*

We bill on session count. philosophy P5 already anticipates this; the research confirms it is the
category's **#1 trust wound.** Filtering bots before the billing counter is the difference between
4.9★ and 1★ — and at our ICP's traffic level, bot pollution also destroys the signal we sell.

---

## 10. Market sizing — with honest error bars

Each step below is **our assumption, not data.** The real Shopify revenue distribution is not
publicly knowable (Shopify hasn't disclosed merchant counts since 2021; every "5.6M stores /
13.95% make >$10k" statistic in circulation is uncited blogspam — the false-precision decimal is
the tell).

```
2.87M live Shopify storefronts        (Store Leads — the one defensible count,
                                       triangulated against Shopify's SEC-filed $205M MRR)
  × ~16.7% that pay for any app       (83.3% pay $0 for apps — directional, ±25%)
  × ~25% at ≥5,000 sessions/mo        (assumption — no public data exists)
  × ~50% with adequate AOV/vertical   (assumption)
  ≈ ~60,000 serviceable stores
  × 1% capture × $29/mo               ≈ ~$209k ARR
```

**That is the honest ceiling of this ICP as currently priced.** It is a real business and a
bootstrap-viable one. It is not a venture-scale market at $14–29/mo. If we ever need a bigger
number, the lever is **price/tier** (moving upmarket toward the agency ceiling), not a looser ICP —
loosening the ICP just re-creates the current situation: installs that can't convert.

---

## 11. How to use this document

**Before adding any lead to the 50-lead sheet**, run gates §2. If it fails a gate, it doesn't go
on the sheet. A big list of unqualified stores is worse than a small list of qualified ones —
it manufactures activity and hides the fact that we're not reaching the right people.

**Before writing any copy**, check §6. If the draft contains "CRO", "leaking funnel", or "AI CRO
Expert", it's wrong regardless of how good it sounds.

**Before believing a lead is hot**, check the trigger (§5). No trigger = a fit, not a *now*.

**When this doc is wrong, update it explicitly** — with the evidence that changed, and the date.
This is a living spec, but it changes by evidence, never by vibe.

### Open questions to close via merchant interviews
1. Does the **redesign trigger** actually outrank the **paid-ads trigger** in our own funnel? (The
   research says redesign is the better *fit*; volume may say otherwise.)
2. Is **Beauty** actually reachable for us, or is Apparel the practical wedge given India's
   apparel over-index and our existing (weak) apparel toehold?
3. Does the **loop claim** (diagnose → deploy → attribute) land as differentiated with a merchant
   who already knows Wisepops/OptiMonk exist?
4. What did the ~18 below-floor stores *think* they were installing? Their answer tells us what our
   listing currently promises — and to whom it's wrongly aimed.

---

## Sources

Primary sources only; blogspam and uncited statistics rejected.

- **Internal:** `philosophy.md` (P1, P4, P5, P6, P8), `docs/founder/EXECUTION_PLAN_2026-05-20.md`,
  `app/services/billing.shared.ts` (pricing), live production DB (`TrafficDailyRollup`, `Shop`,
  `Billing`) — 2026-07-17
- **Merchant vocabulary & triggers:** Shopify Community threads (linked verbatim in §5, §6);
  Shopify App Store reviews for Microsoft Clarity, MIDA, Propel
- **Market structure:** Store Leads Shopify reports (Jul 2026); Shopify FY2025 10-K & Q4 2025
  results (SEC); Shopify FY2021 40-F (ARPU cross-check)
- **Benchmarks:** Littledata (n=2,800 Shopify sites) for CR; Dynamic Yield vertical benchmarks;
  Zoho PageSense + NN/g for heatmap/replay minimums
- **India:** Unicommerce India D2C Report 2026 (6,000+ brands, 410M shipments); Shopify India vs
  US pricing pages; Shopify managed-pricing docs

**Known research limitation:** Reddit was inaccessible to the research tooling (403/blocked
crawler). All merchant quotes come from Shopify Community and App Store reviews — both primary
sources with real merchants, but r/shopify's vocabulary is unsampled. Worth a manual pass if a
vocabulary decision is ever close.
