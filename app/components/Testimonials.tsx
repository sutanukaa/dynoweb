"use client";
import { useEffect, useRef, useState } from "react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "Head of eCommerce",
    company: "Lumière Co.",
    avatar: "SC",
    quote: "DynoWeb felt like hiring a full-time analyst overnight. The AI flagged a checkout drop-off we'd been blind to for months — fixed it in a day, revenue jumped immediately.",
  },
  {
    name: "Marcus Reid",
    role: "Founder",
    company: "Strider Supply",
    avatar: "MR",
    quote: "I was skeptical of yet another analytics tool. But DynoWeb actually explains what the numbers mean and what to do about them. It's the first dashboard I open every morning.",
  },
  {
    name: "Priya Anand",
    role: "Growth Lead",
    company: "Bloom Botanics",
    avatar: "PA",
    quote: "The suggestions aren't generic — they're specific to our products, our customers, our seasonality. It's like the AI actually understands our store.",
  },
  {
    name: "Tom Velasco",
    role: "Co-founder & CEO",
    company: "Nomad Gear",
    avatar: "TV",
    quote: "We went from guessing what to A/B test to having a ranked list of exactly what to fix. DynoWeb saved us weeks of guesswork every single month.",
  },
  {
    name: "Yuki Tanaka",
    role: "Director of Digital",
    company: "Kairo Studio",
    avatar: "YT",
    quote: "Setup was under five minutes. By the end of our first week we'd already identified three underperforming product pages and rewritten them based on DynoWeb's prompts.",
  },
  {
    name: "Ava Okonkwo",
    role: "Operations Manager",
    company: "Roots & Co.",
    avatar: "AO",
    quote: "Our team isn't technical at all. DynoWeb speaks plain English, surfaces the right data at the right time, and never overwhelms us. It's exactly what we needed.",
  },
];

export default function TestimonialsSection() {
  const trackRef  = useRef<HTMLDivElement>(null);
  const sketchRef = useRef<HTMLSpanElement>(null);
  const [paused, setPaused] = useState(false);

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

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Karla:wght@400;500;600;700&display=swap');

        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(20px); }
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

        .tsection { font-family:'Karla',sans-serif; }

        .tsection .sec-heading {
          font-family:'Montserrat',sans-serif;
          font-size: clamp(1.75rem, 3.2vw, 3.5rem);
          line-height:1.15; letter-spacing:-.02em;
          color:#e8eaf0;
          animation: fadeUp .6s ease forwards;
        }
        .tsection .sec-label {
          font-size:.7rem; font-weight:600;
          letter-spacing:.12em; text-transform:uppercase;
          color:rgba(255,255,255,0.25);
        }
        .tsection .divider-line {
          width:2.5rem; height:0.125rem; border-radius:0.125rem;
          background:linear-gradient(90deg,#6eb0ff,transparent);
        }

        /* Marquee */
        .marquee-track {
          animation: scrollLeft 32s linear infinite;
          will-change: transform;
        }
        .marquee-track.paused { animation-play-state: paused; }

        /* Edge fade mask on marquee container */
        .marquee-fade {
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
          mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
        }

        /* Cards */
        .tcard {
          flex-shrink: 0;
          width: min(78vw, 19rem);
          border-radius: 1.25rem;
          padding: 1.25rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          cursor: default;
          position: relative;
          overflow: hidden;
          transition: background 0.2s ease, border-color 0.2s ease;
        }
        .tcard:hover {
          background: rgba(255,255,255,0.055);
          border-color: rgba(255,255,255,0.12);
        }
        @media (min-width: 640px)  { .tcard { width: 20rem; padding: 1.5rem; } }
        @media (min-width: 1024px) { .tcard { width: 21rem; } }

        .tcard-quote {
          font-size: clamp(.855rem, 1.1vw, 1.5rem); line-height: 1.72;
          color: rgba(255,255,255,0.5);
        }
        .tcard-name { font-weight:600; font-size:clamp(.875rem, 1.1vw, 1.5rem); color:rgba(255,255,255,0.88); }
        .tcard-role { font-size:clamp(.72rem, .9vw, 1.2rem); color:rgba(255,255,255,0.3); font-weight:500; margin-top:1px; }

        .quote-mark {
          font-family:'Montserrat',sans-serif;
          font-size:4rem; line-height:.55;
          color:rgba(255,255,255,0.04);
          pointer-events:none; user-select:none;
          position:absolute; top:.875rem; right:1rem;
        }

        .avatar {
          width:2.125rem; height:2.125rem; border-radius:50%;
          display:flex; align-items:center; justify-content:center;
          font-size:.68rem; font-weight:700; color:rgba(255,255,255,0.75);
          background: rgba(59,111,190,0.2);
          border:1px solid rgba(59,111,190,0.3);
          letter-spacing:.02em; flex-shrink:0;
        }
      `}</style>

      <section
        className="tsection relative w-full overflow-hidden"
        style={{ background: "#0a0a0a", paddingTop: "max(5rem, 8vh)", paddingBottom: "max(5rem, 8vh)" }}
      >
        {/* Faint grid */}
        <div style={{
          position:"absolute", inset:0, pointerEvents:"none", zIndex:0,
          backgroundImage:`linear-gradient(rgba(255,255,255,.022) 1px,transparent 1px),
                           linear-gradient(90deg,rgba(255,255,255,.022) 1px,transparent 1px)`,
          backgroundSize:"48px 48px",
        }} />

        {/* Decorative SVGs */}
        <svg style={{position:"absolute",top:"6%",right:"8%",pointerEvents:"none",zIndex:0}} width="160" height="160" viewBox="0 0 160 160" fill="none" aria-hidden="true">
          <circle cx="80" cy="80" r="70" stroke="rgba(110,176,255,.06)" strokeWidth="1" strokeDasharray="10 8"/>
          <circle cx="80" cy="80" r="40" stroke="rgba(110,176,255,.03)" strokeWidth="1" strokeDasharray="4 4"/>
        </svg>
        <svg style={{position:"absolute",bottom:"10%",left:"5%",pointerEvents:"none",zIndex:0}} width="100" height="100" viewBox="0 0 100 100" fill="none" aria-hidden="true">
          <rect x="25" y="25" width="50" height="50" rx="8" stroke="rgba(110,176,255,.05)" strokeWidth="1" transform="rotate(45 50 50)"/>
          <circle cx="50" cy="50" r="3" fill="rgba(110,176,255,.08)"/>
        </svg>
        {[{t:"20%",l:"3%"},{t:"75%",l:"92%"},{t:"40%",l:"96%"},{t:"85%",l:"15%"},{t:"12%",l:"45%"},{t:"65%",l:"4%"}].map((p,i) => (
          <div key={i} style={{
            position:"absolute", top:p.t, left:p.l,
            width: i%2===0 ? 5 : 3, height: i%2===0 ? 5 : 3,
            borderRadius:"50%", background:"rgba(110,176,255,.08)",
            pointerEvents:"none", zIndex:0,
          }}/>
        ))}
        <svg style={{position:"absolute",top:"30%",left:"92%",pointerEvents:"none",zIndex:0}} width="60" height="80" viewBox="0 0 60 80" fill="none" aria-hidden="true">
          <line x1="5" y1="75" x2="55" y2="5" stroke="rgba(110,176,255,.05)" strokeWidth="1" strokeDasharray="6 4"/>
        </svg>

        {/* Header */}
        <div className="relative z-10 mx-auto w-full mb-8 md:mb-10
                        flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-6"
             style={{padding:"0 max(48px, 5vw)"}}>
          <div className="flex flex-col gap-3">
            <span className="sec-label">Social proof</span>
            <div className="divider-line" />
            <h2 className="sec-heading">
              Merchants who made
              <br />
              <span
                ref={sketchRef}
                style={{ position:"relative", display:"inline-block", whiteSpace:"nowrap" }}
              >
                <svg
                  className="sketch-highlight-svg"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  fill="none"
                  aria-hidden="true"
                  style={{
                    position:"absolute", top:0, left:"4%",
                    width:"92%", height:"100%",
                    overflow:"hidden", pointerEvents:"none", zIndex:0,
                  }}
                >
                  <defs>
                    <linearGradient id="skTestGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%"   stopColor="white" stopOpacity="0"/>
                      <stop offset="10%"  stopColor="white" stopOpacity="1"/>
                      <stop offset="90%"  stopColor="white" stopOpacity="1"/>
                      <stop offset="100%" stopColor="white" stopOpacity="0"/>
                    </linearGradient>
                    <mask id="skTestMask">
                      <rect x="0" y="0" width="100" height="100" fill="url(#skTestGrad)"/>
                    </mask>
                  </defs>
                  <g mask="url(#skTestMask)">
                    <path className="sketch-fill-1" d="M2 52 C20 48,42 46,62 47 C78 48,90 50,98 49" stroke="#3a7adc" strokeWidth="52" strokeLinecap="butt" opacity="0.22" fill="none"/>
                    <path className="sketch-fill-2" d="M2 51 C22 47,46 45,66 46 C80 47,91 49,98 48" stroke="#5aaeff" strokeWidth="38" strokeLinecap="butt" opacity="0.45" fill="none"/>
                    <path className="sketch-fill-2" d="M4 74 C24 71,50 70,70 71 C84 72,93 73,98 72" stroke="#5aaeff" strokeWidth="18" strokeLinecap="butt" opacity="0.38" fill="none"/>
                    <path className="sketch-fill-3" d="M4 34 C24 31,48 30,68 31 C82 32,92 33,98 32" stroke="#9dd8ff" strokeWidth="3"  strokeLinecap="butt" opacity="0.55" fill="none"/>
                  </g>
                </svg>
                <span className="sketch-accent-text">the switch.</span>
              </span>
            </h2>
          </div>

          <p className="hidden md:block" style={{
            color:"rgba(255,255,255,0.3)", fontSize:"clamp(.9rem, 1.1vw, 1.5rem)",
            lineHeight:1.7, maxWidth:"22rem",
          }}>
            Over 10,000 Shopify stores use DynoWeb to find growth they didn't know was there.
          </p>
        </div>

        {/* Marquee */}
        <div
          className="marquee-fade relative z-10 overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          <div
            ref={trackRef}
            className={`marquee-track flex w-max gap-4 sm:gap-5${paused ? " paused" : ""}`}
            style={{ paddingLeft:"1.25rem", paddingRight:"1.25rem" }}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
        </div>

      </section>
    </>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="tcard">
      <div className="quote-mark">"</div>
      <p className="tcard-quote" style={{ marginBottom:"18px" }}>
        "{testimonial.quote}"
      </p>
      <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
        <div className="avatar">{testimonial.avatar}</div>
        <div>
          <p className="tcard-name">{testimonial.name}</p>
          <p className="tcard-role">{testimonial.role} · {testimonial.company}</p>
        </div>
      </div>
    </div>
  );
}