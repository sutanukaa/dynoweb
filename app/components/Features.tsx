"use client";
import { useEffect, useRef, useState, useCallback } from "react";

interface Feature {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  videoSrc: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    id: "behavioral-watchdog",
    title: "11-Signal Behavioral Watchdog",
    subtitle: "We track the silent killers of conversion.",
    description: "DynoWeb detects Rage Clicks, Dead Clicks, Confused Mouse Shakes, and Form Abandonment Bottlenecks — plus mobile-specific signals like Fat Finger Misses and Pinch-to-Zooms. Eleven behavioral signals, captured invisibly, that regular analytics completely miss.",
    videoSrc: "/videos/ai-builder.mp4",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 12l10 5 10-5"/><path d="M2 17l10 5 10-5"/>
      </svg>
    ),
  },
  {
    id: "ai-engine",
    title: "3-Layer AI Intelligence Engine",
    subtitle: "A Senior UX Designer auditing your store 24/7.",
    description: "No generic AI here. Layer 1 applies strict, battle-tested UX rules. Layer 2 spots statistical patterns across sessions. Layer 3 uses advanced LLM reasoning to generate solutions — not guesses. Three layers working together so every suggestion is actionable.",
    videoSrc: "/videos/template-system.mp4",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/>
        <rect x="3" y="14" width="7" height="7" rx="1.5"/><path d="M17.5 14v6M14.5 17h6" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    id: "pecti-scoring",
    title: "PECTI ROI Scoring System",
    subtitle: "Never wonder what to fix first.",
    description: "Every AI suggestion is graded on Proof, Ease, Cost, Time, and Impact. We filter out the noise and surface the Quick Wins that make money today — so you always know exactly where to start.",
    videoSrc: "/videos/safe-publishing.mp4",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21.5S4 17 4 11V5.5l8-3 8 3V11c0 6-8 10.5-8 10.5z"/><path d="M9 12l2 2 4-4"/>
      </svg>
    ),
  },
  {
    id: "draft-theme",
    title: "One-Click Draft Theme Generation",
    subtitle: "Data means nothing without action.",
    description: "When the AI says \"Users can't reach this button on mobile,\" you don't hire a dev. Click \"Apply\" and DynoWeb writes the CSS/Liquid, duplicates your theme, and safely applies the fix to a draft version — ready for your review. No code. No risk.",
    videoSrc: "/videos/mobile-performance.mp4",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="7" y="2" width="10" height="20" rx="2.5"/><circle cx="12" cy="18.5" r="1" fill="currentColor" stroke="none"/>
        <path d="M10 6h4" strokeWidth="1.5"/><polygon points="13 9 9 13 12 13 11 17 15 13 12 13 13 9" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    id: "clarity-sync",
    title: "Microsoft Clarity Sync",
    subtitle: "Your existing data, supercharged.",
    description: "Already using Microsoft Clarity? DynoWeb syncs directly with your Clarity data — session recordings, heatmaps, and scroll maps — and layers our AI engine on top. No extra tracking needed, just deeper, actionable insights from the data you already have.",
    videoSrc: "/videos/optimize-test.mp4",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="5" cy="5" r="2.5"/><circle cx="19" cy="5" r="2.5"/><circle cx="12" cy="19" r="2.5"/>
        <path d="M5 7.5V12a7 7 0 0 0 7 7M19 7.5V12a7 7 0 0 1-7 7"/><path d="M12 4v8"/>
      </svg>
    ),
  },
];

const BASE_ITEM_HEIGHT = 120; // at 16px root
const VISIBLE = 3;
const N = features.length;

function useScaledItemHeight() {
  const [h, setH] = useState(BASE_ITEM_HEIGHT);
  useEffect(() => {
    const update = () => {
      const rootFs = parseFloat(getComputedStyle(document.documentElement).fontSize);
      setH(Math.round(BASE_ITEM_HEIGHT * (rootFs / 16)));
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return h;
}

export default function FeaturesVideoSection() {
  const ITEM_HEIGHT = useScaledItemHeight();
  const [activeIdx, setActiveIdx]     = useState(0);
  const [videoKey, setVideoKey]       = useState(0);
  const [videoOpacity, setVideoOpacity] = useState(1);
  const [mobileActive, setMobileActive] = useState(0);
  const lastActive  = useRef(0);
  const videoRef    = useRef<HTMLVideoElement>(null);
  const mobileVidRef = useRef<HTMLVideoElement>(null);
  const scrollRef   = useRef<HTMLDivElement>(null);
  const sectionRef  = useRef<HTMLElement>(null);
  const wheelAccum  = useRef(0);
  const wheelTimer  = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isScrolling = useRef(false);

  const normActive  = ((activeIdx % N) + N) % N;

  const goToVideo = useCallback((idx: number) => {
    const norm = ((idx % N) + N) % N;
    if (norm === lastActive.current) return;
    lastActive.current = norm;
    setVideoOpacity(0);
    setTimeout(() => { setVideoKey(k => k + 1); setVideoOpacity(1); }, 180);
  }, []);

  useEffect(() => { goToVideo(activeIdx); }, [activeIdx, goToVideo]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    v.play().catch(() => {});
  }, [videoKey]);

  useEffect(() => {
    const v = mobileVidRef.current;
    if (!v) return;
    v.currentTime = 0;
    v.play().catch(() => {});
  }, [mobileActive]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (isScrolling.current) return;
      wheelAccum.current += e.deltaY;
      if (wheelTimer.current) clearTimeout(wheelTimer.current);
      wheelTimer.current = setTimeout(() => { wheelAccum.current = 0; }, 150);
      const threshold = 50;
      if (wheelAccum.current > threshold) {
        isScrolling.current = true;
        wheelAccum.current = 0;
        setActiveIdx(prev => prev + 1);
        setTimeout(() => { isScrolling.current = false; }, 400);
      } else if (wheelAccum.current < -threshold) {
        isScrolling.current = true;
        wheelAccum.current = 0;
        setActiveIdx(prev => prev - 1);
        setTimeout(() => { isScrolling.current = false; }, 400);
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  const slots = Array.from({ length: VISIBLE }, (_, i) => {
    const slotOffset = i - Math.floor(VISIBLE / 2);
    const rawIdx  = activeIdx + slotOffset;
    const featIdx = ((rawIdx % N) + N) % N;
    return { slotOffset, featIdx };
  });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cal+Sans&family=Instrument+Sans:wght@400;500;600&display=swap');

        @keyframes ambientGlow { 0%,100%{opacity:.25} 50%{opacity:.42} }
        @keyframes fadeInUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes sketchDraw { from{stroke-dashoffset:900} to{stroke-dashoffset:0} }
        @keyframes cubeRotate { 50%{transform:rotate(-80deg);} }

        .fvs6 .feat-cube {
          width:120px;height:120px;position:absolute;right:0;top:20%;transform:translateY(-50%);
          display:flex;align-items:center;justify-content:center;pointer-events:none;z-index:0;
        }
        .fvs6 .feat-cube-layer {
          position:absolute;width:100%;height:100%;border-radius:24px;
        }
        .fvs6 .feat-cube-glow {
          z-index:2;background-color:rgba(59,111,190,.08);
          border:1.5px solid rgba(59,111,190,.15);
        }
        .fvs6 .feat-cube-color {
          z-index:1;filter:blur(2px);
          background:linear-gradient(135deg,#3b6fbe,#60a5d4);
          animation:cubeRotate 2.5s ease-in-out infinite;
        }

        .fvs6 { font-family:'Instrument Sans',sans-serif; }
        .fvs6 .sec-label { font-size:.7rem;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:#94a3b8; }
        .fvs6 .divider   { width:40px;height:2px;border-radius:2px;background:linear-gradient(90deg,#3b6fbe,transparent); }
        .fvs6 .sec-heading {
          font-family:'Cal Sans',Georgia,serif;
          font-size:clamp(1.75rem,4vw,3rem);
          letter-spacing:-.02em;line-height:1.15;color:#0f172a;
        }

        .sk-1 { stroke-dasharray:900;stroke-dashoffset:900;animation:sketchDraw .6s ease-out .5s forwards; }
        .sk-2 { stroke-dasharray:900;stroke-dashoffset:900;animation:sketchDraw .55s ease-out .5s forwards; }
        .sk-3 { stroke-dasharray:900;stroke-dashoffset:900;animation:sketchDraw .45s ease-out .62s forwards; }

        /* ── Desktop carousel ── */
        .fvs6 .carousel-shell { position:relative;user-select:none;cursor:ns-resize; }
        .fvs6 .carousel-shell::before,.fvs6 .carousel-shell::after {
          content:'';position:absolute;left:0;right:0;z-index:10;pointer-events:none;height:80px;
        }
        .fvs6 .carousel-shell::before { top:0;background:linear-gradient(to bottom,white,transparent); }
        .fvs6 .carousel-shell::after  { bottom:0;background:linear-gradient(to top,white,transparent); }
        .fvs6 .carousel-window { overflow:hidden;position:relative; }
        .fvs6 .carousel-item {
          display:flex;align-items:center;gap:13px;padding:0 4px 0 18px;
          transition:opacity .4s ease,transform .4s cubic-bezier(.4,0,.2,1);
          will-change:transform,opacity;position:absolute;left:0;right:0;
        }
        .fvs6 .c-icon {
          width:36px;height:36px;border-radius:10px;
          display:flex;align-items:center;justify-content:center;
          flex-shrink:0;border:1px solid transparent;color:#94a3b8;transition:all .3s ease;
        }
        .fvs6 .carousel-item.is-active .c-icon {
          background:rgba(59,111,190,.09);border-color:rgba(59,111,190,.2);
          color:#3b6fbe;box-shadow:0 0 12px rgba(59,111,190,.1);
        }
        .fvs6 .c-text { flex:1;overflow:hidden; }
        .fvs6 .c-title { font-size:1.1rem;font-weight:500;color:#94a3b8;transition:color .3s,font-weight .3s;white-space:nowrap;overflow:hidden;text-overflow:ellipsis; }
        .fvs6 .carousel-item.is-active .c-title { color:#0f172a;font-weight:700; }
        .fvs6 .c-expand { display:grid;grid-template-rows:0fr;transition:grid-template-rows .35s cubic-bezier(.4,0,.2,1); }
        .fvs6 .carousel-item.is-active .c-expand { grid-template-rows:1fr; }
        .fvs6 .c-expand-inner { overflow:hidden; }
        .fvs6 .c-subtitle { font-size:.95rem;font-weight:700;color:#2d5fa8;margin:5px 0 3px; }
        .fvs6 .c-desc { font-size:.9rem;color:#64748b;line-height:1.65;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden; }
        .fvs6 .rail { position:absolute;left:0;top:0;bottom:0;width:3px;z-index:5; }
        .fvs6 .rail-bg { position:absolute;inset:0;border-radius:99px;background:rgba(226,232,240,.5); }
        .fvs6 .rail-fill { position:absolute;left:0;width:100%;border-radius:99px;background:linear-gradient(to bottom,#2d5fa8,#60a5d4);transition:top .3s ease,height .3s ease; }
        .fvs6 .scroll-hint { display:flex;align-items:center;gap:6px;font-size:.7rem;color:#94a3b8;font-weight:500;margin-top:12px;animation:fadeInUp .5s ease .3s both; }

        /* ── Mobile tabs ── */
        .fvs6 .mob-tabs {
          display:flex;overflow-x:auto;gap:8px;padding-bottom:4px;
          scrollbar-width:none;-ms-overflow-style:none;
        }
        .fvs6 .mob-tabs::-webkit-scrollbar { display:none; }
        .fvs6 .mob-tab {
          display:flex;align-items:center;gap:7px;padding:8px 14px;
          border-radius:99px;border:1px solid rgba(226,232,240,.9);
          background:white;white-space:nowrap;flex-shrink:0;
          font-size:.82rem;font-weight:600;color:#64748b;cursor:pointer;
          transition:all .2s ease;
          box-shadow:0 1px 4px rgba(15,23,42,.04);
        }
        .fvs6 .mob-tab.active {
          background:rgba(59,111,190,.08);border-color:rgba(59,111,190,.25);
          color:#1e3a8a;box-shadow:0 0 0 3px rgba(59,111,190,.08);
        }
        .fvs6 .mob-tab-icon { color:#94a3b8;transition:color .2s; }
        .fvs6 .mob-tab.active .mob-tab-icon { color:#3b6fbe; }
        .fvs6 .mob-desc-card {
          border-radius:16px;padding:16px;
          background:rgba(248,250,252,.9);
          border:1px solid rgba(226,232,240,.8);
        }

        /* ── Shared media card ── */
        .fvs6 .media-card {
          border-radius:18px;overflow:hidden;background:#f8fafc;
          box-shadow:0 0 0 1px rgba(203,213,225,.9),0 20px 50px rgba(15,23,42,.09),0 0 40px rgba(99,130,200,.07);
        }
        .fvs6 .feat-bg-grid {
          position:absolute;inset:0;pointer-events:none;z-index:0;
          background-image:linear-gradient(rgba(99,130,200,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(99,130,200,.03) 1px,transparent 1px);
          background-size:56px 56px;
        }
        .fvs6 .media-glow {
          position:absolute;inset:-24px;border-radius:44px;
          background:radial-gradient(ellipse at center,rgba(99,130,200,.13) 0%,transparent 70%);
          filter:blur(26px);pointer-events:none;
        }
        .fvs6 .browser-bar {
          display:flex;align-items:center;gap:6px;padding:10px 13px;
          background:white;border-bottom:1px solid rgba(226,232,240,.8);
        }
        .fvs6 .b-dot { width:8px;height:8px;border-radius:50%; }
        .fvs6 .b-url {
          flex:1;height:20px;background:#f1f5f9;border-radius:5px;
          border:1px solid rgba(226,232,240,.8);display:flex;align-items:center;padding:0 9px;gap:5px;
        }
        .fvs6 .media-body { position:relative;aspect-ratio:16/10;overflow:hidden;background:#f1f5f9; }
        .fvs6 .ph { position:absolute;inset:0;z-index:1;display:grid;grid-template-columns:175px 1fr;background:#f8fafc; }
        .fvs6 .ph-side { background:white;border-right:1px solid #e2e8f0;padding:14px 12px;display:flex;flex-direction:column;gap:8px; }
        .fvs6 .ph-line { height:9px;border-radius:4px;background:#e2e8f0; }
        .fvs6 .ph-line.hi { background:rgba(59,111,190,.18); }
        .fvs6 .ph-main { padding:16px;display:flex;flex-direction:column;gap:10px; }
        .fvs6 .ph-head { height:11px;border-radius:4px;background:#cbd5e1;width:48%; }
        .fvs6 .ph-cards { display:flex;gap:8px; }
        .fvs6 .ph-card { flex:1;aspect-ratio:4/3;border-radius:8px;background:white;border:1px solid #e2e8f0;position:relative;overflow:hidden; }
        .fvs6 .ph-accent { position:absolute;bottom:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#3b6fbe,#7ba7d4); }
        .fvs6 .ph-rows { display:flex;flex-direction:column;gap:6px; }
        .fvs6 .ph-r { display:flex;gap:8px; }
        .fvs6 .ph-cta { height:28px;border-radius:8px;background:linear-gradient(135deg,#2d5fa8,#3b6fbe);box-shadow:0 0 14px rgba(59,111,190,.2); }
        .fvs6 .live-badge {
          position:absolute;bottom:12px;left:12px;z-index:3;
          display:flex;align-items:center;gap:7px;
          background:rgba(255,255,255,.92);backdrop-filter:blur(10px);
          border:1px solid rgba(226,232,240,.9);border-radius:9px;
          padding:6px 11px;box-shadow:0 4px 16px rgba(15,23,42,.07);
        }
        .fvs6 .live-dot { width:6px;height:6px;border-radius:50%;background:#22c55e;box-shadow:0 0 6px #22c55e; }
        .fvs6 .nav-dots { position:absolute;bottom:12px;right:12px;z-index:3;display:flex;gap:5px;align-items:center; }
        .fvs6 .nav-dot { height:5px;border-radius:99px;border:none;padding:0;background:rgba(203,213,225,.7);transition:all .3s cubic-bezier(.4,0,.2,1); }
        .fvs6 .nav-dot.active { background:linear-gradient(90deg,#2d5fa8,#60a5d4);box-shadow:0 0 6px rgba(59,111,190,.4); }
      `}</style>

      <section ref={sectionRef} className="fvs6 relative w-full overflow-visible -mt-6 md:-mt-8 pt-6 pb-12 md:pt-8 md:pb-16">

        <div className="feat-bg-grid"/>

        <div style={{
          position:"absolute",right:"8%",top:"30%",
          width:560,height:560,borderRadius:"50%",
          background:"radial-gradient(circle,rgba(99,130,200,.09) 0%,transparent 70%)",
          filter:"blur(55px)",pointerEvents:"none",zIndex:0,
          animation:"ambientGlow 6s ease-in-out infinite",
        }}/>

        {/* Abstract decorative elements */}
        <svg style={{position:"absolute",top:"5%",left:"5%",pointerEvents:"none",zIndex:0}} width="140" height="140" viewBox="0 0 140 140" fill="none" aria-hidden="true">
          <circle cx="70" cy="70" r="60" stroke="rgba(59,111,190,.07)" strokeWidth="1" strokeDasharray="8 6"/>
          <circle cx="70" cy="70" r="35" stroke="rgba(59,111,190,.05)" strokeWidth="1"/>
          <circle cx="70" cy="70" r="4" fill="rgba(59,111,190,.1)"/>
        </svg>
        <svg style={{position:"absolute",bottom:"8%",right:"3%",pointerEvents:"none",zIndex:0}} width="100" height="100" viewBox="0 0 100 100" fill="none" aria-hidden="true">
          <path d="M10 90 Q50 10 90 90" stroke="rgba(59,111,190,.06)" strokeWidth="1.2" fill="none" strokeDasharray="5 5"/>
          <path d="M20 85 Q50 25 80 85" stroke="rgba(59,111,190,.04)" strokeWidth="1" fill="none"/>
        </svg>
        {/* Small plus signs */}
        {[{t:"15%",l:"82%"},{t:"78%",l:"12%"},{t:"42%",l:"3%"}].map((p,i)=>(
          <svg key={i} style={{position:"absolute",top:p.t,left:p.l,pointerEvents:"none",zIndex:0}} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <line x1="8" y1="2" x2="8" y2="14" stroke="rgba(59,111,190,.12)" strokeWidth="1.2"/>
            <line x1="2" y1="8" x2="14" y2="8" stroke="rgba(59,111,190,.12)" strokeWidth="1.2"/>
          </svg>
        ))}
        {[{t:"22%",l:"92%"},{t:"60%",l:"6%"},{t:"88%",l:"78%"},{t:"35%",l:"96%"},{t:"70%",l:"2%"}].map((p,i)=>(
          <div key={i} style={{position:"absolute",top:p.t,left:p.l,width:4,height:4,borderRadius:"50%",background:"rgba(59,111,190,.1)",pointerEvents:"none",zIndex:0}}/>
        ))}

        <div className="relative z-10 mx-auto w-full px-5 sm:px-8 lg:px-16 xl:px-24">

          {/* ── Header (mobile only) ── */}
          <div className="flex flex-col gap-2 mb-4 lg:hidden">
            <span className="sec-label">Platform features</span>
            <div className="divider"/>
            <h2 className="sec-heading">
              See DynoWeb<br/>
              <span style={{position:"relative",display:"inline-block"}}>
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" fill="none" aria-hidden="true"
                  style={{position:"absolute",top:0,left:"2%",width:"96%",height:"100%",overflow:"hidden",pointerEvents:"none",zIndex:0}}>
                  <defs>
                    <linearGradient id="skFeatG" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%"   stopColor="white" stopOpacity="0"/>
                      <stop offset="10%"  stopColor="white" stopOpacity="1"/>
                      <stop offset="90%"  stopColor="white" stopOpacity="1"/>
                      <stop offset="100%" stopColor="white" stopOpacity="0"/>
                    </linearGradient>
                    <mask id="skFeatM"><rect x="0" y="0" width="100" height="100" fill="url(#skFeatG)"/></mask>
                  </defs>
                  <g mask="url(#skFeatM)">
                    <path className="sk-1" d="M2 52 C20 48,42 46,62 47 C78 48,90 50,98 49" stroke="#3b6fbe" strokeWidth="52" strokeLinecap="butt" opacity="0.18" fill="none"/>
                    <path className="sk-2" d="M2 51 C22 47,46 45,66 46 C80 47,91 49,98 48" stroke="#3b6fbe" strokeWidth="38" strokeLinecap="butt" opacity="0.55" fill="none"/>
                    <path className="sk-2" d="M4 74 C24 71,50 70,70 71 C84 72,93 73,98 72" stroke="#3b6fbe" strokeWidth="18" strokeLinecap="butt" opacity="0.5"  fill="none"/>
                    <path className="sk-3" d="M4 34 C24 31,48 30,68 31 C82 32,92 33,98 32" stroke="#2d5fa8" strokeWidth="3"  strokeLinecap="butt" opacity="0.32" fill="none"/>
                  </g>
                </svg>
                <span style={{position:"relative",zIndex:1,color:"#0f172a"}}>in action.</span>
              </span>
            </h2>
            <p style={{color:"#64748b",fontSize:".9rem",lineHeight:1.7,maxWidth:420}}>
              Five capabilities working as one continuous loop.
            </p>
          </div>

          {/* ══════════════════════════════════════════
              MOBILE LAYOUT (< lg)
          ══════════════════════════════════════════ */}
          <div className="flex flex-col gap-5 lg:hidden mt-2">

            {/* Video */}
            <div style={{position:"relative"}}>
              <div className="media-glow"/>
              <div className="media-card" style={{position:"relative",zIndex:1}}>
                <div className="browser-bar">
                  <div className="b-dot" style={{background:"#fca5a5"}}/>
                  <div className="b-dot" style={{background:"#fcd34d"}}/>
                  <div className="b-dot" style={{background:"#86efac"}}/>
                  <div className="b-url">
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                    <span style={{fontSize:".6rem",color:"#94a3b8",letterSpacing:".03em"}}>dynoweb.app/builder</span>
                  </div>
                </div>
                <div className="media-body">
                  <div className="ph">
                    <div className="ph-side">
                      {[100,75,60,85,65,50,80,70].map((w,i) => (
                        <div key={i} className={`ph-line${i===2?" hi":""}`} style={{width:`${w}%`}}/>
                      ))}
                    </div>
                    <div className="ph-main">
                      <div className="ph-head"/>
                      <div className="ph-cards">
                        {[0,1,2].map(i => (
                          <div key={i} className="ph-card">
                            <div style={{position:"absolute",inset:0,background:`linear-gradient(135deg,rgba(59,111,190,${.05+i*.03}) 0%,transparent 80%)`}}/>
                            <div className="ph-accent" style={{width:`${50+i*18}%`}}/>
                          </div>
                        ))}
                      </div>
                      <div className="ph-rows">
                        {([[70,30],[50,50],[85,15]] as [number,number][]).map(([a,b],i) => (
                          <div key={i} className="ph-r">
                            <div className="ph-line" style={{flex:a}}/><div className="ph-line" style={{flex:b,opacity:.5}}/>
                          </div>
                        ))}
                      </div>
                      <div className="ph-cta"/>
                    </div>
                  </div>
                  <video
                    ref={mobileVidRef}
                    key={`mob-${mobileActive}`}
                    src={features[mobileActive].videoSrc}
                    style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",zIndex:2,transition:"opacity .22s ease"}}
                    muted loop playsInline autoPlay
                  />
                  <div className="live-badge">
                    <div className="live-dot"/>
                    <span style={{fontSize:".68rem",fontWeight:600,color:"#334155",letterSpacing:".04em"}}>
                      {features[mobileActive].title}
                    </span>
                  </div>
                  <div className="nav-dots">
                    {features.map((_,i) => (
                      <div key={i} className={`nav-dot${i===mobileActive?" active":""}`} style={{width:i===mobileActive?16:5}}/>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Scrollable tab pills */}
            <div className="mob-tabs">
              {features.map((f, i) => (
                <button
                  key={f.id}
                  className={`mob-tab${i===mobileActive?" active":""}`}
                  onClick={() => setMobileActive(i)}
                >
                  <span className="mob-tab-icon">{f.icon}</span>
                  {f.title}
                </button>
              ))}
            </div>

            {/* Active feature description */}
            <div className="mob-desc-card">
              <p style={{fontSize:".8rem",fontWeight:700,color:"#2d5fa8",marginBottom:4}}>
                {features[mobileActive].subtitle}
              </p>
              <p style={{fontSize:".82rem",color:"#64748b",lineHeight:1.72}}>
                {features[mobileActive].description}
              </p>
            </div>

          </div>

          {/* ══════════════════════════════════════════
              DESKTOP LAYOUT (lg+)
          ══════════════════════════════════════════ */}
          {/* Desktop header (above grid) */}
          <div className="hidden lg:flex flex-col gap-2 mb-1" style={{position:"relative"}}>
            <span className="sec-label">Platform features</span>
            <div className="divider"/>
            <h2 className="sec-heading">
              See DynoWeb<br/>
              <span style={{position:"relative",display:"inline-block"}}>
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" fill="none" aria-hidden="true"
                  style={{position:"absolute",top:0,left:"2%",width:"96%",height:"100%",overflow:"hidden",pointerEvents:"none",zIndex:0}}>
                  <defs>
                    <linearGradient id="skFeatG2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%"   stopColor="white" stopOpacity="0"/>
                      <stop offset="10%"  stopColor="white" stopOpacity="1"/>
                      <stop offset="90%"  stopColor="white" stopOpacity="1"/>
                      <stop offset="100%" stopColor="white" stopOpacity="0"/>
                    </linearGradient>
                    <mask id="skFeatM2"><rect x="0" y="0" width="100" height="100" fill="url(#skFeatG2)"/></mask>
                  </defs>
                  <g mask="url(#skFeatM2)">
                    <path className="sk-1" d="M2 52 C20 48,42 46,62 47 C78 48,90 50,98 49" stroke="#3b6fbe" strokeWidth="52" strokeLinecap="butt" opacity="0.18" fill="none"/>
                    <path className="sk-2" d="M2 51 C22 47,46 45,66 46 C80 47,91 49,98 48" stroke="#3b6fbe" strokeWidth="38" strokeLinecap="butt" opacity="0.55" fill="none"/>
                    <path className="sk-2" d="M4 74 C24 71,50 70,70 71 C84 72,93 73,98 72" stroke="#3b6fbe" strokeWidth="18" strokeLinecap="butt" opacity="0.5"  fill="none"/>
                    <path className="sk-3" d="M4 34 C24 31,48 30,68 31 C82 32,92 33,98 32" stroke="#2d5fa8" strokeWidth="3"  strokeLinecap="butt" opacity="0.32" fill="none"/>
                  </g>
                </svg>
                <span style={{position:"relative",zIndex:1,color:"#0f172a"}}>in action.</span>
              </span>
            </h2>
            <p style={{color:"#64748b",fontSize:".9rem",lineHeight:1.7,maxWidth:420}}>
              Five capabilities working as one continuous loop.
            </p>

            {/* Animated cube */}
            <div className="feat-cube hidden lg:flex">
              <div className="feat-cube-layer feat-cube-glow"/>
              <div className="feat-cube-layer feat-cube-color"/>
            </div>
          </div>

          <div className="hidden lg:grid" style={{gridTemplateColumns:"1fr 1fr",gap:"0 40px",alignItems:"start"}}>

            {/* Left: carousel */}
            <div className="flex flex-col">
              <div style={{position:"relative",paddingLeft:18}}>
                <div className="rail">
                  <div className="rail-bg"/>
                  <div className="rail-fill" style={{
                    top:`${(Math.floor(VISIBLE/2)/VISIBLE)*100}%`,
                    height:`${(1/VISIBLE)*100}%`,
                  }}/>
                </div>
                <div ref={scrollRef} className="carousel-shell" style={{touchAction:"none",minHeight:VISIBLE*ITEM_HEIGHT,zIndex:20,position:"relative"}}>
                  <div className="carousel-window" style={{height:VISIBLE*ITEM_HEIGHT}}>
                    {slots.map(({slotOffset,featIdx}) => {
                      const isActive = slotOffset === 0;
                      const yPos = (Math.floor(VISIBLE/2)+slotOffset)*ITEM_HEIGHT;
                      const dist = Math.abs(slotOffset);
                      const opacity = Math.max(0,1-dist*0.55);
                      const scale = 1-dist*0.04;
                      return (
                        <div
                          key={`${slotOffset}`}
                          className={`carousel-item${isActive?" is-active":""}`}
                          style={{transform:`translateY(${yPos}px) scale(${scale})`,opacity,height:ITEM_HEIGHT,top:0}}
                        >
                          <div className="c-icon">{features[featIdx].icon}</div>
                          <div className="c-text">
                            <p className="c-title">{features[featIdx].title}</p>
                            <div className="c-expand">
                              <div className="c-expand-inner">
                                <p className="c-subtitle">{features[featIdx].subtitle}</p>
                                <p className="c-desc">{features[featIdx].description}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="scroll-hint">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M5 12l7 7 7-7"/>
                  </svg>
                  Scroll to explore
                </div>
              </div>
            </div>

            {/* Right: video */}
            <div style={{alignSelf:"center"}}>
              <div style={{position:"relative"}}>
                <div className="media-glow"/>
                <div className="media-card" style={{position:"relative",zIndex:1}}>
                  <div className="browser-bar">
                    <div className="b-dot" style={{background:"#fca5a5"}}/>
                    <div className="b-dot" style={{background:"#fcd34d"}}/>
                    <div className="b-dot" style={{background:"#86efac"}}/>
                    <div className="b-url">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      </svg>
                      <span style={{fontSize:".62rem",color:"#94a3b8",letterSpacing:".03em"}}>dynoweb.app/builder</span>
                    </div>
                  </div>
                  <div className="media-body">
                    <div className="ph">
                      <div className="ph-side">
                        {[100,75,60,85,65,50,80,70].map((w,i) => (
                          <div key={i} className={`ph-line${i===2?" hi":""}`} style={{width:`${w}%`}}/>
                        ))}
                      </div>
                      <div className="ph-main">
                        <div className="ph-head"/>
                        <div className="ph-cards">
                          {[0,1,2].map(i => (
                            <div key={i} className="ph-card">
                              <div style={{position:"absolute",inset:0,background:`linear-gradient(135deg,rgba(59,111,190,${.05+i*.03}) 0%,transparent 80%)`}}/>
                              <div className="ph-accent" style={{width:`${50+i*18}%`}}/>
                            </div>
                          ))}
                        </div>
                        <div className="ph-rows">
                          {([[70,30],[50,50],[85,15]] as [number,number][]).map(([a,b],i) => (
                            <div key={i} className="ph-r">
                              <div className="ph-line" style={{flex:a}}/><div className="ph-line" style={{flex:b,opacity:.5}}/>
                            </div>
                          ))}
                        </div>
                        <div className="ph-cta"/>
                      </div>
                    </div>
                    <video
                      ref={videoRef}
                      key={videoKey}
                      src={features[normActive].videoSrc}
                      style={{
                        position:"absolute",inset:0,width:"100%",height:"100%",
                        objectFit:"cover",opacity:videoOpacity,
                        transition:"opacity .22s ease",zIndex:2,
                      }}
                      muted loop playsInline autoPlay
                    />
                    <div className="live-badge">
                      <div className="live-dot"/>
                      <span style={{fontSize:".72rem",fontWeight:600,color:"#334155",letterSpacing:".04em"}}>
                        {features[normActive].title}
                      </span>
                    </div>
                    <div className="nav-dots">
                      {features.map((_,i) => (
                        <div key={i} className={`nav-dot${i===normActive?" active":""}`} style={{width:i===normActive?18:5}}/>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}