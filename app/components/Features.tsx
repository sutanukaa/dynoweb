"use client";
import { useState, useRef, useEffect } from "react";
import LightRays from "@/components/LightRays";

const mockupImgPaths = [
  "/Dashboard.png",
  "/Heatmaps.png",
  "/Replays.png",
  "/AISuggestions.png",
  "/CROReport.png",
  "/RevenueAttribution.png",
  "/CartOverview.png",
  "/Journeys.png",
  "/Referrers.png",
  "/SmartNudge.png",
  "/DynoAgent.png",
  "/MCP-feature.png",
  "/Impact.png",
  "/SEOAutopilot.png",
  "/storefrontSpeed.png",
];

interface Bullet { title: string; desc: string; }
interface Feature {
  id: string; tab: string; headline: string; subline: string;
  bullets: Bullet[]; caption: string; videoSrc: string; icon: React.ReactNode;
}

const features: Feature[] = [
  {
    id: "dashboard", tab: "Dashboard",
    headline: "What DynoWeb Earned You —\nAnd What to Fix Next",
    subline: "The money first. Then the next move.",
    bullets: [
      { title: "Money Earned, Up Front", desc: "One headline total for the month — SmartNudge revenue and verified fixes, split out. Estimated against your own trend, never guaranteed." },
      { title: "Store Pulse", desc: "Attributed sales, sessions, conversion rate, and the revenue sitting in abandoned carts — each with its real daily sparkline and trend." },
      { title: "Store Health Score", desc: "One live score out of 100 from Performance, Errors, SEO, and Experience — every factor clickable straight through to the fix." },
      { title: "The Next Move, Not Just Numbers", desc: "A card per capability showing what it has done lately and the one action worth taking. Cards with nothing to report stay hidden." },
      { title: "Speed, Locations & Plan", desc: "A plain-language speed verdict with real-user Core Web Vitals, visitor locations by revenue, and sessions used against your cap." },
    ],
    caption: "The money, the health, the next move.",
    videoSrc: "/videos/template-system.mp4",
    icon: (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 17v-6"/><path d="M12 17v-2"/><path d="M17 17v-8"/></svg>),
  },
  {
    id: "storefront-speed", tab: "Storefront Speed",
    headline: "Know If Slow Speed Is\nQuietly Costing You Sales",
    subline: "Verdict first. Real shoppers. Real revenue at stake.",
    bullets: [
      { title: "Plain-Language Verdict", desc: "A headline like “A few pages are dragging” before any number — so you know whether to care in a single glance." },
      { title: "Real-User Core Web Vitals", desc: "Loading (LCP), Responsiveness (INP), Visual stability (CLS), and Server response (TTFB) graded Good / Needs work / Poor — measured from your actual visitors, the way Google grades you." },
      { title: "Slow Pages by Revenue", desc: "The pages dragging your store, ranked by the real sales flowing through them — so you fix the ones that cost you money first." },
      { title: "Speed Over Time", desc: "A daily loading-speed trend charted against the “Good” line, so you can watch the store getting faster." },
    ],
    caption: "Speed, weighed in revenue.",
    videoSrc: "/videos/mobile-performance.mp4",
    icon: (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>),
  },
  {
    id: "heatmaps", tab: "Heatmaps",
    headline: "See Where They Click,\nRage, and Scroll",
    subline: "Three views. Every device. Every frustration.",
    bullets: [
      { title: "Three View Modes", desc: "Click heatmap, frustration heatmap, and scroll depth map." },
      { title: "Interactive Page Selector", desc: "Pick any page on your store and see the overlay instantly." },
      { title: "Element Detail Panel", desc: "Click count, click rate, rage clicks, dead clicks per element. Device breakdown per element." },
      { title: "Color-Coded Intensity", desc: "Cool blue (low) to hot red (high) — spot problems at a glance." },
    ],
    caption: "Understand engagement visually.",
    videoSrc: "/videos/safe-publishing.mp4",
    icon: (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>),
  },
  {
    id: "replays", tab: "Session Replays",
    headline: "Watch Every Visitor's\nJourney — Frame by Frame",
    subline: "Full-motion recordings. Frustration auto-flagged.",
    bullets: [
      { title: "Auto-Flagged Frustration", desc: "Red markers on the playback timeline highlight rage clicks, dead clicks, and error moments." },
      { title: "Smart Filters", desc: "Filter replays by device, country, date, or frustration signals." },
      { title: "Smart Recording", desc: "Capture all sessions or only frustrated ones. Set daily recording caps and retention periods." },
      { title: "Privacy-First", desc: "No keystrokes or sensitive fields recorded." },
    ],
    caption: "See exactly what your visitors see.",
    videoSrc: "/videos/ai-builder.mp4",
    icon: (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>),
  },
  {
    id: "ai", tab: "AI Suggestions",
    headline: "AI Finds the Revenue Leaks.\nYou Get the Fix.",
    subline: "Three-layer intelligence. One prioritized list.",
    bullets: [
      { title: "17+ Built-In Rules", desc: "Button sizing, heading structure, contrast, CTA placement, form visibility, and more." },
      { title: "Pattern Detection", desc: "Frustration clusters, scroll cliffs, engagement drops, mobile gaps, form abandonment." },
      { title: "AI Reasoning", desc: "Powered by Google Gemini 2.5 Flash with configurable monthly cost budgets." },
      { title: "PECTI Scoring", desc: "Proof, Ease, Cost, Time, Impact — broken down per suggestion. Tier badges: Quick Win, Strategic, or Ambitious." },
      { title: "Error & Broken-Page Detection", desc: "Storefront JavaScript errors and 404s surfaced and ranked by the revenue flowing through them — and DynoAgent can resolve them for you." },
    ],
    caption: "17+ rules · 3 intelligence layers · PECTI scored",
    videoSrc: "/videos/mobile-performance.mp4",
    icon: (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>),
  },
  {
    id: "cro-report", tab: "CRO Report",
    headline: "Your Weekly Conversion\nHealth Check",
    subline: "Benchmarks. KPIs. Prioritized actions. Delivered.",
    bullets: [
      { title: "Key Metrics Tracked", desc: "Conversion rate, AOV, bounce rate, cart abandonment — with trend arrows over time." },
      { title: "Industry Benchmarks", desc: "Benchmarked against industry averages so you know where you stand." },
      { title: "Actionable Insights", desc: "Ranked by impact — fix the biggest leaks first." },
      { title: "Export & Deliver", desc: "Export as PDF or share via a secure public link. Weekly digest emails — never miss a shift." },
    ],
    caption: "Automated weekly conversion intelligence.",
    videoSrc: "/videos/ai-builder.mp4",
    icon: (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>),
  },
  {
    id: "seo-autopilot", tab: "SEO Autopilot",
    headline: "Fix Your Store's SEO\nin One Click",
    subline: "AI writes it. You apply it. Fully reversible.",
    bullets: [
      { title: "Full-Store SEO Scan", desc: "Finds weak titles, thin meta descriptions, missing image alt text, and missing barcodes across products, collections, pages, and articles." },
      { title: "AI-Written Fixes", desc: "Every fix drafted for you — apply with one click through Shopify's official Admin API. No theme edits, and every change is fully reversible." },
      { title: "AI-Search (GEO) Readiness", desc: "Adds the product identifiers and structured signals that help ChatGPT, Perplexity, and Google AI cite your store." },
      { title: "A Moat That Compounds", desc: "A growing count of SEO fixes shipped over time — the history that turns into your store's SEO advantage." },
    ],
    caption: "SEO that fixes itself — reversibly.",
    videoSrc: "/videos/ai-builder.mp4",
    icon: (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>),
  },
  {
    id: "revenue", tab: "Revenue Attribution",
    headline: "Know Exactly Which Fix\nMade You Money",
    subline: "Dollar-level tracking from click to purchase.",
    bullets: [
      { title: "Click-to-Purchase Attribution", desc: "Every click on your store is tied back to revenue." },
      { title: "Top Converting Elements", desc: "Ranked by revenue generated — see which buttons, links, and CTAs actually lead to purchases." },
      { title: "Optimization Opportunities", desc: "Bottom converting CTAs flagged. Revenue breakdown by page." },
      { title: "Device Comparison", desc: "Desktop vs. mobile conversion rate comparison. Order count and dollar amount per element." },
    ],
    caption: "Tie every action to real revenue.",
    videoSrc: "/videos/safe-publishing.mp4",
    icon: (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>),
  },
  {
    id: "impact", tab: "Impact",
    headline: "See Exactly What DynoWeb\nMade You — In Dollars",
    subline: "Every fix and every nudge, measured before → after.",
    bullets: [
      { title: "Running Money Scoreboard", desc: "One headline total combining verified fixes and net SmartNudge revenue — the number that answers “what has this app made me?”" },
      { title: "Measured the Right Way", desc: "Each fix judged on the metric that fits it — CTA fixes on click-through, frustration fixes on rage clicks, SEO fixes on organic visitors, GEO fixes on verified-live." },
      { title: "Before → After, vs Your Own Trend", desc: "Difference-in-differences compares each change against your store's overall trend over the same window — so background noise never gets miscredited." },
      { title: "Honest by Design", desc: "Net of refunds and the control group, labelled estimates never guarantees, and still-measuring fixes show the real data gathered so far." },
    ],
    caption: "The money, measured — not guessed.",
    videoSrc: "/videos/safe-publishing.mp4",
    icon: (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>),
  },
  {
    id: "cart", tab: "Cart Overview",
    headline: "See Exactly Where Carts\nGo to Die",
    subline: "Product by product. Stage by stage.",
    bullets: [
      { title: "Abandonment Tracking", desc: "Cart abandonment rate with trend tracking over time." },
      { title: "Top Abandoned Products", desc: "Ranked by lost revenue so you know where to focus." },
      { title: "Cart Value Trends", desc: "See how cart values change over time and spot patterns." },
      { title: "Checkout Funnel", desc: "Product-level funnel: added to cart → reached checkout → purchased. Checkout stage drop-off analysis." },
    ],
    caption: "Stop the revenue leak at checkout.",
    videoSrc: "/videos/ai-builder.mp4",
    icon: (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>),
  },
  {
    id: "journey", tab: "Journeys",
    headline: "Map the Path From\nLanding to Purchase",
    subline: "Visual flow. Converted vs. abandoned. Every route.",
    bullets: [
      { title: "Page Flow Diagram", desc: "Traffic volume shown by line width — see the most common routes visitors take through your store." },
      { title: "Converted vs. Abandoned", desc: "Top converting journeys vs. top abandoned journeys — side by side." },
      { title: "Session Drill-Down", desc: "Full action timeline per session. Click any session to jump into full replay." },
      { title: "Overview Metrics", desc: "Bounce rate, pages per session, and average session duration at a glance." },
    ],
    caption: "See the full journey, not just the end.",
    videoSrc: "/videos/ai-builder.mp4",
    icon: (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>),
  },
  {
    id: "referrers", tab: "Referrers",
    headline: "Know Where Your Best\nVisitors Come From",
    subline: "Not all traffic is equal.",
    bullets: [
      { title: "Traffic Source Breakdown", desc: "See which channels — Google, Instagram, email, direct — bring visitors that actually buy." },
      { title: "Conversion Rate per Referrer", desc: "Stop spending on sources that drive volume but not revenue." },
      { title: "Engagement Metrics", desc: "Pages per session and time on site by source." },
      { title: "Filterable", desc: "Filter by date range and device type for granular insights." },
    ],
    caption: "Spend where it converts.",
    videoSrc: "/videos/ai-builder.mp4",
    icon: (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>),
  },
  {
    id: "smartnudge", tab: "SmartNudge",
    headline: "Convert Frustrated Visitors\nWith Behavior-Triggered Nudges",
    subline: "Behavior-triggered. Not timer-triggered.",
    bullets: [
      { title: "16 Nudge Types", desc: "Exit-intent rescue, spin-to-win, scratch card, multi-step quiz, email capture, video popup, social proof toast, countdown timer, cart nudge, bundle offer, and more — plus a 30+ template gallery to launch from." },
      { title: "Brand DNA Auto-Styling", desc: "Crawls your store and auto-styles every nudge to your palette, fonts, and voice. Festival and seasonal design library included." },
      { title: "On-Site AND Email Delivery", desc: "Fire nudges live on your storefront or send design-matched coupon emails — behavior-triggered, not timer-triggered." },
      { title: "Holdout Attribution", desc: "Control-group testing reports true lift and NET incremental revenue after refunds — not just impressions and clicks. Auto-creates discount codes in Shopify when needed." },
    ],
    caption: "16 nudge types · Brand DNA · holdout-measured",
    videoSrc: "/videos/ai-builder.mp4",
    icon: (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>),
  },
  {
    id: "dynoagent", tab: "DynoAgent",
    headline: "Your AI Store Manager\nThat Actually Does the Work",
    subline: "Ask questions. Request changes. Approve. Done.",
    bullets: [
      { title: "Content Optimization", desc: "Rewrite product descriptions, generate SEO titles and meta descriptions, create blog posts, update pages — all in your brand voice." },
      { title: "Store Actions", desc: "Build targeted discount codes, manage collections, update About and FAQ pages based on your store data." },
      { title: "AI Image Generation", desc: "Generate product lifestyle images and marketing banners with AI." },
      { title: "Full Control", desc: "Preview every change before it goes live. One-click revert. Export conversations as Markdown or CSV." },
    ],
    caption: "Your store's AI operator.",
    videoSrc: "/videos/ai-builder.mp4",
    icon: (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>),
  },
  {
    id: "mcp", tab: "MCP",
    headline: "Your Store. In Any AI.\nVia MCP.",
    subline: "One connection. Every AI client. Every plan.",
    bullets: [
      { title: "Full Tool Surface", desc: "Analytics, product and page writes, blog publishing, discounts, SmartNudge, image generation — every connection gets the comprehensive DynoWeb surface." },
      { title: "Works With Every Major AI Client", desc: "Claude.ai (one-click OAuth), Claude Code, Cursor, ChatGPT Custom GPTs, and the MCP Inspector for debugging — anything that speaks the MCP protocol." },
      { title: "Included On Every Plan", desc: "500 MCP calls/day on Free and Growth, 1,500/day on Pro, 5,000/day on Custom — quota separate from in-admin agent chat." },
      { title: "Scoped & Auditable", desc: "Per-shop scope. Revocable in one click. Every call audit-logged with token, client, and outcome." },
    ],
    caption: "1 endpoint · every AI client · every plan",
    videoSrc: "/videos/ai-builder.mp4",
    icon: (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="12" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="18" cy="18" r="3"/><path d="M8.5 13.5l7 3M8.5 10.5l7-3"/></svg>),
  },
];

export default function FeaturesVideoSection() {
  const [active, setActive] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  const didMountRef = useRef(false);

  // Preload every tab's mockup once on mount so switching tabs feels instant
  useEffect(() => {
    mockupImgPaths.forEach((src) => {
      const img = new window.Image();
      img.decoding = "async";
      img.src = src;
    });
  }, []);

  const changeTab = (i: number) => {
    if (i === active) return;
    setActive(i);
    setAnimKey(k => k + 1);
  };

  // Slide the pill indicator under the active tab
  useEffect(() => {
    const tabs = tabsRef.current;
    const indicator = indicatorRef.current;
    if (!tabs || !indicator) return;
    const btn = tabs.querySelectorAll(".feat-tab")[active] as HTMLElement;
    if (!btn) return;
    indicator.style.left  = `${btn.offsetLeft}px`;
    indicator.style.width = `${btn.offsetWidth}px`;
  }, [active]);

  // Auto-scroll active tab into view on mobile — skip on initial mount
  useEffect(() => {
    if (!didMountRef.current) { didMountRef.current = true; return; }
    const tabs = tabsRef.current;
    if (!tabs) return;
    const btn = tabs.querySelectorAll(".feat-tab")[active] as HTMLElement;
    if (!btn) return;
    btn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [active]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    v.play().catch(() => {});
  }, [active]);

  const feat = features[active];
  const mockupImgMap: Record<string, string> = {
    dashboard: "/Dashboard.png",
    heatmaps: "/Heatmaps.png",
    replays: "/Replays.png",
    ai: "/AISuggestions.png",
    "cro-report": "/CROReport.png",
    revenue: "/RevenueAttribution.png",
    cart: "/CartOverview.png",
    journey: "/Journeys.png",
    referrers: "/Referrers.png",
    smartnudge: "/SmartNudge.png",
    dynoagent: "/DynoAgent.png",
    mcp: "/MCP-feature.png",
    "storefront-speed": "/storefrontSpeed.png",
    "seo-autopilot": "/SEOAutopilot.png",
    impact: "/Impact.png",
  };
  const mockupImg = mockupImgMap[feat.id] ?? `/feature${active + 1}.png`;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Karla:wght@400;500;600;700&display=swap');

        @keyframes featFadeUp { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
        @keyframes featFadeIn { from{opacity:0} to{opacity:1} }

        .fvs { font-family:'Karla',sans-serif; box-sizing:border-box; }
        .fvs *, .fvs *::before, .fvs *::after { box-sizing:inherit; }

        .fvs .sec-label {
          font-size:.68rem; font-weight:600; letter-spacing:.14em;
          text-transform:uppercase; color:rgba(255,255,255,0.25);
        }
        .fvs .divider-line {
          width:40px; height:2px; border-radius:2px;
          background:linear-gradient(90deg,#6eb0ff,transparent);
        }
        .fvs .sec-heading {
          font-family:'Montserrat',sans-serif;
          font-size:clamp(1.75rem,3vw,3.2rem);
          letter-spacing:-.02em; line-height:1.12; color:#e8eaf0;
        }

        /* ── Tab bar ── */
        .feat-tabs-outer {
          width:100%; overflow-x:auto; scrollbar-width:none;
          -ms-overflow-style:none; padding-bottom:2px;
        }
        .feat-tabs-outer::-webkit-scrollbar { display:none; }

        .feat-tabs-wrap {
          position:relative; display:inline-flex; gap:0;
          background:rgba(255,255,255,0.04);
          border:1px solid rgba(255,255,255,0.08);
          border-radius:12px; padding:4px;
          min-width:max-content;
        }
        .feat-tab-indicator {
          position:absolute; top:4px; height:calc(100% - 8px);
          background:rgba(255,255,255,0.07);
          border:1px solid rgba(255,255,255,0.1);
          border-radius:8px;
          transition:left .25s cubic-bezier(.4,0,.2,1), width .25s cubic-bezier(.4,0,.2,1);
          pointer-events:none; z-index:0;
        }
        .feat-tab {
          position:relative; z-index:1;
          display:inline-flex; align-items:center; gap:6px;
          padding:8px 14px; border-radius:8px; border:none; background:none;
          font-family:'Karla',sans-serif;
          font-size:.72rem; font-weight:500; color:rgba(255,255,255,0.38);
          cursor:pointer; white-space:nowrap; flex-shrink:0;
          transition:color .2s ease;
        }
        @media(min-width:640px){ .feat-tab{ font-size:.76rem; padding:8px 14px; } }
        .feat-tab:hover { color:rgba(255,255,255,0.65); }
        .feat-tab.active { color:rgba(255,255,255,0.88); font-weight:600; }
        .feat-tab-icon { opacity:.5; transition:opacity .2s; flex-shrink:0; }
        .feat-tab.active .feat-tab-icon { opacity:1; }

        /* DynoAgent tab special highlight */
        .feat-tab.dynoagent-tab {
          /* No special color, use default tab color */
        }
        .feat-tab.dynoagent-tab.active {
          /* No special color, use default active tab color */
        }
        .feat-tab.dynoagent-tab .feat-tab-icon {
          /* Use default icon opacity */
        }
        .feat-tab.dynoagent-tab.active .feat-tab-icon {
          /* Use default icon opacity */
        }

        /* ── Main card ── */
        .feat-card {
          background:rgba(255,255,255,0.025);
          border:1px solid rgba(255,255,255,0.08);
          border-radius:16px; overflow:hidden;
          display:flex; flex-direction:column;
        }
        @media(min-width:900px){
          .feat-card {
            display:grid;
            grid-template-columns:0.9fr 1.1fr;
            min-height:480px;
            border-radius:20px;
          }
        }

        /* ── Left: text panel ── */
        .feat-card-left {
          padding:24px 20px;
          display:flex; flex-direction:column;
          border-bottom:1px solid rgba(255,255,255,0.07);
          order:2;
        }
        @media(min-width:640px){ .feat-card-left{ padding:28px 28px; } }
        @media(min-width:900px){
          .feat-card-left{
            padding:40px 36px;
            border-bottom:none;
            border-right:1px solid rgba(255,255,255,0.07);
            order:1;
            justify-content:center;
          }
        }

        .feat-headline {
          font-family:'Montserrat',sans-serif;
          font-size:clamp(1.1rem,3.8vw,1.85rem);
          font-weight:700; line-height:1.15;
          letter-spacing:-.02em; color:#e8eaf0; white-space:pre-line;
          animation:featFadeUp .38s ease both;
        }
        .feat-subline {
          font-size:clamp(.85rem, 1.05vw, 1.5rem); line-height:1.65; color:rgba(255,255,255,0.35);
          margin-top:8px; animation:featFadeUp .38s ease .05s both;
        }

        .feat-bullets { display:flex; flex-direction:column; gap:0; margin-top:20px; }
        @media(min-width:900px){ .feat-bullets{ margin-top:28px; } }

        .feat-bullet {
          display:flex; gap:12px; align-items:flex-start;
          padding:11px 0; border-bottom:1px solid rgba(255,255,255,0.055);
          transition:padding-left .18s ease; cursor:default;
          animation:featFadeUp .38s ease both;
        }
        .feat-bullet:first-child { border-top:1px solid rgba(255,255,255,0.055); }
        .feat-bullet:hover { padding-left:4px; }
        .feat-bullet:hover .feat-bullet-title { color:#6eb0ff; }
        .feat-bullet-dot {
          width:6px; height:6px; border-radius:50%;
          background:rgba(110,176,255,0.45); flex-shrink:0; margin-top:5px;
          transition:background .18s ease;
        }
        .feat-bullet:hover .feat-bullet-dot { background:#6eb0ff; }
        .feat-bullet-title {
          font-size:clamp(.8rem, 1vw, 1.4rem); font-weight:700;
          color:rgba(255,255,255,0.78); margin-bottom:2px;
          transition:color .18s ease;
        }
        .feat-bullet-desc { font-size:clamp(.74rem, .9vw, 1.3rem); color:rgba(255,255,255,0.3); line-height:1.55; }

        /* ── Right: mockup panel ── */
        .feat-card-right {
          display:flex; flex-direction:column;
          background:rgba(0,0,0,0.18);
          order:1;
          min-height:240px;
        }
        @media(min-width:480px){ .feat-card-right{ min-height:280px; } }
        @media(min-width:900px){
          .feat-card-right{ order:2; min-height:unset; }
        }

        .feat-browser {
          display:flex; align-items:center; gap:6px; padding:9px 12px;
          background:rgba(255,255,255,0.03);
          border-bottom:1px solid rgba(255,255,255,0.07); flex-shrink:0;
        }
        .feat-browser-dot { width:7px; height:7px; border-radius:50%; }
        .feat-browser-bar {
          flex:1; height:18px; background:rgba(255,255,255,0.05);
          border:1px solid rgba(255,255,255,0.07); border-radius:5px;
          display:flex; align-items:center; padding:0 8px; gap:5px;
          overflow:hidden;
        }
        .feat-browser-url {
          font-size:.55rem; color:rgba(255,255,255,0.22);
          letter-spacing:.04em; white-space:nowrap;
          overflow:hidden; text-overflow:ellipsis;
        }

        /* Mockup body */
        .feat-mockup-body {
          position:relative; flex:1;
          min-height:200px; overflow:hidden;
        }
        @media(min-width:480px){ .feat-mockup-body{ min-height:240px; } }
        @media(min-width:900px){ .feat-mockup-body{ min-height:340px; } }

        /* Dark skeleton placeholder */
        .feat-ph {
          position:absolute; inset:0; z-index:1;
          display:grid; grid-template-columns:100px 1fr;
          background:rgba(8,8,12,0.95);
        }
        @media(min-width:480px){ .feat-ph{ grid-template-columns:120px 1fr; } }
        @media(min-width:900px){ .feat-ph{ grid-template-columns:130px 1fr; } }

        .feat-ph-side {
          border-right:1px solid rgba(255,255,255,0.06);
          padding:10px; display:flex; flex-direction:column; gap:7px;
        }
        .feat-ph-line { height:7px; border-radius:4px; background:rgba(255,255,255,0.07); }
        .feat-ph-line.hi { background:rgba(110,176,255,0.15); }
        .feat-ph-main { padding:10px; display:flex; flex-direction:column; gap:9px; }
        .feat-ph-head { height:9px; border-radius:4px; background:rgba(255,255,255,0.1); width:42%; }
        .feat-ph-cards { display:flex; gap:6px; }
        .feat-ph-card {
          flex:1; aspect-ratio:4/3; border-radius:6px;
          background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.07);
          position:relative; overflow:hidden;
        }
        .feat-ph-accent { position:absolute; bottom:0; left:0; right:0; height:2px; background:linear-gradient(90deg,#3b6fbe,#7ba7d4); }
        .feat-ph-rows { display:flex; flex-direction:column; gap:5px; }
        .feat-ph-r { display:flex; gap:6px; }
        .feat-ph-cta { height:22px; border-radius:6px; background:rgba(37,82,160,0.5); border:1px solid rgba(59,111,190,0.25); }

        .feat-video {
          position:absolute; inset:0; z-index:2;
          width:100%; height:100%; object-fit:cover;
          animation:featFadeIn .3s ease both;
        }

        .feat-live-badge {
          position:absolute; bottom:10px; left:10px; z-index:4;
          display:flex; align-items:center; gap:6px;
          background:rgba(8,8,14,0.88); backdrop-filter:blur(10px);
          border:1px solid rgba(255,255,255,0.09); border-radius:7px; padding:4px 9px;
        }
        .feat-live-dot { width:5px; height:5px; border-radius:50%; background:#22c55e; box-shadow:0 0 5px #22c55e; }

        /* Caption */
        .feat-caption {
          padding:12px 14px;
          border-top:1px solid rgba(255,255,255,0.06);
          display:flex; align-items:center; gap:9px; flex-shrink:0;
          animation:featFadeUp .38s ease .14s both;
        }
        @media(min-width:640px){ .feat-caption{ padding:13px 16px; } }
        .feat-caption-icon {
          width:26px; height:26px; border-radius:6px; flex-shrink:0;
          background:rgba(110,176,255,0.09); border:1px solid rgba(110,176,255,0.15);
          display:flex; align-items:center; justify-content:center;
          color:rgba(110,176,255,0.7);
        }
        .feat-caption-text {
          font-size:clamp(.72rem, .9vw, 1.2rem); font-weight:500;
          color:rgba(255,255,255,0.3); line-height:1.5;
        }

        /* ── DynoAgent mockup ── */
        .dynoagent-mockup {
          position: absolute; inset: 0;
          display: flex; flex-direction: column;
          background: #111;
          color: #fff;
          animation: featFadeIn .3s ease both;
          overflow: hidden;
        }
        .da-topbar {
          display: flex; align-items: center; justify-content: space-between;
          padding: 10px 16px;
          background: #111;
          border-bottom: 1px solid #222;
          flex-shrink: 0;
        }
        .da-topbar-left {
          display: flex; align-items: center; gap: 8px;
        }
        .da-logo-dot {
          width: 22px; height: 22px; border-radius: 50%;
          background: #3b6fbe;
          display: flex; align-items: center; justify-content: center;
        }
        .da-title { font-family: 'Montserrat', sans-serif; font-size: .8rem; font-weight: 700; color: #fff; }
        .da-subtitle { font-size: .65rem; color: #bfc7d5; margin-top: 1px; }
        .da-badge {
          font-size: .6rem; font-weight: 600;
          background: #23272f; color: #bfc7d5;
          padding: 3px 8px; border-radius: 999px;
          white-space: nowrap;
        }
        .da-body {
          flex: 1; overflow: hidden;
          display: flex; flex-direction: column;
          padding: 12px 14px; gap: 10px;
          background: #181a1b;
        }
        .da-welcome {
          background: #181a1b; border-radius: 10px;
          padding: 14px 16px; text-align: center;
          border: 1px solid #23272f;
        }
        .da-welcome-title { font-family: 'Montserrat', sans-serif; font-size: .85rem; font-weight: 700; color: #fff; margin-bottom: 5px; }
        .da-welcome-desc { font-size: .65rem; color: #bfc7d5; line-height: 1.5; margin-bottom: 8px; }
        .da-welcome-chips { display: flex; flex-direction: column; gap: 3px; }
        .da-chip { font-size: .6rem; color: #bfc7d5; background: #23272f; border: 1px solid #23272f; border-radius: 6px; padding: 3px 8px; text-align: center; }
        .da-input-row {
          margin-top: auto;
          display: flex; align-items: center; gap: 8px;
          background: #23272f; border: 2px solid #3b6fbe;
          border-radius: 8px; padding: 7px 10px; flex-shrink: 0;
        }
        .da-input-text { font-size: .65rem; color: #bfc7d5; flex: 1; }
        .da-send-btn {
          width: 22px; height: 22px; border-radius: 6px;
          background: #181a1b;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .da-hint { font-size: .55rem; color: #bfc7d5; text-align: center; margin-top: 4px; flex-shrink: 0; }
        .da-ready-dot {
          display: inline-flex; align-items: center; gap: 4px;
          background: #23272f; color: #bfc7d5;
          font-size: .55rem; font-weight: 600;
          padding: 2px 7px; border-radius: 999px;
        }
      `}</style>

      <section className="fvs relative w-full" style={{background:"#0a0a0a"}} id="features-section">

        {/* Light rays background */}
        <div style={{position:"absolute",inset:0,pointerEvents:"none",zIndex:0,overflow:"hidden"}}>
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={1}
            lightSpread={0.5}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0}
            pulsating={false}
            fadeDistance={1}
            saturation={1}
          />
        </div>

        {/* Faint grid */}
        <div style={{position:"absolute",inset:0,pointerEvents:"none",zIndex:0,
          backgroundImage:`linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px)`,
          backgroundSize:"48px 48px"}}/>
        {/* Ambient glow */}
        <div style={{position:"absolute",right:"8%",top:"25%",width:400,height:400,borderRadius:"50%",
          background:"radial-gradient(circle,rgba(59,111,190,.07) 0%,transparent 70%)",
          filter:"blur(60px)",pointerEvents:"none",zIndex:0}}/>

        <div className="relative z-10 mx-auto w-full" style={{padding:"max(5rem, 8vh) max(48px, 5vw)"}}>

          {/* Header */}
          <div style={{display:"flex",flexDirection:"column",gap:"10px",marginBottom:"3rem"}}>
            <span className="sec-label">Platform features</span>
            <div className="divider-line"/>
            <h2 className="sec-heading">See DynoWeb in action.</h2>
            <p style={{fontSize:"clamp(.875rem, 1.05vw, 1.5rem)",color:"rgba(255,255,255,0.3)",lineHeight:1.7,maxWidth:"28rem"}}>
              Fifteen capabilities working as one continuous loop — from raw signal to the fix, and the money it made.
            </p>
          </div>

          {/* Tab bar — scrollable on mobile */}
          <div className="feat-tabs-outer" style={{marginBottom:"2rem"}}>
            <div ref={tabsRef} className="feat-tabs-wrap" style={{position:"relative"}}>
              <div ref={indicatorRef} className="feat-tab-indicator"/>
              {features.map((f, i) => (
                <button
                  key={f.id}
                  className={`feat-tab${i===active?" active":""}${f.id==="dynoagent"?" dynoagent-tab":""}`}
                  onClick={() => changeTab(i)}
                >
                  <span className="feat-tab-icon">{f.icon}</span>
                  {f.tab}
                </button>
              ))}
            </div>
          </div>

          {/* Main card */}
          <div className="feat-card" key={animKey}>

            {/* Right: mockup (shown first on mobile via order) */}
            <div className="feat-card-right">
              <div className="feat-browser">
                <div className="feat-browser-dot" style={{background:"#ff6b6b"}}/>
                <div className="feat-browser-dot" style={{background:"#ffd93d"}}/>
                <div className="feat-browser-dot" style={{background:"#6bcb77"}}/>
                <div className="feat-browser-bar">
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                  <span className="feat-browser-url">
                    dynoweb.app/{({ dynoagent: "agent", ai: "fix", "cro-report": "fix/cro-report", "seo-autopilot": "fix/seo-autopilot", impact: "impact", "storefront-speed": "", smartnudge: "nudges", heatmaps: "explore/heatmaps" } as Record<string, string>)[feat.id] ?? feat.id}
                  </span>
                </div>
              </div>

              <div className="feat-mockup-body">
                <img
                  src={mockupImg}
                  alt={feat.headline}
                  decoding="async"
                  loading="eager"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "50% center",
                    background: "rgba(0,0,0,0.08)",
                    display: "block"
                  }}
                />
              </div>

              {/* Caption */}
              <div className="feat-caption">
                <div className="feat-caption-icon">{feat.icon}</div>
                <p className="feat-caption-text">{feat.caption}</p>
              </div>
            </div>

            {/* Left: text */}
            <div className="feat-card-left">
              <h3 className="feat-headline">{feat.headline}</h3>
              <p className="feat-subline">{feat.subline}</p>
              <div className="feat-bullets">
                {feat.bullets.map((b, i) => (
                  <div key={i} className="feat-bullet" style={{animationDelay:`${0.08+i*0.07}s`}}>
                    <div className="feat-bullet-dot" style={{marginTop:"5px"}}/>
                    <div>
                      <p className="feat-bullet-title">{b.title}</p>
                      <p className="feat-bullet-desc">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}