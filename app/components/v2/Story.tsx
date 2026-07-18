import { Check, Pencil, TrendingUp } from "lucide-react";

import HighlightMarker from "./HighlightMarker";
import InstallFreeButton from "./InstallFreeButton";
import LeakScan from "./LeakScan";
import LoopViz from "./LoopViz";
import SpinBorder from "./SpinBorder";
import WaveBg from "./WaveBg";

// Concentric rings that expand outward and fade — centered on a corner so the
// ripple visibly emanates from it.
function RippleSet({ className }: { className: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute h-[28rem] w-[28rem] ${className}`}
    >
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className="absolute inset-0 rounded-full border-2 border-[rgba(46,107,255,0.35)]"
          style={{ animation: `dw-ripple 4s ease-out ${i}s infinite` }}
        />
      ))}
    </div>
  );
}

function CornerRipples() {
  return (
    <>
      <RippleSet className="right-0 top-0 translate-x-1/2 -translate-y-1/2" />
      <RippleSet className="bottom-0 left-0 -translate-x-1/2 translate-y-1/2" />
    </>
  );
}


// The story arc, beats 2–7 of dynoweb-landing-page.md. Copy is lifted from that
// doc verbatim — it already obeys the vocabulary bans (no CRO / nudge / attribution).

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[var(--ink-muted)]">
      {children}
    </p>
  );
}

// The invisible leaks — 4 frosted-glass cards, each a grid panel with a 3D glass
// asset sitting on top of the grid, plus a title + one line of subtext.
const LEAKS = [
  { img: "/asset-1.png", label: "Sales stay flat", sub: "Traffic climbs, orders don't.", msg: "Traffic keeps climbing — the orders never follow.", wide: true, size: "h-24" },
  { img: "/asset-3.png", label: "Rage clicks", sub: "Tapping something that won't work.", msg: "Shoppers tapping something that isn't a link — over and over.", wide: false, size: "h-24" },
  { img: "/asset-4.png", label: "Carts abandoned", sub: "Added, then gone at checkout.", msg: "Added to cart, then gone at the checkout step.", wide: false, size: "h-40" },
  { img: "/asset-2.png", label: "Discount won't apply", sub: "The code fails in the cart.", msg: "The code silently fails in the cart. Night-and-day once it's fixed.", wide: true, size: "h-28" },
];

// A bordered inner panel with a faint grid; the asset floats centered on top.
// Height is passed explicitly (className) — never relies on a flex/grid height chain.
function GridPanel({ img, size, className }: { img: string; size: string; className: string }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(46,107,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(46,107,255,0.12)_1px,transparent_1px)] bg-[size:1.6rem_1.6rem] [mask-image:radial-gradient(ellipse_at_center,#000_60%,transparent_100%)]" />
      <img
        src={img}
        alt=""
        className={`pointer-events-none absolute left-1/2 top-1/2 max-w-[85%] -translate-x-1/2 -translate-y-1/2 w-auto object-contain drop-shadow-[0_14px_22px_rgba(10,22,51,0.22)] transition-transform duration-300 group-hover:scale-105 ${size}`}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

const CARD =
  "group relative overflow-hidden rounded-2xl border border-white/60 bg-white/40 shadow-[0_12px_32px_-14px_rgba(10,22,51,0.28),inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-2xl backdrop-saturate-150";

// Blue message panel that slides up on hover.
function Reveal({ msg }: { msg: string }) {
  return (
    <div className="absolute inset-0 flex translate-y-full items-center bg-[var(--blue-600)] p-5 text-white transition-transform duration-500 ease-out group-hover:translate-y-0">
      <p className="text-sm leading-snug">{msg}</p>
    </div>
  );
}

function SymptomBento() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {LEAKS.map(({ img, label, sub, msg, wide, size }) =>
        wide ? (
          // Wide — text left, grid panel + asset right
          <div key={label} className={`col-span-2 h-36 ${CARD}`}>
            <div className="absolute inset-0 flex items-center gap-5 p-4 transition-transform duration-500 ease-out group-hover:-translate-y-full">
              <div className="flex-1">
                <h3 className="font-display text-base font-semibold leading-tight text-[var(--ink)]">
                  {label}
                </h3>
                <p className="mt-1.5 text-sm text-[var(--ink-muted)]">{sub}</p>
              </div>
              <GridPanel img={img} size={size} className="h-full w-2/5 shrink-0" />
            </div>
            <Reveal msg={msg} />
          </div>
        ) : (
          // Square — grid panel + asset on top, text below
          <div key={label} className={`h-56 ${CARD}`}>
            <div className="absolute inset-0 flex flex-col p-4 transition-transform duration-500 ease-out group-hover:-translate-y-full">
              <GridPanel img={img} size={size} className="min-h-0 flex-1 w-full" />
              <h3 className="mt-3 font-display text-base font-semibold leading-tight text-[var(--ink)]">
                {label}
              </h3>
              <p className="mt-1 text-xs text-[var(--ink-muted)]">{sub}</p>
            </div>
            <Reveal msg={msg} />
          </div>
        ),
      )}
    </div>
  );
}

export default function Story() {
  return (
    // Wrapper is the containing block for the sticky panels — they stack within
    // it, then release once the story is scrolled past.
    <div className="relative">
      {/* 2 · The feeling */}
      <section
        className="font-inter flex min-h-screen w-full flex-col justify-center overflow-hidden"
        style={{
          background:
            "radial-gradient(58% 55% at 84% 12%, #eef3ff 0%, transparent 60%), radial-gradient(48% 52% at 4% 94%, rgba(46,107,255,0.08) 0%, transparent 62%), #fff",
        }}
      >
        <WaveBg />
        <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-[clamp(1.25rem,5vw,4rem)] py-24 md:grid-cols-2 md:gap-16">
          {/* Text */}
          <div className="text-center md:text-left">
            <Eyebrow>The feeling</Eyebrow>
            <h2 className="font-display mt-5 text-[clamp(1.875rem,3vw,2.5rem)] font-semibold leading-[1.12] tracking-[-0.025em] text-[var(--ink)]">
              You know this one.
            </h2>
            <p className="mx-auto mt-6 max-w-[46ch] text-lg leading-relaxed text-[var(--ink-muted)] md:mx-0">
              Traffic&rsquo;s coming. Ads are running. The sales just aren&rsquo;t there.
              You&rsquo;ve swapped the theme, rewritten the descriptions, dropped the price &mdash;
              nothing moves. You start wondering if it&rsquo;s you.
            </p>
            <figure className="mx-auto mt-8 max-w-[46ch] text-left md:mx-0">
              <blockquote className="font-display text-xl italic leading-snug text-[var(--ink)]">
                <span className="relative inline-block">
                  {/* Blue highlighter marker behind the quote */}
                  <svg
                    className="dw-highlight-svg absolute left-[1%] top-0 z-0 h-full w-[98%]"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    fill="none"
                    aria-hidden="true"
                  >
                    <g>
                      <path d="M2 52 C20 48,42 46,62 47 C78 48,90 50,98 49" stroke="#6eb0ff" strokeWidth="44" strokeLinecap="butt" opacity="0.4" fill="none" />
                      <path d="M2 51 C22 47,46 45,66 46 C80 47,91 49,98 48" stroke="#9dd8ff" strokeWidth="30" strokeLinecap="butt" opacity="0.5" fill="none" />
                      <path d="M4 34 C24 31,48 30,68 31 C82 32,92 33,98 32" stroke="#3a7adc" strokeWidth="2.5" strokeLinecap="butt" opacity="0.55" fill="none" />
                    </g>
                  </svg>
                  <span className="relative z-[1]">
                    &ldquo;It was so frustrating I nearly wanted to quit.&rdquo;
                  </span>
                </span>
              </blockquote>
              <figcaption className="mt-3 text-sm text-[var(--ink-muted)]">
                &mdash; a real store owner
              </figcaption>
            </figure>
            <p className="mx-auto mt-8 max-w-[46ch] text-lg leading-relaxed text-[var(--ink-muted)] md:mx-0">
              It&rsquo;s almost never your whole store. It&rsquo;s{" "}
              <strong className="font-semibold text-[var(--ink)]">one small thing</strong> &mdash; a
              discount that stops applying in the cart, a button nobody can tap, a checkout step that
              scares people off. Invisible to you. Obvious the moment someone watches a shopper hit
              it and leave.
            </p>
          </div>

          {/* Visual — the invisible leaks as a hover-reveal bento */}
          <SymptomBento />
        </div>
      </section>

      {/* 3 · The tools you already tried — the loop no competitor closes */}
      <section
        className="font-inter flex min-h-screen w-full flex-col justify-center overflow-hidden"
        style={{ background: "linear-gradient(160deg,#4257d6 0%,#2f43c4 52%,#1e2a8f 100%)" }}
      >
        {/* Faint grid texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.16)_1px,transparent_1px)] bg-[size:3.25rem_3.25rem]"
          style={{
            WebkitMaskImage: "radial-gradient(ellipse 70% 70% at center, #000 55%, transparent 92%)",
            maskImage: "radial-gradient(ellipse 70% 70% at center, #000 55%, transparent 92%)",
          }}
        />
        {/* Soft depth glows */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -left-[8%] top-[8%] h-72 w-72 rounded-full bg-[#4b5ee0] opacity-40 blur-[80px]" />
          <div className="absolute -right-[6%] bottom-[6%] h-80 w-80 rounded-full bg-[#7c88ee] opacity-30 blur-[90px]" />
          <div className="absolute left-1/2 top-[38%] h-96 w-[36rem] -translate-x-1/2 rounded-full bg-[#5b6ef5] opacity-20 blur-[110px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[900px] px-[clamp(1.25rem,5vw,4rem)] py-16 text-center">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-white/60">
            The tools you already tried
          </p>
          <h2 className="font-display mx-auto mt-4 max-w-[18ch] text-[clamp(1.75rem,2.8vw,2.35rem)] font-semibold leading-[1.12] tracking-[-0.025em] text-white">
            Every other tool quits halfway.
          </h2>
          <p className="mx-auto mt-4 max-w-[54ch] text-base leading-relaxed text-white/70 sm:text-lg">
            Free tools stop at <span className="font-semibold text-white">see</span>. Paid popups stop
            at <span className="font-semibold text-white">fix</span>. DynoWeb is the only one that
            closes the loop &mdash; before you pay a cent.
          </p>

          <LoopViz />
        </div>
      </section>

      {/* 4 · See the leak — free */}
      <section id="leak" className="font-inter flex min-h-screen w-full flex-col justify-center overflow-hidden bg-white">
        <WaveBg />
        <div className="relative z-10 mx-auto max-w-[820px] px-[clamp(1.25rem,5vw,4rem)] py-24 text-center">
          <Eyebrow>See the leak &mdash; free</Eyebrow>
          <h2 className="font-display mx-auto mt-5 max-w-[20ch] text-[clamp(1.875rem,3vw,2.5rem)] font-semibold leading-[1.12] tracking-[-0.025em] text-[var(--ink)]">
            One plain answer, with a number.
          </h2>

          <div className="mt-10">
            <LeakScan />
          </div>
          <p className="mx-auto mt-4 text-sm text-[var(--ink-muted)]">
            Example of what your leak report shows &mdash; run on your own store.
          </p>

          <p className="mx-auto mt-10 max-w-[52ch] text-lg leading-relaxed text-[var(--ink-muted)]">
            No jargon. No 40-metric dashboard. No six-week agency report. Just the biggest reason
            shoppers leave, in dollars, on your store.
          </p>

          <div className="mt-8 flex justify-center">
            <SpinBorder>
              <InstallFreeButton
                label="Run my free leak report"
                className="!flex !h-12 !w-auto items-center justify-center px-9 !border-transparent !bg-white/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-xl backdrop-saturate-150"
              />
            </SpinBorder>
          </div>
        </div>
      </section>

      {/* 5 · We fix it — you don't lift a finger */}
      <section
        className="font-inter sticky top-0 flex min-h-screen w-full flex-col justify-center overflow-hidden rounded-t-[2.5rem] shadow-[0_-18px_50px_-28px_rgba(10,22,51,0.35)]"
        style={{
          background:
            "radial-gradient(56% 60% at 78% 38%, #e8efff 0%, transparent 60%), radial-gradient(46% 52% at 8% 92%, rgba(46,107,255,0.08) 0%, transparent 62%), var(--paper)",
        }}
      >
        <CornerRipples />
        <div className="relative z-10 mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-[clamp(1.25rem,5vw,4rem)] py-24 md:grid-cols-[1fr_1.45fr] md:gap-14">
          <div className="text-center md:text-left">
            <Eyebrow>We fix it &mdash; you don&rsquo;t lift a finger</Eyebrow>
            <h2 className="font-display mt-5 text-[clamp(1.875rem,3vw,2.5rem)] font-semibold leading-[1.12] tracking-[-0.025em] text-[var(--ink)]">
              Every other tool stops at &ldquo;good luck.&rdquo;{" "}
              <HighlightMarker>We keep going.</HighlightMarker>
            </h2>
            <p className="mx-auto mt-6 max-w-[46ch] text-lg leading-relaxed text-[var(--ink-muted)] md:mx-0">
              Checkout scaring people off? We deploy a popup that catches them the second
              they&rsquo;re about to leave &mdash; not a dumb timer that annoys people who just
              arrived. Not showing up on Google? We fix it for you.
            </p>
            <p className="mx-auto mt-5 max-w-[46ch] font-semibold text-[var(--ink)] md:mx-0">
              No developer. No code. No dashboard to learn.
            </p>
          </div>
          <div className="relative">
            <div className="dw-shot">
              <img
                src="/SmartNudge.png"
                alt="DynoWeb deploying a popup that catches shoppers the moment they're about to leave"
                width={1907}
                height={879}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Floating "live" badge */}
            <span className="dw-float absolute -left-3 top-8 z-10 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/50 px-3.5 py-2 text-sm font-semibold text-[var(--ink)] shadow-[0_12px_30px_-10px_rgba(10,22,51,0.3),inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-xl backdrop-saturate-150 sm:-left-5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10b981] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10b981]" />
              </span>
              Live &middot; catching exits
            </span>

            {/* Floating cart-saver popup mockup */}
            <div className="dw-float-2 dw-glass-frost absolute -bottom-6 -right-2 z-10 w-56 rounded-2xl p-4 text-left sm:-right-6 sm:w-64">
              <p className="font-display text-base font-semibold text-[var(--ink)]">
                Leaving already?
              </p>
              <p className="mt-1 text-sm text-[var(--ink-muted)]">
                Here&rsquo;s 10% off &mdash; just for you.
              </p>
              <span className="mt-3 inline-flex items-center justify-center rounded-full bg-[var(--blue-600)] px-4 py-2 text-xs font-semibold text-white">
                Claim 10% off
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6 · Watch it make you money */}
      <section
        className="font-inter sticky top-0 flex min-h-screen w-full flex-col justify-center overflow-hidden rounded-t-[2.5rem] shadow-[0_-18px_50px_-28px_rgba(10,22,51,0.35)]"
        style={{
          background:
            "radial-gradient(56% 60% at 22% 38%, #e8efff 0%, transparent 60%), radial-gradient(46% 52% at 92% 92%, rgba(46,107,255,0.08) 0%, transparent 62%), #fff",
        }}
      >
        <CornerRipples />
        <div className="relative z-10 mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-[clamp(1.25rem,5vw,4rem)] py-24 md:grid-cols-[1.45fr_1fr] md:gap-14">
          {/* Screenshot — left on desktop */}
          <div className="relative order-2 md:order-1">
            <div className="dw-shot">
              <img
                src="/RevenueAttribution.png"
                alt="The recovered sale shown in dollars, net of refunds, next to the fix that earned it"
                width={1907}
                height={879}
                loading="lazy"
                decoding="async"
              />
            </div>

            <span className="dw-float absolute -right-3 top-8 z-10 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/50 px-3.5 py-2 text-sm font-semibold text-[var(--ink)] shadow-[0_12px_30px_-10px_rgba(10,22,51,0.3),inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-xl backdrop-saturate-150 sm:-right-5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10b981] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10b981]" />
              </span>
              Live &middot; real dollars
            </span>

            <div className="dw-float-2 dw-glass-frost absolute -bottom-6 -left-2 z-10 w-52 rounded-2xl p-4 text-left sm:-left-6">
              <div className="flex items-center gap-1.5 text-[#10805c]">
                <TrendingUp className="h-4 w-4" strokeWidth={2.5} />
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.12em]">Recovered</span>
              </div>
              <p className="mt-1 font-display text-2xl font-semibold text-[var(--ink)]">+$1,400</p>
              <p className="text-xs text-[var(--ink-muted)]">last month &middot; net of refunds</p>
            </div>
          </div>

          {/* Text — right on desktop */}
          <div className="order-1 text-center md:order-2 md:text-left">
            <Eyebrow>Watch it make you money</Eyebrow>
            <h2 className="font-display mt-5 text-[clamp(1.875rem,3vw,2.5rem)] font-semibold leading-[1.12] tracking-[-0.025em] text-[var(--ink)]">
              See the sales it brought back &mdash;{" "}
              <HighlightMarker>in real dollars.</HighlightMarker>
            </h2>
            <figure className="mx-auto mt-6 max-w-[42ch] md:mx-0">
              <blockquote className="font-display text-xl italic leading-snug text-[var(--ink)] sm:text-2xl">
                &ldquo;This cart saver recovered $1,400 last month.&rdquo;
              </blockquote>
            </figure>
            <p className="mx-auto mt-6 max-w-[46ch] text-lg leading-relaxed text-[var(--ink-muted)] md:mx-0">
              Which button, which image, which page actually makes you money &mdash; and which is
              dead weight. Not a made-up &ldquo;20% lift.&rdquo; The recovered sale, right there in
              the replay, dollars next to it.
            </p>
          </div>
        </div>
      </section>

      {/* 7 · You stay in control */}
      <section
        className="font-inter sticky top-0 flex min-h-screen w-full flex-col justify-center overflow-hidden rounded-t-[2.5rem] shadow-[0_-18px_50px_-28px_rgba(10,22,51,0.35)]"
        style={{
          background:
            "radial-gradient(56% 60% at 78% 38%, #e8efff 0%, transparent 60%), radial-gradient(46% 52% at 8% 92%, rgba(46,107,255,0.08) 0%, transparent 62%), var(--paper)",
        }}
      >
        <CornerRipples />
        <div className="relative z-10 mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-[clamp(1.25rem,5vw,4rem)] py-24 md:grid-cols-[1fr_1.45fr] md:gap-14">
          {/* Text — left */}
          <div className="text-center md:text-left">
            <Eyebrow>You stay in control</Eyebrow>
            <h2 className="font-display mt-5 text-[clamp(1.875rem,3vw,2.5rem)] font-semibold leading-[1.12] tracking-[-0.025em] text-[var(--ink)]">
              It drafts. <HighlightMarker>You decide.</HighlightMarker> Every time.
            </h2>
            <p className="mx-auto mt-6 max-w-[46ch] text-lg leading-relaxed text-[var(--ink-muted)] md:mx-0">
              The AI does the busywork and drafts the fix &mdash; then shows you exactly what
              it&rsquo;ll change.
            </p>
            <p className="mx-auto mt-5 max-w-[46ch] font-semibold text-[var(--ink)] md:mx-0">
              Nothing goes live until you say yes.
            </p>
          </div>

          {/* Screenshot — right */}
          <div className="relative">
            <div className="dw-shot">
              <img
                src="/DynoAgent.png"
                alt="DynoWeb's AI showing exactly what it will change, before anything goes live"
                width={1907}
                height={879}
                loading="lazy"
                decoding="async"
              />
            </div>

            <span className="dw-float absolute -left-3 top-8 z-10 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/50 px-3.5 py-2 text-sm font-semibold text-[var(--ink)] shadow-[0_12px_30px_-10px_rgba(10,22,51,0.3),inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-xl backdrop-saturate-150 sm:-left-5">
              <Pencil className="h-3.5 w-3.5 text-[var(--blue-600)]" strokeWidth={2.5} />
              Draft ready
            </span>

            <div className="dw-float-2 dw-glass-frost absolute -bottom-6 -right-2 z-10 w-60 rounded-2xl p-4 text-left sm:-right-6">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[var(--ink-muted)]">
                Approve change
              </p>
              <p className="mt-1 font-display text-sm font-semibold leading-snug text-[var(--ink)]">
                Add a free-shipping bar to the cart
              </p>
              <div className="mt-3 flex gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-[var(--blue-600)] px-3.5 py-1.5 text-xs font-semibold text-white">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} /> Approve
                </span>
                <span className="rounded-full border border-[var(--line)] bg-white/70 px-3.5 py-1.5 text-xs font-semibold text-[var(--ink)]">
                  Edit
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
