"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  label: string;
  id: string;
  href?: string;
  hasDropdown?: boolean;
}

const navItems: NavItem[] = [
  { label: "Features", id: "features" },
  { label: "Use Cases", id: "use-cases", href: "/use-cases" },
  { label: "Pricing", id: "pricing", href: "/pricing" },
  { label: "Our Journey", id: "our-journey", href: "/our-journey" },
  { label: "Help", id: "help", href: "/help" },
  { label: "Contact Us", id: "contact", href: "/contact-us" },
  { label: "Privacy Policy", id: "privacy", href: "/privacy-policy" },
];

function scrollToFeatures() {
  if (window.location.pathname === "/") {
    const section = document.getElementById("features-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  } else {
    window.location.href = "/#features-section";
  }
}

export default function Navbar() {
  const [mobileOpen,    setMobileOpen]    = useState(false);
  const [scrolled,      setScrolled]      = useState(false);

  /* Add a subtle border when user scrolls */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleMobileNav(
    e: React.MouseEvent<HTMLAnchorElement>,
    item: NavItem
  ) {
    setMobileOpen(false);

    if (item.id === "features") {
      e.preventDefault();
      scrollToFeatures();
    }
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Karla:wght@400;500;600;700&display=swap');

        .nav-root {
          position: fixed; top: 0; left: 0; right: 0;
          z-index: 9999;
          font-family: 'Karla', sans-serif;
          transition: border-color 0.3s ease, background 0.3s ease;
          background: rgba(10,10,10,0.35) !important;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }

        .nav-inner {
          display: flex; align-items: center; gap: 4px;
          max-width: 1600px; margin: 0 auto;
          padding: 0 clamp(1.25rem, 4vw, 3rem);
          height: 60px;
          background: transparent !important;
        }

        /* Logo */
        .nav-logo {
          display: flex; align-items: center; gap: 8px;
          margin-right: 8px;
          text-decoration: none; cursor: pointer;
          font-weight: 700; font-size: 0.95rem;
          color: rgba(255,255,255,0.88);
          letter-spacing: -0.01em;
        }
        .nav-logo-img {
          height: 140px;
          width: auto;
          display: block;
          opacity: 0.98;
          filter: brightness(1.52) contrast(1.12) saturate(1.1)
            drop-shadow(0 0 16px rgba(255,255,255,0.05));
          transition: opacity 0.15s ease, filter 0.15s ease;
        }
        .nav-logo:hover .nav-logo-img {
          opacity: 1;
          filter: brightness(1.62) contrast(1.14) saturate(1.12)
            drop-shadow(0 0 20px rgba(255,255,255,0.07));
        }
        .nav-logo-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: #3b6fbe;
          box-shadow: 0 0 8px rgba(59,111,190,0.7);
        }

        /* Nav links */
        .nav-links {
          display: flex; align-items: center; gap: 2px;
        }
        .nav-link {
          display: inline-flex; align-items: center; gap: 4px;
          background: none;
          border: none; cursor: pointer; outline: none;
          padding: 8px 8px;
          font-family: 'Karla', sans-serif;
          font-size: 0.875rem; font-weight: 500;
          color: rgba(255,255,255,0.65);
          letter-spacing: 0.01em;
          text-decoration: none;
          transition: color 0.15s ease;
        }
        .nav-link:hover {
          color: rgba(255,255,255,0.88);
        }

        /* CTA button */
        .nav-cta {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(59,111,190,0.12);
          border: 1px solid rgba(59,111,190,0.25);
          border-radius: 8px;
          padding: 7px 16px;
          font-family: 'Karla', sans-serif;
          font-size: 0.875rem; font-weight: 600;
          color: rgba(147,197,253,0.9);
          cursor: pointer; outline: none;
          letter-spacing: 0.01em;
          transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;
          white-space: nowrap;
        }
        .nav-cta:hover {
          background: rgba(59,111,190,0.22);
          border-color: rgba(59,111,190,0.45);
          color: #fff;
        }

        /* Chevron */
        .nav-chevron {
          opacity: 0.45;
          transition: transform 0.2s ease, opacity 0.15s ease;
        }
        .nav-link:hover .nav-chevron { opacity: 0.7; }

        /* Launch banner — bold, glowy, celebratory (brand-blue palette) */
        .launch-banner {
          position: relative;
          background:
            radial-gradient(ellipse 60% 90% at 50% 50%, #eef4ff 0%, #ffffff 70%);
          color: #000;
          padding: 11px 16px;
          text-align: center;
          font-family: 'Karla', sans-serif;
          font-size: 0.92rem;
          font-weight: 500;
          letter-spacing: 0.005em;
          border-bottom: 1px solid rgba(80,130,200,0.22);
          overflow: hidden;
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.9),
            inset 0 -1px 0 rgba(80,130,200,0.08),
            0 0 24px rgba(110,176,255,0.22);
        }
        /* Animated shimmer sweep — brand-blue light moves across the banner */
        .launch-banner::before {
          content: "";
          position: absolute;
          top: 0; bottom: 0;
          left: -45%;
          width: 45%;
          background: linear-gradient(
            90deg,
            rgba(110,176,255,0) 0%,
            rgba(110,176,255,0.45) 45%,
            rgba(150,200,255,0.75) 50%,
            rgba(110,176,255,0.45) 55%,
            rgba(110,176,255,0) 100%
          );
          filter: blur(10px);
          pointer-events: none;
          animation: bannerShimmer 4.5s linear infinite;
        }
        @keyframes bannerShimmer {
          0%   { left: -45%; }
          100% { left: 100%; }
        }
        /* Downward outer glow — emanates from banner into the dark nav below */
        .launch-banner::after {
          content: "";
          position: absolute;
          left: 0; right: 0; top: 100%;
          height: 22px;
          background: linear-gradient(
            180deg,
            rgba(110,176,255,0.45) 0%,
            rgba(110,176,255,0) 100%
          );
          pointer-events: none;
          z-index: 1;
        }
        .launch-banner-link {
          position: relative;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: #000;
          text-decoration: none;
          transition: opacity 0.15s ease;
        }
        .launch-banner-link:hover { opacity: 0.82; }
        /* Sparkle accents that twinkle */
        .launch-sparkle {
          flex-shrink: 0;
          color: #3b6fbe;
          filter: drop-shadow(0 0 5px rgba(110,176,255,0.7));
          animation: sparkleTwinkle 2.2s ease-in-out infinite;
        }
        .launch-sparkle-2 { animation-delay: 0.7s; }
        .launch-sparkle-3 { animation-delay: 1.4s; }
        @keyframes sparkleTwinkle {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.5; }
          50%      { transform: scale(1.3) rotate(15deg); opacity: 1; }
        }
        /* LIVE pill — solid black with pulsing green dot inside */
        .launch-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #0a0a0a;
          color: #fff;
          padding: 3px 9px 3px 8px;
          border-radius: 999px;
          font-size: 0.66rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          box-shadow:
            0 2px 8px rgba(0,0,0,0.18),
            0 0 0 1px rgba(255,255,255,0.1) inset;
        }
        .launch-pill-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 6px rgba(34,197,94,0.95);
          animation: pillDotPulse 1.6s ease-in-out infinite;
        }
        @keyframes pillDotPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%      { opacity: 0.55; transform: scale(0.85); }
        }
        .launch-banner-text strong {
          font-weight: 700;
        }
        .launch-banner-link-cta {
          font-weight: 600;
          background: linear-gradient(90deg, #3b6fbe 0%, #1a3a7a 50%, #3b6fbe 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-left: 2px;
        }
        .launch-banner-arrow {
          transition: transform 0.18s ease;
          flex-shrink: 0;
          color: #3b6fbe;
          filter: drop-shadow(0 0 4px rgba(110,176,255,0.6));
        }
        .launch-banner-link:hover .launch-banner-arrow {
          transform: translateX(4px);
        }
        @media (max-width: 600px) {
          .launch-banner { font-size: 0.78rem; padding: 9px 12px; }
          .launch-banner-link { gap: 9px; }
          .launch-banner-mobile-hide { display: none; }
          .launch-sparkle { width: 12px; height: 12px; }
        }
        @media (max-width: 380px) {
          .launch-sparkle-3 { display: none; }
        }

        /* Mobile menu */
        .mobile-btn {
          display: none;
          background: none; border: none; cursor: pointer; padding: 6px;
          color: rgba(255,255,255,0.6);
          margin-left: auto;
        }
        .mobile-menu {
          position: fixed; top: 140px; left: 1rem; right: 1rem;
          background: rgba(11,11,16,0.97);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 16px;
          backdrop-filter: blur(32px);
          padding: 8px;
          z-index: 9998;
          box-shadow: 0 8px 32px rgba(0,0,0,0.6);
        }
        @media (max-width: 380px) {
          .mobile-menu { top: 150px; }
        }
        .mobile-link {
          display: block; padding: 11px 14px; border-radius: 10px;
          font-size: 0.9rem; font-weight: 500;
          color: rgba(255,255,255,0.6);
          text-decoration: none; cursor: pointer;
          transition: background 0.14s ease, color 0.14s ease;
          background: none; border: none; width: 100%; text-align: left;
          font-family: 'Karla', sans-serif;
        }
        .mobile-link:hover { background: rgba(255,255,255,0.05); color: rgba(255,255,255,0.88); }

        @media (max-width: 768px) {
          .nav-inner {
            justify-content: space-between;
            padding: 0 0.5rem;
          }
          .nav-logo { margin-right: 0; }
          .nav-logo-img { height: 80px; }
          .nav-links, .nav-cta { display: none !important; }
          .mobile-btn { display: flex; }
        }
      `}</style>

      {/* ── Navbar ── */}
      <header
        className="nav-root"
        style={{
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.07)"
            : "1px solid transparent",
          background: scrolled
            ? "rgba(10,10,10,0.85)"
            : "#000",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        }}
      >
        {/* Launch banner */}
        <div className="launch-banner">
          <a
            href="https://apps.shopify.com/dynoweb"
            target="_blank"
            rel="noopener noreferrer"
            className="launch-banner-link"
          >
            <svg
              className="launch-sparkle launch-sparkle-1"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2l1.8 6.4L20 10l-6.2 1.6L12 18l-1.8-6.4L4 10l6.2-1.6L12 2z" />
            </svg>
            <span className="launch-pill" aria-hidden="true">
              <span className="launch-pill-dot" />
              LIVE
            </span>
            <span className="launch-banner-text">
              <strong>DynoWeb is now on the Shopify App Store</strong>
              <span className="launch-banner-link-cta launch-banner-mobile-hide"> &nbsp;Get it now</span>
            </span>
            <svg
              className="launch-banner-arrow"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <svg
              className="launch-sparkle launch-sparkle-2"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2l1.8 6.4L20 10l-6.2 1.6L12 18l-1.8-6.4L4 10l6.2-1.6L12 2z" />
            </svg>
            <svg
              className="launch-sparkle launch-sparkle-3 launch-banner-mobile-hide"
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2l1.8 6.4L20 10l-6.2 1.6L12 18l-1.8-6.4L4 10l6.2-1.6L12 2z" />
            </svg>
          </a>
        </div>

        <div className="nav-inner">

          {/* Logo */}
          <a href="/" className="nav-logo">
            <img src="/logo.png" alt="DynoWeb Logo" className="nav-logo-img" />
          </a>

          {/* Nav links */}
          <nav className="nav-links">
            {navItems.map(item =>
              item.id === "features" ? (
                <button key={item.id} className="nav-link" onClick={scrollToFeatures}>
                  {item.label}
                </button>
              ) : (
                <a key={item.id} className="nav-link" href={item.href}>
                  {item.label}
                </a>
              )
            )}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="mobile-btn"
            onClick={() => setMobileOpen(p => !p)}
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {mobileOpen
                ? <><path d="M18 6L6 18"/><path d="M6 6l12 12"/></>
                : <><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></>
              }
            </svg>
          </button>
        </div>
      </header>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0  }}
            exit={{    opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
          >
            {navItems.map(item => (
              <a
                key={item.id}
                href={item.href ?? "#"}
                className="mobile-link"
                onClick={(e) => handleMobileNav(e, item)}
              >
                {item.label}
              </a>
            ))}
            <div style={{ height: 1, background: "rgba(255,255,255,0.06)", margin: "6px 0" }} />
            <a href="https://apps.shopify.com/dynoweb" target="_blank" rel="noopener noreferrer" className="mobile-link" style={{ color: "rgba(147,197,253,0.85)", fontWeight: 600, textDecoration: "none" }}>
              Get DynoWeb on Shopify →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
