// Vertical timeline primitives. Plain layout components — the rail is a 1px
// flex-1 connector between dots, so items self-size to their own content and
// the line always closes the gap without any measurement.

import { cn } from "@/lib/utils";

export function Timeline({ className, ...props }: React.ComponentProps<"ol">) {
  return <ol className={cn("flex flex-col", className)} {...props} />;
}

export function TimelineItem({ className, ...props }: React.ComponentProps<"li">) {
  return <li className={cn("flex gap-4 last:pb-0", className)} {...props} />;
}

export function TimelineSeparator({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex flex-col items-center", className)} aria-hidden="true" {...props} />;
}

export function TimelineDot({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "mt-1.5 flex h-[13px] w-[13px] shrink-0 items-center justify-center rounded-full border-[3px] border-[var(--blue-600)] bg-white shadow-[0_0_0_4px_rgba(30,85,224,0.12)]",
        className,
      )}
      {...props}
    />
  );
}

export function TimelineConnector({ className, ...props }: React.ComponentProps<"span">) {
  return <span className={cn("my-1.5 w-px flex-1 bg-[var(--line)]", className)} {...props} />;
}

export function TimelineContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("pb-8", className)} {...props} />;
}

export function TimelineTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      className={cn(
        "font-display text-base font-semibold leading-tight text-[var(--ink)]",
        className,
      )}
      {...props}
    />
  );
}

export function TimelineDescription({ className, ...props }: React.ComponentProps<"p">) {
  return <p className={cn("mt-1.5 text-sm leading-relaxed text-[var(--ink-muted)]", className)} {...props} />;
}
