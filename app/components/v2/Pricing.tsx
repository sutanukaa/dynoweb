// Pricing: four white cards floating on a blue band, plus a comparison table.
//
// Every figure here mirrors app/components/Pricing.tsx (the /pricing page's own
// section) — session caps, retention windows, nudge counts, add-on prices. If a
// tier changes, change it in BOTH or the two pages start contradicting each
// other. The paywall meters sessions, never events; don't relabel that.

import Link from "next/link";

import HighlightMarker from "./HighlightMarker";

const INSTALL = "https://apps.shopify.com/dynoweb";

const PLANS = [
  {
    name: "Free",
    blurb: "Enough to see the leak on a real store, with nothing to cancel.",
    price: "$0",
    note: "1,500 sessions / mo",
    features: [
      "Click + scroll heatmaps",
      "30-day replay retention",
      "AI assistant, 500 actions / day",
      "2 SmartNudges",
      "1 CRO report / mo (summary)",
    ],
    disabled: ["Nudge A/B testing"],
    cta: { label: "Install free", href: INSTALL },
  },
  {
    name: "Growth",
    blurb: "For stores with enough traffic that the leak is costing real money.",
    price: "$14",
    note: "7,500 sessions / mo",
    features: [
      "90-day replay retention",
      "5 SmartNudges, with A/B testing",
      "4 full CRO reports / mo",
      "Email support",
      "AI assistant add-on, +$5 / mo",
    ],
    disabled: ["Rage-click heatmaps"],
    cta: { label: "Start 7-day free trial", href: INSTALL },
  },
  {
    name: "Pro",
    blurb: "Every detection mode on, and the reports to act on them weekly.",
    price: "$29",
    note: "35,000 sessions / mo",
    features: [
      "Rage-click heatmaps",
      "180-day replay retention",
      "15 SmartNudges",
      "AI assistant, 1,500 actions / day",
      "16 CRO reports / mo",
      "Priority email support",
    ],
    disabled: ["Event-type filter on all modes"],
    cta: { label: "Start 7-day free trial", href: INSTALL },
    highlighted: true,
  },
  {
    name: "Custom",
    blurb: "Sized to your traffic, up to a million sessions a month.",
    price: "$79",
    pricePrefix: "from",
    note: "100,000+ sessions / mo",
    features: [
      "All heatmap modes + event-type filter",
      "365-day replay retention",
      "Unlimited SmartNudges",
      "$40 AI agent credit included",
      "AI assistant, 5,000 actions / day",
      "Unlimited CRO reports",
    ],
    disabled: [],
    cta: { label: "Talk to us", href: "/contact-us" },
  },
];

function Tick({ muted = false }: { muted?: boolean }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={`mt-[3px] h-3.5 w-3.5 shrink-0 ${muted ? "text-[var(--line)]" : "text-[var(--blue-600)]"}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 8.5 L6.5 12 L13 4.5" />
    </svg>
  );
}

export default function Pricing() {
  return (
    // pb clears the Footer's contact card, which is pulled up over the footer
    // with -mb-40 and would otherwise sit on top of the blue band.
    <section id="pricing" className="font-inter w-full overflow-hidden bg-white pb-32">
      <div className="mx-auto max-w-[1200px] px-[clamp(1.25rem,5vw,4rem)] pt-24">
        <h2 className="font-display max-w-[16ch] text-[clamp(1.875rem,3.4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-[var(--ink)]">
          Pricing that waits <HighlightMarker>until it&rsquo;s working.</HighlightMarker>
        </h2>
        <p className="mt-5 max-w-[52ch] text-lg leading-relaxed text-[var(--ink-muted)]">
          Start free and see the leak on your own store. You move up a tier when your traffic does —
          we meter sessions, never events, so the bill can&rsquo;t surprise you.
        </p>
      </div>

      {/* Cards sit half on the white, half on the blue band — the band starts
          below the top of the row rather than behind all of it. */}
      <div className="relative pb-24 pt-16">
        <div className="absolute inset-x-2 bottom-0 top-40 rounded-[2rem] bg-[linear-gradient(to_right,var(--blue-500),var(--blue-600)_55%,var(--blue-700))] ring-1 ring-inset ring-black/5 sm:bg-[linear-gradient(to_left,var(--blue-500),var(--blue-600)_55%,var(--blue-700))]" />

        <div className="relative mx-auto max-w-[1200px] px-[clamp(1.25rem,5vw,4rem)]">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`flex flex-col rounded-[var(--r-xl)] bg-white p-7 shadow-[var(--shadow-lg)] ring-1 ${
                  plan.highlighted ? "ring-2 ring-[var(--blue-600)]" : "ring-black/5"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--ink-muted)]">
                    {plan.name}
                  </h3>
                  {plan.highlighted && (
                    <span className="rounded-full bg-[var(--blue-100)] px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[var(--blue-700)]">
                      Most picked
                    </span>
                  )}
                </div>

                <p className="mt-2 min-h-[3.5rem] text-sm leading-relaxed text-[var(--ink-muted)]">
                  {plan.blurb}
                </p>

                <div className="mt-6 flex items-baseline gap-2">
                  {plan.pricePrefix && (
                    <span className="text-sm text-[var(--ink-muted)]">{plan.pricePrefix}</span>
                  )}
                  <span className="font-display text-5xl font-semibold tracking-[-0.03em] text-[var(--ink)]">
                    {plan.price}
                  </span>
                  <span className="text-sm text-[var(--ink-muted)]">/ mo</span>
                </div>
                <p className="mt-1 text-sm text-[var(--ink-muted)]">{plan.note}</p>

                <Link
                  href={plan.cta.href}
                  className={`mt-7 inline-flex h-11 items-center justify-center rounded-[var(--r-md)] px-4 text-[15px] font-semibold transition-colors ${
                    plan.highlighted
                      ? "bg-[var(--blue-600)] text-white hover:bg-[var(--blue-700)]"
                      : "bg-[var(--ink)] text-white hover:bg-[var(--navy-700)]"
                  }`}
                >
                  {plan.cta.label}
                </Link>

                <ul className="mt-7 space-y-2.5 border-t border-[var(--line)] pt-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm leading-relaxed text-[var(--ink)]">
                      <Tick />
                      {f}
                    </li>
                  ))}
                  {plan.disabled.map((f) => (
                    <li
                      key={f}
                      className="flex gap-2.5 text-sm leading-relaxed text-[var(--ink-muted)]/60"
                    >
                      <Tick muted />
                      <span className="sr-only">Not included:</span>
                      <span className="line-through decoration-[var(--line)]">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
