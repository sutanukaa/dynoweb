import type { Metadata } from "next";
import {
  MousePointerClick,
  AlertTriangle,
  MoveVertical,
  Clock,
  ShoppingCart,
  ShoppingBag,
  CreditCard,
  Smartphone,
  LogOut,
  Eye,
  Sparkles,
  LineChart,
  Target,
  Zap,
  Brain,
  Filter,
} from "lucide-react";

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
  title: "Shopify Analytics That Goes Beyond Pageviews — DynoWeb",
  description:
    "Understand what your Shopify visitors are really doing. DynoWeb fuses behavioural analytics, heatmaps, session replays, and AI-powered insights to surface revenue leaks before they affect growth.",
  alternates: { canonical: "https://www.dynoweb.app/shopify-analytics" },
  openGraph: {
    title: "Shopify Analytics That Goes Beyond Pageviews — DynoWeb",
    description:
      "Behavioural analytics, heatmaps, session replays, and AI-powered insights for Shopify merchants who want to know why — not just what.",
    url: "https://www.dynoweb.app/shopify-analytics",
    siteName: "DynoWeb",
    type: "article",
  },
};

const whatItIs = [
  "Customer interactions",
  "Shopping behavior",
  "Product engagement",
  "Funnel performance",
  "Conversion bottlenecks",
  "Checkout abandonment",
];

const traditionalGaps = [
  "Why visitors leave product pages without adding to cart.",
  "Why customers abandon a cart they spent minutes filling.",
  "Why users struggle, hesitate, or rage-click at checkout.",
  "Why mobile traffic converts at a fraction of desktop.",
];

const signals = [
  {
    icon: MousePointerClick,
    tag: "Engagement",
    title: "Click Activity",
    body: "Keep tabs on where users click to determine which components generate the most interaction. This aids optimization of navigation, calls-to-action, and layouts.",
  },
  {
    icon: AlertTriangle,
    tag: "Frustration",
    title: "Rage Clicks",
    body: "When users click an element repeatedly in anticipation of a response. These interactions frequently point to poor UX, confusing design, or malfunctioning functionality.",
  },
  {
    icon: Filter,
    tag: "Broken UX",
    title: "Dead Clicks",
    body: "When users click on elements that look interactive but nothing happens. Finding these areas enhances usability and lessens frustration.",
  },
  {
    icon: MoveVertical,
    tag: "Attention",
    title: "Scroll Depth",
    body: "Recognize how far users scroll on important pages. Scroll tracking shows whether prospective customers are seeing offers, CTAs, and important content.",
  },
  {
    icon: Clock,
    tag: "Engagement",
    title: "Session Duration",
    body: "Calculate the amount of time customers spend using your store. Combined with behavioral data, it identifies both engagement opportunities and areas of friction.",
  },
  {
    icon: ShoppingBag,
    tag: "Product",
    title: "Product Engagement",
    body: "Track which products earn the most interest — views, hovers, image swipes, and time on each product page. Surface the products that engage shoppers most so you can lean into top performers and diagnose underperformers.",
  },
  {
    icon: ShoppingCart,
    tag: "Intent",
    title: "Add-to-Cart Behavior",
    body: "Keep track of where and when customers add items to their carts. Comprehending this behavior surfaces top-performing products and conversion opportunities.",
  },
  {
    icon: AlertTriangle,
    tag: "Drop-off",
    title: "Cart Abandonment Signals",
    body: "Find out where consumers hesitate or depart during the buying process. These insights help recover lost sales and lower abandonment rates.",
  },
  {
    icon: CreditCard,
    tag: "Checkout",
    title: "Checkout Interactions",
    body: "Monitor customer behavior during the checkout process to spot friction, confusion, or usability problems that could affect conversions.",
  },
  {
    icon: Smartphone,
    tag: "Mobile",
    title: "Mobile Gestures",
    body: "Monitor actions unique to mobile devices — tapping, swiping, zooming, scrolling. Mobile behavior frequently differs greatly from desktop and needs specialized analysis.",
  },
  {
    icon: LogOut,
    tag: "Exit",
    title: "Exit Behavior",
    body: "Determine which pages and actions customers typically take before leaving your store. Comprehending exit trends increases retention and conversion.",
  },
];

const heatmapAnswers = [
  "Which buttons get the most clicks?",
  "Which sections attract attention?",
  "How far do visitors scroll?",
  "Which elements are ignored?",
];

const reportingQuestions = [
  "Which pages contribute most to revenue?",
  "Where do customers abandon purchases?",
  "Which products receive the most engagement?",
  "What behavioral patterns lead to conversions?",
];

const aiCapabilities = [
  "Detect behavioral patterns",
  "Identify friction points",
  "Highlight conversion opportunities",
  "Prioritize optimization tasks",
  "Recommend actionable improvements",
];

const benefits = [
  {
    icon: Eye,
    tag: "Visibility",
    title: "Understand Visitor Behavior",
    body: "Get insight into how consumers engage with each step of the purchasing process. Behavioral insights help identify problems that conventional analytics frequently overlook.",
  },
  {
    icon: Target,
    tag: "Revenue",
    title: "Identify Revenue Leaks",
    body: "Find out where consumers drop off, abandon their carts, or run into problems before making a purchase. Resolving these issues meaningfully lifts conversion rates.",
  },
  {
    icon: LineChart,
    tag: "Marketing",
    title: "Improve Marketing Performance",
    body: "Recognize the behavior of visitors arriving from different channels. Campaign optimization improves and advertising ROI increases as a result.",
  },
  {
    icon: Sparkles,
    tag: "Experience",
    title: "Enhance Customer Experience",
    body: "Use real customer data to enhance checkout processes, product pages, navigation, and user experience in general.",
  },
  {
    icon: Zap,
    tag: "Speed",
    title: "Make Faster Decisions",
    body: "AI-powered insights remove guesswork — merchants concentrate on the high-impact growth opportunities that move revenue first.",
  },
  {
    icon: Brain,
    tag: "Beyond reporting",
    title: "More Than Reports",
    body: "Many platforms only deliver dashboards. DynoWeb explains what the metrics mean and recommends the next course of action.",
  },
];

const faqs = [
  {
    q: "What is the best Shopify analytics app?",
    a: "The best Shopify analytics app offers both performance metrics and behavioral insights. Features like heatmaps, session recordings, conversion analytics, and AI recommendations help merchants make better decisions and improve revenue, not just measure it.",
  },
  {
    q: "Why is behavior analytics important for Shopify stores?",
    a: "Behavior analytics helps merchants understand how customers actually engage with their store, pinpoint areas of friction, and improve the shopping experience. That visibility is what lifts conversion — pageview reports alone can't tell you why visitors leave.",
  },
  {
    q: "What are rage clicks?",
    a: "A rage click is when a user repeatedly clicks an element because they expect an action to happen. They frequently signal a usability problem, a broken interaction, or an element that looks clickable but isn't.",
  },
  {
    q: "How do heatmaps help improve Shopify sales?",
    a: "Heatmaps show where visitors concentrate their attention. With that information, merchants can optimize layouts, content placement, and calls-to-action to increase engagement and conversions on the pages that matter most.",
  },
  {
    q: "Can analytics help reduce cart abandonment?",
    a: "Yes. Analytics tools that monitor consumer behavior let merchants find the exact friction points that cause hesitation or exit during the buying process — and address them before more revenue is lost.",
  },
];

export default function ShopifyAnalyticsPage() {
  return (
    <MarketingShell
      jsonLd={[
        faqJsonLd(faqs),
        breadcrumbJsonLd([
          { name: "Home", path: "" },
          { name: "Shopify Analytics", path: "/shopify-analytics" },
        ]),
      ]}
    >
      <Hero
        eyebrow="Pillar guide — Shopify analytics app"
        title="Shopify Analytics That Goes Beyond Pageviews"
        lead="Measuring traffic, page views, and conversion rates is essential for Shopify store owners. But many are still relying on traditional analytics tools, which only provide reports about what happened — and not why. DynoWeb fuses behavioural analytics, session recordings, heatmaps, and AI-powered insights to help merchants find hidden opportunities and spot revenue leaks before they affect growth."
        primaryCta={{ label: "See Live Demo", href: "https://apps.shopify.com/dynoweb", external: true }}
        secondaryCta={{ label: "Explore use cases", href: "/use-cases" }}
        highlights={[
          "Behavioural analytics",
          "Heatmaps & session replays",
          "11 behavioral signals",
          "AI-powered insights",
        ]}
        image="/Dashboard.png"
        imageAlt="DynoWeb Shopify analytics dashboard showing behavioural signals"
        imageLabel="Analytics dashboard"
      />

      <Section className="pb-16">
        <SectionHeading
          eyebrow="The category"
          title="What is a Shopify Analytics App?"
          subtitle="Merchants can gather, examine, and interpret information about visitor behavior, customer journeys, and store performance. Unlike conventional reporting tools that concentrate on traffic metrics, advanced analytics platforms offer deeper understanding of:"
        />
        <Card>
          <CheckList items={whatItIs} />
          <p className="mt-6 text-[0.97rem] leading-7 text-zinc-300">
            With the help of these insights, retailers can make data-driven choices that enhance customer
            satisfaction and boost sales.
          </p>
        </Card>
      </Section>

      <Section className="pb-16">
        <SectionHeading
          eyebrow="The gap"
          title="Why Traditional Analytics Aren't Enough"
          subtitle="Most analytics platforms answer how many visitors arrived, which pages were popular, and what your conversion rate was. They often fail to explain the questions that actually move revenue:"
        />
        <Card>
          <CheckList items={traditionalGaps} />
          <p className="mt-6 text-[0.97rem] leading-7 text-zinc-300">
            Without behavioural data, merchants are forced to guess instead of making well-informed
            optimization decisions.
          </p>
        </Card>
      </Section>

      <Section className="pb-16">
        <SectionHeading
          eyebrow="The problem with pageviews alone"
          title="Popularity isn't intent"
          subtitle="Pageviews can show popularity but can't reveal customer intent or frustration. Even if thousands of people visit a product page each month, pageview metrics won't show the problem if customers can't find shipping information or click the Add-to-Cart button. By showing how customers truly engage with your store, behavioural analytics fills this gap."
        />
      </Section>

      <Section className="pb-12">
        <SectionHeading
          eyebrow="The 11 signals"
          title="11 Behavioral Signals Every Shopify Store Should Track"
          subtitle="Pageviews tell you how many people arrived. These signals tell you what they did, where they struggled, and why they left."
        />
        <FeatureGrid items={signals} columns={3} />
      </Section>

      <Section className="pb-16">
        <SectionHeading
          eyebrow="Why behaviour analytics matters"
          title="Understand interaction, not just traffic"
          subtitle="Behaviour analytics seeks to understand how customers interact with your store rather than merely monitoring traffic. That lets merchants identify conversion blockers, improve customer journeys, reduce bounce rates, increase engagement, optimize product pages, and improve checkout performance. Understanding visitor intent leads directly to optimization decisions that affect revenue."
        />
      </Section>

      <FeatureRow
        eyebrow="Heatmaps"
        title="Visualize Customer Engagement"
        body={
          <p>
            A visual depiction of consumer activity on your website. Heatmaps help answer the questions
            traditional analytics can&rsquo;t, and surface the spots where layouts, content placement, and
            conversion-focused design can be improved.
          </p>
        }
        bullets={heatmapAnswers}
        image="/Heatmaps.png"
        imageAlt="DynoWeb heatmap visualization for a Shopify storefront"
        imageLabel="Heatmaps"
      />

      <FeatureRow
        reverse
        eyebrow="Session replays"
        title="Watch Real Customer Journeys"
        body={
          <p>
            Merchants can observe real visitor sessions and learn how customers move through their store.
            These recordings reveal user frustrations, navigation issues, checkout problems, product page
            confusion, and mobile usability concerns. Instead of speculating why conversions are low, you can
            see the precise customer experience.
          </p>
        }
        bullets={[
          "Replay real visits — desktop and mobile",
          "See the exact moment a shopper hesitates or drops",
          "Jump from a behavioral metric straight into matching replays",
        ]}
        image="/sessionReplay.png"
        imageAlt="DynoWeb session replay of a real Shopify shopper visit"
        imageLabel="Session replay"
      />

      <Section className="pb-16">
        <SectionHeading
          eyebrow="Shopify reporting tool"
          title="Reporting That Drives Smarter Decisions"
          subtitle="A robust Shopify reporting tool should do more than just produce dashboards and charts. It should help merchants answer the business questions that determine where to invest next:"
        />
        <Card>
          <CheckList items={reportingQuestions} />
          <p className="mt-6 text-[0.97rem] leading-7 text-zinc-300">
            Linking behavioural data to business outcomes lets merchants focus on the enhancements that lead
            to quantifiable growth.
          </p>
        </Card>
      </Section>

      <FeatureRow
        eyebrow="AI insights"
        title="AI-Powered Shopify Data Insights"
        body={
          <p>
            Analyzing thousands of customer interactions manually can be overwhelming. DynoWeb uses AI to do
            the heavy lifting — so merchants spend less time digging through reports and more time
            implementing the changes that increase revenue.
          </p>
        }
        bullets={aiCapabilities}
        image="/CRO-img1.png"
        imageAlt="AI-powered Shopify data insights dashboard"
        imageLabel="AI insights"
      />

      <Section className="pb-12">
        <SectionHeading
          eyebrow="Key benefits"
          title="What merchants get with DynoWeb"
          subtitle="Behavioural insight, revenue protection, and faster decisions — in one Shopify-native app."
        />
        <FeatureGrid items={benefits} columns={3} />
      </Section>

      <Section className="pb-16">
        <SectionHeading
          eyebrow="More than a reporting tool"
          title="Why DynoWeb is More Than a Shopify Analytics App"
          subtitle="A lot of analytics platforms only provide data reports. DynoWeb goes further — helping merchants comprehend visitor behavior, visualize engagement patterns, identify conversion barriers, detect user frustration, and act on practical optimization recommendations. Rather than merely displaying metrics, DynoWeb explains what those metrics mean and what to do next."
        />
      </Section>

      <FAQ title="Shopify analytics — frequently asked" items={faqs} />

      <RelatedLinks
        title="Explore the analytics toolkit"
        links={[
          { label: "Shopify Heatmaps", href: "/shopify-heatmaps", description: "Visual click & scroll data." },
          { label: "Session Replay", href: "/shopify-session-replay", description: "Watch real customer visits." },
          {
            label: "Revenue Attribution",
            href: "/features/revenue-attribution",
            description: "Track what actually drives sales.",
          },
          {
            label: "No-code Analytics Setup",
            href: "/shopify-analytics-no-code",
            description: "Live in 5 minutes, zero code.",
          },
          {
            label: "Scroll Depth Analytics",
            href: "/blog/shopify-scroll-depth-analytics",
            description: "Find where visitors stop reading.",
          },
          { label: "Dead Clicks", href: "/blog/shopify-dead-clicks", description: "What broken UX signals look like." },
        ]}
      />

      <CTA
        title="Turn Behavioral Insights Into Revenue Growth"
        body="A Shopify store cannot be grown by traffic alone — knowing how customers behave does. With DynoWeb's behavioural analytics, heatmaps, session replays, AI-powered insights, and reporting tools, merchants find revenue leaks and enhance store performance."
        primaryLabel="See Live Demo"
        secondary={{ label: "See pricing", href: "/pricing" }}
      />
    </MarketingShell>
  );
}
