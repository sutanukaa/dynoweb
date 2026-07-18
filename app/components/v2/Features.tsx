"use client";

import { useEffect, useRef, useState } from "react";
import WaveBg from "./WaveBg";

const FEATURES = [
  { word: "heatmaps.", img: "/Heatmaps.png", href: "/features/heatmaps", badge: "Click · scroll · rage maps" },
  { word: "replays.", img: "/sessionReplay.png", href: "/features/session-replay", badge: "rrweb · up to 90-day retention" },
  { word: "AI fixes.", img: "/AISuggestions.png", href: "/features/ai-suggestions", badge: "Ranked & PECTI-scored" },
  { word: "attribution.", img: "/RevenueAttribution.png", href: "/features/revenue-attribution", badge: "Deterministic + fingerprint" },
  { word: "nudges.", img: "/SmartNudge.png", href: "/features/smartnudge", badge: "Behavior-triggered, live" },
  { word: "AI agents.", img: "/DynoAgent.png", href: "/features/dynoagent", badge: "Gemini · approval flow" },
  { word: "CRO reports.", img: "/CROReport.png", href: "/shopify-cro", badge: "200 pages analysed" },
];

// Longest word — sets the slot width so the line never reflows as words swap.
const SIZER = "attribution.";

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Measure once (and on resize) so the scroll handler never forces a layout.
    let sectionTop = 0;
    let total = 0;
    const measure = () => {
      const rect = el.getBoundingClientRect();
      sectionTop = rect.top + window.scrollY;
      total = el.offsetHeight - window.innerHeight;
    };

    let raf = 0;
    const update = () => {
      raf = 0;
      const scrolled = Math.min(Math.max(window.scrollY - sectionTop, 0), total);
      const progress = total > 0 ? scrolled / total : 0;
      const idx = Math.min(FEATURES.length - 1, Math.floor(progress * FEATURES.length));
      setActive(idx);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    const onResize = () => {
      measure();
      update();
    };

    measure();
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="font-inter relative w-full bg-white"
      style={{ height: `${FEATURES.length * 70}vh` }}
    >
      {/* Sticky stage — pinned below the navbar while you scroll the whole section */}
      <div className="sticky top-16 flex h-[calc(100vh-4rem)] w-full flex-col items-center justify-center gap-6 px-[clamp(1.25rem,5vw,4rem)]">
        {/* Ambient brand-blue glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(48% 42% at 84% 14%, #e8efff 0%, transparent 58%), radial-gradient(44% 46% at 12% 88%, rgba(46,107,255,0.08) 0%, transparent 62%)",
          }}
        />
        <WaveBg />
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[var(--ink-muted)]">
          One platform, the whole loop
        </p>

        {/* Cycling headline — all on one line */}
        <h2 className="font-display whitespace-nowrap text-center text-[clamp(1.75rem,6vw,4rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-[#0a1633]">
          <span className="text-[#9aa7c2]">One app for </span>
          <span className="relative inline-block text-left align-baseline">
            <span className="invisible" aria-hidden="true">
              {SIZER}
            </span>
            {FEATURES.map((f, i) => (
              <span
                key={f.word}
                className="feat-word absolute left-0 top-0 transition-all duration-500 ease-out"
                style={{
                  opacity: i === active ? 1 : 0,
                  transform: i === active ? "translateY(0)" : "translateY(10px)",
                }}
              >
                {f.word}
              </span>
            ))}
          </span>
        </h2>

        {/* Synced screenshots — slide up and stack over each other */}
        <div className="dw-shot w-full max-w-[900px]">
          <div className="relative aspect-[2.1/1] w-full overflow-hidden rounded-[8px] bg-white">
            {FEATURES.map((f, i) => (
              <div
                key={f.img}
                className="absolute inset-0 bg-white transition-transform duration-[600ms] ease-out [will-change:transform]"
                style={{
                  transform: i <= active ? "translateY(0)" : "translateY(103%)",
                  zIndex: i + 1,
                }}
              >
                <img
                  src={f.img}
                  alt=""
                  className="h-full w-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
                {/* Near-transparent glass badge */}
                <span className="absolute bottom-4 left-4 inline-flex items-center rounded-full border border-white/40 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-[#0a1633] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-xl backdrop-saturate-150">
                  {f.badge}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Progress dots */}
        <div className="mt-2 flex items-center gap-2">
          {FEATURES.map((f, i) => (
            <span
              key={f.word}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === active ? 22 : 6,
                backgroundColor: i === active ? "#1e55e0" : "#c7d0e0",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
