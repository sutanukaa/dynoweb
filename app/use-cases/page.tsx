import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Footer from "@/app/components/Footer";
import PillNav from "@/app/components/PillNav";

const useCases = [
  {
    number: "01",
    title: "Find what's blocking conversions",
    scenario:
      "A paid campaign is sending qualified traffic to a product page, but shoppers keep viewing images, opening the size guide, and leaving without adding to cart.",
    diagnosis:
      "DynoWeb shows where attention goes and where intent breaks. Heatmaps reveal repeated taps around the gallery and shipping info, scroll depth shows most visitors never reach the strongest product proof, and replay confirms the CTA is easy to miss on smaller screens.",
    fix:
      "From there, the merchant can move the variant picker higher, make the add-to-cart treatment more obvious, tighten the image stack, and preview the change on a draft theme before pushing anything live.",
    outcome: "Instead of debating opinions, the team can see the exact friction point and fix the page that is leaking sales.",
    image: "/clickHeatmap.png",
    imageAlt: "DynoWeb click heatmap screenshot",
    imageLabel: "Frustration Heatmap",
  },
  {
    number: "02",
    title: "Convert hesitating visitors before they leave",
    scenario:
      "A store runs consistent paid traffic to its product pages. Visitors browse, interact with images, check reviews — then leave without purchasing. Standard analytics shows the drop-off but not the moment it happens or who to target. Retargeting ads recapture some visitors, but the majority are gone with no recovery attempt made while they were still on-site.",
    diagnosis:
      "DynoWeb identifies the exact behavioral signals that precede abandonment — rage clicks, extended time on page with no add-to-cart action, cursor movement toward the browser chrome. It surfaces which visitor segments trigger these patterns most frequently: frustrated browsers, price hesitators, cart abandoners. SmartNudge maps those signals to intervention opportunities, showing how many eligible sessions occurred in the last 14 days and what conversion lift is possible.",
    fix:
      "From there, the merchant activates a targeted nudge — an exit-intent popup for hesitating visitors, a discount offer for price hesitators, or a cart reminder for abandoners. Copy is generated in one click using AI, pre-filled with a headline, body, and CTA matched to the visitor moment. The nudge fires automatically when behavioral conditions are met, at the right frequency, on the right pages. No developer needed, no live theme changes — just a rule set and a message that shows up when it matters.",
    outcome: "The visitor who was about to leave sees exactly the right message at exactly the right moment.",
    image: "/SmartNudge-usecase.png",
    imageAlt: "DynoWeb SmartNudge use case screenshot",
    imageLabel: "SmartNudge",
  },
  {
    number: "03",
    title: "Fix mobile friction before it costs revenue",
    scenario:
      "A store converts well on desktop, but mobile sessions bounce more often and product pages get lots of interaction with very few add-to-cart clicks.",
    diagnosis:
      "DynoWeb picks up touch-heavy behavior that standard analytics usually miss: repeated taps on cramped buttons, pinch-zooming because product details are hard to read, and thumb-zone friction near filters, drawers, or sticky elements.",
    fix:
      "That gives the merchant a concrete mobile fix list: increase tap targets, simplify the first viewport, reduce competing actions, and test cleaner CTA placement in a draft before rolling the update out.",
    outcome: "The result is a mobile experience shaped around how shoppers actually use their phones, not how the theme looked in design review.",
    image: "/suggestionss.png",
    imageAlt: "DynoWeb suggestions screenshot",
    imageLabel: "Suggested Improvements",
  },
  {
    number: "04",
    title: "See which journeys and pages drive purchases",
    scenario:
      "Merchants often know which pages get traffic, but not which paths actually lead to checkout. A collection page may look busy, while a quieter landing page or product sequence is doing more revenue work than expected.",
    diagnosis:
      "DynoWeb connects journey flow, cart actions, and attributed revenue so you can follow the routes that convert and spot the steps where shoppers peel away. Instead of just seeing pageviews, you can see which journeys create buying momentum.",
    fix:
      "That makes it easier to improve the right path: strengthen internal links from high-intent pages, surface the right products earlier, reduce dead-end pages, and prioritize the entry pages and collections that are already closest to revenue.",
    outcome: "You stop optimizing for attention alone and start optimizing the journeys that actually produce orders.",
    image: "/pageFlow.png",
    imageAlt: "DynoWeb page flow screenshot",
    imageLabel: "Journey Flow",
  },
  {
    number: "05",
    title: "Make better storefront changes with less risk",
    scenario:
      "A merchant knows something needs to change before a promotion or product launch, but does not want to edit the live theme blindly and hope nothing breaks.",
    diagnosis:
      "DynoWeb turns that moment into a safer workflow. It ranks CSS suggestions (available now) by likely impact, shows the proposed change in context, and lets the merchant compare live and draft versions before approving anything. Additional suggestion types are coming soon.",
    fix:
      "Instead of making manual live edits under pressure, the team can apply the update to a draft theme, review the before-and-after state, and track whether the change actually improved engagement or conversion after launch.",
    outcome: "That means faster iteration with less risk, fewer last-minute theme mistakes, and a cleaner path from insight to action.",
    image: "/approval.png",
    imageAlt: "DynoWeb approval and draft preview screenshot",
    imageLabel: "Draft Approval",
  },
];

const signalChips = [
  "Clicks",
  "Hesitation",
  "Scroll depth",
  "Drop-off",
  "Revenue attribution",
  "Draft previews",
];

const workflowSteps = [
  {
    label: "Observe",
    description: "See how shoppers click, scroll, hesitate, and abandon across your storefront.",
  },
  {
    label: "Prioritize",
    description: "Surface the pages, journeys, and friction points with the biggest conversion upside.",
  },
  {
    label: "Improve",
    description: "Review AI suggestions (CSS suggestions available now, more coming soon), preview draft changes, and move faster with less risk.",
  },
];

const pageShell = "relative w-full";
const pageShellStyle = {
  paddingInline: "clamp(1.25rem, 5vw, 7rem)",
};

export const metadata: Metadata = {
  title: "Use Cases | DynoWeb",
  description:
    "See how DynoWeb helps Shopify merchants find friction, improve mobile UX, understand journeys, and make safer storefront changes.",
};

export default function UseCasesPage() {
  return (
    <>
      <PillNav />

      <main className="relative overflow-hidden bg-[#050505] pt-24 text-white">
        <div className="absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.08),_transparent_42%),linear-gradient(180deg,_rgba(255,255,255,0.035),_transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:44px_44px] opacity-25" />

        <section
          className={`${pageShell} pb-12 pt-10 2xl:pb-16 2xl:pt-12`}
          style={pageShellStyle}
        >
          <div className="grid items-start gap-8 xl:grid-cols-[minmax(0,1.2fr)_minmax(360px,0.8fr)] xl:gap-14 2xl:grid-cols-[minmax(0,1.35fr)_minmax(430px,0.85fr)] 2xl:gap-16">
            <div className="max-w-[940px] 2xl:max-w-[1040px]">
              <p className="text-[0.78rem] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                Why Merchants Use DynoWeb
              </p>
              <h1 className="mt-5 font-[Montserrat] text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl xl:text-[4.9rem] 2xl:text-[5.6rem]">
                Turn shopper behavior into clearer fixes and more sales
              </h1>
              <p className="mt-6 max-w-[70ch] text-base leading-8 text-zinc-300 sm:text-lg 2xl:text-[1.18rem] 2xl:leading-9">
                DynoWeb shows where shoppers click, hesitate, scroll, drop off, and buy, then helps you act on those insights with AI suggestions (CSS suggestions available now, more coming soon), draft-theme previews, and safer optimization workflows.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {signalChips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-sky-300/15 bg-sky-400/[0.07] px-4 py-2 text-sm font-medium text-sky-100"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <div className="w-full rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur sm:p-6 xl:justify-self-end 2xl:max-w-[520px]">
              <div className="rounded-[1.5rem] border border-white/10 bg-black/35 p-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
                      Optimization Flow
                    </p>
                    <p className="mt-2 text-lg font-semibold tracking-tight text-white">
                      From behavior signal to safer change
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-4">
                  {workflowSteps.map((step, index) => (
                    <div
                      key={step.label}
                      className="rounded-[1.35rem] border border-white/10 bg-white/[0.02] p-4"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-sky-300/20 bg-sky-400/[0.08] text-sm font-semibold text-sky-100">
                          0{index + 1}
                        </div>
                        <div>
                          <p className="text-base font-semibold tracking-tight text-white">
                            {step.label}
                          </p>
                          <p className="mt-2 text-sm leading-7 text-zinc-400">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${pageShell} pb-20 pt-10`} style={pageShellStyle}>
          <div className="mb-8 flex items-end justify-between gap-6 border-b border-white/10 pb-6">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                Core Use Cases
              </p>
              <h2 className="mt-3 font-[Montserrat] text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                Where DynoWeb fits into everyday optimization work
              </h2>
            </div>
          </div>

          <div className="grid gap-6">
            {useCases.map((item) => (
              <article
                key={item.number}
                className="group rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.015))] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.2)] transition duration-200 hover:border-sky-300/20 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] sm:p-6 lg:p-7"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full border border-sky-300/18 bg-sky-400/[0.08] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">
                    Use Case {item.number}
                  </span>
                  <span className="text-sm font-medium text-zinc-600 transition group-hover:text-zinc-500">
                    DynoWeb
                  </span>
                </div>

                <div className="mt-5 xl:grid xl:grid-cols-[minmax(360px,0.82fr)_minmax(0,1.18fr)] xl:items-start xl:gap-8 2xl:grid-cols-[minmax(460px,0.78fr)_minmax(0,1.22fr)] 2xl:gap-10">
                  <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0b0b0d] shadow-[0_20px_40px_rgba(0,0,0,0.24)]">
                    <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-3">
                      <span className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-zinc-500">
                        {item.imageLabel}
                      </span>
                      <span className="rounded-full border border-sky-300/18 bg-sky-400/[0.08] px-2.5 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-sky-200">
                        DynoWeb UI
                      </span>
                    </div>
                    <div className="relative flex min-h-[220px] items-center justify-center bg-[#f6f8fb] p-4 sm:min-h-[240px] sm:p-5 lg:min-h-[300px] 2xl:min-h-[360px]">
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        sizes="(min-width: 1536px) 34vw, (min-width: 1280px) 36vw, 100vw"
                        className="object-contain p-4 sm:p-5"
                      />
                    </div>
                  </div>

                  <div className="mt-6 xl:mt-0 xl:flex xl:min-h-full xl:flex-col xl:justify-center">
                    <h3 className="max-w-[34ch] font-[Montserrat] text-[1.8rem] font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:text-[2rem] 2xl:max-w-[26ch] 2xl:text-[2.35rem]">
                      {item.title}
                    </h3>

                    <div className="mt-5 rounded-[1.35rem] border border-white/10 bg-black/25 px-4 py-4">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                        Real scenario
                      </p>
                      <p className="mt-2 text-[1rem] leading-8 text-zinc-300">
                        {item.scenario}
                      </p>
                    </div>

                    <div className="mt-4 rounded-[1.35rem] border border-white/10 bg-white/[0.02] px-4 py-4">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                        What DynoWeb shows
                      </p>
                      <p className="mt-2 text-[1rem] leading-8 text-zinc-300">
                        {item.diagnosis}
                      </p>
                    </div>

                    <div className="mt-4 rounded-[1.35rem] border border-sky-300/14 bg-sky-400/[0.05] px-4 py-4">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-200/80">
                        How it gets fixed
                      </p>
                      <p className="mt-2 text-[1rem] leading-8 text-zinc-200">
                        {item.fix}
                      </p>
                    </div>

                    <p className="mt-5 text-base font-medium leading-8 text-sky-100">
                      {item.outcome}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={`${pageShell} pb-24`} style={pageShellStyle}>
          <div className="rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.08),transparent_48%),linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] sm:p-8 lg:p-10">
            <div className="max-w-[960px] 2xl:max-w-[1080px]">
              <p className="text-[0.74rem] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                Closing CTA
              </p>
              <h2 className="mt-4 font-[Montserrat] text-3xl font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-4xl lg:text-[3.2rem]">
                See what shoppers do. Know what to fix. Apply changes with confidence.
              </h2>
              <p className="mt-5 max-w-[62ch] text-base leading-8 text-zinc-300 sm:text-lg">
                DynoWeb gives Shopify merchants a faster path from behavior data to conversion wins.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/waitlist"
                className="uv-btn-wrapper"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="uv-btn"
                  style={{
                    background: "#fff",
                    color: "#000",
                    border: "1px solid #000",
                    borderRadius: "999px",
                    padding: "12px 32px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  }}
                >
                  <div className="uv-txt-wrapper">
                    <div className="uv-txt-1">
                      {Array.from("Join the waitlist now").map((c, i) =>
                        c === " " ? (
                          <span key={i} style={{ display: "inline-block", width: "0.4em" }} />
                        ) : (
                          <span
                            key={i}
                            className="uv-btn-letter"
                            style={{ animationDelay: `${i * 0.045}s`, color: "#000" }}
                          >
                            {c}
                          </span>
                        )
                      )}
                    </div>
                    <div className="uv-txt-2" aria-hidden="true">
                      {Array.from("Join the waitlist now").map((c, i) =>
                        c === " " ? (
                          <span key={i} style={{ display: "inline-block", width: "0.4em" }} />
                        ) : (
                          <span
                            key={i}
                            className="uv-btn-letter"
                            style={{ animationDelay: `${i * 0.045}s`, color: "#000" }}
                          >
                            {c}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                  <svg className="uv-btn-svg" viewBox="0 0 24 24" style={{ stroke: "#000" }}>
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
              <Link
                href="/help"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-zinc-200 transition hover:border-white/15 hover:bg-white/[0.06] hover:text-white"
              >
                Explore the Help Center
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
