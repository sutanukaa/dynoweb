"use client";

import { Info, Monitor, Pause, Play, Smartphone, TriangleAlert } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { ORIGINAL_COPY, REWRITTEN_COPY, useInteractive } from "./store";
import { BrowserBar, INK_DIM, PhotoSlot, S, T } from "./ui";

type Tab = "click" | "frustration" | "scroll";
type Device = "desktop" | "mobile";

// [x, y, value, count, spread] — fractions of the stage box, so seeded hotspots
// stay pinned to their elements at any tile width.
const SEEDS: Record<Device, Record<"click" | "frustration", number[][]>> = {
  desktop: {
    click: [
      [0.27, 0.4, 0.7, 5, 44],
      [0.72, 0.18, 0.5, 3, 30],
      [0.72, 0.72, 1.3, 10, 22],
      [0.68, 0.48, 0.6, 3, 24],
    ],
    frustration: [
      [0.62, 0.58, 1.4, 20, 16],
      [0.72, 0.72, 0.35, 3, 22],
      [0.27, 0.4, 0.3, 2, 30],
    ],
  },
  mobile: {
    click: [
      [0.5, 0.19, 0.7, 5, 40],
      [0.5, 0.39, 0.5, 3, 26],
      [0.5, 0.79, 1.3, 10, 20],
      [0.4, 0.58, 0.6, 3, 22],
    ],
    frustration: [
      [0.42, 0.67, 1.4, 20, 14],
      [0.5, 0.79, 0.35, 3, 20],
      [0.5, 0.19, 0.3, 2, 26],
    ],
  },
};

const TRACKS: Record<Device, Record<"click" | "frustration", number[][]>> = {
  desktop: {
    click: [[0.2, 0.2], [0.27, 0.4], [0.36, 0.44], [0.5, 0.38], [0.66, 0.2], [0.72, 0.22], [0.7, 0.35], [0.68, 0.48], [0.7, 0.6], [0.72, 0.72], [0.73, 0.73], [0.72, 0.72]],
    frustration: [[0.3, 0.3], [0.5, 0.45], [0.6, 0.55], [0.62, 0.58], [0.61, 0.59], [0.63, 0.57], [0.62, 0.58], [0.62, 0.59], [0.61, 0.58], [0.62, 0.58], [0.7, 0.68], [0.72, 0.72]],
  },
  mobile: {
    click: [[0.5, 0.1], [0.5, 0.19], [0.5, 0.3], [0.5, 0.39], [0.5, 0.5], [0.45, 0.58], [0.5, 0.7], [0.5, 0.79], [0.5, 0.8]],
    frustration: [[0.5, 0.25], [0.5, 0.45], [0.42, 0.66], [0.43, 0.68], [0.41, 0.66], [0.42, 0.67], [0.42, 0.66], [0.5, 0.75], [0.5, 0.79]],
  },
};

function interpolate(waypoints: number[][], steps = 6) {
  const out: number[][] = [];
  for (let i = 0; i < waypoints.length - 1; i++) {
    const [ax, ay] = waypoints[i];
    const [bx, by] = waypoints[i + 1];
    for (let s = 0; s < steps; s++) {
      const f = s / steps;
      out.push([ax + (bx - ax) * f, ay + (by - ay) * f]);
    }
  }
  out.push(waypoints[waypoints.length - 1]);
  return out;
}

const MARKERS = [
  { key: "thumbs", x: "27%", y: "40%", mx: "50%", my: "19%", label: "Image thumbnails", clicks: "670", ctr: "19%", fi: 1, fiText: "1 · low", note: "" },
  { key: "stars", x: "72%", y: "30%", mx: "60%", my: "45%", label: "Review stars", clicks: "512", ctr: "14%", fi: 3, fiText: "3 · low", note: "Mostly mobile." },
  { key: "size", x: "68%", y: "48%", mx: "40%", my: "58%", label: "Size selector", clicks: "890", ctr: "25%", fi: 22, fiText: "22 · moderate", note: "Visitors toggle between sizes repeatedly before committing." },
  { key: "guide", x: "62%", y: "58%", mx: "42%", my: "67%", label: "“Size guide” text link", clicks: "340", ctr: "9%", fi: 68, fiText: "68 · high", note: "The text isn’t clickable — this is the rage-click leak." },
  { key: "atc", x: "72%", y: "72%", mx: "50%", my: "79%", label: "Add to cart button", clicks: "1,204", ctr: "34%", fi: 4, fiText: "4 · low", note: "" },
];

const INSIGHTS: Record<Tab, string> = {
  click: "Attention pools on the image and the buy button — healthy. Note the warmth building wherever your cursor rests.",
  frustration: "A dense cluster of rage clicks sits on the “Fit & size guide” text — visitors expect it to open, but it does nothing. That is a fixable leak.",
  scroll: "Only 61% of visitors ever scroll to the Add-to-cart, and 28% reach the fabric details. Anything below the fold competes for a shrinking audience.",
};

const STOPS = [
  [46, 107, 255],
  [34, 211, 238],
  [74, 222, 128],
  [245, 165, 36],
  [229, 72, 77],
];

function heatColor(v: number) {
  const t = Math.max(0, Math.min(1, v)) * (STOPS.length - 1);
  const i = Math.min(STOPS.length - 2, Math.floor(t));
  const f = t - i;
  const [a, b] = [STOPS[i], STOPS[i + 1]];
  return a.map((c, k) => Math.round(c + (b[k] - c) * f));
}

function fiColor(fi: number) {
  if (fi <= 10) return "var(--success)";
  if (fi <= 40) return "var(--warning)";
  return "var(--danger)";
}

type Point = { x: number; y: number; v: number; born: number };

export default function Heatmap() {
  const [tab, setTab] = useState<Tab>("click");
  const [device, setDevice] = useState<Device>("desktop");
  const [hover, setHover] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const [scrub, setScrub] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [stats, setStats] = useState({ sessions: 1284, clicks: 3616, frustration: 12 });

  const { copyApplied } = useInteractive();
  const mobile = device === "mobile";
  const painting: "click" | "frustration" = tab === "frustration" ? "frustration" : "click";

  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pts = useRef<Point[]>([]);
  const box = useRef({ w: 0, h: 0 });
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const clickLog = useRef<{ x: number; y: number; t: number }[]>([]);

  const track = useMemo(() => interpolate(TRACKS[device][painting]), [device, painting]);

  const seed = useCallback((t: Tab, d: Device) => {
    pts.current = [];
    const { w, h } = box.current;
    if (!w || t === "scroll") return;
    const now = performance.now();
    for (const [px, py, v, n, spread] of SEEDS[d][t === "frustration" ? "frustration" : "click"]) {
      for (let i = 0; i < n; i++) {
        pts.current.push({
          x: px * w + (Math.random() - 0.5) * spread,
          y: py * h + (Math.random() - 0.5) * spread,
          v,
          born: now,
        });
      }
    }
  }, []);

  const addPoint = useCallback((x: number, y: number, strength: number) => {
    const list = pts.current;
    const last = list[list.length - 1];
    if (last && Math.hypot(last.x - x, last.y - y) < 15) {
      last.v = Math.min(1.5, last.v + strength);
      last.born = performance.now();
    } else {
      list.push({ x, y, v: 0.3 + strength, born: performance.now() });
    }
    if (list.length > 700) list.splice(0, list.length - 700);
  }, []);

  // Canvas sizing + paint loop, gated on visibility so an off-screen tile isn't
  // burning a rAF for the whole page.
  useEffect(() => {
    const stage = stageRef.current;
    const cv = canvasRef.current;
    if (!stage || !cv) return;

    const resize = () => {
      const r = stage.getBoundingClientRect();
      if (!r.width) return;
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      cv.width = r.width * dpr;
      cv.height = r.height * dpr;
      const ctx = cv.getContext("2d");
      if (!ctx) return;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctxRef.current = ctx;
      box.current = { w: r.width, h: r.height };
    };
    resize();
    seed(tab, device);

    const ro = new ResizeObserver(resize);
    ro.observe(stage);

    let raf = 0;
    let visible = false;
    const draw = () => {
      raf = visible ? requestAnimationFrame(draw) : 0;
      const ctx = ctxRef.current;
      if (!ctx) return;
      const { w, h } = box.current;
      const now = performance.now();
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "multiply";
      for (let i = pts.current.length - 1; i >= 0; i--) {
        const p = pts.current[i];
        const v = p.v * Math.max(0, 1 - (now - p.born) / 14000);
        if (v <= 0.03) {
          pts.current.splice(i, 1);
          continue;
        }
        const rad = 20 + Math.min(1, v) * 28;
        const [r, g, b] = heatColor(Math.min(1, v));
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, rad);
        grad.addColorStop(0, `rgba(${r},${g},${b},${Math.min(0.5, v * 0.46)})`);
        grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, rad, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = "source-over";
    };

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible && !raf) raf = requestAnimationFrame(draw);
    });
    io.observe(stage);

    return () => {
      ro.disconnect();
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [seed, tab, device]);

  useEffect(() => {
    const t = setInterval(() => setStats((s) => ({ ...s, sessions: s.sessions + 1 })), 3500);
    return () => clearInterval(t);
  }, []);

  // Replay scrubber drives the heat directly: the track prefix up to `scrub`.
  useEffect(() => {
    if (scrub === 0 || tab === "scroll") return;
    const { w, h } = box.current;
    if (!w) return;
    const n = Math.round((scrub / 100) * (track.length - 1));
    const now = performance.now();
    pts.current = track.slice(0, n + 1).map(([px, py], i) => ({
      x: px * w,
      y: py * h,
      v: 0.45 + (i / Math.max(1, n)) * 0.55,
      born: now,
    }));
  }, [scrub, track, tab]);

  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => {
      setScrub((v) => {
        if (v >= 100) {
          setPlaying(false);
          return 100;
        }
        return Math.min(100, v + 2);
      });
    }, 40);
    return () => clearInterval(t);
  }, [playing]);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2600);
    return () => clearTimeout(t);
  }, [toast]);

  const onMove = (e: React.MouseEvent) => {
    if (tab === "scroll" || !stageRef.current) return;
    const r = stageRef.current.getBoundingClientRect();
    addPoint(e.clientX - r.left, e.clientY - r.top, 0.09);
  };

  const onClick = useCallback(
    (e: React.MouseEvent) => {
      if (tab === "scroll" || !stageRef.current) return;
      const r = stageRef.current.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      const now = performance.now();

      addPoint(x, y, 0.45);
      setStats((s) => ({ ...s, clicks: s.clicks + 1 }));

      clickLog.current = [...clickLog.current.filter((c) => now - c.t < 1200), { x, y, t: now }];
      const cluster = clickLog.current.filter((c) => Math.hypot(c.x - x, c.y - y) < 40);
      if (cluster.length < 3) return;

      clickLog.current = [];
      for (let i = 0; i < 8; i++) {
        addPoint(x + (Math.random() - 0.5) * 18, y + (Math.random() - 0.5) * 18, 0.9);
      }
      setStats((s) => ({ ...s, frustration: Math.min(100, s.frustration + 9) }));
      setToast("Rage click detected · frustration index +9");
      if (tab !== "frustration") {
        setTab("frustration");
        setScrub(0);
        setPlaying(false);
      }
    },
    [addPoint, tab],
  );

  const changeTab = (t: Tab) => {
    setTab(t);
    setScrub(0);
    setPlaying(false);
  };
  const changeDevice = (d: Device) => {
    setDevice(d);
    setScrub(0);
    setPlaying(false);
  };

  const markers = MARKERS.map((m) => ({ ...m, x: mobile ? m.mx : m.x, y: mobile ? m.my : m.y }));
  const cursor = scrub > 0 ? track[Math.round((scrub / 100) * (track.length - 1))] : null;

  return (
    <div className="flex flex-1 flex-col">
      {/* Instrument panel — this tile is the measuring device, so its controls
          sit on a dark strip rather than another outlined toolbar. */}
      <div className="flex flex-wrap items-center gap-1 bg-[var(--navy-900)] px-3 py-2">
        {(["click", "frustration", "scroll"] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => changeTab(t)}
            className={`${T.label} rounded-[var(--r-sm)] px-2.5 py-1.5 transition-colors ${
              tab === t ? "bg-white/15 text-white" : "text-[var(--navy-300)] hover:text-white"
            }`}
          >
            {t === "scroll" ? "Scroll" : t}
          </button>
        ))}
        <div className="ml-auto flex items-center gap-0.5 rounded-[var(--r-sm)] bg-white/10 p-0.5">
          {([["desktop", Monitor], ["mobile", Smartphone]] as const).map(([d, Icon]) => (
            <button
              key={d}
              onClick={() => changeDevice(d)}
              aria-label={d}
              className={`rounded-[var(--r-xs)] p-1.5 transition-colors ${
                device === d ? "bg-white/20 text-white" : "text-[var(--navy-300)] hover:text-white"
              }`}
            >
              <Icon size={13} strokeWidth={2} />
            </button>
          ))}
        </div>
      </div>

      {/* Counters — bare, divided by hairlines. No boxes inside boxes. */}
      <div className="grid grid-cols-3 divide-x divide-[var(--line-soft)] border-b border-[var(--line-soft)]">
        {[
          ["Sessions", stats.sessions.toLocaleString(), "var(--ink)"],
          ["Clicks", stats.clicks.toLocaleString(), "var(--ink)"],
          ["Frustration", String(stats.frustration), fiColor(stats.frustration)],
        ].map(([k, v, color]) => (
          <div key={k} className="px-4 py-3">
            <p className={T.label} style={{ color: INK_DIM }}>
              {k}
            </p>
            <p className={`${T.num} mt-1 transition-colors`} style={{ color }}>
              {v}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className={`relative flex min-h-0 flex-1 flex-col overflow-hidden ${S.frame}`}>
          <BrowserBar url="northfield.store/merino-crewneck" />

          {toast && (
            <div
              className={`${S.raised} ${T.body} absolute left-1/2 top-12 z-30 flex -translate-x-1/2 items-center gap-2 px-3 py-2 font-medium text-[var(--danger)]`}
              role="status"
            >
              <TriangleAlert size={14} strokeWidth={2} />
              {toast}
            </div>
          )}

          {/* Fixed height in BOTH modes. The device toggle changes what the page
              looks like, never how much room the tile takes — so the mobile view
              is its own compact layout rather than the desktop one stacked. */}
          <div
            ref={stageRef}
            onMouseMove={onMove}
            onClick={onClick}
            className="relative min-h-[15rem] flex-1 cursor-crosshair select-none overflow-hidden"
          >
            {mobile ? (
              <div className="mx-auto h-full w-[17.5rem] px-4 pb-4 pt-4">
                <PhotoSlot className="h-[5.5rem] w-full rounded-[var(--r-md)]" />
                <h4 className={`${T.title} mt-3 text-[var(--ink)]`}>Merino Wool Crewneck</h4>
                <p className={`${T.num} mt-1 text-[var(--ink)]`}>$88.00</p>
                <p className={`${T.micro} mt-1 text-[var(--ink-muted)]`}>
                  <span className="text-[var(--warning)]">★★★★★</span> 4.8 · 214
                </p>
                <div className="mt-3 flex gap-1.5">
                  {["S", "M", "L", "XL"].map((s) => (
                    <span
                      key={s}
                      className={`${T.micro} rounded-[var(--r-sm)] border px-2.5 py-1 ${
                        s === "M"
                          ? "border-[var(--blue-500)] font-medium text-[var(--blue-600)]"
                          : "border-[var(--line)] text-[var(--ink)]"
                      }`}
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <p className={`${T.micro} mt-2.5 underline underline-offset-2`} style={{ color: INK_DIM }}>
                  Fit &amp; size guide
                </p>
                <div className={`${T.body} mt-3 w-full rounded-[var(--r-md)] bg-[var(--ink)]/90 py-2.5 text-center font-medium text-white`}>
                  Add to cart
                </div>
                <p
                  className={`${T.micro} mt-3 border-t border-[var(--line-soft)] pt-2.5 transition-colors duration-500`}
                  style={{ color: copyApplied ? "var(--ink)" : INK_DIM }}
                >
                  {copyApplied ? REWRITTEN_COPY : ORIGINAL_COPY}
                </p>
              </div>
            ) : (
              // Compact by design: the image stretches to whatever height the
              // text column needs, so the mockup tracks the stage instead of
              // setting its own height via an aspect ratio.
              <div className="flex h-full flex-col px-4 py-3 sm:px-5">
                <div className="grid min-h-0 flex-1 grid-cols-[1.05fr_1fr] gap-4">
                  <PhotoSlot className="rounded-[var(--r-md)]" />
                  <div className="flex flex-col">
                    <h4 className={`${T.title} text-[var(--ink)]`}>Merino Wool Crewneck</h4>
                    <p className={`${T.num} mt-1.5 text-[var(--ink)]`}>$88.00</p>
                    <p className={`${T.micro} mt-1 text-[var(--ink-muted)]`}>
                      <span className="text-[var(--warning)]">★★★★★</span> 4.8 · 214 reviews
                    </p>
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {["S", "M", "L", "XL"].map((s) => (
                        <span
                          key={s}
                          className={`${T.micro} rounded-[var(--r-sm)] border px-2.5 py-1 ${
                            s === "M"
                              ? "border-[var(--blue-500)] font-medium text-[var(--blue-600)]"
                              : "border-white/60 bg-white/35 text-[var(--ink)]"
                          }`}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    {/* Plain text on purpose — the dead element the frustration tab exposes. */}
                    <p className={`${T.micro} mt-2 underline underline-offset-2`} style={{ color: INK_DIM }}>
                      Fit &amp; size guide
                    </p>
                    <div className={`${T.body} mt-auto w-full rounded-[var(--r-md)] bg-[var(--ink)]/90 py-2 text-center font-medium text-white`}>
                      Add to cart
                    </div>
                  </div>
                </div>
                <p
                  className={`${T.micro} mt-2.5 shrink-0 truncate border-t border-[var(--line-soft)] pt-2 transition-colors duration-500`}
                  style={{ color: copyApplied ? "var(--ink)" : INK_DIM }}
                >
                  {copyApplied ? REWRITTEN_COPY : ORIGINAL_COPY}
                </p>
              </div>
            )}

            <canvas
              ref={canvasRef}
              className="pointer-events-none absolute inset-0 h-full w-full mix-blend-multiply"
              style={{ display: tab === "scroll" ? "none" : "block" }}
            />

            {cursor && tab !== "scroll" && (
              <div
                className="pointer-events-none absolute z-10 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-[var(--blue-600)] shadow-[0_0_0_4px_rgba(46,107,255,0.22)] transition-all duration-75"
                style={{ left: `${cursor[0] * 100}%`, top: `${cursor[1] * 100}%` }}
              />
            )}

            <div className="pointer-events-none absolute inset-0" style={{ display: tab === "scroll" ? "none" : "block" }}>
              {markers.map((m) => {
                const color = fiColor(m.fi);
                const above = parseInt(m.y) > 55;
                return (
                  <div
                    key={m.key}
                    onMouseEnter={() => setHover(m.key)}
                    onMouseLeave={() => setHover(null)}
                    className="pointer-events-auto absolute z-[6] -translate-x-1/2 -translate-y-1/2"
                    style={{ left: m.x, top: m.y }}
                  >
                    <div
                      className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border border-white/60 bg-white/70 shadow-[var(--shadow-xs)]"
                      style={{ color }}
                    >
                      <Info size={14} strokeWidth={2.2} />
                    </div>
                    {hover === m.key && (
                      <div
                        className={`${S.raised} absolute left-1/2 z-20 w-[13rem] -translate-x-1/2 p-3.5`}
                        style={above ? { bottom: 26 } : { top: 26 }}
                      >
                        <p className={`${T.title} text-[var(--ink)]`}>{m.label}</p>
                        <div className="mt-2.5 grid grid-cols-2 gap-2">
                          {[["Clicks", m.clicks], ["CTR", m.ctr]].map(([k, v]) => (
                            <div key={k}>
                              <p className={T.label} style={{ color: INK_DIM }}>
                                {k}
                              </p>
                              <p className={`${T.num} mt-0.5 text-[var(--ink)]`}>{v}</p>
                            </div>
                          ))}
                        </div>
                        <div className="mt-2.5 flex items-center justify-between">
                          <span className={T.label} style={{ color: INK_DIM }}>
                            Frustration
                          </span>
                          <span className={`${T.label} font-medium`} style={{ color }}>
                            {m.fiText}
                          </span>
                        </div>
                        {m.note && (
                          <p className={`${T.micro} mt-2.5 border-t border-[var(--line-soft)] pt-2 text-[var(--ink-muted)]`}>
                            {m.note}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {tab === "scroll" && (
              <div className="pointer-events-none absolute inset-0">
                {[
                  { top: "0", height: "38%", bg: "rgba(229,72,77,0.13)" },
                  { top: "38%", height: "26%", bg: "rgba(245,165,36,0.14)" },
                  { top: "64%", height: "20%", bg: "rgba(74,222,128,0.12)" },
                  { top: "84%", height: "16%", bg: "rgba(46,107,255,0.10)" },
                ].map((b) => (
                  <div key={b.top} className="absolute inset-x-0" style={{ top: b.top, height: b.height, background: b.bg }} />
                ))}
                {[
                  ["100% reach hero", "calc(38% - 18px)", "var(--danger)"],
                  ["61% reach add-to-cart", "calc(64% - 18px)", "var(--warning)"],
                  ["28% reach fabric details", "calc(84% - 18px)", "var(--success)"],
                ].map(([label, top, color]) => (
                  <span
                    key={label}
                    className={`${T.label} absolute left-4 rounded-[var(--r-xs)] bg-white/85 px-1.5 py-0.5`}
                    style={{ top, color }}
                  >
                    {label}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Replay transport — a bare row, no card around it. */}
        <div className="mt-3 flex items-center gap-3">
          <button
            onClick={() => {
              if (tab === "scroll") return;
              if (scrub >= 100) setScrub(0);
              setPlaying((p) => !p);
            }}
            disabled={tab === "scroll"}
            aria-label={playing ? "Pause replay" : "Play replay"}
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--ink)] text-white disabled:opacity-25"
          >
            {playing ? <Pause size={12} fill="currentColor" strokeWidth={0} /> : <Play size={12} fill="currentColor" strokeWidth={0} />}
          </button>
          <span className={`${T.label} shrink-0`} style={{ color: INK_DIM }}>
            Replay
          </span>
          <input
            type="range"
            min={0}
            max={100}
            value={scrub}
            disabled={tab === "scroll"}
            onChange={(e) => {
              setPlaying(false);
              setScrub(+e.target.value);
            }}
            className="w-full cursor-pointer accent-[var(--brand-accent)] disabled:opacity-25"
            aria-label="Scrub session replay"
          />
          <span className={`${T.label} w-9 shrink-0 text-right text-[var(--ink-muted)]`}>{scrub}%</span>
        </div>

        <p className={`${T.body} mt-3 text-[var(--ink-muted)]`}>
          {INSIGHTS[tab]}
          {tab !== "scroll" && (
            <span style={{ color: INK_DIM }}> Click three times in one spot to trip the detector.</span>
          )}
        </p>
      </div>
    </div>
  );
}
