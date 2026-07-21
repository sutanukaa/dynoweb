// Corner-bracketed eyebrow — the small uppercase label that sits above a
// section heading. Two 10px corner rules (top-left, bottom-right) framing the
// text, which reads as a crop mark rather than another pill.
//
// Lifted out of Testimonials, where it was defined locally, so every section
// eyebrow is one component. If you're adding a new section, use this rather
// than restating the uppercase/tracking classes.
//
// `tone` picks the ink, not the geometry:
//   ink   — default, on the light paper sections
//   blue  — on white, where the eyebrow itself should carry the accent
//   light — on a dark or saturated field (navy sections, the blue bento)
export default function Bracket({
  children,
  tone = "ink",
}: {
  children: React.ReactNode;
  tone?: "ink" | "blue" | "light";
}) {
  const corner =
    tone === "light" ? "border-white/55" : "border-[var(--blue-600)]";
  const text =
    tone === "light"
      ? "text-white/75"
      : tone === "blue"
        ? "text-[var(--blue-600)]"
        : "text-[var(--ink-muted)]";

  return (
    <span className="relative inline-flex items-center px-3 py-1">
      <span
        aria-hidden="true"
        className={`absolute left-0 top-0 h-2.5 w-2.5 border-l-[1.5px] border-t-[1.5px] ${corner}`}
      />
      <span
        aria-hidden="true"
        className={`absolute bottom-0 right-0 h-2.5 w-2.5 border-b-[1.5px] border-r-[1.5px] ${corner}`}
      />
      <span
        className={`text-[0.7rem] font-semibold uppercase tracking-[0.14em] ${text}`}
      >
        {children}
      </span>
    </span>
  );
}
