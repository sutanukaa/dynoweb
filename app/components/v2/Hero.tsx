import { Check } from "lucide-react";

import { LetterCascade } from "@/components/ui/letter-cascade";
import InstallFreeButton from "./InstallFreeButton";
import LeakSpotlight from "./LeakSpotlight";
import SpinBorder from "./SpinBorder";

const TICKS = [
  "Free to see the leak",
  "You approve every change",
  "No surprise charges, ever",
];

export default function Hero() {
  return (
    <section className="font-inter relative isolate w-full overflow-hidden pb-4 pt-8">
      {/* Background — navy/white light-arc field. 17 KB WebP (was a 5 MB 4K JPEG;
          it's pure soft gradient, so downscaling is invisible). Held at low opacity
          and faded out toward the centre-left so the headline keeps full contrast —
          design.md §5: light exists to lift the product shot, not to decorate. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-white">
        <picture>
          <source srcSet="/hero-shader.webp" type="image/webp" />
          <img
            src="/hero-shader.jpg"
            alt=""
            className="h-full w-full object-cover opacity-[0.55]"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
        {/* Scrim: keeps the left text column on near-white so contrast stays AA. */}
        <div className="absolute inset-0 bg-[linear-gradient(100deg,#fff_18%,rgba(255,255,255,0.72)_46%,rgba(255,255,255,0.25)_78%)]" />
        {/* Soften the seam into the section below. */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(to_bottom,transparent,#fff)]" />
      </div>

      {/* Editorial split: the copy holds the left, the storefront runs off the right
          edge. Asymmetry and a partial reveal — a shot that sits politely inside the
          grid reads as a thumbnail (design.md §8). */}
      <div className="mx-auto grid w-full max-w-[1320px] grid-cols-1 items-center gap-16 px-[clamp(1.25rem,5vw,4rem)] py-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-24 lg:py-20">
        {/* ---------- Left: the words ---------- */}
        <div className="max-w-[34rem]">
          {/* Announcement badge */}
          {/* The old #leak section was removed, so this points at the install flow
              — the badge promises a free leak report, which is what installing gives. */}
          <a
            href="https://apps.shopify.com/dynoweb"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-7 inline-block"
          >
            <SpinBorder>
              <span className="inline-flex cursor-pointer items-center justify-center rounded-full bg-white/70 px-3 py-1 text-xs font-medium leading-5 text-slate-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-xl backdrop-saturate-150">
                Free leak report
                <span className="inline-flex items-center pl-2 text-slate-900">See yours</span>
              </span>
            </SpinBorder>
          </a>

          {/* Headline — the merchant's own words.
              Size is clamped rather than stepped: LetterCascade lays each character
              out in an inline-flex row, which CANNOT wrap, so the second line has to
              be guaranteed to fit its container at every width or it gets clipped. */}
          <h1 className="font-display text-[clamp(1.65rem,6vw,3.4rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-gray-900">
            <span className="block whitespace-nowrap">Traffic but no sales &mdash;</span>
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
          <p className="mt-6 max-w-[46ch] text-lg leading-7 text-gray-600">
            It&rsquo;s not you. One fixable thing is quietly costing you sales. We&rsquo;ll find it,
            put a dollar figure on it, and fix it &mdash; free. You only pay once it&rsquo;s made you
            money.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {/* Exactly one primary CTA: solid --blue-600, per design.md §10. The
                secondary stays white/hairline so the hierarchy is unmistakable —
                two identically-weighted buttons means no primary action at all. */}
            <InstallFreeButton
              label="Show me the leak — free"
              className="!flex !h-12 !w-auto items-center justify-center !border-transparent !bg-[var(--blue-600)] px-9 !text-white shadow-[var(--shadow-xs),inset_0_1px_0_rgba(255,255,255,0.16)] transition-colors hover:!bg-[var(--blue-700)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-600)] focus-visible:ring-offset-2"
            />
            <a
              href="/use-cases#punarvasu"
              className="flex h-12 items-center justify-center whitespace-nowrap rounded-[10px] border border-[var(--line)] bg-white px-7 text-sm font-semibold text-[var(--navy-800)] shadow-[var(--shadow-xs)] transition-colors duration-200 hover:border-[var(--navy-300)] hover:bg-[var(--paper)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-600)] focus-visible:ring-offset-2"
            >
              See a demo store
            </a>
          </div>

          {/* Trust ticks */}
          <ul className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500">
            {TICKS.map((t) => (
              <li key={t} className="inline-flex items-center gap-1.5">
                <Check className="h-4 w-4 text-[#10805c]" strokeWidth={2.5} />
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* ---------- Right: the storefront, one element lit ----------
            Runs past the container's right edge on desktop so it reads as a
            partial reveal rather than a framed thumbnail. */}
        <div className="relative lg:-mr-[clamp(1.25rem,5vw,4rem)] lg:pl-[190px]">
          <LeakSpotlight />
        </div>
      </div>
    </section>
  );
}
