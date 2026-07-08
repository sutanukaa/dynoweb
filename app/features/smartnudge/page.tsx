import type { Metadata } from "next";
import { Sparkles, Palette, Gift, Mail, FlaskConical, Repeat, LayoutTemplate } from "lucide-react";

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
  title: "SmartNudge — On-Brand Nudges That Ship the Fix",
  description:
    "16 nudge types and a 30+ template gallery, auto-styled to your store's Brand DNA. On-site and email delivery, AI copy and images, festival design library — all measured against a control group for net incremental revenue.",
  alternates: { canonical: "https://www.dynoweb.app/features/smartnudge" },
  openGraph: {
    title: "SmartNudge — On-Brand Nudges That Ship the Fix",
    description:
      "Popups, bars, spin-to-win, scratch cards, quizzes, exit-intent and more — auto-styled to your Brand DNA, delivered on-site and by email, and measured against a holdout for net incremental revenue.",
    url: "https://www.dynoweb.app/features/smartnudge",
    siteName: "DynoWeb",
    type: "article",
  },
};

const types = [
  { icon: LayoutTemplate, tag: "16 types", title: "The whole nudge toolkit", body: "Popups, bars, wheels / spin-to-win, scratch cards, quizzes, exit-intent, free-shipping bar, social proof, countdown, email capture, video, and more — 16 nudge types in all, launched from a 30+ template gallery." },
  { icon: Palette, tag: "Brand DNA", title: "Auto-styled to your store", body: "Brand DNA crawls the store in about 30 seconds and reads your palette, fonts, brand voice, and imagery — so every nudge comes out looking like it belongs on your storefront, not bolted on." },
  { icon: Gift, tag: "Seasonal", title: "Festival design library", body: "A seasonal library — Diwali, Christmas, BFCM, Halloween, and more — in multiple style tiers, so campaigns land dressed for the moment without a designer." },
  { icon: Mail, tag: "Delivery", title: "On-site and by email", body: "Fire nudges live on the storefront and follow up with design-matched coupon emails. AI writes the copy and generates images, with a built-in background remover." },
];

const faqs = [
  {
    q: "What kinds of nudges can SmartNudge deploy?",
    a: "16 nudge types: popups, bars, wheels / spin-to-win, scratch cards, quizzes, exit-intent, a free-shipping bar, social proof, countdown timers, email capture, video, and more. You can start from a gallery of 30+ templates, and every one is auto-styled to your brand.",
  },
  {
    q: "How does it match my brand automatically?",
    a: "SmartNudge is powered by Brand DNA. It crawls your store in about 30 seconds and extracts your color palette, fonts, brand voice, and imagery, then styles every nudge to match — so campaigns look native to your storefront instead of like a generic third-party widget.",
  },
  {
    q: "Can nudges go out by email too?",
    a: "Yes. SmartNudge delivers on-site and by email, including design-matched coupon emails that carry the same look as the on-site nudge. Copy is AI-written and images are AI-generated, with a background remover built in.",
  },
  {
    q: "How do you prove a nudge actually made money?",
    a: "Every campaign is measured against a control group — a default 10% holdout that doesn't see the nudge. Comparing the two gives you the true lift and the net incremental revenue, not just impressions and clicks. You can also A/B test variants against each other.",
  },
  {
    q: "How does SmartNudge connect back to the rest of DynoWeb?",
    a: "Through the Suggestion→Nudge loop. When DynoWeb spots a revenue leak, it can suggest a nudge to address it; once that nudge beats its holdout, the leak is marked 'acted on — working.' So the fix isn't just named, it's deployed and verified.",
  },
];

export default function SmartNudgePage() {
  return (
    <MarketingShell
      jsonLd={[
        faqJsonLd(faqs),
        breadcrumbJsonLd([
          { name: "Home", path: "" },
          { name: "Features", path: "/#features" },
          { name: "SmartNudge", path: "/features/smartnudge" },
        ]),
      ]}
    >
      <Hero
        eyebrow="Feature — behavior-triggered nudges"
        title="It Doesn't Just Name the Fix. It Ships It."
        lead="SmartNudge deploys the intervention: 16 nudge types and a 30+ template gallery, auto-styled to your store's Brand DNA, delivered on-site and by email — every campaign measured against a control group for net incremental revenue."
        primaryCta={{ label: "Install free", href: "https://apps.shopify.com/dynoweb", external: true }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
        highlights={["16 nudge types", "Brand DNA auto-styling", "On-site + email", "Holdout-measured lift"]}
        image="/SmartNudge.png"
        imageAlt="DynoWeb SmartNudge campaign builder for a Shopify store"
        imageLabel="SmartNudge"
      />

      <Section className="pb-12">
        <SectionHeading
          eyebrow="What it does"
          title="From leak to deployed, on-brand intervention"
          subtitle="Most tools tell you what's wrong. SmartNudge builds and launches the thing that fixes it — looking like your store the whole way."
        />
        <FeatureGrid columns={2} items={types} />
      </Section>

      <FeatureRow
        eyebrow="30+ templates"
        title="16 nudge types, launched from a template gallery"
        body={
          <p>
            Popups, bars, spin-to-win wheels, scratch cards, quizzes, exit-intent, free-shipping bars, social proof,
            countdowns, email capture, video — whatever the moment calls for. Start from a gallery of 30+ templates and
            you&rsquo;re editing a real campaign in minutes, not building one from a blank canvas.
          </p>
        }
        bullets={[
          "16 nudge types covering popups, bars, games, quizzes, and capture",
          "30+ template gallery to launch from",
          "Behavior-triggered — fired on what visitors do, not a blind timer",
        ]}
        image="/SmartNudge-templates.png"
        imageAlt="DynoWeb SmartNudge template gallery"
        imageLabel="Template gallery"
      />

      <FeatureRow
        reverse
        eyebrow="Brand DNA"
        title="Every nudge auto-styled to your brand"
        body={
          <p>
            Brand DNA crawls your store in about 30 seconds and reads your palette, fonts, brand voice, and imagery. Every
            nudge is styled from that profile automatically, so campaigns look native to your storefront. A festival and
            seasonal design library — Diwali, Christmas, BFCM, Halloween — adds moment-ready sets in multiple style tiers.
          </p>
        }
        bullets={[
          "Palette, fonts, voice, and imagery pulled from your store",
          "Festival / seasonal library in multiple style tiers",
          "AI copy and AI images, with a built-in background remover",
        ]}
        image="/SmartNudge-brand.png"
        imageAlt="DynoWeb SmartNudge auto-styling a nudge to the store's Brand DNA"
        imageLabel="Brand DNA styling"
      />

      <FeatureRow
        eyebrow="On-site and email"
        title="Deliver where the shopper is"
        body={
          <p>
            Fire a nudge live on the storefront the moment behavior calls for it, then follow up with a design-matched
            coupon email that carries the same look. One campaign, two surfaces — and the copy and imagery are generated
            for you.
          </p>
        }
        bullets={[
          "On-site nudges fired on real behavior",
          "Design-matched coupon emails as a follow-up",
          "AI-written copy and AI-generated images throughout",
        ]}
        image="/SmartNudge-editor.png"
        imageAlt="DynoWeb SmartNudge editor with on-site and email delivery"
        imageLabel="Delivery"
      />

      <Section className="pb-16">
        <SectionHeading
          eyebrow="Proof, not hope"
          title="Measured against a holdout — the loop that closes"
          subtitle="A nudge that can't prove its lift is just a widget. SmartNudge holds out a control group and only claims what beats it."
        />
        <FeatureGrid
          columns={3}
          items={[
            { icon: FlaskConical, title: "Control-group attribution", body: "A default 10% holdout never sees the nudge. The gap between it and everyone else is the true lift and the net incremental revenue — after refunds, not impressions and clicks." },
            { icon: Sparkles, title: "A/B testing", body: "Pit variants against each other to find the copy, offer, and design that actually converts, then let the winner run." },
            { icon: Repeat, title: "Suggestion→Nudge loop", body: "A detected leak can be answered with a nudge; once that nudge beats its holdout, the leak is marked 'acted on — working.' The fix is deployed and verified, not just named." },
          ]}
        />
      </Section>

      <FAQ title="SmartNudge — frequently asked" items={faqs} />

      <RelatedLinks
        links={[
          { label: "Brand DNA", href: "/features/brand-dna", description: "The profile that styles every nudge." },
          { label: "Impact", href: "/features/impact", description: "Net SmartNudge revenue, on the scoreboard." },
          { label: "Revenue Attribution", href: "/features/revenue-attribution", description: "Tie orders to what drove them." },
          { label: "AI Fix Suggestions", href: "/features/ai-suggestions", description: "The leaks nudges act on." },
          { label: "DynoAgent", href: "/features/dynoagent", description: "Build and launch nudges from chat." },
          { label: "Shopify CRO Guide", href: "/shopify-cro", description: "The complete optimization loop." },
        ]}
      />

      <CTA
        title="Deploy the fix, then prove it worked"
        body="SmartNudge builds an on-brand nudge, delivers it on-site and by email, and measures it against a holdout — so every campaign reports the net revenue it actually added."
        primaryLabel="Install free"
        secondary={{ label: "See pricing", href: "/pricing" }}
      />
    </MarketingShell>
  );
}
