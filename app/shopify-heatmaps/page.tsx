import type { Metadata } from "next";
import {
  MousePointerClick,
  MoveVertical,
  Eye,
  Smartphone,
  Sparkles,
  Brain,
  LineChart,
  BarChart3,
  Wrench,
  Target,
  Filter,
  Layers,
  TrendingUp,
  AlertTriangle,
  EyeOff,
  Compass,
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
  title: "Shopify Heatmaps Built for Merchants, Not Analysts",
  description:
    "Understand exactly how customers interact with your Shopify store. DynoWeb's heatmap app shows where visitors click, how far they scroll, and what grabs their attention — so you can fix hidden UX problems and lift conversions.",
  alternates: { canonical: "https://www.dynoweb.app/shopify-heatmaps" },
  openGraph: {
    title: "Shopify Heatmaps Built for Merchants, Not Analysts",
    description:
      "See where customers click, how far they scroll, and what holds their attention on your Shopify store. Click, scroll, and attention heatmaps plus AI-powered insights from DynoWeb.",
    url: "https://www.dynoweb.app/shopify-heatmaps",
    siteName: "DynoWeb",
    type: "article",
  },
};

const heatmapTypes = [
  {
    icon: MousePointerClick,
    tag: "Click heatmap",
    title: "Shopify Click Heatmap",
    body: (
      <>
        <p>
          The precise locations where customers click on your store pages are displayed by a click heatmap. This helps
          retailers determine which navigation elements, buttons, links, and images get the most interaction — and
          identify distracting components that divert attention from crucial conversion actions.
        </p>
        <ul className="mt-4 space-y-2">
          <li>— Optimise CTA placement</li>
          <li>— Improve navigation structure</li>
          <li>— Identify dead clicks</li>
          <li>— Understand user intent</li>
          <li>— Increase engagement on important elements</li>
        </ul>
      </>
    ),
  },
  {
    icon: MoveVertical,
    tag: "Scroll heatmap",
    title: "Shopify Scroll Heatmap",
    body: (
      <>
        <p>
          The distance a visitor travels down a page before departing is displayed on a scroll heatmap. Understanding
          scroll behaviour tells you whether users are reaching key content — product benefits, reviews, FAQs, shipping
          details, and purchase buttons.
        </p>
        <ul className="mt-4 space-y-2">
          <li>— Improve content positioning</li>
          <li>— Identify content fatigue</li>
          <li>— Increase visibility of key offers</li>
          <li>— Optimise page length</li>
          <li>— Improve mobile experiences</li>
        </ul>
      </>
    ),
  },
  {
    icon: Eye,
    tag: "Attention heatmap",
    title: "Shopify Attention Heatmap",
    body: (
      <>
        <p>
          An attention heatmap highlights areas that attract the highest levels of user engagement. These insights help
          merchants understand where visitors focus their attention — and which sections are being overlooked.
        </p>
        <ul className="mt-4 space-y-2">
          <li>— Improve page layouts</li>
          <li>— Optimise content hierarchy</li>
          <li>— Increase engagement</li>
          <li>— Highlight important products</li>
          <li>— Reduce distractions</li>
        </ul>
      </>
    ),
  },
];

const reveals = [
  {
    icon: AlertTriangle,
    title: "Hidden Conversion Barriers",
    body: "Visitors frequently cause friction without merchants being aware. Heatmaps show interaction patterns that point to usability problems, hesitation, or confusion that affect conversions.",
  },
  {
    icon: Target,
    title: "Underperforming Calls-to-Action",
    body: "If customers aren't clicking your Add-to-Cart button or promotional offers, heatmaps promptly reveal the issue and direct optimisation efforts.",
  },
  {
    icon: EyeOff,
    title: "Content That Gets Ignored",
    body: "Many stores spend a lot on product descriptions, promotional sections, and banners that customers never see. Heatmaps make it clear what is and isn't generating engagement.",
  },
  {
    icon: Smartphone,
    title: "Mobile User Behavior",
    body: "Desktop and mobile visitors engage in different ways. Heatmaps help retailers understand device engagement, tap patterns, and scrolling habits.",
  },
];

const conversionLifts = [
  {
    icon: Layers,
    title: "Better Product Pages",
    body: "Heatmaps help retailers see whether consumers are looking at product photos, reading descriptions, interacting with reviews, and noting purchasing details. Position important information where it's most likely to influence buying decisions.",
  },
  {
    icon: Compass,
    title: "Improved User Experience",
    body: "Streamline navigation, lower friction, and create a more intuitive shopping experience. Minor UX enhancements often lift conversion rates significantly.",
  },
  {
    icon: Brain,
    title: "Smarter Design Decisions",
    body: "Use real behavioural data from actual visitors to inform design decisions instead of depending on conjecture or opinions.",
  },
  {
    icon: TrendingUp,
    title: "More Effective Marketing Campaigns",
    body: "Assess how visitors interact with landing pages, promotional banners, and special offers to enhance campaign performance.",
  },
];

const dynowebFeatures = [
  {
    icon: LineChart,
    title: "Real-Time Behavioral Tracking",
    body: "Observe how customers engage with your heatmap for Shopify store as behavioural data is gathered. No waiting for long reports.",
  },
  {
    icon: MousePointerClick,
    title: "Click Heatmaps",
    body: "Visualise user interaction with buttons, menus, banners, images, and calls to action to find areas for optimisation.",
  },
  {
    icon: MoveVertical,
    title: "Scroll Tracking",
    body: "Determine whether important conversion elements are being viewed and gauge engagement with your content.",
  },
  {
    icon: Smartphone,
    title: "Mobile & Desktop Analysis",
    body: "Analyse consumer behaviour across devices and pinpoint mobile UX issues.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Insights",
    body: "Go beyond simple heatmap data with intelligent recommendations that enhance store performance and conversions.",
  },
];

const decisionHelpers = [
  {
    icon: Target,
    title: "Identify Conversion Opportunities",
    body: "Heatmaps reveal where visitors are most engaged so merchants can optimise layouts and enhance conversion paths.",
  },
  {
    icon: Wrench,
    title: "Reduce User Frustration",
    body: "Surface ignored elements, dead clicks, and confusing sections to enhance the overall shopping experience.",
  },
  {
    icon: TrendingUp,
    title: "Increase Revenue",
    body: "Minor adjustments based on behavioural insights can significantly lift engagement, conversions, and total revenue.",
  },
  {
    icon: Layers,
    title: "Optimise Every Page",
    body: "From product pages to checkout processes, continuous improvement informed by heatmap data.",
  },
];

const comparisonRows: { traditional: string; heatmaps: string }[] = [
  { traditional: "Shows traffic numbers", heatmaps: "Shows user behavior" },
  { traditional: "Measures pageviews", heatmaps: "Visualises engagement" },
  { traditional: "Tracks conversions", heatmaps: "Explains conversion issues" },
  { traditional: "Reports bounce rates", heatmaps: "Reveals friction points" },
  { traditional: "Provides metrics", heatmaps: "Provides context" },
];

const faqs = [
  {
    q: "What is a Shopify heatmap app?",
    a: "A Shopify heatmap app visually tracks customer interactions like clicks, scrolling, and engagement patterns — helping merchants maximise UX and boost conversions.",
  },
  {
    q: "How do click heatmaps help increase sales?",
    a: "Click heatmaps highlight elements that draw attention and those that are ignored, helping merchants enhance CTAs and optimise page layouts.",
  },
  {
    q: "What is a scroll heatmap?",
    a: "A scroll heatmap displays the distance visitors travel down a page, so merchants can ascertain whether important content is being viewed.",
  },
  {
    q: "Can heatmaps improve Shopify conversion rates?",
    a: "Yes. Based on actual visitor behaviour, heatmaps help identify usability problems, optimise customer journeys, and enhance page performance.",
  },
  {
    q: "Are Shopify heatmaps useful for mobile optimisation?",
    a: "Absolutely. Merchants can enhance navigation, engagement, and mobile conversions by seeing how mobile users interact with your store.",
  },
];

export default function ShopifyHeatmapsPage() {
  return (
    <MarketingShell
      jsonLd={[
        faqJsonLd(faqs),
        breadcrumbJsonLd([
          { name: "Home", path: "" },
          { name: "Shopify Heatmaps", path: "/shopify-heatmaps" },
        ]),
      ]}
    >
      <Hero
        eyebrow="Pillar guide — Shopify heatmap app"
        title="Understand Exactly How Customers Interact With Your Shopify Store"
        lead="Do customers notice your Add-to-Cart button? Are they scrolling far enough to see your product benefits? Which sections are getting ignored completely? Most Shopify merchants know how many visitors their store receives — far fewer know what those visitors actually do once they arrive. Traditional analytics tools don't visualise behaviour; they offer numbers and charts. A Shopify heatmap app fills the gap by showing precisely where visitors click, how far they scroll, and what grabs their attention. DynoWeb's Shopify heatmaps help merchants identify hidden UX problems, optimise conversion paths, and enhance customer experiences — see exactly what's happening on each page instead of speculating about why visitors aren't converting."
        primaryCta={{ label: "Start free trial", href: "https://apps.shopify.com/dynoweb", external: true }}
        secondaryCta={{ label: "See the heatmaps feature", href: "/features/heatmaps" }}
        highlights={["Click, scroll & attention", "Mobile + desktop", "Real-time", "AI-powered insights"]}
        image="/Heatmaps.png"
        imageAlt="DynoWeb heatmap view with click hotspots over a Shopify product page"
        imageLabel="Heatmap preview"
      />

      <Section className="pb-12">
        <SectionHeading
          eyebrow="The basics"
          title="What Is a Shopify Heatmap App?"
          subtitle="The way customers engage with your store is shown graphically by a Shopify heatmap app. Heatmaps gather behavioural data from actual users and display which elements garner attention and which are disregarded."
        />
        <Card>
          <p className="text-zinc-300">
            They help merchants make more informed decisions about layout, content placement, and conversion
            optimisation — converting complex user behaviour into clear visual reports. Instead of depending only on
            pageviews and bounce rates, heatmaps offer context for visitor actions.
          </p>
        </Card>
      </Section>

      <Section className="pb-12">
        <SectionHeading
          eyebrow="Why it matters"
          title="Why Shopify Merchants Need Heatmaps"
          subtitle="Traditional analytics dashboards still conceal a lot of conversion problems."
        />
        <Card>
          <CheckList
            items={[
              "Visitors may never notice your Add-to-Cart button.",
              "Product details might be positioned too low on the page.",
              "Important trust signals could be getting ignored.",
              "Mobile users may struggle to interact with key elements.",
            ]}
          />
          <p className="mt-6 text-zinc-300">
            Heatmaps instantly highlight these problems, enabling merchants to optimise pages based on real user
            behaviour rather than conjecture.
          </p>
        </Card>
      </Section>

      <Section className="pb-12">
        <SectionHeading
          eyebrow="Three views, one picture"
          title="Types of Shopify Heatmaps"
          subtitle="Each map answers a different question. Together they tell you where attention goes, what gets seen, and where shoppers get stuck."
        />
        <FeatureGrid columns={3} items={heatmapTypes} />
      </Section>

      <Section className="pb-12">
        <SectionHeading
          eyebrow="What heatmaps surface"
          title="What Shopify Heatmaps Reveal"
          subtitle="Heatmaps turn invisible behavior into evidence you can act on — across desktop and mobile."
        />
        <FeatureGrid columns={2} items={reveals} />
      </Section>

      <Section className="pb-12">
        <SectionHeading
          eyebrow="Why it matters for CRO"
          title="How Heatmaps Improve Shopify Conversion Rates"
          subtitle="Behavioural evidence beats opinion. Use real visitor data to inform every layout, copy, and design decision."
        />
        <FeatureGrid columns={2} items={conversionLifts} />
      </Section>

      <FeatureRow
        eyebrow="Click maps"
        title="See exactly where shoppers tap — and mis-tap"
        body={
          <p>
            The click heatmap overlays every interaction onto your real page. Hot zones show what earns engagement;
            clusters on non-clickable elements reveal the false affordances quietly frustrating shoppers. It&rsquo;s the
            fastest way to see whether your Add-to-Cart is actually getting the attention it needs.
          </p>
        }
        bullets={[
          "Every click and tap, aggregated onto the live page",
          "Spot non-interactive elements shoppers expect to work",
          "Confirm your key CTAs earn the engagement they should",
        ]}
        image="/clickHeatmap.png"
        imageAlt="DynoWeb click heatmap overlay on a Shopify product page"
        imageLabel="Click heatmap"
      />

      <FeatureRow
        reverse
        eyebrow="Scroll maps"
        title="Find the line where shoppers stop reading"
        body={
          <p>
            The scroll heatmap shows the exact depth where most visitors stop. The most common discovery: your strongest
            proof and even your Add-to-Cart sit below where the majority drop off — invisible to most shoppers. Now you
            know exactly what to move up.
          </p>
        }
        bullets={[
          "See the attention cliff on every template",
          "Engagement, above-fold, and friction rates at a glance",
          "Raise high-value content above where shoppers stop",
        ]}
        image="/scrollHeatmap.png"
        imageAlt="DynoWeb scroll depth heatmap showing where visitors stop scrolling"
        imageLabel="Scroll heatmap"
      />

      <FeatureRow
        eyebrow="Beyond heatmaps"
        title="Shopify UX Analytics Beyond Heatmaps"
        body={
          <p>
            Heatmaps offer useful visual insights, but they work best when paired with deeper behavioural analytics. A
            detailed picture of consumer behaviour is produced by combining behavioural and visual analytics — DynoWeb
            helps merchants understand where visitors click, how far they scroll, what captures attention, where users
            abandon pages, and which paths lead to conversions.
          </p>
        }
        bullets={[
          "Where visitors click",
          "How far they scroll",
          "What captures attention",
          "Where users abandon pages",
          "Which paths lead to conversions",
        ]}
        image="/CRO-img2.png"
        imageAlt="DynoWeb behavioural breakdown panel for a Shopify store"
        imageLabel="Behavior breakdown"
      />

      <Section className="pb-12">
        <SectionHeading
          eyebrow="Built in"
          title="Key Features of DynoWeb Heatmaps"
          subtitle="Everything you need to read behaviour clearly and act on it — without an analyst on staff."
        />
        <FeatureGrid columns={3} items={dynowebFeatures} />
      </Section>

      <Section className="pb-12">
        <SectionHeading
          eyebrow="Side-by-side"
          title="Heatmaps vs Traditional Shopify Analytics"
          subtitle="Numbers tell you what happened. Heatmaps tell you why."
        />
        <Card className="overflow-hidden p-0">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] text-left text-sm text-zinc-300">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03]">
                  <th
                    className="px-5 py-4 text-left font-extrabold uppercase tracking-[0.18em] text-zinc-500"
                    style={{ fontSize: "0.7rem" }}
                  >
                    Traditional Analytics
                  </th>
                  <th
                    className="px-5 py-4 text-left font-extrabold uppercase tracking-[0.18em] text-[#6eb0ff]"
                    style={{ fontSize: "0.7rem" }}
                  >
                    Shopify Heatmaps
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.traditional}
                    className={`border-b border-white/[0.06] ${i % 2 === 0 ? "bg-white/[0.01]" : ""}`}
                  >
                    <td className="px-5 py-3 text-zinc-400">{row.traditional}</td>
                    <td className="px-5 py-3 text-zinc-200">{row.heatmaps}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
        <p className="mt-5 text-[0.95rem] leading-7 text-zinc-400">
          Traditional analytics reveal what transpired. Heatmaps explain why.
        </p>
      </Section>

      <Section className="pb-12">
        <SectionHeading
          eyebrow="From insight to action"
          title="How DynoWeb Helps Merchants Make Better Decisions"
          subtitle="Stop guessing. Use behavioural evidence to prioritise the changes that actually move revenue."
        />
        <FeatureGrid columns={2} items={decisionHelpers} />
      </Section>

      <Section className="pb-12">
        <SectionHeading
          eyebrow="Built for merchants"
          title="Why Shopify Merchants Choose DynoWeb"
        />
        <Card>
          <p className="text-zinc-300">
            DynoWeb was created especially for Shopify merchants who don&rsquo;t want overwhelming analytics dashboards
            but rather actionable insights. With heatmaps, behavior tracking, AI-powered suggestions, and
            conversion-focused reporting, merchants quickly determine what&rsquo;s working, what isn&rsquo;t, and what
            to optimise next.
          </p>
          <p className="mt-4 text-zinc-300">
            Focus on the adjustments that have the biggest revenue impact instead of devoting hours to report analysis.
          </p>
          <div className="mt-6">
            <CheckList
              items={[
                "Click, scroll, and attention heatmaps in one place",
                "AI-powered suggestions tied to the patterns the maps reveal",
                "Mobile and desktop behaviour, side by side",
                "Real-time data — no waiting for long reports",
              ]}
            />
          </div>
        </Card>
      </Section>

      <FAQ title="Shopify heatmaps — frequently asked" items={faqs} />

      <RelatedLinks
        title="Explore the toolkit"
        links={[
          { label: "Heatmaps Feature", href: "/features/heatmaps", description: "Visual click & scroll data." },
          { label: "Session Replay", href: "/shopify-session-replay", description: "Watch the sessions behind the map." },
          { label: "Complete Heatmap Guide", href: "/blog/shopify-heatmap-guide", description: "Read maps and act on the data." },
          { label: "Scroll Depth Analytics", href: "/blog/shopify-scroll-depth-analytics", description: "Where visitors stop reading." },
          { label: "DynoWeb vs Microsoft Clarity", href: "/vs/microsoft-clarity", description: "Beyond free heatmaps." },
          { label: "Shopify CRO Guide", href: "/shopify-cro", description: "The complete optimization loop." },
        ]}
      />

      <CTA
        title="Turn Customer Behavior Into Better Conversions"
        body="Every click, scroll, and interaction tells you something about your customers' experience. DynoWeb's Shopify heatmap app helps retailers find untapped opportunities, remove obstacles, and optimise their store using actual consumer behaviour."
        primaryLabel="Start free trial"
        secondary={{ label: "See pricing", href: "/pricing" }}
      />
    </MarketingShell>
  );
}
