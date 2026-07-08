import type { Metadata } from "next";
import { DollarSign, Ruler, Scale, ShieldCheck, TrendingUp, Target, Activity } from "lucide-react";

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
  title: "Impact — The Money Scoreboard for Your Shopify Store",
  description:
    "One running total of what DynoWeb earned or saved you — verified fixes plus net SmartNudge revenue. Every fix measured on the metric that fits it, before and after, against your own trend.",
  alternates: { canonical: "https://www.dynoweb.app/features/impact" },
  openGraph: {
    title: "Impact — The Money Scoreboard for Your Shopify Store",
    description:
      "A running total of revenue DynoWeb earned or saved. Verified fixes measured on the metric that fits them, plus net SmartNudge revenue — honest, net, and tied to your own trend.",
    url: "https://www.dynoweb.app/features/impact",
    siteName: "DynoWeb",
    type: "article",
  },
};

const how = [
  { icon: DollarSign, tag: "Total", title: "One number, always on top", body: "The revenue DynoWeb earned or saved you — verified fixes plus net SmartNudge revenue — as a single running total. The answer to 'what has this app made me?'" },
  { icon: Ruler, tag: "Measure", title: "The metric that fits the fix", body: "A CTA fix is scored on click-through rate, a frustration fix on rage clicks, an SEO fix on organic visitors, a GEO / AI-search fix on being verified live. No forcing every fix through one number." },
  { icon: Scale, tag: "Isolate", title: "Difference-in-differences", body: "Each fix is compared against the store's own trend, so a good week for the whole store isn't miscredited to a single change. The lift is what moved beyond the baseline." },
  { icon: ShieldCheck, tag: "Honest", title: "Net, not gross", body: "Numbers are net of refunds and a control group — estimates, never guarantees. Fixes still gathering data show the real numbers collected so far rather than a finished claim." },
];

const faqs = [
  {
    q: "What does the Impact total actually count?",
    a: "It combines two things: the measured result of verified fixes you've shipped, and the net incremental revenue from SmartNudge campaigns. Each is measured on its own terms and added into one running total, so you get a single honest answer to 'what has DynoWeb made me?'",
  },
  {
    q: "How is each fix measured?",
    a: "On the metric that fits it. A CTA fix is judged on click-through rate, a frustration fix on rage clicks, an SEO fix on organic visitors, and a GEO / AI-search fix on being verified live. Each result shows the before and after with the exact measurement window, so you can see the change and the period it covers.",
  },
  {
    q: "How do you know the change wasn't just a good week?",
    a: "Impact uses difference-in-differences: it compares each fix against the store's own trend over the same period. If the whole store rose, that background movement is subtracted out, so only the lift beyond the baseline is credited to the fix — not seasonality or a traffic spike.",
  },
  {
    q: "Are these numbers guaranteed?",
    a: "No. Every figure is net of refunds and a control group, and it's an estimate, not a guarantee. Fixes that are still measuring show the real data gathered so far rather than a polished final claim — honesty over hype is the whole point of the scoreboard.",
  },
];

export default function ImpactPage() {
  return (
    <MarketingShell
      jsonLd={[
        faqJsonLd(faqs),
        breadcrumbJsonLd([
          { name: "Home", path: "" },
          { name: "Features", path: "/#features" },
          { name: "Impact", path: "/features/impact" },
        ]),
      ]}
    >
      <Hero
        eyebrow="Feature — the money scoreboard"
        title="What Has DynoWeb Actually Made You?"
        lead="Impact is the running total of revenue DynoWeb earned or saved — verified fixes plus net SmartNudge revenue, in one number at the top. Every fix measured on the metric that fits it, before and after, against your store's own trend."
        primaryCta={{ label: "Install free", href: "https://apps.shopify.com/dynoweb", external: true }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
        highlights={["One running total", "Measured per fix", "Net, not gross", "Compared to your own trend"]}
        image="/Impact.png"
        imageAlt="DynoWeb Impact scoreboard totalling revenue earned and saved for a Shopify store"
        imageLabel="Impact"
      />

      <Section className="pb-12">
        <SectionHeading
          eyebrow="How it works"
          title="A scoreboard you can trust, not a vanity number"
          subtitle="Impact turns everything DynoWeb ships into one honest total — earned or saved, net of the noise."
        />
        <FeatureGrid columns={2} items={how} />
      </Section>

      <FeatureRow
        eyebrow="Per-fix measurement"
        title="Every fix measured on the metric that fits it"
        body={
          <p>
            A button fix and an SEO fix don&rsquo;t move the same number, so Impact doesn&rsquo;t pretend they do. Each fix
            is scored on the signal it actually changes, shown before and after with the exact window it was measured over —
            so the result reads like an honest experiment, not a headline.
          </p>
        }
        bullets={[
          "CTA fix → click-through rate; frustration fix → rage clicks",
          "SEO fix → organic visitors; GEO / AI-search fix → verified live",
          "Before → after, with the exact measurement window shown",
        ]}
        image="/Impact.png"
        imageAlt="DynoWeb Impact showing a fix measured before and after on its own metric"
        imageLabel="Per-fix result"
      />

      <FeatureRow
        reverse
        eyebrow="Difference-in-differences"
        title="Your own trend is the control"
        body={
          <p>
            A store-wide good week shouldn&rsquo;t get credited to one change. Impact compares each fix against the store&rsquo;s
            own trend over the same period and subtracts that background movement out — so seasonality and traffic spikes
            don&rsquo;t get miscredited to a fix that didn&rsquo;t earn them.
          </p>
        }
        bullets={[
          "Each fix compared against the store's own baseline",
          "Background movement subtracted, not counted as lift",
          "Only the change beyond the trend is credited",
        ]}
        image="/summaryCards.png"
        imageAlt="DynoWeb Impact comparing a fix against the store's own trend"
        imageLabel="Difference-in-differences"
      />

      <Section className="pb-16">
        <SectionHeading
          eyebrow="Honesty over hype"
          title="Net numbers, estimates never guarantees"
          subtitle="The scoreboard would be worthless if it flattered you. So it doesn't."
        />
        <FeatureGrid
          columns={3}
          items={[
            { icon: TrendingUp, title: "Net, after refunds", body: "SmartNudge revenue is reported net of refunds and a control-group holdout — the incremental amount, not the gross a dashboard could inflate." },
            { icon: Activity, title: "Still-measuring rows are honest", body: "Fixes that haven't gathered enough data yet show the real numbers collected so far, clearly, instead of a finished claim." },
            { icon: Target, title: "Estimates, not promises", body: "Every figure is an estimate grounded in your own data. It's the best honest read of impact — labelled as an estimate, never dressed up as a guarantee." },
          ]}
        />
      </Section>

      <FAQ title="Impact — frequently asked" items={faqs} />

      <RelatedLinks
        links={[
          { label: "Revenue Attribution", href: "/features/revenue-attribution", description: "Tie orders to the fixes that drove them." },
          { label: "SmartNudge", href: "/features/smartnudge", description: "Net incremental revenue, holdout-measured." },
          { label: "AI Fix Suggestions", href: "/features/ai-suggestions", description: "The ranked fixes Impact scores." },
          { label: "SEO Autopilot", href: "/features/seo-autopilot", description: "Organic and AI-search fixes." },
          { label: "DynoAgent", href: "/features/dynoagent", description: "Ask it what's working." },
          { label: "Shopify CRO Guide", href: "/shopify-cro", description: "The complete optimization loop." },
        ]}
      />

      <CTA
        title="Put a number on every fix you ship"
        body="Stop guessing whether the app paid for itself. Impact keeps one honest, net running total of what DynoWeb earned or saved you — measured against your own trend."
        primaryLabel="Install free"
        secondary={{ label: "See pricing", href: "/pricing" }}
      />
    </MarketingShell>
  );
}
