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
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Karla:wght@400;500;600;700&display=swap');

        @keyframes installGlow {
          0%,100% { opacity:.18; transform:scale(1); }
          50%      { opacity:.32; transform:scale(1.06); }
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
        .sketch-accent-text {
          position:relative; z-index:1;
          color:#e8eaf0;
          display:inline-block; cursor:default;
        }

        .inst { font-family:'Karla',sans-serif; }

        .inst .sec-heading {
          font-family:'Montserrat',sans-serif;
          font-size: clamp(1.75rem, 3.2vw, 3.5rem);
          letter-spacing:-.02em; line-height:1.15;
          color:#e8eaf0;
        }

        /* Steps pill bar */
        .inst .steps-bar {
          display:flex; align-items:stretch;
          border-radius:14px;
          background:rgba(255,255,255,0.03);
          border:1px solid rgba(255,255,255,0.08);
          overflow-x:auto; overflow-y:hidden;
          scrollbar-width:none; -ms-overflow-style:none;
          animation:fadeUp .5s ease .35s forwards; opacity:0;
          width:100%;
        }
        .inst .steps-bar::-webkit-scrollbar { display:none; }

        .inst .step-pill {
          display:flex; align-items:center; gap:0.5rem;
          padding:0.7rem 0.875rem; position:relative; flex-shrink:0;
        }
        .inst .step-pill:not(:last-child) {
          border-right:1px solid rgba(255,255,255,0.07);
        }

        @media (min-width:640px) {
          .inst .step-pill { padding:0.75rem 1.25rem; }
          .inst .steps-bar { width:auto; }
        }

        @media (min-width:1024px) {
          .inst .steps-bar {
            flex-direction:column !important;
            border-radius:14px;
            width:100%;
          }
          .inst .step-pill:not(:last-child) {
            border-right:none;
            border-bottom:1px solid rgba(255,255,255,0.07);
          }
        }

        .inst .step-pill-num {
          width:1.375rem; height:1.375rem; border-radius:0.44rem;
          background:rgba(110,176,255,0.1);
          border:1px solid rgba(110,176,255,0.2);
          display:flex; align-items:center; justify-content:center;
          font-size:.58rem; font-weight:700; color:#6eb0ff;
          letter-spacing:.04em; flex-shrink:0;
        }
        .inst .step-pill-title {
          font-size:clamp(.72rem, .9vw, 1.2rem); font-weight:600;
          color:rgba(255,255,255,0.7); white-space:nowrap;
        }

        @media (min-width:640px) {
          .inst .step-pill-num   { width:1.5rem; height:1.5rem; font-size:.6rem; }
          .inst .step-pill-title { font-size:.78rem; }
        }

        .inst .img-frame {
          overflow:hidden;
          border-radius:16px;
          border:1px solid rgba(255,255,255,0.07);
          box-shadow:0 0 0 1px rgba(255,255,255,0.04), 0 24px 60px rgba(0,0,0,0.4);
          animation:fadeUp .6s ease .55s forwards; opacity:0;
          width:100%;
        }

        .inst .sub-text {
          color:rgba(255,255,255,0.35); line-height:1.7;
          font-size:clamp(.9rem, 1.1vw, 1.6rem); max-width:100%;
          animation:fadeUp .5s ease .2s forwards; opacity:0;
        }
        @media (min-width:640px) {
          .inst .sub-text { font-size:clamp(.9rem, 1.1vw, 1.6rem); max-width:30rem; }
        }
      `}</style>

      <section
        className="inst relative w-full overflow-hidden"
        style={{ background: "#0a0a0a" }}
      >
        {/* Faint grid */}
        <div style={{
          position:"absolute", inset:0, pointerEvents:"none", zIndex:0,
          backgroundImage:`linear-gradient(rgba(255,255,255,.022) 1px,transparent 1px),
                           linear-gradient(90deg,rgba(255,255,255,.022) 1px,transparent 1px)`,
          backgroundSize:"120px 120px",
        }}/>

        {/* Ambient glows */}
        <div style={{
          position:"absolute", left:"50%", top:0,
          transform:"translateX(-50%)",
          width:900, height:500, borderRadius:"50%",
          background:"radial-gradient(ellipse,rgba(59,111,190,.08) 0%,transparent 68%)",
          filter:"blur(60px)", pointerEvents:"none", zIndex:0,
          animation:"installGlow 7s ease-in-out infinite",
        }}/>
        <div style={{
          position:"absolute", left:"50%", bottom:"10%",
          transform:"translateX(-50%)",
          width:600, height:300,
          background:"radial-gradient(ellipse,rgba(59,111,190,.05) 0%,transparent 70%)",
          filter:"blur(40px)", pointerEvents:"none", zIndex:0,
        }}/>

        {/* Decorative SVGs */}
        <svg style={{position:"absolute",top:"8%",right:"4%",pointerEvents:"none",zIndex:0}} width="110" height="110" viewBox="0 0 110 110" fill="none" aria-hidden="true">
          <circle cx="55" cy="55" r="48" stroke="rgba(110,176,255,.06)" strokeWidth="1" strokeDasharray="6 5"/>
          <circle cx="55" cy="55" r="24" stroke="rgba(110,176,255,.04)" strokeWidth="1"/>
        </svg>
        <svg style={{position:"absolute",bottom:"15%",left:"3%",pointerEvents:"none",zIndex:0}} width="70" height="70" viewBox="0 0 70 70" fill="none" aria-hidden="true">
          <rect x="10" y="10" width="50" height="50" rx="6" stroke="rgba(110,176,255,.05)" strokeWidth="1" transform="rotate(15 35 35)"/>
        </svg>
        {[{t:"18%",l:"8%"},{t:"75%",l:"90%"},{t:"50%",l:"96%"}].map((p,i) => (
          <svg key={i} style={{position:"absolute",top:p.t,left:p.l,pointerEvents:"none",zIndex:0}} width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <line x1="7" y1="1" x2="7" y2="13" stroke="rgba(110,176,255,.08)" strokeWidth="1"/>
            <line x1="1" y1="7" x2="13" y2="7" stroke="rgba(110,176,255,.08)" strokeWidth="1"/>
          </svg>
        ))}
        {[{t:"30%",l:"94%"},{t:"60%",l:"2%"},{t:"88%",l:"55%"},{t:"10%",l:"50%"}].map((p,i) => (
          <div key={i} style={{position:"absolute",top:p.t,left:p.l,width:4,height:4,borderRadius:"50%",background:"rgba(110,176,255,.07)",pointerEvents:"none",zIndex:0}}/>
        ))}

        <div className="relative z-10 mx-auto w-full flex flex-col lg:flex-row lg:items-center lg:gap-12 gap-8" style={{padding:"max(5rem, 8vh) max(48px, 5vw)"}}>

          {/* ── Left: text ── */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4 sm:gap-5 lg:flex-1 lg:min-w-0">

            {/* Label */}
            <div className="flex flex-col gap-3 items-center lg:items-start">
              <span style={{fontSize:"clamp(.7rem, .85vw, 1.2rem)",fontWeight:600,letterSpacing:".12em",textTransform:"uppercase",color:"rgba(255,255,255,0.25)"}}>
                Get started
              </span>
              <div style={{width:40,height:2,borderRadius:2,background:"linear-gradient(90deg,#6eb0ff,transparent)"}}/>
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
                    <path className="sketch-fill-1" d="M2 52 C20 48,42 46,62 47 C78 48,90 50,98 49" stroke="#3a7adc" strokeWidth="52" strokeLinecap="butt" opacity="0.22" fill="none"/>
                    <path className="sketch-fill-2" d="M2 51 C22 47,46 45,66 46 C80 47,91 49,98 48" stroke="#5aaeff" strokeWidth="38" strokeLinecap="butt" opacity="0.45" fill="none"/>
                    <path className="sketch-fill-2" d="M4 74 C24 71,50 70,70 71 C84 72,93 73,98 72" stroke="#5aaeff" strokeWidth="18" strokeLinecap="butt" opacity="0.38" fill="none"/>
                    <path className="sketch-fill-3" d="M4 34 C24 31,48 30,68 31 C82 32,92 33,98 32" stroke="#9dd8ff" strokeWidth="3"  strokeLinecap="butt" opacity="0.55" fill="none"/>
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
                    <path className="sketch-fill-1" d="M2 52 C20 48,42 46,62 47 C78 48,90 50,98 49" stroke="#3a7adc" strokeWidth="52" strokeLinecap="butt" opacity="0.12" fill="none"/>
                    <path className="sketch-fill-2" d="M2 51 C22 47,46 45,66 46 C80 47,91 49,98 48" stroke="#5aaeff" strokeWidth="38" strokeLinecap="butt" opacity="0.32" fill="none"/>
                    <path className="sketch-fill-2" d="M4 74 C24 71,50 70,70 71 C84 72,93 73,98 72" stroke="#5aaeff" strokeWidth="16" strokeLinecap="butt" opacity="0.28" fill="none"/>
                    <path className="sketch-fill-3" d="M4 34 C24 31,48 30,68 31 C82 32,92 33,98 32" stroke="#9dd8ff" strokeWidth="2.5" strokeLinecap="butt" opacity="0.45" fill="none"/>
                  </g>
                </svg>
                <span style={{position:"relative",zIndex:1,color:"rgba(255,255,255,0.75)",fontWeight:600}}>immediately.</span>
              </span>
            </p>

            {/* Steps */}
            <div className="steps-bar" style={{flexDirection:"column",alignItems:"stretch"}}>
              {steps.map((s, i) => (
                <div key={i} className="step-pill">
                  <div className="step-pill-num">{s.number}</div>
                  <span className="step-pill-title">{s.title}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a href="/waitlist" className="uv-btn-wrapper" style={{textDecoration:"none"}}>
              <div className="uv-btn">
                <div className="uv-txt-wrapper">
                  <div className="uv-txt-1">
                    {Array.from("Join the waitlist now").map((c, i) =>
                      c === " "
                        ? <span key={i} style={{display:"inline-block",width:"0.4em"}} />
                        : <span key={i} className="uv-btn-letter" style={{animationDelay:`${i * 0.045}s`}}>{c}</span>
                    )}
                  </div>
                  <div className="uv-txt-2" aria-hidden="true">
                    {Array.from("Join the waitlist now").map((c, i) =>
                      c === " "
                        ? <span key={i} style={{display:"inline-block",width:"0.4em"}} />
                        : <span key={i} className="uv-btn-letter" style={{animationDelay:`${i * 0.045}s`}}>{c}</span>
                    )}
                  </div>
                </div>
                <svg className="uv-btn-svg" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </a>

          </div>

          {/* ── Right: image ── */}
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