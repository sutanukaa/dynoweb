import type { Metadata } from "next";
import { Gauge, Zap, MousePointerClick, LayoutPanelTop, Server, TrendingUp } from "lucide-react";

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

export const metadata: Metadata = {
  title: "Storefront Speed — Is Slow Speed Costing You Sales?",
  description:
    "Measures how fast your store feels to real shoppers and whether speed is costing sales. A plain-English verdict first, then four Core Web Vitals graded from real visitors, with slow pages ranked by the revenue flowing through them.",
  alternates: { canonical: "https://www.dynoweb.app/features/storefront-speed" },
  openGraph: {
    title: "Storefront Speed — Is Slow Speed Costing You Sales?",
    description:
      "A verdict-first read on Shopify store speed from real visitors: four Core Web Vitals graded the way Google grades, page-load experience, and slow pages ranked by the real revenue flowing through them.",
    url: "https://www.dynoweb.app/features/storefront-speed",
    siteName: "DynoWeb",
    type: "article",
  },
};

const vitals = [
  { icon: Zap, tag: "LCP", title: "Loading", body: "How quickly the main content of a page shows up — the moment the store stops looking empty. Graded Good, Needs work, or Poor." },
  { icon: MousePointerClick, tag: "INP", title: "Responsiveness", body: "How fast the store reacts when a shopper taps or clicks. Sluggish response is a silent conversion killer, so it gets its own grade." },
  { icon: LayoutPanelTop, tag: "CLS", title: "Visual stability", body: "Whether the layout jumps around as things load — the reason a shopper taps the wrong button. Graded on how much the page shifts." },
  { icon: Server, tag: "TTFB", title: "Server response", body: "How long the server takes to start responding. It sits under everything else, so a slow start drags the whole experience." },
];

const faqs = [
  {
    q: "How is this different from a Lighthouse or PageSpeed score?",
    a: "Lab tools test one simulated load on one machine. Storefront Speed measures how fast your store actually feels to your real visitors — the way Google grades Core Web Vitals from field data — so the numbers reflect your real traffic, devices, and networks, not a synthetic run.",
  },
  {
    q: "What does the verdict at the top mean?",
    a: "Before any number, Storefront Speed gives you a plain-English headline: 'Your store is fast,' 'A few pages are dragging,' or 'Speed is costing you sales.' It's the one-line answer, so you know where you stand without reading a single chart.",
  },
  {
    q: "Which metrics do you grade?",
    a: "The four Core Web Vitals, each graded Good, Needs work, or Poor: Loading (LCP), Responsiveness (INP), Visual stability (CLS), and Server response (TTFB). You also see the page-load experience — the share of loads that were fast, so-so, or slow — and a loading-speed trend over time.",
  },
  {
    q: "How do you connect speed to revenue?",
    a: "Slow pages are ranked by the real revenue flowing through them, so you fix the ones that actually cost you money first — and each links to the matching performance fix. If your store doesn't have enough traffic to measure reliably, we tell you that plainly instead of inventing numbers.",
  },
];

export default function StorefrontSpeedPage() {
  return (
    <MarketingShell
      jsonLd={[
        faqJsonLd(faqs),
        breadcrumbJsonLd([
          { name: "Home", path: "" },
          { name: "Features", path: "/#features" },
          { name: "Storefront Speed", path: "/features/storefront-speed" },
        ]),
      ]}
    >
      <Hero
        eyebrow="Feature — Shopify store speed"
        title="Is Slow Speed Quietly Costing You Sales?"
        lead="Storefront Speed measures how fast your store feels to real shoppers and whether that speed is costing you sales — starting with a plain-English verdict, then four Core Web Vitals graded the way Google grades, from real visitors."
        primaryCta={{ label: "Install free", href: "https://apps.shopify.com/dynoweb", external: true }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
        highlights={["Verdict-first", "From real visitors", "Four Core Web Vitals", "Slow pages ranked by revenue"]}
        image="/storefrontSpeed.png"
        imageAlt="DynoWeb Storefront Speed report for a Shopify store"
        imageLabel="Storefront Speed"
      />

      <FeatureRow
        eyebrow="Verdict first"
        title="A plain headline before a single number"
        body={
          <p>
            You shouldn&rsquo;t need to decode a chart to know if your store is slow. Storefront Speed leads with a plain-English
            verdict — <em>&ldquo;Your store is fast,&rdquo;</em> <em>&ldquo;A few pages are dragging,&rdquo;</em> or
            <em> &ldquo;Speed is costing you sales&rdquo;</em> — so you get the answer first and the detail only if you want it.
          </p>
        }
        bullets={[
          "One plain headline that says where you stand",
          "The detail is there when you want it, not before",
          "Measured from your real visitors, not a lab machine",
        ]}
        image="/storefrontSpeed.png"
        imageAlt="DynoWeb Storefront Speed verdict headline for a Shopify store"
        imageLabel="The verdict"
      />

      <Section className="pb-12">
        <SectionHeading
          eyebrow="Core Web Vitals"
          title="Four vitals, graded the way Google grades"
          subtitle="Measured from real visitors — Good, Needs work, or Poor — so the grade matches how Google actually sees your store."
        />
        <FeatureGrid columns={2} items={vitals} />
      </Section>

      <Section className="pb-16">
        <SectionHeading
          eyebrow="Experience & trend"
          title="How the store feels, and where it's heading"
          subtitle="Beyond the four vitals, two views tell you what shoppers actually experience over time."
        />
        <FeatureGrid
          columns={2}
          items={[
            { icon: Gauge, title: "Page-load experience", body: "The share of page loads that were fast, so-so, or slow — a single honest picture of what most visitors actually feel when your store loads." },
            { icon: TrendingUp, title: "Loading-speed trend", body: "How your loading speed is moving over time, so a slow creep from a new app or heavier images shows up before it dents conversion." },
          ]}
        />
      </Section>

      <FeatureRow
        reverse
        eyebrow="Speed × revenue"
        title="Fix the slow pages that actually cost you money"
        body={
          <p>
            A slow page nobody visits isn&rsquo;t worth your time. Storefront Speed ranks slow pages by the real revenue
            flowing through them and links each to its matching performance fix — so you spend effort where speed is
            genuinely costing sales. Low-traffic stores are told so plainly, never handed fake numbers.
          </p>
        }
        bullets={[
          "Slow pages ranked by the real revenue moving through them",
          "Each links to the matching performance fix",
          "Low-traffic stores are told so — no invented numbers",
        ]}
        image="/topDroppages.png"
        imageAlt="DynoWeb Storefront Speed ranking slow pages by revenue"
        imageLabel="Slow pages by revenue"
      />

      <FAQ title="Storefront Speed — frequently asked" items={faqs} />

      <RelatedLinks
        links={[
          { label: "AI Fix Suggestions", href: "/features/ai-suggestions", description: "The matching performance fixes." },
          { label: "Impact", href: "/features/impact", description: "What a speed fix earned you." },
          { label: "Revenue Attribution", href: "/features/revenue-attribution", description: "Revenue by page and journey." },
          { label: "Heatmaps", href: "/features/heatmaps", description: "See where attention goes." },
          { label: "Shopify Mobile Optimization", href: "/use-cases/shopify-mobile-optimization", description: "Faster on the devices that matter." },
          { label: "Shopify CRO Guide", href: "/shopify-cro", description: "The complete optimization loop." },
        ]}
      />

      <CTA
        title="Find out if speed is costing you sales"
        body="Storefront Speed gives you a plain verdict, four Core Web Vitals from real visitors, and slow pages ranked by the revenue flowing through them — so you fix what actually matters."
        primaryLabel="Install free"
        secondary={{ label: "See pricing", href: "/pricing" }}
      />
    </MarketingShell>
  );
}
