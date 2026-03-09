"use client";
import React from "react";

const bullets = [
  {
    title: "Step 1: Watch (Invisibly)",
    desc: "Our 6KB tracker captures 11 behavioral signals without slowing your store by a single millisecond.",
  },
  {
    title: "Step 2: Think (Like a CRO Expert)",
    desc: "The 3-layer AI engine processes data, spots revenue-leaking gaps, and scores them by ROI.",
  },
  {
    title: "Step 3: Fix (Automatically)",
    desc: 'Click "Apply" and DynoWeb builds a safe Draft Theme with the UX fixes already coded.',
  },
];

export default function AIShowcaseSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Karla:wght@400;500;600;700&display=swap');

        /* ── Base ── */
        .ais-root {
          background: #0a0a0a;
          font-family: 'Karla', sans-serif;
          position: relative;
          overflow: hidden;
          width: 100%;
        }
        .ais-root::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none; z-index: 0;
        }

        .ais-inner {
          position: relative; z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(4rem, 8vh, 7rem) clamp(1.5rem, 5vw, 5rem);
          display: flex;
          flex-direction: column;
          gap: clamp(3rem, 5vw, 5rem);
        }

        /* ── Section label ── */
        .ais-eyebrow {
          display: flex; flex-direction: column; gap: 10px;
        }
        .ais-eyebrow-text {
          font-size: clamp(.65rem, .8vw, .75rem);
          font-weight: 700; letter-spacing: .12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.28);
        }
        .ais-eyebrow-bar {
          width: 36px; height: 2px; border-radius: 2px;
          background: linear-gradient(90deg, #6eb0ff, transparent);
        }

        /* ── Main grid ── */
        .ais-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(2.5rem, 4vw, 4rem);
        }
        @media (min-width: 768px) {
          .ais-grid {
            grid-template-columns: 1fr 1fr;
            grid-template-areas:
              "headline demo"
              "bullets  bullets";
            align-items: center;
            column-gap: clamp(2rem, 4vw, 5rem);
          }
          .ais-demo     { grid-area: demo; }
          .ais-headline { grid-area: headline; }
          .ais-bullets  { grid-area: bullets; }
        }
        @media (min-width: 1100px) {
          .ais-grid {
            grid-template-columns: 1.1fr 0.85fr 1.05fr;
            grid-template-areas: "headline demo bullets";
            align-items: center;
            column-gap: clamp(2.5rem, 4vw, 5rem);
          }
        }

        /* ── Headline col ── */
        .ais-headline {
          display: flex; flex-direction: column; gap: 20px;
        }
        .ais-h2 {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(1.8rem, 3vw, 3.2rem);
          font-weight: 800; line-height: 1.1;
          letter-spacing: -0.025em;
          color: #ffffff;
          text-shadow: 0 0 40px rgba(255,255,255,0.08);
          margin: 0;
        }
        .ais-h2 em {
          font-style: normal;
          color: rgba(255,255,255,0.45);
        }
        .ais-rule {
          width: 100%; height: 1px;
          background: rgba(255,255,255,0.07);
        }
        .ais-body {
          font-size: clamp(.88rem, 1vw, 1rem);
          line-height: 1.75;
          color: rgba(255,255,255,0.35);
        }
        .ais-body strong {
          color: rgba(255,255,255,0.65);
          font-weight: 600;
        }
        .ais-stats {
          display: flex; gap: 20px; flex-wrap: wrap;
          padding-top: 4px;
        }
        .ais-stat {
          flex: 1; min-width: 110px;
        }
        .ais-stat-val {
          font-family: 'Karla', sans-serif;
          font-size: clamp(.82rem, .95vw, .95rem);
          font-weight: 700;
          color: #6eb0ff;
          margin-bottom: 3px;
        }
        .ais-stat-lbl {
          font-size: clamp(.65rem, .78vw, .75rem);
          color: rgba(255,255,255,0.25);
          line-height: 1.4;
        }
        .ais-stat-div {
          width: 1px;
          background: rgba(255,255,255,0.07);
          align-self: stretch;
        }

        /* ── DEMO CARD ── */
        .ais-demo {
          display: flex; align-items: center; justify-content: center;
        }
        .demo-card {
          position: relative;
          width: 100%;
          max-width: 300px;
          aspect-ratio: 3/4;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(110,176,255,0.06), 0 0 60px rgba(110,176,255,0.04);
          isolation: isolate;
        }

        /* faint inner grid */
        .demo-card::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
        }

        /* ── Mock store UI inside the card ── */
        .demo-store {
          position: absolute; inset: 0;
          padding: 24px 22px;
          display: flex; flex-direction: column; gap: 10px;
        }

        /* image placeholder */
        .demo-img-block {
          width: 100%; flex: 1;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
        }
        .demo-img-lines {
          display: flex; flex-direction: column; gap: 6px; align-items: center;
        }
        .demo-img-line {
          height: 2px; border-radius: 2px;
          background: rgba(255,255,255,0.06);
        }

        /* product meta */
        .demo-meta {
          display: flex; flex-direction: column; gap: 6px;
        }
        .demo-title-bar {
          height: 8px; width: 70%; border-radius: 4px;
          background: rgba(255,255,255,0.1);
        }
        .demo-price-bar {
          height: 6px; width: 35%; border-radius: 4px;
          background: rgba(255,255,255,0.06);
        }

        /* ── THE ODD BUTTON (broken state) ── */
        .demo-cta-wrap {
          position: relative;
          height: 44px;
          display: flex; align-items: center;
        }

        .demo-btn-broken {
          position: absolute;
          display: flex; align-items: center; justify-content: center; gap: 6px;
          height: 34px;
          border-radius: 6px;
          font-family: 'Karla', sans-serif;
          font-size: 0.72rem; font-weight: 700;
          letter-spacing: 0.03em;
          border: none; pointer-events: none;
          white-space: nowrap;
          padding: 0 10px;
          animation: btnBroken 9s ease-in-out infinite;
        }

        @keyframes btnBroken {
          /* broken state */
          0%,  45% {
            width: 68px;
            left: 60%;
            background: rgba(255,255,255,0.06);
            color: rgba(255,255,255,0.2);
            border: 1px solid rgba(255,255,255,0.07);
            border-radius: 6px;
            transform: none;
            box-shadow: none;
          }
          /* accept clicked → transition to fixed */
          55%, 58% {
            width: 68px;
            left: 60%;
            background: rgba(255,255,255,0.06);
            color: rgba(255,255,255,0.2);
            border: 1px solid rgba(255,255,255,0.07);
            border-radius: 6px;
            transform: scale(0.92);
            box-shadow: none;
          }
          /* fixed state: full width, prominent */
          65%, 88% {
            width: 100%;
            left: 0%;
            background: #ffffff;
            color: #0a0a0a;
            border: 1px solid transparent;
            border-radius: 10px;
            transform: none;
            box-shadow: 0 4px 20px rgba(255,255,255,0.08);
          }
          /* fade back to broken for loop */
          95%, 100% {
            width: 68px;
            left: 60%;
            background: rgba(255,255,255,0.06);
            color: rgba(255,255,255,0.2);
            border: 1px solid rgba(255,255,255,0.07);
            border-radius: 6px;
            transform: none;
            box-shadow: none;
          }
        }

        /* btn icon */
        .demo-btn-icon {
          animation: btnIconSwap 9s ease-in-out infinite;
        }
        @keyframes btnIconSwap {
          0%,  62% { opacity: 1; }
          63%, 64% { opacity: 0; }
          65%, 95% { opacity: 1; }
          96%, 100% { opacity: 1; }
        }
        .demo-btn-text-broken {
          animation: btnTextBroken 9s ease-in-out infinite;
        }
        @keyframes btnTextBroken {
          0%,  62% { opacity: 1; }
          63%, 64% { opacity: 0; }
          65%, 95% { opacity: 0; }
          96%, 100% { opacity: 1; }
        }
        .demo-btn-text-fixed {
          position: absolute;
          animation: btnTextFixed 9s ease-in-out infinite;
        }
        @keyframes btnTextFixed {
          0%,  62% { opacity: 0; }
          65%, 88% { opacity: 1; }
          95%, 100% { opacity: 0; }
        }

        /* ── Issue badge (on the broken button) ── */
        .demo-issue-badge {
          position: absolute;
          top: -22px; left: 58%;
          display: flex; align-items: center; gap: 4px;
          background: rgba(10,10,10,0.95);
          border: 1px solid rgba(255,100,100,0.25);
          border-radius: 6px;
          padding: 3px 8px;
          font-family: 'Karla', sans-serif;
          font-size: 0.55rem; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: rgba(255,130,100,0.85);
          white-space: nowrap;
          animation: issueBadge 9s ease-in-out infinite;
          pointer-events: none; z-index: 30;
        }
        @keyframes issueBadge {
          0%,  18% { opacity: 0; transform: translateY(4px); }
          24%, 50% { opacity: 1; transform: translateY(0); }
          56%, 100%{ opacity: 0; transform: translateY(-3px); }
        }

        /* ── Suggestion tooltip ── */
        .demo-suggestion {
          position: absolute;
          bottom: 70px; left: 12px; right: 12px;
          background: rgba(14,14,18,0.97);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          padding: 10px 12px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.6);
          pointer-events: none; z-index: 30;
          animation: suggestionPop 9s ease-in-out infinite;
        }
        @keyframes suggestionPop {
          0%,  26% { opacity: 0; transform: translateY(8px) scale(0.97); }
          33%, 52% { opacity: 1; transform: translateY(0) scale(1); }
          58%, 100%{ opacity: 0; transform: translateY(-4px) scale(0.97); }
        }
        .demo-sug-header {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 6px;
        }
        .demo-sug-title {
          font-family: 'Karla', sans-serif;
          font-size: 0.65rem; font-weight: 700;
          color: rgba(255,255,255,0.85);
        }
        .demo-sug-score {
          font-size: 0.55rem; font-weight: 700;
          padding: 2px 6px; border-radius: 99px;
          background: rgba(110,176,255,0.08);
          border: 1px solid rgba(110,176,255,0.2);
          color: #6eb0ff;
          letter-spacing: 0.04em;
        }
        .demo-sug-body {
          font-size: 0.6rem;
          color: rgba(255,255,255,0.35);
          line-height: 1.5;
          margin-bottom: 9px;
        }
        .demo-sug-actions {
          display: flex; gap: 6px;
        }
        .demo-sug-accept {
          flex: 1;
          height: 26px; border-radius: 7px;
          display: flex; align-items: center; justify-content: center; gap: 4px;
          font-family: 'Karla', sans-serif;
          font-size: 0.6rem; font-weight: 700;
          background: #ffffff; color: #0a0a0a;
          border: none;
          animation: acceptClick 9s ease-in-out infinite;
        }
        @keyframes acceptClick {
          0%,  48% { transform: scale(1); background: #ffffff; }
          50%, 52% { transform: scale(0.92); background: rgba(255,255,255,0.85); }
          53%, 100% { transform: scale(1); background: #ffffff; }
        }
        .demo-sug-dismiss {
          height: 26px; padding: 0 10px; border-radius: 7px;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Karla', sans-serif;
          font-size: 0.6rem; font-weight: 600;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.3);
        }

        /* ── Fixed tick flash ── */
        .demo-fixed-tick {
          position: absolute;
          top: 50%; right: 8px;
          transform: translateY(-50%);
          width: 18px; height: 18px; border-radius: 50%;
          background: rgba(255,255,255,0.15);
          display: flex; align-items: center; justify-content: center;
          animation: fixedTick 9s ease-in-out infinite;
          pointer-events: none; z-index: 31;
        }
        @keyframes fixedTick {
          0%,  62% { opacity: 0; }
          66%, 85% { opacity: 1; }
          92%, 100%{ opacity: 0; }
        }

        /* ── CURSOR ── */
        .demo-cursor {
          position: absolute;
          width: 18px; height: 22px;
          pointer-events: none; z-index: 40;
          filter: drop-shadow(1px 2px 3px rgba(0,0,0,0.7));
          animation: cursorMove 9s ease-in-out infinite;
        }
        @keyframes cursorMove {
          /* start offscreen bottom-right */
          0%        { opacity: 0; top: 85%; left: 90%; }
          8%        { opacity: 1; top: 85%; left: 90%; }
          /* move toward the odd button */
          22%       { opacity: 1; top: 76%; left: 64%; }
          /* hover on button — slight wobble */
          26%       { opacity: 1; top: 74%; left: 64%; }
          28%       { opacity: 1; top: 75%; left: 65%; }
          /* wait for tooltip */
          33%       { opacity: 1; top: 74%; left: 64%; }
          /* move to Accept button */
          44%       { opacity: 1; top: 82%; left: 30%; }
          /* hover on accept */
          47%       { opacity: 1; top: 83%; left: 28%; }
          /* click */
          50%       { opacity: 1; top: 83%; left: 28%; transform: scale(0.85); }
          52%       { opacity: 1; top: 83%; left: 28%; transform: scale(1); }
          /* linger */
          60%       { opacity: 1; top: 83%; left: 28%; }
          /* drift away */
          70%       { opacity: 0; top: 78%; left: 15%; }
          100%      { opacity: 0; top: 78%; left: 15%; }
        }

        /* ── Bullets col ── */
        .ais-bullets {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
        }
        @media (min-width: 768px) and (max-width: 1099px) {
          .ais-bullets {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .ais-bullet {
          padding: 16px 0;
          border-top: 1px solid rgba(255,255,255,0.07);
          display: flex; gap: 10px; align-items: flex-start;
          transition: padding-left .2s ease;
          cursor: default;
        }
        .ais-bullet:last-child { border-bottom: 1px solid rgba(255,255,255,0.07); }
        @media (min-width: 768px) and (max-width: 1099px) {
          .ais-bullet { padding: 18px 24px 18px 0; border-bottom: none; }
          .ais-bullet:last-child { border-bottom: none; }
          .ais-bullet:not(:first-child) {
            border-left: 1px solid rgba(255,255,255,0.07);
            padding-left: 24px;
          }
        }
        @media (min-width: 1100px) {
          .ais-bullet { padding: 14px 0; }
          .ais-bullet:last-child { border-bottom: 1px solid rgba(255,255,255,0.07); }
        }
        .ais-bullet:hover { padding-left: 6px; }
        .ais-bullet:hover .ais-bullet-title { color: #6eb0ff; }
        .ais-bullet-num {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.65rem; font-weight: 800;
          color: #6eb0ff;
          opacity: 0.4;
          letter-spacing: 0.05em;
          padding-top: 2px;
          flex-shrink: 0;
        }
        .ais-bullet-title {
          font-size: clamp(.78rem, .9vw, .88rem);
          font-weight: 700;
          color: rgba(255,255,255,0.7);
          margin-bottom: 4px;
          transition: color .2s ease;
        }
        .ais-bullet-desc {
          font-size: clamp(.72rem, .82vw, .8rem);
          color: rgba(255,255,255,0.28);
          line-height: 1.55;
        }
      `}</style>

      <section className="ais-root">
        <div className="ais-inner">

          {/* Eyebrow */}
          <div className="ais-eyebrow">
            <span className="ais-eyebrow-text">How it works</span>
            <div className="ais-eyebrow-bar" />
          </div>

          {/* Main grid */}
          <div className="ais-grid">

            {/* ── DEMO CARD ── */}
            <div className="ais-demo">
              <div className="demo-card">
                <div className="demo-store">

                  {/* Product image placeholder */}
                  <div className="demo-img-block">
                    <div className="demo-img-lines">
                      <div className="demo-img-line" style={{ width: 48 }} />
                      <div className="demo-img-line" style={{ width: 36 }} />
                      <div className="demo-img-line" style={{ width: 52 }} />
                    </div>
                  </div>

                  {/* Product meta */}
                  <div className="demo-meta">
                    <div className="demo-title-bar" />
                    <div className="demo-price-bar" />
                  </div>

                  {/* Odd / Fixed CTA */}
                  <div className="demo-cta-wrap">
                    {/* Issue badge */}
                    <div className="demo-issue-badge">
                      <svg width="7" height="7" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                        <line x1="8" y1="4" x2="8" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        <circle cx="8" cy="12" r="1" fill="currentColor"/>
                      </svg>
                      CTA misaligned
                    </div>

                    <div className="demo-btn-broken">
                      {/* icon pinned left */}
                      <span className="demo-btn-icon" style={{ position: "absolute", left: 10, display: "flex", alignItems: "center" }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                        </svg>
                      </span>
                      <span className="demo-btn-text-broken" style={{ margin: "0 auto" }}>Buy</span>
                      <span className="demo-btn-text-fixed" style={{ margin: "0 auto" }}>Add to Cart</span>

                      {/* fixed tick */}
                      <div className="demo-fixed-tick">
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6L9 17l-5-5"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Suggestion tooltip */}
                  <div className="demo-suggestion">
                    <div className="demo-sug-header">
                      <span className="demo-sug-title">CTA Placement Issue</span>
                      <span className="demo-sug-score">Impact 87</span>
                    </div>
                    <p className="demo-sug-body">
                      Add to Cart button is too small and off-center on mobile — costing ~18% of checkout clicks.
                    </p>
                    <div className="demo-sug-actions">
                      <div className="demo-sug-accept">
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6L9 17l-5-5"/>
                        </svg>
                        Apply fix
                      </div>
                      <div className="demo-sug-dismiss">Dismiss</div>
                    </div>
                  </div>

                </div>

                {/* Cursor */}
                <svg className="demo-cursor" viewBox="0 0 17 24" fill="none">
                  <path d="M1 1 L1 19 L5.4 15.2 L8.8 22 L12 20.3 L8.5 13.6 L14 12.5 Z"
                    fill="rgba(255,255,255,0.92)" stroke="rgba(0,0,0,0.4)" strokeWidth="1.2" strokeLinejoin="round"/>
                </svg>

              </div>
            </div>

            {/* ── Headline col ── */}
            <div className="ais-headline">
              <h2 className="ais-h2">
                Your store is leaking revenue.<br />
                <em>DynoWeb finds exactly where.</em>
              </h2>

              <div className="ais-rule" />

              <p className="ais-body">
                Regular analytics show you <strong>what happened</strong>. DynoWeb tells you <strong>what to fix</strong> — and does it for you. Our AI watches every tap, scroll, and rage-click, then surfaces the highest-ROI fixes automatically.
              </p>
              <p className="ais-body">
                No dashboards to configure. No analysts to hire. Just plug in your store and watch the insights surface.
              </p>

              <div className="ais-rule" />

              <div className="ais-stats">
                {[
                  { v: "SEO Safe", l: "Every fix passes Core Web Vitals. Rankings stay intact." },
                  { v: "Zero Risk", l: "Changes live in a Draft Theme — never your live store." },
                  { v: "Action, Not Data", l: "Hotjar shows a heatmap. We give you the fix." },
                ].map((s, i) => (
                  <React.Fragment key={s.v}>
                    {i > 0 && <div className="ais-stat-div" />}
                    <div className="ais-stat">
                      <p className="ais-stat-val">{s.v}</p>
                      <p className="ais-stat-lbl">{s.l}</p>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* ── Bullets col ── */}
            <div className="ais-bullets">
              {bullets.map((b, i) => (
                <div key={i} className="ais-bullet">
                  <span className="ais-bullet-num">0{i + 1}</span>
                  <div>
                    <p className="ais-bullet-title">{b.title}</p>
                    <p className="ais-bullet-desc">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}