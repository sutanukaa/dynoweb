import { ArrowUpRight } from "lucide-react";

// Bento-grid testimonial block. Layout matches a reference design (big stat
// card + 3 supporting cards + a bottom proof bar) — but every number, quote,
// and store name here is real. No stock headshots (we don't have real
// customer photos — a fake face would be a worse fabrication than no photo),
// no invented star rating (we have 0 paying customers today; a "4.9 based on
// 1.5k reviews" line would be exactly the fabrication philosophy P8 forbids).
// Attribution is the real store + its real logo, same data ProofBand used —
// this component replaces ProofBand rather than duplicating it.

const CARDS = {
  punarvasu: {
    value: "52,370",
    label: "frustrated shoppers spotted leaving",
    quote:
      "We thought our volume meant the store was fine. DynoWeb showed us tens of thousands of rage clicks — and exactly which product pages were causing them.",
    store: "The Punarvasu",
    sub: "Ayurvedic wellness · India",
    logo: "/Punarvasu.png",
    href: "/use-cases#punarvasu",
  },
  sahasika: {
    value: "₹3.97L",
    label: "in sales tracked to real shoppers",
    quote: "Every fix measured against real revenue — not guesses.",
    store: "Sahasika",
    sub: "Men's ethnic wear · India",
    logo: "/Sahasika.png",
    href: "/use-cases#sahasika",
  },
  skyline: {
    quote: "33 sales-blocking errors caught live — silent checkout breakers, surfaced as shoppers hit them.",
    store: "Skyline Decor",
    sub: "Case study",
    logo: "/SkyLine.png",
    href: "/use-cases#skyline",
  },
  yetibeds: {
    quote: "One heatmap showed shoppers clicking the wrong thing — the button no one could tap, found.",
    store: "Yetibeds",
    sub: "Case study",
    logo: "/yetibeds-logo.png",
    href: "/use-cases#yetibeds",
  },
};

function Bracket({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-flex items-center px-3 py-1">
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 h-2.5 w-2.5 border-l-[1.5px] border-t-[1.5px] border-[var(--blue-600)]"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-0 right-0 h-2.5 w-2.5 border-b-[1.5px] border-r-[1.5px] border-[var(--blue-600)]"
      />
      <span className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[var(--ink-muted)]">
        {children}
      </span>
    </span>
  );
}

function QuoteMark({ dark = false }: { dark?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`font-display block text-3xl leading-none ${dark ? "text-[#7e97ce]" : "text-[var(--blue-600)]"}`}
    >
      &rdquo;
    </span>
  );
}

// Not a link — it renders inside the card's own <a>, and nested anchors are
// invalid HTML (causes a hydration mismatch). The whole card is the click target;
// this is just the visual attribution row, with the arrow as a decorative affordance.
function Attribution({
  logo,
  store,
  sub,
  dark = false,
}: {
  logo: string;
  store: string;
  sub: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`mt-6 flex items-center justify-between gap-3 border-t pt-4 ${
        dark ? "border-white/15" : "border-[var(--line)]"
      }`}
    >
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] border border-[var(--line)] bg-white p-1.5">
          <img src={logo} alt="" className="h-full w-full object-contain" loading="lazy" />
        </span>
        <span>
          <span className={`block text-sm font-semibold ${dark ? "text-white" : "text-[var(--ink)]"}`}>
            {store}
          </span>
          <span className={`block text-xs ${dark ? "text-white/55" : "text-[var(--ink-muted)]"}`}>{sub}</span>
        </span>
      </div>
      <ArrowUpRight
        className={`h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
          dark ? "text-white/40 group-hover:text-white" : "text-[var(--ink-muted)] group-hover:text-[var(--blue-600)]"
        }`}
        strokeWidth={2.2}
      />
    </div>
  );
}

export default function Testimonials() {
  const { punarvasu, sahasika, skyline, yetibeds } = CARDS;

  return (
    <section className="font-inter w-full bg-[var(--paper)]">
      <div className="mx-auto max-w-[1200px] px-[clamp(1.25rem,5vw,4rem)] py-24">
        {/* Header */}
        <div className="dw-reveal mx-auto max-w-[52ch] text-center">
          <Bracket>Testimonials</Bracket>
          <h2 className="font-display mt-4 text-[clamp(1.875rem,3.2vw,2.5rem)] font-semibold leading-[1.12] tracking-[-0.025em]">
            <span className="block text-[var(--ink)]">Real leaks. Real dollars.</span>
            <span className="block text-[var(--ink-muted)]">Read what actually happened.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[46ch] text-base leading-relaxed text-[var(--ink-muted)]">
            Four real Shopify stores. Every number below is what DynoWeb found or recovered —
            not a projection.
          </p>
        </div>

        {/* Bento grid */}
        <div className="dw-reveal mt-14 grid gap-5 md:grid-cols-[1fr_1.3fr]">
          {/* Big card — Punarvasu */}
          <a
            href={punarvasu.href}
            className="group flex flex-col rounded-2xl border border-[var(--line)] bg-white p-8 shadow-[var(--shadow-sm)] transition-colors hover:border-[var(--navy-300)]"
          >
            <span className="font-display text-5xl font-semibold tabular-nums tracking-[-0.03em] text-[var(--ink)]">
              {punarvasu.value}
            </span>
            <span className="mt-2 text-base font-medium text-[var(--ink-muted)]">{punarvasu.label}</span>
            <div className="mt-6">
              <QuoteMark />
              <p className="mt-2 text-lg leading-relaxed text-[var(--ink)]">&ldquo;{punarvasu.quote}&rdquo;</p>
            </div>
            <div className="mt-auto">
              <Attribution logo={punarvasu.logo} store={punarvasu.store} sub={punarvasu.sub} />
            </div>
          </a>

          {/* Right column */}
          <div className="grid gap-5">
            {/* Top card — Sahasika, inline stat */}
            <a
              href={sahasika.href}
              className="group flex flex-col rounded-2xl border border-[var(--line)] bg-white p-7 shadow-[var(--shadow-sm)] transition-colors hover:border-[var(--navy-300)]"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-display text-3xl font-semibold tabular-nums tracking-[-0.03em] text-[var(--ink)]">
                  {sahasika.value}
                </span>
                <span className="text-base font-medium text-[var(--ink-muted)]">{sahasika.label}</span>
              </div>
              <div className="mt-4">
                <QuoteMark />
                <p className="mt-1 text-base leading-relaxed text-[var(--ink)]">&ldquo;{sahasika.quote}&rdquo;</p>
              </div>
              <Attribution logo={sahasika.logo} store={sahasika.store} sub={sahasika.sub} />
            </a>

            {/* Bottom two — Skyline (light) + Yetibeds (dark) */}
            <div className="grid gap-5 sm:grid-cols-2">
              <a
                href={skyline.href}
                className="group flex flex-col rounded-2xl border border-[var(--line)] bg-white p-6 shadow-[var(--shadow-sm)] transition-colors hover:border-[var(--navy-300)]"
              >
                <QuoteMark />
                <p className="mt-1 flex-1 text-sm leading-relaxed text-[var(--ink)]">&ldquo;{skyline.quote}&rdquo;</p>
                <Attribution logo={skyline.logo} store={skyline.store} sub={skyline.sub} />
              </a>
              <a
                href={yetibeds.href}
                className="group flex flex-col rounded-2xl bg-[var(--navy-900)] p-6 shadow-[var(--shadow-sm)]"
              >
                <QuoteMark dark />
                <p className="mt-1 flex-1 text-sm leading-relaxed text-white/85">&ldquo;{yetibeds.quote}&rdquo;</p>
                <Attribution logo={yetibeds.logo} store={yetibeds.store} sub={yetibeds.sub} dark />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar — honest, not a fabricated rating (we have 0 paying
            customers today; a star-rating line here would be exactly the
            fabrication the product's own honesty pitch forbids). */}
        <div className="dw-reveal mt-8 flex flex-col items-center justify-between gap-4 border-t border-[var(--line)] pt-6 sm:flex-row">
          <p className="text-sm text-[var(--ink-muted)]">
            Running live across India and the US — every number above is real, on a real store.
          </p>
          <a
            href="/use-cases"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--blue-600)] hover:underline"
          >
            Read the case studies
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.2} />
          </a>
        </div>
      </div>
    </section>
  );
}
