"use client";

import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    question: "How long does it take to install DynoWeb?",
    answer:
      "Most merchants can install DynoWeb in under 5 minutes. The app automatically injects tracking into your storefront, and you can start seeing insights immediately.",
  },
  {
    question: "Will this affect my store's page speed?",
    answer:
      "DynoWeb is built to be as lightweight as possible. The tracking script is under 6KB and loads asynchronously, so it won’t impact your Core Web Vitals.",
  },
  {
    question: "Can I use it with existing analytics tools?",
    answer:
      "Yes. DynoWeb works alongside your existing analytics stack (GA4, Shopify analytics, etc.) and provides complementary insights without replacing your current setup.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sketchRef = useRef<HTMLSpanElement>(null);

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
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="faq-root"
      style={{ background: "#0a0a0a", padding: "5.5rem 0", position: "relative" }}
    >
      <style>{`
        @keyframes highlighterSweep {
          from { clip-path: inset(0 100% 0 0); }
          to   { clip-path: inset(0 0% 0 0); }
        }
        .sketch-highlight-svg { pointer-events:none; clip-path: inset(0 100% 0 0); }
        .sketch-visible .sketch-highlight-svg { animation: highlighterSweep 0.5s cubic-bezier(0.25,0.1,0.25,1) 0.1s forwards; }
        .sketch-accent-text { position: relative; z-index: 1; display: inline-block; color: #ffffff; }
      `}</style>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 1.5rem" }}>
        <h2
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 800,
            color: "#fff",
            margin: 0,
            marginBottom: "1.25rem",
            textAlign: "center",
          }}
        >
          Frequently asked
          <span ref={sketchRef} style={{ position: "relative", display: "inline-block", whiteSpace: "nowrap", marginLeft: "0.3em" }}>
            <svg className="sketch-highlight-svg" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none" aria-hidden="true"
              style={{ position: "absolute", top: 0, left: "4%", width: "92%", height: "100%", overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
              <defs>
                <linearGradient id="faqSkGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%"   stopColor="white" stopOpacity="0"/>
                  <stop offset="10%"  stopColor="white" stopOpacity="1"/>
                  <stop offset="90%"  stopColor="white" stopOpacity="1"/>
                  <stop offset="100%" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <mask id="faqSkMask"><rect x="0" y="0" width="100" height="100" fill="url(#faqSkGrad)"/></mask>
              </defs>
              <g mask="url(#faqSkMask)">
                <path d="M2 52 C20 48,42 46,62 47 C78 48,90 50,98 49" stroke="#1a3a7a" strokeWidth="52" strokeLinecap="butt" opacity="0.7" fill="none"/>
                <path d="M2 51 C22 47,46 45,66 46 C80 47,91 49,98 48" stroke="#3a7adc" strokeWidth="38" strokeLinecap="butt" opacity="0.45" fill="none"/>
                <path d="M4 74 C24 71,50 70,70 71 C84 72,93 73,98 72" stroke="#5aaeff" strokeWidth="18" strokeLinecap="butt" opacity="0.3" fill="none"/>
                <path d="M4 34 C24 31,48 30,68 31 C82 32,92 33,98 32" stroke="#7ec8ff" strokeWidth="2.5" strokeLinecap="butt" opacity="0.7" fill="none"/>
                <path d="M2 51 C22 47,46 45,66 46 C80 47,91 49,98 48" stroke="#9dd8ff" strokeWidth="1.5" strokeLinecap="butt" opacity="0.5" fill="none"/>
              </g>
            </svg>
            <span className="sketch-accent-text">questions</span>
          </span>
        </h2>

        <div style={{ display: "grid", gap: "1rem" }}>
          {faqs.map((faq, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="faq-item"
              style={{
                width: "100%",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 14,
                padding: "1.25rem 1.5rem",
                textAlign: "left",
                background: "rgba(255,255,255,0.02)",
                cursor: "pointer",
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: "1rem",
                alignItems: "start",
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.88)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {faq.question}
                </div>
                {openIndex === index && (
                  <p
                    style={{
                      fontFamily: "Karla, sans-serif",
                      fontSize: "0.95rem",
                      lineHeight: 1.7,
                      color: "rgba(255,255,255,0.55)",
                      margin: 0,
                    }}
                  >
                    {faq.answer}
                  </p>
                )}
              </div>
              <span
                style={{
                  fontFamily: "Karla, sans-serif",
                  fontSize: "1.1rem",
                  lineHeight: 1,
                  color: "rgba(255,255,255,0.5)",
                  transform: openIndex === index ? "rotate(45deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                aria-hidden="true"
              >
                +
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
