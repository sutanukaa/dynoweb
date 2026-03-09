"use client";
import { useEffect, useRef } from "react";
import { Particles } from "@/components/particles";

export default function HeroSectionOne() {
  const sketchRef   = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = sketchRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("sketch-visible"); observer.disconnect(); } },
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const line1 = ["Stop"];
  const line2 = ["Let", "AI", "fix", "your", "store."];

  const trustBadges = [
    "Zero impact on page speed (<6KB)",
    "100% SEO Safe",
    "Native Shopify App",
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Karla:wght@400;500;600;700&display=swap');

        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .anim-in { opacity: 0; animation: fadeSlideIn 0.5s ease-out forwards; }
        .delay-0   { animation-delay: 0ms; }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-500 { animation-delay: 500ms; }

        @keyframes highlighterSweep {
          from { clip-path: inset(0 100% 0 0); }
          to   { clip-path: inset(0 0% 0 0); }
        }
        .sketch-highlight-svg { pointer-events:none; clip-path: inset(0 100% 0 0); }
        .sketch-visible .sketch-highlight-svg {
          animation: highlighterSweep 0.5s cubic-bezier(0.25,0.1,0.25,1) 0.15s forwards;
        }
        .sketch-accent-text {
          position: relative; z-index: 1;
          display: inline-block; margin-right: 0.25em; cursor: default;
          color: #ffffff !important;
        }

        /* ── Badge — exactly like reference: dark pill, thin border ── */
        .hero-badge {
          display: inline-flex; align-items: center; gap: 10px;
          border-radius: 9999px;
          border: 1px solid rgba(255,255,255,0.2);
          background: transparent;
          padding: 6px 14px 6px 10px;
          font-family: 'Karla', sans-serif;
          font-size: clamp(0.8rem, 1vw, 1.4rem);
          color: rgba(255,255,255,0.9);
          cursor: default;
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s;
          text-align: center;
          justify-content: center;
        }
        .hero-badge:hover { background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.4); }
        .hero-badge .divider { display:block; width:1px; height:18px; background: rgba(255,255,255,0.15); }
        .hero-badge .arrow { transition: transform 0.15s ease-out; }
        .hero-badge:hover .arrow { transform: translateX(3px); }

        /* ── Headline ── */
        .hero-headline {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(2.4rem, 5.5vw, 4.5rem);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.025em;
          text-align: center;
          color: #ffffff;
          text-shadow: 0 0 50px rgba(255,255,255,0.2);
          word-wrap: break-word;
          max-width: 90vw;
          text-wrap: balance;
        }
        @media (min-width: 900px) {
          .hero-headline { max-width: 80vw; }
        }
        @media (min-width: 1400px) {
          .hero-headline { max-width: 70vw; }
        }
        .word-hover { display:inline-block; cursor:default; }

        /* ── Sub ── */
        .hero-sub {
          font-family: 'Karla', sans-serif;
          font-size: clamp(1rem, 1.4vw, 1.5rem);
          line-height: 1.65;
          text-align: center;
          color: rgba(255,255,255,0.5);
          letter-spacing: 0.02em;
          max-width: max(36rem, 38vw);
        }

        /* ── Trust badges ── */
        .trust-badge {
          display: inline-flex; align-items: center;
          padding: 5px 13px; border-radius: 99px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          font-family: 'Karla', sans-serif;
          font-size: clamp(.7rem, .85vw, 1.2rem); font-weight: 600;
          color: rgba(255,255,255,0.25); letter-spacing: .01em;
          white-space: nowrap;
          transition: border-color .2s, color .2s;
        }
        .trust-badge:hover { border-color: rgba(255,255,255,.14); color: rgba(255,255,255,.45); }

        /* ── Marquee ── */
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex; width: max-content;
          animation: marquee 28s linear infinite;
        }
        .marquee-track:hover { animation-play-state: paused; }

        /* ── Glassmorphic floating cards ── */
        @keyframes floatA {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-7px); }
        }
        @keyframes floatB {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-5px); }
        }
        @keyframes floatC {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-6px); }
        }
        @keyframes floatD {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-4px); }
        }
        @keyframes fadeSlideUp {
          from { opacity:0; transform: translateY(32px) scale(0.96); filter: blur(4px); }
          to   { opacity:1; transform: translateY(0) scale(1); filter: blur(0px); }
        }

        .glass-card {
          backdrop-filter: blur(14px) saturate(160%);
          -webkit-backdrop-filter: blur(14px) saturate(160%);
          background: rgba(255,255,255,0.055);
          border: 1px solid rgba(255,255,255,0.13);
          border-radius: 16px;
          box-shadow:
            0 4px 24px rgba(0,0,0,0.45),
            inset 0 1px 0 rgba(255,255,255,0.1);
          font-family: 'Karla', sans-serif;
          color: #fff;
          opacity: 0;
          position: absolute;
          pointer-events: none;
          z-index: 20;
        }

        /* Live fix card — bottom-left */
        .glass-card-fix {
          bottom: 13%;
          left: max(1.5rem, 3vw);
          width: clamp(160px, 16vw, 210px);
          padding: 10px 12px;
          animation:
            fadeSlideUp 1s cubic-bezier(0.16,1,0.3,1) 0.9s forwards,
            floatA 5s ease-in-out 1.9s infinite;
        }

        /* Metrics card — top-right, pulled inward */
        .glass-card-metrics {
          top: 14%;
          right: max(5rem, 9vw);
          width: clamp(130px, 13vw, 168px);
          padding: 9px 11px;
          animation:
            fadeSlideUp 1s cubic-bezier(0.16,1,0.3,1) 1.2s forwards,
            floatB 6s ease-in-out 2.2s infinite;
        }

        /* Heatmap card — top-left, nudged inward and lower */
        .glass-card-heatmap {
          top: 24%;
          left: max(4rem, 7vw);
          width: clamp(140px, 14vw, 178px);
          padding: 9px 11px;
          animation:
            fadeSlideUp 1s cubic-bezier(0.16,1,0.3,1) 1.5s forwards,
            floatC 7s ease-in-out 2.5s infinite;
        }

        /* Journey card — bottom-right */
        .glass-card-journey {
          bottom: 13%;
          right: max(1.5rem, 3vw);
          width: clamp(150px, 15vw, 196px);
          padding: 10px 12px;
          animation:
            fadeSlideUp 1s cubic-bezier(0.16,1,0.3,1) 1.8s forwards,
            floatD 5.5s ease-in-out 2.8s infinite;
        }

        /* pulse dot */
        @keyframes pulse-dot {
          0%,100% { opacity:1; transform: scale(1); }
          50%      { opacity:.5; transform: scale(1.5); }
        }
        .live-dot {
          width:7px; height:7px; border-radius:50%;
          background: #6eb0ff;
          box-shadow: 0 0 6px #6eb0ff;
          animation: pulse-dot 1.8s ease-in-out infinite;
          flex-shrink: 0;
        }

        /* mini bar sparkline */
        .spark-bar {
          display: flex; align-items: flex-end; gap: 2px; height: 22px;
        }
        .spark-bar span {
          flex:1; border-radius: 2px 2px 0 0;
          background: rgba(255,255,255,0.18);
          transition: background .2s;
        }
        .spark-bar span.hi { background: rgba(255,255,255,0.45); }

        /* conversion metric */
        .metric-num {
          font-size: clamp(0.95rem, 1.4vw, 1.2rem);
          font-weight: 700; letter-spacing: -0.03em;
          line-height: 1;
        }
        .metric-label {
          font-size: 0.55rem; font-weight: 600;
          letter-spacing: 0.06em; text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          margin-top: 2px;
        }
        .metric-delta {
          display: inline-flex; align-items: center; gap: 3px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 99px;
          padding: 2px 5px;
          font-size: 0.55rem; font-weight: 600;
          color: rgba(255,255,255,0.4); letter-spacing: 0.01em;
          white-space: nowrap;
        }

        /* fix item row */
        .fix-row {
          display: flex; align-items: center; gap: 7px;
          padding: 5px 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .fix-row:last-child { border-bottom: none; padding-bottom: 0; }
        .fix-icon {
          width: 22px; height: 22px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          font-size: 11px;
        }
        .fix-text { flex:1; }
        .fix-title { font-size: 0.68rem; font-weight: 600; color: rgba(255,255,255,0.75); }
        .fix-sub   { font-size: 0.6rem; color: rgba(255,255,255,0.3); margin-top:1px; }
        .fix-badge {
          font-size: 0.58rem; font-weight: 700;
          padding: 2px 6px; border-radius: 99px;
          white-space: nowrap;
        }
        .fix-badge.done {
          background: rgba(110,176,255,0.12);
          border: 1px solid rgba(110,176,255,0.25);
          color: #6eb0ff;
        }
        .fix-badge.fixing {
          background: rgba(110,176,255,0.08);
          border: 1px solid rgba(110,176,255,0.18);
          color: rgba(110,176,255,0.7);
        }

        /* ── Heatmap card styles ── */
        .heatmap-grid {
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          grid-template-rows: repeat(4, 1fr);
          gap: 2px;
          height: 40px;
          border-radius: 5px;
          overflow: hidden;
          margin-top: 7px;
        }
        .heatmap-cell {
          border-radius: 2px;
        }
        .heatmap-stat {
          display: flex; align-items: center; justify-content: space-between;
          margin-top: 6px;
        }
        .heatmap-stat-item {
          display: flex; align-items: center; gap: 4px;
        }
        .heatmap-dot {
          width: 5px; height: 5px; border-radius: 50%;
          flex-shrink: 0;
        }

        /* ── Journey card styles ── */
        .journey-step {
          display: flex; align-items: center; gap: 7px;
          padding: 4px 0;
        }
        .journey-line {
          display: flex; flex-direction: column; align-items: center;
          gap: 0;
        }
        .journey-node {
          width: 18px; height: 18px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 9px;
          flex-shrink: 0;
        }
        .journey-connector {
          width: 1px; height: 10px;
          background: rgba(255,255,255,0.1);
          margin: 1px auto;
        }
        .journey-label {
          font-size: 0.65rem; font-weight: 600;
          color: rgba(255,255,255,0.65);
          flex: 1;
        }
        .journey-count {
          font-size: 0.58rem;
          color: rgba(255,255,255,0.28);
          white-space: nowrap;
        }
        .journey-pct {
          font-size: 0.58rem; font-weight: 700;
          color: rgba(110,176,255,0.7);
          white-space: nowrap;
        }

        /* hide float cards on very small screens */
        @media (max-width: 700px) {
          .glass-card { display: none; }
        }
      `}</style>

      {/* ── Root: pure near-black, full page ── */}
      <div style={{ background: "#0a0a0a", position: "relative", minHeight: "100svh", display: "flex", flexDirection: "column" }}>

        {/* Particles background */}
        <Particles
          className="absolute inset-0 z-0"
          quantity={80}
          color="#ffffff"
          ease={10}
          size={0.4}
          staticity={50}
          refresh
        />

        {/* ── Hero section: standardized container width ── */}
        <section style={{
          position: "relative",
          margin: "0 auto",
          width: "100%",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}>

          {/* ── TOP RADIAL SHADE ── */}
          <div aria-hidden="true" style={{
            position: "absolute", inset: 0, top: "-3.5rem",
            pointerEvents: "none", zIndex: 0, overflow: "hidden",
            background: "radial-gradient(35% 80% at 49% 0%, rgba(255,255,255,0.07), transparent)",
          }} />

          {/* ── SIDE BORDER LINES ── */}
          <div aria-hidden="true" style={{
            position: "absolute", top: 0, left: 0, bottom: 0, width: "1px",
            background: "rgba(255,255,255,0.13)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 8%, black 78%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 8%, black 78%, transparent 100%)",
            zIndex: 10, pointerEvents: "none",
          }} />
          <div aria-hidden="true" style={{
            position: "absolute", top: 0, right: 0, bottom: 0, width: "1px",
            background: "rgba(255,255,255,0.13)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 8%, black 78%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 8%, black 78%, transparent 100%)",
            zIndex: 10, pointerEvents: "none",
          }} />

          {/* ════════════════════════════════════════
              GLASS CARD 1 — "AI Fix Applied" (bottom-left)
          ════════════════════════════════════════ */}
          <div className="glass-card glass-card-fix">
            {/* Header row */}
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"8px" }}>
              <div style={{ display:"flex", alignItems:"center", gap:"7px" }}>
                <div className="live-dot" />
                <span style={{ fontSize:"0.62rem", fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", color:"rgba(255,255,255,0.35)" }}>
                  Live Fixes
                </span>
              </div>
              <span style={{ fontSize:"0.58rem", color:"rgba(255,255,255,0.2)" }}>just now</span>
            </div>

            {/* Fix rows */}
            <div className="fix-row">
              <div className="fix-icon" style={{ background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.1)" }}>🛒</div>
              <div className="fix-text">
                <div className="fix-title">Cart abandonment copy</div>
                <div className="fix-sub">+12% checkout rate</div>
              </div>
              <span className="fix-badge done">Fixed</span>
            </div>
            <div className="fix-row">
              <div className="fix-icon" style={{ background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.1)" }}>📸</div>
              <div className="fix-text">
                <div className="fix-title">Product image order</div>
                <div className="fix-sub">Optimising…</div>
              </div>
              <span className="fix-badge fixing">AI working</span>
            </div>
          </div>

          {/* ════════════════════════════════════════
              GLASS CARD 2 — Conversion metric (top-right)
          ════════════════════════════════════════ */}
          <div className="glass-card glass-card-metrics">
            {/* Metric */}
            <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:"8px" }}>
              <div>
                <div className="metric-num">+24.7%</div>
                <div className="metric-label">Conversion rate</div>
              </div>
              <span className="metric-delta">
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 15l-6-6-6 6"/>
                </svg>
                This week
              </span>
            </div>

            {/* Sparkline bars */}
            <div className="spark-bar">
              {[40, 55, 45, 60, 52, 70, 65, 80, 72, 95].map((h, i) => (
                <span key={i} className={i >= 8 ? "hi" : ""} style={{ height:`${h}%` }} />
              ))}
            </div>

            {/* Footer label */}
            <div style={{ marginTop:"6px", fontSize:"0.58rem", color:"rgba(255,255,255,0.22)", display:"flex", alignItems:"center", gap:"4px" }}>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
              </svg>
              Tracked across 1,204 sessions
            </div>
          </div>

          {/* ════════════════════════════════════════
              GLASS CARD 3 — Visual Heatmap (top-left)
          ════════════════════════════════════════ */}
          <div className="glass-card glass-card-heatmap">
            {/* Header */}
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
              <div style={{ display:"flex", alignItems:"center", gap:"6px" }}>
                <span style={{ fontSize:"0.62rem", fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", color:"rgba(255,255,255,0.35)" }}>
                  Heatmap
                </span>
              </div>
              <span style={{
                fontSize:"0.55rem", fontWeight:700, padding:"2px 6px", borderRadius:"99px",
                background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.1)",
                color:"rgba(255,255,255,0.35)",
              }}>Frustration</span>
            </div>

            {/* Mini heatmap grid — muted, desaturated tones */}
            <div className="heatmap-grid">
              {[
                // row 1
                0.05,0.1,0.2,0.6,0.9,0.7,0.15,0.05,
                // row 2
                0.05,0.15,0.3,0.85,1.0,0.8,0.2,0.08,
                // row 3
                0.08,0.1,0.15,0.4,0.6,0.35,0.1,0.05,
                // row 4
                0.03,0.05,0.08,0.15,0.2,0.1,0.05,0.03,
              ].map((intensity, i) => {
                // Desaturated: low-intensity = dark grey, high = muted warm grey-red
                const base = 30 + intensity * 40;
                const warm = intensity * 25;
                const a = 0.12 + intensity * 0.55;
                return (
                  <div
                    key={i}
                    className="heatmap-cell"
                    style={{ background: `rgba(${Math.round(base + warm)},${Math.round(base - warm * 0.4)},${Math.round(base - warm * 0.4)},${a})` }}
                  />
                );
              })}
            </div>

            {/* Stats row */}
            <div className="heatmap-stat">
              <div className="heatmap-stat-item">
                <div className="heatmap-dot" style={{ background:"rgba(200,160,140,0.6)" }} />
                <span style={{ fontSize:"0.58rem", color:"rgba(255,255,255,0.3)" }}>84 rage clicks</span>
              </div>
              <div className="heatmap-stat-item">
                <div className="heatmap-dot" style={{ background:"rgba(180,180,140,0.5)" }} />
                <span style={{ fontSize:"0.58rem", color:"rgba(255,255,255,0.3)" }}>37 dead</span>
              </div>
            </div>
          </div>

          {/* ════════════════════════════════════════
              GLASS CARD 4 — Customer Journey (bottom-right)
          ════════════════════════════════════════ */}
          <div className="glass-card glass-card-journey">
            {/* Header */}
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"8px" }}>
              <div style={{ display:"flex", alignItems:"center", gap:"6px" }}>
                <span style={{ fontSize:"0.62rem", fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", color:"rgba(255,255,255,0.35)" }}>
                  Top Journey
                </span>
              </div>
              <span style={{ fontSize:"0.58rem", color:"rgba(255,255,255,0.2)" }}>last 7d</span>
            </div>

            {/* Journey steps */}
            {[
              { icon:"🏠", label:"Homepage", count:"4,821", pct:null, isStart: true },
              { icon:"👟", label:"Product page", count:"2,340", pct:"48%", isStart: false },
              { icon:"🛒", label:"Cart", count:"891", pct:"38%", isStart: false },
              { icon:"✅", label:"Checkout", count:"412", pct:"46%", isStart: false },
            ].map((step, i, arr) => (
              <div key={i}>
                <div className="journey-step">
                  <div className="journey-node" style={{
                    background: step.pct ? "rgba(110,176,255,0.12)" : "rgba(255,255,255,0.08)",
                    border: `1px solid ${step.pct ? "rgba(110,176,255,0.25)" : "rgba(255,255,255,0.1)"}`,
                  }}>
                    {step.icon}
                  </div>
                  <span className="journey-label">{step.label}</span>
                  <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end", gap:"1px" }}>
                    <span className="journey-count">{step.count}</span>
                    {step.pct && <span className="journey-pct">{step.pct} →</span>}
                  </div>
                </div>
                {i < arr.length - 1 && (
                  <div style={{ display:"flex", alignItems:"center", gap:"8px", paddingLeft:"6px" }}>
                    <div style={{ width:"1px", height:"10px", background:"rgba(255,255,255,0.08)", marginLeft:"10px" }} />
                  </div>
                )}
              </div>
            ))}

            {/* Footer */}
            <div style={{
              marginTop:"8px", paddingTop:"8px",
              borderTop:"1px solid rgba(255,255,255,0.06)",
              display:"flex", alignItems:"center", justifyContent:"space-between",
            }}>
              <span style={{ fontSize:"0.62rem", color:"rgba(255,255,255,0.28)" }}>Conversion funnel</span>
              <span style={{
                fontSize:"0.65rem", fontWeight:700,
                color:"#6eb0ff",
              }}>8.5% CVR</span>
            </div>
          </div>

          {/* ── MAIN CONTENT ── */}
          <div className="relative z-10 mx-auto w-full" style={{
            padding: "6rem max(48px, 5vw)",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            gap: "1.35rem",
          }}>

            <div aria-hidden="true" style={{ position:"absolute", inset:0, pointerEvents:"none", zIndex:0, overflow:"hidden" }}>
              <div style={{
                position:"absolute", top:0, bottom:0, left:"1rem", width:"1px",
                background:"linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.1) 100%)",
              }} />
              <div style={{
                position:"absolute", top:0, bottom:0, right:"1rem", width:"1px",
                background:"linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.1) 100%)",
              }} />
            </div>

            {/* Badge */}
            <a href="#" className="hero-badge anim-in delay-500">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
              </svg>
              <span>Shopify&apos;s AI-powered storefront optimizer</span>
              <span className="divider" />
              <svg className="arrow" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>

            {/* Headline */}
            <h1 className="hero-headline anim-in delay-100">
              {line1.map((word, i) => (
                <span key={i} className="word-hover" style={{ marginRight:"0.25em" }}>{word}</span>
              ))}
              <span ref={sketchRef} style={{ position:"relative", display:"inline-block", whiteSpace:"nowrap" }}>
                <svg className="sketch-highlight-svg" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none" aria-hidden="true"
                  style={{ position:"absolute", top:0, left:"4%", width:"92%", height:"100%", overflow:"hidden", pointerEvents:"none", zIndex:0 }}>
                  <defs>
                    <linearGradient id="tg" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%"   stopColor="white" stopOpacity="0"/>
                      <stop offset="10%"  stopColor="white" stopOpacity="1"/>
                      <stop offset="90%"  stopColor="white" stopOpacity="1"/>
                      <stop offset="100%" stopColor="white" stopOpacity="0"/>
                    </linearGradient>
                    <mask id="tm"><rect x="0" y="0" width="100" height="100" fill="url(#tg)"/></mask>
                  </defs>
                  <g mask="url(#tm)">
                    <path d="M2 52 C20 48,42 46,62 47 C78 48,90 50,98 49" stroke="#1a3a7a" strokeWidth="52" strokeLinecap="butt" opacity="0.7" fill="none"/>
                    <path d="M2 51 C22 47,46 45,66 46 C80 47,91 49,98 48" stroke="#3a7adc" strokeWidth="38" strokeLinecap="butt" opacity="0.45" fill="none"/>
                    <path d="M4 74 C24 71,50 70,70 71 C84 72,93 73,98 72" stroke="#5aaeff" strokeWidth="18" strokeLinecap="butt" opacity="0.3" fill="none"/>
                    <path d="M4 34 C24 31,48 30,68 31 C82 32,92 33,98 32" stroke="#7ec8ff" strokeWidth="2.5" strokeLinecap="butt" opacity="0.7" fill="none"/>
                    <path d="M2 51 C22 47,46 45,66 46 C80 47,91 49,98 48" stroke="#9dd8ff" strokeWidth="1.5" strokeLinecap="butt" opacity="0.5" fill="none"/>
                  </g>
                </svg>
                <span className="sketch-accent-text">guessing.</span>
              </span>
              <br />
              {line2.map((word, i) => (
                <span key={i} className="word-hover" style={{ marginRight: i < line2.length - 1 ? "0.25em" : 0 }}>{word}</span>
              ))}
            </h1>

            {/* Sub */}
            <p className="hero-sub anim-in delay-200">
              Dynoweb invisibly watches your visitors, finds exactly where they get frustrated,
              and automatically fixes it in one click. Zero code. Zero risk.
            </p>

            {/* CTA */}
            <div className="anim-in delay-300" style={{ display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"center", gap:"0.75rem", paddingTop:"0.5rem" }}>
              <a href="/waitlist" className="uv-btn-wrapper" style={{textDecoration:"none"}}>
                <div className="uv-btn" style={{background:'#fff', color:'#000', border:'1px solid #000', borderRadius:'999px', padding:'12px 32px', display:'flex', alignItems:'center', gap:'8px', boxShadow:'0 2px 8px rgba(0,0,0,0.08)'}}>
                  <div className="uv-txt-wrapper">
                    <div className="uv-txt-1">
                      {Array.from("Join the waitlist now").map((c, i) =>
                        c === " "
                          ? <span key={i} style={{display:"inline-block",width:"0.4em"}} />
                        : <span key={i} className="uv-btn-letter" style={{color:'#000'}}>{c}</span>
                      )}
                    </div>
                    <div className="uv-txt-2" aria-hidden="true">
                      {Array.from("Join the waitlist now").map((c, i) =>
                        c === " "
                          ? <span key={i} style={{display:"inline-block",width:"0.4em"}} />
                          : <span key={i} className="uv-btn-letter" style={{color:'#000'}}>{c}</span>
                      )}
                    </div>
                  </div>
                  <svg className="uv-btn-svg" viewBox="0 0 24 24" style={{stroke:'#000'}}>
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
            </div>

            {/* Trust badges */}
            <div className="anim-in delay-500" style={{ display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"center", gap:"0.5rem" }}>
              {trustBadges.map((label, i) => (
                <span key={i} className="trust-badge">{label}</span>
              ))}
            </div>

          </div>
        </section>

        {/* ── Logos section ── */}
        <section style={{
          position: "relative",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          paddingTop: "1.5rem",
          paddingBottom: "2.5rem",
        }}>
          <h2 style={{
            textAlign: "center", fontWeight: 500,
            fontSize: "clamp(1.1rem, 1.3vw, 1.8rem)", letterSpacing: "-0.01em",
            color: "rgba(255,255,255,0.35)",
            marginBottom: "1.25rem",
            fontFamily: "'Karla', sans-serif",
          }}>
            Trusted by <span style={{ color:"rgba(255,255,255,0.7)" }}>top Shopify brands</span>
          </h2>
          <div style={{
            position: "relative", maxWidth: "56rem", margin: "0 auto", overflow: "hidden",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
            maskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          }}>
            <div className="marquee-track">
              {[...Array(2)].map((_, pass) => (
                <div key={pass} style={{ display:"flex", alignItems:"center", gap:"3.5rem", paddingRight:"3.5rem" }}>
                  {["Shopify Plus","Klaviyo","Gorgias","Recharge","Triple Whale","Postscript","Attentive","Yotpo"].map(name => (
                    <span key={name} style={{
                      fontFamily: "'Karla', sans-serif",
                      fontWeight: 600, fontSize: "clamp(0.85rem, 1vw, 1.4rem)", letterSpacing: "0.05em",
                      color: "rgba(255,255,255,0.18)", whiteSpace: "nowrap", textTransform: "uppercase",
                    }}>{name}</span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}