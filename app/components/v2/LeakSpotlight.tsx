"use client";

// The hero visual: a storefront gone quiet, with exactly one element lit.
//
// Concept matches the ui-ux-pro-max "Before-After Transformation" pattern —
// muted/grey (before) vs vibrant (after) — the dataset's strongest visual-proof
// pattern for demonstrating value.
//
// Built in CSS, not as a screenshot: stays crisp at every breakpoint (design.md
// §8 — a blurry screenshot on an analytics product is self-refuting), and no
// baked-in text means no wrong logo and no hallucinated statistic.
//
// ⚠️ CSS constraint that shapes this structure: `filter` on a parent rasterizes
// its entire subtree, so a child CANNOT opt back out with grayscale(0). The lit
// button is therefore a SIBLING overlaid on the greyed layer, never a descendant
// of it. Nesting it inside .dw-quiet silently renders it grey.
//
// Every figure here is documented in public/docs/design.md §2. Never add a number
// to this component that isn't traceable to a real store.

const STORE = {
  kicker: "Luxury skincare serum",
  name: "Radiance Renewal Serum",
  price: "₹4,900",
  blurb: "Revitalize your skin with our award-winning serum, formulated to hydrate and illuminate.",
};

function Bottle() {
  return (
    <svg viewBox="0 0 80 120" className="h-[58%] w-auto" fill="none" aria-hidden="true">
      <rect x="33" y="4" width="14" height="18" rx="3" fill="#C9D2E0" />
      <rect x="28" y="22" width="24" height="10" rx="2" fill="#B8C4D6" />
      <path d="M24 34h32a8 8 0 0 1 8 8v62a8 8 0 0 1-8 8H24a8 8 0 0 1-8-8V42a8 8 0 0 1 8-8Z" fill="#DCE3ED" />
      <rect x="24" y="58" width="32" height="22" rx="2" fill="#C9D2E0" />
    </svg>
  );
}

export default function LeakSpotlight() {
  return (
    <div className="relative w-full">
      <div
        aria-hidden="true"
        className="relative overflow-hidden rounded-[var(--r-lg)] border border-[var(--line)] bg-white shadow-[var(--shadow-lg)] lg:rounded-r-none lg:border-r-0"
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-2 border-b border-[var(--line)] bg-[var(--paper)] px-4 py-2.5">
          <span className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <span key={i} className="h-2.5 w-2.5 rounded-full bg-[#E4E8EF]" />
            ))}
          </span>
          <span className="ml-3 flex-1 truncate rounded-[6px] bg-white px-2.5 py-1 text-[11px] text-[var(--ink-muted)]">
            yourstore.myshopify.com
          </span>
        </div>

        {/* Store body. `dw-quiet` is applied to each quiet element INDIVIDUALLY rather
            than to a wrapping parent — that keeps the lit button in normal document
            flow with no filtered ancestor, so it can never be greyed and can never
            drift out of alignment with a mirrored overlay. */}
        <div className="grid grid-cols-[1.05fr_1fr] gap-5 p-5 sm:gap-7 sm:p-7">
          <div className="dw-quiet flex aspect-[4/5] items-center justify-center rounded-[var(--r-md)] bg-[#EFF2F6]">
            <Bottle />
          </div>

          <div className="flex flex-col">
            <p className="dw-quiet text-[11px] text-[var(--ink-muted)]">{STORE.kicker}</p>
            <h3 className="dw-quiet font-display mt-1 text-[15px] font-semibold leading-tight text-[var(--ink)] sm:text-[17px]">
              {STORE.name}
            </h3>
            <p className="dw-quiet mt-2 text-[15px] font-semibold tabular-nums text-[var(--ink)]">
              {STORE.price}
            </p>

            <div className="dw-quiet mt-3.5">
              <p className="text-[10px] uppercase tracking-[0.1em] text-[var(--ink-muted)]">
                Variant
              </p>
              <div className="mt-1.5 flex gap-2">
                {["#D8DEE8", "#E8DCD6", "#E4D2D2"].map((c, i) => (
                  <span
                    key={c}
                    className="h-6 w-6 rounded-full border"
                    style={{ background: c, borderColor: i === 0 ? "var(--navy-300)" : "var(--line)" }}
                  />
                ))}
              </div>
            </div>

            <p className="dw-quiet mt-3.5 hidden text-[11px] leading-relaxed text-[var(--ink-muted)] sm:block">
              {STORE.blurb}
            </p>

            {/* ---- The one lit element. No filtered ancestor — see note above. ---- */}
            <div className="relative mt-auto pt-6">
              {/* Selection marker with corner ticks — the app's "found it" gesture */}
              <span className="pointer-events-none absolute inset-x-[-7px] bottom-[-7px] top-[17px] rounded-[8px] border border-[var(--blue-600)]">
                {[
                  "left-[-3px] top-[-3px]",
                  "right-[-3px] top-[-3px]",
                  "left-[-3px] bottom-[-3px]",
                  "right-[-3px] bottom-[-3px]",
                ].map((pos) => (
                  <span
                    key={pos}
                    className={`absolute h-[5px] w-[5px] border border-[var(--blue-600)] bg-white ${pos}`}
                  />
                ))}
              </span>
              <span className="dw-pulse flex h-[42px] items-center justify-center rounded-[var(--r-md)] bg-[var(--blue-600)] text-[13px] font-semibold text-white">
                Add to cart
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ---- The finding. Sits outside the storefront so "your store" and "what we
           found" stay two separate voices. Aligned right, beneath the button it
           refers to, with a short connector — geometry that holds at any width. ---- */}
      <div className="mt-4 flex justify-start lg:justify-end lg:pr-[6%]">
        <div className="lg:text-right">
          <span
            aria-hidden="true"
            className="mb-2 hidden h-5 w-px bg-[var(--blue-600)] lg:ml-auto lg:block"
          />
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-[var(--ink-muted)]">
            The one thing
          </p>
          <p className="font-display mt-1 text-[15px] font-semibold leading-snug text-[var(--ink)]">
            <span className="tabular-nums">52,370</span> rage clicks landed here
          </p>
          <p className="mt-1 text-xs text-[var(--ink-muted)]">Live data — The Punarvasu</p>
        </div>
      </div>

      <p className="sr-only">
        A product page from a real Shopify store, greyed out except for its Add to cart button,
        which is highlighted to show where 52,370 rage clicks landed on The Punarvasu.
      </p>
    </div>
  );
}
