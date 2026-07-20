// Animated blue conic ring. Wrap any element; the 1.5px gap around the child
// shows the spinning gradient as its border. `radius="full"` (default) is for
// pill-shaped chips/badges; `radius="md"` matches design.md's button radius
// (10px, "NOT a pill") — use it wrapping CTA buttons.
export default function SpinBorder({
  children,
  className = "",
  radius = "full",
}: {
  children: React.ReactNode;
  className?: string;
  radius?: "full" | "md";
}) {
  const r = radius === "md" ? "rounded-[10px]" : "rounded-full";
  return (
    <span className={`relative inline-flex overflow-hidden ${r} p-[1px] ${className}`}>
      <span className="absolute inset-[-1000%] animate-[spin_3.5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,rgba(46,107,255,0.06)_0%,rgba(46,107,255,0.38)_50%,rgba(46,107,255,0.06)_100%)]" />
      <span className={`relative z-10 inline-flex overflow-hidden ${r}`}>{children}</span>
    </span>
  );
}
