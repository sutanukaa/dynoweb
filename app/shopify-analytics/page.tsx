import type { Metadata } from "next";

import {
  MarketingShell,
  Hero,
  Section,
  SectionHeading,
  FeatureGrid,
  Card,
  CheckList,
  StatRow,
  FAQ,
  CTA,
  RelatedLinks,
  faqJsonLd,
  breadcrumbJsonLd,
} from "@/app/components/seo/Marketing";

export const metadata: Metadata = {
  title: "Shopify Analytics App — Behavioral Insights That Drive Revenue",
  description:
    "Go beyond pageviews. DynoWeb tracks 11 behavioral signals — clicks, rage clicks, scroll depth, mobile gestures — to show exactly where revenue is leaking.",
  alternates: { canonical: "https://www.dynoweb.app/shopify-analytics" },
  openGraph: {
    title: "Shopify Analytics App — Behavioral Insights That Drive Revenue",
    description:
      "DynoWeb is a Shopify analytics app that goes beyond pageviews — behavioral signals, funnels, and revenue attribution that tell you what to fix.",
    url: "https://www.dynoweb.app/shopify-analytics",
    siteName: "DynoWeb",
    type: "article",
  },
};

const signals = [
  { tag: "Engagement", title: "Clicks & dead clicks", body: "See which elements get tapped — including the ones that look clickable but aren't and quietly frustrate shoppers." },
  { tag: "Frustration", title: "Rage clicks", body: "Repeated rapid clicks on the same element signal a broken or confusing experience. DynoWeb flags them automatically." },
  { tag: "Attention", title: "Scroll depth", body: "Know exactly how far visitors read on each template — and whether your best proof ever gets seen." },
  { tag: "Mobile", title: "Touch & gesture data", body: "Fat-finger taps, pinch-zooms, and thumb-zone misses that desktop analytics completely miss." },
  { tag: "Intent", title: "Add-to-cart funnels", body: "Track the exact step where purchase intent leaks between product view and completed order." },
  { tag: "Outcome", title: "Revenue attribution", body: "Connect behavioral fixes to real Shopify orders via order webhooks — not estimated, attributed." },
];

const beyond = [
  "Standard analytics tells you a page has a 1.8% conversion rate. Behavioral analytics tells you why — and what to change.",
  "Pageviews and sessions describe traffic. Clicks, scrolls, and rage clicks describe experience.",
  "Funnels show where users drop off. Session replays show the exact moment and reason they dropped.",
  "Revenue reports total the sales. Revenue attribution ties each sale back to the on-site change that produced it.",
];

const faqs = [
  {
    q: "What is the best analytics app for Shopify?",
    a: "The best Shopify analytics app depends on what you're trying to do. For financial and operational reporting, a BI tool works well. For understanding why visitors do or don't convert, you need behavioral analytics — heatmaps, session replays, scroll depth, and rage-click detection. DynoWeb focuses on the behavioral layer and goes one step further by turning those signals into prioritised, dev-ready fixes.",
  },
  {
    q: "How is DynoWeb different from Shopify's built-in analytics?",
    a: "Shopify's native analytics is excellent for sales, traffic sources, and order data. It doesn't show you on-page behavior — where people click, how far they scroll, where they rage-click, or which element is silently killing conversions. DynoWeb adds that behavioral layer and connects it back to revenue, so you can see not just what happened but why, and what to do about it.",
  },
  {
    q: "Does the DynoWeb analytics tracker slow down my store?",
    a: "No. The tracker is under 40 KB and loads asynchronously, so it doesn't block rendering or hurt your Core Web Vitals. It's built to be SEO-safe and installs as a native Shopify app — no manual script tag to maintain.",
  },
  {
    q: "Is DynoWeb analytics GDPR compliant?",
    a: "Yes. DynoWeb respects Shopify's Customer Privacy API and consent signals, and session replays mask sensitive input by default. Data collection is privacy-first and designed for GDPR and CCPA compliance.",
  },
];

export default function ShopifyAnalyticsPage() {
  return (
    <MarketingShell
      jsonLd={[
        faqJsonLd(faqs),
        breadcrumbJsonLd([
          { name: "Home", path: "" },
          { name: "Shopify Analytics", path: "/shopify-analytics" },
        ]),
      ]}
    >
      <Hero
        eyebrow="Pillar guide — Shopify analytics app"
        title="Shopify Analytics That Goes Beyond Pageviews"
        lead="Go beyond pageviews. DynoWeb tracks 11 behavioral signals — clicks, rage clicks, scroll depth, mobile gestures — to show exactly where revenue is leaking, then attributes every fix back to real Shopify orders."
        primaryCta={{ label: "See live demo", href: "/use-cases" }}
        secondaryCta={{ label: "Install DynoWeb free", href: "https://apps.shopify.com/dynoweb" }}
      />

      <Section className="pb-16">
        <StatRow
          stats={[
            { value: "11", label: "behavioral signals per session" },
            { value: "< 40 KB", label: "async, SEO-safe tracker" },
            { value: "Order-level", label: "revenue attribution via webhooks" },
            { value: "Native", label: "Shopify app — no script tag" },
          ]}
        />
      </Section>

      <Section className="pb-16">
        <SectionHeading
          eyebrow="The signals"
          title="What behavioral analytics actually measures"
          subtitle="Pageviews tell you how many people arrived. These signals tell you what they did, where they struggled, and why they left."
        />
        <FeatureGrid items={signals} />
      </Section>

      <Section className="pb-16">
        <SectionHeading eyebrow="Pageviews vs behavior" title="Why pageviews aren't enough" />
        <Card>
          <CheckList items={beyond} />
        </Card>
      </Section>

      <FAQ title="Shopify analytics — frequently asked" items={faqs} />

      <RelatedLinks
        title="Explore the analytics toolkit"
        links={[
          { label: "Shopify Heatmaps", href: "/shopify-heatmaps", description: "Visual click & scroll data." },
          { label: "Session Replay", href: "/shopify-session-replay", description: "Watch real customer visits." },
          { label: "Revenue Attribution", href: "/features/revenue-attribution", description: "Track what actually drives sales." },
          { label: "No-code Analytics Setup", href: "/shopify-analytics-no-code", description: "Live in 5 minutes, zero code." },
          { label: "Scroll Depth Analytics", href: "/blog/shopify-scroll-depth-analytics", description: "Find where visitors stop reading." },
          { label: "Dead Clicks", href: "/blog/shopify-dead-clicks", description: "What broken UX signals look like." },
        ]}
      />

      <CTA
        title="See exactly where your revenue is leaking"
        body="DynoWeb turns 11 behavioral signals into a ranked list of fixes — each tied to projected revenue. Install free and get your first insights in minutes."
        primaryLabel="See AI in action"
        secondary={{ label: "See pricing", href: "/pricing" }}
      />
    </MarketingShell>
  );
}
