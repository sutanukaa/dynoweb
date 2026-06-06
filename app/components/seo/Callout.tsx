import type { ReactNode } from "react";
import { Lightbulb, Info, Sparkles } from "lucide-react";

type Variant = "tip" | "note" | "product";

const VARIANTS: Record<Variant, { icon: typeof Lightbulb; label: string; blue: boolean }> = {
  tip: { icon: Lightbulb, label: "Tip", blue: true },
  note: { icon: Info, label: "Note", blue: false },
  product: { icon: Sparkles, label: "With DynoWeb", blue: true },
};

/** Inline editorial callout for blog prose — Tip / Note / product tie-in. */
export function Callout({
  variant = "tip",
  title,
  children,
}: {
  variant?: Variant;
  title?: string;
  children: ReactNode;
}) {
  const v = VARIANTS[variant];
  const Icon = v.icon;
  return (
    <div
      className={`dw-callout not-prose my-7 flex gap-4 rounded-2xl border p-5 ${
        v.blue ? "border-[#6eb0ff]/25 bg-[#6eb0ff]/[0.06]" : "border-white/12 bg-white/[0.03]"
      }`}
    >
      <span
        className={`mt-0.5 inline-flex h-9 w-9 flex-none items-center justify-center rounded-xl ${
          v.blue ? "bg-[#6eb0ff]/15 text-[#6eb0ff]" : "bg-white/10 text-zinc-300"
        }`}
      >
        <Icon className="h-4 w-4" strokeWidth={2} />
      </span>
      <div className="text-[0.97rem] leading-7 text-zinc-300">
        <p
          className={`mb-1 text-[0.68rem] font-extrabold uppercase tracking-[0.22em] ${
            v.blue ? "text-[#6eb0ff]" : "text-zinc-500"
          }`}
        >
          {title ?? v.label}
        </p>
        {children}
      </div>
    </div>
  );
}
