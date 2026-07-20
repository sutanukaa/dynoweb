// The loop, as a flow diagram: scattered traffic converges into one rail, hits
// four checkpoints (SEE → FIND → FIX → PROVE), and resolves at the payoff.
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

/* Scattered incoming traffic, converging into the rail. Decorative. */
function Lanes() {
  const paths = [
    "M0 8 C120 8 150 96 260 96",
    "M0 44 C110 44 150 96 260 96",
    "M0 96 C120 96 160 96 260 96",
    "M0 148 C110 148 150 96 260 96",
    "M0 184 C120 184 150 96 260 96",
  ];
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 260 192"
      preserveAspectRatio="none"
      className="absolute right-full top-1/2 hidden h-[190px] w-[38vw] max-w-[420px] -translate-y-1/2 lg:block"
      fill="none"
    >
      <defs>
        <linearGradient id="dwLane" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--blue-500)" stopOpacity="0" />
          <stop offset="55%" stopColor="var(--blue-500)" stopOpacity="0.34" />
          <stop offset="100%" stopColor="var(--blue-600)" stopOpacity="0.85" />
        </linearGradient>
      </defs>
      {paths.map((d, i) => (
        <path
          key={d}
          d={d}
          stroke="url(#dwLane)"
          strokeWidth={i === 2 ? 5 : 3}
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

/* Handwritten aside with a curved leader — marginalia, not UI chrome. */
function Note({
  children,
  className = "",
  arrow,
}: {
  children: React.ReactNode;
  className?: string;
  arrow: "down-right" | "down-left" | "up-right";
}) {
  const d = {
    "down-right": "M4 4 C26 10 34 24 40 40",
    "down-left": "M56 4 C34 10 26 24 20 40",
    "up-right": "M4 44 C26 38 34 24 40 8",
  }[arrow];
  const head = {
    "down-right": "M34 30 L40 42 L28 40",
    "down-left": "M26 30 L20 42 L32 40",
    "up-right": "M34 18 L40 6 L29 9",
  }[arrow];

  return (
    <div className={`pointer-events-none absolute hidden lg:block ${className}`}>
      <p className="font-caveat text-[1.05rem] leading-[1.15] text-[var(--ink-muted)]">{children}</p>
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
    </div>
  );
}

export default function LoopRail() {
  return (
    <div className="relative mx-auto w-full max-w-[1080px] px-[clamp(1.25rem,5vw,3rem)] pb-8 pt-24">
      {/* ── Rail ── */}
      <div className="relative">
        <Lanes />

        {/* The bar itself */}
        <div className="relative h-[7px] w-full rounded-full bg-[var(--blue-600)] shadow-[0_0_24px_-4px_rgba(30,85,224,0.55)]">
          {/* direction chevrons between checkpoints */}
          {[25, 50, 75].map((x) => (
            <svg
              key={x}
              aria-hidden="true"
              viewBox="0 0 12 12"
              className="absolute top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 text-white/85"
              style={{ left: `${x}%` }}
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
            >
              <path d="M4 2.5 L8 6 L4 9.5" />
            </svg>
          ))}

          {/* checkpoint nodes */}
          {NODE_X.map((x, i) => (
            <span
              key={x}
              aria-hidden="true"
              className="absolute top-1/2 flex h-[26px] w-[26px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-[var(--blue-600)] bg-white shadow-[0_0_0_4px_rgba(30,85,224,0.14)]"
              style={{ left: `${x}%` }}
            >
              <span
                className={`h-[9px] w-[9px] rounded-full ${
                  i === 3 ? "bg-[var(--blue-600)]" : "bg-[var(--blue-500)]"
                }`}
              />
            </span>
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
        <Note arrow="down-right" className="left-[6%] -top-[86px] w-[130px]">
          we watch
          <br />
          every session
        </Note>
        <Note arrow="up-right" className="left-[58%] top-[150px] w-[135px]">
          you approve first
        </Note>
        <Note arrow="down-left" className="left-[92%] -top-[92px] w-[130px] text-right">
          real dollars,
          <br />
          net of refunds
        </Note>
      </div>

      {/* ── Stage cards ── */}
      <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
        {STAGES.map((s) => (
          <div
            key={s.key}
            className="rounded-[var(--r-lg)] border border-[var(--line)] bg-white/85 px-4 py-5 text-center shadow-[var(--shadow-sm)] backdrop-blur-sm"
          >
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              {s.key}
            </p>
            <p className="font-display mt-1.5 text-[1.7rem] font-semibold leading-none tabular-nums tracking-[-0.03em] text-[var(--ink)]">
              {s.value}
            </p>
            <p className="mt-1.5 text-[12px] leading-snug text-[var(--ink-muted)]">{s.caption}</p>
          </div>
        ))}

        {/* PROVE — the payoff. Lifted, blue-bordered, glowing: the eye lands here last. */}
        <div className="relative rounded-[var(--r-lg)] border border-[var(--blue-600)] bg-white px-4 py-5 text-center shadow-[0_18px_44px_-16px_rgba(30,85,224,0.55)] sm:-translate-y-3">
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-[var(--blue-600)]">
            Prove
          </p>
          <p className="font-display mt-1.5 text-[1.7rem] font-semibold leading-none tabular-nums tracking-[-0.03em] text-[var(--ink)]">
            +₹4.28L
          </p>
          <p className="mt-1.5 text-[12px] leading-snug text-[var(--ink-muted)]">
            in sales brought back
          </p>
        </div>
      </div>

      {/* ── Pricing bracket: everything up to the payoff is free ── */}
      <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
        <div className="col-span-2 sm:col-span-3">
          <div className="flex items-center gap-3">
            <span className="h-2 w-px bg-[var(--line)]" />
            <span className="h-px flex-1 border-t border-dashed border-[var(--line)]" />
            <span className="text-[12px] font-medium text-[var(--ink-muted)]">free</span>
            <span className="h-px flex-1 border-t border-dashed border-[var(--line)]" />
            <span className="h-2 w-px bg-[var(--line)]" />
          </div>
        </div>
        <p className="text-center text-[12px] font-medium text-[var(--ink)]">you only pay here</p>
      </div>

      <p className="sr-only">
        DynoWeb closes a four-stage loop on a real store: it sees 52,370 rage clicks, finds 44
        ranked quick wins, deploys a fix in minutes, and proves ₹4.28L in sales brought back. The
        first three stages are free; you only pay once it has made you money.
      </p>
    </div>
  );
}
