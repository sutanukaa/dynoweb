// Ambient brand-blue wavy lines. Decorative only. Stretches to fill its
// relatively/absolutely-positioned parent; sits behind content via -z-10.
export default function WaveBg({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 h-full w-full ${className}`}
      viewBox="0 0 1440 600"
      preserveAspectRatio="none"
      fill="none"
    >
      <defs>
        <linearGradient id="waveblue" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#1e55e0" stopOpacity="0.9" />
          <stop offset="0.32" stopColor="#2e6bff" stopOpacity="0" />
          <stop offset="0.68" stopColor="#2e6bff" stopOpacity="0" />
          <stop offset="1" stopColor="#1e55e0" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      {[-40, 60, 160, 260, 360, 460].map((dy, i) => (
        <path
          key={dy}
          d={`M-40 ${120 + dy} C 260 ${40 + dy}, 500 ${200 + dy}, 780 ${120 + dy} S 1260 ${40 + dy}, 1480 ${140 + dy}`}
          stroke="url(#waveblue)"
          strokeWidth="2"
          opacity={0.4 - i * 0.04}
        />
      ))}
    </svg>
  );
}
