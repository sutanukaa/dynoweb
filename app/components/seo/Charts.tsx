import type { CSSProperties, ReactNode } from "react";

/* ------------------------------------------------------------------ *
 *  Dependency-free, SSR-safe data viz for the marketing pages.
 *  Pure SVG/CSS — matches the dark theme (accent #6eb0ff).
 *  Entrance animations are pure CSS (no client JS required).
 * ------------------------------------------------------------------ */

const ACCENT = "#6eb0ff";
const PALETTE = ["#6eb0ff", "#3b6fbe", "#93c5fd", "#1e3a8a", "#60a5fa", "#bfdbfe"];

const chartStyles = `
  @keyframes dwGrowX { from { transform: scaleX(0); } to { transform: scaleX(1); } }
  @keyframes dwGrowY { from { transform: scaleY(0); } to { transform: scaleY(1); } }
  @keyframes dwFade  { from { opacity: 0; } to { opacity: 1; } }
  @keyframes dwDash  { from { stroke-dashoffset: var(--dw-len); } to { stroke-dashoffset: var(--dw-off); } }
  .dw-bar   { transform-origin: left center; animation: dwGrowX 1s cubic-bezier(0.22,1,0.36,1) both; }
  .dw-col   { transform-origin: bottom center; animation: dwGrowY 0.9s cubic-bezier(0.22,1,0.36,1) both; }
  .dw-fade  { animation: dwFade 0.8s ease both; }
  .dw-arc   { animation: dwDash 1.1s cubic-bezier(0.22,1,0.36,1) both; }
  .dw-line  { stroke-dasharray: var(--dw-len); stroke-dashoffset: var(--dw-len); animation: dwDash 1.4s ease both; }
  /* Neutralise inherited prose list styling when a chart sits inside article copy */
  .dw-chart ul, .dw-chart ol, .dw-chart li { list-style: none !important; margin: 0 !important; padding-left: 0 !important; }
  .dw-chart li::marker { content: none; }
  @media (prefers-reduced-motion: reduce) {
    .dw-bar, .dw-col, .dw-fade, .dw-arc, .dw-line { animation: none; stroke-dashoffset: var(--dw-off, 0); }
  }
`;

/* ------------------------------------------------------------------ */
/*  Frame                                                              */
/* ------------------------------------------------------------------ */

export function ChartCard({
  eyebrow,
  title,
  children,
  footnote,
  className = "",
}: {
  eyebrow?: string;
  title?: ReactNode;
  children: ReactNode;
  footnote?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`dw-chart not-prose rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-6 lg:p-8 ${className}`}
    >
      <style>{chartStyles}</style>
      {eyebrow ? (
        <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.24em] text-[#6eb0ff]">{eyebrow}</p>
      ) : null}
      {title ? (
        <p className="mt-2 font-[Montserrat] text-lg font-extrabold tracking-tight text-white">{title}</p>
      ) : null}
      <div className="mt-6">{children}</div>
      {footnote ? <p className="mt-5 text-xs leading-5 text-zinc-500">{footnote}</p> : null}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Horizontal bar chart                                               */
/* ------------------------------------------------------------------ */

export function BarChart({
  data,
  unit = "",
  max,
}: {
  data: { label: string; value: number; display?: string; highlight?: boolean }[];
  unit?: string;
  max?: number;
}) {
  const top = max ?? Math.max(...data.map((d) => d.value));
  return (
    <div className="flex flex-col gap-3.5">
      {data.map((d, i) => (
        <div
          key={d.label}
          className="grid grid-cols-[minmax(4.5rem,6.5rem)_1fr_auto] items-center gap-2.5 sm:grid-cols-[minmax(7rem,9rem)_1fr_auto] sm:gap-3"
        >
          <span className="truncate text-[0.78rem] font-semibold text-zinc-300 sm:text-[0.85rem]">{d.label}</span>
          <span className="relative h-6 overflow-hidden rounded-md bg-white/[0.04] sm:h-7">
            <span
              className="dw-bar absolute inset-y-0 left-0 rounded-md"
              style={{
                width: `${(d.value / top) * 100}%`,
                background: d.highlight
                  ? `linear-gradient(90deg, ${ACCENT}, #93c5fd)`
                  : "linear-gradient(90deg, rgba(110,176,255,0.45), rgba(110,176,255,0.18))",
                animationDelay: `${i * 0.08}s`,
                boxShadow: d.highlight ? "0 0 24px rgba(110,176,255,0.25)" : "none",
              }}
            />
          </span>
          <span
            className={`w-11 text-right font-[Montserrat] text-xs font-extrabold sm:w-14 sm:text-sm ${
              d.highlight ? "text-white" : "text-zinc-300"
            }`}
          >
            {d.display ?? `${d.value}${unit}`}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Grouped bars (e.g. your store vs benchmark)                        */
/* ------------------------------------------------------------------ */

export function CompareBars({
  data,
  seriesA,
  seriesB,
  unit = "",
}: {
  data: { label: string; a: number; b: number; aDisplay?: string; bDisplay?: string }[];
  seriesA: string;
  seriesB: string;
  unit?: string;
}) {
  const top = Math.max(...data.flatMap((d) => [d.a, d.b]));
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-zinc-400">
        <span className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-sm" style={{ background: ACCENT }} />
          {seriesA}
        </span>
        <span className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-sm bg-zinc-600" />
          {seriesB}
        </span>
      </div>
      {data.map((d, i) => (
        <div key={d.label}>
          <div className="mb-1.5 flex items-center justify-between">
            <span className="text-[0.85rem] font-semibold text-zinc-300">{d.label}</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-3">
              <span className="relative h-4 flex-1 overflow-hidden rounded bg-white/[0.04]">
                <span
                  className="dw-bar absolute inset-y-0 left-0 rounded"
                  style={{ width: `${(d.a / top) * 100}%`, background: `linear-gradient(90deg, ${ACCENT}, #93c5fd)`, animationDelay: `${i * 0.08}s` }}
                />
              </span>
              <span className="w-14 text-right font-[Montserrat] text-xs font-extrabold text-white">{d.aDisplay ?? `${d.a}${unit}`}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="relative h-4 flex-1 overflow-hidden rounded bg-white/[0.04]">
                <span
                  className="dw-bar absolute inset-y-0 left-0 rounded bg-zinc-600"
                  style={{ width: `${(d.b / top) * 100}%`, animationDelay: `${i * 0.08 + 0.05}s` }}
                />
              </span>
              <span className="w-14 text-right font-[Montserrat] text-xs font-extrabold text-zinc-400">{d.bDisplay ?? `${d.b}${unit}`}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Donut chart                                                        */
/* ------------------------------------------------------------------ */

export function DonutChart({
  segments,
  centerValue,
  centerLabel,
}: {
  segments: { label: string; value: number; display?: string }[];
  centerValue?: string;
  centerLabel?: string;
}) {
  const total = segments.reduce((s, x) => s + x.value, 0);
  const r = 64;
  const circ = 2 * Math.PI * r;
  let acc = 0;

  return (
    <div className="flex flex-col items-center gap-7 sm:flex-row sm:gap-9">
      <svg viewBox="0 0 160 160" className="h-44 w-44 flex-none -rotate-90">
        <circle cx="80" cy="80" r={r} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="18" />
        {segments.map((s, i) => {
          const frac = s.value / total;
          const len = frac * circ;
          const gap = circ - len;
          const dashoffset = -acc;
          acc += len;
          return (
            <circle
              key={s.label}
              cx="80"
              cy="80"
              r={r}
              fill="none"
              stroke={PALETTE[i % PALETTE.length]}
              strokeWidth="18"
              strokeDasharray={`${len} ${gap}`}
              strokeDashoffset={dashoffset}
              strokeLinecap="butt"
              className="dw-arc"
              style={{ "--dw-len": `${circ}`, "--dw-off": `${dashoffset}`, animationDelay: `${i * 0.12}s` } as CSSProperties}
            />
          );
        })}
      </svg>
      <div className="flex-1">
        {centerValue ? (
          <p className="mb-4 font-[Montserrat] text-3xl font-extrabold tracking-tight text-white">
            {centerValue}
            {centerLabel ? <span className="ml-2 text-sm font-semibold text-zinc-500">{centerLabel}</span> : null}
          </p>
        ) : null}
        <ul className="flex flex-col gap-2.5">
          {segments.map((s, i) => (
            <li key={s.label} className="flex items-center justify-between gap-4 text-sm">
              <span className="flex items-center gap-2.5 text-zinc-300">
                <span className="h-2.5 w-2.5 rounded-sm" style={{ background: PALETTE[i % PALETTE.length] }} />
                {s.label}
              </span>
              <span className="font-[Montserrat] font-extrabold text-white">
                {s.display ?? `${Math.round((s.value / total) * 100)}%`}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Funnel chart                                                       */
/* ------------------------------------------------------------------ */

export function FunnelChart({
  steps,
}: {
  steps: { label: string; value: number; display?: string }[];
}) {
  const top = steps[0]?.value || 1;
  return (
    <div className="flex flex-col gap-2">
      {steps.map((s, i) => {
        const prev = i === 0 ? s.value : steps[i - 1].value;
        const drop = i === 0 ? 0 : Math.round(((prev - s.value) / prev) * 100);
        const biggestDrop =
          i > 0 &&
          drop ===
            Math.max(
              ...steps.map((st, j) => (j === 0 ? 0 : Math.round(((steps[j - 1].value - st.value) / steps[j - 1].value) * 100))),
            );
        return (
          <div key={s.label}>
            <div className="mb-1 flex items-center justify-between text-[0.8rem]">
              <span className="font-semibold text-zinc-300">{s.label}</span>
              <span className="font-[Montserrat] font-extrabold text-white">{s.display ?? s.value.toLocaleString()}</span>
            </div>
            <div className="relative h-9 overflow-hidden rounded-lg bg-white/[0.04]">
              <span
                className="dw-bar absolute inset-y-0 left-0 rounded-lg"
                style={{
                  width: `${(s.value / top) * 100}%`,
                  background: biggestDrop
                    ? "linear-gradient(90deg, #f87171, #fb923c)"
                    : `linear-gradient(90deg, ${ACCENT}, rgba(110,176,255,0.3))`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            </div>
            {i > 0 ? (
              <p className={`mt-1 text-right text-[0.72rem] font-bold ${biggestDrop ? "text-red-400" : "text-zinc-500"}`}>
                −{drop}% from previous step{biggestDrop ? " · biggest leak" : ""}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Line / area chart                                                  */
/* ------------------------------------------------------------------ */

export function LineChart({
  points,
  labels,
  height = 160,
}: {
  points: number[];
  labels?: string[];
  height?: number;
}) {
  const w = 600;
  const h = height;
  const pad = 8;
  const max = Math.max(...points);
  const min = Math.min(...points);
  const span = max - min || 1;
  const stepX = (w - pad * 2) / (points.length - 1);
  const coords = points.map((p, i) => {
    const x = pad + i * stepX;
    const y = pad + (1 - (p - min) / span) * (h - pad * 2);
    return [x, y] as const;
  });
  const linePath = coords.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const areaPath = `${linePath} L${coords[coords.length - 1][0].toFixed(1)},${h - pad} L${coords[0][0].toFixed(1)},${h - pad} Z`;
  const lineLen = Math.round(
    coords.reduce((sum, c, i) => (i === 0 ? 0 : sum + Math.hypot(c[0] - coords[i - 1][0], c[1] - coords[i - 1][1])), 0),
  );

  return (
    <div>
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full" preserveAspectRatio="none" style={{ height }}>
        <defs>
          <linearGradient id="dwArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={ACCENT} stopOpacity="0.28" />
            <stop offset="100%" stopColor={ACCENT} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={areaPath} fill="url(#dwArea)" className="dw-fade" />
        <path
          d={linePath}
          fill="none"
          stroke={ACCENT}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="dw-line"
          style={{ "--dw-len": `${lineLen}`, "--dw-off": "0" } as CSSProperties}
        />
        {coords.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="3" fill="#0b0b0d" stroke={ACCENT} strokeWidth="2" className="dw-fade" />
        ))}
      </svg>
      {labels?.length ? (
        <div className="mt-2 flex justify-between text-[0.7rem] font-semibold text-zinc-600">
          {labels.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </div>
      ) : null}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Big metric callouts                                                */
/* ------------------------------------------------------------------ */

export function MetricRow({
  metrics,
}: {
  metrics: { value: string; label: string; trend?: string; trendUp?: boolean }[];
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {metrics.map((m) => (
        <div key={m.label} className="rounded-[1.25rem] border border-white/10 bg-white/[0.02] p-5">
          <div className="flex items-baseline gap-2">
            <p className="font-[Montserrat] text-3xl font-extrabold tracking-tight text-white">{m.value}</p>
            {m.trend ? (
              <span className={`text-xs font-bold ${m.trendUp ? "text-emerald-400" : "text-red-400"}`}>
                {m.trendUp ? "▲" : "▼"} {m.trend}
              </span>
            ) : null}
          </div>
          <p className="mt-2 text-sm leading-6 text-zinc-400">{m.label}</p>
        </div>
      ))}
    </div>
  );
}
