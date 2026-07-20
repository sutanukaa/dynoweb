"use client";

import { useEffect, useRef, useState } from "react";
import { Search, TriangleAlert } from "lucide-react";

// Beat 4 — the leak report as a live artifact: scans on scroll, then reveals
// the dollar figure. Dramatizes the product finding the leak (dynoweb-offer.md Act 1).
const STATUSES = ["Scanning 200 pages…", "Watching real checkouts…", "Finding the drop-off…"];
const DURATION = 2200;

export default function LeakScan() {
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<"idle" | "scanning" | "done">("idle");
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhase("scanning");
          io.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (phase !== "scanning") return;
    let raf = 0;
    let start = 0;
    const tick = (ts: number) => {
      if (!start) start = ts;
      const t = Math.min(1, (ts - start) / DURATION);
      setProgress(Math.round(t * 100));
      setStatus(Math.min(STATUSES.length - 1, Math.floor(t * STATUSES.length)));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setPhase("done");
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [phase]);

  const done = phase === "done";

  return (
    <div ref={ref} className="relative mx-auto max-w-[640px]">
      {/* Scanning */}
      <div
        className="flex h-44 flex-col items-center justify-center gap-5 px-8 transition-opacity duration-500"
        style={{ opacity: done ? 0 : 1, position: done ? "absolute" : "relative", inset: 0 }}
        aria-hidden={done}
      >
        <div className="flex items-center gap-2.5 text-[var(--ink)]">
          <Search className="h-5 w-5 animate-pulse text-[var(--blue-600)]" strokeWidth={2.2} />
          <span className="font-display text-lg font-semibold">Scanning your store…</span>
        </div>
        <div className="h-2 w-full max-w-sm overflow-hidden rounded-full bg-[var(--line)]">
          <div className="h-full rounded-full bg-[var(--blue-600)]" style={{ width: `${progress}%` }} />
        </div>
        <p className="text-sm text-[var(--ink-muted)]">
          {STATUSES[status]} <span className="tabular-nums">· {progress}%</span>
        </p>
      </div>

      {/* Result — the leak-alert banner backed by a real screenshot, not just a claim */}
      <div
        className="flex flex-col gap-4 px-5 py-5 text-left transition-all duration-700 ease-out sm:px-6"
        style={{
          opacity: done ? 1 : 0,
          transform: done ? "none" : "translateY(10px)",
          position: done ? "relative" : "absolute",
          inset: 0,
        }}
        aria-hidden={!done}
      >
        <div className="flex w-full items-center gap-4 rounded-2xl border border-[#fecaca] border-l-[5px] border-l-[#dc2626] bg-gradient-to-r from-[#fef2f2] to-[#fff7f7] px-5 py-5 shadow-[0_8px_24px_-12px_rgba(220,38,38,0.35)] sm:px-6">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#dc2626]/10 text-[#dc2626]">
            <TriangleAlert className="h-5 w-5" strokeWidth={2.2} />
          </span>
          <div className="flex-1">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[#dc2626]">
              Biggest leak found
            </p>
            <p className="mt-1 font-display text-base font-semibold leading-snug text-[var(--ink)] sm:text-xl">
              You&rsquo;re losing{" "}
              <span className="tabular-nums text-[#dc2626]">~$3,200&ndash;$5,800/mo</span> at your
              shipping step.
            </p>
            <p className="mt-1 text-sm text-[var(--ink-muted)]">Here&rsquo;s why &mdash; and the fix.</p>
          </div>
        </div>

        {/* The evidence a report like this is actually built from — real session data,
            not just a number. Punarvasu's own scroll/friction data (design.md §8). */}
        <div className="dw-shot">
          <img
            src="/scrollHeatmap.png"
            alt="Real scroll and friction data from a live Shopify store — the evidence behind a leak report"
            width={1234}
            height={584}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  );
}
