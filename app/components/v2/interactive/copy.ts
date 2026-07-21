// All the words in this section, in one place, so voice can be edited without
// touching component code.
//
// ── THE ONE RULE, if you rewrite these ──
// Vary the SHAPE, not just the wording. The previous draft read as machine-
// written because all four tile titles were the same length, the same
// imperative mood, and ended in the same full stop, and all thirteen segment
// lines opened with the identical stem "Fires when a visitor…".
//
// So the four titles below are deliberately mismatched: one long and factual,
// one clipped, one a question, one a fragment. Keep that asymmetry when you
// swap the words. If your four replacements all scan the same, the section
// will read as generated again no matter how it's styled.
//
// Also: em-dashes were at 56 in this section. They're a tell. Prefer a full
// stop, a comma, or a colon.

export const SECTION = {
  eyebrow: "Live demo",
  // Plain and declarative. Not a slogan. Split so the second half can carry the
  // highlighter stroke — the two concatenate back to the original sentence.
  // The accent must fit one line — HighlightMarker paints a single stroke across
  // its whole box, so a phrase that wraps gets one streak floating between the
  // lines. Keep it short; the heading breaks before the marker.
  title: "Try it here, before you ",
  titleAccent: "install anything.",
  intro:
    "Everything below runs on simulated data, but the behaviour is real. Move your cursor. Click something. Break it if you can.",
  footnote:
    "Projections are projections: patterns from similar Shopify stores, never a guarantee. Previews change nothing on a live theme.",
};

export const TILES = {
  // Long, plain, factual. The odd one out by length.
  heatmap: {
    eyebrow: "Heatmaps",
    title: "Your cursor paints the same heatmap our tracker builds from real sessions.",
    blurb:
      "Three tabs, three stories. Hover any marker for that element's own numbers, or click one spot three times to trip the rage detector.",
  },
  // Clipped. No blurb at all.
  nudge: {
    eyebrow: "SmartNudge",
    title: "Trip one yourself.",
    blurb: "",
  },
  // A question.
  suggestions: {
    eyebrow: "AI suggestions",
    title: "What would you actually change?",
    blurb: "",
  },
  // Fragment, then one clause.
  agent: {
    eyebrow: "DynoAgent",
    title: "Approval-gated. Always.",
    blurb:
      "It reads your store and drafts changes on request. Nothing it writes reaches your theme until you approve it, and every change is one click to undo.",
  },
};

// Only the four segments a visitor can genuinely trip inside the tile. The
// previous list had thirteen, nine of which needed session history or
// multi-page behaviour the demo can't produce — selecting them just forced a
// popup to appear, which taught nothing. `hint` is the instruction; if you add
// a row here, the storefront has to actually detect it.
export const TRIGGERS = [
  { id: "rage", title: "Rage clicks", hint: "Click anywhere in the storefront three times fast" },
  { id: "exit", title: "Exit intent", hint: "Move your cursor out the top edge" },
  { id: "dwell", title: "Price hesitation", hint: "Hover the storefront, then do nothing for 3s" },
  { id: "cart", title: "Item added", hint: "Press Add to cart" },
];
