import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  MousePointerClick,
  PlaySquare,
  AlertTriangle,
  Sparkles,
  DollarSign,
  Search,
  Code2,
  Flame,
} from "lucide-react";

import {
  MarketingShell,
  Hero,
  Section,
  Card,
  CTA,
  type IconType,
  breadcrumbJsonLd,
} from "@/app/components/seo/Marketing";

export const metadata: Metadata = {
  title: "Case Studies — Real Shopify Stores, Real DynoWeb Data",
  description:
    "See what DynoWeb finds in real Shopify stores: rage clicks, broken product pages, revenue attributed to exact sessions, and dozens of AI-ranked fixes. Real numbers from real merchants.",
  alternates: { canonical: "https://www.dynoweb.app/use-cases" },
  openGraph: {
    title: "Case Studies — Real Shopify Stores, Real DynoWeb Data",
    description:
      "How four Shopify stores used DynoWeb to surface frustration, fix broken pages, and attribute revenue to the exact sessions that drove it.",
    url: "https://www.dynoweb.app/use-cases",
    siteName: "DynoWeb",
    type: "website",
  },
};

/* ------------------------------------------------------------------ */
/*  Accents                                                            */
/* ------------------------------------------------------------------ */

type Accent = { bg: string; fg: string; br: string };
const ACCENTS: Record<string, Accent> = {
  amber: { bg: "rgba(245,158,11,0.12)", fg: "#fbbf24", br: "rgba(245,158,11,0.30)" },
  blue: { bg: "rgba(110,176,255,0.12)", fg: "#6eb0ff", br: "rgba(110,176,255,0.30)" },
  red: { bg: "rgba(248,113,113,0.12)", fg: "#f87171", br: "rgba(248,113,113,0.30)" },
  teal: { bg: "rgba(45,212,191,0.12)", fg: "#2dd4bf", br: "rgba(45,212,191,0.30)" },
};

/* ------------------------------------------------------------------ */
/*  Case-study primitives                                              */
/* ------------------------------------------------------------------ */

type Stat = { value: string; label: string };
type Feature = { icon: IconType; name: string; detail: string };
type Scenario = { point: string; detail: string };

function StatBand({ stats }: { stats: Stat[] }) {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-3">
      {stats.map((s) => (
        <div key={s.label} className="rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-6">
          <p className="font-[Montserrat] text-3xl font-extrabold leading-none tracking-tight text-white sm:text-[2.4rem]">
            {s.value}
          </p>
          <p className="mt-3 text-sm leading-6 text-zinc-400">{s.label}</p>
        </div>
      ))}
    </div>
  );
}

function ResultBand({ stats }: { stats: Stat[] }) {
  const cols = stats.length === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-3";
  return (
    <div className={`grid gap-4 ${cols}`}>
      {stats.map((s) => (
        <div key={s.label} className="rounded-[1.25rem] border border-[#6eb0ff]/15 bg-[#6eb0ff]/[0.04] p-5">
          <p className="font-[Montserrat] text-2xl font-extrabold tracking-tight text-white sm:text-3xl">{s.value}</p>
          <p className="mt-2 text-sm leading-6 text-zinc-400">{s.label}</p>
        </div>
      ))}
    </div>
  );
}

function CaseStudy({
  id,
  accent,
  logo,
  logoLight,
  name,
  type,
  domain,
  headline,
  about,
  heroStats,
  challenge,
  features,
  scenarios,
  results,
  quote,
}: {
  id: string;
  accent: Accent;
  logo: string;
  logoLight?: boolean;
  name: string;
  type: string;
  domain?: string;
  headline: string;
  about: string;
  heroStats: Stat[];
  challenge: ReactNode;
  features: Feature[];
  scenarios: Scenario[];
  results: Stat[];
  quote?: string;
}) {
  return (
    <Section className="pb-12">
      <div
        id={id}
        className="scroll-mt-28 rounded-[2.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.025),rgba(255,255,255,0.008))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:p-8 lg:p-10"
      >
        {/* Store header */}
        <div className="flex items-center gap-4">
          <span
            className={`inline-flex h-14 flex-none items-center justify-center rounded-xl px-3 ${
              logoLight ? "border border-white/10 bg-white/[0.04]" : "bg-white"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logo} alt={`${name} logo`} className="max-h-9 w-auto max-w-[120px] object-contain" />
          </span>
          <div>
            <p className="font-[Montserrat] text-xl font-extrabold tracking-tight text-white">{name}</p>
            <p className="text-sm text-zinc-400">{type}</p>
          </div>
          {domain ? (
            <span className="ml-auto hidden rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-semibold text-zinc-400 sm:inline">
              {domain}
            </span>
          ) : null}
        </div>

        {/* Headline */}
        <h2 className="mt-7 max-w-[26ch] font-[Montserrat] text-2xl font-extrabold leading-[1.12] tracking-[-0.03em] text-white sm:text-[2rem]">
          {headline}
        </h2>
        <p className="mt-4 max-w-[70ch] text-[0.97rem] leading-7 text-zinc-300">{about}</p>

        {/* Hero stat band */}
        <StatBand stats={heroStats} />

        {/* Challenge + Solution */}
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <Card>
            <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.24em] text-zinc-500">The challenge</p>
            <div className="mt-3 space-y-3 text-[0.95rem] leading-7 text-zinc-300">{challenge}</div>
          </Card>
          <Card>
            <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.24em] text-[#6eb0ff]">How DynoWeb helped</p>
            <ul className="mt-4 space-y-4">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <li key={f.name} className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-9 w-9 flex-none items-center justify-center rounded-xl border border-[#6eb0ff]/20 bg-[#6eb0ff]/[0.08] text-[#6eb0ff]">
                      <Icon className="h-4 w-4" strokeWidth={2} />
                    </span>
                    <span className="text-[0.95rem] leading-7 text-zinc-300">
                      <strong className="font-extrabold text-white">{f.name}</strong> — {f.detail}
                    </span>
                  </li>
                );
              })}
            </ul>
          </Card>
        </div>

        {/* Inside the data — scenario points */}
        <div className="mt-6">
          <p className="mb-4 text-[0.7rem] font-extrabold uppercase tracking-[0.24em] text-zinc-500">
            Inside the data — what DynoWeb actually caught
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {scenarios.map((s) => (
              <div key={s.point} className="rounded-[1.25rem] border border-white/10 bg-white/[0.015] p-5">
                <p className="flex gap-2.5 font-[Montserrat] text-[0.98rem] font-extrabold leading-snug tracking-tight text-white">
                  <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full" style={{ background: accent.fg }} />
                  {s.point}
                </p>
                <p className="mt-2 pl-[1.05rem] text-[0.9rem] leading-7 text-zinc-400">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="mt-6">
          <p className="mb-4 text-[0.7rem] font-extrabold uppercase tracking-[0.24em] text-zinc-500">The impact</p>
          <ResultBand stats={results} />
        </div>

        {quote ? (
          <blockquote className="mt-6 rounded-[1.5rem] border-l-2 border-[#6eb0ff]/50 bg-white/[0.02] px-6 py-5">
            <p className="text-[1.02rem] italic leading-8 text-zinc-200">&ldquo;{quote}&rdquo;</p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Illustrative — framed from the data DynoWeb surfaced
            </p>
          </blockquote>
        ) : null}
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

const jumpLinks = [
  { label: "The Punarvasu", href: "#punarvasu" },
  { label: "Sahasika", href: "#sahasika" },
  { label: "Skyline Decor", href: "#skyline" },
  { label: "Yetibeds", href: "#yetibeds" },
];

export default function CaseStudiesPage() {
  return (
    <MarketingShell
      jsonLd={breadcrumbJsonLd([
        { name: "Home", path: "" },
        { name: "Case Studies", path: "/use-cases" },
      ])}
    >
      <Hero
        eyebrow="Case studies — real stores, real numbers"
        title="See what DynoWeb finds in real Shopify stores"
        lead="Every figure below is pulled straight from production — no rounding up, no invented lift. From 52,370 rage clicks on a high-volume wellness brand to live JavaScript errors silently breaking a furniture store, here's what DynoWeb surfaced and what each merchant did about it."
        primaryCta={{ label: "Install DynoWeb free", href: "https://apps.shopify.com/dynoweb", external: true }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
        highlights={["Real production data", "Attributed to exact sessions", "AI-ranked fixes", "Updated June 2026"]}
      />

      <Section className="pb-10">
        <div className="flex flex-wrap gap-3">
          {jumpLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-zinc-300 transition hover:border-[#6eb0ff]/30 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>
      </Section>

      {/* ── Punarvasu ── */}
      <CaseStudy
        id="punarvasu"
        accent={ACCENTS.amber}
        logo="/Punarvasu.png"
        name="The Punarvasu"
        type="Ayurvedic wellness brand · India"
        domain="thepunarvasu.com"
        headline="How The Punarvasu caught 52,370 rage clicks across 3,132 orders with DynoWeb"
        about="The Punarvasu sells Ayurvedic formulations like Gandharva Haritaki and Madhumehari Churna to a high-volume, mobile-first Indian audience — over 34,000 page views and 837,250 tracked interactions all-time."
        heroStats={[
          { value: "3,132", label: "orders · ₹10.85L tracked sales" },
          { value: "837K", label: "interactions captured all-time" },
          { value: "52,370", label: "rage clicks caught" },
        ]}
        challenge={
          <>
            <p>
              Sales volume looked healthy — but underneath it, shoppers were fighting the storefront. DynoWeb counted{" "}
              <strong>52,370 rage clicks</strong> and <strong>15,288 error clicks</strong> across 837,250 interactions:
              classic high-effort, low-reward frustration.
            </p>
            <p>
              The AI engine didn&rsquo;t just total it up — it localized the pain, flagging &ldquo;frustration cluster
              detected&rdquo; and &ldquo;users seem confused&rdquo; on specific pages like the Gandharva Haritaki Tablet PDP,
              the Madhumehari Churna PDP, the homepage, and the cart.
            </p>
          </>
        }
        features={[
          { icon: Flame, name: "Frustration signals", detail: "surfaced 52,370 rage clicks + 15,288 error clicks and grouped them into named clusters." },
          { icon: Sparkles, name: "AI CRO suggestions", detail: "52 ranked fixes (44 Quick Wins) — from a mobile sticky add-to-cart bug to missing Product JSON-LD." },
          { icon: DollarSign, name: "Revenue attribution", detail: "matched 1,154 orders worth ₹4.28L back to the exact tracked sessions that drove them." },
        ]}
        scenarios={[
          { point: "The Gandharva Haritaki Tablet page was the epicentre", detail: "DynoWeb stacked three separate flags on that one PDP — a frustration cluster (score 89), a 'users seem confused' alert (83), and a mobile sticky add-to-cart bug (79)." },
          { point: "It was a mobile problem first", detail: "88% of page views came from mobile (29,881 of 34,078). The rage clicks and the broken sticky add-to-cart hit the phone experience hardest." },
          { point: "Even the homepage and cart had clusters", detail: "Frustration clusters weren't only on product pages — DynoWeb flagged them on the homepage, the /cart page, and a Hindi blog post too." },
          { point: "At a ₹346 AOV, every drop-off compounds", detail: "With 3,132 orders at a ₹346.46 average, friction spread across 52,370 rage clicks quietly scales into real lost revenue." },
          { point: "The catalog was invisible to AI search", detail: "The top-scored fix (95) was missing Product structured data (JSON-LD) across all product pages — leaving the range unreadable to AI shopping assistants." },
          { point: "It also found what to amplify", detail: "Not just problems: DynoWeb flagged a high-performing element (#checkout2) on the Gandharva Haritaki page to lean into, backed by 14 CRO reports across 200 analysed pages." },
        ]}
        results={[
          { value: "1,154", label: "orders attributed to a tracked session" },
          { value: "₹4.28L", label: "sales tied to exact sessions" },
          { value: "44", label: "Quick-Win fixes ready to ship" },
        ]}
        quote="We thought our volume meant the store was fine. DynoWeb showed us tens of thousands of rage clicks — and exactly which product pages were causing them."
      />

      {/* ── Sahasika ── */}
      <CaseStudy
        id="sahasika"
        accent={ACCENTS.blue}
        logo="/Sahasika.png"
        name="Sahasika"
        type="Men's ethnic wear · India · Facebook-driven D2C"
        domain="sahasika.in"
        headline="How Sahasika turned 598 session replays into ₹97,767 of converting sessions with DynoWeb"
        about="Sahasika is a mobile-first men's ethnic-wear label (kurta sets and more) pouring paid social into acquisition — ₹9.8L of referral revenue, with Facebook alone driving 11,372 visits."
        heroStats={[
          { value: "598", label: "session replays captured" },
          { value: "₹97,767", label: "revenue in converting replayed sessions" },
          { value: "₹3.97L", label: "sales attributed to exact sessions" },
        ]}
        challenge={
          <>
            <p>
              Sahasika was spending hard on Facebook — <strong>₹9.8L in referral revenue</strong> across 20,666 visits —
              but couldn&rsquo;t see where that expensive traffic was getting stuck.
            </p>
            <p>
              DynoWeb found the friction: <strong>40,324 rage clicks</strong>, plus <strong>1,067 JavaScript-error hits</strong>{" "}
              across 63 distinct issues — including &ldquo;the string did not match the expected pattern&rdquo; firing 285
              times on the Mens Kurta Sets collection and repeated load failures on key product pages.
            </p>
          </>
        }
        features={[
          { icon: PlaySquare, name: "Session replays", detail: "598 recordings captured; 35 of them converted, worth ₹97,767 — the exact journeys that ended in a sale." },
          { icon: AlertTriangle, name: "Error tracking", detail: "caught 1,067 JS-error hits across 63 issues, pinned to the precise URLs they broke on." },
          { icon: Code2, name: "AI CRO suggestions", detail: "64 fixes (5 already implemented) led by missing Product structured data and title tags." },
          { icon: DollarSign, name: "Revenue attribution", detail: "tied 162 orders worth ₹3.97L back to the sessions that produced them." },
        ]}
        scenarios={[
          { point: "The Mens Kurta Sets collection was a bug magnet", detail: "The same 'string did not match the expected pattern' error fired 285 times on that collection — while AI separately flagged poor visibility of its search, sort, and 'open sidebar' controls." },
          { point: "Autofill and load failures on paid product pages", detail: "The Mens Off-White PDP alone logged Fetch-aborted (105), an autofill ReferenceError (84), and Load-failed (75) — friction on the exact pages Facebook ads pointed at." },
          { point: "Sessions were long and effortful", detail: "Replays averaged 311 seconds with an average frustration score of 32.7 — these were shoppers working hard, not browsing happily." },
          { point: "Returning shoppers were the most valuable", detail: "Returning customers posted the highest AOV (₹2,834 vs ₹2,778 for new) — a small, high-value segment worth protecting from the friction." },
          { point: "A custom checkout was hiding revenue", detail: "With Shopflo handling checkout, script-only tools miss orders — yet DynoWeb still tied 162 orders / ₹3.97L back to their originating sessions." },
          { point: "A structured-data and barcode backlog", detail: "Missing Product JSON-LD, missing title tags, and 50 products without barcodes all topped the fix list at score 95." },
        ]}
        results={[
          { value: "35", label: "replayed sessions that converted" },
          { value: "₹97,767", label: "revenue in those sessions" },
          { value: "1,067", label: "JS-error hits caught" },
          { value: "162", label: "orders attributed (₹3.97L)" },
        ]}
        quote="DynoWeb let us watch the sessions that actually converted — and caught over a thousand JavaScript errors we never knew were firing on our paid traffic."
      />

      {/* ── Skyline Decor ── */}
      <CaseStudy
        id="skyline"
        accent={ACCENTS.red}
        logo="/SkyLine.png"
        logoLight
        name="Skyline Decor"
        type="Home & furniture retailer · USA"
        domain="skylinedecor.com"
        headline="How DynoWeb caught 33 live errors breaking Skyline Decor's product pages"
        about="Skyline Decor sells dining tables, patio sets, and vanities to a US audience. The store looked fine on the surface — until DynoWeb started listening to the storefront itself."
        heroStats={[
          { value: "297", label: "error hits caught on the storefront" },
          { value: "33", label: "live errors (32 JS + 1 broken link)" },
          { value: "14", label: "visits already arriving from ChatGPT" },
        ]}
        challenge={
          <>
            <p>
              Skyline&rsquo;s product pages were throwing <strong>real JavaScript errors</strong> — and nobody knew. DynoWeb
              logged <strong>32 distinct JS errors over 297 hits</strong>, including{" "}
              <em>&ldquo;Uncaught SyntaxError: Unexpected token &lsquo;=&rsquo;&rdquo;</em> 42 times on a product page and{" "}
              <em>&ldquo;Importing a module script failed&rdquo;</em> 39 times on another.
            </p>
            <p>
              At the same time, AI search engines were starting to send traffic — <strong>14 visits from ChatGPT</strong>,
              plus Bing, DuckDuckGo and Brave — making it critical that product data be readable and error-free for the
              crawlers and assistants now shopping on customers&rsquo; behalf.
            </p>
          </>
        }
        features={[
          { icon: AlertTriangle, name: "Storefront error tracking", detail: "surfaced 32 JS errors across 297 hits with the exact message and the exact product URL each one broke on." },
          { icon: Search, name: "AI-search (GEO) readiness", detail: "flagged the store as already drawing ChatGPT traffic — and what to fix so AI assistants can read and cite its products." },
          { icon: PlaySquare, name: "Session replays", detail: "19 recordings captured so the team could watch the broken experiences first-hand." },
        ]}
        scenarios={[
          { point: "The Baxton Studio PDP was failing two ways at once", detail: "The same product page threw both 'Importing a module script failed' (39 hits) and 'undefined is not an object' (29 hits) — a broken script cascading into a broken page." },
          { point: "These were hard parse failures, not glitches", detail: "'Uncaught SyntaxError: Unexpected token =' (42 hits) and 'Unexpected end of input' (12) mean the JavaScript literally won't run — on live product pages." },
          { point: "Browsing broke before the product even loaded", detail: "Collection pages weren't spared — dining-tables and patio collections logged network and module-script failures of their own." },
          { point: "ChatGPT is already sending shoppers", detail: "14 visits came from chatgpt.com — more than Bing, DuckDuckGo and Brave combined — making error-free, readable product data a present-tense priority." },
          { point: "The breakage hit desktop and mobile alike", detail: "Page views split 293 desktop to 269 mobile, so the errors degraded the experience for both audiences equally." },
          { point: "Caught early, before launch-scale traffic", detail: "DynoWeb surfaced all of this at just 118 sessions this month — the cheapest possible moment to fix a broken storefront." },
        ]}
        results={[
          { value: "32", label: "JS errors surfaced with exact pages" },
          { value: "297", label: "error hits logged" },
          { value: "ChatGPT", label: "now a tracked traffic source (14 visits)" },
        ]}
        quote="We had no idea our product pages were throwing syntax errors. DynoWeb handed us the exact message and the exact page — before it cost us the sale."
      />

      {/* ── Yetibeds ── */}
      <CaseStudy
        id="yetibeds"
        accent={ACCENTS.teal}
        logo="/yetibeds-logo.png"
        logoLight
        name="Yetibeds"
        type="Online furniture retailer · beds, bunk beds & more"
        domain="yetibeds.com"
        headline="How one heatmap showed Yetibeds shoppers were clicking the wrong thing"
        about="Yetibeds sells beds, bunk beds, chairs and dining sets to a desktop-heavy audience. Traffic was climbing fast — page views ▲95.1% and sessions ▲81.4% month over month — but something on the homepage was quietly costing conversions."
        heroStats={[
          { value: "Mouse Shake", label: "the #1 behavioral signal store-wide" },
          { value: "14%", label: "scroll depth on the homepage" },
          { value: "100%", label: "of tracked sales attributed to the exact session" },
        ]}
        challenge={
          <>
            <p>
              The store&rsquo;s most common signal wasn&rsquo;t a click — it was <strong>Mouse Shake</strong>, the
              cursor-thrashing that means confusion, with Dead Clicks close behind. Pages were logging interaction rates
              over 1,000% (shoppers clicking many times per view) yet converting poorly.
            </p>
            <p>
              The killer detail came from the homepage heatmap: clicks and mouse-shake were clustering on the{" "}
              <strong>decorative hero image</strong>, not the SHOP NOW button — and only <strong>14% scroll depth</strong>{" "}
              meant most visitors never got past the hero. Meanwhile <strong>74 returning visitors came back and didn&rsquo;t buy</strong>.
            </p>
          </>
        }
        features={[
          { icon: MousePointerClick, name: "Heatmaps", detail: "the homepage click map exposed shoppers tapping the hero artwork instead of the CTA — a single screenshot that explained the drop-off." },
          { icon: Flame, name: "Behavioral signals", detail: "ranked Mouse Shake as the store's #1 signal and tied >1,000% interaction rates to real frustration clusters." },
          { icon: Sparkles, name: "AI CRO suggestions", detail: "matched 42 concrete fixes (40 Quick Wins) — from Product structured data and alt text to the confused-hero flags." },
          { icon: DollarSign, name: "Revenue attribution", detail: "attributed 100% of tracked sales to the exact session that drove them, on a fast-growing month." },
        ]}
        scenarios={[
          { point: "The homepage hero is a trap", detail: "141 mouse-shakes and 26 dead clicks landed on the Home hero, where scroll depth was just 14% (13% above the fold) — visitors poked the decorative image and left before reaching the products." },
          { point: "1,457% interaction on /products_preview", detail: "The most-viewed page logged 1,501 clicks across 103 views — frantic, repeated clicking that's a textbook rage pattern, not engagement." },
          { point: "Search was carrying the load", detail: "/search saw 687 clicks across just 27 views (2,544% interaction) — shoppers couldn't find products by browsing, so they hammered the search bar." },
          { point: "One PDP proves the catalog can convert", detail: "The Barnstorm upholstered-bed page turned 1 of 2 buy-intent clicks into a $559 order — a 50% page conversion rate when the path was clear." },
          { point: "An unusual desktop-and-India profile", detail: "91% of sessions were desktop and 76.6% of visits came from India — a profile DynoWeb surfaces so the team optimises for the audience it actually has." },
          { point: "42 fixes on a store the owner thought was 'done'", detail: "Beyond the hero: missing Schema.org data, 50 products without barcodes, and missing alt text — invisible-to-AI-search gaps, 28 already surfaced as ready to review." },
        ]}
        results={[
          { value: "42", label: "AI fixes found (40 Quick Wins)" },
          { value: "▲95.1%", label: "page views month over month" },
          { value: "▲81.4%", label: "unique sessions month over month" },
          { value: "100%", label: "tracked sales attributed" },
        ]}
        quote="One heatmap told us everything: our shoppers were clicking the pretty hero image, not the Shop Now button — and most never scrolled past it."
      />

      <Section className="pb-6">
        <p className="text-center text-xs text-zinc-500">
          All figures are real, pulled from DynoWeb production data on 6 June 2026. Story framing is ours; the numbers are not.
        </p>
      </Section>

      <CTA
        title="See what DynoWeb finds in your store"
        body="Install free and DynoWeb starts surfacing your store's rage clicks, broken pages, and revenue-leaking moments — each with a ranked, dev-ready fix."
        primaryLabel="Install DynoWeb free"
        secondary={{ label: "Read the Shopify CRO guide", href: "/shopify-cro" }}
      />
    </MarketingShell>
  );
}
