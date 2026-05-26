import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/app/components/Footer";
import PillNav from "@/app/components/PillNav";

export const metadata: Metadata = {
  title: "DynoWeb Case Studies — Shopify CRO Results",
  description:
    "See how early-access Shopify merchants use DynoWeb to reduce friction, improve mobile conversion, and turn behavior data into revenue. Named case studies coming soon.",
  alternates: {
    canonical: "https://www.dynoweb.app/case-studies",
  },
  openGraph: {
    title: "DynoWeb Case Studies — Shopify CRO Results",
    description:
      "Pilot results from early-access merchants using DynoWeb for Shopify CRO — heatmaps, AI suggestions, and session replay driving measurable lifts.",
    url: "https://www.dynoweb.app/case-studies",
    siteName: "DynoWeb",
    type: "website",
  },
};

const pilotResults = [
  {
    label: "Beauty Brand — Shopify Plus",
    volume: "~8,000 sessions / month",
    challenge:
      "Mobile product pages had high scroll depth but low add-to-cart rates. The team suspected the CTA placement was the culprit but had no data to confirm.",
    whatDynoWebFound:
      "Click heatmaps showed that 60 % of thumb taps landed on the image gallery rather than the primary CTA. Scroll data confirmed most visitors never reached the variant picker. Session replays flagged repeated dead-clicks on a decorative badge overlapping the buy button on screens narrower than 390 px.",
    actionsAndOutcome:
      "The merchant repositioned the variant picker above the fold and increased the CTA tap target size using DynoWeb's implementation guide. Mobile CTA engagement increased by an estimated +18 % in the two weeks following the change. Full attributed revenue data is pending final analysis.",
    disclaimer: true,
  },
  {
    label: "Apparel Store — ~2,000 orders / month",
    volume: "~15,000 sessions / month",
    challenge:
      "A high-traffic collection page showed a strong bounce rate spike on mobile. Exit surveys pointed vaguely to 'couldn't find what I wanted' — not actionable on its own.",
    whatDynoWebFound:
      "Page-flow analysis revealed that visitors who entered through paid ads landed on a collection filtered by size, but the active filter state was invisible on mobile. Rage-click clusters appeared on the filter bar. Session replays confirmed that shoppers would scroll the full page, find nothing apparently matching, and leave — without realising a filter was applied.",
    actionsAndOutcome:
      "The team added a visible active-filter indicator using DynoWeb's theme-editor walkthrough (no developer required). Rage-click events on the filter bar dropped markedly in subsequent sessions. Estimated reduction in filter-related exits: approx. 22 % based on session comparison.",
    disclaimer: true,
  },
];

const pageShell = "relative w-full";
const pageShellStyle = { paddingInline: "clamp(1.25rem, 5vw, 7rem)" };

export default function CaseStudiesPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.dynoweb.app" },
      { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://www.dynoweb.app/case-studies" },
    ],
  };

  return (
    <>
      <PillNav />

      <main
        className="relative overflow-hidden bg-[#050505] pt-24 text-white"
        style={{ fontFamily: "'Karla', sans-serif" }}
      >
        <div className="absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.08),_transparent_42%),linear-gradient(180deg,_rgba(255,255,255,0.035),_transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:44px_44px] opacity-25" />

        {/* Hero */}
        <section className={`${pageShell} pb-12 pt-10 2xl:pb-16 2xl:pt-12`} style={pageShellStyle}>
          <p className="text-[0.78rem] font-extrabold uppercase tracking-[0.28em] text-zinc-500">
            Results from the field
          </p>
          <h1 className="mt-5 max-w-[22ch] font-[Montserrat] text-4xl font-extrabold leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl xl:text-[4.5rem] 2xl:text-[4.75rem]">
            How Shopify merchants improve conversion with DynoWeb
          </h1>
          <p className="mt-6 max-w-[66ch] text-base leading-8 text-zinc-300 sm:text-lg">
            DynoWeb is in active rollout with a cohort of early-access Shopify merchants. The pilot results below are real — observed from live sessions, not synthetic benchmarks. Full named case studies, with verified revenue attribution, will be published as merchants complete their first 90-day optimization cycles.
          </p>
          <p className="mt-3 inline-block rounded-full border border-amber-400/20 bg-amber-400/[0.07] px-4 py-2 text-sm font-medium text-amber-200">
            Pilot results — full named case studies coming soon
          </p>
        </section>

        {/* Pilot cards */}
        <section className={`${pageShell} pb-20 pt-4`} style={pageShellStyle}>
          <div className="mb-8 border-b border-white/10 pb-6">
            <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.28em] text-zinc-500">Early-access pilots</p>
            <h2 className="mt-3 font-[Montserrat] text-3xl font-extrabold tracking-[-0.03em] text-white sm:text-4xl">
              Anonymised results from merchants onboarded in 2025–2026
            </h2>
          </div>

          <div className="grid gap-6">
            {pilotResults.map((result) => (
              <article
                key={result.label}
                className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.015))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.2)] transition duration-200 hover:border-sky-300/20 lg:p-8"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-[Montserrat] text-xl font-extrabold tracking-tight text-white sm:text-2xl">
                    {result.label}
                  </h3>
                  <span className="rounded-full border border-sky-300/15 bg-sky-400/[0.07] px-3 py-1 text-xs font-extrabold uppercase tracking-[0.2em] text-sky-200">
                    {result.volume}
                  </span>
                </div>

                <div className="mt-6 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-[1.35rem] border border-white/10 bg-black/25 px-4 py-4">
                    <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-zinc-500">Challenge</p>
                    <p className="mt-2 text-[0.95rem] leading-7 text-zinc-300">{result.challenge}</p>
                  </div>
                  <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.02] px-4 py-4">
                    <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-zinc-500">What DynoWeb found</p>
                    <p className="mt-2 text-[0.95rem] leading-7 text-zinc-300">{result.whatDynoWebFound}</p>
                  </div>
                  <div className="rounded-[1.35rem] border border-sky-300/14 bg-sky-400/[0.05] px-4 py-4">
                    <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-sky-200/80">Actions &amp; outcome</p>
                    <p className="mt-2 text-[0.95rem] leading-7 text-zinc-200">{result.actionsAndOutcome}</p>
                  </div>
                </div>

                {result.disclaimer && (
                  <p className="mt-4 text-xs text-zinc-600">
                    Anonymised pilot data. Merchant name withheld. Metrics are observed estimates; full attribution analysis in progress.
                  </p>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* What we measure */}
        <section className={`${pageShell} pb-20`} style={pageShellStyle}>
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.015))] p-6 sm:p-8 lg:p-10">
            <p className="text-[0.74rem] font-extrabold uppercase tracking-[0.28em] text-zinc-500">What drives results</p>
            <h2 className="mt-4 font-[Montserrat] text-2xl font-extrabold tracking-[-0.03em] text-white sm:text-3xl">
              The signals DynoWeb surfaces for every merchant
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Rage-click clusters", detail: "Pinpoint buttons and overlays causing shopper frustration" },
                { label: "CTA visibility gaps", detail: "Scroll depth + click maps reveal buried primary actions" },
                { label: "Mobile dead-zones", detail: "Identify tap targets that fail on 390 px viewports" },
                { label: "Revenue-linked journeys", detail: "Connect page paths to actual Shopify order webhooks" },
              ].map((item) => (
                <div key={item.label} className="rounded-[1.35rem] border border-white/10 bg-black/20 px-4 py-4">
                  <p className="text-sm font-extrabold text-white">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-zinc-400">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={`${pageShell} pb-24`} style={pageShellStyle}>
          <div className="rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.08),transparent_48%),linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] sm:p-8 lg:p-10">
            <p className="text-[0.74rem] font-extrabold uppercase tracking-[0.28em] text-zinc-500">Get started</p>
            <h2 className="mt-4 font-[Montserrat] text-3xl font-extrabold leading-[1.06] tracking-[-0.04em] text-white sm:text-4xl lg:text-[3rem]">
              Add your store to the next cohort
            </h2>
            <p className="mt-5 max-w-[58ch] text-base leading-8 text-zinc-300 sm:text-lg">
              Install DynoWeb on the Shopify App Store and start generating your own optimization results. Want to be featured in a future case study? Reach out directly.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://apps.shopify.com/dynoweb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-black bg-white px-7 py-3 text-sm font-extrabold text-black shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition hover:bg-zinc-100"
              >
                Install DynoWeb free
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="mailto:help@dynoweb.app"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-extrabold text-zinc-200 transition hover:border-white/15 hover:bg-white/[0.06] hover:text-white"
              >
                Be a featured customer →
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
