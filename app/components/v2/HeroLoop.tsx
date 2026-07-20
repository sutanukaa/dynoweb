// Hero: centred copy over a navy aurora, resolving into the loop rail below.
// Preview at /hero-loop — the live hero (Hero.tsx) is untouched.
//
// Every figure traces to public/docs/design.md §2 (Punarvasu) or the offer doc.
// "Minutes to deploy" comes from dynoweb-offer.md §4 ("live in minutes") — an
// earlier draft said "4 min", which was invented; don't reintroduce it.

import LoopRail from "./LoopRail";


// Chips live in the side gutters, never over the 680px copy column — percentage
// positions previously let them drift across the headline's descenders at some widths.
const CHIPS = [
  { text: "52,370 rage clicks", cls: "right-0 top-[74px] -rotate-[4deg]" },
  { text: "0 fabricated numbers", cls: "left-0 top-[150px] rotate-[3deg]" },
  { text: "5.9 KB tracker", cls: "right-[18px] top-[236px] -rotate-[2deg]" },
];

const TICKS = ["Free to see the leak", "You approve every change", "No surprise charges, ever"];

export default function HeroLoop() {
  return (
    <section className="font-inter relative isolate w-full overflow-hidden bg-white pb-10 pt-5">
      {/* ── Aurora: one navy bloom top-centre, fading to paper. Gives the glass nav
           and chips something real to refract (design.md §6 — glass over flat white
           is just a grey box). ── */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        {/* The dark field must stay opaque for the FULL height of the copy block —
            the white headline, lead and ticks all sit on it. Fading it too early
            puts white text on white; keep the fade below the trust ticks. */}
        <div
          className="absolute inset-x-0 top-0 h-[560px]"
          style={{
            background: [
              "radial-gradient(88% 100% at 50% 0%, rgba(10,22,51,0.97) 0%, rgba(16,33,74,0.94) 34%, rgba(24,54,132,0.82) 56%, rgba(30,85,224,0.42) 76%, rgba(46,107,255,0.14) 90%, transparent 100%)",
              "radial-gradient(42% 60% at 78% 30%, rgba(46,107,255,0.34), transparent 72%)",
              "radial-gradient(38% 52% at 22% 26%, rgba(20,42,92,0.34), transparent 74%)",
            ].join(","),
          }}
        />
        <div className="absolute inset-x-0 top-[478px] h-[210px] bg-[linear-gradient(to_bottom,transparent,#fff_72%)]" />
      </div>

      {/* Nav is NOT rendered here — the page's shared <Navbar /> owns it (dropdowns,
          mobile menu, scroll state). Duplicating it would ship two navs. Navbar
          switches to light-on-dark at scroll 0 to stay readable over this aurora. */}

      {/* ── Copy ── */}
      <div className="relative z-10 mx-auto max-w-[1180px] px-[clamp(1.25rem,5vw,3rem)]">
        {/* Floating glass chips — real numbers doing the decoration's job. */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
          {CHIPS.map((c) => (
            <span
              key={c.text}
              className={`dw-glass absolute rounded-[var(--r-md)] px-3.5 py-2 text-[12.5px] font-semibold text-[var(--ink)] ${c.cls}`}
            >
              {c.text}
            </span>
          ))}
        </div>

        {/* pt clears the fixed 64px Navbar */}
        <div className="relative mx-auto max-w-[680px] pb-2 pt-[104px] text-center">
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-white/70">
            For Shopify merchants
          </p>

          <h1 className="font-display mt-4 text-[clamp(1.95rem,4.8vw,3.2rem)] font-semibold leading-[1.07] tracking-[-0.035em] text-white">
            Traffic but no sales &mdash;
            <br />
            and you don&rsquo;t know why?
          </h1>

          <p className="mx-auto mt-5 max-w-[54ch] text-[1.02rem] leading-relaxed text-white/75">
            <strong className="font-semibold text-white">It&rsquo;s not you.</strong> One fixable
            thing is quietly costing you sales.
            <br className="hidden sm:block" /> We find it, fix it, and show you the sales it brought
            back.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://apps.shopify.com/dynoweb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-[var(--r-md)] bg-[var(--blue-600)] px-7 text-[15px] font-semibold text-white shadow-[var(--shadow-sm),inset_0_1px_0_rgba(255,255,255,0.18)] transition-colors hover:bg-[var(--blue-700)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
            >
              Show me the leak &mdash; free
            </a>
            <a
              href="/use-cases#punarvasu"
              className="dw-glass inline-flex h-12 items-center justify-center rounded-[var(--r-md)] px-6 text-[15px] font-semibold text-[var(--ink)] transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
            >
              See a demo store
            </a>
          </div>

          <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[12.5px] text-white/75">
            {TICKS.map((t) => (
              <li key={t} className="inline-flex items-center gap-1.5">
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-[#8fe3c0]" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 8.5 L6.5 12 L13 4.5" />
                </svg>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── The loop ── */}
      <div className="relative z-10">
        <LoopRail />
      </div>
    </section>
  );
}
