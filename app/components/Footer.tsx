"use client";
import React, { useRef, useEffect } from "react";

export default function Footer() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Features", href: "#features-section" },
    { label: "Help", href: "/help" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "Join Waitlist", href: "/waitlist" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ];

  const word = "DynoWeb";
  const letters = word.split("");
  const lastTwo = new Set([word.length - 2, word.length - 1]);

  const wordmarkRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = wordmarkRef.current;
    if (!el) return;

    const scale = () => {
      el.style.whiteSpace = "nowrap";
      const spans = el.querySelectorAll("span");
      spans.forEach((s: Element) => {
        (s as HTMLElement).style.transform = "none";
      });

      // Use the root container width (full page width)
      const root = el.closest(".footer-root") as HTMLElement | null;
      const available = root ? root.offsetWidth : window.innerWidth;
      if (available === 0) return;

      el.style.fontSize = "500px";
      const natural = el.scrollWidth;
      if (natural === 0) return;
      const fs = (available / natural) * 500 * 0.92;
      el.style.fontSize = `${fs}px`;

      spans.forEach((s: Element, i: number) => {
        (s as HTMLElement).style.transform =
          i >= spans.length - 2 ? "translateY(-0.22em)" : "translateY(0)";
      });
    };

    // Run immediately, then again after fonts are ready
    scale();
    document.fonts?.ready.then(scale);

    const ro = new ResizeObserver(scale);
    const parent = wordmarkRef.current?.parentElement;
    if (parent) ro.observe(parent);
    return () => ro.disconnect();
  }, []);

  function handleFooterNav(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
      if (href === "#features-section") {
        e.preventDefault();
        if (window.location.pathname === "/") {
          const section = document.getElementById("features-section");
          if (section) section.scrollIntoView({ behavior: "smooth" });
        } else {
          window.location.href = "/#features-section";
        }
      }
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Karla:wght@400;500;600;700&display=swap');

        .footer-nav-link {
          font-family: 'Karla', sans-serif;
          font-size: 0.8125rem;
          color: rgba(255,255,255,0.35);
          text-decoration: none;
          font-weight: 400;
          letter-spacing: .01em;
          transition: color .18s ease;
        }
        .footer-nav-link:hover { color: rgba(255,255,255,0.75); }

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

      <div
        className="footer-root w-full flex flex-col"
        style={{ background: "#111", justifyContent: "flex-end" }}
      >
        {/* Wordmark — padded container, text fills it fully */}
        <div className="pt-20 md:pt-24 pb-6" style={{ overflow: "hidden", textAlign: "center" }}>
          <a href="/">
            <h2
              ref={wordmarkRef}
              style={{
                fontFamily: "'Montserrat',sans-serif",
                fontSize: "500px",
                fontWeight: 700,
                lineHeight: 1,
                letterSpacing: "-0.025em",
                color: "#f0f0f0",
                margin: 0,
                padding: 0,
                display: "inline-block",
                userSelect: "none",
                whiteSpace: "nowrap",
                width: "100%",
              }}
            >
              {letters.map((char, i) => (
                <span key={i} style={{ display: "inline-block" }}>{char}</span>
              ))}
            </h2>
          </a>
        </div>

        {/* Divider removed */}

        {/* Footer bar */}
        <footer className="py-5 sm:py-6" style={{padding:"20px max(48px, 5vw)"}}>
          <div className="flex items-center justify-between footer-responsive-bar">
            <a href="/" style={{ textDecoration: "none" }}>
              <span style={{ fontFamily: "'Karla',sans-serif", fontSize: "0.8125rem", fontWeight: 500, color: "rgba(255,255,255,0.25)" }}>DynoWeb</span>
            </a>
            <nav className="flex items-center gap-8 footer-responsive-nav">
              {navItems.map((item, i) => (
                <a key={i} href={item.href} className="footer-nav-link" onClick={e => handleFooterNav(e, item.href)}>{item.label}</a>
              ))}
            </nav>
          </div>
        </footer>
        <div style={{textAlign:'center', color:'rgba(255,255,255,0.38)', fontFamily:'Karla, sans-serif', fontSize:'0.82rem', paddingBottom:'16px'}}>Official contact: <a href="mailto:info@dynoweb.app" style={{color:'rgba(255,255,255,0.7)'}}>info@dynoweb.app</a></div>
      </div>
    </>
  );
}
