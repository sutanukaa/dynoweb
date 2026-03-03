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
      const available = parent.offsetWidth - 96; // 48px each side
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
          font-size: 13px;
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

      <div className="w-full bg-white flex flex-col overflow-hidden">

        {/* Wordmark area */}
        <div className="relative flex-1 flex items-end px-4 sm:px-6 md:px-12 pt-16 sm:pt-20 md:pt-24 pb-0">
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
              fontSize: "clamp(80px, 18vw, 260px)",
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
        <div style={{ height: 1, background: "rgba(226,232,240,.9)" }} className="mx-4 sm:mx-6 md:mx-12" />

        {/* Footer bar */}
        <footer className="px-4 sm:px-6 md:px-12 py-5 sm:py-6">
          <div className="flex items-center justify-between footer-responsive-bar">
            <span style={{
              fontFamily: "'Instrument Sans',sans-serif",
              fontSize: "13px", fontWeight: 500, color: "#94a3b8",
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