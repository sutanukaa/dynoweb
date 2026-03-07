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

  const line1 = ["Stop", "Guessing", "Why", "Customers", "Aren\u2019t"];
  const line2 = ["Let", "AI", "Fix", "Your", "Storefront."];

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
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.05);
          padding: 6px 14px 6px 10px;
          font-family: 'Karla', sans-serif;
          font-size: clamp(0.8rem, 1vw, 1.4rem);
          color: rgba(255,255,255,0.65);
          cursor: default;
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s;
        }
        .hero-badge:hover { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.2); }
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

          {/* ── TOP RADIAL SHADE: faint white glow from very top centre ── */}
          <div aria-hidden="true" style={{
            position: "absolute", inset: 0, top: "-3.5rem",
            pointerEvents: "none", zIndex: 0, overflow: "hidden",
            background: "radial-gradient(35% 80% at 49% 0%, rgba(255,255,255,0.07), transparent)",
          }} />

          {/*
            ── SIDE BORDER LINES ──
            These are positioned on the LEFT and RIGHT edges of the max-w-5xl section.
            They fade out toward the bottom (mask), matching the reference exactly.
            z-index:10 so they sit above content.
          */}
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

          {/* ── MAIN CONTENT ── */}
          <div className="relative z-10 mx-auto w-full" style={{
            padding: "6rem max(48px, 5vw)",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            gap: "1.35rem",
          }}>

            {/*
              ── INNER CONTENT BORDER LINES ──
              Responsive positioning to match the new padding system
            */}
            <div aria-hidden="true" style={{ position:"absolute", inset:0, pointerEvents:"none", zIndex:0, overflow:"hidden" }}>
              {/* Left inner line */}
              <div style={{
                position:"absolute", top:0, bottom:0, left:"1rem", width:"1px",
                background:"linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.1) 100%)",
              }} />
              {/* Right inner line */}
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
              <span ref={sketchRef} style={{ position:"relative", display:"inline-block", whiteSpace:"nowrap", marginRight:"0.25em" }}>
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
                <span className="sketch-accent-text">Buying.</span>
              </span>
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
              <div className="uv-btn-wrapper">
                <button className="uv-btn">
                  <div className="uv-txt-wrapper">
                    <div className="uv-txt-1">
                      {Array.from("Start Optimizing for Free").map((c, i) =>
                        c === " "
                          ? <span key={i} style={{display:"inline-block",width:"0.4em"}} />
                          : <span key={i} className="uv-btn-letter" style={{animationDelay:`${i * 0.045}s`}}>{c}</span>
                      )}
                    </div>
                    <div className="uv-txt-2" aria-hidden="true">
                      {Array.from("Start Optimizing for Free").map((c, i) =>
                        c === " "
                          ? <span key={i} style={{display:"inline-block",width:"0.4em"}} />
                          : <span key={i} className="uv-btn-letter" style={{animationDelay:`${i * 0.045}s`}}>{c}</span>
                      )}
                    </div>
                  </div>
                  <svg className="uv-btn-svg" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
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