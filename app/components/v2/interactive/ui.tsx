// Design primitives for the interactive bento.
//
// The rules these encode, because breaking them is what made the first pass read
// as generated UI:
//   · Five type steps. Nothing else. No arbitrary sub-pixel sizes.
//   · Three radii, from the tokens in globals.css. rounded-full only for dots.
//   · Two glass tiers only: .dw-glass-frost for tile shells, .dw-glass for
//     things that float. Everything else is a translucent white fill.
//     (Glass is the one place a surface carries both an edge and a shadow —
//     the 1px white border is the specular highlight, not an outline, and
//     without it frost has no rim and reads as a flat translucent rectangle.)
//   · Icons come from lucide-react, never from unicode glyphs.

export const T = {
  /** 11px mono, uppercase — data labels, KPI captions, trigger names */
  label: "font-mono text-[11px] uppercase leading-[1.4] tracking-[0.07em]",
  /** 11px sans — footnotes, disclaimers, marker notes */
  micro: "text-[11px] leading-[1.45]",
  /** 13px — body copy, blurbs, chat, buttons */
  body: "text-[13px] leading-[1.5]",
  /** 15px — card titles, product names */
  title: "text-[15px] font-semibold leading-[1.3] tracking-[-0.01em]",
  /** 20px display — tile titles */
  tile: "font-display text-[20px] font-semibold leading-[1.15] tracking-[-0.022em]",
  /** 28px mono — the one big number per surface */
  metric: "font-mono text-[28px] font-medium leading-none tracking-[-0.02em] tabular-nums",
  /** 15px mono — inline figures inside data rows */
  num: "font-mono text-[15px] font-medium tabular-nums",
};

// Exactly ONE backdrop-filter per stacking path. The tile shell is frosted and
// the few genuinely-floating things are frosted; everything nested inside is a
// plain translucent fill. Four blur layers deep was both expensive and visually
// mushy — the frost stops reading as frost when it's frosting frost.
// The rule on the blue field: tile chrome is dark glass, anything representing
// product UI (a storefront, a chat window, a suggestion card) is a light
// surface carrying .dw-uninvert so its internals keep the light tokens.
export const S = {
  /** Frosted white card. dw-uninvert because the tile is a light surface on a
   * blue field: only the section header around it stays inverted. */
  tile: "dw-uninvert dw-glass-card rounded-[var(--r-xl)]",
  /**
   * Storefront frames. Opaque light, because a real storefront is a real light
   * page. `isolate` is load-bearing: it opens a stacking context so the heat
   * canvas's mix-blend-multiply blends against this frame and the mockup
   * inside it, rather than sampling the blue field and turning muddy.
   */
  frame: "dw-uninvert isolate rounded-[var(--r-lg)] border border-white/70 bg-white",
  /** Recessed panel inside a light surface. Fill only. */
  inset: "rounded-[var(--r-md)] bg-[var(--paper)]",
  /** Floating light surfaces: nudge popups, the deck, tooltips. */
  raised: "dw-uninvert dw-glass rounded-[var(--r-lg)]",
};

// Reads the token, so it flips with .dw-invert / .dw-uninvert like everything else.
export const INK_DIM = "var(--ink-dim)";

export function Tile({
  eyebrow,
  title,
  blurb,
  className = "",
  children,
}: {
  eyebrow: string;
  title: string;
  blurb?: string;
  className?: string;
  children: React.ReactNode;
}) {
  // Not .dw-reveal: that class is opacity:0 until the shared ScrollReveal pass
  // lights it, and it left this whole section blank. These tiles are content.
  return (
    // Height is capped so a grid row always fits one screen. Everything inside
    // flexes against that cap instead of the tile growing to fit its contents.
    //
    // The underscores in calc() are required: Tailwind converts `_` to a space,
    // and CSS calc() is invalid without spaces around the operator. Written as
    // `calc(100vh-8rem)` the whole declaration is dropped at build time, the
    // tile gets no height, and nothing can ever overflow or scroll.
    <div
      className={`flex flex-col overflow-hidden lg:h-[min(40rem,calc(100vh_-_8rem))] ${S.tile} ${className}`}
    >
      <div className="shrink-0 px-5 pb-3 pt-5 sm:px-6">
        <p className={`${T.label} text-[var(--brand-accent)]`}>{eyebrow}</p>
        <h3 className={`${T.tile} mt-2 max-w-[36ch] text-[var(--ink)]`}>{title}</h3>
        {blurb && <p className={`${T.body} mt-2 max-w-[58ch] text-[var(--ink-muted)]`}>{blurb}</p>}
      </div>
      {/* Scrolls rather than clips: inner panels keep a sensible minimum height
          and overflow here, instead of being squeezed to fit the cap.
          data-lenis-prevent is required — the page runs Lenis in root mode
          (components/v2/SmoothScroll.tsx), which swallows wheel events and
          applies them to the window, so nested scrollers do nothing without it. */}
      <div
        data-lenis-prevent
        className="dw-tile-scroll flex min-h-0 flex-1 flex-col overflow-y-auto"
      >
        {children}
      </div>
    </div>
  );
}

const TIER_DOT: Record<string, string> = {
  "Quick Win": "var(--success)",
  Strategic: "var(--blue-500)",
  Ambitious: "#7c5cd6",
};

// A dot plus a word, not a filled capsule. Same information, no extra box.
export function Tier({ label }: { label: string }) {
  return (
    <span className={`${T.label} flex items-center gap-1.5 text-[var(--ink)]`}>
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: TIER_DOT[label] }} />
      {label}
    </span>
  );
}

export function BrowserBar({ url }: { url: string }) {
  return (
    <div className="flex items-center gap-2.5 border-b border-[var(--line-soft)] px-3.5 py-2.5">
      <div className="flex gap-1.5">
        {[0, 1, 2].map((i) => (
          <span key={i} className="h-2 w-2 rounded-full bg-[var(--line)]" />
        ))}
      </div>
      <div className={`${T.micro} mx-auto flex-1 truncate text-center`} style={{ maxWidth: 300, color: INK_DIM }}>
        {url}
      </div>
    </div>
  );
}

// Deliberate redaction, not a missing asset — now a tinted pane so it reads as
// frosted glass rather than a grey hole punched in the card.
export function PhotoSlot({ className = "" }: { className?: string }) {
  return (
    <div
      className={`border border-white/50 bg-[rgba(10,22,51,0.05)] ${className}`}
      aria-hidden="true"
    />
  );
}
