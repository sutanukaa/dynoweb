import type { Metadata } from "next";
import { Activity, MousePointerClick, PlaySquare, ListChecks } from "lucide-react";

import {
  MarketingShell,
  Hero,
  Section,
  SectionHeading,
  FeatureGrid,
  FeatureRow,
  Card,
  CheckList,
  StatRow,
  FAQ,
  CTA,
  RelatedLinks,
  faqJsonLd,
  breadcrumbJsonLd,
} from "@/app/components/seo/Marketing";
import { ChartCard, BarChart } from "@/app/components/seo/Charts";

export const metadata: Metadata = {
  title: "Free Shopify CRO Audit — Find What's Killing Your Sales",
  description:
    "Install DynoWeb free and get a full behavioral audit of your Shopify store in 48 hours — heatmaps, session replays, and ranked fix recommendations.",
  alternates: { canonical: "https://www.dynoweb.app/free-shopify-cro-audit" },
  openGraph: {
    title: "Free Shopify CRO Audit — Find What's Killing Your Sales",
    description:
      "Get a free Shopify CRO audit: behavioral data, heatmaps, session replays, and a ranked list of fixes for your store.",
    url: "https://www.dynoweb.app/free-shopify-cro-audit",
    siteName: "DynoWeb",
    type: "article",
  },
};

const includes = [
  { icon: Activity, tag: "Behavior", title: "Behavioral data capture", body: "DynoWeb starts collecting clicks, rage clicks, dead clicks, scroll depth, and mobile gestures across your store the moment you install." },
  { icon: MousePointerClick, tag: "Heatmaps", title: "Page-level heatmaps", body: "Click, scroll, and attention maps for your highest-traffic templates — home, collection, product, cart." },
  { icon: PlaySquare, tag: "Replays", title: "Session replays", body: "Real recordings of how visitors navigate, filtered to the sessions that reveal friction and abandonment." },
  { icon: ListChecks, tag: "Fixes", title: "Ranked fix recommendations", body: "A prioritised list of the revenue-leaking gaps DynoWeb finds — each with the evidence and a dev-ready fix." },
];

const steps = [
  "Install DynoWeb free from the Shopify App Store and enable the app embed — about five minutes, no code.",
  "DynoWeb collects behavioral data as real visitors browse your store over the next 48 hours.",
  "Review your heatmaps, session replays, and the ranked list of fixes DynoWeb surfaces.",
  "Start with the highest-impact fix — most come with a no-code theme-editor walkthrough.",
  "Measure the result with revenue attribution, then work down the list.",
];

const faqs = [
  {
    q: "Is the Shopify CRO audit really free?",
    a: "Yes. You install DynoWeb on its free tier, and it produces a behavioral audit of your store — heatmaps, session replays, and ranked fix recommendations — from your real traffic. There's no cost to get your first round of insights.",
  },
  {
    q: "How long does the free audit take?",
    a: "Setup takes about five minutes (install the app, enable the embed). DynoWeb then needs roughly 48 hours of real traffic to build reliable heatmaps and surface meaningful patterns. Higher-traffic stores see results faster.",
  },
  {
    q: "What will the audit show me?",
    a: "Where shoppers click, how far they scroll, where they rage-click or dead-click, where they abandon, and which fixes are most likely to recover revenue. Each finding comes with the behavioral evidence behind it and a recommended fix.",
  },
  {
    q: "Do I need a developer for the audit or the fixes?",
    a: "No developer is needed to run the audit, and most recommended fixes are no-code theme-editor changes. When a fix does require code, DynoWeb gives you the exact file path and diff to hand off.",
  },
];

export default function FreeCroAuditPage() {
  return (
    <MarketingShell
      jsonLd={[
        faqJsonLd(faqs),
        breadcrumbJsonLd([
          { name: "Home", path: "" },
          { name: "Free Shopify CRO Audit", path: "/free-shopify-cro-audit" },
        ]),
      ]}
    >
      <Hero
        eyebrow="Free Shopify CRO audit"
        title="Get a Free CRO Audit for Your Shopify Store"
        lead="Install DynoWeb free and get a full behavioral audit of your Shopify store in 48 hours — heatmaps, session replays, and ranked fix recommendations that show exactly what's killing your sales."
        primaryCta={{ label: "Start free audit", href: "https://apps.shopify.com/dynoweb" }}
        secondaryCta={{ label: "See the CRO guide", href: "/shopify-cro" }}
        highlights={["48-hour behavioral audit", "5-minute no-code setup", "Ranked fix list", "$0 to start"]}
        image="/CROReport.png"
        imageAlt="DynoWeb CRO report showing a behavioral audit of a Shopify store"
        imageLabel="CRO Report"
      />

      <Section className="pb-16">
        <StatRow
          stats={[
            { value: "48 hrs", label: "to your first behavioral audit" },
            { value: "5 min", label: "no-code setup" },
            { value: "11", label: "behavioral signals captured" },
            { value: "$0", label: "to get started" },
          ]}
        />
      </Section>

      <Section className="pb-16">
        <ChartCard
          eyebrow="Sample output"
          title="Revenue leaks, ranked by estimated monthly impact"
          footnote="Illustrative audit output. DynoWeb estimates the monthly revenue behind each issue from your real session data, so you fix the most valuable leak first instead of guessing."
        >
          <BarChart
            data={[
              { label: "Frustration loss", value: 10000, display: "$10k", highlight: true },
              { label: "Scroll cliff", value: 6000, display: "$6k" },
              { label: "Mobile UX", value: 3500, display: "$3.5k" },
              { label: "Cart drop-off", value: 2800, display: "$2.8k" },
              { label: "Weak CTAs", value: 1500, display: "$1.5k" },
            ]}
          />
        </ChartCard>
      </Section>

      <Section className="pb-16">
        <SectionHeading
          eyebrow="What's included"
          title="A complete behavioral audit, free"
          subtitle="Not a generic checklist — an audit built from your store's own real visitor behavior."
        />
        <FeatureGrid columns={2} items={includes} />
      </Section>

      <FeatureRow
        eyebrow="What the audit reveals"
        title="Your funnel, your leaks, ranked by dollars"
        body={
          <p>
            The audit doesn&rsquo;t hand you raw charts — it shows where your funnel breaks and estimates the monthly
            revenue each leak is costing you, ranked so you fix the most valuable one first. You&rsquo;ll see your biggest
            single drop-off and exactly what&rsquo;s behind it.
          </p>
        }
        bullets={[
          "Step-by-step funnel from session to purchase",
          "Each leak sized by estimated monthly revenue lost",
          "The biggest drop-off flagged with its likely cause",
        ]}
        image="/ConversionFunnel.png"
        imageAlt="DynoWeb conversion funnel and revenue leak breakdown from a free audit"
        imageLabel="Funnel & leaks"
      />

      <FeatureRow
        reverse
        eyebrow="Prioritised by impact"
        title="A revenue-impact breakdown, not a to-do list"
        body={
          <p>
            DynoWeb ranks where your store is losing revenue by estimated monthly impact and benchmarks you against industry
            averages — so the audit ends with a clear, ROI-ordered plan rather than a generic checklist.
          </p>
        }
        bullets={[
          "Revenue loss estimated per issue",
          "Benchmarked against industry averages",
          "Fix the highest-ROI item first",
        ]}
        image="/RevenueBreakdown.png"
        imageAlt="DynoWeb revenue impact breakdown ranking leaks by monthly value"
        imageLabel="Revenue impact"
      />

      <Section className="pb-16">
        <SectionHeading eyebrow="How it works" title="From install to insights in 48 hours" />
        <Card>
          <CheckList items={steps} />
        </Card>
      </Section>

      <FAQ title="Free CRO audit — frequently asked" items={faqs} />

      <RelatedLinks
        links={[
          { label: "Why your store isn't converting", href: "/blog/why-shopify-store-not-converting", description: "12 real reasons (+ fixes)." },
          { label: "The 60-point CRO checklist", href: "/blog/shopify-cro-checklist", description: "Audit every template." },
          { label: "Shopify CRO Guide", href: "/shopify-cro", description: "The complete optimization loop." },
          { label: "No-code Setup", href: "/shopify-analytics-no-code", description: "Live in 5 minutes." },
          { label: "AI Fix Suggestions", href: "/features/ai-suggestions", description: "Ranked, dev-ready fixes." },
          { label: "Pricing", href: "/pricing", description: "Simple, transparent plans." },
        ]}
      />

      <CTA
        title="Find what's killing your sales — free"
        body="Install DynoWeb, let it watch your real traffic for 48 hours, and get a ranked list of the fixes most likely to recover revenue. No cost, no code, no commitment."
        primaryLabel="Start free audit"
        secondary={{ label: "See pricing", href: "/pricing" }}
      />
    </MarketingShell>
  );
}
