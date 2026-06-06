import type { Metadata } from "next";

import {
  MarketingShell,
  Hero,
  Section,
  SectionHeading,
  FeatureGrid,
  Card,
  FAQ,
  CTA,
  RelatedLinks,
  faqJsonLd,
  breadcrumbJsonLd,
} from "@/app/components/seo/Marketing";

export const metadata: Metadata = {
  title: "AI-Powered Fix Suggestions for Your Shopify Store",
  description:
    "DynoWeb's 3-layer AI engine analyses behavioral data, ranks revenue-leaking gaps by ROI, and delivers a dev-ready fix — file path, diff, projected lift.",
  alternates: { canonical: "https://www.dynoweb.app/features/ai-suggestions" },
  openGraph: {
    title: "AI-Powered Fix Suggestions for Your Shopify Store",
    description:
      "AI Shopify optimization that goes past insights to action — ranked, dev-ready fixes with projected lift, built natively for Shopify.",
    url: "https://www.dynoweb.app/features/ai-suggestions",
    siteName: "DynoWeb",
    type: "article",
  },
};

const layers = [
  { tag: "Layer 1 — Detect", title: "Behavioral analysis", body: "The engine reads 11 signals per session — clicks, rage clicks, scroll depth, dead clicks, mobile gestures — and surfaces the patterns that correlate with lost conversions." },
  { tag: "Layer 2 — Rank", title: "ROI prioritisation", body: "Each gap is scored by expected revenue impact and implementation difficulty, so the suggestion at the top of your queue is the one most worth doing first." },
  { tag: "Layer 3 — Resolve", title: "Dev-ready fix", body: "Every suggestion ships with the evidence behind it, a theme-editor walkthrough, and a code-level diff — file path, before/after, and projected lift." },
];

const inside = [
  { title: "The evidence", body: "Impressions, clicks, CTR, and matching session replays — so you trust the suggestion before you act on it." },
  { title: "Expected impact", body: "A clear rating of how much the fix is likely to move conversion, not a vague 'best practice.'" },
  { title: "Difficulty badge", body: "Know at a glance whether it's a 2-minute theme-editor tweak or a developer task." },
  { title: "Two paths to ship", body: "A numbered theme-editor walkthrough for non-technical users, plus exact code for developers." },
];

const faqs = [
  {
    q: "How does DynoWeb's AI generate fix suggestions?",
    a: "DynoWeb runs a 3-layer engine. First it analyses behavioral data from real sessions to detect friction patterns. Then it ranks each detected gap by expected revenue impact and difficulty. Finally it generates a concrete fix — including a theme-editor walkthrough and a code-level diff with file path and projected lift. You get an action, not just an insight.",
  },
  {
    q: "Are the AI suggestions actually specific to my store?",
    a: "Yes. Suggestions are generated from your store's own behavioral data and your theme — not generic ecommerce advice. The evidence panel shows the exact impressions, clicks, and session replays behind each recommendation, so every fix is grounded in what your real visitors did.",
  },
  {
    q: "Do I have to apply the fixes automatically?",
    a: "No. DynoWeb never pushes changes to your live theme on its own. Each suggestion opens into an implementation guide you control — make the change in the theme editor yourself, or hand the code diff to your developer. You stay in charge of what ships.",
  },
  {
    q: "What does 'projected lift' mean?",
    a: "Projected lift is DynoWeb's estimate of how much a given fix is likely to improve conversion or revenue, based on the behavioral evidence and the page's traffic. It helps you decide which fixes are worth prioritising, and after you ship, revenue attribution shows the actual result.",
  },
];

export default function AiSuggestionsPage() {
  return (
    <MarketingShell
      jsonLd={[
        faqJsonLd(faqs),
        breadcrumbJsonLd([
          { name: "Home", path: "" },
          { name: "Features", path: "/#features" },
          { name: "AI Suggestions", path: "/features/ai-suggestions" },
        ]),
      ]}
    >
      <Hero
        eyebrow="Feature — AI Shopify optimization"
        title="AI That Finds Shopify Fixes — Not Just Insights"
        lead="DynoWeb's 3-layer AI engine analyses behavioral data, ranks revenue-leaking gaps by ROI, and delivers a dev-ready fix — file path, diff, and projected lift. The leap from 'I can see the problem' to 'I know exactly what to change.'"
        primaryCta={{ label: "See AI in action", href: "/use-cases" }}
        secondaryCta={{ label: "Install DynoWeb free", href: "https://apps.shopify.com/dynoweb" }}
      />

      <Section className="pb-16">
        <SectionHeading
          eyebrow="The engine"
          title="Three layers from signal to fix"
          subtitle="Most tools stop at surfacing data. DynoWeb's engine carries it all the way to a change your team can ship."
        />
        <FeatureGrid items={layers} />
      </Section>

      <Section className="pb-16">
        <SectionHeading eyebrow="Inside a suggestion" title="What every recommendation includes" />
        <FeatureGrid columns={2} items={inside} />
      </Section>

      <FAQ title="AI suggestions — frequently asked" items={faqs} />

      <RelatedLinks
        links={[
          { label: "DynoAgent", href: "/features/dynoagent", description: "The AI agent that never stops optimizing." },
          { label: "Revenue Attribution", href: "/features/revenue-attribution", description: "Tie every fix to real sales." },
          { label: "MCP Integration", href: "/features/mcp-integration", description: "Push insights into Claude & Cursor." },
          { label: "Shopify for Developers", href: "/use-cases/shopify-for-developers", description: "Get dev-ready fix files." },
          { label: "Replace your CRO agency", href: "/shopify-cro-agency-alternative", description: "AI fixes without the agency price tag." },
          { label: "Shopify CRO Guide", href: "/shopify-cro", description: "The complete optimization loop." },
        ]}
      />

      <CTA
        title="From behavioral data to dev-ready fix"
        body="DynoWeb's AI doesn't just tell you something is wrong — it tells you exactly what to change, how, and what it's worth. Install free and watch it work on your store."
        primaryLabel="See AI in action"
        secondary={{ label: "See pricing", href: "/pricing" }}
      />
    </MarketingShell>
  );
}
