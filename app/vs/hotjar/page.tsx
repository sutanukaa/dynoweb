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
  title: "DynoWeb vs Hotjar — Better Shopify CRO at a Lower Cost",
  description:
    "Hotjar shows a heatmap. DynoWeb gives you the fix. See why Shopify merchants switching from Hotjar get 3x faster optimization cycles and dev-ready fixes.",
  alternates: { canonical: "https://www.dynoweb.app/vs/hotjar" },
  openGraph: {
    title: "DynoWeb vs Hotjar — Better Shopify CRO at a Lower Cost",
    description:
      "Side-by-side comparison of DynoWeb and Hotjar for Shopify merchants: heatmaps, session replay, AI suggestions, native integration, and pricing.",
    url: "https://www.dynoweb.app/vs/hotjar",
    siteName: "DynoWeb",
    type: "website",
  },
};

const rows = [
  { feature: "Heatmaps", values: [true, true] },
  { feature: "Session recordings", values: [true, true] },
  { feature: "Scroll depth maps", values: [true, true] },
  { feature: "Rage-click detection", values: [true, true] },
  { feature: "AI-prioritised fix suggestions", values: [true, false] },
  { feature: "Code-level implementation guides", values: [true, false] },
  { feature: "Draft-theme preview before pushing", values: [true, false] },
  { feature: "Shopify-native app (no tag required)", values: [true, false] },
  { feature: "Shopify order webhook attribution", values: [true, false] },
  { feature: "Customer Privacy API / GDPR compliance", values: [true, "Partial"] },
  { feature: "Surveys & feedback widgets", values: [false, true] },
  { feature: "Tracker weight", values: ["< 40 KB", "~80 KB"] },
  { feature: "Free tier", values: [true, true] },
];

const faqs = [
  {
    q: "Can I migrate from Hotjar to DynoWeb?",
    a: "Yes. DynoWeb installs as a Shopify app — no manual script tag required. Once installed, it starts collecting heatmap, click, and session data immediately. Your existing Hotjar recordings remain in Hotjar; DynoWeb builds its baseline from new traffic. Most merchants run both in parallel for a few weeks during transition, then drop Hotjar when DynoWeb's suggestion queue is mature enough to guide their roadmap.",
  },
  {
    q: "Does DynoWeb replace everything Hotjar does?",
    a: "DynoWeb covers the core behavioral data Hotjar is used for on Shopify stores: heatmaps, session replay, scroll depth, and rage-click detection. It adds what Hotjar does not: AI-generated fix recommendations with expected impact ratings, step-by-step implementation guides (theme-editor and code paths), and Shopify revenue attribution. Hotjar's survey and NPS widgets have no direct equivalent in DynoWeb today.",
  },
  {
    q: "Which is better for a non-technical Shopify merchant?",
    a: "DynoWeb is designed specifically for Shopify merchants who want to act, not just observe. Every suggestion includes a theme-editor walkthrough that doesn't require touching code. Hotjar surfaces the data; DynoWeb tells you what to do with it and shows you exactly how.",
  },
];

export default function VsHotjarPage() {
  return (
    <MarketingShell
      jsonLd={[
        faqJsonLd(faqs),
        breadcrumbJsonLd([
          { name: "Home", path: "" },
          { name: "Compare", path: "/vs" },
          { name: "DynoWeb vs Hotjar", path: "/vs/hotjar" },
        ]),
      ]}
    >
      <Hero
        eyebrow="Tool comparison — 2026"
        title="Why Shopify Merchants Switch from Hotjar to DynoWeb"
        lead="Hotjar is an observation tool — it shows you heatmaps, session recordings, and survey responses. DynoWeb is an action tool built natively for Shopify: it captures the same behavioral signals and then converts them into AI-prioritised fix recommendations with step-by-step implementation guides. Here is how they compare."
        primaryCta={{ label: "Switch Today", href: "https://apps.shopify.com/dynoweb", external: true }}
        secondaryCta={{ label: "See Shopify CRO guide", href: "/shopify-cro" }}
        highlights={["Same heatmaps & replays", "Plus AI fix suggestions", "Shopify-native", "Sub-40 KB tracker"]}
      />

      <Section className="pb-16">
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.28em] text-zinc-500">Best for</p>
            <p className="mt-3 font-[Montserrat] text-xl font-extrabold tracking-tight text-white">DynoWeb</p>
            <ul className="mt-4 space-y-2 text-[0.95rem] leading-7 text-zinc-300">
              <li className="flex gap-2"><span className="mt-1 text-[#6eb0ff]">→</span>Shopify merchants who want actionable fix recommendations, not raw data to interpret</li>
              <li className="flex gap-2"><span className="mt-1 text-[#6eb0ff]">→</span>Non-technical teams who need guided implementation (theme editor and code paths)</li>
              <li className="flex gap-2"><span className="mt-1 text-[#6eb0ff]">→</span>Stores that want revenue-attributed journey analysis tied to real Shopify orders</li>
              <li className="flex gap-2"><span className="mt-1 text-[#6eb0ff]">→</span>Merchants who prioritize a lightweight tracker (&lt; 40 KB) and native privacy compliance</li>
            </ul>
          </Card>
          <Card>
            <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.28em] text-zinc-500">Best for</p>
            <p className="mt-3 font-[Montserrat] text-xl font-extrabold tracking-tight text-white">Hotjar</p>
            <ul className="mt-4 space-y-2 text-[0.95rem] leading-7 text-zinc-300">
              <li className="flex gap-2"><span className="mt-1 text-zinc-500">→</span>Teams on any platform (not just Shopify) who need flexible observation tooling</li>
              <li className="flex gap-2"><span className="mt-1 text-zinc-500">→</span>UX researchers who need in-product surveys, NPS widgets, and user feedback collection</li>
              <li className="flex gap-2"><span className="mt-1 text-zinc-500">→</span>Agencies managing multi-platform clients who want a single behavior analytics tool</li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section className="pb-20">
        <SectionHeading eyebrow="Feature comparison" title="Side-by-side breakdown" />
        <ComparisonTable columns={["Feature", "DynoWeb", "Hotjar"]} rows={rows} />
      </Section>

      <Section className="pb-20">
        <SectionHeading
          eyebrow="The difference"
          title="What Hotjar doesn't give you"
          subtitle="Hotjar shows you the behavior. These are the next steps DynoWeb adds — the part that actually moves conversion."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Screenshot
            src="/AISuggestions.png"
            alt="DynoWeb AI fix suggestions ranked by revenue impact"
            label="AI suggestions"
            caption="A ranked queue of fixes, not a wall of recordings to interpret."
            minH="min-h-[200px] sm:min-h-[230px]"
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          />
          <Screenshot
            src="/implementationguide-code.png"
            alt="DynoWeb implementation guide with a before/after code diff"
            label="Implementation guide"
            caption="The exact file path and before/after diff — ship it in minutes."
            minH="min-h-[200px] sm:min-h-[230px]"
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          />
          <Screenshot
            src="/RevenueAttribution.png"
            alt="DynoWeb revenue attribution tied to real Shopify orders"
            label="Revenue attribution"
            caption="Every fix tied to real Shopify orders via order webhooks."
            minH="min-h-[200px] sm:min-h-[230px]"
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          />
        </div>
      </Section>

      <FAQ title="Switching from Hotjar?" items={faqs} />

      <RelatedLinks
        links={[
          { label: "Shopify Heatmaps", href: "/shopify-heatmaps", description: "Click, scroll, and attention maps built for Shopify." },
          { label: "Shopify Session Replay", href: "/shopify-session-replay", description: "Watch real customer sessions and find friction." },
          { label: "DynoWeb vs Microsoft Clarity", href: "/vs/microsoft-clarity", description: "Beyond free heatmaps for Shopify." },
        ]}
      />

      <CTA
        title="Move from observing to actually fixing"
        body="DynoWeb gives you the same behavioral visibility as Hotjar, plus AI suggestions that tell you exactly what to change and how — built natively for Shopify."
        secondary={{ label: "See use cases", href: "/use-cases" }}
      />
    </MarketingShell>
  );
}
