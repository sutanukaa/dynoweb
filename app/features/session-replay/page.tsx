import type { Metadata } from "next";

import {
  MarketingShell,
  Hero,
  Section,
  SectionHeading,
  FeatureGrid,
  FAQ,
  CTA,
  RelatedLinks,
  faqJsonLd,
  breadcrumbJsonLd,
} from "@/app/components/seo/Marketing";

export const metadata: Metadata = {
  title: "Session Replay Feature — DynoWeb for Shopify",
  description:
    "Record and replay every visitor session on your Shopify store. Filter by rage clicks, cart abandonment, or device type. Privacy-first, GDPR-safe.",
  alternates: { canonical: "https://www.dynoweb.app/features/session-replay" },
  openGraph: {
    title: "Session Replay Feature — DynoWeb for Shopify",
    description:
      "Shopify visitor session recording: replay real sessions, filter by behavior and device, and connect every friction point to a fix.",
    url: "https://www.dynoweb.app/features/session-replay",
    siteName: "DynoWeb",
    type: "article",
  },
};

const filters = [
  { tag: "Behavior", title: "Rage & dead clicks", body: "Jump straight to the sessions where a shopper repeatedly clicked a stuck element or tapped something that wasn't clickable." },
  { tag: "Intent", title: "Cart abandonment", body: "Filter to sessions that added to cart but never checked out — the highest-value recordings to study." },
  { tag: "Device", title: "Mobile vs desktop", body: "Isolate mobile sessions to find thumb-zone friction that desktop QA never reveals." },
  { tag: "Source", title: "Traffic channel", body: "Watch how visitors from a specific campaign or referrer behave, so you can fix the experience that ad spend lands on." },
];

const faqs = [
  {
    q: "What is Shopify visitor session recording?",
    a: "Session recording captures a real visitor's interaction with your store — movement, clicks, taps, scrolling, and navigation — and lets you replay it like a video. It's the fastest way to understand the why behind your conversion numbers, because you watch the experience exactly as the shopper had it.",
  },
  {
    q: "Is DynoWeb's session replay privacy-compliant?",
    a: "Yes. It respects Shopify's Customer Privacy API and consent state and masks sensitive form inputs by default. It reconstructs behavior, not private keystrokes — designed for GDPR and CCPA compliance.",
  },
  {
    q: "How is the replay feature different from the session replay pillar?",
    a: "Same capability, different depth. This page covers the feature itself — recording, filtering, and how replays connect to fixes. The broader guide at /shopify-session-replay explains how to use session replay as part of a complete CRO workflow.",
  },
  {
    q: "Will recording sessions slow my store down?",
    a: "No. The DynoWeb tracker is under 40 KB and loads asynchronously, so recording adds negligible overhead and your Core Web Vitals are unaffected.",
  },
];

export default function SessionReplayFeaturePage() {
  return (
    <MarketingShell
      jsonLd={[
        faqJsonLd(faqs),
        breadcrumbJsonLd([
          { name: "Home", path: "" },
          { name: "Features", path: "/#features" },
          { name: "Session Replay", path: "/features/session-replay" },
        ]),
      ]}
    >
      <Hero
        eyebrow="Feature — Shopify visitor session recording"
        title="Replay Every Visitor Session on Your Shopify Store"
        lead="Record and replay every visitor session on your Shopify store. Filter by rage clicks, cart abandonment, or device type. Privacy-first, GDPR-safe, and connected to DynoWeb's AI fix suggestions."
        primaryCta={{ label: "Install free", href: "https://apps.shopify.com/dynoweb" }}
        secondaryCta={{ label: "Read the replay guide", href: "/shopify-session-replay" }}
      />

      <Section className="pb-16">
        <SectionHeading
          eyebrow="Smart filters"
          title="Find the sessions that matter in seconds"
          subtitle="You won't watch thousands of recordings. DynoWeb's filters surface the handful that reveal real friction."
        />
        <FeatureGrid columns={2} items={filters} />
      </Section>

      <FAQ title="Session replay feature — frequently asked" items={faqs} />

      <RelatedLinks
        links={[
          { label: "Session Replay Guide", href: "/shopify-session-replay", description: "Watch every customer visit." },
          { label: "Heatmaps Feature", href: "/features/heatmaps", description: "Visual click & scroll data." },
          { label: "Cart Overview", href: "/features/cart-overview", description: "Find why customers abandon." },
          { label: "Rage Clicks", href: "/blog/shopify-rage-clicks", description: "What they are & how to fix them." },
          { label: "Mobile Optimization", href: "/use-cases/shopify-mobile-optimization", description: "Fix fat-finger taps & poor UX." },
          { label: "DynoWeb vs Lucky Orange", href: "/vs/lucky-orange", description: "A focused fix pipeline." },
        ]}
      />

      <CTA
        title="Watch real sessions. Fix real friction."
        body="Record and replay every visitor session, filter to the ones that reveal friction, and let DynoWeb turn what you see into a prioritised fix."
        primaryLabel="Install free"
        secondary={{ label: "See pricing", href: "/pricing" }}
      />
    </MarketingShell>
  );
}
