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
    id: "watchdog", tab: "Behavioral Tracking",
    headline: "Watch Every Move,\nInvisibly.",
    subline: "11 behavioral signals captured without slowing your store by a millisecond.",
    bullets: [
      { title: "Rage & Dead Clicks", desc: "Know exactly where frustration is happening — before customers bounce." },
      { title: "Fat Finger Misses", desc: "Mobile-specific signal that catches buttons your customers literally can't tap." },
      { title: "Form Abandonment", desc: "See the exact field that's killing your checkout conversions." },
    ],
    caption: "Signals captured live across every session, every device.",
    videoSrc: "/videos/ai-builder.mp4",
    icon: (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 12l10 5 10-5"/><path d="M2 17l10 5 10-5"/></svg>),
  },
  {
    id: "ai-engine", tab: "AI Engine",
    headline: "A Senior UX Designer,\nAuditing 24/7.",
    subline: "Three AI layers work together so every suggestion is specific, ranked, and actionable.",
    bullets: [
      { title: "Rule-Based Layer", desc: "Strict UX heuristics applied to every page, every session." },
      { title: "Pattern Recognition", desc: "Statistical analysis across sessions spots trends humans miss." },
      { title: "LLM Reasoning", desc: "Advanced reasoning generates solutions — not just observations." },
    ],
    caption: "No generic advice. Every fix is tailored to your exact store.",
    videoSrc: "/videos/template-system.mp4",
    icon: (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><path d="M17.5 14v6M14.5 17h6"/></svg>),
  },
  {
    id: "pecti", tab: "ROI Scoring",
    headline: "Always Know\nWhat to Fix First.",
    subline: "Every suggestion graded on Proof, Ease, Cost, Time, and Impact.",
    bullets: [
      { title: "Quick Wins Surface First", desc: "High-impact, low-effort fixes are automatically ranked at the top." },
      { title: "No More Guessing", desc: "Stop debating what to A/B test — the list is already ranked for you." },
      { title: "Revenue Tied to Each Fix", desc: "See the estimated uplift before you even click Apply." },
    ],
    caption: "Weeks of prioritisation work done in seconds.",
    videoSrc: "/videos/safe-publishing.mp4",
    icon: (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21.5S4 17 4 11V5.5l8-3 8 3V11c0 6-8 10.5-8 10.5z"/><path d="M9 12l2 2 4-4"/></svg>),
  },
  {
    id: "draft", tab: "Draft Themes",
    headline: "Fix It in One Click.\nReview Before It Goes Live.",
    subline: "DynoWeb writes the code, duplicates your theme, and applies the fix safely.",
    bullets: [
      { title: "Zero Code Required", desc: "No developers, no sprints. Click Apply and the fix is written for you." },
      { title: "Your Live Store is Safe", desc: "Every fix lands in an isolated Draft Theme — never your live theme." },
      { title: "Full Review Before Publish", desc: "Preview, tweak, or discard. You're always in control." },
    ],
    caption: "From AI suggestion to deployable draft in under 30 seconds.",
    videoSrc: "/videos/mobile-performance.mp4",
    icon: (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="2" width="10" height="20" rx="2.5"/><path d="M10 6h4"/></svg>),
  },
  {
    id: "clarity", tab: "Clarity Sync",
    headline: "Supercharge the Data\nYou Already Have.",
    subline: "Already on Microsoft Clarity? DynoWeb layers AI on top — no extra tracking needed.",
    bullets: [
      { title: "Instant Sync", desc: "Connect your Clarity account in one click — no code, no setup." },
      { title: "AI on Your Heatmaps", desc: "Our engine reads your heatmaps and session replays to find patterns." },
      { title: "Deeper Scroll Insights", desc: "Scroll maps combined with behavioral signals reveal the full picture." },
    ],
    caption: "Deeper insights from data you already paid for.",
    videoSrc: "/videos/optimize-test.mp4",
    icon: (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="5" cy="5" r="2.5"/><circle cx="19" cy="5" r="2.5"/><circle cx="12" cy="19" r="2.5"/><path d="M5 7.5V12a7 7 0 0 0 7 7M19 7.5V12a7 7 0 0 1-7 7"/><path d="M12 4v8"/></svg>),
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
            grid-template-columns:1fr 1fr;
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
          font-size:clamp(1.25rem,4vw,2rem);
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
      `}</style>

      <section className="fvs relative w-full" style={{background:"#0a0a0a"}}>

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
                <button key={f.id} className={`feat-tab${i===active?" active":""}`} onClick={() => changeTab(i)}>
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
                  <span className="feat-browser-url">dynoweb.app/dashboard</span>
                </div>
              </div>

              <div className="feat-mockup-body">
                {/* Dark skeleton */}
                <div className="feat-ph">
                  <div className="feat-ph-side">
                    {[100,75,60,85,65,50,80,70].map((w,i) => (
                      <div key={i} className={`feat-ph-line${i===2?" hi":""}`} style={{width:`${w}%`}}/>
                    ))}
                  </div>
                  <div className="feat-ph-main">
                    <div className="feat-ph-head"/>
                    <div className="feat-ph-cards">
                      {[0,1,2].map(i => (
                        <div key={i} className="feat-ph-card">
                          <div style={{position:"absolute",inset:0,background:`linear-gradient(135deg,rgba(59,111,190,${.06+i*.025}) 0%,transparent 80%)`}}/>
                          <div className="feat-ph-accent" style={{width:`${48+i*16}%`}}/>
                        </div>
                      ))}
                    </div>
                    <div className="feat-ph-rows">
                      {([[68,32],[52,48],[82,18]] as [number,number][]).map(([a,b],i) => (
                        <div key={i} className="feat-ph-r">
                          <div className="feat-ph-line" style={{flex:a}}/>
                          <div className="feat-ph-line" style={{flex:b,opacity:.4}}/>
                        </div>
                      ))}
                    </div>
                    <div className="feat-ph-cta"/>
                  </div>
                </div>
                {/* Video */}
                <video ref={videoRef} key={`v-${active}`} src={feat.videoSrc} className="feat-video" muted loop playsInline autoPlay/>
                {/* Badge */}
                <div className="feat-live-badge">
                  <div className="feat-live-dot"/>
                  <span style={{fontSize:".58rem",fontWeight:600,color:"rgba(255,255,255,0.5)",letterSpacing:".06em"}}>LIVE PREVIEW</span>
                </div>
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