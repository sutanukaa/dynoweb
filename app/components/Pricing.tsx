"use client";
import { useState, type CSSProperties } from "react";

// Custom-plan slider — fixed stops only
const CUSTOM_STOPS = [
  { sessions: 100_000,   price: 79  },
  { sessions: 250_000,   price: 139 },
  { sessions: 500_000,   price: 239 },
  { sessions: 1_000_000, price: 439 },
];
const DEFAULT_STOP_INDEX = 0; // 100K sessions (entry)

function formatSessions(sessions: number): string {
  return sessions.toLocaleString("en-US");
}

type Plan = {
  name: string;
  price: string;
  period: string;
  priceSubtitle?: string;
  trial?: string;
  featuresHeader?: string;
  features: string[];
  notIncluded?: string[];
  addon?: { label: string; price: string };
  cta: { label: string; href: string };
  highlighted?: boolean;
  custom?: boolean;
};

const plans: Plan[] = [
  {
    name: "Free",
    price: "$0",
    period: "/ mo",
    features: [
      "Up to 1,500 sessions / month",
      "Click + scroll heatmaps",
      "30-day replay retention",
      "AI assistant access (500 actions / day)",
      "2 SmartNudges",
      "1 CRO Report / mo (summary only)",
    ],
    notIncluded: [
      "Nudge A/B testing",
    ],
    cta: { label: "Install free", href: "https://apps.shopify.com/dynoweb" },
  },
  {
    name: "Growth",
    price: "$14",
    period: "/ mo",
    trial: "7-day free trial",
    featuresHeader: "All features in Free Plan and:",
    features: [
      "Up to 7,500 sessions / month",
      "Click + scroll heatmaps",
      "90-day replay retention",
      "5 SmartNudges (+ A/B testing)",
      "4 CRO Reports / mo (full)",
      "Email support",
    ],
    notIncluded: [
      "Rage-click heatmaps",
    ],
    addon: { label: "AI Assistant", price: "+$5/mo" },
    cta: { label: "Start 7-day free trial", href: "https://apps.shopify.com/dynoweb" },
  },
  {
    name: "Pro",
    price: "$29",
    period: "/ mo",
    trial: "7-day free trial",
    featuresHeader: "All features in Growth Plan and:",
    features: [
      "Up to 35,000 sessions / month",
      "Rage-click heatmaps",
      "180-day replay retention",
      "15 SmartNudges",
      "AI assistant access (1,500 actions / day)",
      "16 CRO Reports / mo",
      "Priority email support",
    ],
    notIncluded: [
      "Event-type filter (all heatmap modes)",
    ],
    addon: { label: "AI Assistant", price: "+$10/mo" },
    cta: { label: "Start 7-day free trial", href: "https://apps.shopify.com/dynoweb" },
    highlighted: true,
  },
  {
    name: "Custom",
    price: "$79",
    period: "/ mo",
    priceSubtitle: "Up to 100,000 sessions",
    trial: "7-day free trial",
    custom: true,
    features: [
      "Sessions sized to your traffic (slider)",
      "All heatmap modes + event-type filter",
      "365-day replay retention",
      "Unlimited SmartNudges",
      "$40 AI Agent credit included",
      "AI assistant access (5,000 actions / day)",
      "Unlimited CRO Reports",
    ],
    cta: { label: "Start 7-day free trial", href: "/contact-us" },
  },
];

function parsePrice(s: string): number {
  const m = s.match(/\d+/);
  return m ? parseInt(m[0], 10) : 0;
}

export default function PricingSection() {
  const [, setHovered] = useState<number | null>(null);
  const [stopIndex, setStopIndex] = useState<number>(DEFAULT_STOP_INDEX);
  const [addedAddons, setAddedAddons] = useState<Record<string, boolean>>({});
  const currentStop = CUSTOM_STOPS[stopIndex];
  const sessions = currentStop.sessions;
  const customPrice = currentStop.price;
  const sliderFillPct = (stopIndex / (CUSTOM_STOPS.length - 1)) * 100;

  const isAddonAdded = (planName: string) => !!addedAddons[planName];
  const toggleAddon = (planName: string) =>
    setAddedAddons((prev) => ({ ...prev, [planName]: !prev[planName] }));

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Karla:wght@400;500;600;700&display=swap');

        @keyframes pricingGlow {
          0%,100% { opacity:.18; transform:scale(1); }
          50%      { opacity:.32; transform:scale(1.06); }
        }
        @keyframes priceFadeUp {
          from { opacity:0; transform:translateY(18px); }
          to   { opacity:1; transform:translateY(0); }
        }

        .pricing { font-family:'Karla',sans-serif; }

        .pricing .sec-heading {
          font-family:'Montserrat',sans-serif;
          font-size: clamp(1.75rem, 3vw, 3.2rem);
          letter-spacing:-.02em; line-height:1.15;
          color:#e8eaf0;
        }

        .pricing .sub-text {
          color:rgba(255,255,255,0.35); line-height:1.7;
          font-size:clamp(.9rem, 1.1vw, 1.6rem);
          max-width:36rem;
          animation:priceFadeUp .5s ease .2s forwards; opacity:0;
        }

        .pricing-card {
          position: relative;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: clamp(1.5rem, 2vw, 2rem) clamp(1.25rem, 1.6vw, 1.6rem);
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
          transition: border-color 0.3s ease, background 0.3s ease, transform 0.3s ease;
          animation: priceFadeUp .6s ease forwards;
          opacity: 0;
        }
        .pricing-card:nth-child(1) { animation-delay: .12s; }
        .pricing-card:nth-child(2) { animation-delay: .2s; }
        .pricing-card:nth-child(3) { animation-delay: .28s; }
        .pricing-card:nth-child(4) { animation-delay: .36s; }

        .pricing-card:hover {
          border-color: rgba(110,176,255,0.2);
          background: rgba(255,255,255,0.04);
          transform: translateY(-4px);
        }

        .pricing-card.card-highlighted {
          border-color: rgba(110,176,255,0.35);
          background: rgba(110,176,255,0.05);
          box-shadow: 0 0 40px rgba(110,176,255,0.08);
        }
        .pricing-card.card-highlighted:hover {
          border-color: rgba(110,176,255,0.5);
          background: rgba(110,176,255,0.07);
        }

        .pricing-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #6eb0ff, #3a7adc);
          color: #fff;
          font-size: .68rem;
          font-weight: 700;
          letter-spacing: .1em;
          text-transform: uppercase;
          padding: 5px 14px;
          border-radius: 999px;
          white-space: nowrap;
          box-shadow: 0 4px 12px rgba(58, 122, 220, 0.3);
        }

        .pricing-plan-name {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(1.1rem, 1.4vw, 1.4rem);
          font-weight: 700;
          color: #e8eaf0;
          text-align: center;
        }

        .pricing-price {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
        }
        .pricing-price-row {
          display: inline-flex;
          align-items: baseline;
          gap: 4px;
        }
        .pricing-price .amount {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(2rem, 2.8vw, 2.6rem);
          font-weight: 800;
          color: #e8eaf0;
          letter-spacing: -.02em;
          line-height: 1;
        }
        .pricing-price .period {
          font-size: clamp(.78rem, .9vw, 1rem);
          color: rgba(255,255,255,0.35);
        }
        .pricing-price-subtitle {
          font-size: .82rem;
          color: rgba(255,255,255,0.5);
          margin-top: 2px;
        }

        .pricing-trial {
          display: inline-flex;
          align-items: center;
          align-self: center;
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.22);
          color: #5dde94;
          padding: 4px 12px;
          border-radius: 999px;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.01em;
        }

        .pricing-footnote {
          max-width: 640px;
          margin: 1.75rem auto 0;
          text-align: center;
          font-size: 0.78rem;
          line-height: 1.6;
          color: rgba(255,255,255,0.45);
        }

        .pricing-divider {
          width: 100%;
          height: 1px;
          background: rgba(255,255,255,0.06);
        }

        .pricing-features-header {
          font-size: 0.82rem;
          color: rgba(255,255,255,0.6);
          font-weight: 500;
          letter-spacing: 0.005em;
          margin: 0 0 0.35rem;
        }
        .pricing-features {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .pricing-feature {
          display: flex;
          align-items: flex-start;
          gap: 0.55rem;
          font-size: clamp(.78rem, .9vw, .92rem);
          color: rgba(255,255,255,0.62);
          line-height: 1.4;
        }
        .pricing-check {
          flex-shrink: 0;
          width: 16px;
          height: 16px;
          margin-top: 2px;
        }

        .not-included { margin-top: .35rem; }
        .not-included .label {
          font-size: .68rem;
          color: rgba(255,255,255,0.32);
          text-transform: uppercase;
          letter-spacing: .1em;
          font-weight: 700;
          margin-bottom: .5rem;
        }
        .not-included-item {
          display: flex;
          gap: .55rem;
          align-items: flex-start;
          margin-top: .45rem;
          color: rgba(255,255,255,0.28);
          font-size: .82rem;
          line-height: 1.4;
        }
        .not-included-x {
          flex-shrink: 0;
          width: 16px;
          height: 16px;
          margin-top: 2px;
          color: rgba(255,255,255,0.32);
        }

        /* Custom plan slider — draggable */
        .custom-slider-wrap {
          padding: 0.25rem 0;
        }
        .custom-slider-input {
          width: 100%;
          margin: 4px 0 0;
          height: 4px;
          background: transparent;
          cursor: pointer;
          -webkit-appearance: none;
          appearance: none;
          outline: none;
        }
        .custom-slider-input::-webkit-slider-runnable-track {
          height: 4px;
          background: linear-gradient(
            to right,
            #6eb0ff 0%,
            #6eb0ff var(--slider-fill, 0%),
            rgba(255,255,255,0.08) var(--slider-fill, 0%),
            rgba(255,255,255,0.08) 100%
          );
          border-radius: 2px;
        }
        .custom-slider-input::-moz-range-track {
          height: 4px;
          background: rgba(255,255,255,0.08);
          border-radius: 2px;
        }
        .custom-slider-input::-moz-range-progress {
          height: 4px;
          background: #6eb0ff;
          border-radius: 2px;
        }
        .custom-slider-input::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #ffffff;
          border: 2px solid #6eb0ff;
          box-shadow: 0 0 0 4px rgba(110,176,255,0.18);
          cursor: grab;
          margin-top: -5px;
          transition: box-shadow 0.15s ease, transform 0.15s ease;
        }
        .custom-slider-input::-moz-range-thumb {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #ffffff;
          border: 2px solid #6eb0ff;
          box-shadow: 0 0 0 4px rgba(110,176,255,0.18);
          cursor: grab;
          transition: box-shadow 0.15s ease, transform 0.15s ease;
        }
        .custom-slider-input:hover::-webkit-slider-thumb {
          box-shadow: 0 0 0 6px rgba(110,176,255,0.22);
          transform: scale(1.08);
        }
        .custom-slider-input:hover::-moz-range-thumb {
          box-shadow: 0 0 0 6px rgba(110,176,255,0.22);
          transform: scale(1.08);
        }
        .custom-slider-input:active::-webkit-slider-thumb {
          cursor: grabbing;
          box-shadow: 0 0 0 7px rgba(110,176,255,0.28);
        }
        .custom-slider-input:active::-moz-range-thumb {
          cursor: grabbing;
          box-shadow: 0 0 0 7px rgba(110,176,255,0.28);
        }
        .custom-slider-input:focus-visible::-webkit-slider-thumb {
          box-shadow: 0 0 0 4px rgba(110,176,255,0.4);
        }
        .custom-slider-input:focus-visible::-moz-range-thumb {
          box-shadow: 0 0 0 4px rgba(110,176,255,0.4);
        }
        .custom-slider-labels {
          display: flex;
          justify-content: space-between;
          font-size: 0.68rem;
          color: rgba(255,255,255,0.35);
          margin-top: 8px;
          letter-spacing: 0.04em;
        }
        .custom-callout {
          font-size: 0.78rem;
          color: rgba(110,176,255,0.85);
          text-align: center;
          line-height: 1.5;
          margin-top: 0.25rem;
        }

        /* AI Assistant addon row */
        .pricing-addon {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 10px 12px;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          font-size: 0.82rem;
          transition: background 0.18s ease, border-color 0.18s ease;
        }
        .pricing-addon.is-added {
          background: rgba(110,176,255,0.06);
          border-color: rgba(110,176,255,0.22);
        }
        .pricing-addon-left {
          display: flex;
          flex-direction: column;
          gap: 1px;
          flex: 1;
          min-width: 0;
        }
        .pricing-addon-label {
          color: rgba(255,255,255,0.78);
          font-weight: 600;
          font-size: 0.85rem;
        }
        .pricing-addon-price {
          color: rgba(255,255,255,0.42);
          font-size: 0.72rem;
        }
        .pricing-addon-subtitle {
          color: rgba(255,255,255,0.36);
          font-size: 0.66rem;
          margin-top: 2px;
          line-height: 1.4;
        }
        .pricing-addon-toggle {
          flex-shrink: 0;
          padding: 5px 12px;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 7px;
          color: rgba(255,255,255,0.78);
          font-size: 0.72rem;
          font-weight: 700;
          font-family: 'Karla', sans-serif;
          cursor: pointer;
          letter-spacing: 0.02em;
          transition: background 0.15s, border-color 0.15s, color 0.15s, transform 0.15s;
        }
        .pricing-addon-toggle:hover {
          background: rgba(255,255,255,0.05);
          border-color: rgba(255,255,255,0.32);
          color: #ffffff;
        }
        .pricing-addon-toggle.is-added {
          background: #0a0a0a;
          border-color: #0a0a0a;
          color: #ffffff;
          padding: 5px 14px;
        }
        .pricing-addon-toggle.is-added:hover {
          background: #1a1a1a;
          border-color: #1a1a1a;
        }

        /* AI Assistant — DynoAgent feature row (appears when addon is added) */
        .pricing-feature.is-ai {
          color: #4dd9c4;
          font-weight: 600;
        }
        .pricing-feature.is-ai svg {
          color: #4dd9c4;
          width: 16px;
          height: 16px;
          margin-top: 1px;
          flex-shrink: 0;
          filter: drop-shadow(0 0 5px rgba(77,217,196,0.55));
        }
        .pricing-addon-btn {
          padding: 4px 12px;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.16);
          border-radius: 6px;
          color: rgba(255,255,255,0.75);
          font-size: 0.72rem;
          font-weight: 600;
          font-family: 'Karla', sans-serif;
          cursor: pointer;
          letter-spacing: 0.02em;
          transition: background 0.15s, border-color 0.15s, color 0.15s;
        }
        .pricing-addon-btn:hover {
          background: rgba(255,255,255,0.04);
          border-color: rgba(255,255,255,0.28);
          color: #ffffff;
        }

        /* CTA button */
        .pricing-cta {
          display: block;
          width: 100%;
          margin-top: auto;
          padding: 0.7rem 1rem;
          background: #ffffff;
          color: #0a0a0a;
          border: none;
          border-radius: 10px;
          font-family: 'Karla', sans-serif;
          font-size: 0.88rem;
          font-weight: 700;
          text-align: center;
          text-decoration: none;
          cursor: pointer;
          letter-spacing: 0.005em;
          transition: opacity 0.15s, transform 0.15s, box-shadow 0.15s;
          box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        }
        .pricing-cta:hover {
          opacity: 0.92;
          transform: translateY(-1px);
          box-shadow: 0 4px 18px rgba(0,0,0,0.28);
        }
        .pricing-cta.cta-outline {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.2);
          color: rgba(255,255,255,0.88);
          box-shadow: none;
        }
        .pricing-cta.cta-outline:hover {
          background: rgba(255,255,255,0.05);
          border-color: rgba(255,255,255,0.4);
          color: #ffffff;
        }

      `}</style>

      <section
        className="pricing relative w-full overflow-hidden"
        style={{ background: "#0a0a0a" }}
      >
        {/* Faint grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            zIndex: 0,
            backgroundImage: `linear-gradient(rgba(255,255,255,.022) 1px,transparent 1px),
                              linear-gradient(90deg,rgba(255,255,255,.022) 1px,transparent 1px)`,
            backgroundSize: "120px 120px",
          }}
        />

        {/* Ambient glows */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            transform: "translateX(-50%)",
            width: 900,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse,rgba(59,111,190,.08) 0%,transparent 68%)",
            filter: "blur(60px)",
            pointerEvents: "none",
            zIndex: 0,
            animation: "pricingGlow 7s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "50%",
            bottom: "10%",
            transform: "translateX(-50%)",
            width: 600,
            height: 300,
            background:
              "radial-gradient(ellipse,rgba(59,111,190,.05) 0%,transparent 70%)",
            filter: "blur(40px)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <div
          className="relative z-10 mx-auto w-full flex flex-col items-center"
          style={{ padding: "max(5rem, 8vh) max(48px, 5vw)" }}
        >
          {/* Header */}
          <div className="flex flex-col gap-3 items-center text-center mb-12">
            <span
              style={{
                fontSize: "clamp(.7rem, .85vw, 1.2rem)",
                fontWeight: 600,
                letterSpacing: ".12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.25)",
              }}
            >
              Pricing
            </span>
            <div
              style={{
                width: 40,
                height: 2,
                borderRadius: 2,
                background: "linear-gradient(90deg,#6eb0ff,transparent)",
              }}
            />
            <h2
              className="sec-heading"
              style={{
                animation: "priceFadeUp .5s ease .1s forwards",
                opacity: 0,
              }}
            >
              Simple, transparent pricing
            </h2>
            <p className="sub-text" style={{ textAlign: "center" }}>
              Start free. Scale when you need more sessions, AI credits, and CRO firepower.
            </p>
          </div>

          {/* Cards */}
          <div
            className="grid w-full gap-5"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              maxWidth: 1280,
            }}
          >
            {plans.map((plan, i) => (
              <div
                key={plan.name}
                className={`pricing-card${plan.highlighted ? " card-highlighted" : ""}`}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {plan.highlighted && (
                  <div className="pricing-badge">Most Popular</div>
                )}

                <div className="pricing-plan-name">{plan.name}</div>

                <div className="pricing-price">
                  <div className="pricing-price-row">
                    <span className="amount">{plan.custom ? `$${customPrice}` : plan.price}</span>
                    <span className="period">{plan.period}</span>
                  </div>
                  {plan.custom ? (
                    <div className="pricing-price-subtitle">
                      Up to <strong>{formatSessions(sessions)}</strong> sessions
                    </div>
                  ) : plan.priceSubtitle ? (
                    <div className="pricing-price-subtitle">{plan.priceSubtitle}</div>
                  ) : null}
                  {plan.trial && <span className="pricing-trial">{plan.trial}</span>}
                </div>

                <div className="pricing-divider" />

                {/* Custom plan: draggable slider + callout */}
                {plan.custom && (
                  <div className="custom-slider-wrap">
                    <input
                      type="range"
                      min={0}
                      max={CUSTOM_STOPS.length - 1}
                      step={1}
                      value={stopIndex}
                      onChange={(e) => setStopIndex(Number(e.target.value))}
                      className="custom-slider-input"
                      style={{ "--slider-fill": `${sliderFillPct}%` } as CSSProperties}
                      aria-label="Adjust monthly sessions"
                      aria-valuetext={`${formatSessions(sessions)} sessions, $${customPrice} per month`}
                    />
                    <div className="custom-slider-labels">
                      <span>100K</span>
                      <span>1M</span>
                    </div>
                    <p className="custom-callout">
                      $40 AI Agent credit bundled · all features included
                    </p>
                  </div>
                )}

                {plan.featuresHeader && (
                  <p className="pricing-features-header">{plan.featuresHeader}</p>
                )}
                <div className="pricing-features">
                  {plan.features.map((f, fi) => (
                    <div key={fi} className="pricing-feature">
                      <svg
                        className="pricing-check"
                        viewBox="0 0 20 20"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 10.5l3.5 3.5L15 7"
                          stroke={plan.highlighted ? "#6eb0ff" : "#4a9a6e"}
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>{f}</span>
                    </div>
                  ))}
                  {plan.addon && isAddonAdded(plan.name) && (
                    <div className="pricing-feature is-ai">
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 2 L13.6 9 L20.5 10.5 L13.6 12 L12 19 L10.4 12 L3.5 10.5 L10.4 9 Z" />
                        <path d="M18.5 15 L19 17 L20.8 17.5 L19 18 L18.5 20 L18 18 L16.2 17.5 L18 17 Z" opacity="0.75" />
                      </svg>
                      <span>AI Assistant - DynoAgent</span>
                    </div>
                  )}
                </div>

                {plan.notIncluded && (
                  <div className="not-included">
                    <div className="label">Not included</div>
                    {plan.notIncluded.map((n, ni) => (
                      <div key={ni} className="not-included-item">
                        <svg
                          className="not-included-x"
                          viewBox="0 0 20 20"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M6 6l8 8M14 6l-8 8"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                        <div>{n}</div>
                      </div>
                    ))}
                  </div>
                )}

                {plan.addon && (
                  <div className={`pricing-addon${isAddonAdded(plan.name) ? " is-added" : ""}`}>
                    <div className="pricing-addon-left">
                      <span className="pricing-addon-label">{plan.addon.label}</span>
                      <span className="pricing-addon-price">{plan.addon.price}</span>
                      {isAddonAdded(plan.name) && (
                        <span className="pricing-addon-subtitle">
                          Prorated swap — see breakdown on confirm
                        </span>
                      )}
                    </div>
                    <button
                      type="button"
                      className={`pricing-addon-toggle${isAddonAdded(plan.name) ? " is-added" : ""}`}
                      onClick={() => toggleAddon(plan.name)}
                      aria-pressed={isAddonAdded(plan.name)}
                    >
                      {isAddonAdded(plan.name) ? "Added" : "Add"}
                    </button>
                  </div>
                )}

                {(() => {
                  const ctaHref = plan.custom
                    ? `/contact-us?plan=custom&sessions=${sessions}&price=${customPrice}`
                    : plan.cta.href;
                  const isExternal = ctaHref.startsWith("http");
                  const addonOn = !!plan.addon && isAddonAdded(plan.name);
                  const ctaLabel =
                    addonOn && !plan.custom
                      ? `Subscribe — $${parsePrice(plan.price) + parsePrice(plan.addon!.price)}/mo`
                      : plan.cta.label;
                  return (
                    <a
                      href={ctaHref}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="pricing-cta"
                    >
                      {ctaLabel}
                    </a>
                  );
                })()}

              </div>
            ))}
          </div>

          {/* Trial-terms disclosure — must stay adjacent to the trial claims
              above. The free trial is granted ONCE per store (enforced from
              Shopify's subscription history); without this qualifier the
              "7-day free trial" pills could be read as repeating on every
              plan change. */}
          <p className="pricing-footnote">
            7-day free trial applies once per store, on your first paid
            subscription. Switching plans, adding or removing the AI
            Assistant, or re-subscribing doesn&apos;t restart the trial — any
            unused trial days carry over instead. Plan changes are prorated
            automatically by Shopify billing.
          </p>
        </div>
      </section>
    </>
  );
}
