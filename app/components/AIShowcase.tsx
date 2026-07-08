"use client";
import React from "react";

const bullets = [
  {
    title: "Step 1: Find the Leak",
    desc: "Our lightweight ~34 KB tracker captures 11 behavioral signals — no slowdown — and the 3-layer AI engine spots revenue-leaking gaps and scores them by ROI.",
  },
  {
    title: "Step 2: Deploy the Fix",
    desc: "DynoWeb acts on your approval: the agent ships Shopify changes, SmartNudge deploys interventions live, SEO Autopilot applies fixes one-click. Or take the exact file and diff and let your dev ship it.",
  },
  {
    title: "Step 3: Show the Money",
    desc: "Impact measures every fix before→after and keeps a running scoreboard of the dollars earned and saved — proof, not a projection.",
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
          width: 100%;
          padding: clamp(4rem, 8vh, 7rem) clamp(1.5rem, 4vw, 4rem);
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
            grid-template-columns: minmax(300px, 1.05fr) minmax(340px, 430px) minmax(300px, 1fr);
            grid-template-areas: "headline demo bullets";
            align-items: start;
            column-gap: clamp(2.5rem, 4vw, 5rem);
          }
        }

        /* ── Headline col ── */
        .ais-headline {
          display: flex; flex-direction: column; gap: 20px;
          align-self: start;
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
          max-width: 380px;
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

        /* ── Implementation Guide card ── */
        .demo-impl-guide {
          position: absolute;
          bottom: 62px; left: 10px; right: 10px;
          background: rgba(14,14,18,0.97);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.6);
          pointer-events: none; z-index: 30;
          overflow: hidden;
          animation: implGuidePop 9s ease-in-out infinite;
        }
        @keyframes implGuidePop {
          0%,  26% { opacity: 0; transform: translateY(8px) scale(0.97); }
          33%, 78% { opacity: 1; transform: translateY(0) scale(1); }
          84%, 100%{ opacity: 0; transform: translateY(-4px) scale(0.97); }
        }

        .demo-ig-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 7px 10px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.02);
        }
        .demo-ig-title {
          font-family: 'Karla', sans-serif;
          font-size: 0.62rem; font-weight: 700;
          color: rgba(255,255,255,0.88);
          letter-spacing: 0.01em;
        }
        .demo-ig-tab {
          font-family: 'Karla', sans-serif;
          font-size: 0.48rem; font-weight: 700;
          letter-spacing: 0.08em;
          padding: 2px 6px;
          border-radius: 4px;
          background: rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.7);
          text-transform: uppercase;
        }

        .demo-ig-body {
          padding: 8px 10px 4px;
          display: flex; flex-direction: column; gap: 7px;
        }
        .demo-ig-desc {
          font-size: 0.55rem;
          color: rgba(255,255,255,0.42);
          line-height: 1.5;
        }
        .demo-ig-desc strong {
          color: rgba(255,255,255,0.78);
          font-weight: 600;
        }

        .demo-ig-file {
          display: flex; align-items: center; gap: 6px;
          padding: 4px 7px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 5px;
        }
        .demo-ig-file-path {
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: 0.52rem; font-weight: 600;
          color: rgba(255,255,255,0.7);
          letter-spacing: -0.01em;
        }
        .demo-ig-file-tag {
          font-family: 'Karla', sans-serif;
          font-size: 0.45rem; font-weight: 700;
          padding: 1px 5px;
          border-radius: 3px;
          background: rgba(110,176,255,0.1);
          border: 1px solid rgba(110,176,255,0.22);
          color: #6eb0ff;
          letter-spacing: 0.03em;
        }

        .demo-ig-diff {
          display: flex; flex-direction: column;
          border-radius: 5px;
          overflow: hidden;
          font-family: 'JetBrains Mono', ui-monospace, monospace;
        }
        .demo-ig-diff-row {
          padding: 3px 7px;
          display: flex; align-items: center; gap: 5px;
          font-size: 0.5rem;
          line-height: 1.3;
          letter-spacing: -0.01em;
        }
        .demo-ig-diff-before {
          background: rgba(255, 90, 90, 0.06);
          color: rgba(255, 145, 145, 0.7);
          border-left: 2px solid rgba(255, 90, 90, 0.35);
        }
        .demo-ig-diff-after {
          background: rgba(90, 200, 130, 0.06);
          color: rgba(140, 220, 160, 0.78);
          border-left: 2px solid rgba(90, 200, 130, 0.4);
        }
        .demo-ig-diff-sign {
          font-weight: 700;
          opacity: 0.85;
        }

        .demo-ig-actions {
          display: flex; gap: 5px;
          padding: 8px 10px 9px;
        }
        .demo-ig-mark-done {
          flex: 1;
          height: 24px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; gap: 4px;
          font-family: 'Karla', sans-serif;
          font-size: 0.58rem; font-weight: 700;
          background: #ffffff; color: #0a0a0a;
          border: none;
          animation: markDoneClick 9s ease-in-out infinite;
        }
        @keyframes markDoneClick {
          0%,  48% { transform: scale(1); background: #ffffff; color: #0a0a0a; }
          50%, 52% { transform: scale(0.92); background: rgba(255,255,255,0.85); color: #0a0a0a; }
          53%, 75% { transform: scale(1); background: rgba(120, 220, 150, 0.95); color: #0a0a0a; }
          80%, 100% { transform: scale(1); background: #ffffff; color: #0a0a0a; }
        }
        .demo-ig-dismiss {
          height: 24px; padding: 0 9px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Karla', sans-serif;
          font-size: 0.58rem; font-weight: 600;
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

                  {/* Implementation Guide */}
                  <div className="demo-impl-guide">
                    <div className="demo-ig-header">
                      <span className="demo-ig-title">Implementation Guide</span>
                      <span className="demo-ig-tab">Code</span>
                    </div>

                    <div className="demo-ig-body">
                      <p className="demo-ig-desc">
                        CTA contrast too low — costing <strong>~18% of checkout taps</strong>. Increase weight & size.
                      </p>

                      <div className="demo-ig-file">
                        <span className="demo-ig-file-path">assets/theme.css</span>
                        <span className="demo-ig-file-tag">modify</span>
                      </div>

                      <div className="demo-ig-diff">
                        <div className="demo-ig-diff-row demo-ig-diff-before">
                          <span className="demo-ig-diff-sign">−</span>
                          <span>background: #aaa;</span>
                        </div>
                        <div className="demo-ig-diff-row demo-ig-diff-after">
                          <span className="demo-ig-diff-sign">+</span>
                          <span>background: #111;</span>
                        </div>
                        <div className="demo-ig-diff-row demo-ig-diff-after">
                          <span className="demo-ig-diff-sign">+</span>
                          <span>padding: 12px 24px;</span>
                        </div>
                      </div>
                    </div>

                    <div className="demo-ig-actions">
                      <div className="demo-ig-mark-done">
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6L9 17l-5-5"/>
                        </svg>
                        Mark as done
                      </div>
                      <div className="demo-ig-dismiss">Dismiss</div>
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
                <em>DynoWeb finds it, fixes it, proves it.</em>
              </h2>

              <div className="ais-rule" />

              <p className="ais-body">
                Regular analytics show you <strong>what happened</strong>. DynoWeb <strong>finds the leak, deploys the fix, and shows the money</strong> — each fix measured before&rarr;after. It watches every tap, scroll, and rage-click, then ships the highest-ROI fixes and scores them by real impact.
              </p>
              <p className="ais-body">
                No dashboards to configure. No analysts to hire. Approve a change and the agent ships it, launch a nudge live, or hand your dev the exact diff — Impact keeps a running tally of every dollar earned and saved.
              </p>
            </div>

            {/* ── Bullets + Stats col ── */}
            <div style={{ display: "flex", flexDirection: "column" }}>
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

              <div className="ais-rule" style={{ marginTop: "1.5rem" }} />

              <div className="ais-stats" style={{ marginTop: "1.5rem" }}>
                {[
                  { v: "It Ships the Fix", l: "The agent applies Shopify changes, nudges deploy live, SEO fixes go one-click — or take the diff to your dev." },
                  { v: "You Approve First", l: "Nothing touches your store until you say go. One-click revert." },
                  { v: "Measured, Not Guessed", l: "Impact scores every fix before→after and tallies dollars earned and saved." },
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

          </div>
        </div>
      </section>
    </>
  );
}
