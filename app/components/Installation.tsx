"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function InstallationSection() {
  const sketchRef  = useRef<HTMLSpanElement>(null);
  const sketchRef2 = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const refs = [sketchRef, sketchRef2];
    const observers = refs.map((ref) => {
      const el = ref.current;
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) { el.classList.add("sketch-visible"); observer.disconnect(); } },
        { threshold: 0.6 }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const steps = [
    { number: "01", title: "Install from the Shopify App Store" },
    { number: "02", title: "Connect your tracking script"       },
    { number: "03", title: "Start building with AI"            },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cal+Sans&family=Instrument+Sans:wght@400;500;600&display=swap');

        @keyframes installGlow {
          0%,100% { opacity:.2; transform:scale(1); }
          50%      { opacity:.38; transform:scale(1.06); }
        }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(18px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes sketchHighlightDraw {
          from { stroke-dashoffset: 900; }
          to   { stroke-dashoffset: 0; }
        }
        .sketch-highlight-svg { pointer-events: none; }
        .sketch-fill-1 { stroke-dasharray:900; stroke-dashoffset:900; }
        .sketch-fill-2 { stroke-dasharray:900; stroke-dashoffset:900; }
        .sketch-fill-3 { stroke-dasharray:900; stroke-dashoffset:900; }
        .sketch-visible .sketch-fill-1 { animation: sketchHighlightDraw 0.6s ease-out 0.15s forwards; }
        .sketch-visible .sketch-fill-2 { animation: sketchHighlightDraw 0.55s ease-out 0.15s forwards; }
        .sketch-visible .sketch-fill-3 { animation: sketchHighlightDraw 0.45s ease-out 0.28s forwards; }
        .sketch-accent-text { position:relative; z-index:1; color:#0f172a; display:inline-block; cursor:default; }

        .inst { font-family:'Instrument Sans',sans-serif; }

        .inst .sec-heading {
          font-family:'Cal Sans',Georgia,serif;
          font-size: clamp(1.75rem, 4vw, 3rem);
          letter-spacing:-.02em; line-height:1.15; color:#0f172a;
        }

        .inst .top-badge {
          display:inline-flex; align-items:center; gap:0.44rem;
          padding:0.375rem 0.875rem; border-radius:99px;
          background:white; border:1px solid rgba(99,130,200,.2);
          font-size:.7rem; font-weight:600;
          letter-spacing:.08em; text-transform:uppercase; color:#64748b;
          box-shadow:0 1px 6px rgba(99,130,200,.08);
          animation:fadeUp .5s ease forwards;
        }

        /* Steps pill bar — horizontal scroll on mobile, wrapped on larger */
        .inst .steps-bar {
          display:flex; align-items:stretch;
          border-radius:14px; background:white;
          border:1px solid rgba(226,232,240,.9);
          box-shadow:0 2px 12px rgba(99,130,200,.07);
          overflow-x:auto; overflow-y:hidden;
          /* hide scrollbar */
          scrollbar-width:none; -ms-overflow-style:none;
          animation:fadeUp .5s ease .35s forwards; opacity:0;
          /* full width on mobile */
          width:100%;
        }
        .inst .steps-bar::-webkit-scrollbar { display:none; }

        .inst .step-pill {
          display:flex; align-items:center; gap:0.5rem;
          /* narrower padding on mobile */
          padding:0.7rem 0.875rem; position:relative; flex-shrink:0;
        }
        .inst .step-pill:not(:last-child) { border-right:1px solid rgba(226,232,240,.9); }

        /* On sm+ restore comfortable padding */
        @media (min-width:640px) {
          .inst .step-pill { padding:0.75rem 1.25rem; }
          .inst .steps-bar { width:auto; }
        }

        /* On lg+ steps stack vertically */
        @media (min-width:1024px) {
          .inst .steps-bar {
            flex-direction:column !important;
            border-radius:14px;
            width:100%;
          }
          .inst .step-pill:not(:last-child) {
            border-right:none;
            border-bottom:1px solid rgba(226,232,240,.9);
          }
        }

        .inst .step-pill-num {
          width:1.375rem; height:1.375rem; border-radius:0.44rem;
          background:rgba(59,111,190,.08); border:1px solid rgba(59,111,190,.15);
          display:flex; align-items:center; justify-content:center;
          font-size:.58rem; font-weight:700; color:#3b6fbe;
          letter-spacing:.04em; flex-shrink:0;
        }
        .inst .step-pill-title {
          font-size:.72rem; font-weight:600; color:#0f172a; white-space:nowrap;
        }
        @media (min-width:640px) {
          .inst .step-pill-num  { width:1.5rem; height:1.5rem; font-size:.6rem; }
          .inst .step-pill-title{ font-size:.78rem; }
        }

        .inst .btn-primary {
          position:relative;
          display:inline-flex; align-items:center; justify-content:center; gap:0.4rem;
          cursor:pointer; outline:none; border:0;
          font-family:'Instrument Sans', Arial, sans-serif;
          font-weight:700; color:#fff !important;
          background:#2452a0 !important;
          text-shadow: 0 1px 4px rgba(0,0,0,0.18), 0 0px 1px #1a3f7a;
          text-transform:uppercase; font-size:0.8125rem; letter-spacing:0.05em;
          padding:0.7em 1.5em; border:2px solid #1a3f7a; border-radius:0.6em;
          min-width: 5rem;
          min-height: 2.25rem;
          box-sizing: border-box;
          overflow: visible;
          opacity: 1 !important;
          transition:background 150ms cubic-bezier(0,0,.58,1),transform 150ms cubic-bezier(0,0,.58,1);
        }
        @media (max-width: 640px) {
          .inst .btn-primary {
            font-size: 0.75rem;
            padding: 0.65em 1.3em;
            min-width: 4.5rem;
            min-height: 2rem;
          }
        }
        .inst .btn-primary::before {
          position:absolute; content:'';
          width:100%; height:100%; top:0; left:0; right:0; bottom:0;
          background:#2452a0; border-radius:inherit;
          box-shadow:0 0 0 2px #1a3f7a,0 0.28em 0 0 #1a3f7a;
          transform:translate3d(0,0.28em,-1em);
          transition:transform 150ms cubic-bezier(0,0,.58,1),box-shadow 150ms cubic-bezier(0,0,.58,1);
        }
        .inst .btn-primary:hover              { background:#4a7dd4; transform:translate(0,0.1em); }
        .inst .btn-primary:hover::before      { box-shadow:0 0 0 2px #1a3f7a,0 0.18em 0 0 #1a3f7a; transform:translate3d(0,0.18em,-1em); }
        .inst .btn-primary:active             { background:#4a7dd4; transform:translate(0,0.28em); }
        .inst .btn-primary:active::before     { box-shadow:0 0 0 2px #1a3f7a,0 0 #1a3f7a; transform:translate3d(0,0,-1em); }

        .inst .img-frame {
          overflow:hidden;
          animation:fadeUp .6s ease .55s forwards; opacity:0;
          width:100%;
        }

        /* Subtext responsive */
        .inst .sub-text {
          color:#64748b; line-height:1.7;
          font-size:.9rem;
          max-width:100%;
          animation:fadeUp .5s ease .2s forwards; opacity:0;
        }
        @media (min-width:640px) {
          .inst .sub-text { font-size:.9rem; max-width:30rem; }
        }
      `}</style>

      <section className="inst relative w-full overflow-hidden pt-12 pb-12 md:pt-16 md:pb-16">

        {/* Faint grid */}
        <div style={{
          position:"absolute",inset:0,pointerEvents:"none",zIndex:0,
          backgroundImage:"linear-gradient(rgba(59,111,190,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(59,111,190,.08) 1px,transparent 1px)",
          backgroundSize:"120px 120px",
        }}/>
        {/* Grid glow overlay */}
        <div style={{
          position:"absolute",inset:0,pointerEvents:"none",zIndex:0,
          backgroundImage:"linear-gradient(rgba(59,111,190,.12) 2px,transparent 2px),linear-gradient(90deg,rgba(59,111,190,.12) 2px,transparent 2px)",
          backgroundSize:"120px 120px",
          filter:"blur(4px)",
        }}/>

        {/* Background glows */}
        <div style={{
          position:"absolute", left:"50%", top:0,
          transform:"translateX(-50%)",
          width:900, height:500, borderRadius:"50%",
          background:"radial-gradient(ellipse,rgba(99,130,200,.1) 0%,transparent 68%)",
          filter:"blur(60px)", pointerEvents:"none", zIndex:0,
          animation:"installGlow 7s ease-in-out infinite",
        }}/>
        <div style={{
          position:"absolute", left:"50%", bottom:"10%",
          transform:"translateX(-50%)",
          width:600, height:300,
          background:"radial-gradient(ellipse,rgba(59,111,190,.07) 0%,transparent 70%)",
          filter:"blur(40px)", pointerEvents:"none", zIndex:0,
        }}/>

        {/* Abstract decorative elements */}
        <svg style={{position:"absolute",top:"8%",right:"4%",pointerEvents:"none",zIndex:0}} width="110" height="110" viewBox="0 0 110 110" fill="none" aria-hidden="true">
          <circle cx="55" cy="55" r="48" stroke="rgba(59,111,190,.07)" strokeWidth="1" strokeDasharray="6 5"/>
          <circle cx="55" cy="55" r="24" stroke="rgba(59,111,190,.05)" strokeWidth="1"/>
        </svg>
        <svg style={{position:"absolute",bottom:"15%",left:"3%",pointerEvents:"none",zIndex:0}} width="70" height="70" viewBox="0 0 70 70" fill="none" aria-hidden="true">
          <rect x="10" y="10" width="50" height="50" rx="6" stroke="rgba(59,111,190,.06)" strokeWidth="1" transform="rotate(15 35 35)"/>
        </svg>
        {/* Plus signs */}
        {[{t:"18%",l:"8%"},{t:"75%",l:"90%"},{t:"50%",l:"96%"}].map((p,i)=>(
          <svg key={i} style={{position:"absolute",top:p.t,left:p.l,pointerEvents:"none",zIndex:0}} width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <line x1="7" y1="1" x2="7" y2="13" stroke="rgba(59,111,190,.1)" strokeWidth="1"/>
            <line x1="1" y1="7" x2="13" y2="7" stroke="rgba(59,111,190,.1)" strokeWidth="1"/>
          </svg>
        ))}
        {/* Dot trail */}
        {[{t:"30%",l:"94%"},{t:"60%",l:"2%"},{t:"88%",l:"55%"},{t:"10%",l:"50%"}].map((p,i)=>(
          <div key={i} style={{position:"absolute",top:p.t,left:p.l,width:4,height:4,borderRadius:"50%",background:"rgba(59,111,190,.1)",pointerEvents:"none",zIndex:0}}/>
        ))}

        <div className="relative z-10 mx-auto w-full px-5 sm:px-8 lg:px-16 xl:px-24 flex flex-col lg:flex-row lg:items-center lg:gap-12 gap-8">

          {/* ── Left column: text content ── */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4 sm:gap-5 lg:flex-1 lg:min-w-0">

            {/* Section label */}
            <div className="flex flex-col gap-3 items-center lg:items-start">
              <span style={{fontSize:".7rem",fontWeight:600,letterSpacing:".12em",textTransform:"uppercase",color:"#94a3b8"}}>Get started</span>
              <div style={{width:40,height:2,borderRadius:2,background:"linear-gradient(90deg,#3b6fbe,transparent)"}}/>
            </div>

            {/* Headline */}
            <h2 className="sec-heading" style={{animation:"fadeUp .5s ease .1s forwards",opacity:0}}>
              Up and running{" "}
              <span ref={sketchRef} style={{position:"relative",display:"inline-block",whiteSpace:"nowrap"}}>
                <svg className="sketch-highlight-svg" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none" aria-hidden="true"
                  style={{position:"absolute",top:0,left:"4%",width:"92%",height:"100%",overflow:"hidden",pointerEvents:"none",zIndex:0}}>
                  <defs>
                    <linearGradient id="instSkGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%"   stopColor="white" stopOpacity="0"/>
                      <stop offset="10%"  stopColor="white" stopOpacity="1"/>
                      <stop offset="90%"  stopColor="white" stopOpacity="1"/>
                      <stop offset="100%" stopColor="white" stopOpacity="0"/>
                    </linearGradient>
                    <mask id="instSkMask"><rect x="0" y="0" width="100" height="100" fill="url(#instSkGrad)"/></mask>
                  </defs>
                  <g mask="url(#instSkMask)">
                    <path className="sketch-fill-1" d="M2 52 C20 48,42 46,62 47 C78 48,90 50,98 49" stroke="#3b6fbe" strokeWidth="52" strokeLinecap="butt" opacity="0.18" fill="none"/>
                    <path className="sketch-fill-2" d="M2 51 C22 47,46 45,66 46 C80 47,91 49,98 48" stroke="#3b6fbe" strokeWidth="38" strokeLinecap="butt" opacity="0.55" fill="none"/>
                    <path className="sketch-fill-2" d="M4 74 C24 71,50 70,70 71 C84 72,93 73,98 72" stroke="#3b6fbe" strokeWidth="18" strokeLinecap="butt" opacity="0.55" fill="none"/>
                    <path className="sketch-fill-3" d="M4 34 C24 31,48 30,68 31 C82 32,92 33,98 32" stroke="#2d5fa8" strokeWidth="3"  strokeLinecap="butt" opacity="0.35" fill="none"/>
                  </g>
                </svg>
                <span className="sketch-accent-text">in 3 steps.</span>
              </span>
            </h2>

            {/* Subtext */}
            <p className="sub-text">
              No developers. No complex setup. DynoWeb plugs directly into your
              existing Shopify theme and starts collecting data{" "}
              <span ref={sketchRef2} style={{position:"relative",display:"inline-block",whiteSpace:"nowrap"}}>
                <svg className="sketch-highlight-svg" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none" aria-hidden="true"
                  style={{position:"absolute",top:0,left:"2%",width:"96%",height:"100%",overflow:"hidden",pointerEvents:"none",zIndex:0}}>
                  <defs>
                    <linearGradient id="instSkGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%"   stopColor="white" stopOpacity="0"/>
                      <stop offset="10%"  stopColor="white" stopOpacity="1"/>
                      <stop offset="90%"  stopColor="white" stopOpacity="1"/>
                      <stop offset="100%" stopColor="white" stopOpacity="0"/>
                    </linearGradient>
                    <mask id="instSkMask2"><rect x="0" y="0" width="100" height="100" fill="url(#instSkGrad2)"/></mask>
                  </defs>
                  <g mask="url(#instSkMask2)">
                    <path className="sketch-fill-1" d="M2 52 C20 48,42 46,62 47 C78 48,90 50,98 49" stroke="#3b6fbe" strokeWidth="52" strokeLinecap="butt" opacity="0.10" fill="none"/>
                    <path className="sketch-fill-2" d="M2 51 C22 47,46 45,66 46 C80 47,91 49,98 48" stroke="#3b6fbe" strokeWidth="38" strokeLinecap="butt" opacity="0.30" fill="none"/>
                    <path className="sketch-fill-2" d="M4 74 C24 71,50 70,70 71 C84 72,93 73,98 72" stroke="#3b6fbe" strokeWidth="16" strokeLinecap="butt" opacity="0.28" fill="none"/>
                    <path className="sketch-fill-3" d="M4 34 C24 31,48 30,68 31 C82 32,92 33,98 32" stroke="#2d5fa8" strokeWidth="2.5" strokeLinecap="butt" opacity="0.25" fill="none"/>
                  </g>
                </svg>
                <span style={{position:"relative",zIndex:1,color:"#0f172a",fontWeight:600}}>immediately.</span>
              </span>
            </p>

            {/* Steps pill bar — stack vertically on desktop left-align */}
            <div className="steps-bar" style={{flexDirection:"column",alignItems:"stretch"}}>
              {steps.map((s, i) => (
                <div key={i} className="step-pill">
                  <div className="step-pill-num">{s.number}</div>
                  <span className="step-pill-title">{s.title}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className="btn-primary">
              Install
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" aria-hidden="true" style={{width:12,height:12}} xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd"/>
              </svg>
            </button>

          </div>

          {/* ── Right column: dashboard image ── */}
          <div className="lg:flex-[1.4] lg:min-w-0">
            <div className="img-frame" style={{maxWidth:"120%",marginRight:"-10%"}}>
              <Image
                src="/installation.png"
                alt="DynoWeb Installation Process"
                width={1000}
                height={600}
                className="w-full h-auto block"
              />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}