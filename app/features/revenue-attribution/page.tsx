import type { Metadata } from "next";

import {
  MarketingShell,
  Hero,
  Section,
  SectionHeading,
  FeatureGrid,
  FAQ,
  CTA,
  RelatedLinks,
  faqJsonLd,
  breadcrumbJsonLd,
} from "@/app/components/seo/Marketing";

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

const how = [
  { tag: "Connect", title: "Native order webhooks", body: "DynoWeb hooks into Shopify's order events server-side, so revenue is attributed from real order data — not estimated from script-based tracking." },
  { tag: "Map", title: "Journey to purchase", body: "Each completed order is tied back to the page journey and behavioral signals that led to it, so you see which paths convert." },
  { tag: "Measure", title: "Fix-level impact", body: "Ship a fix, and attribution shows the revenue change that followed — turning 'projected lift' into proven results." },
];

const why = [
  { title: "Stop guessing which change worked", body: "When you ship multiple fixes, attribution shows which one actually moved revenue — so you double down on what works." },
  { title: "Justify the optimization budget", body: "Tie CRO work to dollars, not opinions. Show leadership the revenue produced by specific on-site changes." },
  { title: "Prioritise by real ROI", body: "Attribution feeds back into the AI engine, sharpening which suggestions get ranked highest for your store." },
  { title: "Real orders, not proxies", body: "Because it uses Shopify's backend order data, attribution reflects actual purchases — including the revenue your storefront scripts can miss." },
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
        primaryCta={{ label: "Book demo", href: "/contact-us" }}
        secondaryCta={{ label: "Install DynoWeb free", href: "https://apps.shopify.com/dynoweb" }}
      />

      <Section className="pb-16">
        <SectionHeading
          eyebrow="How it works"
          title="From order webhook to fix-level ROI"
          subtitle="Attribution closes the loop between the change you ship and the revenue it produces."
        />
        <FeatureGrid items={how} />
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
        primaryLabel="Book demo"
        secondary={{ label: "See pricing", href: "/pricing" }}
      />
    </MarketingShell>
  );
}
