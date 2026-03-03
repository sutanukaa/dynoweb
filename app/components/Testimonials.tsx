"use client";
import { useEffect, useRef, useState } from "react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  metric: string;
  metricLabel: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "Head of eCommerce",
    company: "Lumière Co.",
    avatar: "SC",
    quote:
      "DynoWeb felt like hiring a full-time analyst overnight. The AI flagged a checkout drop-off we'd been blind to for months — fixed it in a day, revenue jumped immediately.",
    metric: "+187%",
    metricLabel: "Checkout conversion",
  },
  {
    name: "Marcus Reid",
    role: "Founder",
    company: "Strider Supply",
    avatar: "MR",
    quote:
      "I was skeptical of yet another analytics tool. But DynoWeb actually explains what the numbers mean and what to do about them. It's the first dashboard I open every morning.",
    metric: "4.1×",
    metricLabel: "ROI in 60 days",
  },
  {
    name: "Priya Anand",
    role: "Growth Lead",
    company: "Bloom Botanics",
    avatar: "PA",
    quote:
      "The suggestions aren't generic — they're specific to our products, our customers, our seasonality. It's like the AI actually understands our store.",
    metric: "92%",
    metricLabel: "Reduction in churn",
  },
  {
    name: "Tom Velasco",
    role: "Co-founder & CEO",
    company: "Nomad Gear",
    avatar: "TV",
    quote:
      "We went from guessing what to A/B test to having a ranked list of exactly what to fix. DynoWeb saved us weeks of guesswork every single month.",
    metric: "$2.4M",
    metricLabel: "Revenue attributed",
  },
  {
    name: "Yuki Tanaka",
    role: "Director of Digital",
    company: "Kairo Studio",
    avatar: "YT",
    quote:
      "Setup was under five minutes. By the end of our first week we'd already identified three underperforming product pages and rewritten them based on DynoWeb's prompts.",
    metric: "11 min",
    metricLabel: "Avg. time to insight",
  },
  {
    name: "Ava Okonkwo",
    role: "Operations Manager",
    company: "Roots & Co.",
    avatar: "AO",
    quote:
      "Our team isn't technical at all. DynoWeb speaks plain English, surfaces the right data at the right time, and never overwhelms us. It's exactly what we needed.",
    metric: "3×",
    metricLabel: "Team productivity",
  },
];

export default function TestimonialsSection() {
  const track1Ref = useRef<HTMLDivElement>(null);
  const track2Ref = useRef<HTMLDivElement>(null);
  const sketchRef = useRef<HTMLSpanElement>(null);
  const [pausedTrack, setPausedTrack] = useState<number | null>(null);

  // Scroll-triggered sketch — same logic as hero
  useEffect(() => {
    const el = sketchRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("sketch-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cal+Sans&family=Instrument+Sans:wght@400;500;600&display=swap');

        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0); }
        }

        /* ── Sketch highlight — identical keyframe & class names to hero ── */
        @keyframes sketchHighlightDraw {
          from { stroke-dashoffset: 900; }
          to   { stroke-dashoffset: 0; }
        }
        .sketch-highlight-svg { pointer-events: none; }

        /* Paused by default — only play once wrapper gains .sketch-visible */
        .sketch-fill-1 { stroke-dasharray: 900; stroke-dashoffset: 900; }
        .sketch-fill-2 { stroke-dasharray: 900; stroke-dashoffset: 900; }
        .sketch-fill-3 { stroke-dasharray: 900; stroke-dashoffset: 900; }

        .sketch-visible .sketch-fill-1 { animation: sketchHighlightDraw 0.6s ease-out 0.15s forwards; }
        .sketch-visible .sketch-fill-2 { animation: sketchHighlightDraw 0.55s ease-out 0.15s forwards; }
        .sketch-visible .sketch-fill-3 { animation: sketchHighlightDraw 0.45s ease-out 0.28s forwards; }

        .sketch-accent-text {
          position: relative;
          z-index: 1;
          color: #0f172a;
          display: inline-block;
          cursor: default;
        }
        /* ─────────────────────────────────────────────────────────────────── */

        .testimonials-section { font-family:'Instrument Sans',sans-serif; }

        .section-heading {
          font-family:'Cal Sans','Georgia',serif;
          font-size:clamp(2rem,4vw,3rem);
          line-height:1.15; letter-spacing:-.02em; color:#0f172a;
          animation:fadeUp .6s ease forwards;
        }

        /* Marquee */
        .track-1 { animation: scrollLeft 32s linear infinite; }
        .track-1.paused { animation-play-state: paused; }
        .track-2 { animation: scrollRight 28s linear infinite; }
        .track-2.paused { animation-play-state: paused; }

        /* Cards — matte blue */
        .tcard {
          flex-shrink: 0;
          width: 340px;
          border-radius: 20px;
          padding: 24px;
          background: #1e3a8a;
          border: 1px solid rgba(255,255,255,0.1);
          cursor: default;
          position: relative;
          overflow: hidden;
        }
        .tcard-quote {
          font-size: .875rem;
          line-height: 1.72;
          color: rgba(255,255,255,0.78);
        }
        .tcard-metric {
          font-family: 'Cal Sans', serif;
          font-size: 1.6rem;
          line-height: 1;
          color: #fff;
          letter-spacing: -.02em;
        }
        .tcard-metric-label {
          font-size: .68rem;
          font-weight: 600;
          letter-spacing: .08em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          margin-top: 2px;
        }
        .tcard-name { font-weight:600; font-size:.875rem; color:#fff; }
        .tcard-role { font-size:.72rem; color:rgba(255,255,255,0.45); font-weight:500; margin-top:1px; }
        .avatar {
          width:34px; height:34px; border-radius:50%;
          display:flex; align-items:center; justify-content:center;
          font-size:.68rem; font-weight:700; color:white;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.18);
          letter-spacing:.02em; flex-shrink:0;
        }
        .quote-mark {
          font-family:'Cal Sans',Georgia,serif;
          font-size:5rem; line-height:.55;
          color:rgba(255,255,255,0.06);
          pointer-events:none; user-select:none;
          position:absolute; top:14px; right:16px;
        }
        .divider-line {
          width:40px; height:2px; border-radius:2px;
          background:linear-gradient(90deg,#3b6fbe,transparent);
        }
        .section-label {
          font-size:.7rem; font-weight:600;
          letter-spacing:.12em; text-transform:uppercase; color:#94a3b8;
        }
      `}</style>

      <section className="testimonials-section relative w-full overflow-hidden py-28">
        {/* Header */}
        <div className="relative z-10 mx-auto max-w-6xl px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <span className="section-label">Social proof</span>
            <div className="divider-line" />
            <h2 className="section-heading">
              Merchants who made
              <br />
              {/* Sketch-highlighted "the switch." — same pattern as hero */}
              <span
                ref={sketchRef}
                style={{
                  position: "relative",
                  display: "inline-block",
                  whiteSpace: "nowrap",
                }}
              >
                <svg
                  className="sketch-highlight-svg"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "4%",
                    width: "92%",
                    height: "100%",
                    overflow: "hidden",
                    pointerEvents: "none",
                    zIndex: 0,
                  }}
                >
                  <defs>
                    <linearGradient
                      id="skTestGrad"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="white" stopOpacity="0" />
                      <stop offset="10%" stopColor="white" stopOpacity="1" />
                      <stop offset="90%" stopColor="white" stopOpacity="1" />
                      <stop offset="100%" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <mask id="skTestMask">
                      <rect
                        x="0"
                        y="0"
                        width="100"
                        height="100"
                        fill="url(#skTestGrad)"
                      />
                    </mask>
                  </defs>
                  <g mask="url(#skTestMask)">
                    {/* Soft backing glow */}
                    <path
                      className="sketch-fill-1"
                      d="M2 52 C20 48, 42 46, 62 47 C78 48, 90 50, 98 49"
                      stroke="#3b6fbe"
                      strokeWidth="52"
                      strokeLinecap="butt"
                      opacity="0.18"
                      fill="none"
                    />
                    {/* Main marker stroke */}
                    <path
                      className="sketch-fill-2"
                      d="M2 51 C22 47, 46 45, 66 46 C80 47, 91 49, 98 48"
                      stroke="#3b6fbe"
                      strokeWidth="38"
                      strokeLinecap="butt"
                      opacity="0.55"
                      fill="none"
                    />
                    {/* Second partial stroke — bottom only */}
                    <path
                      className="sketch-fill-2"
                      d="M4 74 C24 71, 50 70, 70 71 C84 72, 93 73, 98 72"
                      stroke="#3b6fbe"
                      strokeWidth="18"
                      strokeLinecap="butt"
                      opacity="0.55"
                      fill="none"
                    />
                    {/* Thin top ink edge */}
                    <path
                      className="sketch-fill-3"
                      d="M4 34 C24 31, 48 30, 68 31 C82 32, 92 33, 98 32"
                      stroke="#2d5fa8"
                      strokeWidth="3"
                      strokeLinecap="butt"
                      opacity="0.35"
                      fill="none"
                    />
                  </g>
                </svg>
                <span className="sketch-accent-text">the switch.</span>
              </span>
            </h2>
          </div>
          <p
            style={{
              color: "#64748b",
              fontSize: ".9rem",
              lineHeight: 1.7,
              maxWidth: "340px",
            }}
          >
            Over 10,000 Shopify stores use DynoWeb to find growth they didn't
            know was there.
          </p>
        </div>

        {/* Single row of testimonials */}
        <div className="relative z-10">
          <div
            className="overflow-hidden"
            onMouseEnter={() => setPausedTrack(1)}
            onMouseLeave={() => setPausedTrack(null)}
          >
            <div
              ref={track1Ref}
              className={`track-1 flex gap-5 w-max${
                pausedTrack === 1 ? " paused" : ""
              }`}
            >
              {[...testimonials, ...testimonials].map((t, i) => (
                <TestimonialCard key={`testimonial-${i}`} testimonial={t} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom trust bar */}
        <div className="relative z-10 mx-auto max-w-6xl px-6 mt-16">
          <div
            className="flex flex-wrap items-center justify-center gap-8 rounded-2xl py-5 px-6"
            style={{
              background: "rgba(255,255,255,0.6)",
              border: "1px solid rgba(99,130,200,0.12)",
              backdropFilter: "blur(8px)",
              boxShadow: "0 2px 16px rgba(99,130,200,0.06)",
            }}
          >
            {[
              { v: "10,000+", l: "Active stores" },
              { v: "4.9 / 5", l: "Average rating" },
              { v: "$180M+", l: "Revenue tracked" },
              { v: "99.98%", l: "Uptime SLA" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-0.5">
                <span
                  style={{
                    fontFamily: "'Cal Sans',serif",
                    fontSize: "1.4rem",
                    color: "#2d5fa8",
                    lineHeight: 1,
                  }}
                >
                  {s.v}
                </span>
                <span
                  style={{
                    fontSize: ".7rem",
                    color: "#94a3b8",
                    fontWeight: 500,
                    letterSpacing: ".06em",
                  }}
                >
                  {s.l}
                </span>
              </div>
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

      {/* Quote */}
      <p className="tcard-quote" style={{ marginBottom: "20px" }}>
        "{testimonial.quote}"
      </p>

      {/* Author */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div className="avatar">{testimonial.avatar}</div>
        <div>
          <p className="tcard-name">{testimonial.name}</p>
          <p className="tcard-role">
            {testimonial.role} · {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}
