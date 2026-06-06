import type { Metadata } from "next";

import {
  MarketingShell,
  Hero,
  Section,
  SectionHeading,
  RelatedLinks,
  CTA,
  breadcrumbJsonLd,
} from "@/app/components/seo/Marketing";

export const metadata: Metadata = {
  title: "DynoWeb Comparisons — How We Stack Up for Shopify CRO",
  description:
    "Compare DynoWeb against Hotjar, Microsoft Clarity, Lucky Orange, and Glew for Shopify. See which tool turns behavioral data into dev-ready fixes.",
  alternates: { canonical: "https://www.dynoweb.app/vs" },
  openGraph: {
    title: "DynoWeb Comparisons — How We Stack Up for Shopify CRO",
    description:
      "Side-by-side comparisons of DynoWeb vs Hotjar, Microsoft Clarity, Lucky Orange, and Glew for Shopify merchants.",
    url: "https://www.dynoweb.app/vs",
    siteName: "DynoWeb",
    type: "website",
  },
};

export default function VsIndexPage() {
  return (
    <MarketingShell
      jsonLd={breadcrumbJsonLd([
        { name: "Home", path: "" },
        { name: "Compare", path: "/vs" },
      ])}
    >
      <Hero
        eyebrow="Compare DynoWeb"
        title="How DynoWeb compares for Shopify CRO"
        lead="Most behavioral tools stop at showing you a heatmap or a recording. DynoWeb goes one step further — it turns those signals into AI-prioritised, dev-ready fixes built natively for Shopify. Pick a tool below to see the side-by-side breakdown."
        primaryCta={{ label: "Install DynoWeb free", href: "https://apps.shopify.com/dynoweb", external: true }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
      />

      <Section className="pb-4">
        <SectionHeading eyebrow="Head to head" title="Choose a comparison" />
      </Section>

      <RelatedLinks
        title="DynoWeb vs…"
        links={[
          { label: "DynoWeb vs Hotjar", href: "/vs/hotjar", description: "Better Shopify CRO at a lower cost — observation vs action." },
          { label: "DynoWeb vs Microsoft Clarity", href: "/vs/microsoft-clarity", description: "Beyond free heatmaps — Shopify-native events and AI fixes." },
          { label: "DynoWeb vs Lucky Orange", href: "/vs/lucky-orange", description: "A focused fix pipeline vs a bundled communication suite." },
          { label: "DynoWeb vs Glew", href: "/vs/glew", description: "Behavioral optimization vs business-intelligence reporting." },
        ]}
      />

      <CTA
        title="Stop guessing. See exactly what to fix."
        body="DynoWeb watches every tap, scroll, and rage-click in your Shopify store and hands your dev the exact fix — file, diff, and projected lift."
        secondary={{ label: "Back to DynoWeb home", href: "/" }}
      />
    </MarketingShell>
  );
}
