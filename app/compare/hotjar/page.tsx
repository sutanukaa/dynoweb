import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/app/components/Footer";
import PillNav from "@/app/components/PillNav";

export const metadata: Metadata = {
  title: "DynoWeb vs Hotjar — Compare Shopify CRO Tools (2026)",
  description:
    "Compare DynoWeb and Hotjar for Shopify CRO. Hotjar observes; DynoWeb acts — AI-prioritised fix recommendations with code-level implementation guides built natively for Shopify.",
  alternates: {
    canonical: "https://www.dynoweb.app/compare/hotjar",
  },
  openGraph: {
    title: "DynoWeb vs Hotjar — Compare Shopify CRO Tools (2026)",
    description:
      "Side-by-side comparison of DynoWeb and Hotjar for Shopify merchants: heatmaps, session replay, AI suggestions, native integration, and pricing.",
    url: "https://www.dynoweb.app/compare/hotjar",
    siteName: "DynoWeb",
    type: "website",
  },
};

const features = [
  { feature: "Heatmaps", dynoweb: true, hotjar: true },
  { feature: "Session recordings", dynoweb: true, hotjar: true },
  { feature: "Scroll depth maps", dynoweb: true, hotjar: true },
  { feature: "Rage-click detection", dynoweb: true, hotjar: true },
  { feature: "AI-prioritised fix suggestions", dynoweb: true, hotjar: false },
  { feature: "Code-level implementation guides", dynoweb: true, hotjar: false },
  { feature: "Draft-theme preview before pushing", dynoweb: true, hotjar: false },
  { feature: "Shopify-native app (no tag required)", dynoweb: true, hotjar: false },
  { feature: "Shopify order webhook attribution", dynoweb: true, hotjar: false },
  { feature: "Customer Privacy API / GDPR compliance", dynoweb: true, hotjar: "Partial" },
  { feature: "Surveys & feedback widgets", dynoweb: false, hotjar: true },
  { feature: "Tracker weight", dynoweb: "< 40 KB", hotjar: "~80 KB" },
  { feature: "Free tier", dynoweb: true, hotjar: true },
];

const faqs = [
  {
    q: "Can I migrate from Hotjar to DynoWeb?",
    a: "Yes. DynoWeb installs as a Shopify app — no manual script tag required. Once installed, it starts collecting heatmap, click, and session data immediately. Your existing Hotjar recordings remain in Hotjar; DynoWeb builds its baseline from new traffic. Most merchants run both in parallel for a few weeks during transition, then drop Hotjar when DynoWeb's suggestion queue is mature enough to guide their roadmap.",
  },
  {
    q: "Does DynoWeb replace everything Hotjar does?",
    a: "DynoWeb covers the core behavioral data Hotjar is used for on Shopify stores: heatmaps, session replay, scroll depth, and rage-click detection. It adds what Hotjar does not: AI-generated fix recommendations with expected impact ratings, step-by-step implementation guides (theme-editor and code paths), and Shopify revenue attribution. Hotjar's survey and NPS widgets have no direct equivalent in DynoWeb today.",
  },
  {
    q: "Which is better for a non-technical Shopify merchant?",
    a: "DynoWeb is designed specifically for Shopify merchants who want to act, not just observe. Every suggestion includes a theme-editor walkthrough that doesn't require touching code. Hotjar surfaces the data; DynoWeb tells you what to do with it and shows you exactly how.",
  },
];

const pageShell = "relative w-full";
const pageShellStyle = { paddingInline: "clamp(1.25rem, 5vw, 7rem)" };

export default function VsHotjarPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.dynoweb.app" },
      { "@type": "ListItem", position: 2, name: "Compare", item: "https://www.dynoweb.app/compare" },
      { "@type": "ListItem", position: 3, name: "DynoWeb vs Hotjar", item: "https://www.dynoweb.app/compare/hotjar" },
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
            Tool comparison — 2026
          </p>
          <h1 className="mt-5 max-w-[24ch] font-[Montserrat] text-4xl font-extrabold leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl xl:text-[4.5rem] 2xl:text-[4.75rem]">
            DynoWeb vs Hotjar for Shopify
          </h1>
          <p className="mt-6 max-w-[66ch] text-base leading-8 text-zinc-300 sm:text-lg">
            Hotjar is an observation tool — it shows you heatmaps, session recordings, and survey responses. DynoWeb is an action tool built natively for Shopify: it captures the same behavioral signals and then converts them into AI-prioritised fix recommendations with step-by-step implementation guides. Here is how they compare.
          </p>
        </section>

        {/* Who each is for */}
        <section className={`${pageShell} pb-16`} style={pageShellStyle}>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-6 lg:p-8">
              <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.28em] text-zinc-500">Best for</p>
              <p className="mt-3 font-[Montserrat] text-xl font-extrabold tracking-tight text-white">DynoWeb</p>
              <ul className="mt-4 space-y-2 text-[0.95rem] leading-7 text-zinc-300">
                <li className="flex gap-2"><span className="mt-1 text-[#6eb0ff]">→</span>Shopify merchants who want actionable fix recommendations, not raw data to interpret</li>
                <li className="flex gap-2"><span className="mt-1 text-[#6eb0ff]">→</span>Non-technical teams who need guided implementation (theme editor and code paths)</li>
                <li className="flex gap-2"><span className="mt-1 text-[#6eb0ff]">→</span>Stores that want revenue-attributed journey analysis tied to real Shopify orders</li>
                <li className="flex gap-2"><span className="mt-1 text-[#6eb0ff]">→</span>Merchants who prioritize a lightweight tracker (&lt; 40 KB) and native privacy compliance</li>
              </ul>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-6 lg:p-8">
              <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.28em] text-zinc-500">Best for</p>
              <p className="mt-3 font-[Montserrat] text-xl font-extrabold tracking-tight text-white">Hotjar</p>
              <ul className="mt-4 space-y-2 text-[0.95rem] leading-7 text-zinc-300">
                <li className="flex gap-2"><span className="mt-1 text-zinc-500">→</span>Teams on any platform (not just Shopify) who need flexible observation tooling</li>
                <li className="flex gap-2"><span className="mt-1 text-zinc-500">→</span>UX researchers who need in-product surveys, NPS widgets, and user feedback collection</li>
                <li className="flex gap-2"><span className="mt-1 text-zinc-500">→</span>Agencies managing multi-platform clients who want a single behavior analytics tool</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className={`${pageShell} pb-20`} style={pageShellStyle}>
          <div className="mb-6 border-b border-white/10 pb-5">
            <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.28em] text-zinc-500">Feature comparison</p>
            <h2 className="mt-3 font-[Montserrat] text-3xl font-extrabold tracking-[-0.03em] text-white sm:text-4xl">
              Side-by-side breakdown
            </h2>
          </div>

          <div className="overflow-x-auto rounded-[2rem] border border-white/10">
            <table className="w-full min-w-[520px] text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03]">
                  <th className="px-5 py-4 text-left font-extrabold uppercase tracking-[0.18em] text-zinc-500" style={{ fontSize: "0.7rem" }}>Feature</th>
                  <th className="px-5 py-4 text-center font-extrabold uppercase tracking-[0.18em] text-[#6eb0ff]" style={{ fontSize: "0.7rem" }}>DynoWeb</th>
                  <th className="px-5 py-4 text-center font-extrabold uppercase tracking-[0.18em] text-zinc-400" style={{ fontSize: "0.7rem" }}>Hotjar</th>
                </tr>
              </thead>
              <tbody>
                {features.map((row, i) => (
                  <tr key={row.feature} className={`border-b border-white/[0.06] ${i % 2 === 0 ? "bg-white/[0.01]" : ""}`}>
                    <td className="px-5 py-3 text-zinc-300">{row.feature}</td>
                    <td className="px-5 py-3 text-center">
                      {row.dynoweb === true ? (
                        <span className="text-[#6eb0ff]">✓</span>
                      ) : row.dynoweb === false ? (
                        <span className="text-zinc-700">—</span>
                      ) : (
                        <span className="text-zinc-300">{row.dynoweb}</span>
                      )}
                    </td>
                    <td className="px-5 py-3 text-center">
                      {row.hotjar === true ? (
                        <span className="text-zinc-300">✓</span>
                      ) : row.hotjar === false ? (
                        <span className="text-zinc-700">—</span>
                      ) : (
                        <span className="text-zinc-400">{row.hotjar}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section className={`${pageShell} pb-20`} style={pageShellStyle}>
          <div className="mb-8 border-b border-white/10 pb-5">
            <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.28em] text-zinc-500">Common questions</p>
            <h2 className="mt-3 font-[Montserrat] text-2xl font-extrabold tracking-[-0.03em] text-white sm:text-3xl">
              Switching from Hotjar?
            </h2>
          </div>
          <div className="grid gap-4">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-5 sm:p-6">
                <p className="font-extrabold text-white">{item.q}</p>
                <p className="mt-3 text-[0.95rem] leading-7 text-zinc-300">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className={`${pageShell} pb-24`} style={pageShellStyle}>
          <div className="rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.08),transparent_48%),linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] sm:p-8 lg:p-10">
            <p className="text-[0.74rem] font-extrabold uppercase tracking-[0.28em] text-zinc-500">Try DynoWeb</p>
            <h2 className="mt-4 font-[Montserrat] text-3xl font-extrabold leading-[1.06] tracking-[-0.04em] text-white sm:text-4xl">
              Move from observing to actually fixing
            </h2>
            <p className="mt-5 max-w-[58ch] text-base leading-8 text-zinc-300 sm:text-lg">
              DynoWeb gives you the same behavioral visibility as Hotjar, plus AI suggestions that tell you exactly what to change and how — built natively for Shopify.
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
              <Link
                href="/use-cases"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-extrabold text-zinc-200 transition hover:border-white/15 hover:bg-white/[0.06] hover:text-white"
              >
                See use cases
              </Link>
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
