import type { Metadata } from "next";
import { Palette, Type, MessageSquare, Image as ImageIcon, Sparkles, Bot, Layers } from "lucide-react";

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
  title: "Brand DNA — Your Store's Brand, Extracted in ~30 Seconds",
  description:
    "Crawls representative pages of your storefront in about 30 seconds and extracts your color palette, fonts, brand personality and voice, imagery style, and logo — powering SmartNudge styling and giving the agent brand context. Every field editable.",
  alternates: { canonical: "https://www.dynoweb.app/features/brand-dna" },
  openGraph: {
    title: "Brand DNA — Your Store's Brand, Extracted in ~30 Seconds",
    description:
      "A brand profile pulled straight from your storefront: palette, fonts that actually load, voice with words to use and avoid, imagery style, and logo. Powers SmartNudge and the agent — multiple profiles, every field editable.",
    url: "https://www.dynoweb.app/features/brand-dna",
    siteName: "DynoWeb",
    type: "article",
  },
};

const extracts = [
  { icon: Palette, tag: "Color", title: "Color palette", body: "The colors your storefront actually uses, pulled from representative pages so styling matches what shoppers already see." },
  { icon: Type, tag: "Type", title: "Fonts that actually load", body: "Your typefaces, matched to fonts that genuinely load on the store — not a generic guess, so on-brand text renders the way your site does." },
  { icon: MessageSquare, tag: "Voice", title: "Brand personality & voice", body: "Tone, plus the words to use and the words to avoid — so AI-written copy sounds like your brand instead of a template." },
  { icon: ImageIcon, tag: "Visuals", title: "Imagery style & logo", body: "The look of your photography and your logo, captured so generated visuals and nudges sit naturally alongside your existing assets." },
];

const faqs = [
  {
    q: "What is Brand DNA?",
    a: "Brand DNA is a profile of your store's brand, extracted automatically. It crawls representative pages of your storefront in about 30 seconds and pulls out your color palette, fonts, brand personality and voice, imagery style, and logo — a reusable snapshot of what your brand looks and sounds like.",
  },
  {
    q: "How are the fonts and colors chosen?",
    a: "They're read from your actual storefront, not guessed. Colors come from representative pages, and fonts are matched to the typefaces that genuinely load on your store — so anything styled from the profile renders the way your real site does.",
  },
  {
    q: "What does Brand DNA power?",
    a: "Two things. It styles SmartNudge automatically, so every nudge comes out on-brand, and it gives the agent brand context, so AI-written copy and imagery match your voice and look. One profile, reused everywhere the brand needs to show up.",
  },
  {
    q: "Can I edit it, or have more than one profile?",
    a: "Both. You can keep multiple profiles per store — useful for sub-brands or seasonal looks — and every field is editable after extraction. The crawl gives you a strong starting point; you stay in control of the final profile.",
  },
];

export default function BrandDnaPage() {
  return (
    <MarketingShell
      jsonLd={[
        faqJsonLd(faqs),
        breadcrumbJsonLd([
          { name: "Home", path: "" },
          { name: "Features", path: "/#features" },
          { name: "Brand DNA", path: "/features/brand-dna" },
        ]),
      ]}
    >
      <Hero
        eyebrow="Feature — your store's brand, extracted"
        title="Your Brand, Captured in About 30 Seconds"
        lead="Brand DNA crawls representative pages of your storefront and extracts your color palette, fonts, brand personality and voice, imagery style, and logo — powering SmartNudge styling and giving the agent brand context. Every field editable after."
        primaryCta={{ label: "Install free", href: "https://apps.shopify.com/dynoweb", external: true }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
        highlights={["~30-second crawl", "Palette, fonts, voice, imagery, logo", "Powers SmartNudge & the agent", "Every field editable"]}
        image="/SmartNudge-brand.png"
        imageAlt="DynoWeb Brand DNA profile extracted from a Shopify storefront"
        imageLabel="Brand DNA"
      />

      <Section className="pb-12">
        <SectionHeading
          eyebrow="What it extracts"
          title="Everything that makes your store look and sound like you"
          subtitle="One ~30-second crawl of representative pages, turned into a profile the rest of DynoWeb can style from."
        />
        <FeatureGrid columns={2} items={extracts} />
      </Section>

      <FeatureRow
        eyebrow="Read from your real store"
        title="Pulled from the storefront, not guessed"
        body={
          <p>
            Brand DNA crawls representative pages of your storefront in about 30 seconds and reads what&rsquo;s actually
            there — the colors in use, the fonts that genuinely load, the tone of your copy, the style of your imagery, and
            your logo. Because it&rsquo;s read from the real site, anything styled from it looks native.
          </p>
        }
        bullets={[
          "Color palette from representative pages",
          "Fonts matched to the typefaces that actually load",
          "Brand voice with words to use and words to avoid",
        ]}
        image="/SmartNudge-brand.png"
        imageAlt="DynoWeb Brand DNA extracting palette, fonts, and voice from a storefront"
        imageLabel="Extracted profile"
      />

      <Section className="pb-16">
        <SectionHeading
          eyebrow="What it powers"
          title="One profile, reused everywhere the brand shows up"
          subtitle="Brand DNA isn't a report you admire — it's the styling engine behind the rest of DynoWeb."
        />
        <FeatureGrid
          columns={3}
          items={[
            { icon: Sparkles, title: "Auto-styles SmartNudge", body: "Every nudge is styled from the profile automatically, so campaigns come out on-brand without a designer touching them." },
            { icon: Bot, title: "Gives the agent context", body: "DynoAgent uses the profile as brand context, so AI-written copy and generated imagery match your voice and look." },
            { icon: Layers, title: "Multiple profiles, all editable", body: "Keep more than one profile per store for sub-brands or seasonal looks, and edit any field after extraction — you stay in control." },
          ]}
        />
      </Section>

      <FAQ title="Brand DNA — frequently asked" items={faqs} />

      <RelatedLinks
        links={[
          { label: "SmartNudge", href: "/features/smartnudge", description: "Nudges auto-styled from your Brand DNA." },
          { label: "DynoAgent", href: "/features/dynoagent", description: "On-brand copy and imagery." },
          { label: "SEO Autopilot", href: "/features/seo-autopilot", description: "Brand-voiced titles and descriptions." },
          { label: "Impact", href: "/features/impact", description: "What the campaigns earned." },
          { label: "Revenue Attribution", href: "/features/revenue-attribution", description: "Tie fixes to real orders." },
          { label: "Shopify CRO Guide", href: "/shopify-cro", description: "The complete optimization loop." },
        ]}
      />

      <CTA
        title="Capture your brand once, use it everywhere"
        body="Brand DNA reads your storefront in about 30 seconds and turns it into a reusable profile — styling SmartNudge and grounding the agent, with every field yours to edit."
        primaryLabel="Install free"
        secondary={{ label: "See pricing", href: "/pricing" }}
      />
    </MarketingShell>
  );
}
