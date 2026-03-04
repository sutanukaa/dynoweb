"use client";
import React, { useRef, useEffect } from "react";

export default function Footer() {
  const navItems = [
    { label: "About DynoWeb",      href: "#about"      },
    { label: "Shopify Extensions", href: "#extensions" },
    { label: "Privacy",            href: "#privacy"    },
    { label: "Terms",              href: "#terms"      },
  ];

  const word = "DynoWeb";
  const letters = word.split("");
  const lastTwo = new Set([word.length - 2, word.length - 1]);

  const wordmarkRef = useRef<HTMLHeadingElement>(null);

  // Fluid full-width scaling — same technique as the hero
  useEffect(() => {
    const el = wordmarkRef.current;
    if (!el) return;

    const scale = () => {
      el.style.fontSize = "";
      el.style.whiteSpace = "nowrap";
      const parent = el.parentElement;
      if (!parent) return;
      const available = parent.offsetWidth * 0.85; // cap at 85% of container
      const natural   = el.scrollWidth;
      if (natural === 0) return;
      const ratio   = available / natural;
      const current = parseFloat(getComputedStyle(el).fontSize);
      el.style.fontSize = `${current * ratio}px`;
    };

    if (document.fonts?.ready) {
      document.fonts.ready.then(scale);
    } else {
      scale();
    }

    const ro = new ResizeObserver(scale);
    const parent = wordmarkRef.current?.parentElement;
    if (parent) ro.observe(parent);
    return () => ro.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cal+Sans&family=Instrument+Sans:wght@400;500;600&display=swap');

        .footer-nav-link {
          font-family: 'Instrument Sans', sans-serif;
          font-size: 0.8125rem;
          color: #94a3b8;
          text-decoration: none;
          font-weight: 300;
          letter-spacing: .01em;
          transition: color .18s ease;
        }
        .footer-nav-link:hover { color: #0f172a; }

        @media (max-width: 640px) {
          .footer-responsive-bar {
            flex-direction: column !important;
            gap: 12px !important;
            align-items: flex-start !important;
          }
          .footer-responsive-nav {
            gap: 18px !important;
            flex-wrap: wrap !important;
          }
        }
      `}</style>

      <div className="w-full bg-white flex flex-col overflow-hidden relative">

        {/* Abstract decorative elements */}
        <svg style={{position:"absolute",top:"12%",right:"8%",pointerEvents:"none",zIndex:0}} width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
          <circle cx="40" cy="40" r="32" stroke="rgba(59,111,190,.06)" strokeWidth="1" strokeDasharray="5 4"/>
        </svg>
        <svg style={{position:"absolute",top:"20%",left:"6%",pointerEvents:"none",zIndex:0}} width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <line x1="7" y1="1" x2="7" y2="13" stroke="rgba(59,111,190,.1)" strokeWidth="1"/>
          <line x1="1" y1="7" x2="13" y2="7" stroke="rgba(59,111,190,.1)" strokeWidth="1"/>
        </svg>
        {[{t:"25%",l:"92%"},{t:"60%",l:"4%"},{t:"45%",l:"88%"}].map((p,i)=>(
          <div key={i} style={{position:"absolute",top:p.t,left:p.l,width:4,height:4,borderRadius:"50%",background:"rgba(59,111,190,.1)",pointerEvents:"none",zIndex:0}}/>
        ))}

        {/* Wordmark area */}
        <div className="relative flex items-end px-5 sm:px-8 lg:px-16 xl:px-24 pt-12 md:pt-16 pb-6">
          {/* Subtle radial glow */}
          <div style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%,-50%)",
            width: "80%", height: "80%",
            background: "radial-gradient(ellipse at center,rgba(59,111,190,.08) 0%,rgba(59,111,190,.03) 50%,transparent 75%)",
            pointerEvents: "none", zIndex: 0,
          }} />

          <h2
            ref={wordmarkRef}
            style={{
              fontFamily: "'Cal Sans','Georgia',serif",
              /* Base size — JS will scale this to fill the container */
              fontSize: "clamp(60px, 14vw, 180px)",
              fontWeight: 300,
              lineHeight: 1,
              letterSpacing: "-0.025em",
              color: "#0f172a",
              margin: 0,
              padding: 0,
              display: "flex",
              alignItems: "flex-end",
              position: "relative",
              zIndex: 1,
              userSelect: "none",
              whiteSpace: "nowrap",
            }}
          >
            {letters.map((char, i) => (
              <span
                key={i}
                style={{
                  display: "inline-block",
                  transform: lastTwo.has(i) ? "translateY(-0.18em)" : "translateY(0)",
                }}
              >
                {char}
              </span>
            ))}
          </h2>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "rgba(226,232,240,.9)" }} className="mx-5 sm:mx-6" />

        {/* Footer bar */}
        <footer className="px-5 sm:px-8 lg:px-16 xl:px-24 py-5 sm:py-6">
          <div className="flex items-center justify-between footer-responsive-bar">
            <span style={{
              fontFamily: "'Instrument Sans',sans-serif",
              fontSize: "0.8125rem", fontWeight: 500, color: "#94a3b8",
            }}>
              © {new Date().getFullYear()} DynoWeb
            </span>

            <nav className="flex items-center gap-8 footer-responsive-nav">
              {navItems.map((item, i) => (
                <a key={i} href={item.href} className="footer-nav-link">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </footer>

      </div>
    </>
  );
}