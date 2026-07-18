// Blue highlighter marker behind an inline phrase (matches the hero).
export default function HighlightMarker({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block">
      <svg
        className="dw-highlight-svg absolute left-[1%] top-0 z-0 h-full w-[98%]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <g>
          <path d="M2 52 C20 48,42 46,62 47 C78 48,90 50,98 49" stroke="#6eb0ff" strokeWidth="44" strokeLinecap="butt" opacity="0.4" fill="none" />
          <path d="M2 51 C22 47,46 45,66 46 C80 47,91 49,98 48" stroke="#9dd8ff" strokeWidth="30" strokeLinecap="butt" opacity="0.5" fill="none" />
          <path d="M4 34 C24 31,48 30,68 31 C82 32,92 33,98 32" stroke="#3a7adc" strokeWidth="2.5" strokeLinecap="butt" opacity="0.55" fill="none" />
        </g>
      </svg>
      <span className="relative z-[1]">{children}</span>
    </span>
  );
}
