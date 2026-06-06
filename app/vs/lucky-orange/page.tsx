import type { Metadata } from "next";

import {
  MarketingShell,
  Hero,
  Section,
  SectionHeading,
  Card,
  ComparisonTable,
  FAQ,
  CTA,
  RelatedLinks,
  faqJsonLd,
  breadcrumbJsonLd,
} from "@/app/components/seo/Marketing";

export const metadata: Metadata = {
  title: "DynoWeb vs Lucky Orange — Smarter Shopify Analytics",
  description:
    "Lucky Orange records sessions. DynoWeb tells you exactly what to fix. Compare features, pricing, and ROI for Shopify merchants.",
  alternates: { canonical: "https://www.dynoweb.app/vs/lucky-orange" },
  openGraph: {
    title: "DynoWeb vs Lucky Orange — Smarter Shopify Analytics",
    description:
      "Compare DynoWeb and Lucky Orange for Shopify: heatmaps, session replay, AI fix suggestions, SmartNudge, native revenue attribution, and tracker weight.",
    url: "https://www.dynoweb.app/vs/lucky-orange",
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
  { feature: "Shopify-native app", values: [true, true] },
  { feature: "Add-to-cart funnel with order attribution", values: [true, false] },
  { feature: "Customer Privacy API / GDPR compliance", values: [true, "Partial"] },
  { feature: "Live chat widget", values: [false, true] },
  { feature: "On-site surveys", values: [false, true] },
  { feature: "Announcement bars", values: [false, true] },
  { feature: "SmartNudge — behavioral exit-intent", values: [true, false] },
  { feature: "Free tier", values: [true, true] },
  { feature: "Tracker weight", values: ["< 40 KB", "~70 KB+"] },
];

const faqs = [
  {
    q: "How does DynoWeb's approach differ from Lucky Orange?",
    a: "Lucky Orange is a bundled toolkit: you get heatmaps, session replay, surveys, live chat, and announcement bars in one subscription. That breadth suits teams who want multiple visitor engagement tools under one roof. DynoWeb takes a narrower, deeper approach — it focuses on the conversion optimization workflow: capture behavioral signals, generate AI-prioritised fix recommendations, and provide step-by-step implementation guides so merchants can act without a developer. Where Lucky Orange gives you data and communication tools, DynoWeb gives you a diagnostic and action pipeline specifically tuned for Shopify.",
  },
  {
    q: "Does Lucky Orange have a Shopify app?",
    a: "Yes. Lucky Orange has a Shopify app in the App Store. DynoWeb is also a native Shopify app. The key difference in native integration is that DynoWeb uses Shopify's order webhooks to attribute revenue to specific page journeys and sessions, while Lucky Orange's revenue tracking relies on script-based event capture rather than server-side order data.",
  },
  {
    q: "What is DynoWeb's SmartNudge and does Lucky Orange have something similar?",
    a: "SmartNudge is DynoWeb's behavioral exit-intent system. It watches for abandonment signals — rage clicks, extended dwell with no cart action, cursor movement toward the browser chrome — and fires a targeted message at the right moment. Lucky Orange offers announcement bars and popups, but they are not triggered by real-time behavioral signals from the session. DynoWeb's nudges are condition-driven and frequency-capped automatically.",
  },
  {
    q: "Can I use DynoWeb if I already pay for Lucky Orange?",
    a: "Yes. DynoWeb installs as a separate Shopify app and doesn't interfere with Lucky Orange's scripts. Many merchants evaluate both and decide based on where they want to focus budget — on the broader communication toolkit or on the AI-driven fix recommendation workflow.",
  },
];

export default function VsLuckyOrangePage() {
  return (
    <MarketingShell
      jsonLd={[
        faqJsonLd(faqs),
        breadcrumbJsonLd([
          { name: "Home", path: "" },
          { name: "Compare", path: "/vs" },
          { name: "DynoWeb vs Lucky Orange", path: "/vs/lucky-orange" },
        ]),
      ]}
    >
      <Hero
        eyebrow="Tool comparison — 2026"
        title="DynoWeb vs Lucky Orange for Shopify"
        lead="Lucky Orange bundles heatmaps, session recordings, live chat, surveys, and announcement bars into a single platform. DynoWeb takes a different bet: instead of bundling more tools, it goes deeper on the one workflow that moves the conversion needle — turning behavioral signals into AI-prioritised fix recommendations with code-level implementation guides, native Shopify revenue attribution, and a sub-40 KB tracker."
        primaryCta={{ label: "Install DynoWeb free", href: "https://apps.shopify.com/dynoweb", external: true }}
        secondaryCta={{ label: "See Shopify CRO guide", href: "/shopify-cro" }}
      />

      <Section className="pb-16">
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.28em] text-zinc-500">Best for</p>
            <p className="mt-3 font-[Montserrat] text-xl font-extrabold tracking-tight text-white">DynoWeb</p>
            <ul className="mt-4 space-y-2 text-[0.95rem] leading-7 text-zinc-300">
              <li className="flex gap-2"><span className="mt-1 text-[#6eb0ff]">→</span>Shopify merchants who want an actionable fix pipeline, not a communication suite</li>
              <li className="flex gap-2"><span className="mt-1 text-[#6eb0ff]">→</span>Teams that need AI suggestions with step-by-step theme-editor or code-level walkthroughs</li>
              <li className="flex gap-2"><span className="mt-1 text-[#6eb0ff]">→</span>Stores prioritising a lightweight tracker and Customer Privacy API compliance</li>
              <li className="flex gap-2"><span className="mt-1 text-[#6eb0ff]">→</span>Merchants who want behavioral exit-intent (SmartNudge) driven by real session signals</li>
            </ul>
          </Card>
          <Card>
            <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.28em] text-zinc-500">Best for</p>
            <p className="mt-3 font-[Montserrat] text-xl font-extrabold tracking-tight text-white">Lucky Orange</p>
            <ul className="mt-4 space-y-2 text-[0.95rem] leading-7 text-zinc-300">
              <li className="flex gap-2"><span className="mt-1 text-zinc-500">→</span>Merchants who also need live chat, NPS surveys, and announcement bars in one tool</li>
              <li className="flex gap-2"><span className="mt-1 text-zinc-500">→</span>Teams that want a broader visitor engagement platform alongside heatmaps and replay</li>
              <li className="flex gap-2"><span className="mt-1 text-zinc-500">→</span>Stores comfortable with a heavier tracker footprint in exchange for feature breadth</li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section className="pb-20">
        <SectionHeading eyebrow="Feature comparison" title="Side-by-side breakdown" />
        <ComparisonTable columns={["Feature", "DynoWeb", "Lucky Orange"]} rows={rows} />
      </Section>

      <FAQ title="Lucky Orange vs DynoWeb — frequently asked" items={faqs} />

      <RelatedLinks
        links={[
          { label: "Shopify Session Replay", href: "/shopify-session-replay", description: "Watch real customer sessions and find friction." },
          { label: "Reduce Cart Abandonment", href: "/use-cases/reduce-cart-abandonment", description: "Find and fix what makes shoppers abandon." },
          { label: "DynoWeb vs Hotjar", href: "/vs/hotjar", description: "Better Shopify CRO at a lower cost." },
        ]}
      />

      <CTA
        title="Lucky Orange records it. DynoWeb fixes it."
        body="Install DynoWeb on the Shopify App Store and get AI-prioritised fix recommendations, implementation guides, and Shopify-native revenue attribution — for free."
        secondary={{ label: "See use cases", href: "/use-cases" }}
      />
    </MarketingShell>
  );
}
