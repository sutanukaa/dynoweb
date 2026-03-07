"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  label: string;
  id: string;
  href?: string;
  hasDropdown?: boolean;
}

const features = [
  { id: 1, title: "Feature 1", desc: "Short description for feature one.",   href: "/features/1" },
  { id: 2, title: "Feature 2", desc: "Short description for feature two.",   href: "/features/2" },
  { id: 3, title: "Feature 3", desc: "Short description for feature three.", href: "/features/3" },
  { id: 4, title: "Feature 4", desc: "Short description for feature four.",  href: "/features/4" },
  { id: 5, title: "Feature 5", desc: "Short description for feature five.",  href: "/features/5" },
  { id: 6, title: "Feature 6", desc: "Short description for feature six.",   href: "/features/6" },
];

const navItems: NavItem[] = [
  { label: "Features", id: "features", hasDropdown: true },
  { label: "Pricing",  id: "pricing",  href: "#pricing"  },
  { label: "Help",     id: "help",     href: "#help"      },
];

export default function Navbar() {
  const [featuresOpen,  setFeaturesOpen]  = useState(false);
  const [mobileOpen,    setMobileOpen]    = useState(false);
  const [scrolled,      setScrolled]      = useState(false);
  const [panelX,        setPanelX]        = useState(0);
  const [panelY,        setPanelY]        = useState(0);

  const featuresButtonRef = useRef<HTMLButtonElement>(null);
  const featuresTimeout   = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* Add a subtle border when user scrolls */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Features hover ── */
  const openFeatures = () => {
    if (featuresTimeout.current) clearTimeout(featuresTimeout.current);
    if (featuresButtonRef.current) {
      const r = featuresButtonRef.current.getBoundingClientRect();
      setPanelX(r.left + r.width / 2);
      setPanelY(r.bottom + 8);
    }
    setFeaturesOpen(true);
  };
  const closeFeatures = () => {
    featuresTimeout.current = setTimeout(() => setFeaturesOpen(false), 160);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Karla:wght@400;500;600;700&display=swap');

        .nav-root {
          position: fixed; top: 0; left: 0; right: 0;
          z-index: 9999;
          font-family: 'Karla', sans-serif;
          transition: border-color 0.3s ease, background 0.3s ease;
        }

        .nav-inner {
          display: flex; align-items: center; gap: 4px;
          max-width: 1600px; margin: 0 auto;
          padding: 0 clamp(1.25rem, 4vw, 3rem);
          height: 60px;
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
          background: none; border: none; cursor: pointer; outline: none;
          padding: 7px 14px; border-radius: 8px;
          font-family: 'Karla', sans-serif;
          font-size: 0.875rem; font-weight: 500;
          color: rgba(255,255,255,0.45);
          letter-spacing: 0.01em;
          text-decoration: none;
          transition: color 0.15s ease, background 0.15s ease;
        }
        .nav-link:hover {
          color: rgba(255,255,255,0.82);
          background: rgba(255,255,255,0.05);
        }

        /* CTA button */
        .nav-cta {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(59,111,190,0.18);
          border: 1px solid rgba(59,111,190,0.35);
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
          background: rgba(59,111,190,0.3);
          border-color: rgba(59,111,190,0.55);
          color: #fff;
        }

        /* Chevron */
        .nav-chevron {
          opacity: 0.45;
          transition: transform 0.2s ease, opacity 0.15s ease;
        }
        .nav-link:hover .nav-chevron { opacity: 0.7; }

        /* Feature cards */
        .feat-card {
          display: flex; flex-direction: column; gap: 5px;
          padding: 13px 13px; border-radius: 11px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          text-decoration: none; cursor: pointer;
          transition: background 0.16s ease, border-color 0.16s ease, transform 0.16s ease;
        }
        .feat-card:hover {
          background: rgba(255,255,255,0.07);
          border-color: rgba(255,255,255,0.13);
          transform: translateY(-1px);
        }
        .feat-card-icon {
          width: 30px; height: 30px; border-radius: 7px;
          background: rgba(59,111,190,0.2);
          border: 1px solid rgba(59,111,190,0.25);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 2px;
        }
        .feat-card-num   { font-size: 0.7rem; font-weight: 700; color: rgba(147,197,253,0.72); }
        .feat-card-title { font-size: 0.82rem; font-weight: 600; color: rgba(255,255,255,0.85); letter-spacing: 0.01em; }
        .feat-card-desc  { font-size: 0.71rem; font-weight: 400; color: rgba(255,255,255,0.32); line-height: 1.45; }

        /* Dropdown panel — fixed, positioned by JS */
        .features-panel {
          position: fixed;
          width: 468px;
          transform: translateX(-50%);
          background: rgba(11,11,16,0.97);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 18px;
          backdrop-filter: blur(32px);
          -webkit-backdrop-filter: blur(32px);
          box-shadow: 0 8px 40px rgba(0,0,0,0.75),
                      0 2px 8px rgba(0,0,0,0.5),
                      inset 0 1px 0 rgba(255,255,255,0.055);
          padding: 12px;
          display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 7px;
          z-index: 10000;
        }

        /* Mobile menu */
        .mobile-btn {
          display: none;
          background: none; border: none; cursor: pointer; padding: 6px;
          color: rgba(255,255,255,0.6);
        }
        .mobile-menu {
          position: fixed; top: 64px; left: 1rem; right: 1rem;
          background: rgba(11,11,16,0.97);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 16px;
          backdrop-filter: blur(32px);
          padding: 8px;
          z-index: 9998;
          box-shadow: 0 8px 32px rgba(0,0,0,0.6);
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
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        }}
      >
        <div className="nav-inner">

          {/* Logo */}
          <a href="/" className="nav-logo">
            <div className="nav-logo-dot" />
            DynoWeb
          </a>

          {/* Nav links — flush left after logo */}
          <nav className="nav-links">
            {navItems.map(item => (
              item.hasDropdown ? (
                <button
                  key={item.id}
                  ref={featuresButtonRef}
                  className="nav-link"
                  onMouseEnter={openFeatures}
                  onMouseLeave={closeFeatures}
                >
                  {item.label}
                  <motion.svg
                    className="nav-chevron"
                    width="11" height="11" viewBox="0 0 12 12" fill="none"
                    animate={{ rotate: featuresOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </motion.svg>
                </button>
              ) : (
                <a key={item.id} href={item.href} className="nav-link">
                  {item.label}
                </a>
              )
            ))}
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

      {/* ── Features dropdown panel — pinned under Features button ── */}
      <AnimatePresence>
        {featuresOpen && (
          <motion.div
            className="features-panel"
            style={{ left: panelX, top: panelY }}
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0,  scale: 1    }}
            exit={{    opacity: 0, y: -4, scale: 0.97 }}
            transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
            onMouseEnter={() => { if (featuresTimeout.current) clearTimeout(featuresTimeout.current); setFeaturesOpen(true); }}
            onMouseLeave={closeFeatures}
          >
            {features.map((f, i) => (
              <motion.a
                key={f.id}
                href={f.href}
                className="feat-card"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.035, duration: 0.16 }}
              >
                <div className="feat-card-icon">
                  <span className="feat-card-num">{f.id}</span>
                </div>
                <span className="feat-card-title">{f.title}</span>
                <span className="feat-card-desc">{f.desc}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

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
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div style={{ height: 1, background: "rgba(255,255,255,0.06)", margin: "6px 0" }} />
            <button className="mobile-link" style={{ color: "rgba(147,197,253,0.85)", fontWeight: 600 }}>
              Get Started →
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}