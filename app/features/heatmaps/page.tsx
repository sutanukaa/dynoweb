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
  title: "Heatmaps Feature — Visual Click & Scroll Data for Shopify",
  description:
    "See exactly where customers click, tap, and stop scrolling on every page of your Shopify store. Click heatmaps, scroll maps, and attention maps in one place.",
  alternates: { canonical: "https://www.dynoweb.app/features/heatmaps" },
  openGraph: {
    title: "Heatmaps Feature — Visual Click & Scroll Data for Shopify",
    description:
      "Shopify click heatmap tool with scroll and attention maps. See what shoppers engage with on every page and turn it into a fix.",
    url: "https://www.dynoweb.app/features/heatmaps",
    siteName: "DynoWeb",
    type: "article",
  },
};

const maps = [
  { tag: "Click", title: "Click & tap maps", body: "Aggregate every click and tap into a single overlay. Instantly see your most-engaged elements — and the non-clickable ones shoppers expect to work." },
  { tag: "Scroll", title: "Scroll depth maps", body: "A color gradient marks where visitors stop scrolling on each page, so you know whether your CTA and proof are above the fold for most shoppers." },
  { tag: "Attention", title: "Attention maps", body: "Combine dwell and interaction to reveal which sections truly hold focus versus which get skimmed and skipped." },
  { tag: "Per page", title: "Every template covered", body: "Generate maps for home, collection, product, cart, and custom pages — desktop and mobile, side by side." },
];

const faqs = [
  {
    q: "What is a Shopify click heatmap tool?",
    a: "A click heatmap tool aggregates where visitors click or tap on a page into a single color-coded overlay. Hot zones show high interaction; cold zones show neglected areas. On Shopify, this quickly reveals whether shoppers are engaging with your add-to-cart button, getting distracted by non-clickable elements, or missing key content entirely.",
  },
  {
    q: "Can I see heatmaps for mobile and desktop separately?",
    a: "Yes. DynoWeb generates device-specific heatmaps because shoppers behave very differently on a phone than on a desktop. Mobile maps surface fat-finger taps and thumb-zone mis-hits that only appear on touch devices.",
  },
  {
    q: "How is this different from the heatmaps pillar page?",
    a: "This page is about the feature — the click, scroll, and attention maps and how they work. The guide at /shopify-heatmaps explains how to read heatmaps and fold them into a complete conversion optimization workflow.",
  },
  {
    q: "Are DynoWeb heatmaps lightweight and SEO-safe?",
    a: "Yes. The tracker is under 40 KB and loads asynchronously, so generating heatmaps doesn't affect page speed, Core Web Vitals, or SEO.",
  },
];

export default function HeatmapsFeaturePage() {
  return (
    <MarketingShell
      jsonLd={[
        faqJsonLd(faqs),
        breadcrumbJsonLd([
          { name: "Home", path: "" },
          { name: "Features", path: "/#features" },
          { name: "Heatmaps", path: "/features/heatmaps" },
        ]),
      ]}
    >
      <Hero
        eyebrow="Feature — Shopify click heatmap tool"
        title="Visual Heatmaps for Every Page of Your Shopify Store"
        lead="See exactly where customers click, tap, and stop scrolling on every page of your Shopify store. Click heatmaps, scroll maps, and attention maps in one place — lightweight and SEO-safe."
        primaryCta={{ label: "View demo", href: "/use-cases" }}
        secondaryCta={{ label: "Install DynoWeb free", href: "https://apps.shopify.com/dynoweb" }}
      />

      <Section className="pb-16">
        <SectionHeading
          eyebrow="Three maps"
          title="Click, scroll, and attention — per page, per device"
          subtitle="Each map answers a different question about how shoppers experience your store."
        />
        <FeatureGrid columns={2} items={maps} />
      </Section>

      <FAQ title="Heatmaps feature — frequently asked" items={faqs} />

      <RelatedLinks
        links={[
          { label: "Heatmaps Guide", href: "/shopify-heatmaps", description: "See where customers click & scroll." },
          { label: "Session Replay", href: "/features/session-replay", description: "Watch the sessions behind the map." },
          { label: "Complete Heatmap Guide", href: "/blog/shopify-heatmap-guide", description: "Read maps and act on them." },
          { label: "Scroll Depth Analytics", href: "/blog/shopify-scroll-depth-analytics", description: "Where visitors stop reading." },
          { label: "Dead Clicks", href: "/blog/shopify-dead-clicks", description: "What broken UX signals look like." },
          { label: "DynoWeb vs Hotjar", href: "/vs/hotjar", description: "Observation vs action." },
        ]}
      />

      <CTA
        title="See where attention goes on every page"
        body="DynoWeb's heatmaps turn aggregated behavior into a clear visual picture — then hand you the fix for the friction they reveal."
        primaryLabel="View demo"
        secondary={{ label: "See pricing", href: "/pricing" }}
      />
    </MarketingShell>
  );
}
