import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/app/components/Footer";
import PillNav from "@/app/components/PillNav";

export const metadata: Metadata = {
  title: "DynoWeb vs Microsoft Clarity — Shopify CRO Comparison",
  description:
    "Microsoft Clarity is free and unlimited — but it's general-purpose. DynoWeb is built specifically for Shopify, with AI fix suggestions, revenue attribution, and add-to-cart funnel tracking.",
  alternates: {
    canonical: "https://www.dynoweb.app/compare/microsoft-clarity",
  },
  openGraph: {
    title: "DynoWeb vs Microsoft Clarity — Shopify CRO Comparison",
    description:
      "Compare DynoWeb and Microsoft Clarity for Shopify stores. See which tool gives you actionable insights, native Shopify events, and AI-generated fix recommendations.",
    url: "https://www.dynoweb.app/compare/microsoft-clarity",
    siteName: "DynoWeb",
    type: "website",
  },
};

const features = [
  { feature: "Heatmaps", dynoweb: true, clarity: true },
  { feature: "Session recordings", dynoweb: true, clarity: true },
  { feature: "Scroll depth maps", dynoweb: true, clarity: true },
  { feature: "Rage-click / dead-click detection", dynoweb: true, clarity: true },
  { feature: "AI-prioritised fix suggestions", dynoweb: true, clarity: false },
  { feature: "Code-level implementation guides", dynoweb: true, clarity: false },
  { feature: "Draft-theme preview before pushing", dynoweb: true, clarity: false },
  { feature: "Shopify-native app (no script tag)", dynoweb: true, clarity: false },
  { feature: "Add-to-cart funnel with order attribution", dynoweb: true, clarity: false },
  { feature: "Shopify-specific event tracking (checkout, cart)", dynoweb: true, clarity: false },
  { feature: "Customer Privacy API / GDPR compliance", dynoweb: true, clarity: "Partial" },
  { feature: "Revenue attributed to page journeys", dynoweb: true, clarity: false },
  { feature: "Free tier", dynoweb: true, clarity: true },
  { feature: "Session recording quota", dynoweb: "Plan-based", clarity: "Unlimited" },
];

const faqs = [
  {
    q: "Is Microsoft Clarity free to use on Shopify?",
    a: "Yes — Clarity is free with unlimited session recordings and no traffic cap. You install it via a custom script tag or a third-party Shopify app. DynoWeb also has a free tier and installs as a native Shopify app, no script tag management required.",
  },
  {
    q: "What does DynoWeb add that Clarity doesn't provide?",
    a: "Clarity is excellent general-purpose behavioral analytics. What it doesn't do: generate prioritised fix recommendations, provide step-by-step implementation guides, track Shopify-specific events (add-to-cart, checkout initiation, order completion) with native attribution, or connect session data to actual Shopify revenue. DynoWeb does all of these — making the leap from 'I can see the problem' to 'I know exactly what to change and how.'",
  },
  {
    q: "Can I run DynoWeb alongside Microsoft Clarity?",
    a: "Yes. They don't conflict. Many merchants start with both and gradually rely more on DynoWeb as its AI suggestion queue matures. Because DynoWeb uses Shopify's native app infrastructure rather than a script tag, its tracker is also lighter and loads asynchronously without impacting Clarity's data collection.",
  },
  {
    q: "Does Clarity track Shopify checkout and order events?",
    a: "Clarity can capture page-level behaviour on the cart and product pages, but it doesn't have native access to Shopify's order webhooks for revenue attribution. DynoWeb connects directly to Shopify's backend, so every journey analysis is tied to real order data — not just pageviews.",
  },
];

const pageShell = "relative w-full";
const pageShellStyle = { paddingInline: "clamp(1.25rem, 5vw, 7rem)" };

export default function VsMicrosoftClarityPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.dynoweb.app" },
      { "@type": "ListItem", position: 2, name: "Compare", item: "https://www.dynoweb.app/compare" },
      { "@type": "ListItem", position: 3, name: "DynoWeb vs Microsoft Clarity", item: "https://www.dynoweb.app/compare/microsoft-clarity" },
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
            DynoWeb vs Microsoft Clarity for Shopify
          </h1>
          <p className="mt-6 max-w-[66ch] text-base leading-8 text-zinc-300 sm:text-lg">
            Microsoft Clarity is one of the best free behavior analytics tools available — unlimited recordings, solid heatmaps, and a polished dashboard. But it is built for the general web. DynoWeb is built specifically for Shopify: it tracks add-to-cart funnels with order-webhook attribution, generates AI-prioritised fix suggestions, and integrates natively with Shopify's privacy and theme infrastructure.
          </p>
        </section>

        {/* Who each is for */}
        <section className={`${pageShell} pb-16`} style={pageShellStyle}>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-6 lg:p-8">
              <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.28em] text-zinc-500">Best for</p>
              <p className="mt-3 font-[Montserrat] text-xl font-extrabold tracking-tight text-white">DynoWeb</p>
              <ul className="mt-4 space-y-2 text-[0.95rem] leading-7 text-zinc-300">
                <li className="flex gap-2"><span className="mt-1 text-[#6eb0ff]">→</span>Shopify merchants who want to move from "I see the problem" to "I know the fix"</li>
                <li className="flex gap-2"><span className="mt-1 text-[#6eb0ff]">→</span>Teams that need revenue-attributed journey analysis tied to actual Shopify orders</li>
                <li className="flex gap-2"><span className="mt-1 text-[#6eb0ff]">→</span>Non-technical merchants who need guided theme-editor walkthroughs to implement changes</li>
                <li className="flex gap-2"><span className="mt-1 text-[#6eb0ff]">→</span>Stores prioritising Customer Privacy API compliance for GDPR / CCPA</li>
              </ul>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-6 lg:p-8">
              <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.28em] text-zinc-500">Best for</p>
              <p className="mt-3 font-[Montserrat] text-xl font-extrabold tracking-tight text-white">Microsoft Clarity</p>
              <ul className="mt-4 space-y-2 text-[0.95rem] leading-7 text-zinc-300">
                <li className="flex gap-2"><span className="mt-1 text-zinc-500">→</span>Any web property that needs truly unlimited session recordings at zero cost</li>
                <li className="flex gap-2"><span className="mt-1 text-zinc-500">→</span>Non-Shopify sites or multi-platform teams needing general-purpose behavior analytics</li>
                <li className="flex gap-2"><span className="mt-1 text-zinc-500">→</span>Teams already invested in the Microsoft / Azure analytics ecosystem</li>
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
                  <th className="px-5 py-4 text-center font-extrabold uppercase tracking-[0.18em] text-zinc-400" style={{ fontSize: "0.7rem" }}>Microsoft Clarity</th>
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
                      {row.clarity === true ? (
                        <span className="text-zinc-300">✓</span>
                      ) : row.clarity === false ? (
                        <span className="text-zinc-700">—</span>
                      ) : (
                        <span className="text-zinc-400">{row.clarity}</span>
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
              Clarity vs DynoWeb — frequently asked
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
              Clarity shows what happened. DynoWeb tells you what to do next.
            </h2>
            <p className="mt-5 max-w-[58ch] text-base leading-8 text-zinc-300 sm:text-lg">
              Install DynoWeb on the Shopify App Store and get AI-prioritised fix recommendations, implementation guides, and Shopify-native revenue attribution — for free.
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
