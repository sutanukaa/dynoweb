"use client";
import { useEffect, useRef } from "react";

const PARTICLES = [
  { x: 8,  y: 12, size: 3.5, speed: 0.018, phase: 0    },
  { x: 18, y: 68, size: 2,   speed: 0.012, phase: 1.2  },
  { x: 28, y: 35, size: 4,   speed: 0.022, phase: 2.4  },
  { x: 38, y: 82, size: 2.5, speed: 0.015, phase: 0.8  },
  { x: 52, y: 18, size: 3,   speed: 0.019, phase: 3.1  },
  { x: 62, y: 55, size: 2,   speed: 0.013, phase: 1.7  },
  { x: 72, y: 28, size: 4.5, speed: 0.021, phase: 2.9  },
  { x: 82, y: 75, size: 2.5, speed: 0.016, phase: 0.4  },
  { x: 90, y: 42, size: 3,   speed: 0.020, phase: 1.5  },
  { x: 95, y: 88, size: 2,   speed: 0.014, phase: 3.8  },
  { x: 5,  y: 55, size: 2,   speed: 0.011, phase: 2.1  },
  { x: 45, y: 72, size: 3.5, speed: 0.017, phase: 0.6  },
  { x: 75, y: 10, size: 2,   speed: 0.023, phase: 4.2  },
  { x: 33, y: 48, size: 3,   speed: 0.015, phase: 1.9  },
  { x: 88, y: 22, size: 4,   speed: 0.018, phase: 3.3  },
];

export default function HeroSectionOne() {
  const containerRef  = useRef<HTMLDivElement>(null);
  const cursorGlowRef = useRef<HTMLDivElement>(null);
  const sketchRef     = useRef<HTMLSpanElement>(null);
  const headlineRef   = useRef<HTMLHeadingElement>(null);
  const particleRefs  = useRef<Array<HTMLDivElement | null>>([]);
  const mouseRef      = useRef({ x: 0, y: 0 });
  const animFrameRef  = useRef<number>(0);

  useEffect(() => {
    const cursorGlow = cursorGlowRef.current;
    const container = containerRef.current;
    if (!cursorGlow || !container) return;
    let rafId: number;
    let inside = false;
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (cursorGlow) {
          cursorGlow.style.left = `${e.clientX}px`;
          cursorGlow.style.top  = `${e.clientY}px`;
        }
      });
    };
    const handleEnter = () => { inside = true; cursorGlow.style.opacity = '1'; window.addEventListener('mousemove', handleMouseMove); };
    const handleLeave = () => { inside = false; cursorGlow.style.opacity = '0'; window.removeEventListener('mousemove', handleMouseMove); };
    cursorGlow.style.opacity = '0';
    cursorGlow.style.transition = 'opacity .3s ease';
    container.addEventListener('mouseenter', handleEnter);
    container.addEventListener('mouseleave', handleLeave);
    return () => {
      container.removeEventListener('mouseenter', handleEnter);
      container.removeEventListener('mouseleave', handleLeave);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth  - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      };
    };
    window.addEventListener("mousemove", handleMouseMove);
    let t = 0;
    let isVisible = true;
    const animate = () => {
      if (!isVisible) return;
      t += 0.008;
      PARTICLES.forEach((p, i) => {
        const el = particleRefs.current[i];
        if (!el) return;
        const floatY = Math.sin(t * p.speed * 60 + p.phase) * 8;
        const floatX = Math.cos(t * p.speed * 40 + p.phase) * 5;
        const px = mouseRef.current.x * -18 * (i % 3 === 0 ? 1.4 : i % 3 === 1 ? 0.8 : 1.1);
        const py = mouseRef.current.y * -14 * (i % 3 === 0 ? 1.2 : i % 3 === 1 ? 1.5 : 0.9);
        el.style.transform = `translate(${floatX + px}px, ${floatY + py}px)`;
      });
      animFrameRef.current = requestAnimationFrame(animate);
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) animFrameRef.current = requestAnimationFrame(animate);
      },
      { threshold: 0 }
    );
    observer.observe(container);
    animFrameRef.current = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animFrameRef.current);
      observer.disconnect();
    };
  }, []);

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
        @import url('https://fonts.googleapis.com/css2?family=Cal+Sans&family=Instrument+Sans:wght@400;500;600&display=swap');

        @keyframes particleFadeIn {
          from { opacity: 0; transform: scale(0.3); }
          to   { opacity: 1; transform: scale(1); }
        }
        .particle {
          position: absolute; border-radius: 50%;
          background: #3b6fbe; pointer-events: none;
          will-change: transform; animation: particleFadeIn 0.6s ease both;
        }
        @keyframes glowPulse {
          0%,100% { opacity:.5; transform:translateX(-50%) scale(1); }
          50%      { opacity:.7; transform:translateX(-50%) scale(1.05); }
        }
        @keyframes glowPulse2 {
          0%,100% { opacity:.3; transform:translateX(-50%) scale(1); }
          50%      { opacity:.5; transform:translateX(-50%) scale(1.08); }
        }
        @keyframes badgeFadeIn {
          from { opacity:0; transform:translateY(-10px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes headlineFadeIn {
          from { opacity:0; transform:translateY(16px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes subFadeIn {
          from { opacity:0; transform:translateY(12px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes btnFadeIn {
          from { opacity:0; transform:translateY(10px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes badgePing {
          0%,100% { transform:scale(1); box-shadow:0 0 0 0 rgba(148,163,184,.3); }
          50%      { transform:scale(1.04); box-shadow:0 0 0 6px rgba(148,163,184,0); }
        }
        @keyframes highlighterSweep {
          from { clip-path: inset(0 100% 0 0); }
          to   { clip-path: inset(0 0% 0 0); }
        }

        .sketch-highlight-svg {
          pointer-events: none;
          clip-path: inset(0 100% 0 0);
        }
        .sketch-visible .sketch-highlight-svg {
          animation: highlighterSweep 0.5s cubic-bezier(0.25, 0.1, 0.25, 1) 0.15s forwards;
        }
        .sketch-accent-text {
          position:relative; z-index:1; color:#171717;
          display:inline-block; margin-right:0.25em; cursor:default;
        }

        .hero-badge {
          animation: badgeFadeIn 0.5s ease forwards; opacity:0;
          transition: transform .25s ease, box-shadow .25s ease, background .25s ease;
          cursor: default;
        }
        .hero-badge:hover {
          animation: badgePing 0.6s ease forwards;
          background: rgba(241,245,249,.9) !important;
          box-shadow: 0 0 0 3px rgba(148,163,184,.25), 0 0 16px rgba(99,130,180,.1);
          transform: scale(1.04);
        }

        .hero-headline {
          animation: headlineFadeIn 0.6s ease 0.15s forwards;
          opacity: 0;
          font-family: 'Cal Sans','Georgia',serif;
          font-size: clamp(3rem, 12vw, 9rem);
          line-height: 1.05;
          letter-spacing: -.025em;
          white-space: nowrap;
          font-weight: 300;
        }

        .word-hover { display:inline-block; cursor:default; }
        .hero-sub {
          animation: subFadeIn 0.6s ease 0.3s forwards; opacity:0;
          font-family:'Instrument Sans',sans-serif;
        }
        .hero-btns { animation: btnFadeIn 0.6s ease 0.45s forwards; opacity:0; }
        .glow-primary  { animation: glowPulse  5s ease-in-out infinite; }
        .glow-secondary{ animation: glowPulse2 6.5s ease-in-out 1s infinite; }

        .btn-primary {
          position:relative; display:inline-flex; align-items:center; gap:.5rem;
          cursor:pointer; outline:none; border:0; vertical-align:middle;
          font-weight:600; color:#fff; text-transform:uppercase;
          font-size:0.875rem; letter-spacing:.05em; padding:1.1em 2em;
          background:#3b6fbe; border:2px solid #2452a0; border-radius:.75em;
          transform-style:preserve-3d;
          transition: background 150ms cubic-bezier(0,0,.58,1), transform 150ms cubic-bezier(0,0,.58,1);
        }
        .btn-primary::before {
          position:absolute; content:''; width:100%; height:100%;
          top:0; left:0; right:0; bottom:0;
          background:#2452a0; border-radius:inherit;
          box-shadow:0 0 0 2px #1a3f7a,0 .3em 0 0 #1a3f7a;
          transform:translate3d(0,.3em,-1em);
          transition: transform 150ms cubic-bezier(0,0,.58,1), box-shadow 150ms cubic-bezier(0,0,.58,1);
        }
        .btn-primary:hover               { background:#4a7dd4; transform:translate(0,.1em); }
        .btn-primary:hover::before       { box-shadow:0 0 0 2px #1a3f7a,0 .2em 0 0 #1a3f7a; transform:translate3d(0,.2em,-1em); }
        .btn-primary:active              { background:#4a7dd4; transform:translate(0,.3em); }
        .btn-primary:active::before      { box-shadow:0 0 0 2px #1a3f7a,0 0 #1a3f7a; transform:translate3d(0,0,-1em); }

        .trust-badge {
          display:inline-flex; align-items:center;
          padding:5px 13px; border-radius:99px;
          background:rgba(255,255,255,0.7);
          border:1px solid rgba(99,130,200,.18);
          backdrop-filter:blur(8px);
          box-shadow:0 1px 4px rgba(99,130,200,.08);
          font-family:'Instrument Sans',sans-serif;
          font-size:.7rem; font-weight:600;
          color:#475569; letter-spacing:.01em;
          white-space:nowrap;
        }
      `}</style>

      <div ref={cursorGlowRef} className="hidden md:block" style={{
        position:"fixed", width:"600px", height:"600px", borderRadius:"50%",
        background:"radial-gradient(circle,rgba(99,130,200,.15) 0%,rgba(99,130,200,.05) 40%,transparent 70%)",
        pointerEvents:"none", transform:"translate(-50%,-50%)", zIndex:9999,
        filter:"blur(8px)", left:"-9999px", top:"-9999px",
      }} />

      <div ref={containerRef} className="relative mx-auto flex min-h-svh w-full flex-col justify-center overflow-hidden px-5 sm:px-8 lg:px-16 xl:px-24 pt-24 pb-12 md:pt-28 md:pb-14" style={{ contain: "content" }}>

        <div style={{ position:"absolute", inset:0, pointerEvents:"none", zIndex:0, overflow:"hidden" }}>
          {[25,50,75].map(pct => (
            <div key={pct} style={{
              position:"absolute", top:0, bottom:0, left:`${pct}%`, width:"1px",
              background:"linear-gradient(to bottom,transparent 0%,rgba(99,130,200,.12) 10%,rgba(99,130,200,.12) 90%,transparent 100%)",
            }} />
          ))}
          {[0,100].map(pct => (
            <div key={pct} style={{
              position:"absolute", top:0, bottom:0, left:`${pct}%`, width:"1px",
              background:"linear-gradient(to bottom,transparent 0%,rgba(99,130,200,.08) 15%,rgba(99,130,200,.08) 85%,transparent 100%)",
            }} />
          ))}
          {[28,62].map(pct => (
            <div key={pct} style={{
              position:"absolute", left:0, right:0, top:`${pct}%`, height:"1px",
              background:"linear-gradient(to right,transparent 0%,rgba(99,130,200,.1) 8%,rgba(99,130,200,.1) 92%,transparent 100%)",
            }} />
          ))}
        </div>

        {PARTICLES.map((p, i) => (
          <div key={i} ref={el => { particleRefs.current[i] = el; }} className="particle" style={{
            left:`${p.x}%`, top:`${p.y}%`,
            width:`${p.size}px`, height:`${p.size}px`,
            opacity: 0.18 + (i % 4) * 0.06,
            animationDelay:`${i * 0.07}s`, zIndex:1,
          }} />
        ))}

        <div className="glow-primary pointer-events-none absolute left-1/2 -top-10" style={{
          width:"850px", height:"460px",
          background:"radial-gradient(ellipse at center,rgba(160,185,230,.28) 0%,rgba(99,130,200,.1) 48%,transparent 72%)",
          filter:"blur(50px)", zIndex:0,
        }} />
        <div className="glow-secondary pointer-events-none absolute left-1/2 top-10" style={{
          width:"580px", height:"280px",
          background:"radial-gradient(ellipse at center,rgba(180,200,235,.18) 0%,transparent 65%)",
          filter:"blur(35px)", zIndex:0,
        }} />

        {/* Badge */}
        <div className="hero-badge relative z-10 mx-auto flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-slate-400 inline-block" style={{ boxShadow:"0 0 5px rgba(148,163,184,.7)" }} />
          <span className="text-xs font-semibold tracking-wide text-slate-500" style={{ fontFamily:"'Instrument Sans',sans-serif" }}>
            Shopify&apos;s AI-powered storefront optimizer
          </span>
        </div>

        {/* Full-width fluid headline */}
        <div className="relative z-10 w-full mt-5 px-4 md:px-6 overflow-hidden">
          <h1
            ref={headlineRef}
            className="hero-headline text-neutral-900"
            style={{ display:"block", textAlign:"center", fontSize: "clamp(2.4rem, 6vw, 5.5rem)", fontWeight: 800, letterSpacing: "-0.03em", whiteSpace: "normal", wordWrap: "break-word", lineHeight: 1.08 }}
          >
            {line1.map((word, i) => (
              <span key={i} className="word-hover" style={{ marginRight:"0.25em" }}>{word}</span>
            ))}

            <span ref={sketchRef} style={{ position:"relative", display:"inline-block", whiteSpace:"nowrap", marginRight:"0.25em" }}>
              <svg
                className="sketch-highlight-svg"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                fill="none"
                aria-hidden="true"
                style={{
                  position:"absolute", top:"0", left:"4%",
                  width:"92%", height:"100%",
                  overflow:"hidden", pointerEvents:"none", zIndex:0,
                }}
              >
                <defs>
                  <linearGradient id="taperGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%"   stopColor="white" stopOpacity="0" />
                    <stop offset="10%"  stopColor="white" stopOpacity="1" />
                    <stop offset="90%"  stopColor="white" stopOpacity="1" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                  <mask id="taperMask">
                    <rect x="0" y="0" width="100" height="100" fill="url(#taperGrad)" />
                  </mask>
                </defs>
                <g mask="url(#taperMask)">
                  <path className="sketch-fill-1" d="M2 52 C20 48,42 46,62 47 C78 48,90 50,98 49" stroke="#3b6fbe" strokeWidth="52" strokeLinecap="butt" opacity="0.18" fill="none" />
                  <path className="sketch-fill-2" d="M2 51 C22 47,46 45,66 46 C80 47,91 49,98 48" stroke="#3b6fbe" strokeWidth="38" strokeLinecap="butt" opacity="0.55" fill="none" />
                  <path className="sketch-fill-2" d="M4 74 C24 71,50 70,70 71 C84 72,93 73,98 72" stroke="#3b6fbe" strokeWidth="18" strokeLinecap="butt" opacity="0.55" fill="none" />
                  <path className="sketch-fill-3" d="M4 34 C24 31,48 30,68 31 C82 32,92 33,98 32" stroke="#2d5fa8" strokeWidth="3"  strokeLinecap="butt" opacity="0.35" fill="none" />
                </g>
              </svg>
              <span className="sketch-accent-text">Buying.</span>
            </span>

            {line2.map((word, i) => (
              <span key={i} className="word-hover" style={{ marginRight: i < line2.length - 1 ? "0.25em" : 0 }}>{word}</span>
            ))}
          </h1>
        </div>

        {/* Subheading */}
        <p className="hero-sub relative z-10 mx-auto mt-6 max-w-5xl px-2 text-center text-base text-neutral-500 md:text-lg xl:text-xl" style={{ lineHeight:"1.5" }}>
          Dynoweb invisibly watches your visitors, finds exactly where they get frustrated,
          and automatically generates a safely optimized draft theme to fix it in one click.
          Zero code. Zero risk.
        </p>

        {/* CTA + trust badges */}
        <div className="hero-btns relative z-10 mt-7 flex flex-col items-center gap-5 px-4 md:px-6">
          <button className="btn-primary" style={{ fontFamily:"'Instrument Sans',sans-serif" }}>
            Start Optimizing for Free
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
            </svg>
          </button>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {trustBadges.map((label, i) => (
              <span key={i} className="trust-badge">{label}</span>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}