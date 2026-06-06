import type { Metadata } from "next";
import { Webhook, GitBranch, TrendingUp, DollarSign, Target, BarChart3, Fingerprint, ShieldAlert } from "lucide-react";

import {
  MarketingShell,
  Hero,
  Section,
  SectionHeading,
  FeatureGrid,
  FeatureRow,
  FAQ,
  CTA,
  RelatedLinks,
  faqJsonLd,
  breadcrumbJsonLd,
} from "@/app/components/seo/Marketing";
import { ChartCard, DonutChart } from "@/app/components/seo/Charts";

export const metadata: Metadata = {
  title: "Revenue Attribution — Track What Actually Drives Shopify Sales",
  description:
    "Tie every fix to actual revenue. DynoWeb's revenue attribution connects behavioral insights to sales, so you know exactly which changes moved the needle.",
  alternates: { canonical: "https://www.dynoweb.app/features/revenue-attribution" },
  openGraph: {
    title: "Revenue Attribution — Track What Actually Drives Shopify Sales",
    description:
      "Shopify revenue attribution that connects behavioral fixes to real orders via Shopify webhooks — measure the actual revenue impact of every change.",
    url: "https://www.dynoweb.app/features/revenue-attribution",
    siteName: "DynoWeb",
    type: "article",
  },
};

const why = [
  { icon: Target, title: "Stop guessing which change worked", body: "When you ship multiple fixes, attribution shows which one actually moved revenue — so you double down on what works." },
  { icon: DollarSign, title: "Justify the optimization budget", body: "Tie CRO work to dollars, not opinions. Show leadership the revenue produced by specific on-site changes." },
  { icon: BarChart3, title: "Prioritise by real ROI", body: "Attribution feeds back into the AI engine, sharpening which suggestions get ranked highest for your store." },
  { icon: Webhook, title: "Real orders, not proxies", body: "Because it uses Shopify's backend order data, attribution reflects actual purchases — including revenue your storefront scripts can miss." },
];

const faqs = [
  {
    q: "What is revenue attribution for Shopify?",
    a: "Revenue attribution connects the changes you make on your storefront to the actual revenue they generate. DynoWeb does this using Shopify's native order webhooks, mapping completed orders back to the page journeys and behavioral fixes that preceded them — so you can measure which optimizations truly increased sales.",
  },
  {
    q: "How is this more accurate than script-based tracking?",
    a: "Script-based revenue tracking can miss orders due to ad blockers, consent gating, or checkout redirects. DynoWeb reads order data server-side via Shopify webhooks, so attribution reflects real completed purchases rather than client-side estimates.",
  },
  {
    q: "Can I see the revenue impact of a specific fix?",
    a: "Yes. After you implement a suggested fix, DynoWeb tracks the revenue change attributed to the affected pages and journeys — turning the engine's projected lift into a measured outcome you can report on.",
  },
  {
    q: "Does revenue attribution work with my existing analytics?",
    a: "Yes. DynoWeb's attribution is complementary — it focuses on connecting on-site behavioral fixes to revenue, while your broader analytics or BI tools continue handling channel and campaign reporting. They don't conflict.",
  },
  {
    q: "I use a custom checkout (GoKwik / Shopflo / Razorpay Magic). Will attribution still work?",
    a: "Yes — that's exactly the gap DynoWeb's second layer closes. Custom checkouts disable Shopify's Web Pixel, so deterministic, script-based attribution fails on roughly 15–20% of orders. DynoWeb's Layer 1.5 fingerprint attribution recovers those by scoring candidate sessions on cart overlap, time, geo, price, and device, attributing only at 0.70 confidence or higher with seven hard vetoes to prevent false matches.",
  },
];

export default function RevenueAttributionPage() {
  return (
    <MarketingShell
      jsonLd={[
        faqJsonLd(faqs),
        breadcrumbJsonLd([
          { name: "Home", path: "" },
          { name: "Features", path: "/#features" },
          { name: "Revenue Attribution", path: "/features/revenue-attribution" },
        ]),
      ]}
    >
      <Hero
        eyebrow="Feature — Shopify revenue attribution"
        title="See Which Fixes Actually Increased Your Shopify Revenue"
        lead="Tie every fix to actual revenue. DynoWeb's revenue attribution connects behavioral insights to sales via Shopify's order webhooks, so you know exactly which changes moved the needle — not which ones you hoped would."
        primaryCta={{ label: "Install free", href: "https://apps.shopify.com/dynoweb" }}
        secondaryCta={{ label: "Book a demo", href: "/contact-us" }}
        highlights={["Native order webhooks", "Revenue per page & journey", "Fix-level ROI", "Server-side accuracy"]}
        image="/RevenueAttribution.png"
        imageAlt="DynoWeb revenue attribution dashboard for a Shopify store"
        imageLabel="Revenue Attribution"
      />

      <Section className="pb-12">
        <SectionHeading
          eyebrow="How it works"
          title="From order webhook to fix-level ROI"
          subtitle="Attribution closes the loop between the change you ship and the revenue it produces."
        />
        <FeatureGrid
          items={[
            { icon: Webhook, tag: "Connect", title: "Native order webhooks", body: "Hooks into Shopify's order events server-side, so revenue is attributed from real order data — not estimated from script-based tracking." },
            { icon: GitBranch, tag: "Map", title: "Journey to purchase", body: "Each completed order is tied back to the page journey and behavioral signals that led to it, so you see which paths convert." },
            { icon: TrendingUp, tag: "Measure", title: "Fix-level impact", body: "Ship a fix, and attribution shows the revenue change that followed — turning 'projected lift' into proven results." },
          ]}
          columns={3}
        />
      </Section>

      <FeatureRow
        eyebrow="Revenue by page"
        title="See which pages actually generate revenue"
        body={
          <p>
            Attribution breaks revenue down by page and template, so you can tell the difference between a page that gets
            traffic and a page that drives sales. That&rsquo;s where your optimization time belongs.
          </p>
        }
        bullets={[
          "Revenue mapped to specific pages and journeys",
          "Spot high-traffic, low-revenue pages worth fixing",
          "Focus optimization where the dollars actually are",
        ]}
        image="/revenueByPage.png"
        imageAlt="DynoWeb revenue-by-page breakdown for a Shopify store"
        imageLabel="Revenue by page"
      />

      <FeatureRow
        reverse
        eyebrow="The breakdown"
        title="Connect behavioral fixes to real orders"
        body={
          <p>
            Because attribution reads completed orders from Shopify&rsquo;s backend, the numbers reflect actual purchases —
            not client-side estimates that ad blockers and consent gating quietly erode. Every figure is grounded in real
            revenue.
          </p>
        }
        bullets={[
          "Server-side order data, not script estimates",
          "Resilient to ad blockers and consent gating",
          "Feeds ROI scoring back into the AI suggestion engine",
        ]}
        image="/RevenueBreakdown.png"
        imageAlt="DynoWeb revenue breakdown view tying sales to behavioral fixes"
        imageLabel="Revenue breakdown"
      />

      <Section className="pb-16">
        <SectionHeading
          eyebrow="Two-layer attribution"
          title="The orders most tools quietly lose"
          subtitle="Custom checkouts — Shopflo, GoKwik, Razorpay Magic — disable Shopify's Web Pixel, so script-based tools fail to attribute roughly 15–20% of orders. DynoWeb adds a second layer to recover them."
        />
        <div className="grid gap-4 lg:grid-cols-[1fr_1.05fr]">
          <div className="grid gap-4">
            <FeatureGrid
              columns={1}
              items={[
                { icon: Webhook, tag: "Layer 1 — Deterministic", title: "Exact-match attribution", body: "Cart-attribute session stamps, cart attributes, order-note matching, and pixel checkout tokens tie an order to its session with certainty." },
                { icon: Fingerprint, tag: "Layer 1.5 — Fingerprint", title: "Probabilistic recovery", body: "When the deterministic path fails, DynoWeb scores candidate sessions on cart overlap, time, geo, price, and device — only attributing at ≥ 0.70 confidence." },
                { icon: ShieldAlert, tag: "Guardrails", title: "Seven hard vetoes", body: "Country mismatch, no cart overlap, stale timing, and more disqualify a match before scoring — no score ever overrides a veto, enforced by database constraints." },
              ]}
            />
          </div>
          <ChartCard
            eyebrow="Attribution coverage"
            title="Deterministic + fingerprint = far less 'unknown'"
            footnote="Illustrative coverage on a custom-checkout store. Layer 1 alone leaves ~15–20% of revenue unattributed; Layer 1.5 recovers most of it at ≥ 0.70 confidence so your reports aren't full of 'direct/unknown'."
          >
            <DonutChart
              centerValue="~97%"
              centerLabel="attributed"
              segments={[
                { label: "Layer 1 — deterministic", value: 80, display: "80%" },
                { label: "Layer 1.5 — fingerprint", value: 17, display: "17%" },
                { label: "Unattributed", value: 3, display: "3%" },
              ]}
            />
          </ChartCard>
        </div>
      </Section>

      <Section className="pb-16">
        <SectionHeading eyebrow="Why it matters" title="Optimize for revenue, not vanity metrics" />
        <FeatureGrid columns={2} items={why} />
      </Section>

      <FAQ title="Revenue attribution — frequently asked" items={faqs} />

      <RelatedLinks
        links={[
          { label: "AI Fix Suggestions", href: "/features/ai-suggestions", description: "Ranked, dev-ready fixes." },
          { label: "Cart Overview", href: "/features/cart-overview", description: "Recover lost checkout revenue." },
          { label: "DynoWeb vs Glew", href: "/vs/glew", description: "Optimization vs reporting." },
          { label: "Shopify Analytics", href: "/shopify-analytics", description: "Behavioral insights that drive revenue." },
          { label: "Increase Product Page Conversions", href: "/use-cases/increase-product-page-conversions", description: "Turn browsers into buyers." },
          { label: "Shopify CRO Guide", href: "/shopify-cro", description: "The complete optimization loop." },
        ]}
      />

      <CTA
        title="Prove what your optimization is worth"
        body="Stop debating whether a change helped. DynoWeb attributes revenue to the fixes you ship — so every optimization has a number attached."
        primaryLabel="Install free"
        secondary={{ label: "See pricing", href: "/pricing" }}
      />
    </MarketingShell>
  );
}
