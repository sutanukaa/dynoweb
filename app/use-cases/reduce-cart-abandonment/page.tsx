import type { Metadata } from "next";
import { Receipt, ListChecks, ShieldCheck, Smartphone } from "lucide-react";

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
import { ChartCard, BarChart } from "@/app/components/seo/Charts";

export const metadata: Metadata = {
  title: "Reduce Shopify Cart Abandonment With Behavioral Analytics",
  description:
    "Discover exactly why shoppers abandon carts — rage clicks, confusing CTAs, slow checkout — and get dev-ready fixes that recover lost revenue fast.",
  alternates: { canonical: "https://www.dynoweb.app/use-cases/reduce-cart-abandonment" },
  openGraph: {
    title: "Reduce Shopify Cart Abandonment With Behavioral Analytics",
    description:
      "Reduce Shopify cart abandonment by finding the real friction — then fixing it. Behavioral analytics + dev-ready fixes from DynoWeb.",
    url: "https://www.dynoweb.app/use-cases/reduce-cart-abandonment",
    siteName: "DynoWeb",
    type: "article",
  },
};

const causes = [
  { icon: Receipt, tag: "Cost", title: "Surprise shipping & fees", body: "Unexpected costs at checkout are the single biggest abandonment driver. DynoWeb shows where shoppers bail once costs appear." },
  { icon: ListChecks, tag: "UX", title: "Confusing or long checkout", body: "Too many steps, unclear fields, or forced account creation. Session replays reveal the exact step that loses people." },
  { icon: ShieldCheck, tag: "Trust", title: "Missing reassurance", body: "No trust badges, unclear returns, or weak security signals. Heatmaps show shoppers hunting for reassurance that isn't there." },
  { icon: Smartphone, tag: "Mobile", title: "Mobile friction", body: "Tiny tap targets and sticky bars that block the CTA. Mobile session data surfaces what desktop QA misses." },
];

const workflow = [
  "DynoWeb's cart overview captures every add-to-cart, hesitation, and exit, so you see where intent leaks in the funnel.",
  "Session replays of abandoning carts show the exact moment and reason shoppers give up.",
  "The AI engine ranks the friction points by revenue impact and hands you a prioritised fix for each.",
  "SmartNudge can fire a targeted message — exit-intent offer, cart reminder — at the moment a shopper is about to leave.",
  "Revenue attribution confirms how much you recovered after each change ships.",
];

const faqs = [
  {
    q: "What is the average cart abandonment rate on Shopify?",
    a: "Cart abandonment commonly runs around 70% across ecommerce, though it varies by industry, price point, and device (mobile is usually higher). Rather than chasing the average, focus on your store's specific drop-off points — that's where the recoverable revenue is.",
  },
  {
    q: "How do I reduce cart abandonment on my Shopify store?",
    a: "Find the real cause before applying generic fixes. Use behavioral analytics to see where shoppers actually drop off — surprise costs, a confusing step, missing trust signals, or mobile friction — then fix the specific issue. DynoWeb's cart overview and session replays pinpoint the leak, and its AI suggestions hand you the fix.",
  },
  {
    q: "Can DynoWeb recover abandoned carts in real time?",
    a: "DynoWeb's SmartNudge watches for abandonment signals — rage clicks, long dwell with no action, cursor moving toward the browser chrome — and fires a targeted message at the right moment, before the cart is lost. It also helps you remove the root-cause friction so fewer carts are abandoned in the first place.",
  },
];

export default function ReduceCartAbandonmentPage() {
  return (
    <MarketingShell
      jsonLd={[
        faqJsonLd(faqs),
        breadcrumbJsonLd([
          { name: "Home", path: "" },
          { name: "Use Cases", path: "/use-cases" },
          { name: "Reduce Cart Abandonment", path: "/use-cases/reduce-cart-abandonment" },
        ]),
      ]}
    >
      <Hero
        eyebrow="Use case — reduce Shopify cart abandonment"
        title="Find and Fix Shopify Cart Abandonment With DynoWeb"
        lead="Discover exactly why shoppers abandon carts — rage clicks, confusing CTAs, slow checkout — and get dev-ready fixes that recover lost revenue fast. Stop guessing at the cause and fix the friction your shoppers actually hit."
        primaryCta={{ label: "Start free trial", href: "https://apps.shopify.com/dynoweb" }}
        secondaryCta={{ label: "See cart overview", href: "/features/cart-overview" }}
        highlights={["Add-to-cart to checkout funnel", "Exact drop-off points", "Real-time SmartNudge", "Recovery fixes"]}
        image="/CartOverview.png"
        imageAlt="DynoWeb cart overview dashboard showing cart and checkout analytics for Shopify"
        imageLabel="Cart Overview"
      />

      <Section className="pb-12">
        <SectionHeading
          eyebrow="The real causes"
          title="Why shoppers abandon — and how DynoWeb finds it"
          subtitle="Abandonment is rarely random. It clusters around a few specific friction points that behavioral data makes obvious."
        />
        <FeatureGrid columns={2} items={causes} />
      </Section>

      <Section className="pb-16">
        <ChartCard
          eyebrow="Why shoppers abandon"
          title="Top reasons for checkout abandonment"
          footnote="Directional, based on widely-cited ecommerce checkout research. DynoWeb shows you which of these apply to your store specifically by revealing where shoppers actually drop off."
        >
          <BarChart
            unit="%"
            data={[
              { label: "Extra costs too high", value: 48, display: "48%", highlight: true },
              { label: "Account required", value: 24, display: "24%" },
              { label: "Didn't trust site", value: 19, display: "19%" },
              { label: "Long/complex checkout", value: 18, display: "18%" },
              { label: "No total shown upfront", value: 17, display: "17%" },
            ]}
          />
        </ChartCard>
      </Section>

      <FeatureRow
        eyebrow="Down to the item"
        title="See which products get abandoned — and why"
        body={
          <p>
            DynoWeb breaks the cart down to the item level: which products are added then removed, where the view-to-cart and
            cart-to-checkout ratios fall off, and which sessions stalled. Patterns surface fast, so you know exactly which
            product or step to fix first.
          </p>
        }
        bullets={[
          "Per-item add, removal, and checkout behavior",
          "View → cart → checkout ratios for each product",
          "Connect every abandoned cart to its session replay",
        ]}
        image="/cartOverviewItems.png"
        imageAlt="DynoWeb cart overview item-level breakdown of abandoned carts"
        imageLabel="Cart items"
      />

      <FeatureRow
        reverse
        eyebrow="Recover in real time"
        title="Nudge hesitating shoppers before the cart is lost"
        body={
          <p>
            SmartNudge watches for abandonment signals and fires a targeted, condition-driven message at the right moment —
            an exit-intent offer, a cart reminder, or reassurance — so you recover shoppers while they&rsquo;re still on the
            page, not with a delayed email after they&rsquo;ve gone.
          </p>
        }
        bullets={[
          "Behavioral triggers, not just timed popups",
          "AI-generated copy matched to the visitor moment",
          "Frequency-capped automatically, no developer needed",
        ]}
        image="/SmartNudge.png"
        imageAlt="DynoWeb SmartNudge behavioral intervention dashboard"
        imageLabel="SmartNudge"
      />

      <Section className="pb-16">
        <SectionHeading eyebrow="The workflow" title="From abandoned cart to recovered revenue" />
        <Card>
          <CheckList items={workflow} />
        </Card>
      </Section>

      <FAQ title="Cart abandonment — frequently asked" items={faqs} />

      <RelatedLinks
        links={[
          { label: "Cart Overview Feature", href: "/features/cart-overview", description: "Track add-to-cart to checkout." },
          { label: "Checkout Optimization", href: "/blog/shopify-checkout-optimization", description: "10 fixes that recover revenue." },
          { label: "Session Replay", href: "/shopify-session-replay", description: "Watch abandoning sessions." },
          { label: "Mobile Optimization", href: "/use-cases/shopify-mobile-optimization", description: "Fix mobile checkout friction." },
          { label: "Rage Clicks", href: "/blog/shopify-rage-clicks", description: "Spot frustration at checkout." },
          { label: "Shopify CRO Guide", href: "/shopify-cro", description: "The complete optimization loop." },
        ]}
      />

      <CTA
        title="Recover the revenue your cart is leaking"
        body="DynoWeb shows you exactly why shoppers abandon — then hands you the fix. Install free and find your biggest checkout leak this week."
        primaryLabel="Start free trial"
        secondary={{ label: "See pricing", href: "/pricing" }}
      />
    </MarketingShell>
  );
}
