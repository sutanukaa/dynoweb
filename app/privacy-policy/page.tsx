"use client";

import { useEffect, useRef, useState } from "react";
import PillNav from "../components/PillNav";
import Footer from "../components/Footer";

const sections = [
  {
    id: "who", number: "01", title: "Who this policy applies to",
    content: (<>
      <p>This Privacy Policy covers:</p>
      <ul>
        <li>Dynoweb's Shopify embedded app and dashboard</li>
        <li>Dynoweb's tracker running on merchant storefronts</li>
        <li>Dynoweb's marketing/promotional website</li>
      </ul>
      <p>For storefront tracking data, the merchant is generally the data controller and Dynoweb acts as a service provider/processor.</p>
    </>),
  },
  {
    id: "collect", number: "02", title: "What we collect",
    content: (<>
      <p className="pp-sub-label">Merchant / app data</p>
      <ul>
        <li>Shop domain and installation metadata</li>
        <li>App settings and preferences</li>
        <li>Subscription and billing status from Shopify Billing APIs</li>
      </ul>
      <p className="pp-sub-label">Storefront interaction data</p>
      <ul>
        <li>Clicks, rage clicks, dead clicks, error clicks</li>
        <li>Scroll depth and scroll behavior</li>
        <li>Element view and impression events</li>
        <li>Form interaction metadata (field-level timing and change flags)</li>
        <li>Page path, referrer, viewport/device info, timestamps</li>
        <li>Session ID generated in browser session storage</li>
      </ul>
      <p className="pp-sub-label">Location and technical metadata</p>
      <ul>
        <li>Country/region/city (derived from IP)</li>
        <li>Hashed IP in event records (not raw IP in analytics tables)</li>
      </ul>
      <p className="pp-sub-label">Conversion attribution data</p>
      <ul>
        <li>Shopify order ID, total, currency, and session attribution ID (when available)</li>
      </ul>
      <p className="pp-sub-label">Security and audit logs</p>
      <ul>
        <li>Operational logs for security, abuse prevention, troubleshooting, and compliance</li>
      </ul>
    </>),
  },
  {
    id: "not-collect", number: "03", title: "What we do not intend to collect",
    content: (<>
      <ul>
        <li>Payment card data</li>
        <li>Raw typed form input values for analytics</li>
        <li>Direct shopper identity fields as part of behavioral event analytics</li>
      </ul>
      <p>Dynoweb is built for behavioral insights, not identity profiling.</p>
    </>),
  },
  {
    id: "use", number: "04", title: "How we use data",
    content: (<>
      <p>We use data to:</p>
      <ul>
        <li>Generate heatmaps and behavior analytics</li>
        <li>Provide AI-driven UX suggestions</li>
        <li>Support preview/draft-theme optimization workflows</li>
        <li>Measure conversions and usage limits</li>
        <li>Keep the service secure, reliable, and performant</li>
        <li>Meet Shopify and legal compliance requirements</li>
      </ul>
    </>),
  },
  {
    id: "cookies", number: "05", title: "Cookies and browser storage",
    content: (<>
      <p>Dynoweb uses browser storage and similar technologies, including:</p>
      <ul>
        <li><code>sessionStorage</code> for session IDs used in attribution</li>
        <li><code>localStorage</code> for temporary retry queues when network delivery fails</li>
      </ul>
      <p>Merchants are responsible for implementing any required storefront consent mechanisms under applicable laws.</p>
    </>),
  },
  {
    id: "sharing", number: "06", title: "How data is shared",
    content: (<>
      <p>We may share data with:</p>
      <ul>
        <li>Shopify (to operate as a Shopify app)</li>
        <li>Trusted infrastructure and service providers (hosting, database, analytics/AI processing)</li>
        <li>Legal authorities or advisors when required</li>
        <li>Successors in a merger, acquisition, or asset sale</li>
      </ul>
      <p>We do not sell personal information for money.</p>
    </>),
  },
  {
    id: "retention", number: "07", title: "Retention",
    content: (<>
      <p>We keep data only as long as needed for product and legal purposes.</p>
      <ul>
        <li>Event retention follows product configuration (commonly up to 90 days by default, depending on plan/settings)</li>
        <li>Some technical records are kept for shorter operational windows</li>
        <li>Shopify redaction/compliance requests are handled through required webhook flows</li>
      </ul>
    </>),
  },
  {
    id: "security", number: "08", title: "Security",
    content: (<p>We apply reasonable technical and organizational safeguards, including secure transport, access controls, validation, and monitoring. No system can guarantee absolute security.</p>),
  },
  {
    id: "rights", number: "09", title: "Your rights",
    content: (<>
      <p>Depending on location, users may have rights to access, correct, delete, or restrict personal data processing.</p>
      <ul>
        <li>Merchants can contact us directly</li>
        <li>Storefront visitors should usually contact the merchant first</li>
        <li>We support Shopify privacy/compliance webhook workflows</li>
      </ul>
      <p>To submit a privacy request, contact us at <a href="mailto:info@dynoweb.app">info@dynoweb.app</a>.</p>
    </>),
  },
  // Children section removed
  {
    id: "updates", number: "11", title: "Policy updates",
    content: (<p>We may update this Privacy Policy from time to time. Changes will be posted here with an updated "Last updated" date.</p>),
  },
];

export default function PrivacyPolicy() {
  const [activeId, setActiveId] = useState("who");
  const [animKey, setAnimKey] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const activeIndex = sections.findIndex((s) => s.id === activeId);
  const activeSection = sections[activeIndex];

  const goTo = (id: string) => {
    if (id === activeId) return;
    setActiveId(id);
    setAnimKey((k) => k + 1);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animId: number;
    const pts: { x: number; y: number; vx: number; vy: number; a: number; r: number }[] = [];
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);
    for (let i = 0; i < 65; i++) {
      pts.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        a: Math.random() * 0.28 + 0.04,
        r: Math.random() * 1.1 + 0.3,
      });
    }
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.a})`; ctx.fill();
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Karla:wght@400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* pp-root is the full-page wrapper — no height/overflow here,
           PillNav lives outside it and stacks normally above */
        .pp-root {
          background: #0a0a0a;
          color: #fff;
          font-family: 'Karla', sans-serif;
          position: relative;
          display: flex;
          flex-direction: column;
          /* Fill whatever viewport space remains after PillNav */
          height: calc(100svh - var(--pillnav-height, 72px));
          overflow: hidden;
        }

        .pp-canvas { position: fixed; inset: 0; z-index: 0; pointer-events: none; }

        .pp-dot-grid {
          position: fixed; inset: 0; z-index: 0; pointer-events: none;
          background-image: radial-gradient(circle, rgba(255,255,255,0.065) 1px, transparent 1px);
          background-size: 28px 28px;
          mask-image: radial-gradient(ellipse 85% 85% at 50% 50%, black 20%, transparent 100%);
          -webkit-mask-image: radial-gradient(ellipse 85% 85% at 50% 50%, black 20%, transparent 100%);
        }
        .pp-glow-top {
          position: fixed; top: -80px; left: 0; right: 0; height: 420px; z-index: 0; pointer-events: none;
          background: radial-gradient(50% 100% at 50% 0%, rgba(255,255,255,0.065) 0%, transparent 100%);
        }
        .pp-glow-l {
          position: fixed; top: 10%; left: -15%; width: 50%; height: 60%; z-index: 0; pointer-events: none;
          background: radial-gradient(ellipse at 20% 40%, rgba(110,176,255,0.04) 0%, transparent 65%);
        }
        .pp-glow-r {
          position: fixed; bottom: 5%; right: -10%; width: 45%; height: 55%; z-index: 0; pointer-events: none;
          background: radial-gradient(ellipse at 80% 60%, rgba(110,176,255,0.03) 0%, transparent 65%);
        }
        .pp-vignette {
          position: fixed; inset: 0; z-index: 0; pointer-events: none;
          background: radial-gradient(ellipse 120% 100% at 50% 50%, transparent 35%, rgba(0,0,0,0.58) 100%);
        }
        .pp-border-l, .pp-border-r {
          position: fixed; top: 0; bottom: 0; width: 1px; z-index: 40; pointer-events: none;
          background: rgba(255,255,255,0.08);
          mask-image: linear-gradient(to bottom, transparent 0%, black 8%, black 80%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 8%, black 80%, transparent 100%);
        }
        .pp-border-l { left: 0; } .pp-border-r { right: 0; }

        /* 3-COL BODY — fills the remaining height of pp-root */
        .pp-body {
          position: relative; z-index: 1;
          flex: 1;
          overflow: hidden;
          display: grid;
          grid-template-columns: 240px 210px 1fr;
        }
        @media (max-width: 860px) {
          .pp-body { grid-template-columns: 1fr; }
          .pp-left { display: none; }
          .pp-mid { display: none; }
        }

        /* LEFT — static title */
        .pp-left {
          border-right: 1px solid rgba(255,255,255,0.06);
          padding: 2.5rem 1.75rem;
          display: flex; flex-direction: column; justify-content: space-between;
          overflow: hidden;
        }
        .pp-main-title {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(1.8rem, 2.6vw, 2.6rem);
          font-weight: 800; line-height: 1.06; letter-spacing: -0.03em;
          color: #fff; text-shadow: 0 0 50px rgba(255,255,255,0.1);
          margin-bottom: 0.85rem;
        }
        .pp-main-title span { color: rgba(255,255,255,0.2); }
        .pp-updated { font-size: 0.7rem; color: rgba(255,255,255,0.18); font-weight: 500; letter-spacing: 0.03em; }
        .pp-left-foot { font-size: 0.68rem; color: rgba(255,255,255,0.12); line-height: 1.75; }
        .pp-left-foot a { color: rgba(110,176,255,0.4); text-decoration: none; transition: color 0.15s; }
        .pp-left-foot a:hover { color: rgba(110,176,255,0.75); }

        /* MID — section list */
        .pp-mid {
          border-right: 1px solid rgba(255,255,255,0.06);
          padding: 1.75rem 0;
          display: flex; flex-direction: column; overflow-y: auto;
        }
        .pp-mid-label {
          font-size: 0.58rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.16); padding: 0 1.1rem 0.7rem;
        }
        .pp-mid-btn {
          display: flex; align-items: flex-start; gap: 9px;
          padding: 7px 1.1rem;
          border: none; border-left: 2px solid transparent;
          background: transparent; cursor: pointer; text-align: left; width: 100%;
          transition: background 0.12s, border-color 0.12s;
        }
        .pp-mid-btn:hover { background: rgba(255,255,255,0.03); }
        .pp-mid-btn.active {
          background: rgba(255,255,255,0.05);
          border-left-color: rgba(110,176,255,0.45);
        }
        .pp-mid-num {
          font-family: 'Montserrat', sans-serif; font-size: 0.56rem; font-weight: 700;
          letter-spacing: 0.06em; color: rgba(255,255,255,0.16); min-width: 18px; padding-top: 2px;
        }
        .pp-mid-btn.active .pp-mid-num { color: rgba(110,176,255,0.5); }
        .pp-mid-text {
          font-family: 'Karla', sans-serif; font-size: 0.76rem; font-weight: 500;
          color: rgba(255,255,255,0.28); line-height: 1.4;
        }
        .pp-mid-btn.active .pp-mid-text { color: rgba(255,255,255,0.78); }

        /* RIGHT — single section */
        .pp-right {
          overflow-y: auto;
          padding: 3rem max(2rem, 4vw) 4rem;
        }

        @keyframes sectionFadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .pp-section-view {
          animation: sectionFadeUp 0.28s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
          max-width: 620px;
        }

        .pp-eyebrow {
          display: flex; align-items: center; gap: 0.85rem; margin-bottom: 1.6rem;
        }
        .pp-eyebrow-num {
          font-family: 'Montserrat', sans-serif; font-size: 0.6rem; font-weight: 700;
          letter-spacing: 0.1em; color: rgba(110,176,255,0.5);
          border: 1px solid rgba(110,176,255,0.18);
          background: rgba(110,176,255,0.06);
          border-radius: 4px; padding: 2px 7px;
        }
        .pp-eyebrow-line { flex: 1; height: 1px; background: rgba(255,255,255,0.06); }

        .pp-section-h {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(1.25rem, 2.2vw, 1.7rem);
          font-weight: 800; line-height: 1.12; letter-spacing: -0.02em;
          color: #fff; margin-bottom: 1.5rem;
        }

        .pp-section-view p {
          font-size: 0.91rem; line-height: 1.88; color: rgba(255,255,255,0.42); margin-bottom: 0.8rem;
        }
        .pp-section-view p:last-child { margin-bottom: 0; }
        .pp-section-view ul { list-style: none; display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 0.9rem; padding: 0; }
        .pp-section-view ul li { display: flex; align-items: baseline; gap: 0.75rem; font-size: 0.9rem; line-height: 1.72; color: rgba(255,255,255,0.38); }
        .pp-section-view ul li::before {
          content: ''; display: inline-block; width: 4px; height: 4px; border-radius: 50%;
          background: rgba(255,255,255,0.13); flex-shrink: 0; margin-top: 0.55em;
        }
        .pp-section-view a { color: rgba(110,176,255,0.72); text-decoration: none; transition: color 0.15s; }
        .pp-section-view a:hover { color: rgba(110,176,255,1); }
        .pp-section-view code {
          font-family: 'Courier New', monospace; font-size: 0.79rem;
          background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.09);
          border-radius: 4px; padding: 1px 6px; color: rgba(255,255,255,0.52);
        }
        .pp-sub-label {
          font-family: 'Montserrat', sans-serif !important;
          font-size: 0.6rem !important; font-weight: 700 !important;
          letter-spacing: 0.09em !important; text-transform: uppercase !important;
          color: rgba(255,255,255,0.18) !important;
          margin-top: 1.2rem !important; margin-bottom: 0.4rem !important;
        }

        /* prev / next */
        .pp-page-nav {
          display: flex; align-items: center; justify-content: space-between;
          margin-top: 3rem; padding-top: 1.5rem;
          border-top: 1px solid rgba(255,255,255,0.06);
          max-width: 620px;
        }
        .pp-page-btn {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: 'Karla', sans-serif; font-size: 0.76rem; font-weight: 600;
          color: rgba(255,255,255,0.28); background: transparent; border: none;
          cursor: pointer; padding: 0; transition: color 0.15s;
        }
        .pp-page-btn:hover { color: rgba(255,255,255,0.65); }
        .pp-page-btn:disabled { opacity: 0.15; cursor: default; }
        .pp-page-progress {
          font-family: 'Montserrat', sans-serif; font-size: 0.6rem; font-weight: 700;
          letter-spacing: 0.07em; color: rgba(255,255,255,0.13);
        }
      `}</style>

      {/* PillNav renders at its natural height outside pp-root */}
      <PillNav />

      <div className="pp-root">
        <canvas ref={canvasRef} className="pp-canvas" aria-hidden="true" />
        <div className="pp-dot-grid" aria-hidden="true" />
        <div className="pp-glow-top" aria-hidden="true" />
        <div className="pp-glow-l" aria-hidden="true" />
        <div className="pp-glow-r" aria-hidden="true" />
        <div className="pp-vignette" aria-hidden="true" />
        <div className="pp-border-l" aria-hidden="true" />
        <div className="pp-border-r" aria-hidden="true" />

        <div className="pp-body" style={{ marginTop: "var(--pillnav-height, 72px)" }}>

          {/* LEFT — static */}
          <div className="pp-left">
            <div>
              <h1 className="pp-main-title">Privacy<br /><span>Policy</span></h1>
              <p className="pp-updated">Last updated: March 16, 2026</p>
            </div>
            <div className="pp-left-foot">
              Questions?<br />
              <a href="mailto:info@dynoweb.com">info@dynoweb.com</a>
            </div>
          </div>

          {/* MID — nav */}
          <nav className="pp-mid">
            {sections.map(({ id, number, title }) => (
              <button
                key={id}
                className={`pp-mid-btn${activeId === id ? " active" : ""}`}
                onClick={() => goTo(id)}
              >
                <span className="pp-mid-num">{number}</span>
                <span className="pp-mid-text">{title}</span>
              </button>
            ))}
          </nav>

          {/* RIGHT — active section */}
          <div className="pp-right">
            {activeSection ? (
              <div key={animKey} className="pp-section-view">
                <div className="pp-eyebrow">
                  <span className="pp-eyebrow-num">{activeSection.number}</span>
                  <span className="pp-eyebrow-line" />
                </div>
                <h2 className="pp-section-h">{activeSection.title}</h2>
                {activeSection.content}

                <div className="pp-page-nav">
                  <button
                    className="pp-page-btn"
                    onClick={() => goTo(sections[activeIndex - 1]?.id)}
                    disabled={activeIndex === 0}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    {activeIndex > 0 ? sections[activeIndex - 1]?.title : "Previous"}
                  </button>
                  <span className="pp-page-progress">
                    {activeSection.number} / {String(sections.length).padStart(2, "0")}
                  </span>
                  <button
                    className="pp-page-btn"
                    onClick={() => goTo(sections[activeIndex + 1]?.id)}
                    disabled={activeIndex === sections.length - 1}
                  >
                    {activeIndex < sections.length - 1 ? sections[activeIndex + 1]?.title : "Next"}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ) : (
              <div className="pp-section-view">
                <h2 className="pp-section-h">Section not found</h2>
                <p>This section does not exist.</p>
              </div>
            )}
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}