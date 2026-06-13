import type { Metadata } from "next";
import {
  Radar,
  ListOrdered,
  Wrench,
  MousePointerClick,
  PlaySquare,
  ShoppingCart,
  Sparkles,
  Smartphone,
  ShieldCheck,
  Target,
  Eye,
  LineChart,
} from "lucide-react";

import {
  MarketingShell,
  Hero,
  Section,
  SectionHeading,
  FeatureGrid,
  FeatureRow,
  Card,
  StatRow,
  FAQ,
  RelatedLinks,
  PrimaryButton,
  faqJsonLd,
  breadcrumbJsonLd,
} from "@/app/components/seo/Marketing";
import { ChartCard, FunnelChart } from "@/app/components/seo/Charts";

export const metadata: Metadata = {
  title: "Shopify CRO: The Complete Conversion Rate Optimization Guide",
  description:
    "Turn more Shopify visitors into customers. The pillar guide to Shopify conversion rate optimization — framework, best practices, and the toolkit (heatmaps, session replays, AI insights). Updated 2026.",
  keywords: [
    "Shopify conversion rate optimization",
    "increase shopify conversion rate",
    "shopify cro checklist",
    "shopify cro best practices",
    "improve shopify sales",
    "shopify conversion tips",
  ],
  alternates: { canonical: "https://www.dynoweb.app/shopify-cro" },
  openGraph: {
    title: "Shopify CRO: The Complete Conversion Rate Optimization Guide",
    description:
      "Turn more Shopify visitors into customers — the framework, best practices, and the toolkit.",
    url: "https://www.dynoweb.app/shopify-cro",
    siteName: "DynoWeb",
    type: "article",
  },
};

const framework = [
  {
    icon: Radar,
    tag: "Step 1",
    title: "Analyze visitor behavior",
    body: "Before changing anything, see how shoppers actually engage with your store. Heatmaps, session recordings, and funnel tracking surface where visitors click, the pages with the highest exit rates, how far users scroll, and where they abandon checkout — friction points traditional analytics miss.",
  },
  {
    icon: Target,
    tag: "Step 2",
    title: "Identify conversion leaks",
    body: "Map friction across product pages (poor images, vague descriptions, missing reviews), cart pages (unexpected costs, missing payment options, no trust badges), checkout (too many form fields, slow loads, no guest checkout), and mobile experiences.",
  },
  {
    icon: ListOrdered,
    tag: "Step 3",
    title: "Prioritise high-impact fixes",
    body: "Not every problem needs to be solved at once. Prioritise mobile usability, product page optimization, add-to-cart problems, checkout abandonment, and site speed — the categories that compound the fastest ROI.",
  },
];

const bestPractices = [
  {
    icon: MousePointerClick,
    title: "Optimize product pages",
    body: "High-quality photos, videos, reviews, FAQs, and clear shipping and return policies give customers everything they need to buy with confidence — reducing uncertainty and lifting conversion.",
  },
  {
    icon: Smartphone,
    title: "Improve mobile experiences",
    body: "Mobile is the majority of Shopify traffic. Fast page loads, easy navigation, and a frictionless mobile checkout drive engagement and sales.",
  },
  {
    icon: ShoppingCart,
    title: "Reduce checkout friction",
    body: "Streamline checkout with guest options, fewer form fields, and multiple payment methods. Every removed step lowers cart abandonment.",
  },
  {
    icon: ShieldCheck,
    title: "Build trust",
    body: "Verified reviews, secure payment badges, customer endorsements, and clear contact details build credibility and encourage purchasing decisions.",
  },
  {
    icon: Sparkles,
    title: "Personalize user experiences",
    body: "Dynamic promotions, tailored offers, and product recommendations make each shopper's journey more relevant — boosting engagement and motivating action.",
  },
  {
    icon: LineChart,
    title: "Measure and iterate",
    body: "CRO is a compounding loop, not a one-time project. Establish a baseline, ship a focused fix, attribute the lift, repeat.",
  },
];

const faqs = [
  {
    q: "What is a good Shopify conversion rate?",
    a: "The majority of Shopify stores convert between 1% and 3%, but depending on the industry and traffic quality, high-performing stores can reach much higher conversion rates.",
  },
  {
    q: "How can I increase my Shopify conversion rate?",
    a: "Prioritize optimizing mobile experiences, lowering checkout friction, enhancing product pages, and identifying user pain points with behavioral analytics tools.",
  },
  {
    q: "Are heatmaps useful for Shopify CRO?",
    a: "Yes. Heatmaps show how users interact with pages and can be used to find optimization opportunities, distractions, and overlooked elements.",
  },
  {
    q: "What are session replays?",
    a: "Session replays are recordings of real-world visitor interactions that assist retailers in understanding consumer behavior and identifying conversion problems.",
  },
  {
    q: "How does AI help improve Shopify sales?",
    a: "AI is capable of automatically identifying obstacles to conversion, analyzing visitor behavior patterns, ranking opportunities, and suggesting solutions that enhance store performance.",
  },
];

export default function ShopifyCroPage() {
  return (
    <MarketingShell
      jsonLd={[
        faqJsonLd(faqs),
        breadcrumbJsonLd([
          { name: "Home", path: "" },
          { name: "Shopify CRO", path: "/shopify-cro" },
        ]),
      ]}
    >
      <Hero
        eyebrow="Pillar guide — Shopify conversion rate optimization"
        title="Shopify CRO: The Complete Conversion Rate Optimization Guide"
        lead="Turn more Shopify visitors into customers. Bringing the traffic to Shopify is the first step — the real challenge begins in converting visitors into paying customers. Shopify CRO identifies the obstacles in your customer journey and fixes them, so you generate more revenue from the traffic you already have."
        highlights={[
          "Behavioural analytics",
          "Heatmaps & session replays",
          "AI-powered insights",
          "Sub-40 KB tracker",
        ]}
        image="/CROReport.png"
        imageAlt="DynoWeb CRO report dashboard for a Shopify store"
        imageLabel="CRO Report"
      />

      <Section className="pb-16">
        <StatRow
          stats={[
            { value: "1–3%", label: "typical Shopify conversion rate" },
            { value: "3×", label: "revenue lift from 1% → 3% conversion" },
            { value: "< 40 KB", label: "DynoWeb tracker weight" },
            { value: "AI", label: "ranks every fix by ROI" },
          ]}
        />
      </Section>

      {/* WHAT IS SHOPIFY CRO */}
      <FeatureRow
        eyebrow="The basics"
        title="What is Shopify conversion rate optimization?"
        body={
          <div className="space-y-5">
            <p>
              The methodical process of increasing your store's capacity to turn visitors into customers — without spending more
              on advertising. Conversions include completing a purchase, adding items to a cart, beginning checkout, subscribing
              to email lists, requesting a demo, and enrolling in loyalty programs.
            </p>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="mb-2 text-sm uppercase tracking-wide text-[#6eb0ff]">A simple example</p>
              <p>
                50,000 monthly visitors at a{" "}
                <span className="font-semibold text-white">1% conversion rate</span> = ~500 orders. Push that to{" "}
                <span className="font-semibold text-white">3%</span> and you're at ~1,500 orders — a 3× revenue lift from the
                same traffic.
              </p>
            </div>
          </div>
        }
        image="/CRO-img2.png"
        imageAlt="Conversion rate analysis dashboard with score breakdown"
        imageLabel="Score breakdown"
      />

      {/* WHY SHOPIFY STORES LOSE CONVERSIONS — brief, full version on dedicated blog */}
      <Section className="pb-16">
        <SectionHeading
          eyebrow="Where the money leaks"
          title="Why Shopify stores lose conversions"
          subtitle="Many retailers believe the issue is with their merchandise or prices. In reality, the causes are far more mundane — and far more fixable."
        />
        <Card>
          <div className="space-y-4 text-[0.97rem] leading-7 text-zinc-300">
            <p>
              Slow-loading pages, unclear navigation, hidden shipping fees, subpar mobile experiences, inadequate product
              descriptions, low trust signals, convoluted checkout procedures, and poorly placed calls-to-action are all common
              reasons customers give up on purchases.
            </p>
            <p>
              Behavior analytics tools consistently show that customers frequently experience friction before making a purchase
              — heatmaps and session replays help locate these covert conversion barriers.{" "}
              <a href="/blog/why-shopify-store-not-converting" className="text-[#6eb0ff] underline-offset-2 hover:underline">
                Read the full breakdown →
              </a>
            </p>
          </div>
        </Card>
      </Section>

      {/* THE SHOPIFY CRO FRAMEWORK */}
      <Section className="pb-12">
        <SectionHeading
          eyebrow="The Shopify CRO framework"
          title="Analyze → identify → prioritise"
          subtitle="Conversion optimization fails when it's a pile of disconnected tactics. It works when it's a repeatable loop."
        />
        <FeatureGrid items={framework} columns={3} />
      </Section>

      {/* FUNNEL */}
      <Section className="pb-16">
        <SectionHeading
          eyebrow="Visualise the leak"
          title="A typical Shopify conversion funnel"
          subtitle="Most stores lose the majority of revenue at one step. Finding that step is the fastest path to a higher conversion rate."
        />
        <ChartCard footnote="Illustrative funnel for a store with 10,000 monthly sessions. The biggest single-step drop — here, product view to add-to-cart — is almost always the highest-ROI place to start.">
          <FunnelChart
            steps={[
              { label: "Sessions", value: 10000 },
              { label: "Product views", value: 6200 },
              { label: "Add to cart", value: 1080 },
              { label: "Checkout", value: 540 },
              { label: "Purchase", value: 310 },
            ]}
          />
        </ChartCard>
      </Section>

      {/* AI ANALYSIS FEATURE ROW */}
      <FeatureRow
        reverse
        eyebrow="AI-powered analysis"
        title="From thousands of sessions to a ranked queue of fixes"
        body={
          <p>
            Traditional CRO requires manual review of hundreds of sessions. AI-powered analysis changes that — detecting
            conversion issues automatically, surfacing hidden behavior patterns, prioritising opportunities, and recommending
            fixes with projected impact. You get a ready-to-action queue instead of a pile of dashboards.
          </p>
        }
        bullets={[
          "Automatic friction detection across every template",
          "Opportunities ranked by projected revenue lift",
          "Each fix paired with a theme-editor walkthrough or code diff",
        ]}
        image="/CRO-img1.png"
        imageAlt="AI-powered analysis surfacing conversion opportunities for a Shopify store"
        imageLabel="AI analysis"
      />

      {/* THE TOOLKIT — links to dedicated deep-dive pages */}
      <Section className="pb-16">
        <SectionHeading
          eyebrow="The CRO toolkit"
          title="Three signals that surface the friction"
          subtitle="Each one has its own dedicated guide — start with whichever matches the question you're trying to answer."
        />
        <FeatureGrid
          columns={3}
          items={[
            {
              icon: Eye,
              title: "Heatmaps",
              body: "Visual representation of where users click, hover, scroll, and interact — direct behavioral evidence to optimize page layouts.",
            },
            {
              icon: PlaySquare,
              title: "Session replays",
              body: "Observe actual customer journeys — mouse movement, cart interactions, rage clicks, and exit behavior — to identify conversion barriers.",
            },
            {
              icon: Sparkles,
              title: "AI-powered insights",
              body: "Detect conversion issues automatically, surface hidden patterns, prioritise opportunities, and recommend fixes with projected impact.",
            },
          ]}
        />
        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <a href="/shopify-heatmaps" className="rounded-full border border-white/15 px-4 py-2 text-zinc-300 hover:border-[#6eb0ff] hover:text-white">
            How heatmaps improve Shopify CRO →
          </a>
          <a href="/shopify-session-replay" className="rounded-full border border-white/15 px-4 py-2 text-zinc-300 hover:border-[#6eb0ff] hover:text-white">
            Why session replays matter →
          </a>
          <a href="/features/ai-suggestions" className="rounded-full border border-white/15 px-4 py-2 text-zinc-300 hover:border-[#6eb0ff] hover:text-white">
            Using AI for Shopify CRO →
          </a>
        </div>
      </Section>

      {/* SHOPIFY CRO BEST PRACTICES */}
      <Section className="pb-16">
        <SectionHeading
          eyebrow="Best practices"
          title="Shopify CRO best practices"
          subtitle="The high-leverage habits the top-performing Shopify stores share."
        />
        <FeatureGrid items={bestPractices} columns={3} />
      </Section>

      {/* HOW DYNOWEB HELPS */}
      <Section className="pb-16">
        <SectionHeading
          eyebrow="How DynoWeb helps"
          title="Identify, understand, and fix conversion problems faster"
          subtitle="DynoWeb empowers merchants to make data-driven optimization decisions instead of depending on conjecture — by integrating behavioural analytics, AI analysis, heatmaps, and session recordings."
        />
        <FeatureGrid
          columns={2}
          items={[
            {
              icon: Eye,
              title: "Heatmaps",
              body: "See how customers interact and identify the factors that influence conversions — where they click, scroll, and concentrate in your store.",
            },
            {
              icon: PlaySquare,
              title: "Session replays",
              body: "Observe actual visitor behavior and pinpoint areas of friction — see precisely where customers hesitate, become perplexed, or leave the store.",
            },
            {
              icon: LineChart,
              title: "Conversion analytics",
              body: "Recognise revenue leaks and the points at which visitors leave the funnel. Monitor customer journeys to identify the steps that require optimization.",
            },
            {
              icon: Sparkles,
              title: "AI-powered insights",
              body: "Smart suggestions based on actual consumer behavior. AI automatically identifies potential problems that could affect sales — as well as conversion opportunities.",
            },
            {
              icon: Wrench,
              title: "Actionable fixes",
              body: "Go beyond analytics with performance-enhancing optimization recommendations — specific suggestions that turn insights into quantifiable outcomes.",
            },
            {
              icon: ShoppingCart,
              title: "Revenue attribution",
              body: "Tie behavior to revenue, so every fix you ship can be measured against the lift it actually produced.",
            },
          ]}
        />
      </Section>

      {/* CTA — single button, mid-page, before FAQs */}
      <Section className="pb-20">
        <div className="cta-glow-card rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.08),transparent_48%),linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] sm:p-8 lg:p-10">
          <p className="text-[0.74rem] font-extrabold uppercase tracking-[0.28em] text-zinc-500">
            Download the Shopify CRO Checklist
          </p>
          <h2 className="mt-4 font-[Montserrat] text-3xl font-extrabold leading-[1.06] tracking-[-0.04em] text-white sm:text-4xl">
            Ready to improve your Shopify store's performance?
          </h2>
          <p className="mt-5 max-w-[58ch] text-base leading-8 text-zinc-300 sm:text-lg">
            Get the full Shopify CRO Checklist and begin figuring out what hidden problems are keeping visitors from becoming
            customers.
          </p>
          <div className="mt-8">
            <PrimaryButton label="Download CRO Checklist" href="/blog/shopify-cro-checklist" />
          </div>
        </div>
      </Section>

      {/* FAQs */}
      <FAQ title="FAQs" items={faqs} />

      <RelatedLinks
        title="Explore the CRO toolkit"
        links={[
          { label: "Shopify Heatmaps", href: "/shopify-heatmaps", description: "See where customers click and scroll." },
          { label: "Shopify Session Replay", href: "/shopify-session-replay", description: "Watch every customer visit." },
          { label: "AI Suggestions", href: "/features/ai-suggestions", description: "Using AI for Shopify CRO." },
          { label: "Why your store isn't converting", href: "/blog/why-shopify-store-not-converting", description: "The full breakdown of leak points." },
          { label: "The Shopify CRO Checklist", href: "/blog/shopify-cro-checklist", description: "6 categories, ready to action." },
          { label: "Conversion Rate Benchmarks 2026", href: "/blog/shopify-conversion-rate-benchmark", description: "What a good Shopify conversion rate looks like." },
        ]}
      />
    </MarketingShell>
  );
}
