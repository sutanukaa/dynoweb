"use client";
import { useState } from "react";

const plans = [
  {
    name: "Free",
    price: 0,
    trial: null,
    features: [
      "10,000 sessions / month",
      "5 AI suggestions / day",
      "$1.00 AI budget / month",
      "Basic heatmaps",
      "7-day data retention",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    price: 29,
    trial: "14-day free trial",
    features: [
      "100,000 sessions / month",
      "50 AI suggestions / day",
      "$15.00 AI budget / month",
      "Advanced heatmaps & scroll maps",
      "30-day data retention",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: 99,
    trial: "14-day free trial",
    features: [
      "1,000,000 sessions / month",
      "Unlimited AI suggestions",
      "$75.00 AI budget / month",
      "Full heatmaps, scroll & rage-click maps",
      "90-day data retention",
      "Dedicated support",
      "Custom integrations",
    ],
    highlighted: false,
  },
];

export default function PricingSection() {
  const [hovered, setHovered] = useState<number | null>(null);

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
          font-size: clamp(1.75rem, 3.2vw, 3.5rem);
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
          padding: clamp(1.5rem, 2.5vw, 2.5rem) clamp(1.25rem, 2vw, 2rem);
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          transition: border-color 0.3s ease, background 0.3s ease, transform 0.3s ease;
          animation: priceFadeUp .6s ease forwards;
          opacity: 0;
        }
        .pricing-card:nth-child(1) { animation-delay: .15s; }
        .pricing-card:nth-child(2) { animation-delay: .25s; }
        .pricing-card:nth-child(3) { animation-delay: .35s; }

        .pricing-card:hover {
          border-color: rgba(110,176,255,0.2);
          background: rgba(255,255,255,0.04);
          transform: translateY(-4px);
        }

        .pricing-card.card-highlighted {
          border-color: rgba(110,176,255,0.25);
          background: rgba(110,176,255,0.04);
        }
        .pricing-card.card-highlighted:hover {
          border-color: rgba(110,176,255,0.35);
          background: rgba(110,176,255,0.06);
        }

        .pricing-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #6eb0ff, #3a7adc);
          color: #fff;
          font-size: .7rem;
          font-weight: 700;
          letter-spacing: .08em;
          text-transform: uppercase;
          padding: 4px 16px;
          border-radius: 999px;
          white-space: nowrap;
        }

        .pricing-plan-name {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(1.1rem, 1.5vw, 1.5rem);
          font-weight: 700;
          color: #e8eaf0;
          text-align: center;
        }

        .pricing-price {
          text-align: center;
        }
        .pricing-price .amount {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(2rem, 3vw, 3rem);
          font-weight: 800;
          color: #e8eaf0;
          letter-spacing: -.02em;
        }
        .pricing-price .period {
          font-size: clamp(.85rem, 1vw, 1.1rem);
          color: rgba(255,255,255,0.35);
          margin-left: 4px;
        }
        .pricing-trial {
          text-align: center;
          font-size: clamp(.72rem, .85vw, .9rem);
          color: rgba(255,255,255,0.35);
          margin-top: -0.75rem;
        }

        .pricing-features {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          flex: 1;
        }
        .pricing-feature {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: clamp(.8rem, .95vw, 1rem);
          color: rgba(255,255,255,0.55);
          line-height: 1.4;
        }
        .pricing-check {
          flex-shrink: 0;
          width: 18px;
          height: 18px;
          margin-top: 1px;
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

        {/* Decorative SVGs */}
        <svg
          style={{
            position: "absolute",
            top: "6%",
            left: "5%",
            pointerEvents: "none",
            zIndex: 0,
          }}
          width="90"
          height="90"
          viewBox="0 0 90 90"
          fill="none"
          aria-hidden="true"
        >
          <circle
            cx="45"
            cy="45"
            r="38"
            stroke="rgba(110,176,255,.06)"
            strokeWidth="1"
            strokeDasharray="6 5"
          />
          <circle
            cx="45"
            cy="45"
            r="18"
            stroke="rgba(110,176,255,.04)"
            strokeWidth="1"
          />
        </svg>
        <svg
          style={{
            position: "absolute",
            bottom: "12%",
            right: "4%",
            pointerEvents: "none",
            zIndex: 0,
          }}
          width="70"
          height="70"
          viewBox="0 0 70 70"
          fill="none"
          aria-hidden="true"
        >
          <rect
            x="10"
            y="10"
            width="50"
            height="50"
            rx="6"
            stroke="rgba(110,176,255,.05)"
            strokeWidth="1"
            transform="rotate(-12 35 35)"
          />
        </svg>
        {[
          { t: "20%", l: "92%" },
          { t: "70%", l: "6%" },
          { t: "45%", l: "97%" },
        ].map((p, i) => (
          <svg
            key={i}
            style={{
              position: "absolute",
              top: p.t,
              left: p.l,
              pointerEvents: "none",
              zIndex: 0,
            }}
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
          >
            <line
              x1="7"
              y1="1"
              x2="7"
              y2="13"
              stroke="rgba(110,176,255,.08)"
              strokeWidth="1"
            />
            <line
              x1="1"
              y1="7"
              x2="13"
              y2="7"
              stroke="rgba(110,176,255,.08)"
              strokeWidth="1"
            />
          </svg>
        ))}
        {[
          { t: "25%", l: "3%" },
          { t: "65%", l: "95%" },
          { t: "85%", l: "50%" },
          { t: "12%", l: "55%" },
        ].map((p, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: p.t,
              left: p.l,
              width: 4,
              height: 4,
              borderRadius: "50%",
              background: "rgba(110,176,255,.07)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
        ))}

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
              Start free. Upgrade when you need more power.
            </p>
          </div>

          {/* Cards */}
          <div
            className="grid w-full gap-6"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              maxWidth: 1080,
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
                  <span className="amount">${plan.price}</span>
                  <span className="period">/ month</span>
                </div>

                {plan.trial && (
                  <div className="pricing-trial">{plan.trial}</div>
                )}

                <div
                  style={{
                    width: "100%",
                    height: 1,
                    background: "rgba(255,255,255,0.06)",
                  }}
                />

                <div className="pricing-features">
                  {plan.features.map((f, fi) => (
                    <div key={fi} className="pricing-feature">
                      <svg
                        className="pricing-check"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M5 10.5l3.5 3.5L15 7"
                          stroke={plan.highlighted ? "#6eb0ff" : "#4a9a6e"}
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
