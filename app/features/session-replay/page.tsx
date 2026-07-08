import type { Metadata } from "next";
import { Play, Filter, Route, Smartphone, ShieldCheck, Zap } from "lucide-react";

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
  { icon: Zap, tag: "Behavior", title: "Rage & dead clicks", body: "Jump straight to the sessions where a shopper repeatedly clicked a stuck element or tapped something that wasn't clickable." },
  { icon: Filter, tag: "Intent", title: "Cart abandonment", body: "Filter to sessions that added to cart but never checked out — the highest-value recordings to study." },
  { icon: Smartphone, tag: "Device", title: "Mobile vs desktop", body: "Isolate mobile sessions to find thumb-zone friction that desktop QA never reveals." },
  { icon: Route, tag: "Source", title: "Traffic channel", body: "Watch how visitors from a specific campaign or referrer behave, so you can fix the experience that ad spend lands on." },
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
        highlights={["Smart behavior filters", "Privacy-first & GDPR-safe", "Mobile + desktop", "Linked to AI fixes"]}
        image="/Replays.png"
        imageAlt="DynoWeb session replay dashboard for a Shopify store"
        imageLabel="Session Replays"
      />

      <FeatureRow
        eyebrow="Watch the session"
        title="Every movement, replayed like a video"
        body={
          <p>
            See exactly how a real shopper navigates your store — cursor paths on desktop, thumb gestures on mobile,
            scrolling, clicks, and page-to-page flow. A 30-second replay settles more design debates than a week of
            opinions.
          </p>
        }
        bullets={[
          "Mouse and touch movement reconstructed faithfully",
          "Cart and checkout steps highlighted in the timeline",
          "Sensitive inputs masked by default for privacy",
        ]}
        image="/sessionReplay.png"
        imageAlt="DynoWeb session replay player showing a recorded Shopify visit"
        imageLabel="Replay player"
      />

      <FeatureRow
        reverse
        eyebrow="Smart filters"
        title="Find the sessions that matter in seconds"
        body={
          <p>
            You won&rsquo;t watch thousands of recordings. Filter by rage clicks, cart abandonment, device, or traffic
            source and jump straight to the handful of sessions that reveal real friction.
          </p>
        }
        bullets={[
          "Behavior filters: rage clicks, dead clicks, abandonment",
          "Filter by shopper action and order value to surface high-value sessions",
          "Sort by duration, pages, or friction signals",
        ]}
        image="/sessionexplorerTable.png"
        imageAlt="DynoWeb session explorer table with filters for finding key sessions"
        imageLabel="Session explorer"
      />

      <FeatureRow
        eyebrow="Follow the path"
        title="See the full journey, not just one page"
        body={
          <p>
            Each replay sits inside the visitor&rsquo;s complete journey — landing page to exit. Spot where the flow breaks,
            where shoppers loop back in confusion, and exactly which step precedes a drop-off.
          </p>
        }
        bullets={[
          "Page-to-page flow for every session",
          "Identify the step before abandonment",
          "Ask the agent about any session you're watching, and jump to its heatmap and suggested fix",
        ]}
        image="/sessionFlow.png"
        imageAlt="DynoWeb session flow showing the page-to-page journey of a visitor"
        imageLabel="Session flow"
      />

      <Section className="pb-12">
        <SectionHeading eyebrow="Smart filters" title="Watch the right sessions, not all of them" />
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
