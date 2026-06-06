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
  title: "DynoWeb vs Glew — Behavioral Analytics vs Reporting for Shopify",
  description:
    "Glew tracks what happened. DynoWeb shows you what to fix. The difference between data reports and actionable revenue optimization for Shopify.",
  alternates: { canonical: "https://www.dynoweb.app/vs/glew" },
  openGraph: {
    title: "DynoWeb vs Glew — Behavioral Analytics vs Reporting for Shopify",
    description:
      "Compare DynoWeb and Glew for Shopify. Glew is a BI and reporting layer; DynoWeb is behavioral CRO that turns on-page signals into dev-ready fixes.",
    url: "https://www.dynoweb.app/vs/glew",
    siteName: "DynoWeb",
    type: "website",
  },
};

const rows = [
  { feature: "On-page behavioral analytics (clicks, scroll, rage)", values: [true, false] },
  { feature: "Session recordings", values: [true, false] },
  { feature: "Heatmaps (click / scroll / attention)", values: [true, false] },
  { feature: "AI-prioritised fix suggestions", values: [true, false] },
  { feature: "Code-level implementation guides", values: [true, false] },
  { feature: "Sales & revenue reporting dashboards", values: ["Core CRO metrics", true] },
  { feature: "Multichannel BI / data warehouse reporting", values: [false, true] },
  { feature: "Customer LTV & cohort reports", values: ["Basic", true] },
  { feature: "Inventory & product profitability reports", values: [false, true] },
  { feature: "Shopify order webhook attribution", values: [true, true] },
  { feature: "Behavioral exit-intent (SmartNudge)", values: [true, false] },
  { feature: "Free tier", values: [true, "Trial-based"] },
];

const faqs = [
  {
    q: "Is DynoWeb a replacement for Glew?",
    a: "Not exactly — they solve different problems. Glew is a business intelligence and reporting platform: it aggregates sales, inventory, customer LTV, and multichannel data into dashboards that tell you what happened across your business. DynoWeb is a conversion rate optimization tool: it watches how visitors actually behave on your storefront — clicks, scrolls, rage clicks, drop-offs — and turns those signals into prioritised, dev-ready fixes. Many merchants use a reporting tool for the numbers and DynoWeb to improve the on-site experience that produces those numbers.",
  },
  {
    q: "What does DynoWeb show that Glew can't?",
    a: "Glew tells you that your product-page conversion rate is 1.8%. DynoWeb tells you why — which element shoppers tap that isn't clickable, how far down the page they actually scroll, where rage clicks cluster, and which exact change is most likely to move that 1.8%. It also hands your developer the file path and diff to implement it. Reporting tools quantify the problem; DynoWeb diagnoses and resolves it.",
  },
  {
    q: "Can I use DynoWeb and Glew together?",
    a: "Yes, and it's a common setup. Glew (or any BI/reporting tool) gives leadership the financial and operational picture, while DynoWeb sits on the storefront and drives the conversion improvements that feed those reports. They don't overlap or conflict — DynoWeb installs as a native Shopify app and collects behavioral data independently.",
  },
  {
    q: "Does DynoWeb do revenue attribution like Glew?",
    a: "DynoWeb attributes revenue to page journeys and behavioral fixes using Shopify's order webhooks — so you can see which on-site changes actually increased revenue. Glew attributes revenue across channels, campaigns, and products for broader business reporting. DynoWeb's attribution is optimization-focused; Glew's is reporting-focused.",
  },
];

export default function VsGlewPage() {
  return (
    <MarketingShell
      jsonLd={[
        faqJsonLd(faqs),
        breadcrumbJsonLd([
          { name: "Home", path: "" },
          { name: "Compare", path: "/vs" },
          { name: "DynoWeb vs Glew", path: "/vs/glew" },
        ]),
      ]}
    >
      <Hero
        eyebrow="Tool comparison — 2026"
        title="DynoWeb vs Glew for Shopify"
        lead="Glew is a reporting and business-intelligence platform — it tells you what happened across sales, inventory, and customers. DynoWeb is a behavioral CRO tool — it shows you why your store converts the way it does and hands you the exact fix. Here's how reporting and optimization compare, and why most growing Shopify stores end up wanting both."
        primaryCta={{ label: "Install DynoWeb free", href: "https://apps.shopify.com/dynoweb", external: true }}
        secondaryCta={{ label: "See Shopify analytics guide", href: "/shopify-analytics" }}
        highlights={["Behavioral analytics", "Dev-ready fixes, not reports", "On-page friction signals", "Revenue attribution"]}
      />

      <Section className="pb-16">
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.28em] text-zinc-500">Best for</p>
            <p className="mt-3 font-[Montserrat] text-xl font-extrabold tracking-tight text-white">DynoWeb</p>
            <ul className="mt-4 space-y-2 text-[0.95rem] leading-7 text-zinc-300">
              <li className="flex gap-2"><span className="mt-1 text-[#6eb0ff]">→</span>Merchants who want to know <em>why</em> a page underperforms, not just that it does</li>
              <li className="flex gap-2"><span className="mt-1 text-[#6eb0ff]">→</span>Teams that need dev-ready fixes — file path, diff, projected lift — not another dashboard</li>
              <li className="flex gap-2"><span className="mt-1 text-[#6eb0ff]">→</span>Stores focused on improving on-site conversion and reducing abandonment</li>
              <li className="flex gap-2"><span className="mt-1 text-[#6eb0ff]">→</span>Non-technical owners who want guided, no-code implementation steps</li>
            </ul>
          </Card>
          <Card>
            <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.28em] text-zinc-500">Best for</p>
            <p className="mt-3 font-[Montserrat] text-xl font-extrabold tracking-tight text-white">Glew</p>
            <ul className="mt-4 space-y-2 text-[0.95rem] leading-7 text-zinc-300">
              <li className="flex gap-2"><span className="mt-1 text-zinc-500">→</span>Teams that need consolidated BI across sales, inventory, and customer LTV</li>
              <li className="flex gap-2"><span className="mt-1 text-zinc-500">→</span>Multichannel sellers reporting across Shopify, Amazon, and marketplaces</li>
              <li className="flex gap-2"><span className="mt-1 text-zinc-500">→</span>Finance and ops stakeholders who want scheduled, exportable reports</li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section className="pb-20">
        <SectionHeading eyebrow="Feature comparison" title="Reporting vs optimization, side by side" />
        <ComparisonTable columns={["Capability", "DynoWeb", "Glew"]} rows={rows} />
      </Section>

      <Section className="pb-20">
        <SectionHeading
          eyebrow="The difference"
          title="What reports don't give you"
          subtitle="Glew tells you what happened. These are the on-page tools DynoWeb adds to find why — and fix it."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Screenshot
            src="/clickHeatmap.png"
            alt="DynoWeb click heatmap on a Shopify product page"
            label="Heatmaps"
            caption="See where shoppers actually click, scroll, and stall."
            minH="min-h-[200px] sm:min-h-[230px]"
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          />
          <Screenshot
            src="/sessionReplay.png"
            alt="DynoWeb session replay player for a Shopify store"
            label="Session replay"
            caption="Watch the moment a sale slips away — not just the total."
            minH="min-h-[200px] sm:min-h-[230px]"
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          />
          <Screenshot
            src="/AISuggestions.png"
            alt="DynoWeb AI fix suggestions ranked by revenue impact"
            label="AI suggestions"
            caption="A ranked, dev-ready fix for each leak — not another dashboard."
            minH="min-h-[200px] sm:min-h-[230px]"
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          />
        </div>
      </Section>

      <FAQ title="Glew vs DynoWeb — frequently asked" items={faqs} />

      <RelatedLinks
        links={[
          { label: "Revenue Attribution", href: "/features/revenue-attribution", description: "Tie every fix to actual Shopify sales." },
          { label: "Shopify Analytics App", href: "/shopify-analytics", description: "Behavioral insights that drive revenue." },
          { label: "DynoWeb vs Hotjar", href: "/vs/hotjar", description: "Better Shopify CRO at a lower cost." },
        ]}
      />

      <CTA
        title="Glew reports it. DynoWeb fixes it."
        body="Install DynoWeb on the Shopify App Store and turn behavioral signals into prioritised, dev-ready fixes that move the metrics your reports track."
        secondary={{ label: "See use cases", href: "/use-cases" }}
      />
    </MarketingShell>
  );
}
