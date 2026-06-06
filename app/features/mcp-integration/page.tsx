import type { Metadata } from "next";
import { Plug, Bot, Code2, ShieldCheck, MessageSquare, KeyRound } from "lucide-react";

import {
  MarketingShell,
  Hero,
  Section,
  SectionHeading,
  FeatureGrid,
  FeatureRow,
  Card,
  CheckList,
  FAQ,
  CTA,
  RelatedLinks,
  faqJsonLd,
  breadcrumbJsonLd,
} from "@/app/components/seo/Marketing";

export const metadata: Metadata = {
  title: "MCP Integration — Connect DynoWeb to Claude, Cursor & ChatGPT",
  description:
    "Plug DynoWeb's Shopify insights directly into Claude, Cursor, and ChatGPT via MCP. Let your AI assistant know exactly what to fix in your store.",
  alternates: { canonical: "https://www.dynoweb.app/features/mcp-integration" },
  openGraph: {
    title: "MCP Integration — Connect DynoWeb to Claude, Cursor & ChatGPT",
    description:
      "Shopify MCP integration for Claude and Cursor. Query your store's behavioral data and ship fixes from inside your AI workflow.",
    url: "https://www.dynoweb.app/features/mcp-integration",
    siteName: "DynoWeb",
    type: "article",
  },
};

const clients = [
  { icon: Bot, tag: "Claude", title: "Claude Desktop & Code", body: "Ask Claude what's hurting conversions and get answers grounded in your real DynoWeb data — then have it draft the fix." },
  { icon: Code2, tag: "Cursor", title: "Cursor", body: "Pull store insights straight into your editor. Cursor can read the suggestion, open the right theme file, and apply the diff in context." },
  { icon: MessageSquare, tag: "ChatGPT", title: "ChatGPT & MCP clients", body: "Any MCP-compatible assistant can query DynoWeb's analytics, suggestions, and session data through a standard, secure connection." },
];

const can = [
  "Ask 'which product page is leaking the most revenue?' and get an answer backed by your store's behavioral data.",
  "Have your AI assistant read a DynoWeb suggestion, locate the exact theme file, and propose the code change.",
  "Pull heatmap, scroll, funnel, and revenue metrics into a prompt without copy-pasting dashboards.",
  "Turn 'what should I fix this week?' into a prioritised, evidence-backed plan inside the tool you already work in.",
  "Keep humans in control — the assistant proposes; you review and ship.",
];

const faqs = [
  {
    q: "What is MCP and why does it matter for Shopify?",
    a: "MCP (Model Context Protocol) is an open standard that lets AI assistants securely connect to external tools and data. For Shopify merchants and developers, DynoWeb's MCP integration means your AI assistant — Claude, Cursor, ChatGPT, or any MCP client — can query your store's real behavioral data and help you act on it, without manual exports or copy-paste.",
  },
  {
    q: "Which AI tools can connect to DynoWeb via MCP?",
    a: "Any MCP-compatible client. That includes Claude (Desktop and Code), Cursor, and ChatGPT, among others. Through the connection, the assistant can access DynoWeb's analytics, AI suggestions, session insights, and revenue data.",
  },
  {
    q: "Is the MCP connection secure?",
    a: "Yes. The integration uses MCP's standard, scoped, authenticated connection with a token you control. Your AI assistant accesses only the data you authorise, and DynoWeb never pushes changes to your live store on its own — the assistant proposes, you decide what ships.",
  },
  {
    q: "Do I need to be a developer to use it?",
    a: "It's most powerful for developers using Cursor or Claude Code, but non-technical merchants benefit too: you can ask Claude plain-language questions about your store's performance and get grounded, data-backed answers and recommendations.",
  },
];

export default function McpIntegrationPage() {
  return (
    <MarketingShell
      jsonLd={[
        faqJsonLd(faqs),
        breadcrumbJsonLd([
          { name: "Home", path: "" },
          { name: "Features", path: "/#features" },
          { name: "MCP Integration", path: "/features/mcp-integration" },
        ]),
      ]}
    >
      <Hero
        eyebrow="Feature — Shopify MCP integration (Claude, Cursor)"
        title="Bring Shopify Insights Into Your AI Workflow via MCP"
        lead="Plug DynoWeb's Shopify insights directly into Claude, Cursor, and ChatGPT via MCP. Let your AI assistant know exactly what to fix in your store — and help you ship it, in context."
        primaryCta={{ label: "Connect now", href: "https://apps.shopify.com/dynoweb" }}
        secondaryCta={{ label: "Shopify for developers", href: "/use-cases/shopify-for-developers" }}
        highlights={["Works with Claude, Cursor, ChatGPT", "Scoped, token-based auth", "Query live store data", "Human stays in control"]}
        image="/MCP-feature.png"
        imageAlt="DynoWeb MCP integration connecting Shopify data to AI assistants"
        imageLabel="MCP Integration"
      />

      <Section className="pb-12">
        <SectionHeading
          eyebrow="Works with"
          title="Your store data, inside your AI tools"
          subtitle="MCP turns DynoWeb into a data source your assistant can query directly — no exports, no copy-paste."
        />
        <FeatureGrid items={clients} columns={3} />
      </Section>

      <FeatureRow
        eyebrow="One-click connect"
        title="Activate the connector and you're live"
        body={
          <p>
            Turn on the MCP connector from inside DynoWeb and your store&rsquo;s behavioral data becomes available to your
            AI assistant. No infrastructure to stand up — flip it on and your assistant can start asking your data
            questions.
          </p>
        }
        bullets={[
          "Enable the connector in a couple of clicks",
          "Standard MCP — works with any compatible client",
          "Active status visible right in the dashboard",
        ]}
        image="/MCP-connector.png"
        imageAlt="DynoWeb MCP connector configuration screen"
        imageLabel="MCP connector"
      />

      <FeatureRow
        reverse
        eyebrow="Secure by design"
        title="Scoped access with a token you control"
        body={
          <p>
            The connection is authenticated with a token you generate and can revoke at any time. Your assistant sees only
            the data you authorise, and nothing is ever written back to your live store without your approval.
          </p>
        }
        bullets={[
          "Generate and revoke access tokens on demand",
          "Scoped, read-oriented access to your analytics",
          "No automatic changes to your storefront",
        ]}
        image="/MCP-token.png"
        imageAlt="DynoWeb MCP access token management screen"
        imageLabel="Access tokens"
      />

      <Section className="pb-16">
        <SectionHeading eyebrow="What you can do" title="From question to shipped fix" />
        <Card>
          <CheckList items={can} />
        </Card>
      </Section>

      <Section className="pb-16">
        <FeatureGrid
          columns={3}
          items={[
            { icon: Plug, title: "Standard protocol", body: "Built on MCP, so it works with the AI tools your team already uses." },
            { icon: ShieldCheck, title: "You stay in control", body: "The assistant proposes; you review and decide what ships. Nothing auto-applies." },
            { icon: KeyRound, title: "Revocable access", body: "Tokens are scoped and can be revoked instantly if anything changes." },
          ]}
        />
      </Section>

      <FAQ title="MCP integration — frequently asked" items={faqs} />

      <RelatedLinks
        links={[
          { label: "AI Fix Suggestions", href: "/features/ai-suggestions", description: "Ranked, dev-ready fixes." },
          { label: "DynoAgent", href: "/features/dynoagent", description: "An AI agent for your store." },
          { label: "Shopify for Developers", href: "/use-cases/shopify-for-developers", description: "Dev-ready fix files." },
          { label: "Shopify Analytics", href: "/shopify-analytics", description: "Behavioral insights that drive revenue." },
          { label: "DynoWeb vs Microsoft Clarity", href: "/vs/microsoft-clarity", description: "Shopify-native and AI-driven." },
          { label: "Shopify CRO Guide", href: "/shopify-cro", description: "The complete optimization loop." },
        ]}
      />

      <CTA
        title="Let your AI assistant fix your store"
        body="Connect DynoWeb to Claude, Cursor, or ChatGPT via MCP and turn your store's behavioral data into prompts, plans, and shipped fixes — without leaving your workflow."
        primaryLabel="Connect now"
        secondary={{ label: "See pricing", href: "/pricing" }}
      />
    </MarketingShell>
  );
}
