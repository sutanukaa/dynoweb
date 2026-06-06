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
  title: "DynoWeb for Shopify Developers — Get Dev-Ready Fix Files",
  description:
    "Stop receiving vague briefs. DynoWeb gives developers the exact file path, before/after diff, and projected lift. Ship fixes faster with zero guesswork.",
  alternates: { canonical: "https://www.dynoweb.app/use-cases/shopify-for-developers" },
  openGraph: {
    title: "DynoWeb for Shopify Developers — Get Dev-Ready Fix Files",
    description:
      "Shopify developer tools for CRO: dev-ready fixes with file paths and diffs, MCP integration for Claude and Cursor, and evidence behind every change.",
    url: "https://www.dynoweb.app/use-cases/shopify-for-developers",
    siteName: "DynoWeb",
    type: "article",
  },
};

const devFeatures = [
  { tag: "Specs", title: "File path + diff", body: "Every suggestion includes the exact theme file to touch and a before/after diff — no ambiguous 'make the button bigger' tickets." },
  { tag: "Evidence", title: "The data behind it", body: "Impressions, clicks, CTR, and matching replays ship with each fix, so you implement with context, not blind faith." },
  { tag: "MCP", title: "Claude & Cursor integration", body: "Pull store insights into your editor over MCP. Have Cursor read the suggestion, open the file, and apply the change in context." },
  { tag: "Safe", title: "Draft-theme preview", body: "Preview every change on a draft theme before it touches production — review the diff, then push with confidence." },
];

const workflow = [
  "A non-technical teammate (or DynoAgent) reviews ranked suggestions and flags the ones worth doing.",
  "You open the fix and get the file path, the diff, and the evidence — a complete, unambiguous spec.",
  "Optionally pull it into Cursor or Claude Code via MCP and let your assistant draft the change in context.",
  "Preview on a draft theme, confirm the diff, and ship.",
  "Revenue attribution reports the actual lift, closing the loop for the whole team.",
];

const faqs = [
  {
    q: "How does DynoWeb help Shopify developers?",
    a: "DynoWeb removes the guesswork from CRO tickets. Instead of vague briefs, developers get a precise spec for each change: the exact theme file path, a before/after code diff, the behavioral evidence behind the suggestion, and a projected lift. It also integrates with Claude and Cursor over MCP so you can implement fixes from inside your editor.",
  },
  {
    q: "Can I use DynoWeb with Cursor or Claude Code?",
    a: "Yes. DynoWeb's MCP integration lets MCP-compatible assistants — Claude (Desktop and Code), Cursor, ChatGPT — query your store's behavioral data and suggestions directly. Your assistant can read a fix, locate the right file, and apply the diff in context, with you reviewing before anything ships.",
  },
  {
    q: "Does DynoWeb change theme code automatically?",
    a: "No. DynoWeb prepares dev-ready specs and, on supported plans, can stage changes for approval — but a human always reviews and ships. You can preview every change on a draft theme before it touches production.",
  },
];

export default function ShopifyForDevelopersPage() {
  return (
    <MarketingShell
      jsonLd={[
        faqJsonLd(faqs),
        breadcrumbJsonLd([
          { name: "Home", path: "" },
          { name: "Use Cases", path: "/use-cases" },
          { name: "Shopify for Developers", path: "/use-cases/shopify-for-developers" },
        ]),
      ]}
    >
      <Hero
        eyebrow="Use case — Shopify developer tools for CRO"
        title="Dev-Ready Fixes for Shopify Developers"
        lead="Stop receiving vague briefs. DynoWeb gives developers the exact file path, before/after diff, and projected lift. Ship fixes faster with zero guesswork — and pull it all into Cursor or Claude via MCP."
        primaryCta={{ label: "Connect to Cursor", href: "/features/mcp-integration" }}
        secondaryCta={{ label: "Install DynoWeb free", href: "https://apps.shopify.com/dynoweb" }}
      />

      <Section className="pb-16">
        <SectionHeading
          eyebrow="Built for devs"
          title="Specs, not vague tickets"
          subtitle="DynoWeb turns behavioral findings into precise, implementable changes — the way a developer actually wants to receive them."
        />
        <FeatureGrid columns={2} items={devFeatures} />
      </Section>

      <Section className="pb-16">
        <SectionHeading eyebrow="The workflow" title="From suggestion to shipped diff" />
        <Card>
          <CheckList items={workflow} />
        </Card>
      </Section>

      <FAQ title="DynoWeb for developers — frequently asked" items={faqs} />

      <RelatedLinks
        links={[
          { label: "MCP Integration", href: "/features/mcp-integration", description: "Connect Claude, Cursor & ChatGPT." },
          { label: "AI Fix Suggestions", href: "/features/ai-suggestions", description: "Ranked, dev-ready fixes." },
          { label: "DynoAgent", href: "/features/dynoagent", description: "An AI agent for your store." },
          { label: "Replace your CRO agency", href: "/shopify-cro-agency-alternative", description: "AI fixes without the retainer." },
          { label: "No-code Analytics Setup", href: "/shopify-analytics-no-code", description: "Live in 5 minutes." },
          { label: "Shopify CRO Guide", href: "/shopify-cro", description: "The complete optimization loop." },
        ]}
      />

      <CTA
        title="Ship CRO fixes with zero guesswork"
        body="DynoWeb hands your developers the file path, the diff, and the evidence — and connects to Cursor and Claude via MCP. Install free and turn findings into shipped code."
        primaryLabel="Connect to Cursor"
        secondary={{ label: "See pricing", href: "/pricing" }}
      />
    </MarketingShell>
  );
}
