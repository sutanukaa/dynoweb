// Soft navy/white "shader" field — sweeping light arcs over paper, with film grain.
//
// Built in CSS rather than shipped as an image on purpose: it stays perfectly
// crisp at any resolution (including 4K/retina), costs no network request, and
// recolours from the design tokens instead of being baked in. A 4K background
// PNG would be several megabytes on a product whose pitch is "won't slow your
// store" (design.md §2).
//
// Grain is an inline SVG feTurbulence, so there's no texture file either.

const GRAIN =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="140" height="140">
       <filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch"/></filter>
       <rect width="140" height="140" filter="url(#n)" opacity="0.42"/>
     </svg>`,
  );

export default function ShaderBg({
  className = "",
  intensity = 1,
}: {
  className?: string;
  /** Scales the arc opacity. 1 = default, <1 quieter, >1 stronger. */
  intensity?: number;
}) {
  const a = (v: number) => (v * intensity).toFixed(3);

  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {/* Light field — two sweeping arcs (top-left, bottom-right) reading as a
          single raking light source, plus a soft white core so the middle of the
          section stays clean enough for text to sit on. */}
      <div
        className="absolute inset-0"
        style={{
          background: [
            // upper-left arc band
            `radial-gradient(120% 95% at -10% -15%, transparent 38%, rgba(30,85,224,${a(0.22)}) 47%, rgba(46,107,255,${a(0.08)}) 55%, transparent 68%)`,
            // lower-right arc band, deeper navy
            `radial-gradient(115% 90% at 112% 118%, transparent 36%, rgba(10,22,51,${a(0.2)}) 46%, rgba(20,42,92,${a(0.07)}) 56%, transparent 70%)`,
            // soft blue bloom behind centre
            `radial-gradient(70% 55% at 50% 42%, rgba(46,107,255,${a(0.07)}), transparent 70%)`,
            // white core keeps the reading area calm
            `radial-gradient(60% 48% at 50% 50%, rgba(255,255,255,0.94), transparent 72%)`,
            "var(--paper)",
          ].join(","),
        }}
      />

      {/* Film grain — what stops a big soft gradient from looking like flat banding. */}
      <div
        className="absolute inset-0 mix-blend-multiply"
        style={{
          backgroundImage: `url("${GRAIN}")`,
          backgroundRepeat: "repeat",
          opacity: 0.055 * intensity,
        }}
      />

      {/* Fade the whole field out at the top and bottom so it never hard-edges
          against the neighbouring sections. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, #fff 0%, transparent 14%, transparent 86%, #fff 100%)",
        }}
      />
    </div>
  );
}
