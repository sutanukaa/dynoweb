// Animated blue conic ring that clips to a pill shape. Wrap any rounded-full
// element; the 1.5px gap around the child shows the spinning gradient as its border.
export default function SpinBorder({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`relative inline-flex overflow-hidden rounded-full p-[1px] ${className}`}>
      <span className="absolute inset-[-1000%] animate-[spin_3.5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,rgba(46,107,255,0.06)_0%,rgba(46,107,255,0.38)_50%,rgba(46,107,255,0.06)_100%)]" />
      <span className="relative z-10 inline-flex overflow-hidden rounded-full">{children}</span>
    </span>
  );
}
