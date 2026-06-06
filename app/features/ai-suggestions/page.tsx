import type { Metadata } from "next";
import { Ruler, Sigma, Brain, ListOrdered, Wrench, Gauge, BadgeCheck, Repeat2, Award } from "lucide-react";

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
import { ChartCard, BarChart } from "@/app/components/seo/Charts";

export const metadata: Metadata = {
  title: "AI-Powered Fix Suggestions for Your Shopify Store",
  description:
    "DynoWeb's 3-layer AI engine analyses behavioral data, ranks revenue-leaking gaps by ROI, and delivers a dev-ready fix — file path, diff, and projected lift.",
  alternates: { canonical: "https://www.dynoweb.app/features/ai-suggestions" },
  openGraph: {
    title: "AI-Powered Fix Suggestions for Your Shopify Store",
    description:
      "AI Shopify optimization that goes past insights to action — ranked, dev-ready fixes with projected lift, built natively for Shopify.",
    url: "https://www.dynoweb.app/features/ai-suggestions",
    siteName: "DynoWeb",
    type: "article",
  },
};

const inside = [
  { icon: BadgeCheck, title: "The evidence", body: "Impressions, clicks, CTR, and matching session replays — so you trust the suggestion before you act on it." },
  { icon: Gauge, title: "Expected impact", body: "A clear rating of how much the fix is likely to move conversion, not a vague 'best practice.'" },
  { icon: ListOrdered, title: "Difficulty badge", body: "Know at a glance whether it's a 2-minute theme-editor tweak or a developer task." },
  { icon: Wrench, title: "Two paths to ship", body: "A numbered theme-editor walkthrough for non-technical users, plus exact code for developers." },
];

const faqs = [
  {
    q: "How does DynoWeb's AI generate fix suggestions?",
    a: "DynoWeb runs three intelligence layers in order: a rule engine (17+ deterministic UX checks), statistical pattern detection (frustration clusters, scroll cliffs and mobile gaps, each confirmed with a two-proportion z-test), and an LLM (Gemini) that reasons over pre-computed page contexts to draft the fix. Every candidate is then scored with PECTI — Proof, Ease, Cost, Time, Impact — and must clear a stability gate (appear in 2+ runs) before it's shown. The result is a ranked, evidence-backed fix with a theme-editor walkthrough and a code diff, not just an insight.",
  },
  {
    q: "Are the AI suggestions actually specific to my store?",
    a: "Yes. Suggestions are generated from your store's own behavioral data and your theme — not generic ecommerce advice. The evidence panel shows the exact impressions, clicks, and session replays behind each recommendation, so every fix is grounded in what your real visitors did.",
  },
  {
    q: "Do I have to apply the fixes automatically?",
    a: "No. DynoWeb never pushes changes to your live theme on its own. Each suggestion opens into an implementation guide you control — make the change in the theme editor yourself, or hand the code diff to your developer. You stay in charge of what ships.",
  },
  {
    q: "What does 'projected lift' mean?",
    a: "Projected lift is DynoWeb's estimate of how much a given fix is likely to improve conversion or revenue, based on the behavioral evidence and the page's traffic. It helps you decide which fixes are worth prioritising, and after you ship, revenue attribution shows the actual result.",
  },
];

export default function AiSuggestionsPage() {
  return (
    <MarketingShell
      jsonLd={[
        faqJsonLd(faqs),
        breadcrumbJsonLd([
          { name: "Home", path: "" },
          { name: "Features", path: "/#features" },
          { name: "AI Suggestions", path: "/features/ai-suggestions" },
        ]),
      ]}
    >
      <Hero
        eyebrow="Feature — AI Shopify optimization"
        title="AI That Finds Shopify Fixes — Not Just Insights"
        lead="DynoWeb's 3-layer AI engine analyses behavioral data, ranks revenue-leaking gaps by ROI, and delivers a dev-ready fix — file path, diff, and projected lift. The leap from 'I can see the problem' to 'I know exactly what to change.'"
        primaryCta={{ label: "Install free", href: "https://apps.shopify.com/dynoweb" }}
        secondaryCta={{ label: "See use cases", href: "/use-cases" }}
        highlights={["3-layer AI engine", "Ranked by ROI", "Theme + code paths", "Projected lift per fix"]}
        image="/AISuggestions.png"
        imageAlt="DynoWeb AI suggestions screen showing prioritised fixes for a Shopify store"
        imageLabel="AI Suggestions"
      />

      <Section className="pb-12">
        <SectionHeading
          eyebrow="The engine"
          title="Three intelligence layers from signal to fix"
          subtitle="Most tools stop at surfacing data. DynoWeb runs a rule engine, statistical pattern detection, and an LLM in sequence — so what reaches you is a change to ship, not another chart to read."
        />
        <FeatureGrid
          items={[
            { icon: Ruler, tag: "Layer 1 — Rules", title: "17+ deterministic UX rules", body: "Cheap, fast checks run first — CTA size and contrast, scroll-depth thresholds, mobile gestures, form-field visibility — catching the obvious friction without spending a token." },
            { icon: Sigma, tag: "Layer 2 — Patterns", title: "Statistically-tested detection", body: "Frustration clusters, scroll cliffs, engagement drops, and mobile-vs-desktop gaps — each confirmed with a two-proportion z-test so you're acting on signal, not noise." },
            { icon: Brain, tag: "Layer 3 — LLM", title: "Gemini reasoning", body: "An LLM reasons over pre-computed page contexts (never raw events) to explain the why and draft the fix, bounded by a per-shop monthly budget so cost stays predictable." },
          ]}
          columns={3}
        />
      </Section>

      <Section className="pb-16">
        <SectionHeading
          eyebrow="Scoring & gating"
          title="Why the right fix rises to the top"
          subtitle="Every candidate is scored on five factors, then held to a stability bar before it's ever shown to you."
        />
        <div className="grid gap-4 lg:grid-cols-[1.1fr_1fr]">
          <ChartCard
            eyebrow="PECTI score"
            title="Five factors decide priority"
            footnote="Illustrative PECTI breakdown for one suggestion. Proof, Ease, Cost, Time, and Impact combine into the rank — so a high-impact, low-effort fix beats a flashy but expensive one."
          >
            <BarChart
              max={10}
              data={[
                { label: "Proof", value: 9, display: "9/10", highlight: true },
                { label: "Ease", value: 7, display: "7/10" },
                { label: "Cost", value: 8, display: "8/10" },
                { label: "Time", value: 8, display: "8/10" },
                { label: "Impact", value: 9, display: "9/10", highlight: true },
              ]}
            />
          </ChartCard>
          <FeatureGrid
            columns={2}
            items={[
              { icon: Repeat2, title: "Stability gate", body: "A pattern must appear in 2+ analysis runs before it's published — so one-off anomalies never reach you." },
              { icon: Award, title: "Tier badges", body: "Each fix is tagged Quick Win, Strategic, or Ambitious so you can pick the effort level that fits today." },
              { icon: BadgeCheck, title: "SEO-safety badge", body: "Changes are flagged for SEO impact, so you never ship a fix that helps conversion but hurts rankings." },
              { icon: Gauge, title: "Projected lift", body: "An expected-impact estimate per fix, later reconciled against real revenue via attribution." },
            ]}
          />
        </div>
      </Section>

      <FeatureRow
        eyebrow="The queue"
        title="A prioritised list, not a pile of charts"
        body={
          <p>
            Every revenue-leaking gap DynoWeb detects lands in a single ranked queue. The highest-ROI fix sits at the top,
            each with an expected-impact rating and a difficulty badge — so you always know what to work on next instead of
            drowning in dashboards.
          </p>
        }
        bullets={[
          "Sorted by projected revenue impact",
          "Difficulty badges separate quick wins from dev tasks",
          "Grouped by page and theme so related fixes stay together",
        ]}
        image="/suggestionsOverview.png"
        imageAlt="DynoWeb suggestions overview showing a ranked queue of fixes"
        imageLabel="Suggestions queue"
      />

      <FeatureRow
        reverse
        eyebrow="Inside a suggestion"
        title="Every recommendation comes with its evidence"
        body={
          <p>
            Open any suggestion and you see exactly why it was generated — the impressions, clicks, CTR, and matching
            session replays behind it. No black box. You trust the fix because you can see the behavior that produced it.
          </p>
        }
        bullets={[
          "The behavioral evidence, in plain numbers",
          "Matching session replays one click away",
          "An expected-impact rating and difficulty badge",
        ]}
        image="/suggestionCard.png"
        imageAlt="DynoWeb suggestion card showing the evidence behind a recommended fix"
        imageLabel="Suggestion detail"
      />

      <FeatureRow
        eyebrow="Implementation — no code"
        title="A theme-editor walkthrough anyone can follow"
        body={
          <p>
            For non-technical merchants, every fix includes a numbered, click-by-click theme-editor guide. Find the
            section, change the setting, save — no developer required for most changes.
          </p>
        }
        bullets={[
          "Step-by-step instructions tied to your theme",
          "No code, no tag manager, no guesswork",
          "Preview on a draft theme before it goes live",
        ]}
        image="/implementationguide-theme.png"
        imageAlt="DynoWeb implementation guide showing theme-editor steps"
        imageLabel="Theme-editor guide"
      />

      <FeatureRow
        reverse
        eyebrow="Implementation — for devs"
        title="The exact file path and diff for your developer"
        body={
          <p>
            When a change needs code, DynoWeb hands your developer a precise spec: the file to touch and the before/after
            diff, with a one-click copy. Ship technical fixes in minutes, with zero ambiguity.
          </p>
        }
        bullets={[
          "Exact theme file path",
          "Before/after code diff, copy-ready",
          "Pull it into Cursor or Claude via MCP",
        ]}
        image="/implementationguide-code.png"
        imageAlt="DynoWeb implementation guide showing a code diff for a Shopify theme file"
        imageLabel="Code diff"
      />

      <Section className="pb-16">
        <SectionHeading eyebrow="Inside a suggestion" title="What every recommendation includes" />
        <FeatureGrid columns={2} items={inside} />
      </Section>

      <FAQ title="AI suggestions — frequently asked" items={faqs} />

      <RelatedLinks
        links={[
          { label: "DynoAgent", href: "/features/dynoagent", description: "The AI agent that never stops optimizing." },
          { label: "Revenue Attribution", href: "/features/revenue-attribution", description: "Tie every fix to real sales." },
          { label: "MCP Integration", href: "/features/mcp-integration", description: "Push insights into Claude & Cursor." },
          { label: "Shopify for Developers", href: "/use-cases/shopify-for-developers", description: "Get dev-ready fix files." },
          { label: "Replace your CRO agency", href: "/shopify-cro-agency-alternative", description: "AI fixes without the agency price tag." },
          { label: "Shopify CRO Guide", href: "/shopify-cro", description: "The complete optimization loop." },
        ]}
      />

      <CTA
        title="From behavioral data to dev-ready fix"
        body="DynoWeb's AI doesn't just tell you something is wrong — it tells you exactly what to change, how, and what it's worth. Install free and watch it work on your store."
        primaryLabel="Install free"
        secondary={{ label: "See pricing", href: "/pricing" }}
      />
    </MarketingShell>
  );
}
