import type { Metadata } from "next";
import { FileText, Image as ImageIcon, Barcode, Bot } from "lucide-react";

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
  title: "SEO Autopilot — Fix Shopify SEO in One Click",
  description:
    "Scans products, collections, pages, and articles for weak titles, thin meta descriptions, missing alt text, and missing barcodes. AI writes the fixes; apply them in one click through Shopify's official Admin API — fully reversible.",
  alternates: { canonical: "https://www.dynoweb.app/features/seo-autopilot" },
  openGraph: {
    title: "SEO Autopilot — Fix Shopify SEO in One Click",
    description:
      "Shopify SEO on autopilot: scan for weak titles, thin meta descriptions, missing alt text and barcodes; AI writes the fix; apply through Shopify's Admin API — reversible, with GEO / AI-search readiness built in.",
    url: "https://www.dynoweb.app/features/seo-autopilot",
    siteName: "DynoWeb",
    type: "article",
  },
};

const scans = [
  { icon: FileText, tag: "Titles & meta", title: "Weak titles and thin descriptions", body: "Flags SEO titles that are too short, too long, or missing, and meta descriptions that won't earn a click — across products, collections, pages, and articles." },
  { icon: ImageIcon, tag: "Accessibility & SEO", title: "Missing image alt text", body: "Finds images shipping without alt text — a miss for both accessibility and image search — so every product photo can be described properly." },
  { icon: Barcode, tag: "Product data", title: "Missing barcodes", body: "Surfaces variants missing barcodes, the kind of structured product data that feeds Shopify's own surfaces and shopping channels." },
  { icon: Bot, tag: "AI-search", title: "GEO / AI-search readiness", body: "Checks whether your store is set up to be cited by AI answer engines — the growing share of discovery that doesn't happen on a classic results page." },
];

const faqs = [
  {
    q: "What does SEO Autopilot scan?",
    a: "It scans your products, collections, pages, and articles for weak or missing SEO titles, thin meta descriptions, missing image alt text, and missing barcodes. Each issue it finds comes with an AI-written fix you can review before applying.",
  },
  {
    q: "How are fixes applied — does it touch my theme files?",
    a: "No. Fixes are applied in one click through Shopify's official Admin API, so nothing is pasted into your theme code. Because the changes go through Shopify's own data model, they're clean and fully reversible.",
  },
  {
    q: "What is GEO / AI-search readiness?",
    a: "GEO (Generative Engine Optimization) is about being cited by AI answer engines, not just ranking on a classic search results page. SEO Autopilot checks whether your store's content is set up to be found and quoted by those engines, as AI-driven discovery grows.",
  },
  {
    q: "Will this guarantee I rank higher?",
    a: "No — and any tool that promises that isn't being honest. SEO Autopilot improves the inputs search and AI engines use: clean titles, useful meta descriptions, described images, complete product data. Better inputs help your chances, but rankings are decided by the engines, not by us.",
  },
];

export default function SeoAutopilotPage() {
  return (
    <MarketingShell
      jsonLd={[
        faqJsonLd(faqs),
        breadcrumbJsonLd([
          { name: "Home", path: "" },
          { name: "Features", path: "/#features" },
          { name: "SEO Autopilot", path: "/features/seo-autopilot" },
        ]),
      ]}
    >
      <Hero
        eyebrow="Feature — Shopify SEO on autopilot"
        title="Fix Your Shopify SEO in One Click"
        lead="SEO Autopilot scans your products, collections, pages, and articles for weak titles, thin meta descriptions, missing image alt text, and missing barcodes. AI writes the fix; you apply it in one click through Shopify's official Admin API — fully reversible."
        primaryCta={{ label: "Install free", href: "https://apps.shopify.com/dynoweb", external: true }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
        highlights={["Products, collections, pages, articles", "AI-written fixes", "One-click via Admin API", "Fully reversible"]}
        image="/SEOAutopilot.png"
        imageAlt="DynoWeb SEO Autopilot scan results for a Shopify store"
        imageLabel="SEO Autopilot"
      />

      <Section className="pb-12">
        <SectionHeading
          eyebrow="What it scans"
          title="The SEO gaps hiding across your catalog"
          subtitle="Autopilot checks every product, collection, page, and article for the issues that quietly cost you discovery."
        />
        <FeatureGrid columns={2} items={scans} />
      </Section>

      <FeatureRow
        eyebrow="AI writes it, you approve it"
        title="AI-written fixes, applied through Shopify's Admin API"
        body={
          <p>
            For every issue it finds, SEO Autopilot drafts the fix — a sharper title, a meta description worth clicking,
            alt text that describes the image. You review, then apply in one click through Shopify&rsquo;s official Admin
            API. No theme-file edits, no pasted snippets, and every change is reversible.
          </p>
        }
        bullets={[
          "AI drafts the title, meta description, or alt text for you",
          "Applied via Shopify's official Admin API — no theme edits",
          "Fully reversible, because changes go through Shopify's data model",
        ]}
        image="/SEOAutopilot-fix.png"
        imageAlt="DynoWeb SEO Autopilot applying an AI-written fix through the Shopify Admin API"
        imageLabel="One-click fix"
      />

      <FeatureRow
        reverse
        eyebrow="GEO / AI-search"
        title="Ready to be cited by AI answer engines"
        body={
          <p>
            Discovery is shifting from results pages to AI answers. SEO Autopilot includes GEO / AI-search readiness —
            checking whether your store is set up to be found and quoted by answer engines — so you&rsquo;re not optimizing
            only for the search of the past.
          </p>
        }
        bullets={[
          "Checks readiness for AI answer engines, not just classic search",
          "Improves the content those engines read and cite",
          "Honest caveat: it improves the inputs, it doesn't guarantee rankings",
        ]}
        image="/GEO-findings.png"
        imageAlt="DynoWeb GEO and AI-search readiness findings for a Shopify store"
        imageLabel="GEO / AI-search"
      />

      <FAQ title="SEO Autopilot — frequently asked" items={faqs} />

      <RelatedLinks
        links={[
          { label: "DynoAgent", href: "/features/dynoagent", description: "Ask it to rewrite SEO in bulk." },
          { label: "Impact", href: "/features/impact", description: "Organic-visitor lift, measured." },
          { label: "AI Fix Suggestions", href: "/features/ai-suggestions", description: "Ranked, dev-ready fixes." },
          { label: "Brand DNA", href: "/features/brand-dna", description: "On-brand voice for AI copy." },
          { label: "Shopify Analytics", href: "/shopify-analytics", description: "Where your visitors come from." },
          { label: "Shopify CRO Guide", href: "/shopify-cro", description: "The complete optimization loop." },
        ]}
      />

      <CTA
        title="Clean SEO across your whole catalog, in clicks"
        body="Let AI find the weak titles, thin descriptions, missing alt text, and missing barcodes — then apply the fixes through Shopify's Admin API, reversibly, without touching a theme file."
        primaryLabel="Install free"
        secondary={{ label: "See pricing", href: "/pricing" }}
      />
    </MarketingShell>
  );
}
