import type { Metadata } from "next";
import { BarChart3, PlaySquare, MousePointerClick, Sparkles, DollarSign, Plug, Bell, Bot, Search, Gauge, TrendingUp } from "lucide-react";

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
  title: "Best Shopify App for CRO & Analytics — DynoWeb",
  description:
    "DynoWeb is the only native Shopify app that combines session replay, heatmaps, AI fix suggestions, and revenue attribution in one lightweight package.",
  alternates: { canonical: "https://www.dynoweb.app/shopify-app-store" },
  openGraph: {
    title: "Best Shopify App for CRO & Analytics — DynoWeb",
    description:
      "The best Shopify app for CRO and analytics: heatmaps, session replay, AI fixes, and revenue attribution in one native, lightweight app.",
    url: "https://www.dynoweb.app/shopify-app-store",
    siteName: "DynoWeb",
    type: "article",
  },
};

const bundle = [
  { icon: BarChart3, tag: "Analytics", title: "Behavioral analytics", body: "11 signals per session — clicks, rage clicks, dead clicks, scroll depth, mobile gestures — beyond what native Shopify analytics shows." },
  { icon: PlaySquare, tag: "Replays", title: "Session replay", body: "Watch real customer sessions, filtered by rage clicks, cart abandonment, or device, to see friction as shoppers experience it." },
  { icon: MousePointerClick, tag: "Heatmaps", title: "Click, scroll & attention maps", body: "Visual maps for every page and device, so you see where attention goes and where it dies." },
  { icon: Sparkles, tag: "AI", title: "AI fix suggestions", body: "A 3-layer engine ranks revenue-leaking gaps by ROI and delivers a dev-ready fix — file path, diff, and projected lift." },
  { icon: Bell, tag: "SmartNudge", title: "Behavioral interventions", body: "Trigger exit-intent offers, cart nudges, and social-proof toasts from real frustration signals — the live way DynoWeb deploys a fix to your storefront." },
  { icon: Bot, tag: "DynoAgent", title: "AI agent + actions", body: "Ask your store anything. DynoAgent runs on Google Gemini 2.5 Flash with 60+ tools spanning analytics, Shopify writes, SmartNudge, image generation, web search, and memory — it diagnoses and prepares changes for your one-click approval." },
  { icon: Search, tag: "SEO", title: "SEO Autopilot", body: "One-click, reversible SEO fixes — titles, meta, alt text, and structured data applied to your store, and undoable any time." },
  { icon: Gauge, tag: "Speed", title: "Storefront Speed", body: "Real-user Core Web Vitals, graded the way Google grades them — so you see the speed shoppers actually feel, not a lab score." },
  { icon: TrendingUp, tag: "Impact", title: "Impact scoreboard", body: "The money scoreboard — measures every fix before and after, so you know the dollars each change actually earned." },
  { icon: DollarSign, tag: "Revenue", title: "Revenue attribution", body: "Tie every fix to real Shopify orders via order webhooks — with fingerprint recovery for custom checkouts that break the Web Pixel." },
  { icon: Plug, tag: "AI tools", title: "MCP integration", body: "Connect your store's data to Claude, Cursor, and ChatGPT to query insights and ship fixes from your AI workflow." },
];

const whyOne = [
  "One lightweight app instead of a stack of single-purpose tools that each add weight and cost.",
  "Native Shopify install — no script tags, no tag manager, no setup that breaks on theme updates.",
  "Sub-40 KB, async tracker that keeps your store SEO-safe and Core Web Vitals friendly.",
  "Privacy-first: respects Shopify's Customer Privacy API, masks sensitive input, built for GDPR and CCPA.",
  "Free tier to start, with plans that scale as your store grows.",
];

const faqs = [
  {
    q: "What's the best Shopify app for CRO and analytics?",
    a: "The best CRO and analytics app is one that's native to Shopify, lightweight, and turns data into action. DynoWeb combines session replay, heatmaps, AI fix suggestions, and revenue attribution in a single 5.9 KB gzipped app — so instead of stitching together multiple tools, you get the full find-and-fix workflow in one place.",
  },
  {
    q: "Is DynoWeb a native Shopify app?",
    a: "Yes. DynoWeb installs from the Shopify App Store and runs as a native app embed — no manual script tags or tag manager. It uses Shopify's order webhooks for revenue attribution and respects the Customer Privacy API.",
  },
  {
    q: "Does DynoWeb have a free plan?",
    a: "Yes, DynoWeb has a free tier so you can install, start collecting behavioral data, and see your first insights and fix suggestions without commitment. Paid plans add more capacity and capabilities as you scale.",
  },
  {
    q: "Will another analytics app slow my store down?",
    a: "Many will, especially if you run several at once. DynoWeb is built to replace that stack with one lightweight app — under 40 KB and async — so you get more insight with less performance overhead.",
  },
];

export default function ShopifyAppStorePage() {
  return (
    <MarketingShell
      jsonLd={[
        faqJsonLd(faqs),
        breadcrumbJsonLd([
          { name: "Home", path: "" },
          { name: "Shopify App Store", path: "/shopify-app-store" },
        ]),
      ]}
    >
      <Hero
        eyebrow="Shopify App Store — CRO & analytics"
        title="The Only Shopify CRO App You'll Ever Need"
        lead="DynoWeb is the only native Shopify app that combines session replay, heatmaps, AI fix suggestions, and revenue attribution in one lightweight package — replacing a whole stack of single-purpose tools."
        primaryCta={{ label: "Install free", href: "https://apps.shopify.com/dynoweb" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
        highlights={["One app, not a stack", "Sub-40 KB tracker", "Native install", "Free tier"]}
        image="/Dashboard.png"
        imageAlt="DynoWeb all-in-one CRO and analytics dashboard for Shopify"
        imageLabel="DynoWeb dashboard"
      />

      <Section className="pb-16">
        <SectionHeading
          eyebrow="All in one app"
          title="Everything CRO, bundled natively"
          subtitle="Eleven capabilities most stores buy separately — combined into a single Shopify app."
        />
        <FeatureGrid items={bundle} />
      </Section>

      <FeatureRow
        eyebrow="Inside the app"
        title="Heatmaps, replays, and AI fixes in one place"
        body={
          <p>
            Instead of paying for a heatmap tool, a session-replay tool, and an analytics tool separately — each adding
            weight and another script — DynoWeb bundles them into one native app, with an AI engine that turns the data into
            ranked, dev-ready fixes.
          </p>
        }
        bullets={[
          "Click, scroll & attention heatmaps for every page",
          "Filterable session replays of real visits",
          "A ranked queue of fixes with projected lift",
        ]}
        image="/Heatmaps.png"
        imageAlt="DynoWeb heatmaps inside the all-in-one Shopify app"
        imageLabel="Heatmaps"
      />

      <FeatureRow
        reverse
        eyebrow="From data to action"
        title="The AI engine that ships with it"
        body={
          <p>
            Most analytics apps stop at charts. DynoWeb&rsquo;s 3-layer AI engine ranks every revenue-leaking gap by ROI and
            hands you the exact fix — file path, diff, and projected lift — so the app doesn&rsquo;t just report problems, it
            resolves them.
          </p>
        }
        bullets={[
          "Suggestions ranked by revenue impact",
          "Theme-editor steps and code diffs",
          "Revenue attribution to prove what worked",
        ]}
        image="/AISuggestions.png"
        imageAlt="DynoWeb AI suggestions ranked by revenue impact"
        imageLabel="AI suggestions"
      />

      <Section className="pb-16">
        <SectionHeading eyebrow="Why one app beats a stack" title="Less weight, more insight" />
        <Card>
          <CheckList items={whyOne} />
        </Card>
      </Section>

      <FAQ title="DynoWeb on the App Store — frequently asked" items={faqs} />

      <RelatedLinks
        links={[
          { label: "Shopify CRO Guide", href: "/shopify-cro", description: "The complete optimization loop." },
          { label: "Shopify Analytics", href: "/shopify-analytics", description: "Behavioral insights that drive revenue." },
          { label: "No-code Setup", href: "/shopify-analytics-no-code", description: "Live in 5 minutes." },
          { label: "Free CRO Audit", href: "/free-shopify-cro-audit", description: "Find what's killing your sales." },
          { label: "DynoWeb vs Hotjar", href: "/vs/hotjar", description: "Better Shopify CRO at a lower cost." },
          { label: "Pricing", href: "/pricing", description: "Simple, transparent plans." },
        ]}
      />

      <CTA
        title="Install the all-in-one Shopify CRO app"
        body="Replace your analytics stack with one native, lightweight app. Heatmaps, replays, AI fixes, and revenue attribution — free to start on the Shopify App Store."
        primaryLabel="Install free"
        secondary={{ label: "See pricing", href: "/pricing" }}
      />
    </MarketingShell>
  );
}
