import type { Metadata } from "next";
import { Bot, Search, ListChecks, ImagePlus, MessageSquare, ShieldCheck } from "lucide-react";

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
  title: "DynoAgent — AI Agent That Diagnoses Your Shopify Store",
  description:
    "DynoAgent continuously monitors your store, detects revenue-leaking patterns, and queues up prioritized fixes — so your team always knows what to ship next.",
  alternates: { canonical: "https://www.dynoweb.app/features/dynoagent" },
  openGraph: {
    title: "DynoAgent — AI Agent That Diagnoses Your Shopify Store",
    description:
      "A Shopify AI agent for store optimization. DynoAgent analyses behavior, explains what matters, and prepares prioritized fixes from one chat screen.",
    url: "https://www.dynoweb.app/features/dynoagent",
    siteName: "DynoWeb",
    type: "article",
  },
};

const does = [
  { icon: Search, tag: "Investigate", title: "Ask anything about your store", body: "Query traffic, clicks, scroll behavior, frustration, form drop-off, funnels, revenue, and product performance in plain language — and get an explanation, not just numbers." },
  { icon: ListChecks, tag: "Diagnose", title: "Find revenue-leaking patterns", body: "DynoAgent connects behavioral signals across pages to surface what's actually hurting conversion and what matters most right now." },
  { icon: ImagePlus, tag: "Create", title: "Generate content & imagery", body: "On supported plans it can research trends, generate on-brand product photos and store visuals, and prepare page or product updates." },
  { icon: ShieldCheck, tag: "Approve", title: "You stay in control", body: "DynoAgent prepares and stages changes, but a human approves what actually ships. It does the heavy lifting; you keep the keys." },
];

const faqs = [
  {
    q: "What is DynoAgent?",
    a: "DynoAgent is the AI agent built into DynoWeb. It brings your store's analytics, behavioral signals, and context into one chat interface, then explains what the data means, what matters most, and what to do next. On paid plans it can also research trends, generate product imagery, and prepare store changes for your approval.",
  },
  {
    q: "How is DynoAgent different from the AI fix suggestions?",
    a: "AI fix suggestions are the prioritised, dev-ready recommendations DynoWeb generates from your behavioral data. DynoAgent is the conversational layer on top — you can ask it questions, have it investigate a specific drop-off, generate assets, and prepare changes, all in dialogue. Together they take you from question to shipped fix.",
  },
  {
    q: "Does DynoAgent change my store automatically?",
    a: "No. DynoAgent prepares and stages changes, but a human approves what actually ships. It's designed to do the analysis and the heavy lifting while keeping you in control of your live store.",
  },
  {
    q: "What can DynoAgent help me do on a paid plan?",
    a: "On supported plans, DynoAgent can research trends, generate content and on-brand product photos, prepare product or page updates, create discounts, and suggest actions for you to approve — extending it from a diagnostic assistant into an optimization partner.",
  },
];

export default function DynoAgentPage() {
  return (
    <MarketingShell
      jsonLd={[
        faqJsonLd(faqs),
        breadcrumbJsonLd([
          { name: "Home", path: "" },
          { name: "Features", path: "/#features" },
          { name: "DynoAgent", path: "/features/dynoagent" },
        ]),
      ]}
    >
      <Hero
        eyebrow="Feature — Shopify AI agent for store optimization"
        title="The AI Agent That Never Stops Optimizing Your Shopify Store"
        lead="DynoAgent continuously monitors your store, detects revenue-leaking patterns, and queues up prioritized fixes — so your team always knows what to ship next. Ask it anything about your store and get an answer grounded in your real data."
        primaryCta={{ label: "Install free", href: "https://apps.shopify.com/dynoweb" }}
        secondaryCta={{ label: "Talk to the team", href: "/contact-us" }}
        highlights={["One chat for everything", "Grounded in your real data", "Generates assets & changes", "Human approves every ship"]}
        image="/DynoAgent.png"
        imageAlt="DynoAgent chat interface analysing a Shopify store"
        imageLabel="DynoAgent"
      />

      <Section className="pb-12">
        <SectionHeading
          eyebrow="What it does"
          title="From raw signals to the next action"
          subtitle="DynoAgent is your analyst, researcher, and implementation assistant in one chat screen."
        />
        <FeatureGrid columns={2} items={does} />
      </Section>

      <FeatureRow
        eyebrow="Ask anything"
        title="Plain-language answers, grounded in your store"
        body={
          <p>
            Instead of jumping between dashboards, just ask. DynoAgent pulls together analytics, behavior signals, and store
            context, then explains what the data means and what to do about it — in language anyone on the team can act on.
          </p>
        }
        bullets={[
          "Traffic, clicks, scroll, funnels, revenue — all queryable",
          "Explanations and recommendations, not just charts",
          "Context-aware: it knows your store, products, and pages",
        ]}
        image="/quickStoreCheck.png"
        imageAlt="DynoAgent running a quick store check and explaining the results"
        imageLabel="Quick store check"
      />

      <FeatureRow
        reverse
        eyebrow="Create on demand"
        title="Generate on-brand imagery and content"
        body={
          <p>
            On supported plans, DynoAgent goes beyond analysis. It can research trends, write content, and generate new
            product photos and store visuals on demand — so the fix it recommends can come with the assets to ship it.
          </p>
        }
        bullets={[
          "On-brand product photography, generated on request",
          "Content and copy drafted from your store context",
          "Prepared product and page updates, ready for review",
        ]}
        image="/ImageGeneration.png"
        imageAlt="DynoAgent generating on-brand product imagery for a Shopify store"
        imageLabel="Image generation"
      />

      <FeatureRow
        eyebrow="Stay in control"
        title="Changes are staged for your approval"
        body={
          <p>
            DynoAgent does the heavy lifting, but you decide what goes live. Proposed changes are staged for review, so you
            get the speed of automation without ever handing over control of your storefront.
          </p>
        }
        bullets={[
          "Every change waits for a human approval",
          "Review before anything touches the live theme",
          "A full action history of what was proposed and shipped",
        ]}
        image="/approval.png"
        imageAlt="DynoAgent approval screen for staged store changes"
        imageLabel="Approval flow"
      />

      <Section className="pb-12">
        <SectionHeading eyebrow="Always on" title="An optimization partner, not just a chatbot" />
        <FeatureGrid
          columns={3}
          items={[
            { icon: Bot, title: "Continuous monitoring", body: "DynoAgent keeps watching your store and surfacing what changed — you don't have to go looking." },
            { icon: ListChecks, title: "Prioritised queue", body: "It lines up the next highest-impact fixes so your team always knows what to ship." },
            { icon: MessageSquare, title: "One interface", body: "Analytics, research, asset generation, and change prep — all from a single chat screen." },
          ]}
        />
      </Section>

      <FAQ title="DynoAgent — frequently asked" items={faqs} />

      <RelatedLinks
        links={[
          { label: "AI Fix Suggestions", href: "/features/ai-suggestions", description: "Ranked, dev-ready fixes." },
          { label: "MCP Integration", href: "/features/mcp-integration", description: "Use your own AI tools." },
          { label: "Shopify Analytics", href: "/shopify-analytics", description: "Behavioral insights that drive revenue." },
          { label: "Replace your CRO agency", href: "/shopify-cro-agency-alternative", description: "AI optimization without the retainer." },
          { label: "Shopify for Developers", href: "/use-cases/shopify-for-developers", description: "Dev-ready fix files." },
          { label: "Shopify CRO Guide", href: "/shopify-cro", description: "The complete optimization loop." },
        ]}
      />

      <CTA
        title="An optimization partner that never sleeps"
        body="DynoAgent watches your store, finds what's leaking revenue, and prepares the fix — so you spend time approving improvements instead of hunting for problems."
        primaryLabel="Install free"
        secondary={{ label: "See pricing", href: "/pricing" }}
      />
    </MarketingShell>
  );
}
