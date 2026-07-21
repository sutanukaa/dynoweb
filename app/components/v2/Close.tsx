import { ArrowRight, Check, Eye, Rocket, TrendingUp } from "lucide-react";
import Bracket from "./Bracket";

import HighlightMarker from "./HighlightMarker";
import InstallFreeButton from "./InstallFreeButton";
import SpinBorder from "./SpinBorder";

// Beats 10–11 of dynoweb-landing-page.md — pricing (money-anchored) + final CTA.
// Deliberately NOT a feature matrix (offer §2.5 anti-menu). Interest comes from
// design, not more info: featured tier is the hero, each tier keeps ONE outcome line.

const APP_URL = "https://apps.shopify.com/dynoweb";

const TIERS = [
  {
    name: "Free",
    price: "$0",
    period: "",
    line: "See your leak, watch real shoppers",
    icon: Eye,
    cta: "See plan",
  },
  {
    name: "Growth",
    price: "$14",
    period: "/mo",
    line: "Keep your fixes live & recovering",
    icon: TrendingUp,
    cta: "Start recovering",
    featured: true,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/mo",
    line: "More traffic, more fixes",
    icon: Rocket,
    cta: "See plan",
  },
];

const MICRO = [
  "No credit card",
  "You approve every change",
  "No surprise charges, ever",
];

export default function Close() {
  return (
    <>
      {/* 10 · Pricing */}
      <section
        className="font-inter w-full"
        style={{
          background:
            "radial-gradient(62% 55% at 50% -5%, #eaf0ff 0%, transparent 60%), var(--paper)",
        }}
      >
        <div className="mx-auto max-w-[1040px] px-[clamp(1.25rem,5vw,4rem)] py-24">
          <div className="text-center">
            <Bracket>Pricing</Bracket>
            <h2 className="font-display mx-auto mt-5 max-w-[24ch] text-[clamp(1.75rem,2.8vw,2.4rem)] font-semibold leading-[1.12] tracking-[-0.025em] text-[var(--ink)]">
              Recover $1k&ndash;$4k/month, and $14&ndash;$29 is the best return
              you&rsquo;ll make all year.
            </h2>
          </div>

          <div className="mt-14 grid items-stretch gap-5 md:grid-cols-3">
            {TIERS.map((t) => {
              const Icon = t.icon;
              return (
                <a
                  key={t.name}
                  href="/pricing"
                  className={`group relative flex flex-col overflow-hidden rounded-[2rem] p-8 transition-all duration-300 hover:-translate-y-1.5 ${
                    t.featured
                      ? "border border-white/20 text-white shadow-[0_34px_80px_-28px_rgba(46,71,214,0.6),inset_0_1px_0_rgba(255,255,255,0.28)] md:-my-3 md:py-11"
                      : "border border-[var(--line)] bg-white shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-lg)]"
                  }`}
                  style={
                    t.featured
                      ? {
                          background:
                            "linear-gradient(160deg, rgba(52,73,220,0.97) 0%, rgba(33,46,150,0.98) 58%, #141d6e 100%)",
                        }
                      : undefined
                  }
                >
                  {/* Aurora glow behind the featured glass */}
                  {t.featured && (
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0"
                    >
                      <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-[#7c88ee] opacity-40 blur-[60px]" />
                      <div className="absolute -bottom-14 -left-8 h-48 w-48 rounded-full bg-[#4657d6] opacity-45 blur-[60px]" />
                    </div>
                  )}

                  <div className="relative flex h-full flex-col">
                    <div className="flex items-center justify-between">
                      <span
                        className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl ${
                          t.featured
                            ? "bg-white/15 text-white"
                            : "bg-[var(--blue-100)] text-[var(--blue-600)]"
                        }`}
                      >
                        <Icon className="h-5 w-5" strokeWidth={2.2} />
                      </span>
                      {t.featured && (
                        <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                          Most stores start here
                        </span>
                      )}
                    </div>

                    <div className="mt-6 flex items-baseline gap-1">
                      <span
                        className={`font-display text-4xl font-semibold tabular-nums tracking-[-0.03em] ${
                          t.featured ? "text-white" : "text-[var(--ink)]"
                        }`}
                      >
                        {t.price}
                      </span>
                      {t.period && (
                        <span
                          className={`text-sm font-medium ${
                            t.featured
                              ? "text-white/70"
                              : "text-[var(--ink-muted)]"
                          }`}
                        >
                          {t.period}
                        </span>
                      )}
                    </div>
                    <span
                      className={`mt-1 font-display text-lg font-semibold ${
                        t.featured ? "text-white" : "text-[var(--ink)]"
                      }`}
                    >
                      {t.name}
                    </span>

                    <p
                      className={`mt-3 text-sm leading-relaxed ${
                        t.featured ? "text-white/80" : "text-[var(--ink-muted)]"
                      }`}
                    >
                      {t.line}
                    </p>

                    {t.featured && (
                      <span className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold text-white">
                        <TrendingUp className="h-3.5 w-3.5" strokeWidth={2.5} />{" "}
                        &asymp;50&ndash;150&times; return
                      </span>
                    )}

                    <span
                      className={`mt-auto inline-flex items-center gap-1.5 pt-8 text-sm font-semibold ${
                        t.featured ? "text-white" : "text-[var(--blue-600)]"
                      }`}
                    >
                      {t.cta}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Soft callout — done-for-you (validate the motion before promoting louder) */}
          <p className="mx-auto mt-12 max-w-[52ch] text-center text-[var(--ink-muted)]">
            <strong className="font-semibold text-[var(--ink)]">
              Want us to just handle it?
            </strong>{" "}
            Done-for-you &mdash; we find, fix, and watch the numbers.{" "}
            <a
              href="/contact-us"
              className="font-semibold text-[var(--blue-600)] hover:underline"
            >
              Talk to us.
            </a>
          </p>
        </div>
      </section>

      {/* 11 · Final CTA */}
      <section className="font-inter relative w-full overflow-hidden bg-white">
        {/* Ambient interest — soft aurora glows behind the closer */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#dbe6ff] opacity-60 blur-[110px]" />
          <div
            className="absolute -left-12 top-8 h-64 w-64 rounded-full bg-[#c7d6ff] opacity-45 blur-[80px]"
            style={{ animation: "dw-float 9s ease-in-out infinite" }}
          />
          <div
            className="absolute -right-12 bottom-4 h-64 w-64 rounded-full bg-[#d9c9ff] opacity-35 blur-[80px]"
            style={{ animation: "dw-float 11s ease-in-out infinite reverse" }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[820px] px-[clamp(1.25rem,5vw,4rem)] py-28 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--ink-muted)] shadow-[var(--shadow-sm)] backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10b981] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10b981]" />
            </span>
            Free leak report
          </span>
          <h2 className="font-display mt-6 text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-[var(--ink)]">
            Stop watching them leave.
            <br className="hidden sm:block" /> Start fixing{" "}
            <HighlightMarker>why.</HighlightMarker>
          </h2>
          <p className="mx-auto mt-6 max-w-[48ch] text-lg leading-relaxed text-[var(--ink-muted)]">
            See why shoppers are leaving &mdash; in dollars &mdash; free. Fix
            it. Watch the sales come back. Pay only when they do.
          </p>
          <div className="mt-10 flex justify-center">
            <SpinBorder radius="md">
              <InstallFreeButton
                label="Show me what's costing me sales — free"
                className="!flex !h-12 !w-auto items-center justify-center px-9 !border-transparent !bg-white/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-xl backdrop-saturate-150"
              />
            </SpinBorder>
          </div>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[var(--ink-muted)]">
            {MICRO.map((m) => (
              <li key={m} className="inline-flex items-center gap-1.5">
                <Check className="h-4 w-4 text-[#10805c]" strokeWidth={2.5} />
                {m}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
