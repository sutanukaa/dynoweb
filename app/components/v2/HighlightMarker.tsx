// Blue highlighter marker behind an inline phrase (matches the hero).
// `white` swaps the stroke colours for use on the dark sections — same three
// strokes, same geometry, so the two read as one marker in two inks.
export default function HighlightMarker({
  children,
  white = false,
}: {
  children: React.ReactNode;
  white?: boolean;
}) {
  const [broad, mid, line] = white
    ? ["#ffffff", "#ffffff", "#ffffff"]
    : ["#6eb0ff", "#9dd8ff", "#3a7adc"];
  // White on navy needs less paint than blue on white or it reads as a solid bar.
  const [o1, o2, o3] = white ? [0.16, 0.2, 0.5] : [0.4, 0.5, 0.55];

  // whitespace-nowrap is load-bearing, not cosmetic. The stroke is one SVG
  // absolutely stretched over this span's box, so if the phrase wraps, the box
  // becomes N lines tall and the marker is painted ONCE across the whole block —
  // floating in the gutter between lines and running past the last word. Keeping
  // the phrase on a single line is what the geometry assumes. Marked phrases
  // must therefore stay short; the line will break before the marker instead.
  return (
    <span className="relative inline-block whitespace-nowrap">
      <svg
        className="dw-highlight-svg absolute left-[1%] top-0 z-0 h-full w-[98%]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <g>
          <path d="M2 52 C20 48,42 46,62 47 C78 48,90 50,98 49" stroke={broad} strokeWidth="44" strokeLinecap="butt" opacity={o1} fill="none" />
          <path d="M2 51 C22 47,46 45,66 46 C80 47,91 49,98 48" stroke={mid} strokeWidth="30" strokeLinecap="butt" opacity={o2} fill="none" />
          <path d="M4 34 C24 31,48 30,68 31 C82 32,92 33,98 32" stroke={line} strokeWidth="2.5" strokeLinecap="butt" opacity={o3} fill="none" />
        </g>
      </svg>
      <span className="relative z-[1]">{children}</span>
    </span>
  );
}
