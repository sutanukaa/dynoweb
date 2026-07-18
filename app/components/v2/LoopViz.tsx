"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronRight, DollarSign, Eye, RefreshCw, Wrench, X } from "lucide-react";

// The loop no competitor completes — SEE → FIX → PROVE → STAY (dynoweb-offer.md §2.5).
// Steps light up in sequence when the section scrolls into view.
const STEPS = [
  { label: "See", sub: "where you lose sales", Icon: Eye },
  { label: "Fix", sub: "it for you", Icon: Wrench },
  { label: "Prove", sub: "the money back", Icon: DollarSign },
  { label: "Stay", sub: "working for you", Icon: RefreshCw },
];
const TRACKS = [
  { name: "Free tools", pct: "25%", verdict: "Leaves you stuck", ok: false, hero: false },
  { name: "Paid popups", pct: "50%", verdict: "No proof, surprise bills", ok: false, hero: false },
  { name: "DynoWeb", pct: "100%", verdict: "Closes the loop", ok: true, hero: true },
];

export default function LoopViz() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="mx-auto mt-9 max-w-[860px]">
      {/* The four steps — light up in sequence */}
      <div className="flex items-stretch gap-2 sm:gap-3">
        {STEPS.map((s, i) => (
          <div key={s.label} className="flex flex-1 items-center gap-2 sm:gap-3">
            <div
              className={`flex-1 rounded-2xl border p-3.5 text-center backdrop-blur-sm transition-all duration-500 ease-out sm:p-5 ${
                active
                  ? "border-white/30 bg-white/15 shadow-[0_0_34px_-6px_rgba(139,227,192,0.45)]"
                  : "border-white/10 bg-white/[0.04]"
              }`}
              style={{ transitionDelay: active ? `${i * 200}ms` : "0ms" }}
            >
              <span
                className={`mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-500 ${
                  active ? "border-white/25 bg-white/15" : "border-white/10 bg-white/[0.03]"
                }`}
                style={{ transitionDelay: active ? `${i * 200}ms` : "0ms" }}
              >
                <s.Icon
                  className={`h-[18px] w-[18px] transition-colors duration-500 ${active ? "text-white" : "text-white/30"}`}
                  strokeWidth={2}
                />
              </span>
              <span
                className={`block font-display text-lg font-semibold transition-colors duration-500 sm:text-xl ${active ? "text-white" : "text-white/40"}`}
                style={{ transitionDelay: active ? `${i * 200}ms` : "0ms" }}
              >
                {s.label}
              </span>
              <p
                className={`mt-1 text-xs leading-tight transition-colors duration-500 ${active ? "text-white/60" : "text-white/25"}`}
                style={{ transitionDelay: active ? `${i * 200}ms` : "0ms" }}
              >
                {s.sub}
              </p>
            </div>
            {i < STEPS.length - 1 && (
              <ChevronRight
                className={`h-5 w-5 shrink-0 transition-colors duration-500 ${active ? "text-white/55" : "text-white/15"}`}
                strokeWidth={2.5}
                style={{ transitionDelay: active ? `${i * 200 + 100}ms` : "0ms" }}
              />
            )}
          </div>
        ))}
      </div>

      {/* How far each tool actually gets — bars fill in after the steps */}
      <div className="mt-6 space-y-2.5">
        {TRACKS.map((t, ti) => (
          <div
            key={t.name}
            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 sm:gap-4 ${t.hero ? "bg-white/10 ring-1 ring-white/25" : ""}`}
          >
            <span
              className={`w-20 shrink-0 text-sm font-semibold sm:w-28 ${t.hero ? "text-white" : "text-white/70"}`}
            >
              {t.name}
            </span>
            <div className="relative h-3 flex-1 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full transition-[width] duration-700 ease-out"
                style={{
                  width: active ? t.pct : "0%",
                  transitionDelay: `${900 + ti * 180}ms`,
                  background: t.ok ? "linear-gradient(90deg,#8fe3c0,#a3adf5)" : "rgba(255,255,255,0.35)",
                }}
              />
            </div>
            <span
              className={`flex w-28 shrink-0 items-center gap-1 text-[11px] font-medium sm:w-40 sm:text-xs ${t.ok ? "text-[#a7f3d0]" : "text-white/50"}`}
            >
              {t.ok ? (
                <Check className="h-3.5 w-3.5 shrink-0" strokeWidth={3} />
              ) : (
                <X className="h-3.5 w-3.5 shrink-0" strokeWidth={3} />
              )}
              {t.verdict}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
