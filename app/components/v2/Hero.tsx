import { Check } from "lucide-react";

import { LetterCascade } from "@/components/ui/letter-cascade";
import InstallFreeButton from "./InstallFreeButton";
import SpinBorder from "./SpinBorder";

const TICKS = [
  "Free to see the leak",
  "You approve every change",
  "No surprise charges, ever",
];

export default function Hero() {
  return (
    <section className="font-inter relative isolate flex w-full flex-col items-center overflow-hidden pb-16 pt-8">
      {/* Background — one soft light source behind the shot below, per design.md §5.
          No grid, no particles: the screenshot is the artwork, nothing competes with it. */}
      <div className="absolute inset-0 -z-10 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(900px_480px_at_50%_10%,rgba(46,107,255,0.10),transparent_62%)]" />
      </div>

      <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-6 py-16">
        {/* Announcement badge — animated spinning-border pill */}
        <a href="#leak" className="mb-8">
          <SpinBorder>
            <span className="inline-flex cursor-pointer items-center justify-center rounded-full bg-white/70 px-3 py-1 text-xs font-medium leading-5 text-slate-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-xl backdrop-saturate-150">
              Free leak report ⚡️
              <span className="inline-flex items-center pl-2 text-slate-900">See yours</span>
            </span>
          </SpinBorder>
        </a>

        {/* Headline — the merchant's own words */}
        <h1 className="font-display text-center text-3xl font-semibold text-gray-900 sm:text-6xl">
          <span className="block">Traffic but no sales &mdash;</span>
          <span className="mt-2 block">
            <span className="relative inline-block">
              {/* Blue highlighter marker — sweeps in behind the black text on load */}
              <svg
                className="dw-highlight-svg absolute left-[1%] top-0 z-0 h-full w-[98%]"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                fill="none"
                aria-hidden="true"
              >
                <g>
                  <path d="M2 52 C20 48,42 46,62 47 C78 48,90 50,98 49" stroke="#6eb0ff" strokeWidth="50" strokeLinecap="butt" opacity="0.45" fill="none" />
                  <path d="M2 51 C22 47,46 45,66 46 C80 47,91 49,98 48" stroke="#9dd8ff" strokeWidth="36" strokeLinecap="butt" opacity="0.5" fill="none" />
                  <path d="M4 34 C24 31,48 30,68 31 C82 32,92 33,98 32" stroke="#3a7adc" strokeWidth="2.5" strokeLinecap="butt" opacity="0.6" fill="none" />
                  <path d="M4 74 C24 71,50 70,70 71 C84 72,93 73,98 72" stroke="#3a7adc" strokeWidth="2" strokeLinecap="butt" opacity="0.4" fill="none" />
                </g>
              </svg>
              <LetterCascade
                text="and you don't know why?"
                staggerDuration={0.05}
                className="relative z-[1] align-baseline"
                letterClassName="text-gray-900"
              />
            </span>
          </span>
        </h1>

        {/* Sub-paragraph — it's not you, we find it, put a number on it, fix it free */}
        <p className="mt-6 max-w-xl text-center text-lg leading-7 text-gray-600">
          It&rsquo;s not you. One fixable thing is quietly costing you sales. We&rsquo;ll find it,
          put a dollar figure on it, and fix it &mdash; free. You only pay once it&rsquo;s made you
          money.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <SpinBorder radius="md">
            <InstallFreeButton
              label="Show me the leak — free"
              className="!flex !h-12 !w-auto items-center justify-center px-9 !border-transparent !bg-white/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-xl backdrop-saturate-150"
            />
          </SpinBorder>
          <SpinBorder radius="md">
            <a
              href="/use-cases#punarvasu"
              className="flex h-12 items-center justify-center whitespace-nowrap rounded-[10px] bg-white/40 px-7 text-sm font-medium text-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-xl backdrop-saturate-150 transition-colors duration-200 hover:bg-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2"
            >
              See a demo store
            </a>
          </SpinBorder>
        </div>

        {/* Trust ticks */}
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
          {TICKS.map((t) => (
            <li key={t} className="inline-flex items-center gap-1.5">
              <Check className="h-4 w-4 text-[#10805c]" strokeWidth={2.5} />
              {t}
            </li>
          ))}
        </ul>
      </div>

      {/* The shot — design.md §1/§12.1: "the highest-value pixel on any page is a
          real screenshot." Real Punarvasu click data, bleeding wider than the text
          column above. One glass chip straddles the edge — the only other allowed
          glass use besides the nav. */}
      <div className="relative mx-auto mt-4 w-full max-w-[1180px] px-6">
        <div className="dw-shot">
          <img
            src="/clickHeatmap.png"
            alt="Click heatmap showing where shoppers are tapping on a real product page, with 376 clicks recorded on one element"
            width={1228}
            height={634}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </div>
        <span className="dw-glass absolute -bottom-5 left-6 z-10 inline-flex items-center gap-2 rounded-[10px] px-4 py-2.5 text-sm font-semibold text-[var(--ink)] sm:left-10">
          <span className="tabular-nums text-[var(--blue-600)]">52,370</span> rage clicks — caught on
          one store
        </span>
      </div>
    </section>
  );
}
