import type { Metadata } from "next";
import {
  Play,
  MousePointerClick,
  Route,
  ShieldCheck,
  Smartphone,
  Filter,
  AlertTriangle,
  Hand,
  Compass,
  ShoppingCart,
  CreditCard,
  Eye,
  Search,
  TrendingUp,
  LayoutGrid,
  BarChart3,
  Wrench,
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
  title: "Shopify Session Replay — Watch Real Customer Sessions on Your Shopify Store",
  description:
    "See exactly how visitors experience your store. Replay real customer sessions, find friction, dead clicks, and drop-off points, and turn behavior into revenue. Native Shopify app, no code needed.",
  alternates: { canonical: "https://www.dynoweb.app/shopify-session-replay" },
  openGraph: {
    title: "Shopify Session Replay — Watch Real Customer Sessions on Your Shopify Store",
    description:
      "DynoWeb session replay for Shopify: watch real customer sessions, identify conversion barriers, and turn friction into fixes.",
    url: "https://www.dynoweb.app/shopify-session-replay",
    siteName: "DynoWeb",
    type: "article",
  },
};

const whatRecorded = [
  { icon: MousePointerClick, tag: "Cursor", title: "Mouse movements", body: "Every cursor path on desktop — where shoppers hover, hesitate, and click." },
  { icon: Hand, tag: "Touch", title: "Clicks and taps", body: "Click and tap targets on every device, including the ones that miss entirely." },
  { icon: Eye, tag: "Scroll", title: "Scrolling behavior", body: "How far visitors scroll on each page, and which sections they stop on." },
  { icon: Route, tag: "Journey", title: "Page navigation", body: "The full page-to-page path from landing to exit, with cart and checkout highlighted." },
  { icon: ShoppingCart, tag: "Cart", title: "Cart interactions", body: "Add-to-cart events, quantity changes, removals, and cart drawer behavior." },
  { icon: CreditCard, tag: "Checkout", title: "Checkout activity", body: "Form interactions, field errors, and where shoppers stall before completing a purchase." },
  { icon: Smartphone, tag: "Mobile", title: "Mobile gestures", body: "Swipes, pinches, and taps on phones and tablets where most Shopify traffic lives." },
];

const learnFromReplays = [
  { icon: Compass, tag: "Behavior", title: "Understand customer behavior", body: "A comprehensive picture of how customers engage with your store. Observe where they click, what draws them in, and how they proceed with their purchase." },
  { icon: AlertTriangle, tag: "Friction", title: "Identify friction points", body: "Not every customer has the same experience. Session recordings surface instances of uncertainty, hesitancy, or annoyance that might keep clients from finishing a transaction." },
  { icon: Route, tag: "Drop-off", title: "Discover drop-off points", body: "Recognize the precise point at which customers depart — whether abandonment occurs on product pages, in the cart, or during checkout." },
  { icon: Smartphone, tag: "Mobile", title: "Improve mobile experiences", body: "Mobile shoppers frequently exhibit different behaviors. Examine taps, scrolling habits, and mobile navigation problems that affect conversion rates." },
  { icon: LayoutGrid, tag: "Iterate", title: "Validate design changes", body: "Session recordings track customer reactions to new layouts, calls to action, navigation structures, and checkout experiences both before and after updates." },
];

const commonIssues = [
  { icon: MousePointerClick, tag: "Dead clicks", title: "Dead clicks", body: "When users click on elements expecting an action but nothing happens. Frequently indicates usability issues that lead to annoyance." },
  { icon: AlertTriangle, tag: "Rage clicks", title: "Rage clicks", body: "Repeated clicks on the same element typically suggest users are having trouble finishing a task or think something is broken." },
  { icon: Compass, tag: "Navigation", title: "Navigation confusion", body: "Products, shipping details, or key pages may be difficult to locate. Session replays surface navigation bottlenecks and improve site organization." },
  { icon: ShoppingCart, tag: "Cart", title: "Cart abandonment", body: "Observe what consumers do right before they abandon. These insights help identify hidden friction and opportunities to increase checkout completion." },
  { icon: CreditCard, tag: "Checkout", title: "Checkout friction", body: "Optimize the purchase journey by seeing where customers hesitate, make mistakes, or give up on the checkout process." },
];

const keyFeatures = [
  { icon: Play, tag: "Recording", title: "Full session recordings", body: "Keep track of every visitor's journey from landing page to exit." },
  { icon: Route, tag: "Journey", title: "Visitor journey tracking", body: "See how users navigate between pages and identify which paths lead to conversions versus abandonment." },
  { icon: Smartphone, tag: "Mobile", title: "Mobile session replay", body: "Examine consumer interactions on tablets and smartphones; recognise mobile-specific problems." },
  { icon: Filter, tag: "Filters", title: "Behavior filtering", body: "Quickly filter recordings based on events like cart abandonment, checkout activity, device type, or conversion status." },
  { icon: ShieldCheck, tag: "Privacy", title: "Privacy-focused tracking", body: "Gather behavioural insights while adhering to data regulations and safeguarding consumer privacy." },
];

const howDynoWebHelps = [
  { icon: Play, tag: "Watch", title: "Watch real customer sessions", body: "Replay visitor journeys to learn how customers engage with your store and find barriers to conversions." },
  { icon: Search, tag: "Diagnose", title: "Find conversion blockers", body: "Find dead clicks, rage clicks, unclear navigation, and checkout friction quickly — before they affect sales." },
  { icon: Wrench, tag: "Improve", title: "Improve customer experiences", body: "Optimise product pages, navigation, mobile experiences, and checkout flows with actual behavioural data." },
  { icon: BarChart3, tag: "Decide", title: "Make data-driven decisions", body: "Go beyond presumptions and make adjustments based on real-world consumer interactions." },
  { icon: TrendingUp, tag: "Convert", title: "Increase conversion rates", body: "Lower abandonment and increase the number of visitors who become customers by identifying and resolving UX issues." },
];

const trackingQuestions = [
  "Why are visitors leaving without purchasing?",
  "Which pages create the most friction?",
  "What prevents customers from reaching checkout?",
  "How do mobile users behave differently?",
  "Which customer journeys lead to conversions?",
];

const faqs = [
  {
    q: "What is Shopify session replay?",
    a: "Shopify session replay is a tool that records visitor interactions on your store. Merchants replay customer sessions to better understand behaviour, engagement, and the barriers stopping shoppers from converting.",
  },
  {
    q: "Does session replay affect website performance?",
    a: "Modern session replay tools are made to collect useful behavioural data while having little effect on store performance. DynoWeb's tracker is lightweight and loads asynchronously, so page speed and Core Web Vitals stay intact.",
  },
  {
    q: "Can I watch mobile visitor sessions?",
    a: "Yes. DynoWeb captures desktop and mobile sessions, enabling retailers to examine cross-device interactions and surface mobile-specific friction that desktop testing never reveals.",
  },
  {
    q: "How do session recordings help improve conversions?",
    a: "Session recordings highlight usability problems, friction points, and abandonment triggers that might keep customers from finishing purchases. By acting on what you see, you remove the exact barriers blocking revenue.",
  },
  {
    q: "Is session replay useful for small Shopify stores?",
    a: "Absolutely. Understanding visitor behaviour and optimising the customer journey based on actual interactions helps even less busy stores. A single fixed friction point can change the conversion curve at any traffic level.",
  },
];

export default function ShopifySessionReplayPage() {
  return (
    <MarketingShell
      jsonLd={[
        faqJsonLd(faqs),
        breadcrumbJsonLd([
          { name: "Home", path: "" },
          { name: "Shopify Session Replay", path: "/shopify-session-replay" },
        ]),
      ]}
    >
      <Hero
        eyebrow="Pillar guide — Shopify session replay"
        title="See Exactly How Visitors Experience Your Store"
        lead="Visitors leaving your Shopify store without making a purchase is a big challenge. Is it trust, confusion, or something else? Traditional analytics tell you how many people visited and which pages they viewed — but they rarely explain why customers abandon carts, leave product pages, or fail to complete checkout. Session replay lets you monitor real-world interactions, identify usability issues, and improve the shopping experience. DynoWeb lets merchants replay customer sessions and identify conversion opportunities without writing a single line of code."
        primaryCta={{ label: "Install free", href: "https://apps.shopify.com/dynoweb" }}
        secondaryCta={{ label: "See the replay feature", href: "/features/session-replay" }}
        highlights={["Watch real sessions", "Mobile + desktop", "Privacy-focused", "Behavior filtering"]}
        image="/sessionReplay.png"
        imageAlt="DynoWeb session replay player showing a recorded Shopify visit"
        imageLabel="Session replay"
      />

      <Section className="pb-12">
        <SectionHeading
          eyebrow="What it is"
          title="What is Shopify session replay?"
          subtitle="A behavioral analytics tool that records and replays visitor interactions with your store."
        />
        <Card>
          <p className="text-zinc-300">
            Shopify session replay documents the actions visitors take on your store — mouse movements, clicks and taps,
            scrolling behavior, page navigation, cart interactions, checkout activity, and mobile gestures.
          </p>
          <p className="mt-4 text-zinc-300">
            By replaying customer sessions, merchants gain a better understanding of how visitors interact with their
            website and where they encounter barriers during the purchasing process.
          </p>
        </Card>
        <div className="mt-6">
          <FeatureGrid columns={3} items={whatRecorded} />
        </div>
      </Section>

      <Section className="pb-12">
        <SectionHeading
          eyebrow="The analytics gap"
          title="Why traditional analytics miss the full picture"
          subtitle="Numbers tell you what happened. Session replay shows you why."
        />
        <Card>
          <p className="text-zinc-300">
            Analytics platforms can tell you how many visitors landed on a page, which traffic sources perform best, your
            bounce rate, and your conversion rate. However, they cannot show why customers abandon carts, why users
            struggle to find information, why visitors leave product pages, or why mobile shoppers fail to convert.
          </p>
          <p className="mt-4 text-zinc-300">
            Session replay closes this gap by revealing actual customer behavior in context.
          </p>
        </Card>
      </Section>

      <FeatureRow
        eyebrow="From observation to revenue"
        title="How Shopify session recordings help increase conversions"
        body={
          <>
            <p>
              Merchants can find problems that might otherwise go unnoticed by observing real customer interactions.
              Session recordings can reveal confusing navigation, broken buttons, missing product information, poor
              mobile experiences, checkout friction, and technical issues affecting conversions.
            </p>
            <p>
              By analyzing these challenges, retailers can implement focused enhancements that result in improved user
              experiences and increased revenue.
            </p>
          </>
        }
        bullets={[
          "Surface confusing navigation and broken buttons",
          "Spot missing product information and technical issues",
          "Improve mobile experiences and checkout flow",
        ]}
        image="/sessionReplay.png"
        imageAlt="DynoWeb session replay revealing on-store friction"
        imageLabel="Session replay"
      />

      <Section className="pb-12">
        <SectionHeading
          eyebrow="What you'll learn"
          title="What can you learn from session replays?"
          subtitle="Every replay turns one anonymous visitor into a story you can act on."
        />
        <FeatureGrid columns={3} items={learnFromReplays} />
      </Section>

      <Section className="pb-12">
        <SectionHeading
          eyebrow="Common issues"
          title="What session replays uncover"
          subtitle="The recurring problems that drain Shopify revenue — and that replay surfaces in minutes."
        />
        <FeatureGrid columns={3} items={commonIssues} />
      </Section>

      <Section className="pb-12">
        <SectionHeading
          eyebrow="Inside DynoWeb"
          title="Key features of DynoWeb session replay"
          subtitle="Everything you need to record, filter, and act on real shopper behavior."
        />
        <FeatureGrid columns={2} items={keyFeatures} />
      </Section>

      <FeatureRow
        reverse
        eyebrow="Find the session"
        title="Filter thousands of sessions down to the ones worth watching"
        body={
          <p>
            Every recorded session lands in a sortable table with its duration, device, signals, and status. Filter by
            cart abandonment, checkout activity, device type, or conversion status so the recordings worth watching rise
            to the top — you never have to wade through noise.
          </p>
        }
        bullets={[
          "Filter by cart abandonment, checkout activity, or device",
          "See status, device, and signals at a glance",
          "Open any recording in one click",
        ]}
        image="/replayTable.png"
        imageAlt="DynoWeb session replay table listing recorded Shopify sessions"
        imageLabel="Replay sessions"
      />

      <FeatureRow
        eyebrow="Follow the journey"
        title="See the full path behind every drop-off"
        body={
          <p>
            Each replay sits inside the visitor&rsquo;s complete page-to-page flow. Spot exactly where the journey
            breaks, where shoppers loop back in confusion, and which step precedes the exit.
          </p>
        }
        bullets={[
          "Step-by-step flow from landing to exit",
          "Pinpoint the action right before abandonment",
          "Jump from the flow straight into the replay",
        ]}
        image="/sessionFlow.png"
        imageAlt="DynoWeb session flow showing the page-to-page journey of a visitor"
        imageLabel="Session flow"
      />

      <Section className="pb-12">
        <SectionHeading
          eyebrow="Better decisions"
          title="Shopify session tracking for better decision-making"
          subtitle="Data becomes much more valuable when context is added."
        />
        <Card>
          <p className="text-zinc-300">Session tracking enables merchants to answer:</p>
          <div className="mt-4">
            <CheckList items={trackingQuestions} />
          </div>
          <p className="mt-6 text-zinc-300">
            Merchants can use these insights to prioritize the changes that have a direct impact on sales and customer
            satisfaction.
          </p>
        </Card>
      </Section>

      <Section className="pb-12">
        <SectionHeading
          eyebrow="Stronger together"
          title="Session replay + heatmaps = complete visibility"
          subtitle="Two views of the same shopper — the macro pattern and the individual story."
        />
        <Card>
          <p className="text-zinc-300">
            Heatmaps offer a comprehensive view of visitor behavior across your store; session replays display
            individual customer journeys. Together, they help merchants understand customer engagement, identify ignored
            content, optimise CTAs, improve page layouts, and reduce conversion barriers.
          </p>
          <p className="mt-4 text-zinc-300">
            A thorough grasp of how customers engage with your Shopify store comes from combining the two tools.
          </p>
        </Card>
      </Section>

      <Section className="pb-12">
        <SectionHeading
          eyebrow="Why merchants choose DynoWeb"
          title="How DynoWeb helps Shopify merchants"
          subtitle="From watching the first replay to shipping the fix that lifts conversion."
        />
        <FeatureGrid columns={3} items={howDynoWebHelps} />
      </Section>

      <Section className="pb-16">
        <SectionHeading
          eyebrow="Visibility over guesswork"
          title="Why Shopify merchants use session replay"
        />
        <Card>
          <p className="text-zinc-300">
            Unlike traditional analytics, session replay provides visibility. Instead of asking &ldquo;why are customers
            leaving?&rdquo;, you can watch what happened before they left.
          </p>
          <p className="mt-4 text-zinc-300">
            This direct insight enables retailers to prioritise improvements, find issues more quickly, and design more
            seamless shopping experiences that increase sales.
          </p>
        </Card>
      </Section>

      <FAQ title="Session replay — frequently asked" items={faqs} />

      <RelatedLinks
        title="Explore the toolkit"
        links={[
          { label: "Session Replay Feature", href: "/features/session-replay", description: "Record and filter every visit." },
          { label: "Shopify Heatmaps", href: "/shopify-heatmaps", description: "See where customers click & scroll." },
          { label: "Cart Overview", href: "/features/cart-overview", description: "Find why customers abandon carts." },
          { label: "Rage Clicks", href: "/blog/shopify-rage-clicks", description: "What they are & how to fix them." },
          { label: "DynoWeb vs Hotjar", href: "/vs/hotjar", description: "Observation vs action." },
          { label: "Shopify CRO Guide", href: "/shopify-cro", description: "The complete optimization loop." },
        ]}
      />

      <CTA
        title="Start watching real customer sessions today"
        body="Every encounter with a visitor tells a story. With DynoWeb, monitor client interactions, pinpoint problems, enhance experiences, and make more informed optimisation choices that increase sales."
        primaryLabel="Install free"
        secondary={{ label: "See pricing", href: "/pricing" }}
      />
    </MarketingShell>
  );
}
