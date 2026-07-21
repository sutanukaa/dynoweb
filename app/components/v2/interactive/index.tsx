import HighlightMarker from "../HighlightMarker";
import Bracket from "../Bracket";
import Agent from "./Agent";
import { SECTION, TILES } from "./copy";
import Heatmap from "./Heatmap";
import Nudge from "./Nudge";
import { InteractiveProvider } from "./store";
import Suggestions from "./Suggestions";
import { T, Tile } from "./ui";

// The interactive feature bento. Ported from the "DynoWeb Interactive" Claude
// Design project, which laid these out as four stacked full-width sections —
// here they are four tiles on a 12-column grid (7/5 then 5/7).
//
// One signature move: frosted tiles. The background is deliberately quiet so
// the glass is the only thing doing work — an earlier pass had a full colour
// wash AND a full-bleed grid AND frost all competing at once.
export default function Interactive() {
  return (
    // dw-invert flips --ink / --line / --paper for the whole subtree, so the
    // tiles, labels and chrome all go light-on-blue without touching their code.
    <section className="dw-invert font-inter relative w-full bg-[linear-gradient(165deg,#3f77f2_0%,#5b8dff_52%,#7fa8ff_100%)]">
      {/* Lifts the field where the tiles sit, so the dark glass has a brighter
          patch to read against instead of sitting on flat colour. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-1/3 h-[40rem] w-[56rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(255,255,255,0.22),transparent_70%)] blur-3xl" />
      </div>

      {/* Full-width grid now that the field is blue — white lines read on colour
          where the old dark ones didn't, so it no longer has to hide in the
          margins. Faded top and bottom so it doesn't hard-edge into the
          sections either side. The cards sit above it at ~85% opacity, so it
          stays faintly visible through them rather than being covered. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.13)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.13)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:linear-gradient(to_bottom,transparent,#000_10%,#000_90%,transparent)]"
      />

      <div className="relative mx-auto max-w-[1280px] px-[clamp(1.25rem,5vw,4rem)] py-24">
        <div className="max-w-[46ch]">
          <Bracket tone="light">{SECTION.eyebrow}</Bracket>
          <h2 className="font-display mt-4 text-[clamp(1.9rem,3.2vw,2.6rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-[var(--ink)]">
            {SECTION.title}
            <HighlightMarker white>{SECTION.titleAccent}</HighlightMarker>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[var(--ink-muted)]">
            {SECTION.intro}
          </p>
        </div>

        <InteractiveProvider>
          <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-12">
            <Tile className="lg:col-span-7" {...TILES.heatmap}>
              <Heatmap />
            </Tile>

            <Tile className="lg:col-span-5" {...TILES.nudge}>
              <Nudge />
            </Tile>

            <Tile className="lg:col-span-5" {...TILES.suggestions}>
              <Suggestions />
            </Tile>

            <Tile className="lg:col-span-7" {...TILES.agent}>
              <Agent />
            </Tile>
          </div>
        </InteractiveProvider>

        <p
          className={`${T.body} mt-8 border-t border-[var(--line)] pt-5 text-[var(--ink-muted)]`}
        >
          {SECTION.footnote}
        </p>
      </div>
    </section>
  );
}
