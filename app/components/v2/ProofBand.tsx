"use client";

import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

// Beat: proof in dollars. Money-first, outcomes never capabilities, and honest —
// these are leaks CAUGHT on live stores (the SEE act), not fabricated recoveries.
// Obeys dynoweb-landing-page.md copy-safety + offer §3/§8 (P8: never invent a lift).
const PROOF = [
  {
    value: "₹3.97L",
    label: "in sales tracked to real shoppers",
    note: "Every fix measured against real revenue — not guesses.",
    store: "Sahasika",
    href: "/use-cases#sahasika",
  },
  {
    value: "52,370",
    label: "frustrated shoppers spotted leaving",
    note: "Tapping something that wasn't a link — invisible until now.",
    store: "The Punarvasu",
    href: "/use-cases#punarvasu",
  },
  {
    value: "33",
    label: "sales-blocking errors caught live",
    note: "Silent checkout breakers, surfaced as shoppers hit them.",
    store: "Skyline Decor",
    href: "/use-cases#skyline",
  },
  {
    value: "1 button",
    label: "no one could tap — found",
    note: "One misplaced click on the page that mattered most.",
    store: "Yetibeds",
    href: "/use-cases#yetibeds",
  },
];

export default function ProofBand() {
  const [go, setGo] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setGo(entry.isIntersecting), {
      threshold: 0.25,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      className="font-inter relative w-full overflow-hidden"
      style={{
        background: "linear-gradient(165deg, #2536b8 0%, #1a2aa1 55%, #121a7a 100%)",
      }}
    >
      {/* Aurora mesh — drifting, high-contrast blobs behind the glass */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="dw-aurora-blob absolute -left-[5%] top-[2%] h-[26rem] w-[26rem] rounded-full bg-[#7c88ee] opacity-80 blur-[65px]" style={{ animation: "dw-aurora-a 10s ease-in-out infinite" }} />
        <div className="dw-aurora-blob absolute -right-[3%] -top-[8%] h-[24rem] w-[24rem] rounded-full bg-[#a3adf5] opacity-75 blur-[65px]" style={{ animation: "dw-aurora-b 12s ease-in-out infinite" }} />
        <div className="dw-aurora-blob absolute bottom-[-18%] left-[28%] h-[30rem] w-[30rem] rounded-full bg-[#4657d6] opacity-85 blur-[70px]" style={{ animation: "dw-aurora-c 9s ease-in-out infinite" }} />
        <div className="dw-aurora-blob absolute bottom-[-12%] right-[8%] h-[22rem] w-[22rem] rounded-full bg-[#0e1560] opacity-85 blur-[65px]" style={{ animation: "dw-aurora-a 11s ease-in-out infinite reverse" }} />
        <div className="dw-aurora-blob absolute top-[26%] left-[42%] h-[20rem] w-[20rem] rounded-full bg-[#9a8cf0] opacity-55 blur-[70px]" style={{ animation: "dw-aurora-b 13s ease-in-out infinite" }} />
      </div>

      {/* Floating accent pills (desktop only) — wiggle when the section scrolls in */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <span
          className={`absolute left-[7%] top-[16%] inline-flex -rotate-6 items-center rounded-full border border-white/50 bg-white/85 px-4 py-2 text-sm font-semibold text-[#1a2b6b] shadow-[0_12px_30px_-10px_rgba(10,22,51,0.5)] backdrop-blur-md ${go ? "dw-wiggle-l" : ""}`}
        >
          Built for Shopify
        </span>
        <span
          className={`absolute right-[8%] top-[13%] inline-flex rotate-6 items-center gap-1.5 rounded-full border border-white/50 bg-white/85 px-4 py-2 text-sm font-semibold text-[#1a2b6b] shadow-[0_12px_30px_-10px_rgba(10,22,51,0.5)] backdrop-blur-md ${go ? "dw-wiggle-r" : ""}`}
        >
          <Star className="h-4 w-4 fill-[#f5a524] text-[#f5a524]" /> 5.0 rating
        </span>
      </div>

      <div className="relative mx-auto max-w-[1200px] px-[clamp(1.25rem,5vw,4rem)] py-24 text-center">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-white/70">
          Proven on real stores
        </p>
        <h2 className="font-display mx-auto mt-4 max-w-[22ch] text-[clamp(1.875rem,3.4vw,2.6rem)] font-semibold leading-[1.12] tracking-[-0.025em] text-white">
          Real Shopify stores. Real leaks found.
        </h2>
        <p className="mx-auto mt-4 max-w-[54ch] text-base leading-relaxed text-white/75 sm:text-lg">
          Running live across India and the US. Every number below is a lost-sale leak
          DynoWeb actually caught on a real store &mdash; before the fix.
        </p>

        <div ref={gridRef} className="mx-auto mt-12 grid max-w-[960px] grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4">
          {PROOF.map(({ value, label, note, store, href }) => (
            <a
              key={store}
              href={href}
              className={`dw-proof-card group relative flex flex-col items-center overflow-hidden rounded-2xl border border-white/60 bg-white/75 px-5 py-7 text-center shadow-[0_20px_50px_-20px_rgba(10,22,51,0.5),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-xl ${
                go ? "shine-go" : ""
              }`}
            >
              <span aria-hidden="true" className="dw-shine" />
              <span className="font-display text-3xl font-semibold tabular-nums tracking-[-0.02em] text-[#0e1f45]">
                {value}
              </span>
              <span className="mt-1.5 text-sm font-medium text-[#4a5a7a]">{label}</span>
              <span className="mt-3 text-xs leading-snug text-[#5a6a8a]">{note}</span>
              <span className="mt-4 border-t border-[#0e1f45]/10 pt-3 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#6b7ba0] transition-colors group-hover:text-[#1e55e0]">
                {store}
              </span>
            </a>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="/use-cases"
            className="dw-ripple-btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2"
          >
            Read the case studies
          </a>
        </div>
      </div>
    </section>
  );
}
