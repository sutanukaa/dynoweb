import type { Metadata } from "next";

import {
  MarketingShell,
  Hero,
  Section,
  SectionHeading,
  FeatureGrid,
  Card,
  CheckList,
  FAQ,
  CTA,
  RelatedLinks,
  faqJsonLd,
  breadcrumbJsonLd,
} from "@/app/components/seo/Marketing";

export const metadata: Metadata = {
  title: "Shopify Heatmaps — See Where Customers Click & Scroll",
  description:
    "Visual heatmaps built for Shopify. See exactly where visitors click, how far they scroll, and which elements they ignore. Lightweight, SEO-safe.",
  alternates: { canonical: "https://www.dynoweb.app/shopify-heatmaps" },
  openGraph: {
    title: "Shopify Heatmaps — See Where Customers Click & Scroll",
    description:
      "DynoWeb heatmaps for Shopify: click maps, scroll maps, and attention maps that reveal what shoppers engage with and what they ignore.",
    url: "https://www.dynoweb.app/shopify-heatmaps",
    siteName: "DynoWeb",
    type: "article",
  },
};

const types = [
  { tag: "Click map", title: "Where shoppers tap", body: "See the elements that get the most interaction — and the ones shoppers expect to be clickable but aren't (a leading cause of frustration)." },
  { tag: "Scroll map", title: "How far they read", body: "A color gradient shows exactly where visitors stop scrolling, so you know whether your strongest proof and CTA are even being seen." },
  { tag: "Attention map", title: "What earns focus", body: "Combine dwell, hover, and interaction to understand which sections actually hold attention versus which get skimmed past." },
  { tag: "Mobile map", title: "Thumb-zone reality", body: "Mobile heatmaps reveal fat-finger taps and mis-hits in the thumb zone that desktop testing never catches." },
];

const read = [
  "Bright clusters on non-interactive elements = shoppers expect them to do something. Make them clickable, or remove the false affordance.",
  "A hard scroll cut-off well above your add-to-cart or key proof means your most important content is below the fold for most visitors.",
  "Heavy clicks on a filter or variant picker followed by exits often signals confusion — pair the heatmap with a session replay to confirm.",
  "Cold zones over content you spent time on tell you it isn't earning attention — tighten it, move it, or cut it.",
  "Different click patterns on mobile vs desktop almost always mean you need device-specific layout fixes, not one-size-fits-all.",
];

const faqs = [
  {
    q: "What is a Shopify heatmap?",
    a: "A Shopify heatmap is a visual overlay of your store pages that shows aggregated visitor behavior — where they click (click map), how far they scroll (scroll map), and which areas hold attention (attention map). Instead of reading rows of numbers, you see a color-coded picture of how shoppers actually engage with each page.",
  },
  {
    q: "What's the best heatmap app for Shopify?",
    a: "The best heatmap app for Shopify is one that's lightweight, Shopify-native, and connects the heatmap to action. DynoWeb provides click, scroll, and attention maps with a sub-40 KB tracker, and — unlike most heatmap tools — it turns the patterns it finds into prioritised, dev-ready fix suggestions rather than leaving you to interpret the data alone.",
  },
  {
    q: "Do heatmaps hurt my Shopify store's SEO or speed?",
    a: "Not with DynoWeb. The tracker is under 40 KB and loads asynchronously so it doesn't block rendering or degrade Core Web Vitals. It's designed to be SEO-safe and installs as a native Shopify app.",
  },
  {
    q: "How much traffic do I need before heatmaps are useful?",
    a: "Heatmaps become reliable once you have enough sessions for patterns to emerge — often a few hundred visits per page. Lower-traffic pages still benefit, but you'll lean more on session replays for those. DynoWeb aggregates across sessions automatically so the maps sharpen as traffic accumulates.",
  },
];

export default function ShopifyHeatmapsPage() {
  return (
    <MarketingShell
      jsonLd={[
        faqJsonLd(faqs),
        breadcrumbJsonLd([
          { name: "Home", path: "" },
          { name: "Shopify Heatmaps", path: "/shopify-heatmaps" },
        ]),
      ]}
    >
      <Hero
        eyebrow="Pillar guide — Shopify heatmap app"
        title="Shopify Heatmaps Built for Merchants, Not Analysts"
        lead="Visual heatmaps built for Shopify. See exactly where visitors click, how far they scroll, and which elements they ignore. Lightweight, SEO-safe, and connected directly to AI fix suggestions."
        primaryCta={{ label: "Start free trial", href: "https://apps.shopify.com/dynoweb" }}
        secondaryCta={{ label: "See the heatmaps feature", href: "/features/heatmaps" }}
      />

      <Section className="pb-16">
        <SectionHeading
          eyebrow="Three views, one picture"
          title="Click, scroll, and attention maps"
          subtitle="Each map answers a different question. Together they tell you where attention goes, what gets seen, and where shoppers get stuck."
        />
        <FeatureGrid columns={2} items={types} />
      </Section>

      <Section className="pb-16">
        <SectionHeading eyebrow="How to read them" title="What your heatmaps are telling you" />
        <Card>
          <CheckList items={read} />
        </Card>
      </Section>

      <FAQ title="Shopify heatmaps — frequently asked" items={faqs} />

      <RelatedLinks
        title="Explore the toolkit"
        links={[
          { label: "Heatmaps Feature", href: "/features/heatmaps", description: "Visual click & scroll data." },
          { label: "Session Replay", href: "/shopify-session-replay", description: "Watch the sessions behind the map." },
          { label: "Complete Heatmap Guide", href: "/blog/shopify-heatmap-guide", description: "Read maps and act on the data." },
          { label: "Scroll Depth Analytics", href: "/blog/shopify-scroll-depth-analytics", description: "Where visitors stop reading." },
          { label: "DynoWeb vs Microsoft Clarity", href: "/vs/microsoft-clarity", description: "Beyond free heatmaps." },
          { label: "Shopify CRO Guide", href: "/shopify-cro", description: "The complete optimization loop." },
        ]}
      />

      <CTA
        title="See where customers click, scroll, and stop"
        body="DynoWeb's heatmaps show you exactly where attention goes on every page — then hand you the fix for the friction they reveal. Lightweight and SEO-safe."
        primaryLabel="Start free trial"
        secondary={{ label: "See pricing", href: "/pricing" }}
      />
    </MarketingShell>
  );
}
