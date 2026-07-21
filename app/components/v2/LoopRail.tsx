// The loop, as a flow diagram: one rail running through four checkpoints
// (SEE → FIND → FIX → PROVE), resolving at the payoff.
//
// This is DynoWeb's actual differentiator made visual — dynoweb-offer.md §2.5:
// competitors stop at SEE or at FIX; nobody closes the loop. The dotted "free"
// bracket spanning the first three stages carries the outcome-gated pricing
// (offer.md §6) in one word, which is the page's strongest objection-killer.
//
// Built in SVG/CSS rather than as generated art: the numbers stay real text
// (editable, selectable, translatable), it's crisp at any zoom, and it animates.
//
// Node x-positions are derived from the 4-column card grid (12.5 / 37.5 / 62.5 /
// 87.5%), so cards and checkpoints stay aligned at every width by construction.
//
// Scroll-draw: the rail assembles itself as the section enters view — at rest the
// track is empty, then the first checkpoint pops and the bar wipes L→R from it,
// each later checkpoint popping as the wipe reaches its x-position. The
// scroll range is a normal in-view window (no tall sticky container, no 400vh):
// the section keeps its natural height and nothing scroll-jacks. Progress maps to
// horizontal fill ONLY — there is no vertical motion anywhere in this animation.
"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";

// All four stages report the SAME real store (The Punarvasu, design.md §2), so the
// frame is internally consistent. An earlier draft mixed "$3,200/mo" — design.md's
// generic illustrative leak estimate — with Punarvasu's real "₹4.28L", which read as
// two different stores. FIND now carries Punarvasu's own "44 quick wins".
const STAGES = [
  { key: "SEE", value: "52,370", caption: "rage clicks found" },
  { key: "FIND", value: "44", caption: "quick wins, ranked" },
  { key: "FIX", value: "Minutes", caption: "to deploy the fix" },
];

const NODE_X = [12.5, 37.5, 62.5, 87.5];

/* Handwritten aside with a curved leader — marginalia, not UI chrome. */
// leaderAbove puts the curve BEFORE the text. A note that sits below what it
// annotates needs its leader on top, otherwise the arrow points up at its own
// text instead of at the thing being annotated.
function Note({
  children,
  className = "",
  arrow,
  leaderAbove = false,
  reveal = 1,
}: {
  children: React.ReactNode;
  className?: string;
  arrow: "down-right" | "down-left" | "up-right";
  leaderAbove?: boolean;
  reveal?: MotionValue<number> | number;
}) {
  const d = {
    "down-right": "M4 4 C26 10 34 24 40 40",
    "down-left": "M56 4 C34 10 26 24 20 40",
    "up-right": "M4 44 C26 38 34 24 40 8",
  }[arrow];
  // Barbs are derived from the curve's tangent at its end point, not eyeballed —
  // the old heads had their vertex past the curve's tip and their legs off-axis,
  // so each read as a loose "v" floating beside the leader instead of an arrow.
  // Tip = the curve's own end point; legs = tip - tangent*11 ± normal*5.5.
  const head = {
    "down-right": "M30.9 31.5 L40 40 L41.3 27.7",
    "down-left": "M18.7 27.7 L20 40 L29.1 31.5",
    "up-right": "M41.3 20.3 L40 8 L30.9 16.5",
  }[arrow];

  const text = (
    <p className="font-caveat text-[1.05rem] leading-[1.15] text-[var(--ink-muted)]">{children}</p>
  );
  const leader = (
    <svg
      aria-hidden="true"
      viewBox="0 0 60 48"
      className="h-9 w-14 text-[var(--navy-300)]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={d} />
      <path d={head} />
    </svg>
  );

  return (
    <motion.div
      style={{ opacity: reveal }}
      className={`pointer-events-none absolute hidden lg:block ${className}`}
    >
      {leaderAbove ? leader : text}
      {leaderAbove ? text : leader}
    </motion.div>
  );
}

export default function LoopRail() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  // Ordinary in-view window — the section is measured where it already sits, so
  // its height is unchanged and the page scrolls at its normal rate.
  const { scrollYProgress } = useScroll({
    target: ref,
    // Start must be BELOW the fold at page load. The section's top already sits
    // ~85% down the viewport under the hero, so a "start 95%" start line was
    // already crossed before any scrolling — the first two checkpoints were
    // rendered on arrival. 70% means progress is a hard 0 until you scroll.
    // The end stays high so the sequence finishes with the section still centred.
    offset: ["start 70%", "end 65%"],
  });

  // Where the fill ARRIVES at each checkpoint. The bar advances to a stop, holds
  // while that node pops and its card lands, then moves on — a linear 0→87.5%
  // sweep meant the bar was always somewhere between stops, and was already well
  // past the first one by the time the section was comfortably in view.
  const ARRIVE = [0.14, 0.36, 0.58, 0.8];

  // Animate WIDTH, not scaleX. scaleX on a rounded-full bar squashes the border
  // radius along with the box, flattening the leading cap into a blunt oval.
  // The rail STARTS at the first node (12.5%) and ends at the last (87.5%), so
  // the fill is 75% of the track wide when complete and there is no stub hanging
  // off the left edge before the journey begins.
  const railFill = useTransform(
    scrollYProgress,
    [ARRIVE[0], 0.26, ARRIVE[1], 0.48, ARRIVE[2], 0.7, ARRIVE[3]],
    ["0%", "0%", "25%", "25%", "50%", "50%", "75%"],
  );

  // One entry per checkpoint, keyed to the moment the fill reaches it. NODE_X is
  // a module constant, so this map calls the same hooks in the same order on
  // every render.
  const steps = NODE_X.map((_x, i) => {
    const at = ARRIVE[i];
    /* eslint-disable react-hooks/rules-of-hooks */
    const pop = useTransform(scrollYProgress, [at - 0.05, at], [0, 1]);
    const card = useTransform(scrollYProgress, [at, at + 0.06], [0, 1]);
    const cardScale = useTransform(card, [0, 1], [0.965, 1]);
    /* eslint-enable react-hooks/rules-of-hooks */
    return { pop, card, cardScale };
  });

  return (
    <div
      ref={ref}
      className="relative mx-auto w-full max-w-[1080px] px-[clamp(1.25rem,5vw,3rem)] pb-8 pt-24"
    >
      {/* ── Rail ── */}
      <div className="relative">
        {/* The bar itself. The coloured fill is its own layer so scaleX wipes it
            without squashing the chevrons and nodes, which are siblings. */}
        <div className="relative h-[7px] w-full rounded-full">
          {/* Spans node 1 → node 4; both ends sit under a checkpoint, so both are
              capped. Nothing renders before the first node pops. */}
          <motion.div
            aria-hidden="true"
            className="absolute inset-y-0 left-[12.5%] rounded-full bg-[var(--blue-600)] shadow-[0_0_24px_-4px_rgba(30,85,224,0.55)]"
            style={{ width: reduced ? "75%" : railFill }}
          />

          {/* direction chevrons, midway between consecutive checkpoints. Each
              fades in with the node it points toward so it never sits on bare track. */}
          {[25, 50, 75].map((x, i) => (
            <motion.svg
              key={x}
              aria-hidden="true"
              viewBox="0 0 12 12"
              className="absolute top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 text-white/85"
              style={{ left: `${x}%`, opacity: reduced ? 1 : steps[i + 1].pop }}
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
            >
              <path d="M4 2.5 L8 6 L4 9.5" />
            </motion.svg>
          ))}

          {/* checkpoint nodes. The -translate-x/y pair is what centres them on the
              bar, so the pop rides on `scale` alone — animating translate here
              would drag them off the rail. */}
          {NODE_X.map((x, i) => (
            <motion.span
              key={x}
              aria-hidden="true"
              className="absolute top-1/2 flex h-[26px] w-[26px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-[var(--blue-600)] bg-white shadow-[0_0_0_4px_rgba(30,85,224,0.14)]"
              style={{
                left: `${x}%`,
                scale: reduced ? 1 : steps[i].pop,
                opacity: reduced ? 1 : steps[i].pop,
              }}
            >
              <span
                className={`h-[9px] w-[9px] rounded-full ${
                  i === 3 ? "bg-[var(--blue-600)]" : "bg-[var(--blue-500)]"
                }`}
              />
            </motion.span>
          ))}
        </div>

        {/* payoff glow behind the final node */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[87.5%] top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(46,107,255,0.20) 0%, rgba(46,107,255,0.06) 42%, transparent 70%)",
          }}
        />

        {/* handwritten asides */}
        {/* Marginalia. Anchored with `right-` on the right-hand note rather than
            `left-[92%]` — a left-anchored 130px box at 92% overflowed the container
            and crowded the viewport edge on wide screens. */}
        {/* Each note fades in with the checkpoint it annotates, so none of them sit
            on screen ahead of the stop they point at. */}
        <Note
          arrow="down-right"
          reveal={reduced ? 1 : steps[0].card}
          className="left-[6%] -top-[86px] w-[130px]"
        >
          we watch
          <br />
          every session
        </Note>
        {/* Sits under the FIX card (card row bottoms out ~200px below the rail), so
            the leader goes above the text and points back up at the card. The "free"
            bracket below was moved from mt-5 to mt-20 to clear the 55px this needs. */}
        <Note
          arrow="up-right"
          leaderAbove
          reveal={reduced ? 1 : steps[2].card}
          className="left-[57%] top-[212px] w-[135px]"
        >
          you approve first
        </Note>
        <Note
          arrow="down-left"
          reveal={reduced ? 1 : steps[3].card}
          className="right-0 -top-[92px] w-[130px] text-right"
        >
          real dollars,
          <br />
          net of refunds
        </Note>
      </div>

      {/* ── Stage cards ── */}
      <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
        {STAGES.map((s, i) => (
          <motion.div
            key={s.key}
            className="dw-glass-frost rounded-[var(--r-lg)] px-4 py-5 text-center"
            style={{
              opacity: reduced ? 1 : steps[i].card,
              scale: reduced ? 1 : steps[i].cardScale,
            }}
          >
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              {s.key}
            </p>
            <p className="font-display mt-1.5 text-[1.7rem] font-semibold leading-none tabular-nums tracking-[-0.03em] text-[var(--ink)]">
              {s.value}
            </p>
            <p className="mt-1.5 text-[12px] leading-snug text-[var(--ink-muted)]">{s.caption}</p>
          </motion.div>
        ))}

        {/* PROVE — the payoff. Lifted, blue-bordered, glowing: the eye lands here last.
            The -translate-y-3 lift is a class, so `scale` here can't fight it. */}
        <motion.div
          className="dw-glass-frost dw-glass-frost--accent relative rounded-[var(--r-lg)] px-4 py-5 text-center sm:-translate-y-3"
          style={{
            opacity: reduced ? 1 : steps[3].card,
            scale: reduced ? 1 : steps[3].cardScale,
          }}
        >
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-[var(--blue-600)]">
            Prove
          </p>
          <p className="font-display mt-1.5 text-[1.7rem] font-semibold leading-none tabular-nums tracking-[-0.03em] text-[var(--ink)]">
            +₹4.28L
          </p>
          <p className="mt-1.5 text-[12px] leading-snug text-[var(--ink-muted)]">
            in sales brought back
          </p>
        </motion.div>
      </div>

      {/* ── Pricing bracket: everything up to the payoff is free ──
           Both halves are the SAME bracket shape, differing only in colour. The
           right half used to be bare centred text with no rule and no end ticks,
           so it read as a stray caption rather than the counterpart to "free".
           items-end + tall end ticks make each bracket open upward, gripping the
           card row it spans instead of floating as a detached rule. */}
      <motion.div
        style={{ opacity: reduced ? 1 : steps[3].card }}
        className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5"
      >
        <div className="col-span-2 sm:col-span-3">
          <div className="flex items-end gap-3">
            <span className="h-4 w-px bg-[var(--line)]" />
            <span className="-mb-px h-px flex-1 border-t border-dashed border-[var(--line)]" />
            <span className="pb-1 text-[12px] font-medium text-[var(--ink-muted)]">free</span>
            <span className="-mb-px h-px flex-1 border-t border-dashed border-[var(--line)]" />
            <span className="h-4 w-px bg-[var(--line)]" />
          </div>
        </div>

        {/* Blue, and heavier — this is the only place money changes hands, and it
            picks up the PROVE card's accent directly above it. */}
        <div className="flex items-end gap-2">
          <span className="h-4 w-px bg-[var(--blue-600)]/40" />
          <span className="-mb-px h-px flex-1 border-t border-dashed border-[var(--blue-600)]/40" />
          <span className="whitespace-nowrap pb-1 text-[12px] font-semibold text-[var(--blue-600)]">
            you only pay here
          </span>
          <span className="-mb-px h-px flex-1 border-t border-dashed border-[var(--blue-600)]/40" />
          <span className="h-4 w-px bg-[var(--blue-600)]/40" />
        </div>
      </motion.div>

      <p className="sr-only">
        DynoWeb closes a four-stage loop on a real store: it sees 52,370 rage clicks, finds 44
        ranked quick wins, deploys a fix in minutes, and proves ₹4.28L in sales brought back. The
        first three stages are free; you only pay once it has made you money.
      </p>
    </div>
  );
}
