import type { Metadata } from "next";

import {
  MarketingShell,
  Hero,
  Section,
  SectionHeading,
  FeatureGrid,
  Card,
  CheckList,
  FAQ,
  CTA,
  RelatedLinks,
  faqJsonLd,
  breadcrumbJsonLd,
} from "@/app/components/seo/Marketing";

export const metadata: Metadata = {
  title: "Shopify Mobile Optimization — Fix Fat Finger Taps & Poor UX",
  description:
    "Track mobile gestures, fat finger taps, and scroll behavior on your Shopify store. Get AI-generated fixes optimized for mobile shoppers.",
  alternates: { canonical: "https://www.dynoweb.app/use-cases/shopify-mobile-optimization" },
  openGraph: {
    title: "Shopify Mobile Optimization — Fix Fat Finger Taps & Poor UX",
    description:
      "Shopify mobile conversion optimization: surface thumb-zone friction, fat-finger taps, and pinch-zooms, then fix them with dev-ready guidance.",
    url: "https://www.dynoweb.app/use-cases/shopify-mobile-optimization",
    siteName: "DynoWeb",
    type: "article",
  },
};

const signals = [
  { tag: "Tap targets", title: "Fat-finger taps", body: "Repeated taps on buttons that are too small or too close together. Mobile heatmaps make the mis-hits obvious." },
  { tag: "Legibility", title: "Pinch-zooming", body: "Shoppers zooming into product details means text and images aren't legible at mobile widths — a silent conversion killer." },
  { tag: "Thumb zone", title: "Dead & rage clicks", body: "Friction clustered around filters, drawers, and sticky elements in the thumb zone, where mobile shoppers actually reach." },
  { tag: "Viewport", title: "First-screen drop-off", body: "When a competing CTA or banner fills the first viewport, mobile visitors bounce before they ever see the product." },
];

const flow = [
  "Filter DynoWeb to mobile sessions only — desktop QA will never surface these issues.",
  "Read the mobile heatmaps for fat-finger taps and mis-hits around buttons, filters, and the cart drawer.",
  "Watch mobile replays to see pinch-zooms and thumb-zone struggles as real shoppers experience them.",
  "Apply the AI fix — larger tap targets, legible type, a cleaner first viewport — via theme editor or code diff.",
  "Compare mobile conversion before and after with revenue attribution.",
];

const faqs = [
  {
    q: "Why does my Shopify store convert worse on mobile than desktop?",
    a: "Mobile introduces friction that desktop doesn't: small tap targets, illegible text, thumb-zone mis-hits, sticky bars that cover the CTA, and short viewports that push key content down. Standard analytics shows the lower mobile conversion rate but not the cause. Behavioral data — mobile heatmaps and replays — reveals the specific issues.",
  },
  {
    q: "What is a fat-finger tap and why does it matter?",
    a: "A fat-finger tap is when a shopper taps the wrong element because targets are too small or too close together. It causes frustration, accidental navigation, and abandonment. DynoWeb surfaces these mis-hits on mobile heatmaps so you can resize and space tap targets correctly.",
  },
  {
    q: "How do I optimize my Shopify store for mobile shoppers?",
    a: "Diagnose with mobile-specific behavioral data, then fix the highest-impact issues: enlarge tap targets, make type legible without zooming, keep the add-to-cart in the thumb zone, and clear clutter from the first viewport. DynoWeb identifies these on your store and provides the exact fix for each.",
  },
];

export default function ShopifyMobileOptimizationPage() {
  return (
    <MarketingShell
      jsonLd={[
        faqJsonLd(faqs),
        breadcrumbJsonLd([
          { name: "Home", path: "" },
          { name: "Use Cases", path: "/use-cases" },
          { name: "Mobile Optimization", path: "/use-cases/shopify-mobile-optimization" },
        ]),
      ]}
    >
      <Hero
        eyebrow="Use case — Shopify mobile conversion optimization"
        title="Optimize Your Shopify Store for Mobile Shoppers"
        lead="Track mobile gestures, fat finger taps, and scroll behavior on your Shopify store. Get AI-generated fixes optimized for mobile shoppers — and close the gap between your desktop and mobile conversion rates."
        primaryCta={{ label: "Try free", href: "https://apps.shopify.com/dynoweb" }}
        secondaryCta={{ label: "See session replay", href: "/shopify-session-replay" }}
      />

      <Section className="pb-16">
        <SectionHeading
          eyebrow="Mobile-only signals"
          title="The friction desktop testing never reveals"
          subtitle="Mobile is often the majority of your traffic — and the majority of your lost revenue. These signals show why."
        />
        <FeatureGrid columns={2} items={signals} />
      </Section>

      <Section className="pb-16">
        <SectionHeading eyebrow="The workflow" title="Diagnose and fix mobile friction" />
        <Card>
          <CheckList items={flow} />
        </Card>
      </Section>

      <FAQ title="Mobile optimization — frequently asked" items={faqs} />

      <RelatedLinks
        links={[
          { label: "Session Replay", href: "/shopify-session-replay", description: "Watch real mobile sessions." },
          { label: "Heatmaps", href: "/shopify-heatmaps", description: "Mobile click & scroll maps." },
          { label: "Reduce Cart Abandonment", href: "/use-cases/reduce-cart-abandonment", description: "Fix mobile checkout friction." },
          { label: "Increase PDP Conversions", href: "/use-cases/increase-product-page-conversions", description: "Optimize mobile product pages." },
          { label: "Rage Clicks", href: "/blog/shopify-rage-clicks", description: "Spot thumb-zone frustration." },
          { label: "Shopify CRO Guide", href: "/shopify-cro", description: "The complete optimization loop." },
        ]}
      />

      <CTA
        title="Close the mobile conversion gap"
        body="DynoWeb surfaces the fat-finger taps, pinch-zooms, and thumb-zone friction hurting your mobile sales — then hands you the fix. Install free and start with your top mobile page."
        primaryLabel="Try free"
        secondary={{ label: "See pricing", href: "/pricing" }}
      />
    </MarketingShell>
  );
}
