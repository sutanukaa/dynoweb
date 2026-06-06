import type { Metadata } from "next";

import {
  MarketingShell,
  Hero,
  Section,
  SectionHeading,
  FeatureGrid,
  CheckList,
  Card,
  StatRow,
  FAQ,
  CTA,
  RelatedLinks,
  faqJsonLd,
  breadcrumbJsonLd,
} from "@/app/components/seo/Marketing";

export const metadata: Metadata = {
  title: "Shopify CRO: Complete Guide to Conversion Optimization",
  description:
    "Everything you need to improve your Shopify store's conversion rate — heatmaps, session replays, AI fixes, and proven tactics. Updated 2026.",
  alternates: { canonical: "https://www.dynoweb.app/shopify-cro" },
  openGraph: {
    title: "Shopify CRO: Complete Guide to Conversion Optimization",
    description:
      "A complete guide to Shopify conversion rate optimization — what CRO is, how to diagnose friction, and the exact workflow to fix revenue leaks.",
    url: "https://www.dynoweb.app/shopify-cro",
    siteName: "DynoWeb",
    type: "article",
  },
};

const pillars = [
  {
    tag: "Diagnose",
    title: "See where attention and intent break",
    body: "Heatmaps, scroll depth, and session replays show you exactly where visitors hesitate, rage-click, or drop off — before they ever reach checkout.",
  },
  {
    tag: "Prioritise",
    title: "Rank fixes by revenue impact",
    body: "DynoWeb's AI engine scores every gap by expected ROI, so you work on the change most likely to move conversion first — not the loudest opinion in the room.",
  },
  {
    tag: "Implement",
    title: "Ship the fix without guesswork",
    body: "Each suggestion comes with a theme-editor walkthrough and a code-level diff — file path, before/after, and projected lift — so the change is ready to ship.",
  },
];

const steps = [
  "Establish your baseline conversion rate by device, traffic source, and key template (home, collection, product, cart, checkout).",
  "Layer behavioral data on top of the numbers: heatmaps for where attention goes, scroll depth for what gets seen, replays for the moments of friction.",
  "Identify the highest-traffic page with the steepest drop-off — that is usually where a single fix returns the most revenue.",
  "Form a clear hypothesis: 'Moving the variant picker above the fold will increase add-to-cart on mobile.'",
  "Implement on a draft theme, preview it, then ship — and let DynoWeb attribute the revenue change back to the fix.",
  "Repeat. CRO is a compounding loop, not a one-time project.",
];

const mistakes = [
  "Optimising for traffic when the real leak is on-site conversion — more visitors to a broken page just wastes more ad spend.",
  "Relying on opinions and best-practice listicles instead of your store's own behavioral data.",
  "Testing trivial changes (button colors) while ignoring structural friction (hidden CTAs, confusing variant pickers, slow mobile pages).",
  "Shipping fixes with no way to attribute the revenue impact, so you never learn what actually worked.",
  "Treating mobile as an afterthought when it's often the majority of traffic — and the majority of lost revenue.",
];

const faqs = [
  {
    q: "What is Shopify CRO?",
    a: "Shopify CRO (conversion rate optimization) is the practice of increasing the percentage of store visitors who complete a desired action — usually a purchase — without needing more traffic. It combines behavioral data (heatmaps, session replays, scroll depth, rage clicks) with structured experimentation to find and fix the friction that stops shoppers from converting.",
  },
  {
    q: "What is a good conversion rate for a Shopify store?",
    a: "Across Shopify stores, a conversion rate around 2-3% is generally considered solid, with top performers exceeding 4-5%. But averages vary widely by industry, price point, and traffic source. The more useful benchmark is your own store over time — and the gap between your desktop and mobile rates, which often reveals where the biggest opportunity sits.",
  },
  {
    q: "How do I improve my Shopify conversion rate?",
    a: "Start by diagnosing rather than guessing. Use heatmaps and session replays to see where visitors hesitate or drop off, prioritise the highest-impact friction on your highest-traffic pages, implement a focused fix (often on the product page, cart, or mobile experience), and attribute the result to learn what works. DynoWeb automates this loop — it surfaces the gaps, ranks them by ROI, and hands you the exact fix.",
  },
  {
    q: "Do I need a developer to do CRO on Shopify?",
    a: "Not for most changes. Many high-impact fixes can be made directly in the Shopify theme editor, and DynoWeb provides a numbered, click-by-click walkthrough for each one. When a change does require code, you get the exact file path and snippet to hand to a developer — so even technical fixes ship faster.",
  },
];

export default function ShopifyCroPage() {
  return (
    <MarketingShell
      jsonLd={[
        faqJsonLd(faqs),
        breadcrumbJsonLd([
          { name: "Home", path: "" },
          { name: "Shopify CRO", path: "/shopify-cro" },
        ]),
      ]}
    >
      <Hero
        eyebrow="Pillar guide — Shopify conversion rate optimization"
        title="Shopify CRO: The Complete Conversion Rate Optimization Guide"
        lead="Everything you need to improve your Shopify store's conversion rate — heatmaps, session replays, AI fixes, and proven tactics. This guide covers what CRO actually is, how to diagnose friction with behavioral data, and the exact workflow DynoWeb uses to turn signals into revenue."
        primaryCta={{ label: "Download CRO checklist", href: "/blog/shopify-cro-checklist" }}
        secondaryCta={{ label: "Install DynoWeb free", href: "https://apps.shopify.com/dynoweb" }}
      />

      <Section className="pb-16">
        <StatRow
          stats={[
            { value: "11", label: "behavioral signals tracked per session" },
            { value: "< 40 KB", label: "tracker weight — SEO-safe, async" },
            { value: "3-layer", label: "AI engine that ranks fixes by ROI" },
            { value: "Native", label: "Shopify app — no script tag needed" },
          ]}
        />
      </Section>

      <Section className="pb-16">
        <SectionHeading
          eyebrow="The CRO loop"
          title="Diagnose → prioritise → implement"
          subtitle="Conversion optimization fails when it's a pile of disconnected tactics. It works when it's a repeatable loop. DynoWeb runs that loop for you."
        />
        <FeatureGrid items={pillars} />
      </Section>

      <Section className="pb-16">
        <SectionHeading eyebrow="Step by step" title="How to run CRO on your Shopify store" />
        <Card>
          <ol className="space-y-4 text-[0.97rem] leading-7 text-zinc-300">
            {steps.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-[Montserrat] text-lg font-extrabold text-[#6eb0ff]">{String(i + 1).padStart(2, "0")}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </Card>
      </Section>

      <Section className="pb-16">
        <SectionHeading
          eyebrow="Avoid these"
          title="The 5 most common Shopify CRO mistakes"
          subtitle="Most stores don't lose conversions to one big problem — they lose them to a handful of avoidable habits."
        />
        <Card>
          <CheckList items={mistakes} />
        </Card>
      </Section>

      <Section className="pb-16">
        <SectionHeading eyebrow="Dig deeper" title="The building blocks of Shopify CRO" />
        <FeatureGrid
          columns={2}
          items={[
            { title: "Heatmaps", body: "Click, scroll, and attention maps reveal what shoppers actually engage with — and what they ignore." },
            { title: "Session replay", body: "Watch real sessions to see the exact moment friction turns a browser into a bounce." },
            { title: "Cart & checkout analytics", body: "Find where add-to-cart intent leaks before the order completes." },
            { title: "AI fix suggestions", body: "Turn raw behavioral data into prioritised, dev-ready changes with projected lift." },
          ]}
        />
      </Section>

      <FAQ title="Shopify CRO — frequently asked" items={faqs} />

      <RelatedLinks
        title="Explore the CRO toolkit"
        links={[
          { label: "Shopify Heatmaps", href: "/shopify-heatmaps", description: "See where customers click and scroll." },
          { label: "Shopify Session Replay", href: "/shopify-session-replay", description: "Watch every customer visit." },
          { label: "Shopify Analytics", href: "/shopify-analytics", description: "Behavioral insights that drive revenue." },
          { label: "Conversion Rate Benchmarks 2026", href: "/blog/shopify-conversion-rate-benchmark", description: "What a good Shopify conversion rate looks like." },
          { label: "Why your store isn't converting", href: "/blog/why-shopify-store-not-converting", description: "12 real reasons (+ fixes)." },
          { label: "The 60-point CRO checklist", href: "/blog/shopify-cro-checklist", description: "Actionable items across every template." },
        ]}
      />

      <CTA
        title="Stop guessing. See exactly what to fix."
        body="DynoWeb watches every tap, scroll, and rage-click in your Shopify store and gives you the exact fix — file, diff, and projected lift. Sub-40 KB. SEO-safe."
        primaryLabel="Start free trial"
        secondary={{ label: "See pricing", href: "/pricing" }}
      />
    </MarketingShell>
  );
}
