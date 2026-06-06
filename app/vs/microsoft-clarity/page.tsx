import type { Metadata } from "next";

import {
  MarketingShell,
  Hero,
  Section,
  SectionHeading,
  Card,
  Screenshot,
  ComparisonTable,
  FAQ,
  CTA,
  RelatedLinks,
  faqJsonLd,
  breadcrumbJsonLd,
} from "@/app/components/seo/Marketing";

export const metadata: Metadata = {
  title: "DynoWeb vs Microsoft Clarity — Beyond Free Heatmaps for Shopify",
  description:
    "Clarity is free but generic. DynoWeb is built for Shopify — with AI fix recommendations, revenue attribution, and MCP integrations. See the difference.",
  alternates: { canonical: "https://www.dynoweb.app/vs/microsoft-clarity" },
  openGraph: {
    title: "DynoWeb vs Microsoft Clarity — Beyond Free Heatmaps for Shopify",
    description:
      "Compare DynoWeb and Microsoft Clarity for Shopify stores. See which tool gives you actionable insights, native Shopify events, and AI-generated fix recommendations.",
    url: "https://www.dynoweb.app/vs/microsoft-clarity",
    siteName: "DynoWeb",
    type: "website",
  },
};

const rows = [
  { feature: "Heatmaps", values: [true, true] },
  { feature: "Session recordings", values: [true, true] },
  { feature: "Scroll depth maps", values: [true, true] },
  { feature: "Rage-click / dead-click detection", values: [true, true] },
  { feature: "AI-prioritised fix suggestions", values: [true, false] },
  { feature: "Code-level implementation guides", values: [true, false] },
  { feature: "Draft-theme preview before pushing", values: [true, false] },
  { feature: "Shopify-native app (no script tag)", values: [true, false] },
  { feature: "Add-to-cart funnel with order attribution", values: [true, false] },
  { feature: "Shopify-specific event tracking (checkout, cart)", values: [true, false] },
  { feature: "Customer Privacy API / GDPR compliance", values: [true, "Partial"] },
  { feature: "Revenue attributed to page journeys", values: [true, false] },
  { feature: "Free tier", values: [true, true] },
  { feature: "Session recording quota", values: ["Plan-based", "Unlimited"] },
];

const faqs = [
  {
    q: "Is Microsoft Clarity free to use on Shopify?",
    a: "Yes — Clarity is free with unlimited session recordings and no traffic cap. You install it via a custom script tag or a third-party Shopify app. DynoWeb also has a free tier and installs as a native Shopify app, no script tag management required.",
  },
  {
    q: "What does DynoWeb add that Clarity doesn't provide?",
    a: "Clarity is excellent general-purpose behavioral analytics. What it doesn't do: generate prioritised fix recommendations, provide step-by-step implementation guides, track Shopify-specific events (add-to-cart, checkout initiation, order completion) with native attribution, or connect session data to actual Shopify revenue. DynoWeb does all of these — making the leap from 'I can see the problem' to 'I know exactly what to change and how.'",
  },
  {
    q: "Can I run DynoWeb alongside Microsoft Clarity?",
    a: "Yes. They don't conflict. Many merchants start with both and gradually rely more on DynoWeb as its AI suggestion queue matures. Because DynoWeb uses Shopify's native app infrastructure rather than a script tag, its tracker is also lighter and loads asynchronously without impacting Clarity's data collection.",
  },
  {
    q: "Does Clarity track Shopify checkout and order events?",
    a: "Clarity can capture page-level behaviour on the cart and product pages, but it doesn't have native access to Shopify's order webhooks for revenue attribution. DynoWeb connects directly to Shopify's backend, so every journey analysis is tied to real order data — not just pageviews.",
  },
];

export default function VsMicrosoftClarityPage() {
  return (
    <MarketingShell
      jsonLd={[
        faqJsonLd(faqs),
        breadcrumbJsonLd([
          { name: "Home", path: "" },
          { name: "Compare", path: "/vs" },
          { name: "DynoWeb vs Microsoft Clarity", path: "/vs/microsoft-clarity" },
        ]),
      ]}
    >
      <Hero
        eyebrow="Tool comparison — 2026"
        title="DynoWeb vs Microsoft Clarity for Shopify"
        lead="Microsoft Clarity is one of the best free behavior analytics tools available — unlimited recordings, solid heatmaps, and a polished dashboard. But it is built for the general web. DynoWeb is built specifically for Shopify: it tracks add-to-cart funnels with order-webhook attribution, generates AI-prioritised fix suggestions, and integrates natively with Shopify's privacy and theme infrastructure."
        primaryCta={{ label: "Install DynoWeb free", href: "https://apps.shopify.com/dynoweb", external: true }}
        secondaryCta={{ label: "See Shopify analytics guide", href: "/shopify-analytics" }}
        highlights={["Shopify order attribution", "AI fix suggestions", "Native app, no script tag", "GDPR-ready"]}
      />

      <Section className="pb-16">
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.28em] text-zinc-500">Best for</p>
            <p className="mt-3 font-[Montserrat] text-xl font-extrabold tracking-tight text-white">DynoWeb</p>
            <ul className="mt-4 space-y-2 text-[0.95rem] leading-7 text-zinc-300">
              <li className="flex gap-2"><span className="mt-1 text-[#6eb0ff]">→</span>Shopify merchants who want to move from &quot;I see the problem&quot; to &quot;I know the fix&quot;</li>
              <li className="flex gap-2"><span className="mt-1 text-[#6eb0ff]">→</span>Teams that need revenue-attributed journey analysis tied to actual Shopify orders</li>
              <li className="flex gap-2"><span className="mt-1 text-[#6eb0ff]">→</span>Non-technical merchants who need guided theme-editor walkthroughs to implement changes</li>
              <li className="flex gap-2"><span className="mt-1 text-[#6eb0ff]">→</span>Stores prioritising Customer Privacy API compliance for GDPR / CCPA</li>
            </ul>
          </Card>
          <Card>
            <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.28em] text-zinc-500">Best for</p>
            <p className="mt-3 font-[Montserrat] text-xl font-extrabold tracking-tight text-white">Microsoft Clarity</p>
            <ul className="mt-4 space-y-2 text-[0.95rem] leading-7 text-zinc-300">
              <li className="flex gap-2"><span className="mt-1 text-zinc-500">→</span>Any web property that needs truly unlimited session recordings at zero cost</li>
              <li className="flex gap-2"><span className="mt-1 text-zinc-500">→</span>Non-Shopify sites or multi-platform teams needing general-purpose behavior analytics</li>
              <li className="flex gap-2"><span className="mt-1 text-zinc-500">→</span>Teams already invested in the Microsoft / Azure analytics ecosystem</li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section className="pb-20">
        <SectionHeading eyebrow="Feature comparison" title="Side-by-side breakdown" />
        <ComparisonTable columns={["Feature", "DynoWeb", "Microsoft Clarity"]} rows={rows} />
      </Section>

      <Section className="pb-20">
        <SectionHeading
          eyebrow="The difference"
          title="What free heatmaps don't give you"
          subtitle="Clarity is great general-purpose behavior analytics. These are the Shopify-specific next steps DynoWeb adds on top."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Screenshot
            src="/AISuggestions.png"
            alt="DynoWeb AI fix suggestions ranked by revenue impact"
            label="AI suggestions"
            caption="Prioritised, evidence-backed fixes — not just a recording to watch."
            minH="min-h-[200px] sm:min-h-[230px]"
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          />
          <Screenshot
            src="/RevenueAttribution.png"
            alt="DynoWeb revenue attribution tied to real Shopify orders"
            label="Revenue attribution"
            caption="Behavior tied to real Shopify orders via order webhooks."
            minH="min-h-[200px] sm:min-h-[230px]"
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          />
          <Screenshot
            src="/implementationguide-code.png"
            alt="DynoWeb implementation guide with a before/after code diff"
            label="Implementation guide"
            caption="The exact file path and diff to ship each fix."
            minH="min-h-[200px] sm:min-h-[230px]"
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          />
        </div>
      </Section>

      <FAQ title="Clarity vs DynoWeb — frequently asked" items={faqs} />

      <RelatedLinks
        links={[
          { label: "Shopify Heatmaps", href: "/shopify-heatmaps", description: "Click, scroll, and attention maps built for Shopify." },
          { label: "AI Fix Suggestions", href: "/features/ai-suggestions", description: "From insight to dev-ready fix automatically." },
          { label: "MCP Integration", href: "/features/mcp-integration", description: "Bring Shopify insights into Claude, Cursor & ChatGPT." },
        ]}
      />

      <CTA
        title="Clarity shows what happened. DynoWeb tells you what to do next."
        body="Install DynoWeb on the Shopify App Store and get AI-prioritised fix recommendations, implementation guides, and Shopify-native revenue attribution — for free."
        secondary={{ label: "See use cases", href: "/use-cases" }}
      />
    </MarketingShell>
  );
}
