import { ArrowRight } from "lucide-react";

import { Particles } from "@/components/particles";
import { LetterCascade } from "@/components/ui/letter-cascade";
import InstallFreeButton from "./InstallFreeButton";

export default function Hero() {
  return (
    <section className="font-inter relative isolate flex min-h-[88vh] w-full flex-col items-center justify-center overflow-hidden">
      {/* Background — grid + radial recolored to our signature blue, + Particles */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,rgba(46,107,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(46,107,255,0.07)_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,rgba(46,107,255,0.22),transparent)]" />
      </div>
      <Particles
        className="absolute inset-0 -z-10"
        quantity={50}
        color="#2e6bff"
        ease={10}
        refresh
      />

      <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-6 py-16">
        {/* Announcement badge — animated spinning-border pill (bg.ibelick.com) */}
        <a href="/use-cases" className="mb-8">
          <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a9a9a9_0%,#0c0c0c_50%,#a9a9a9_100%)]" />
            <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-3 py-1 text-xs font-medium leading-5 text-slate-600 backdrop-blur-xl">
              Real Shopify results ⚡️
              <span className="inline-flex items-center pl-2 text-black">
                Read more
                <ArrowRight className="ml-1 h-3.5 w-3.5" strokeWidth={2} />
              </span>
            </div>
          </span>
        </a>

        {/* Headline — solid first line, split-flap letter-cascade second line (hover it) */}
        <h1 className="font-display text-center text-3xl font-semibold text-gray-900 sm:text-6xl">
          <span className="block">See why shoppers don&rsquo;t buy,</span>
          <LetterCascade
            text="then ship the fix"
            staggerDuration={0.05}
            className="mt-1 align-baseline"
            letterClassName="bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-clip-text text-transparent"
          />
        </h1>

        {/* Sub-paragraph */}
        <p className="mt-6 max-w-xl text-center text-lg leading-7 text-gray-600">
          Heatmaps, session replays and funnels for Shopify &mdash; plus an AI that ranks
          the fix that&rsquo;s worth shipping and attributes the revenue it earned.
        </p>

        {/* Buttons — animated Install free + light-grey secondary */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <InstallFreeButton className="!flex !h-12 items-center justify-center" />
          <a
            href="/use-cases#punarvasu"
            className="dw-ripple-btn flex h-12 items-center justify-center whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2"
          >
            See a demo store
          </a>
        </div>
      </div>
    </section>
  );
}
