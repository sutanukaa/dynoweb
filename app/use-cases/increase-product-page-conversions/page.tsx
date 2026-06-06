import type { Metadata } from "next";
import { Image as ImageIcon, MousePointerClick, Star, Smartphone } from "lucide-react";

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
  title: "Increase Shopify Product Page Conversions — DynoWeb Guide",
  description:
    "Find out why visitors leave your product pages without buying — wrong image order, weak CTAs, poor mobile UX — and get exact fixes to boost conversions.",
  alternates: { canonical: "https://www.dynoweb.app/use-cases/increase-product-page-conversions" },
  openGraph: {
    title: "Increase Shopify Product Page Conversions — DynoWeb Guide",
    description:
      "Increase Shopify product page conversions with behavioral data. See why shoppers don't buy and get dev-ready fixes for your PDP.",
    url: "https://www.dynoweb.app/use-cases/increase-product-page-conversions",
    siteName: "DynoWeb",
    type: "article",
  },
};

const leaks = [
  { icon: ImageIcon, tag: "Imagery", title: "Wrong image order", body: "Heatmaps show shoppers swiping past your lead image looking for a detail that should have been first. Re-order to lead with what sells." },
  { icon: MousePointerClick, tag: "CTA", title: "Buried add-to-cart", body: "Scroll maps reveal the add-to-cart button sits below where most visitors stop. Move it up and make the treatment unmistakable." },
  { icon: Star, tag: "Proof", title: "Reviews never seen", body: "Your strongest social proof is below the fold for most visitors. DynoWeb shows you exactly how far shoppers actually scroll." },
  { icon: Smartphone, tag: "Mobile", title: "Variant-picker friction", body: "Mobile session replays expose confusing size and color selectors that stall the purchase decision on the smallest screens." },
];

const playbook = [
  "Pull the click and scroll heatmaps for your top product pages to see where attention concentrates and where it drops.",
  "Watch replays of high-intent sessions that didn't convert — the moment of hesitation usually repeats.",
  "Lead the gallery with the image shoppers hunt for; raise the variant picker and add-to-cart above the fold.",
  "Surface reviews and key proof earlier, especially on mobile where the fold is shorter.",
  "Preview each change on a draft theme, ship it, and let revenue attribution confirm the lift.",
];

const faqs = [
  {
    q: "Why are my Shopify product pages not converting?",
    a: "Usually it's not one big problem but a stack of small ones: the lead image isn't the one shoppers want, the add-to-cart button sits too low, reviews are buried below the fold, or the mobile variant picker is confusing. Behavioral data — heatmaps, scroll depth, and replays — shows you which of these apply to your specific pages.",
  },
  {
    q: "How do I optimize a Shopify product page?",
    a: "Start with evidence, not opinion. Use heatmaps to see where attention goes, scroll maps to see what gets seen, and replays to catch hesitation. Then prioritise the highest-impact fix — often raising the CTA, re-ordering images, or surfacing proof earlier — and measure the result with revenue attribution.",
  },
  {
    q: "Does DynoWeb tell me exactly what to change on a PDP?",
    a: "Yes. DynoWeb's AI suggestions are specific to your pages and your theme. Each one includes the evidence behind it, a theme-editor walkthrough, and a code diff with file path and projected lift — so the change is ready to ship, not just a vague tip.",
  },
];

export default function IncreaseProductPageConversionsPage() {
  return (
    <MarketingShell
      jsonLd={[
        faqJsonLd(faqs),
        breadcrumbJsonLd([
          { name: "Home", path: "" },
          { name: "Use Cases", path: "/use-cases" },
          { name: "Increase Product Page Conversions", path: "/use-cases/increase-product-page-conversions" },
        ]),
      ]}
    >
      <Hero
        eyebrow="Use case — increase Shopify product page conversions"
        title="Turn More Product Page Visitors Into Buyers"
        lead="Find out why visitors leave your product pages without buying — wrong image order, weak CTAs, poor mobile UX — and get exact fixes to boost conversions. Optimize your highest-intent pages with evidence, not guesswork."
        primaryCta={{ label: "Install free", href: "https://apps.shopify.com/dynoweb" }}
        secondaryCta={{ label: "See how it works", href: "/use-cases" }}
        highlights={["Click & scroll heatmaps", "Hesitation replays", "PDP-specific AI fixes", "Draft-theme preview"]}
        image="/clickHeatmap.png"
        imageAlt="DynoWeb click heatmap on a Shopify product page"
        imageLabel="Product page heatmap"
      />

      <Section className="pb-12">
        <SectionHeading
          eyebrow="Where PDPs leak"
          title="The 4 most common product page conversion killers"
          subtitle="High-intent traffic lands on your product pages. These are the friction points that send it away empty-handed."
        />
        <FeatureGrid columns={2} items={leaks} />
      </Section>

      <FeatureRow
        eyebrow="What gets seen"
        title="See whether your CTA and proof are even visible"
        body={
          <p>
            The scroll map shows exactly how far shoppers read your product page. If most stop before the add-to-cart button
            or the reviews, those decisive elements are invisible to the majority — and the fix is simply to raise them above
            the cliff.
          </p>
        }
        bullets={[
          "Find the depth where most visitors stop",
          "Move the variant picker, CTA, and proof above it",
          "Check the shorter mobile fold separately",
        ]}
        image="/scrollHeatmap.png"
        imageAlt="DynoWeb scroll heatmap on a Shopify product page"
        imageLabel="Scroll heatmap"
      />

      <FeatureRow
        reverse
        eyebrow="The exact fix"
        title="Get a PDP-specific suggestion, ready to ship"
        body={
          <p>
            DynoWeb turns each product-page friction point into a concrete suggestion — backed by the behavioral evidence,
            with a theme-editor walkthrough and a code diff. For example: &ldquo;Add swipe navigation to the product gallery&rdquo;,
            detected from hundreds of real swipe gestures.
          </p>
        }
        bullets={[
          "Evidence: the exact gestures and events behind it",
          "Expected impact and difficulty, scored",
          "Theme-editor steps and a copy-ready code diff",
        ]}
        image="/suggestionCard.png"
        imageAlt="DynoWeb product page suggestion with evidence and an implementation guide"
        imageLabel="PDP suggestion"
      />

      <Section className="pb-16">
        <SectionHeading eyebrow="The playbook" title="A data-backed PDP optimization workflow" />
        <Card>
          <CheckList items={playbook} />
        </Card>
      </Section>

      <FAQ title="Product page conversions — frequently asked" items={faqs} />

      <RelatedLinks
        links={[
          { label: "Product Page Optimization", href: "/blog/shopify-product-page-optimization", description: "A data-driven playbook." },
          { label: "Heatmaps", href: "/shopify-heatmaps", description: "See where attention goes." },
          { label: "Session Replay", href: "/shopify-session-replay", description: "Watch hesitation happen." },
          { label: "A/B Testing Guide", href: "/blog/shopify-ab-testing-guide", description: "Test PDP changes before you ship." },
          { label: "Mobile Optimization", href: "/use-cases/shopify-mobile-optimization", description: "Fix mobile PDP friction." },
          { label: "Shopify CRO Guide", href: "/shopify-cro", description: "The complete optimization loop." },
        ]}
      />

      <CTA
        title="Turn product page traffic into orders"
        body="DynoWeb shows you exactly why shoppers leave your product pages — and hands you the fix. Install free and optimize your best-selling PDP this week."
        primaryLabel="Install free"
        secondary={{ label: "See pricing", href: "/pricing" }}
      />
    </MarketingShell>
  );
}
