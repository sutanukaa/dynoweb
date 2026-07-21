"use client";

import { Check, ChevronLeft, ChevronRight, ShieldCheck, RotateCcw } from "lucide-react";
import { useState } from "react";

import { INK_DIM, PhotoSlot, S, T, Tier } from "./ui";

const CARDS = [
  { id: "mobile", tier: "Quick Win", meta: "Layout · mobile", title: "Move the mobile Add-to-cart above the fold", blurb: "On mobile, the buy button sits below three scrolls of fabric copy. 71% of phone visitors never see it.", est: "+18% mobile ATC" },
  { id: "head", tier: "Strategic", meta: "Content · headline", title: "Lead with the benefit, not the fabric spec", blurb: "“19.5-micron merino” means nothing to a first-time buyer. Say what they get.", est: "+11% engagement" },
  { id: "hero", tier: "Quick Win", meta: "Performance · hero", title: "Compress the hero image", blurb: "The hero ships as a 2.4MB PNG — the slowest paint on the page and the top drop-off point.", est: "−1.5s load" },
  { id: "badge", tier: "Quick Win", meta: "Missing element · trust", title: "Add a trust badge by the buy button", blurb: "There's no reassurance at the point of decision, right where last-second hesitation happens.", est: "+6% checkout" },
  { id: "ab", tier: "Ambitious", meta: "A/B test · placement", title: "Test moving reviews above the spec block", blurb: "Social proof is buried under fabric details. This one routes to a 50/50 test — you keep the winner, not a guess.", est: "+8% ATC" },
] as const;

const SKEL = "rounded-[3px] bg-[rgba(10,22,51,0.07)]";

export default function Suggestions() {
  const [active, setActive] = useState(0);
  const [on, setOn] = useState<Record<string, boolean>>({});
  const [ab, setAb] = useState(0); // 0 idle · 1 drafted · 2 live
  const [applied, setApplied] = useState<string[]>([]);
  const [flying, setFlying] = useState<string | null>(null);

  const deck = CARDS.filter((c) => !applied.includes(c.id));
  const move = (d: number) => setActive((i) => (i + d + Math.max(1, deck.length)) % Math.max(1, deck.length));

  // Throw the card off, then drop it from the deck once the transition lands.
  const apply = (id: string) => {
    setFlying(id);
    setTimeout(() => {
      setApplied((a) => [...a, id]);
      setFlying(null);
      setActive((i) => (deck.length <= 1 ? 0 : i % (deck.length - 1)));
    }, 420);
  };

  const reset = () => {
    setApplied([]);
    setActive(0);
    setOn({});
    setAb(0);
  };

  if (!deck.length) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-3 px-5 pb-5 text-center sm:px-6">
        <Check size={28} strokeWidth={2} className="text-[var(--success)]" />
        <p className={`${T.title} text-[var(--ink)]`}>Queue clear — all five applied.</p>
        <p className={`${T.body} max-w-[34ch] text-[var(--ink-muted)]`}>
          In the app this is where the next scan&apos;s suggestions land, ranked by PECTI.
        </p>
        <button
          onClick={reset}
          className={`${T.body} mt-1 flex items-center gap-1.5 rounded-[var(--r-sm)] border border-white/60 bg-white/40 px-3.5 py-2 font-medium text-[var(--ink)]`}
        >
          <RotateCcw size={13} strokeWidth={2} />
          Refill the deck
        </button>
      </div>
    );
  }

  const preview = (id: string) => {
    const lit = !!on[id];
    switch (id) {
      // Phone sizes off the available height rather than a fixed rem value —
      // a fixed one overflowed the card once the tiles were shortened.
      case "mobile":
        return (
          <div className={`flex h-full items-center justify-center overflow-hidden ${S.inset} p-3`}>
            <div className="relative aspect-[1/2] h-full max-h-[12rem] overflow-hidden rounded-[14px] border-4 border-[var(--ink)]/85 bg-white/45">
              <div className="mx-auto h-2.5 w-10 rounded-b-[5px] bg-[var(--ink)]" />
              <div className="p-2">
                <div className={`${SKEL} h-12`} />
                <div className={`${SKEL} mt-2 h-1.5 w-[70%]`} />
                <div className={`${SKEL} mt-1 h-1.5 w-[50%]`} />
                <div className={`${SKEL} mt-3 h-1.5 w-[85%]`} />
                <div className={`${SKEL} mt-1 h-1.5 w-[80%]`} />
                <div className={`${SKEL} mt-1 h-1.5 w-[60%]`} />
              </div>
              <div
                className={`${T.micro} absolute inset-x-2 bottom-2 rounded-[var(--r-sm)] bg-[var(--blue-600)] py-1.5 text-center font-medium text-white transition-all duration-300`}
                style={{
                  transform: lit ? "translateY(0)" : "translateY(120%)",
                  opacity: lit ? 1 : 0,
                  boxShadow: lit ? "0 0 0 4px rgba(46,107,255,0.2)" : "none",
                }}
              >
                Add to cart · $88
              </div>
            </div>
          </div>
        );
      case "head":
        return (
          <div className={`relative flex h-full items-center justify-center overflow-hidden ${S.inset} p-4 text-center`}>
            <div className="absolute px-3 transition-opacity duration-300" style={{ opacity: lit ? 0 : 1 }}>
              <p className={T.label} style={{ color: INK_DIM }}>
                Before
              </p>
              <p className={`${T.title} mt-2 text-[var(--ink)]`}>19.5-micron RWS merino crewneck</p>
            </div>
            <div className="absolute px-3 transition-opacity duration-300" style={{ opacity: lit ? 1 : 0 }}>
              <p className={`${T.label} text-[var(--brand-accent)]`}>After</p>
              <p className={`${T.title} mt-2 text-[var(--ink)]`}>The sweater you&apos;ll live in all winter</p>
            </div>
          </div>
        );
      case "hero":
        return (
          <div className={`flex h-full items-center gap-4 overflow-hidden ${S.inset} p-4`}>
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[var(--r-md)]">
              <PhotoSlot className="h-full w-full" />
              <div
                className="absolute inset-0 transition-all duration-500"
                style={{ backdropFilter: lit ? "blur(0px)" : "blur(7px)" }}
              />
            </div>
            <div>
              <p className={T.label} style={{ color: INK_DIM }}>
                Largest Contentful Paint
              </p>
              <p
                className={`${T.metric} mt-1.5 transition-colors duration-300`}
                style={{ color: lit ? "var(--success)" : "var(--danger)" }}
              >
                {lit ? "2.7s" : "4.2s"}
              </p>
              <p className={`${T.micro} mt-1.5 text-[var(--ink-muted)]`}>{lit ? "0.8MB · WebP" : "2.4MB · PNG"}</p>
            </div>
          </div>
        );
      case "badge":
        return (
          <div className={`flex h-full flex-col justify-center gap-2.5 overflow-hidden ${S.inset} p-4`}>
            <div className={`${T.body} rounded-[var(--r-md)] bg-[var(--ink)]/90 py-2.5 text-center font-medium text-white`}>
              Add to cart · $88
            </div>
            <div
              className="flex justify-center gap-4 transition-all duration-300"
              style={{ opacity: lit ? 1 : 0, transform: lit ? "translateY(0)" : "translateY(8px)" }}
            >
              {[
                [ShieldCheck, "Secure checkout"],
                [RotateCcw, "60-day returns"],
              ].map(([Icon, t]) => {
                const I = Icon as typeof ShieldCheck;
                return (
                  <span key={t as string} className={`${T.micro} flex items-center gap-1.5 text-[var(--ink)]`}>
                    <I size={13} strokeWidth={2} className="text-[var(--success)]" />
                    {t as string}
                  </span>
                );
              })}
            </div>
          </div>
        );
      default: {
        const tag = ab === 0 ? "not running" : ab === 1 ? "draft · 50 / 50" : "live · collecting";
        return (
          <div className={`h-full overflow-hidden ${S.inset} p-3.5`}>
            <div className="flex justify-end">
              <span className={`${T.label} transition-colors`} style={{ color: ab === 0 ? INK_DIM : "var(--blue-600)" }}>
                {tag}
              </span>
            </div>
            <div className="mt-2 grid grid-cols-2 gap-3">
              <div>
                <p className={T.label} style={{ color: INK_DIM }}>
                  A · control
                </p>
                <div className="mt-1.5 rounded-[var(--r-sm)] border border-white/50 bg-white/45 p-2.5">
                  <div className={`${SKEL} h-1.5 w-[60%]`} />
                  <div className={`${SKEL} mt-2 h-9`} />
                  <div className="mt-2 rounded-[var(--r-xs)] border border-dashed border-[#c9dbff] p-1.5">
                    <span className={T.label} style={{ color: "var(--blue-600)" }}>
                      reviews · buried
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <p className={`${T.label} text-[var(--brand-accent)]`}>B · reviews up</p>
                <div className="mt-1.5 rounded-[var(--r-sm)] border border-white/50 bg-white/45 p-2.5 ring-1 ring-[#c9dbff]">
                  <div className={`${SKEL} h-1.5 w-[60%]`} />
                  <div className="mt-2 rounded-[var(--r-xs)] border border-dashed border-[#a9c4ff] p-1.5">
                    <span className={T.label} style={{ color: "var(--blue-600)" }}>
                      reviews · promoted
                    </span>
                  </div>
                  <div className={`${SKEL} mt-2 h-7`} />
                </div>
              </div>
            </div>
            <p className={`${T.micro} mt-3 text-[var(--ink-muted)]`}>
              {ab === 0
                ? "Routes to a test, not an instant apply — you keep the proven winner."
                : ab === 1
                  ? "Draft created. Launch to split traffic 50/50 and measure ATC."
                  : "Test live — projected +8% ATC on Variant B, pending significance."}
            </p>
          </div>
        );
      }
    }
  };

  return (
    <div className="flex flex-1 flex-col gap-3 px-5 pb-5 sm:px-6">
      <div className="relative min-h-[19rem] flex-1">
        {deck.map((c, i) => {
          // Depth in the stack: 0 is the front card, 1–2 peek behind it.
          const d = (i - active + deck.length) % deck.length;
          if (d > 2) return null;
          const isFlying = flying === c.id;
          const lit = c.id === "ab" ? ab > 0 : !!on[c.id];
          const label =
            c.id === "ab"
              ? ab === 0
                ? "Create test"
                : ab === 1
                  ? "Drafted"
                  : "Reset"
              : lit
                ? "Reset"
                : "Preview fix";
          return (
            // The deck is the one genuinely floating object in the section, so
            // it gets elevation and no outline.
            <div
              key={c.id}
              aria-hidden={d !== 0}
              className={`${S.raised} absolute inset-x-0 top-0 flex h-full flex-col overflow-hidden p-4 transition-all ease-out`}
              style={{
                transform: isFlying ? "translateX(130%) rotate(9deg)" : `translateY(${d * -10}px) scale(${1 - d * 0.035})`,
                opacity: isFlying ? 0 : d === 0 ? 1 : 0.5,
                zIndex: deck.length - d,
                pointerEvents: d === 0 && !isFlying ? "auto" : "none",
                transitionDuration: isFlying ? "420ms" : "300ms",
              }}
            >
              <div className="flex items-center gap-3">
                <Tier label={c.tier} />
                <span className={T.label} style={{ color: INK_DIM }}>
                  {c.meta}
                </span>
              </div>
              <h4 className={`${T.title} mt-3 text-[var(--ink)]`}>{c.title}</h4>
              <p className={`${T.body} mt-2 text-[var(--ink-muted)]`}>{c.blurb}</p>
              <div className="mt-4 min-h-0 flex-1">{preview(c.id)}</div>
              <div className="mt-4 flex items-center justify-between gap-3">
                <p className={`${T.micro} text-[var(--ink-muted)]`}>
                  Est. <strong className="font-semibold text-[var(--ink)]">{c.est}</strong> · projected
                </p>
                <div className="flex shrink-0 gap-2">
                  <button
                    onClick={() => (c.id === "ab" ? setAb((v) => (v + 1) % 3) : setOn((s) => ({ ...s, [c.id]: !s[c.id] })))}
                    className={`${T.body} whitespace-nowrap rounded-[var(--r-sm)] px-3 py-2 font-medium transition-colors ${
                      lit ? "bg-[var(--blue-500)]/15 text-[var(--blue-700)]" : "text-[var(--blue-600)] hover:bg-white/60"
                    }`}
                  >
                    {label}
                  </button>
                  <button
                    onClick={() => apply(c.id)}
                    className={`${T.body} whitespace-nowrap rounded-[var(--r-sm)] bg-[var(--ink)]/90 px-3.5 py-2 font-medium text-white transition-transform active:scale-[0.97]`}
                  >
                    {c.id === "ab" ? "Launch" : "Apply"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => move(-1)}
          aria-label="Previous suggestion"
          className="text-[var(--ink-muted)] transition-colors hover:text-[var(--ink)]"
        >
          <ChevronLeft size={18} strokeWidth={2} />
        </button>
        <div className="flex gap-1.5">
          {deck.map((c, i) => (
            <button
              key={c.id}
              onClick={() => setActive(i)}
              aria-label={`Suggestion ${i + 1}`}
              className="h-1 rounded-full transition-all"
              style={{ width: i === active ? 20 : 6, background: i === active ? "var(--ink)" : "var(--line)" }}
            />
          ))}
        </div>
        <button
          onClick={() => move(1)}
          aria-label="Next suggestion"
          className="text-[var(--ink-muted)] transition-colors hover:text-[var(--ink)]"
        >
          <ChevronRight size={18} strokeWidth={2} />
        </button>
        <span className={`${T.label} ml-auto`} style={{ color: INK_DIM }}>
          {active + 1} / {deck.length}
          {applied.length > 0 && <span className="ml-3 text-[var(--success)]">{applied.length} applied</span>}
        </span>
      </div>
    </div>
  );
}
