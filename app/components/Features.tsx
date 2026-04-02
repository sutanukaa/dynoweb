"use client";
import { useState, useRef, useEffect } from "react";
import LightRays from "@/components/LightRays";

interface Bullet { title: string; desc: string; }
interface Feature {
  id: string; tab: string; headline: string; subline: string;
  bullets: Bullet[]; caption: string; videoSrc: string; icon: React.ReactNode;
}

const features: Feature[] = [
  {
    id: "tracking", tab: "Visitor Tracking",
    headline: "Automatic Visitor Tracking\n— Invisible & Lightweight.",
    subline: "A tiny script captures real behavior without slowing your store.",
    bullets: [
      { title: "Behavior Signals", desc: "Clicks, rage clicks, dead clicks, error clicks, mouse shake, scroll depth, form interactions, mobile gestures, fat finger taps, element visibility, page views." },
      { title: "Zero Impact", desc: "Loads asynchronously, no layout shifts, bot filtering, session tracking, device/country detection." },
      { title: "Privacy-First", desc: "All data anonymized, no personal info collected." },
    ],
    caption: "Invisible tracker, powerful insights.",
    videoSrc: "/videos/ai-builder.mp4",
    icon: (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>),
  },
  {
    id: "dashboard", tab: "Real-Time Dashboard",
    headline: "Live Dashboard\n— Your Command Center.",
    subline: "See everything happening on your store at a glance.",
    bullets: [
      { title: "Live Event Counter", desc: "Events tracked today with trend arrows." },
      { title: "Key Metrics Cards", desc: "Clicks, rage clicks, dead clicks, error clicks, mobile gestures, form interactions, scroll sessions." },
      { title: "Top Pages & Trend Charts", desc: "Highest-traffic pages, event frequency, device breakdown, signal distribution, smart filters." },
    ],
    caption: "Instant visibility, actionable metrics.",
    videoSrc: "/videos/template-system.mp4",
    icon: (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 17v-6"/><path d="M12 17v-2"/><path d="M17 17v-8"/></svg>),
  },
  {
    id: "heatmaps", tab: "Visual Heatmaps",
    headline: "Visual Heatmaps\n— See Where Visitors Click.",
    subline: "Click, frustration, and scroll depth maps overlaid on your store.",
    bullets: [
      { title: "Click Heatmap", desc: "Color-coded intensity shows where visitors click most." },
      { title: "Frustration Heatmap", desc: "Highlights rage clicks, dead clicks, error clicks." },
      { title: "Scroll Depth Map", desc: "See exactly where visitors lose interest and stop reading." },
    ],
    caption: "Understand engagement visually.",
    videoSrc: "/videos/safe-publishing.mp4",
    icon: (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>),
  },
  {
    id: "ai", tab: "AI Suggestions",
    headline: "AI-Powered Suggestions\n— Actionable Fixes.",
    subline: "DynoWeb tells you exactly what to fix and why. CSS suggestions are fully available now — more types coming soon.",
    bullets: [
      { title: "CSS Suggestions ✦ Available Now", desc: "Style and layout fixes you can preview and apply to a draft theme today." },
      { title: "Rule Engine", desc: "17+ built-in rules catch common UX problems automatically." },
      { title: "More Types Coming Soon", desc: "Pattern detection, AI reasoning, and additional suggestion categories are on the way." },
    ],
    caption: "CSS suggestions live now. More types coming soon.",
    videoSrc: "/videos/mobile-performance.mp4",
    icon: (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6v6H9z"/></svg>),
  },
  {
    id: "dynoagent", tab: "DynoAgent",
    headline: "DynoAgent\n— Ask Anything About Your Store.",
    subline: "An AI analytics assistant that answers questions about your store data in plain English.",
    bullets: [
      { title: "Natural Language Queries", desc: "Ask things like 'What were my most visited pages this week?' or 'Which elements have the most rage clicks?' — no SQL, no dashboards." },
      { title: "Deep Data Access", desc: "DynoAgent pulls from traffic, clicks, frustration signals, revenue, and conversion data to give complete answers." },
      { title: "CRO Recommendations", desc: "Ask for improvement ideas and get actionable suggestions tailored to your store's real behavior data." },
    ],
    caption: "Your store's data, answered instantly.",
    videoSrc: "/videos/ai-builder.mp4",
    icon: (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>),
  },
  {
    id: "smartnudge", tab: "SmartNudge",
    headline: "SmartNudge\n— Convert Visitors Before They Leave.",
    subline: "Detect hesitation in real time and trigger the right message at the right moment.",
    bullets: [
      { title: "Behavioral Triggers", desc: "Detects rage clicks, exit intent, idle browsing, price hesitation, and cart abandonment signals automatically." },
      { title: "AI-Generated Copy", desc: "One-click AI generates the headline, body, and CTA matched to the visitor's moment — no copywriting needed." },
      { title: "Smart Delivery", desc: "Nudges fire at the right frequency, on the right pages, only when behavioral conditions are met. No developer needed." },
    ],
    caption: "The right message at the right moment.",
    videoSrc: "/videos/ai-builder.mp4",
    icon: (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>),
  },
  {
    id: "preview", tab: "Live Preview",
    headline: "Live Preview &\nSide-by-Side Comparison.",
    subline: "See exactly what your changes will look like before you commit.",
    bullets: [
      { title: "Current vs. Optimized", desc: "Two real screenshots side by side, labeled 'LIVE' and 'DRAFT'." },
      { title: "Device Switcher", desc: "Preview on desktop, tablet, or mobile viewport." },
      { title: "Element Highlighting", desc: "The specific element being modified is outlined clearly." },
    ],
    caption: "Review before you publish.",
    videoSrc: "/videos/ai-builder.mp4",
    icon: (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 7h10v10H7z"/></svg>),
  },
  {
    id: "draft", tab: "Draft Theme Apply",
    headline: "One-Click Apply\n— Safe Draft Themes.",
    subline: "Apply improvements as a draft theme — never touch your live store.",
    bullets: [
      { title: "Draft Theme Safety", desc: "Every fix lands in an isolated Draft Theme — never your live theme." },
      { title: "CSS Changes Auto-Apply ✦ Available Now", desc: "CSS suggestions are fully supported and applied automatically. Other suggestion types are coming soon." },
      { title: "Full Revert Capability", desc: "Changed your mind? One click to undo and restore the original state." },
    ],
    caption: "Safe, reversible deployments.",
    videoSrc: "/videos/mobile-performance.mp4",
    icon: (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="2" width="10" height="20" rx="2.5"/><path d="M10 6h4"/></svg>),
  },
  {
    id: "revenue", tab: "Revenue Attribution",
    headline: "Revenue & Conversion\nAttribution.",
    subline: "Know which elements actually make you money.",
    bullets: [
      { title: "Conversion Clicks", desc: "Clicks that led to purchases." },
      { title: "Order Conversions", desc: "How many orders are attributed to tracked interactions." },
      { title: "Revenue by Element", desc: "See exactly which buttons, images, and links drive the most sales." },
    ],
    caption: "Tie actions to real results.",
    videoSrc: "/videos/safe-publishing.mp4",
    icon: (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>),
  },
  {
    id: "journey", tab: "Journey Analytics",
    headline: "Customer Journey\nAnalytics.",
    subline: "Understand the complete visitor experience from landing to leaving (or buying).",
    bullets: [
      { title: "Overview Stats", desc: "Total sessions, average session duration, average pages per session, bounce rate, conversion rate." },
      { title: "Flow Visualization", desc: "Visual flow chart showing most common page transitions, entry/exit pages, traffic volume." },
      { title: "Session Drill-Down", desc: "Click into any session to see a full timeline, actions, and outcome." },
    ],
    caption: "See the full journey, not just the end.",
    videoSrc: "/videos/ai-builder.mp4",
    icon: (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 7h10v10H7z"/></svg>),
  },
];

export default function FeaturesVideoSection() {
  const [active, setActive] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  const didMountRef = useRef(false);

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
  const mockupImg = feat.id === "dynoagent" ? "/feature5.png" : feat.id === "smartnudge" ? "/SmartNudge-usecase.png" : active > 5 ? `/feature${active}.png` : `/feature${active + 1}.png`;

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
          font-size:clamp(1.6rem,3.2vw,3.5rem);
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
          font-size:.8rem; font-weight:500; color:rgba(255,255,255,0.38);
          cursor:pointer; white-space:nowrap; flex-shrink:0;
          transition:color .2s ease;
        }
        @media(min-width:640px){ .feat-tab{ font-size:.82rem; padding:9px 18px; } }
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
              Five capabilities working as one continuous loop — from raw signal to deployed fix.
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
                    {feat.id === "dynoagent" ? "dynoweb.app/agent" : "dynoweb.app/dashboard"}
                  </span>
                </div>
              </div>

              <div className="feat-mockup-body">
                <img
                  src={mockupImg}
                  alt={feat.headline}
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