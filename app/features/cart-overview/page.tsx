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
  title: "Cart Overview — Find Why Shopify Customers Abandon Carts",
  description:
    "DynoWeb's cart overview tracks every add-to-cart, hesitation, and exit — then tells you exactly what to fix to recover lost revenue.",
  alternates: { canonical: "https://www.dynoweb.app/features/cart-overview" },
  openGraph: {
    title: "Cart Overview — Find Why Shopify Customers Abandon Carts",
    description:
      "Shopify cart abandonment analytics: track add-to-cart, hesitation, and exit, then get dev-ready fixes that recover lost revenue.",
    url: "https://www.dynoweb.app/features/cart-overview",
    siteName: "DynoWeb",
    type: "article",
  },
};

const tracks = [
  { tag: "Entry", title: "Add-to-cart events", body: "Every add-to-cart is captured with the product, variant, and the session context around it — so you see what intent looks like before it leaks." },
  { tag: "Hesitation", title: "Cart dwell & edits", body: "Spot the moments shoppers linger, change quantities, remove items, or open and re-open the cart — the tells of a wavering purchase." },
  { tag: "Exit", title: "Drop-off points", body: "Pinpoint exactly where the cart-to-checkout funnel breaks: the cart drawer, the cart page, or the first checkout step." },
  { tag: "Recovery", title: "Fix recommendations", body: "Each leak comes with a prioritised fix — clearer CTAs, trust signals, shipping transparency — ready to ship." },
];

const faqs = [
  {
    q: "What is Shopify cart abandonment analytics?",
    a: "Cart abandonment analytics tracks what happens between a shopper adding an item to their cart and either completing or abandoning the purchase. DynoWeb's cart overview captures add-to-cart events, hesitation signals, and the exact exit points, then connects them to behavioral data and fixes so you can recover the revenue that's leaking.",
  },
  {
    q: "Why do customers abandon carts on Shopify?",
    a: "The most common reasons are unexpected shipping costs, a confusing or long checkout, forced account creation, missing trust signals, and mobile friction. DynoWeb's cart overview helps you see which of these apply to your store specifically — by showing where in the cart and checkout flow your shoppers actually drop off.",
  },
  {
    q: "Can DynoWeb help me recover abandoned carts?",
    a: "DynoWeb focuses on the root cause — finding and fixing the friction that makes shoppers abandon in the first place. Combined with SmartNudge (its behavioral exit-intent system), it can also surface the right message at the moment a shopper is about to leave, before the cart is lost.",
  },
  {
    q: "Does cart overview connect to revenue?",
    a: "Yes. Cart overview works alongside DynoWeb's revenue attribution, which uses Shopify's order webhooks to tie recovered conversions back to the fixes you shipped — so you can measure the revenue impact of reducing abandonment.",
  },
];

export default function CartOverviewPage() {
  return (
    <MarketingShell
      jsonLd={[
        faqJsonLd(faqs),
        breadcrumbJsonLd([
          { name: "Home", path: "" },
          { name: "Features", path: "/#features" },
          { name: "Cart Overview", path: "/features/cart-overview" },
        ]),
      ]}
    >
      <Hero
        eyebrow="Feature — Shopify cart abandonment analytics"
        title="Stop Losing Sales at Checkout — Cart Analytics for Shopify"
        lead="DynoWeb's cart overview tracks every add-to-cart, hesitation, and exit — then tells you exactly what to fix to recover lost revenue. See the moment intent breaks, and close the gap."
        primaryCta={{ label: "Start free trial", href: "https://apps.shopify.com/dynoweb" }}
        secondaryCta={{ label: "Reduce cart abandonment", href: "/use-cases/reduce-cart-abandonment" }}
      />

      <Section className="pb-16">
        <SectionHeading
          eyebrow="What it tracks"
          title="The full add-to-cart-to-checkout funnel"
          subtitle="Cart overview captures the steps standard analytics summarises away — where exactly does intent turn into an exit?"
        />
        <FeatureGrid columns={2} items={tracks} />
      </Section>

      <FAQ title="Cart abandonment — frequently asked" items={faqs} />

      <RelatedLinks
        links={[
          { label: "Reduce Cart Abandonment", href: "/use-cases/reduce-cart-abandonment", description: "Find & fix what makes shoppers leave." },
          { label: "Checkout Optimization", href: "/blog/shopify-checkout-optimization", description: "10 fixes that recover revenue." },
          { label: "Session Replay", href: "/features/session-replay", description: "Watch the abandoning sessions." },
          { label: "Revenue Attribution", href: "/features/revenue-attribution", description: "Measure recovered revenue." },
          { label: "Rage Clicks", href: "/blog/shopify-rage-clicks", description: "Spot friction at checkout." },
          { label: "Shopify CRO Guide", href: "/shopify-cro", description: "The complete optimization loop." },
        ]}
      />

      <CTA
        title="Recover the revenue leaking from your cart"
        body="DynoWeb shows you every add-to-cart, every hesitation, and every exit — then hands you the fix to recover what's being lost at checkout."
        primaryLabel="Start free trial"
        secondary={{ label: "See pricing", href: "/pricing" }}
      />
    </MarketingShell>
  );
}
