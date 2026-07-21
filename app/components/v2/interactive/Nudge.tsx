"use client";

import { Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { TRIGGERS } from "./copy";
import { INK_DIM, PhotoSlot, S, T } from "./ui";

type NudgeKey = "exit" | "cart" | "bundle" | "assist";

// Which popup each trigger raises. Behaviour lives here, wording lives in
// copy.ts, so rewriting voice can't rewire the demo.
const NUDGE_FOR: Record<string, NudgeKey> = {
  rage: "assist",
  exit: "exit",
  dwell: "bundle",
  cart: "cart",
};

// Rage detection, pulled out as pure functions so it can be tested without a
// browser. See rage.test.mjs next to this file.
export const RAGE_WINDOW_MS = 1500;
export const RAGE_CLICKS = 3;

/** Drop clicks older than the window, then append this one. */
export function pushClick(log: number[], now: number, windowMs = RAGE_WINDOW_MS) {
  return [...log.filter((t) => now - t < windowMs), now];
}

export const isRage = (log: number[]) => log.length >= RAGE_CLICKS;

const TRIGGER = `${T.label} text-[var(--brand-accent)]`;
const BTN_DARK = `${T.body} rounded-[var(--r-sm)] bg-[var(--ink)]/90 py-2 text-center font-medium text-white`;
const BTN_BLUE = `${T.body} rounded-[var(--r-sm)] bg-[var(--blue-600)]/90 py-2 text-center font-medium text-white`;
const BTN_GHOST = `${T.body} rounded-[var(--r-sm)] border border-white/60 bg-white/40 py-2 text-center text-[var(--ink)]`;

function Popup({ show, className, children }: { show: boolean; className: string; children: React.ReactNode }) {
  if (!show) return null;
  return (
    <div className={`${S.raised} absolute ${className}`} style={{ animation: "dw-nudge-in .32s ease-out" }}>
      {children}
    </div>
  );
}

export default function Nudge() {
  // You arm a trigger, then perform it in the storefront. Nothing fires until
  // both have happened, so a popup can never appear before you asked for one.
  const [armed, setArmed] = useState<string | null>(null);
  const [nudge, setNudge] = useState<NudgeKey | null>(null);
  const [fired, setFired] = useState<string[]>([]);
  const [cart, setCart] = useState(0);
  const [rageFlash, setRageFlash] = useState(false);
  const [rageCount, setRageCount] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const dwellTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rageLog = useRef<number[]>([]);
  const lastMove = useRef({ y: 0, t: 0 });

  useEffect(() => () => void (dwellTimer.current && clearTimeout(dwellTimer.current)), []);

  const clearDwell = () => {
    if (dwellTimer.current) clearTimeout(dwellTimer.current);
    dwellTimer.current = null;
  };

  const arm = (id: string) => {
    clearDwell();
    rageLog.current = [];
    setRageCount(0);
    setArmed(id);
    setNudge(null);
  };

  // The only way a popup opens. Gated on `armed`, so performing a behaviour you
  // didn't select does nothing.
  const fire = (id: string) => {
    clearDwell();
    if (armed !== id) return;
    setNudge(NUDGE_FOR[id]);
    setFired((f) => (f.includes(id) ? f : [...f, id]));
  };

  const onMove = (e: React.MouseEvent) => {
    // e.timeStamp, not Date.now(): it is the event's own clock, so it stays
    // pure for the render rules and is the correct reading anyway.
    lastMove.current = { y: e.clientY, t: e.timeStamp };
    if (armed !== "dwell") return;
    clearDwell();
    dwellTimer.current = setTimeout(() => fire("dwell"), 3000);
  };

  // Real exit intent, with two guards that stop it firing on its own:
  //   · the pointer must have moved in the last 200ms — Lenis scrolling drags
  //     the storefront out from under a stationary cursor, which emits
  //     mouseleave with no mousemove at all. That was the phantom popup.
  //   · it must be travelling upward, not merely be near the top edge.
  const onLeave = (e: React.MouseEvent) => {
    clearDwell();
    const r = stageRef.current?.getBoundingClientRect();
    if (!r || armed !== "exit") return;
    const { y, t } = lastMove.current;
    const deliberate = e.timeStamp - t < 200 && e.clientY < y;
    if (deliberate && e.clientY <= r.top + 8) fire("exit");
  };

  const addToCart = () => {
    setCart((c) => c + 1);
    clearDwell();
    // Deliberately delayed — this is the non-aggressive one.
    setTimeout(() => fire("cart"), 1000);
  };

  // Three fast clicks on the dead fabric block is the actual rage heuristic.
  // rageCount is mirrored into state purely so the block can show "2 / 3" —
  // without it there was no way to tell a missed click from a too-short window.
  const onDeadClick = (e: React.MouseEvent) => {
    rageLog.current = pushClick(rageLog.current, e.timeStamp);
    setRageCount(rageLog.current.length);
    setRageFlash(true);
    setTimeout(() => setRageFlash(false), 260);
    if (isRage(rageLog.current)) {
      rageLog.current = [];
      setRageCount(0);
      fire("rage");
    }
  };

  const cartValue = cart * 88;
  const shipPct = Math.min(100, (cartValue / 75) * 100);

  return (
    <div className="flex flex-1 flex-col gap-4 px-5 pb-5 pt-1 sm:px-6">
      {/* Pick one, then go do it below. Selecting arms the detector; it does not
          open the popup. Three states per row: idle, armed (waiting for you),
          fired. */}
      <div className="grid grid-cols-2 gap-2">
        {TRIGGERS.map((t) => {
          const isArmed = armed === t.id;
          const done = fired.includes(t.id);
          return (
            <button
              key={t.id}
              onClick={() => arm(t.id)}
              aria-pressed={isArmed}
              className={`rounded-[var(--r-md)] border p-2.5 text-left transition-colors ${
                isArmed
                  ? "border-[var(--brand-accent)] bg-[var(--blue-100)]"
                  : "border-[var(--line)] hover:border-[#a9c4ff]"
              }`}
            >
              <div className="flex items-center gap-1.5">
                {done ? (
                  <Check size={12} strokeWidth={2.6} className="shrink-0 text-[var(--success)]" />
                ) : (
                  <span
                    className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                      isArmed ? "animate-pulse bg-[var(--brand-accent)]" : "bg-[var(--line)]"
                    }`}
                  />
                )}
                <span className={`${T.label} text-[var(--ink)]`}>{t.title}</span>
              </div>
              <p
                className={`${T.micro} mt-1`}
                style={{ color: isArmed ? "var(--blue-700)" : INK_DIM }}
              >
                {isArmed ? t.hint : done ? "Fired once. Pick it again to retry." : t.hint}
              </p>
            </button>
          );
        })}
      </div>

      {!armed && (
        <p className={`${T.micro} -mt-2`} style={{ color: INK_DIM }}>
          Pick a trigger above, then do it in the storefront below.
        </p>
      )}

      {/* Rage is detected across the whole storefront, not just the dead text —
          a real visitor jabs at whatever is under the cursor. Clicks on the
          Add-to-cart button bubble up here too, which is correct: only the armed
          trigger can fire, so it counts toward rage without also adding a cart. */}
      <div
        ref={stageRef}
        onMouseLeave={onLeave}
        onMouseMove={onMove}
        onClick={onDeadClick}
        className={`relative min-h-[16rem] flex-1 overflow-hidden transition-shadow duration-200 ${S.frame}`}
        style={rageFlash ? { boxShadow: "inset 0 0 0 2px var(--danger)" } : undefined}
      >
        <div className="h-full overflow-hidden p-4">
          <div className="flex items-center justify-between">
            <span className={`${T.title} text-[var(--ink)]`}>Northfield</span>
            <div className="flex items-center gap-3">
              {armed === "rage" && (
                <span className={`${T.label} text-[var(--danger)]`}>
                  {rageCount} / {RAGE_CLICKS}
                </span>
              )}
              <span className={`${T.label} transition-colors`} style={{ color: cart ? "var(--blue-600)" : INK_DIM }}>
                Cart · {cart}
              </span>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3.5">
            <PhotoSlot className="aspect-square rounded-[var(--r-md)]" />
            <div>
              <p className={`${T.title} text-[var(--ink)]`}>Merino Crewneck</p>
              <p className={`${T.num} mt-1.5 text-[var(--ink)]`}>$88.00</p>
              <p className={`${T.micro} mt-1`} style={{ color: INK_DIM }}>
                ★★★★★ 4.8 · 214
              </p>
              <div className="mt-3 flex gap-1.5">
                {["S", "M", "L"].map((s) => (
                  <span
                    key={s}
                    className={`${T.micro} rounded-[var(--r-sm)] border px-2.5 py-1 ${
                      s === "M"
                        ? "border-[var(--blue-500)] text-[var(--blue-600)]"
                        : "border-white/60 bg-white/35 text-[var(--ink)]"
                    }`}
                  >
                    {s}
                  </span>
                ))}
              </div>
              <button
                onClick={addToCart}
                className={`${BTN_DARK} mt-3.5 w-full transition-transform active:scale-[0.97]`}
              >
                Add to cart
              </button>
            </div>
          </div>
          {/* Deliberately dead: nothing here does what a shopper expects. */}
          <p className={`${T.micro} mt-4 rounded-[var(--r-md)] bg-[var(--paper)] p-3`} style={{ color: INK_DIM }}>
            Fabric: 100% RWS merino, 19.5 micron. Machine washable. Carbon-neutral shipping in 2–4 days.
          </p>
        </div>

        <Popup show={nudge === "exit"} className="bottom-4 left-4 w-[17rem] p-4">
          <span className={TRIGGER}>Exit intent</span>
          <p className={`${T.title} mt-2.5 text-[var(--ink)]`}>Before you go — 10% off?</p>
          <p className={`${T.micro} mt-1 text-[var(--ink-muted)]`}>
            Your cart&apos;s waiting. Here&apos;s a code for your first order.
          </p>
          <div className="mt-3 flex items-center gap-2">
            <span
              className={`${T.body} rounded-[var(--r-sm)] border border-dashed border-[#a9c4ff] px-2.5 py-2 font-mono text-[var(--blue-600)]`}
            >
              STAY10
            </span>
            <span className={`${BTN_BLUE} flex-1`}>Apply</span>
          </div>
        </Popup>

        <Popup show={nudge === "cart"} className="right-3 top-3 w-[15.5rem] p-3.5">
          <span className={TRIGGER}>Item added</span>
          <div className="mt-3 flex items-center gap-2.5">
            <PhotoSlot className="h-10 w-10 shrink-0 rounded-[var(--r-sm)]" />
            <div>
              <p className={`${T.title} text-[var(--ink)]`}>Still thinking it over?</p>
              <p className={`${T.micro} text-[var(--ink-muted)]`}>Merino Crewneck · M</p>
            </div>
          </div>
          <p className={`${T.micro} mt-3 text-[var(--ink-muted)]`}>
            {cartValue >= 75 ? "Free shipping unlocked" : `$${75 - cartValue} from free shipping`}
          </p>
          <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-[var(--line-soft)]">
            <div
              className="h-full rounded-full bg-[var(--blue-600)] transition-[width] duration-300"
              style={{ width: `${shipPct}%` }}
            />
          </div>
          <div className={`${BTN_DARK} mt-3`}>Go to cart</div>
        </Popup>

        {/* No translate-based centering — the entry keyframe animates transform. */}
        <Popup show={nudge === "bundle"} className="inset-x-6 top-[34%] p-3.5">
          <span className={TRIGGER}>Price hesitation</span>
          <p className={`${T.title} mt-2.5 text-[var(--ink)]`}>Not sure on sizing?</p>
          <p className={`${T.micro} mt-1 text-[var(--ink-muted)]`}>
            Most 40&quot; chests pick M. Add socks and get to free shipping — bundle saves $6.
          </p>
          <div className="mt-3 flex gap-2">
            <span className={`${BTN_GHOST} flex-1`}>Size guide</span>
            <span className={`${BTN_BLUE} flex-1`}>See bundle</span>
          </div>
        </Popup>

        <Popup show={nudge === "assist"} className="bottom-4 left-4 w-[16.5rem] p-3.5">
          <span className={`${T.label} text-[var(--danger)]`}>Rage clicks</span>
          <p className={`${T.title} mt-2.5 text-[var(--ink)]`}>Need help finding something?</p>
          <p className={`${T.micro} mt-1 text-[var(--ink-muted)]`}>
            Looks like that wasn&apos;t clickable. Want the size guide or to chat with us?
          </p>
          <div className="mt-3 flex gap-2">
            <span className={`${BTN_GHOST} flex-1`}>Size guide</span>
            <span className={`${BTN_DARK} flex-1`}>Chat</span>
          </div>
        </Popup>
      </div>

      <p className={T.micro} style={{ color: INK_DIM }}>
        Cart values shown here are simulated.
      </p>
    </div>
  );
}
