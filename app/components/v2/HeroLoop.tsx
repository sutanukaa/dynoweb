// Hero: centred copy over an interactive wave field, resolving into the loop rail below.
// Preview at /hero-loop — the live hero (Hero.tsx) is untouched.
//
// Every figure traces to public/docs/design.md §2 (Punarvasu) or the offer doc.
// "Minutes to deploy" comes from dynoweb-offer.md §4 ("live in minutes") — an
// earlier draft said "4 min", which was invented; don't reintroduce it.

"use client";

import {
  MousePointerClick,
  ShieldCheck,
  ShoppingCart,
  TrendingDown,
} from "lucide-react";
import Bracket from "./Bracket";

import { LetterCascade } from "@/components/ui/letter-cascade";
import AnimatedWave from "./AnimatedWave";
import LoopRail from "./LoopRail";

// Chips live in the side gutters, never over the 680px copy column — percentage
// positions previously let them drift across the headline's descenders at some widths.
//
// Gated at xl, not lg. With icons the widest chip is ~185px; at lg the gutter is
// only ~120px a side ((1024 - padding - 680) / 2), so they would sit on the
// headline — exactly the drift the note above warns about. xl gives ~250px.
//
// Labels are detection categories DynoWeb actually reports (rage clicks, dead
// clicks, cart abandonment, checkout drop-off — all used elsewhere on the site);
// the rage-click count is an existing Punarvasu figure. No new metric is
// invented here, and none should be added without a source.
// The gutter is ~200px a side (1180 container - 96 padding - 680 copy, halved),
// so horizontal scatter is bought with pill WIDTH: the narrow ones get big x
// offsets, the wide ones sit flush. Vertical gaps are deliberately unequal —
// with even gaps these read as two tidy columns no matter what the tilt does.
// Two a side. Six read as clutter around the headline.
// Diagonal: one in the top-left corner, one in the bottom-right, and the middle
// two pulled inward to sit alongside the copy — but never past ~200px from the
// container edge, which is where the 680px copy column starts.
const CHIPS = [
  {
    text: "0 fabricated numbers",
    Icon: ShieldCheck,
    cls: "left-0 top-[46px] -rotate-[3deg]",
  },
  {
    text: "cart abandonment",
    Icon: ShoppingCart,
    cls: "left-[50px] top-[330px] -rotate-[2.5deg]",
  },
  {
    text: "52,370 rage clicks",
    Icon: MousePointerClick,
    cls: "right-[70px] top-[200px] rotate-[3.5deg]",
  },
  // Stops at 392px: below that it runs into LoopRail's "real dollars, net of
  // refunds" marginalia, which is anchored to the rail just underneath.
  {
    text: "checkout drop-off",
    Icon: TrendingDown,
    cls: "right-0 top-[392px] rotate-[2deg]",
  },
];

const TICKS = [
  "Free to see the leak",
  "You approve every change",
  "No surprise charges, ever",
];

export default function HeroLoop() {
  // The cursor bloom went with the aurora; AnimatedWave tracks the pointer itself.
  return (
    <section className="font-inter relative isolate w-full overflow-hidden bg-white pb-10 pt-5">
      {/* ── Background: interactive 3D wave field on white. Replaces the navy
           aurora, so the headline, lead and ticks are all dark-on-light now.
           The wave owns pointer events for its ripple, hence -z-10 rather than
           pointer-events-none — the copy above sits at z-10 and stays clickable. ── */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <AnimatedWave
          colorFrom="#2e6bff"
          colorTo="#7fa8ff"
          amplitude={22}
          speed={0.55}
          opacity={0.5}
          particleSize={4}
          resolution={64}
          cameraY={150}
          cameraZ={260}
        />
        {/* Keeps the type legible over the busiest part of the mesh, and fades the
            field into the white page rather than cutting it off. */}
        <div className="absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(70%_80%_at_50%_20%,rgba(255,255,255,0.86)_0%,rgba(255,255,255,0.6)_45%,transparent_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[260px] bg-[linear-gradient(to_bottom,transparent,#fff_88%)]" />
      </div>

      {/* Nav is NOT rendered here — the page's shared <Navbar /> owns it (dropdowns,
          mobile menu, scroll state). Duplicating it would ship two navs. Navbar
          renders dark-on-light now that this hero is white. */}

      {/* ── Copy ── */}
      <div className="relative z-10 mx-auto max-w-[1180px] px-[clamp(1.25rem,5vw,3rem)]">
        {/* Floating glass chips — real numbers doing the decoration's job. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden xl:block"
        >
          {/* Two elements per pill, and it has to be two: dw-float animates
              `transform`, so a rotate utility on the same element gets clobbered
              the moment the animation starts. Outer holds position + tilt, inner
              owns the float. */}
          {CHIPS.map((c, i) => (
            <span key={c.text} className={`absolute ${c.cls}`}>
              <span
                // Blue tint rather than .dw-glass: on the white wave field the
                // neutral glass fill had nothing to pick up and read as grey.
                // Translucent + blur is kept so the mesh still shows through.
                className={`relative inline-flex items-center gap-1.5 overflow-hidden whitespace-nowrap rounded-[var(--r-md)] border border-[var(--blue-600)]/20 bg-[var(--blue-100)]/85 px-3 py-[7px] text-[12px] font-semibold text-[var(--blue-700)] shadow-[0_2px_6px_rgba(30,85,224,0.14),0_0_26px_-6px_rgba(46,107,255,0.5),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-md motion-reduce:animate-none ${
                  i % 2 ? "dw-float-2" : "dw-float"
                }`}
                // Stagger so the chips don't bob in unison.
                style={{ animationDelay: `${(i * 0.7).toFixed(1)}s` }}
              >
                <c.Icon
                  className="h-3.5 w-3.5 shrink-0 text-[var(--blue-600)]"
                  strokeWidth={2.2}
                />
                {c.text}
                <span
                  className="dw-shine animate-[dw-chip-shine_5s_ease-in-out_infinite] motion-reduce:animate-none"
                  style={{ animationDelay: `${(i * 1.3).toFixed(1)}s` }}
                />
              </span>
            </span>
          ))}
        </div>

        {/* pt clears the fixed 64px Navbar */}
        <div className="relative mx-auto max-w-[680px] pb-2 pt-[104px] text-center">
          <Bracket tone="blue">For Shopify merchants</Bracket>

          {/* Each line is its own LetterCascade because the component lays characters
              out in an inline-flex row, which cannot wrap — a single cascade across
              both lines would run off the 680px column instead of breaking. */}
          <h1 className="font-display mt-4 text-[clamp(1.95rem,4.8vw,3.2rem)] font-semibold leading-[1.07] tracking-[-0.035em] text-[var(--ink)]">
            <LetterCascade
              text="Traffic but no sales —"
              staggerDuration={0.05}
              className="block"
              letterClassName="text-[var(--ink)]"
            />
            <LetterCascade
              text="and you don’t know why?"
              staggerDuration={0.05}
              className="block"
              letterClassName="text-[var(--ink)]"
            />
          </h1>

          <p className="mx-auto mt-5 max-w-[54ch] text-[1.02rem] leading-relaxed text-[var(--ink-muted)]">
            <strong className="font-semibold text-[var(--ink)]">
              It&rsquo;s not you.
            </strong>{" "}
            One fixable thing is quietly costing you sales.
            <br className="hidden sm:block" /> We find it, fix it, and show you
            the sales it brought back.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://apps.shopify.com/dynoweb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-[var(--r-md)] bg-[var(--blue-600)] px-7 text-[15px] font-semibold text-white shadow-[var(--shadow-sm),inset_0_1px_0_rgba(255,255,255,0.18)] transition-colors hover:bg-[var(--blue-700)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-600)] focus-visible:ring-offset-2"
            >
              Show me the leak &mdash; free
            </a>
            <a
              href="/use-cases#punarvasu"
              className="dw-glass inline-flex h-12 items-center justify-center rounded-[var(--r-md)] px-6 text-[15px] font-semibold text-[var(--ink)] transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-600)] focus-visible:ring-offset-2"
            >
              See a demo store
            </a>
          </div>

          <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[12.5px] text-[var(--ink-muted)]">
            {TICKS.map((t) => (
              <li key={t} className="inline-flex items-center gap-1.5">
                <svg
                  viewBox="0 0 16 16"
                  className="h-3.5 w-3.5 text-[var(--success)]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
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
