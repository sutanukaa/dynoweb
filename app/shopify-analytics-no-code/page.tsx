import type { Metadata } from "next";

import {
  MarketingShell,
  Hero,
  Section,
  SectionHeading,
  FeatureGrid,
  Card,
  FAQ,
  CTA,
  RelatedLinks,
  faqJsonLd,
  breadcrumbJsonLd,
} from "@/app/components/seo/Marketing";

export const metadata: Metadata = {
  title: "Shopify Analytics With Zero Code — Set Up in 5 Minutes",
  description:
    "No developers. No tag managers. No complex setup. DynoWeb plugs directly into your Shopify theme and starts collecting behavioral data immediately.",
  alternates: { canonical: "https://www.dynoweb.app/shopify-analytics-no-code" },
  openGraph: {
    title: "Shopify Analytics With Zero Code — Set Up in 5 Minutes",
    description:
      "No-code Shopify analytics: install the app, click enable, and start collecting heatmaps, replays, and behavioral data in minutes.",
    url: "https://www.dynoweb.app/shopify-analytics-no-code",
    siteName: "DynoWeb",
    type: "article",
  },
};

const steps = [
  { tag: "Step 1", title: "Install the app", body: "Add DynoWeb from the Shopify App Store with one click. No script tags to paste, no tag manager to configure." },
  { tag: "Step 2", title: "Enable the embed", body: "Toggle the DynoWeb app embed on in your theme — a single switch in the theme editor. That's the entire 'code' step." },
  { tag: "Step 3", title: "Data starts flowing", body: "DynoWeb immediately begins collecting clicks, scrolls, rage clicks, and session data across your store." },
  { tag: "Step 4", title: "Read the insights", body: "Within minutes you have heatmaps, replays, and your first prioritised fix suggestions — no analyst required." },
];

const noCode = [
  { title: "No script tag management", body: "DynoWeb installs as a native Shopify app, so there's no manual tag to add, maintain, or accidentally break on theme updates." },
  { title: "No tag manager", body: "Skip Google Tag Manager entirely. The app embed handles tracking the Shopify-native way." },
  { title: "No developer needed", body: "Setup is a click and a toggle. Most fixes DynoWeb suggests are also no-code theme-editor changes." },
  { title: "No performance hit", body: "The tracker is under 40 KB and loads asynchronously — SEO-safe and Core Web Vitals friendly out of the box." },
];

const faqs = [
  {
    q: "Can I set up Shopify analytics without code?",
    a: "Yes. DynoWeb installs as a native Shopify app and activates through a single theme app-embed toggle — no script tags, no tag manager, no developer. Data collection starts immediately after you enable the embed.",
  },
  {
    q: "How long does DynoWeb take to set up?",
    a: "About five minutes. Install the app, enable the app embed in your theme, and DynoWeb starts collecting behavioral data right away. Your first heatmaps and suggestions appear as sessions accumulate.",
  },
  {
    q: "Do I need Google Tag Manager to use DynoWeb?",
    a: "No. Because DynoWeb is a native Shopify app, it doesn't rely on a tag manager or manual script injection. This also means it won't break when you update or switch themes the way a hard-coded tag can.",
  },
  {
    q: "Will no-code setup limit what I can track?",
    a: "Not at all. The no-code install captures the full behavioral picture — clicks, rage clicks, dead clicks, scroll depth, mobile gestures, funnels, and revenue attribution via Shopify's order webhooks. Simple setup, complete data.",
  },
];

export default function AnalyticsNoCodePage() {
  return (
    <MarketingShell
      jsonLd={[
        faqJsonLd(faqs),
        breadcrumbJsonLd([
          { name: "Home", path: "" },
          { name: "Shopify Analytics (No Code)", path: "/shopify-analytics-no-code" },
        ]),
      ]}
    >
      <Hero
        eyebrow="Shopify analytics — no code setup"
        title="Shopify Analytics That Takes 5 Minutes to Set Up"
        lead="No developers. No tag managers. No complex setup. DynoWeb plugs directly into your Shopify theme and starts collecting behavioral data immediately — install the app, flip one toggle, done."
        primaryCta={{ label: "Install now", href: "https://apps.shopify.com/dynoweb" }}
        secondaryCta={{ label: "See the analytics guide", href: "/shopify-analytics" }}
      />

      <Section className="pb-16">
        <SectionHeading
          eyebrow="Setup in 4 steps"
          title="From install to insights in minutes"
          subtitle="This is the entire setup. There is no step five where a developer gets involved."
        />
        <FeatureGrid columns={2} items={steps} />
      </Section>

      <Section className="pb-16">
        <SectionHeading eyebrow="What 'no code' really means" title="Nothing technical between you and your data" />
        <FeatureGrid columns={2} items={noCode} />
      </Section>

      <Section className="pb-16">
        <Card>
          <p className="font-[Montserrat] text-xl font-extrabold tracking-tight text-white">
            And the fixes are no-code too
          </p>
          <p className="mt-3 text-[0.97rem] leading-7 text-zinc-300">
            Setup isn&rsquo;t the only place DynoWeb removes the developer dependency. Most of its AI fix suggestions come
            with a numbered theme-editor walkthrough you can follow yourself — and when a change does need code, you get the
            exact file path and diff to hand off. Simple to start, simple to act on.
          </p>
        </Card>
      </Section>

      <FAQ title="No-code analytics — frequently asked" items={faqs} />

      <RelatedLinks
        links={[
          { label: "Shopify Analytics", href: "/shopify-analytics", description: "Behavioral insights that drive revenue." },
          { label: "Heatmaps", href: "/shopify-heatmaps", description: "See where customers click & scroll." },
          { label: "Session Replay", href: "/shopify-session-replay", description: "Watch every customer visit." },
          { label: "Free CRO Audit", href: "/free-shopify-cro-audit", description: "Find what's killing your sales." },
          { label: "AI Fix Suggestions", href: "/features/ai-suggestions", description: "No-code, dev-ready fixes." },
          { label: "Pricing", href: "/pricing", description: "Simple, transparent plans." },
        ]}
      />

      <CTA
        title="Live in five minutes, zero code"
        body="Install DynoWeb, flip one toggle, and start collecting heatmaps, replays, and behavioral insights immediately. No developer, no tag manager, no waiting."
        primaryLabel="Install now"
        secondary={{ label: "See pricing", href: "/pricing" }}
      />
    </MarketingShell>
  );
}
