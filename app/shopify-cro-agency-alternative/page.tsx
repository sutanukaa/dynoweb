import type { Metadata } from "next";

import {
  MarketingShell,
  Hero,
  Section,
  SectionHeading,
  FeatureGrid,
  ComparisonTable,
  FAQ,
  CTA,
  RelatedLinks,
  faqJsonLd,
  breadcrumbJsonLd,
} from "@/app/components/seo/Marketing";

export const metadata: Metadata = {
  title: "Replace Your Shopify CRO Agency With DynoWeb",
  description:
    "Why pay $5,000+/month for a CRO agency when DynoWeb gives you AI-powered fixes, session replays, and dev-ready diffs — automatically?",
  alternates: { canonical: "https://www.dynoweb.app/shopify-cro-agency-alternative" },
  openGraph: {
    title: "Replace Your Shopify CRO Agency With DynoWeb",
    description:
      "A Shopify CRO agency alternative: AI-powered fixes, session replays, and dev-ready diffs without the retainer.",
    url: "https://www.dynoweb.app/shopify-cro-agency-alternative",
    siteName: "DynoWeb",
    type: "article",
  },
};

const rows = [
  { feature: "Behavioral data (heatmaps, replays)", values: [true, "Sometimes"] },
  { feature: "AI-prioritised fix recommendations", values: [true, false] },
  { feature: "Dev-ready file path + diff", values: [true, "Manual"] },
  { feature: "Always-on monitoring", values: [true, "Per engagement"] },
  { feature: "Turnaround on a new fix", values: ["Minutes", "Days–weeks"] },
  { feature: "Revenue attribution built in", values: [true, "Varies"] },
  { feature: "Monthly cost", values: ["Plan-based", "$3k–$10k+"] },
  { feature: "Locked into a retainer", values: [false, true] },
  { feature: "Scales across your whole catalog", values: [true, "Limited by hours"] },
];

const why = [
  { tag: "Cost", title: "No five-figure retainer", body: "Agencies bill for hours. DynoWeb runs continuously for a predictable plan cost — and never sends an invoice for a discovery call." },
  { tag: "Speed", title: "Fixes in minutes, not sprints", body: "Instead of waiting on an agency's roadmap, you get prioritised, dev-ready fixes as soon as the behavioral data surfaces them." },
  { tag: "Ownership", title: "Keep the knowledge in-house", body: "When an agency leaves, the insight leaves with them. DynoWeb keeps the analysis, suggestions, and history inside your store." },
  { tag: "Scale", title: "Covers your entire catalog", body: "An agency can only review so many pages per month. DynoWeb watches every page, every session, continuously." },
];

const faqs = [
  {
    q: "Can DynoWeb really replace a CRO agency?",
    a: "For most Shopify stores, DynoWeb covers the core of what a CRO agency delivers: behavioral analysis, prioritised recommendations, and implementation guidance — continuously and at a fraction of the cost. Agencies still add value for large-scale strategic redesigns or specialised research, but for the ongoing find-and-fix loop, DynoWeb does the work automatically.",
  },
  {
    q: "How much does a Shopify CRO agency cost?",
    a: "CRO agencies typically charge $3,000–$10,000+ per month on retainer, plus setup fees, and often work on a fixed number of tests or pages. DynoWeb runs on a predictable plan cost with no retainer lock-in and no per-test limits.",
  },
  {
    q: "Do I still need a developer if I use DynoWeb instead of an agency?",
    a: "Many DynoWeb fixes are theme-editor changes you can make yourself. For code-level changes, DynoWeb provides the exact file path and diff — so a developer (yours or a freelancer) can ship it in minutes, without the agency overhead. See our guide for Shopify developers.",
  },
  {
    q: "What do I lose by not using an agency?",
    a: "You lose the hands-on strategic partner and bespoke research that a good agency provides. What you gain is speed, continuous coverage, in-house ownership of insights, and dramatically lower cost. Many stores use DynoWeb as their day-to-day CRO engine and bring in specialists only for occasional big projects.",
  },
];

export default function CroAgencyAlternativePage() {
  return (
    <MarketingShell
      jsonLd={[
        faqJsonLd(faqs),
        breadcrumbJsonLd([
          { name: "Home", path: "" },
          { name: "Shopify CRO Agency Alternative", path: "/shopify-cro-agency-alternative" },
        ]),
      ]}
    >
      <Hero
        eyebrow="Shopify CRO agency alternative"
        title="AI-Powered Shopify CRO Without the Agency Price Tag"
        lead="Why pay $5,000+/month for a CRO agency when DynoWeb gives you AI-powered fixes, session replays, and dev-ready diffs — automatically, continuously, and without a retainer?"
        primaryCta={{ label: "Compare pricing", href: "/pricing" }}
        secondaryCta={{ label: "Install DynoWeb free", href: "https://apps.shopify.com/dynoweb" }}
      />

      <Section className="pb-16">
        <SectionHeading
          eyebrow="Why merchants switch"
          title="The agency model, rebuilt as software"
          subtitle="Agencies bill for time. DynoWeb delivers the same find-and-fix loop as always-on software."
        />
        <FeatureGrid columns={2} items={why} />
      </Section>

      <Section className="pb-20">
        <SectionHeading eyebrow="Side by side" title="DynoWeb vs a typical CRO agency" />
        <ComparisonTable columns={["What you get", "DynoWeb", "CRO agency"]} rows={rows} />
      </Section>

      <FAQ title="CRO agency alternative — frequently asked" items={faqs} />

      <RelatedLinks
        links={[
          { label: "AI Fix Suggestions", href: "/features/ai-suggestions", description: "Ranked, dev-ready fixes." },
          { label: "DynoAgent", href: "/features/dynoagent", description: "An AI agent for your store." },
          { label: "Shopify for Developers", href: "/use-cases/shopify-for-developers", description: "Dev-ready fix files." },
          { label: "Pricing", href: "/pricing", description: "Simple, transparent plans." },
          { label: "Shopify CRO Guide", href: "/shopify-cro", description: "The complete optimization loop." },
          { label: "Free CRO Audit", href: "/free-shopify-cro-audit", description: "Find what's killing your sales." },
        ]}
      />

      <CTA
        title="Get agency-grade CRO for a fraction of the cost"
        body="DynoWeb runs the find-and-fix loop continuously — AI suggestions, session replays, and dev-ready diffs — with no retainer. Install free and see what it surfaces this week."
        primaryLabel="Compare pricing"
        secondary={{ label: "Get a free CRO audit", href: "/free-shopify-cro-audit" }}
      />
    </MarketingShell>
  );
}
