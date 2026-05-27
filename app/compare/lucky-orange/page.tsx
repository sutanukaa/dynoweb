import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/app/components/Footer";
import PillNav from "@/app/components/PillNav";

export const metadata: Metadata = {
  title: "DynoWeb vs Lucky Orange — Compare Shopify CRO Apps",
  description:
    "Lucky Orange bundles heatmaps, recordings, surveys, and live chat. DynoWeb focuses on what Shopify merchants need most: AI-prioritised fix recommendations with code-level guides and native revenue attribution.",
  alternates: {
    canonical: "https://www.dynoweb.app/compare/lucky-orange",
  },
  openGraph: {
    title: "DynoWeb vs Lucky Orange — Compare Shopify CRO Apps",
    description:
      "DynoWeb vs Lucky Orange: native Shopify CRO tool with AI suggestions vs bundled heatmap and live-chat platform. See which fits your store.",
    url: "https://www.dynoweb.app/compare/lucky-orange",
    siteName: "DynoWeb",
    type: "website",
  },
};

const features = [
  { feature: "Heatmaps", dynoweb: true, lo: true },
  { feature: "Session recordings", dynoweb: true, lo: true },
  { feature: "Scroll depth maps", dynoweb: true, lo: true },
  { feature: "Rage-click / dead-click detection", dynoweb: true, lo: true },
  { feature: "AI-prioritised fix suggestions", dynoweb: true, lo: false },
  { feature: "Code-level implementation guides", dynoweb: true, lo: false },
  { feature: "Draft-theme preview before pushing", dynoweb: true, lo: false },
  { feature: "Shopify-native app", dynoweb: true, lo: true },
  { feature: "Add-to-cart funnel with order attribution", dynoweb: true, lo: false },
  { feature: "Customer Privacy API / GDPR compliance", dynoweb: true, lo: "Partial" },
  { feature: "Live chat widget", dynoweb: false, lo: true },
  { feature: "On-site surveys", dynoweb: false, lo: true },
  { feature: "Announcement bars", dynoweb: false, lo: true },
  { feature: "SmartNudge — behavioral exit-intent", dynoweb: true, lo: false },
  { feature: "Free tier", dynoweb: true, lo: true },
  { feature: "Tracker weight", dynoweb: "< 40 KB", lo: "~70 KB+" },
];

const faqs = [
  {
    q: "How does DynoWeb's approach differ from Lucky Orange?",
    a: "Lucky Orange is a bundled toolkit: you get heatmaps, session replay, surveys, live chat, and announcement bars in one subscription. That breadth suits teams who want multiple visitor engagement tools under one roof. DynoWeb takes a narrower, deeper approach — it focuses on the conversion optimization workflow: capture behavioral signals, generate AI-prioritised fix recommendations, and provide step-by-step implementation guides so merchants can act without a developer. Where Lucky Orange gives you data and communication tools, DynoWeb gives you a diagnostic and action pipeline specifically tuned for Shopify.",
  },
  {
    q: "Does Lucky Orange have a Shopify app?",
    a: "Yes. Lucky Orange has a Shopify app in the App Store. DynoWeb is also a native Shopify app. The key difference in native integration is that DynoWeb uses Shopify's order webhooks to attribute revenue to specific page journeys and sessions, while Lucky Orange's revenue tracking relies on script-based event capture rather than server-side order data.",
  },
  {
    q: "What is DynoWeb's SmartNudge and does Lucky Orange have something similar?",
    a: "SmartNudge is DynoWeb's behavioral exit-intent system. It watches for abandonment signals — rage clicks, extended dwell with no cart action, cursor movement toward the browser chrome — and fires a targeted message at the right moment. Lucky Orange offers announcement bars and popups, but they are not triggered by real-time behavioral signals from the session. DynoWeb's nudges are condition-driven and frequency-capped automatically.",
  },
  {
    q: "Can I use DynoWeb if I already pay for Lucky Orange?",
    a: "Yes. DynoWeb installs as a separate Shopify app and doesn't interfere with Lucky Orange's scripts. Many merchants evaluate both and decide based on where they want to focus budget — on the broader communication toolkit or on the AI-driven fix recommendation workflow.",
  },
];

const pageShell = "relative w-full";
const pageShellStyle = { paddingInline: "clamp(1.25rem, 5vw, 7rem)" };

export default function VsLuckyOrangePage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.dynoweb.app" },
      { "@type": "ListItem", position: 2, name: "Compare", item: "https://www.dynoweb.app/compare" },
      { "@type": "ListItem", position: 3, name: "DynoWeb vs Lucky Orange", item: "https://www.dynoweb.app/compare/lucky-orange" },
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
            DynoWeb vs Lucky Orange for Shopify
          </h1>
          <p className="mt-6 max-w-[66ch] text-base leading-8 text-zinc-300 sm:text-lg">
            Lucky Orange bundles heatmaps, session recordings, live chat, surveys, and announcement bars into a single platform. DynoWeb takes a different bet: instead of bundling more tools, it goes deeper on the one workflow that moves the conversion needle — turning behavioral signals into AI-prioritised fix recommendations with code-level implementation guides, native Shopify revenue attribution, and a sub-40 KB tracker. Here is how they compare.
          </p>
        </section>

        {/* Who each is for */}
        <section className={`${pageShell} pb-16`} style={pageShellStyle}>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-6 lg:p-8">
              <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.28em] text-zinc-500">Best for</p>
              <p className="mt-3 font-[Montserrat] text-xl font-extrabold tracking-tight text-white">DynoWeb</p>
              <ul className="mt-4 space-y-2 text-[0.95rem] leading-7 text-zinc-300">
                <li className="flex gap-2"><span className="mt-1 text-[#6eb0ff]">→</span>Shopify merchants who want an actionable fix pipeline, not a communication suite</li>
                <li className="flex gap-2"><span className="mt-1 text-[#6eb0ff]">→</span>Teams that need AI suggestions with step-by-step theme-editor or code-level walkthroughs</li>
                <li className="flex gap-2"><span className="mt-1 text-[#6eb0ff]">→</span>Stores prioritising a lightweight tracker and Customer Privacy API compliance</li>
                <li className="flex gap-2"><span className="mt-1 text-[#6eb0ff]">→</span>Merchants who want behavioral exit-intent (SmartNudge) driven by real session signals</li>
              </ul>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-6 lg:p-8">
              <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.28em] text-zinc-500">Best for</p>
              <p className="mt-3 font-[Montserrat] text-xl font-extrabold tracking-tight text-white">Lucky Orange</p>
              <ul className="mt-4 space-y-2 text-[0.95rem] leading-7 text-zinc-300">
                <li className="flex gap-2"><span className="mt-1 text-zinc-500">→</span>Merchants who also need live chat, NPS surveys, and announcement bars in one tool</li>
                <li className="flex gap-2"><span className="mt-1 text-zinc-500">→</span>Teams that want a broader visitor engagement platform alongside heatmaps and replay</li>
                <li className="flex gap-2"><span className="mt-1 text-zinc-500">→</span>Stores comfortable with a heavier tracker footprint in exchange for feature breadth</li>
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
                  <th className="px-5 py-4 text-center font-extrabold uppercase tracking-[0.18em] text-zinc-400" style={{ fontSize: "0.7rem" }}>Lucky Orange</th>
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
                      {row.lo === true ? (
                        <span className="text-zinc-300">✓</span>
                      ) : row.lo === false ? (
                        <span className="text-zinc-700">—</span>
                      ) : (
                        <span className="text-zinc-400">{row.lo}</span>
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
              Lucky Orange vs DynoWeb — frequently asked
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
              Less bundle. More action.
            </h2>
            <p className="mt-5 max-w-[58ch] text-base leading-8 text-zinc-300 sm:text-lg">
              DynoWeb skips the live chat and surveys to go deep on the one thing that drives Shopify revenue: turning session data into prioritised, implementable fixes. Install free on the Shopify App Store.
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
