import type { Metadata } from "next";
import { Play, Filter, Route, ShieldCheck } from "lucide-react";

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
  title: "Shopify Session Replay — The CRO Tool for Watching Real Customer Visits",
  description:
    "Replay every customer session on your Shopify store. Spot friction, dead clicks, and drop-off points in real time — one of the best CRO tools for identifying user dissatisfaction and abandonment. Native Shopify app, no code needed.",
  alternates: { canonical: "https://www.dynoweb.app/shopify-session-replay" },
  openGraph: {
    title: "Shopify Session Replay — The CRO Tool for Watching Real Customer Visits",
    description:
      "DynoWeb session replay for Shopify: watch real customer sessions, identify conversion barriers, and turn friction into fixes.",
    url: "https://www.dynoweb.app/shopify-session-replay",
    siteName: "DynoWeb",
    type: "article",
  },
};

const whatYouSee = [
  { icon: Play, tag: "Mouse & touch", title: "Every movement", body: "Cursor paths on desktop and thumb gestures on mobile — see exactly how a real shopper navigates your store." },
  { icon: ShieldCheck, tag: "Friction", title: "Rage & dead clicks", body: "Sessions are tagged when a visitor rapidly clicks a stuck element or taps something that isn't actually clickable." },
  { icon: Route, tag: "Journey", title: "Page-to-page flow", body: "Follow the full path from landing page to exit, with the cart and checkout steps highlighted." },
  { icon: Filter, tag: "Context", title: "Device & source", body: "Filter replays by device, traffic source, or behavior so you watch the sessions that matter, not random noise." },
];

const useReplay = [
  "Confirm a heatmap hypothesis — watch the exact sessions where shoppers struggled with the element your heatmap flagged.",
  "Diagnose cart abandonment by replaying sessions that added to cart but never completed checkout.",
  "Find mobile-only friction that desktop testing never surfaces — small tap targets, sticky bars, broken drawers.",
  "Build empathy across the team: a 30-second replay settles more design debates than a week of opinions.",
  "Spot broken states — out-of-stock variants, slow-loading images, validation errors — as your customers actually experience them.",
];

const faqs = [
  {
    q: "What are session replays?",
    a: "Session replays are recordings of real-world visitor interactions that assist retailers in understanding consumer behavior and identifying conversion problems.",
  },
  {
    q: "Is session recording on Shopify GDPR compliant?",
    a: "DynoWeb's session replay is privacy-first. It respects Shopify's Customer Privacy API and consent state, and it masks sensitive form input (like payment and personal fields) by default. Recordings reconstruct behavior, not keystrokes in private fields — designed for GDPR and CCPA compliance.",
  },
  {
    q: "Does session replay slow down my store?",
    a: "No. DynoWeb's tracker is under 40 KB and loads asynchronously. Recording happens with minimal client overhead, so your page speed and Core Web Vitals stay intact.",
  },
  {
    q: "How do I find the useful sessions among thousands?",
    a: "You don't watch everything. DynoWeb lets you filter by rage clicks, cart abandonment, device type, traffic source, and more — so you jump straight to the sessions that reveal friction. It also surfaces patterns automatically and links replays to its AI fix suggestions.",
  },
];

export default function ShopifySessionReplayPage() {
  return (
    <MarketingShell
      jsonLd={[
        faqJsonLd(faqs),
        breadcrumbJsonLd([
          { name: "Home", path: "" },
          { name: "Shopify Session Replay", path: "/shopify-session-replay" },
        ]),
      ]}
    >
      <Hero
        eyebrow="Pillar guide — Shopify session replay"
        title="Watch Real Customer Sessions on Your Shopify Store"
        lead="Replay every customer session on your Shopify store. Spot friction, dead clicks, and drop-off points in real time. Native Shopify app, no code needed — and every replay connects to a prioritised fix."
        primaryCta={{ label: "Install free", href: "https://apps.shopify.com/dynoweb" }}
        secondaryCta={{ label: "See the replay feature", href: "/features/session-replay" }}
        highlights={["Privacy-first & GDPR-safe", "Smart behavior filters", "Mobile + desktop", "Sub-40 KB tracker"]}
        image="/sessionReplay.png"
        imageAlt="DynoWeb session replay player showing a recorded Shopify visit"
        imageLabel="Session replay"
      />

      <Section className="pb-12">
        <SectionHeading
          eyebrow="What you'll see"
          title="Every interaction, replayed"
          subtitle="Session replay turns abstract drop-off numbers into something you can actually watch and act on."
        />
        <FeatureGrid columns={2} items={whatYouSee} />
      </Section>

      <Section className="pb-12">
        <SectionHeading
          eyebrow="Why it matters for CRO"
          title="Why session replays matter"
          subtitle="Stop guessing why shoppers drop off — watch the real behavior behind every abandoned cart."
        />
        <Card>
          <p className="text-zinc-300">
            You can observe actual customer journeys through session replays with mouse movements, scrolling behavior,
            cart interactions, checkout attempts, rage clicks, and exit behavior.
          </p>
          <p className="mt-4 text-zinc-300">
            Merchants can precisely identify conversion barriers by observing real customer struggles rather than relying
            on conjecture. One of the best CRO tools for identifying user dissatisfaction and abandonment is session
            replay technology.
          </p>
        </Card>
      </Section>

      <FeatureRow
        eyebrow="Find the session"
        title="Scan and filter thousands of sessions fast"
        body={
          <p>
            Every recorded session lands in a sortable table with its duration, device, signals, and status. Sort by
            friction or filter by behavior so the recordings worth watching rise to the top — you never have to wade through
            noise.
          </p>
        }
        bullets={[
          "Sort by friction score, duration, or recency",
          "Status and device at a glance for every session",
          "Open any recording in one click",
        ]}
        image="/replayTable.png"
        imageAlt="DynoWeb session replay table listing recorded Shopify sessions"
        imageLabel="Replay sessions"
      />

      <FeatureRow
        reverse
        eyebrow="Follow the path"
        title="See the full journey behind every drop-off"
        body={
          <p>
            Each replay sits inside the visitor&rsquo;s complete page-to-page flow. Spot exactly where the journey breaks,
            where shoppers loop back in confusion, and which step precedes the exit.
          </p>
        }
        bullets={[
          "Step-by-step flow from landing to exit",
          "Pinpoint the action right before abandonment",
          "Jump from the flow into the full replay",
        ]}
        image="/sessionFlow.png"
        imageAlt="DynoWeb session flow showing the page-to-page journey of a visitor"
        imageLabel="Session flow"
      />

      <Section className="pb-16">
        <SectionHeading eyebrow="Put it to work" title="5 ways merchants use session replay" />
        <Card>
          <CheckList items={useReplay} />
        </Card>
      </Section>

      <FAQ title="Session replay — frequently asked" items={faqs} />

      <RelatedLinks
        title="Explore the toolkit"
        links={[
          { label: "Session Replay Feature", href: "/features/session-replay", description: "Record and filter every visit." },
          { label: "Shopify Heatmaps", href: "/shopify-heatmaps", description: "See where customers click & scroll." },
          { label: "Cart Overview", href: "/features/cart-overview", description: "Find why customers abandon carts." },
          { label: "Rage Clicks", href: "/blog/shopify-rage-clicks", description: "What they are & how to fix them." },
          { label: "DynoWeb vs Hotjar", href: "/vs/hotjar", description: "Observation vs action." },
          { label: "Shopify CRO Guide", href: "/shopify-cro", description: "The complete optimization loop." },
        ]}
      />

      <CTA
        title="Replay every visitor session on your Shopify store"
        body="Record and replay every visitor session. Filter by rage clicks, cart abandonment, or device type. Privacy-first, GDPR-safe, and native to Shopify."
        primaryLabel="Install free"
        secondary={{ label: "See pricing", href: "/pricing" }}
      />
    </MarketingShell>
  );
}
