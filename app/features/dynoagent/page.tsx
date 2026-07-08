import type { Metadata } from "next";
import { Bot, Search, ListChecks, Wrench, Database, ShieldCheck } from "lucide-react";

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
  title: "DynoAgent — Conversational AI Agent for Your Shopify Store",
  description:
    "Ask DynoAgent anything in plain English. It reads your live analytics, finds what's leaking revenue, and applies the fix to your Shopify store on your approval — every action reversible.",
  alternates: { canonical: "https://www.dynoweb.app/features/dynoagent" },
  openGraph: {
    title: "DynoAgent — Conversational AI Agent for Your Shopify Store",
    description:
      "A Shopify AI agent for store optimization. Ask it anything; it reads your live data, finds the leaks, and applies fixes on approval — from one chat screen.",
    url: "https://www.dynoweb.app/features/dynoagent",
    siteName: "DynoWeb",
    type: "article",
  },
};

const does = [
  { icon: Search, tag: "Investigate", title: "Ask anything about your store", body: "Query traffic, clicks, scroll behavior, frustration, form drop-off, funnels, revenue, and product performance in plain language — and get an explanation, not just numbers." },
  { icon: ListChecks, tag: "Diagnose", title: "Find revenue-leaking patterns", body: "DynoAgent connects behavioral signals across pages to surface what's actually hurting conversion and what matters most right now." },
  { icon: Wrench, tag: "Act", title: "Apply the fix on approval", body: "It doesn't just point at the problem — it edits products, prices, pages, blogs, discounts, and collections, and can build and launch SmartNudge campaigns. You approve each write before it ships." },
  { icon: ShieldCheck, tag: "Reverse", title: "You stay in control", body: "Every action lands in a reversible Action History, so you get the speed of automation without ever losing control of your storefront." },
];

const faqs = [
  {
    q: "What is DynoAgent?",
    a: "DynoAgent is the conversational AI agent built into DynoWeb, powered by Google Gemini 2.5 Flash. Ask it anything in plain English and it reads your store's live analytics, explains what matters, and — with 60+ tools spanning Shopify reads and writes, SmartNudge, image generation, and web search — applies the fix on your approval. It remembers your store across chats, and every change it ships is logged in a reversible Action History.",
  },
  {
    q: "How is DynoAgent different from the AI fix suggestions?",
    a: "AI fix suggestions are the prioritised, dev-ready recommendations DynoWeb generates from your behavioral data. DynoAgent is the conversational layer on top — you can ask it questions, have it investigate a specific drop-off, generate assets, and prepare changes, all in dialogue. Together they take you from question to shipped fix.",
  },
  {
    q: "Does DynoAgent change my store automatically?",
    a: "No. DynoAgent proposes every Shopify write and a human approves what actually ships. Once applied, each change is logged in a reversible Action History, so you can undo it — it does the heavy lifting while keeping you in control of your live store.",
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
        title="The Conversational AI Agent That Fixes Your Shopify Store"
        lead="Ask DynoAgent anything about your store in plain English. It reads your live analytics, finds what's leaking revenue, and applies the fix on your approval — with every action logged in a reversible Action History."
        primaryCta={{ label: "Install free", href: "https://apps.shopify.com/dynoweb" }}
        secondaryCta={{ label: "Talk to the team", href: "/contact-us" }}
        highlights={["One chat for everything", "Grounded in your real data", "Applies fixes on approval", "Reversible Action History"]}
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
        title="Every write is staged for your approval — and reversible"
        body={
          <p>
            DynoAgent does the heavy lifting, but you decide what goes live. Every Shopify write it proposes waits for your
            approval, and once shipped it lands in a reversible Action History — so you get the speed of automation without
            ever handing over control of your storefront.
          </p>
        }
        bullets={[
          "Every write waits for a human approval",
          "Review before anything touches your live store",
          "A reversible Action History of everything proposed and shipped",
        ]}
        image="/approval.png"
        imageAlt="DynoAgent approval screen for staged store changes"
        imageLabel="Approval flow"
      />

      <Section className="pb-12">
        <SectionHeading
          eyebrow="Under the hood"
          title="An optimization partner, not just a chatbot"
          subtitle="Powered by Google Gemini 2.5 Flash, with 60+ tools spanning analytics reads, Shopify reads and writes, SmartNudge, image generation, and web search."
        />
        <FeatureGrid
          columns={3}
          items={[
            { icon: Wrench, title: "60+ tools on tap", body: "Analytics reads, Shopify edits (products, prices, pages, blogs, discounts, collections), SmartNudge build-and-launch, image generation, and web search — all from one chat." },
            { icon: Database, title: "Persistent memory", body: "It remembers your store, your brand, and past decisions across chats, so you're never re-explaining context from scratch." },
            { icon: Bot, title: "Sub-agents", body: "For bigger jobs it dispatches focused sub-agents, then brings the work back into one conversation — with every change staged for your approval." },
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
        title="Ask it anything. It finds the leak and fixes it."
        body="DynoAgent reads your store's live data, finds what's leaking revenue, and applies the fix on your approval — so you spend time approving improvements instead of hunting for problems."
        primaryLabel="Install free"
        secondary={{ label: "See pricing", href: "/pricing" }}
      />
    </MarketingShell>
  );
}
