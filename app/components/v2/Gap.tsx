import { LetterCascade } from "@/components/ui/letter-cascade";
import InstallFreeButton from "./InstallFreeButton";
import WaveBg from "./WaveBg";

const MUTED = "Analytics tells you what happened.".split(" ");
const STRONG = "Not what to do about it.".split(" ");

export default function Gap() {
  return (
    <section
      className="font-inter relative isolate w-full overflow-hidden bg-[var(--paper)]"
      style={{
        background:
          "radial-gradient(58% 55% at 84% 18%, #e8efff 0%, transparent 60%), radial-gradient(46% 52% at 6% 96%, rgba(46,107,255,0.10) 0%, transparent 62%), var(--paper)",
      }}
    >
      <WaveBg />
      <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-[clamp(1.25rem,5vw,4rem)] py-24 md:grid-cols-2 md:gap-16 lg:py-28">
        {/* Text side */}
        <div className="text-center md:text-left">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[var(--ink-muted)]">
            The problem
          </p>

          <h2 className="font-display mt-5 text-[clamp(1.875rem,3vw,2.5rem)] font-semibold leading-[1.12] tracking-[-0.025em]">
            <span className="flex flex-wrap items-center justify-center gap-x-[0.28em] gap-y-1 md:justify-start">
              {MUTED.map((w, i) => (
                <LetterCascade key={`m${i}`} text={w} letterClassName="text-[#7183a6]" />
              ))}
              {STRONG.map((w, i) => (
                <LetterCascade key={`s${i}`} text={w} letterClassName="text-[#0a1633]" />
              ))}
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[46ch] text-lg leading-relaxed text-[var(--ink-muted)] md:mx-0">
            Heatmap tools hand you a picture and a homework assignment. DynoWeb ranks the fix
            that&rsquo;s worth shipping &mdash; scored by proof, ease and impact &mdash; and ties
            it back to the revenue it earned.
          </p>

          <div className="mt-7 flex justify-center md:justify-start">
            <InstallFreeButton
              href="/features/ai-suggestions"
              label="See how it ranks fixes"
              className="!w-auto px-6"
            />
          </div>
        </div>

        {/* Screenshot side */}
        <div className="relative">
          <div className="dw-shot">
            <img
              src="/AISuggestions.png"
              alt="DynoWeb's ranked list of AI CRO suggestions, tagged Quick Win / Strategic and scored by impact"
              width={1907}
              height={879}
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Badges over the shot */}
          <span className="absolute -left-3 top-6 inline-flex items-center rounded-full border border-white/50 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-[#1a2b6b] shadow-[0_8px_24px_-8px_rgba(10,22,51,0.3),inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-xl backdrop-saturate-150 sm:-left-5">
            Ranked by impact
          </span>
          <span className="absolute -right-2 bottom-6 inline-flex items-center gap-1.5 rounded-full border border-white/50 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-[#1a2b6b] shadow-[0_8px_24px_-8px_rgba(10,22,51,0.3),inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-xl backdrop-saturate-150 sm:-right-5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#10805c]" /> 17+ rules · z-tested
          </span>
        </div>
      </div>
    </section>
  );
}
