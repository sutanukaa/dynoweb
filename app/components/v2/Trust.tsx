import { Check } from "lucide-react";

import HighlightMarker from "./HighlightMarker";

const APP_URL = "https://apps.shopify.com/dynoweb";

// Beats 8–9 of dynoweb-landing-page.md — honest billing (the category's open
// wound, made a pillar) + the outcome-gated "you literally cannot get burned".

const BILLING = [
  ["No surprise charges", "you always know what you'll pay."],
  ["Bots don't burn your quota", "you pay for real shoppers, nobody else."],
  ["A real human answers", ""],
  ["Your data stays yours", "not fed to an ad giant."],
  ["Won't slow your store", "and we'll prove it."],
];

const STEPS = [
  ["We find your biggest lost-sale leak", "free."],
  ["We deploy the first fix", "free."],
  ["You watch it recover sales", ""],
  ["You only pay to keep it running", "once it's already made you money."],
];

export default function Trust() {
  return (
    <section className="font-inter w-full bg-white">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-[clamp(1.25rem,5vw,4rem)] py-24 md:grid-cols-2 md:gap-16">
        {/* 8 · Honest billing */}
        <div className="dw-reveal dw-reveal-left">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[var(--ink-muted)]">
            Honest billing
          </p>
          <h2 className="font-display mt-5 text-[clamp(1.75rem,2.6vw,2.25rem)] font-semibold leading-[1.12] tracking-[-0.025em] text-[var(--ink)]">
            No surprise charges. <HighlightMarker>Ever.</HighlightMarker>
          </h2>
          <ul className="mt-8 space-y-4">
            {BILLING.map(([lead, rest]) => (
              <li key={lead} className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-[#10805c]" strokeWidth={2.5} />
                <p className="text-[var(--ink-muted)]">
                  <strong className="font-semibold text-[var(--ink)]">{lead}</strong>
                  {rest ? ` — ${rest}` : ""}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* 9 · You literally cannot get burned — blue glassmorphic */}
        <div
          className="dw-reveal dw-reveal-right relative overflow-hidden rounded-[2rem] border border-white/20 p-8 shadow-[0_30px_70px_-30px_rgba(10,22,51,0.55),inset_0_1px_0_rgba(255,255,255,0.28)] backdrop-blur-2xl sm:p-10"
          style={{
            background:
              "linear-gradient(160deg, rgba(52,73,220,0.88) 0%, rgba(33,46,150,0.92) 55%, rgba(20,29,110,0.94) 100%)",
          }}
        >
          {/* Soft aurora glow for the frosted look */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-[#7c88ee] opacity-40 blur-[70px]" />
            <div className="absolute -bottom-12 -left-8 h-56 w-56 rounded-full bg-[#4657d6] opacity-40 blur-[70px]" />
          </div>

          <div className="relative">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white/70">
              You literally cannot get burned
            </p>
            <ol className="mt-8 space-y-5">
              {STEPS.map(([lead, rest], i) => (
                <li key={lead} className="flex items-start gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-[var(--blue-600)] shadow-[0_4px_12px_-4px_rgba(10,22,51,0.5)]">
                    {i + 1}
                  </span>
                  <p className="text-white/75">
                    <strong className="font-semibold text-white">{lead}</strong>
                    {rest ? ` — ${rest}` : ""}
                  </p>
                </li>
              ))}
            </ol>
            <p className="mt-8 font-display text-lg font-semibold text-white">
              Recover nothing, owe nothing.
            </p>
            <div className="mt-6">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-[10px] bg-white px-6 py-3 text-sm font-semibold text-[var(--ink)] shadow-[0_10px_24px_-8px_rgba(10,22,51,0.5)] transition-colors hover:bg-white/90"
              >
                Find my leak free &mdash; start now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
