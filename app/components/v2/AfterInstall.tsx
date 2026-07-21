// What happens after you click install — the one question the loop diagram
// above doesn't answer. The loop shows WHAT DynoWeb does; this shows the order
// it happens in and where the merchant's own hands are on the wheel.
//
// Every claim here is from the app repo's ARCHITECTURE.md: 5.9 KB tracker /
// 11 behavioural signals, PECTI scoring, stability gate (a fix must appear in
// 2+ runs before it's shown), SmartNudge as the deploy path, and order-webhook
// revenue attribution. Do not add a step that isn't in that doc.

import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";
import Bracket from "./Bracket";
import HighlightMarker from "./HighlightMarker";

// Four steps, not five. "It watches" and "It finds the leak" were one beat told
// twice — watching is only interesting because of what it finds. Every claim
// from the old pair is preserved in the merged step; nothing was dropped to make
// it shorter. The other three stay separate because they are the three places
// the merchant's own hands are on the wheel: install, approve, get paid.
const STEPS = [
  {
    title: "You install it",
    body: "One click from the Shopify app store. No code, no theme surgery, no developer. The tracker is 5.9 KB gzipped, so your store doesn't get slower.",
  },
  {
    title: "It finds the leak",
    body: "11 behavioural signals every session: rage clicks, dead clicks, scroll cliffs, form drop-off. Form fields are hashed, so we never see what shoppers type. Every candidate fix is scored on Proof, Ease, Cost, Time and Impact, and has to appear in two separate runs before it reaches you.",
  },
  {
    title: "You approve the fix",
    body: "It drafts the change and shows you the reasoning. Nothing reaches your storefront until you say yes. You can say no, every time.",
  },
  {
    title: "It proves the money",
    body: "Recovered sales are matched back through Shopify's own order webhooks: real dollars, net of refunds. You only pay once this number exists.",
  },
];

export default function AfterInstall() {
  return (
    <section className="font-inter relative isolate w-full overflow-hidden bg-white py-24">
      {/* Grid field + travelling beam. Grid recipe is the same one GridPanel in
          Story.tsx uses, at a larger cell size for a full-width section. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(46,107,255,0.09)_1px,transparent_1px),linear-gradient(to_bottom,rgba(46,107,255,0.09)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_at_center,#000_45%,transparent_85%)]"
      >
        <span className="dw-beam" />
      </div>

      {/* relative z-10 for the same reason HeroLoop's copy column has it: the
          background sits at -z-10 inside an isolated stacking context, and the
          content has to be explicitly above it. */}
      <div className="relative z-10 mx-auto grid max-w-[1100px] grid-cols-1 gap-12 px-[clamp(1.25rem,5vw,3rem)] md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-16">
        {/* Sticky so the heading holds while the steps scroll past it — the column
            is much shorter than the timeline beside it. */}
        {/* Reveals ride the page-level <ScrollReveal /> observer — it queries for
            .dw-reveal once on mount, so nothing extra is needed here. */}
        <div className="dw-reveal dw-reveal-left md:sticky md:top-28 md:self-start">
          <Bracket>After you install</Bracket>
          <h2 className="font-display mt-5 text-[clamp(1.875rem,3vw,2.5rem)] font-semibold leading-[1.12] tracking-[-0.025em] text-[var(--ink)]">
            Here&rsquo;s exactly{" "}
            <HighlightMarker>what happens next.</HighlightMarker>
          </h2>
          <p className="mt-6 max-w-[42ch] text-lg leading-relaxed text-[var(--ink-muted)]">
            No onboarding call, no setup week, no spreadsheet to fill in.
          </p>
        </div>

        <Timeline>
          {STEPS.map((s, i) => (
            <TimelineItem
              key={s.title}
              className="dw-reveal dw-reveal-right"
              // Small cascade for the steps that cross the reveal line together.
              style={{ transitionDelay: `${(i * 0.07).toFixed(2)}s` }}
            >
              <TimelineSeparator>
                <TimelineDot />
                {/* Last item has no connector — the rail should end on the payoff,
                    not trail off past it. */}
                {i < STEPS.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent
                className={i === STEPS.length - 1 ? "pb-0" : undefined}
              >
                <TimelineTitle>{s.title}</TimelineTitle>
                <TimelineDescription>{s.body}</TimelineDescription>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
}
