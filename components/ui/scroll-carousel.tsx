"use client";

// Pinned horizontal carousel: the section sticks to the viewport and the card
// rows travel sideways as you scroll down. Two rows moving in opposite
// directions; below md it degrades to a plain vertical stack with a fade-in.
//
// Deviations from the reference implementation this came from, all deliberate:
//  - Row 2's order is a fixed rotation, NOT `[...items].sort(() => Math.random() - 0.5)`.
//    A random sort during render produces a different order on the server than on
//    the client, which is a guaranteed hydration mismatch.
//  - useEffect, not useLayoutEffect — the latter warns on every SSR render and
//    there is nothing here to measure before paint.
//  - Cards are content-first, not image-first: we have no photography of these
//    stores and inventing some would contradict the whole pitch. The card body
//    is whatever the caller renders.
//  - ponytail: progress bar is a solid fill, not the animated diagonal-stripe
//    gradient. Swap in the striped background if it ever needs to read as "live".

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export interface ScrollCarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  className?: string;
  /** Scroll distance the pin lasts for. Defaults to the row's own travel. */
  maxScrollHeight?: number;
}

export function ScrollCarousel<T>({
  items,
  renderItem,
  className,
  maxScrollHeight,
}: ScrollCarouselProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rowARef = useRef<HTMLDivElement>(null);
  const rowBRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  // Offset rotation rather than a shuffle — deterministic, so server and client
  // render the same order, and still visibly different from row A.
  const itemsB = items.map((_, i) => items[(i + Math.ceil(items.length / 2)) % items.length]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const sync = () => setIsDesktop(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!isDesktop) {
        // Mobile: each card fades up as it arrives. No pin, no horizontal travel.
        gsap.utils.toArray<HTMLElement>(".dw-carousel-card").forEach((card) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 32 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: { trigger: card, start: "top 85%", once: true },
            },
          );
        });
        return;
      }

      const containerW = containerRef.current?.offsetWidth ?? 0;
      const travelA = (rowARef.current?.scrollWidth ?? 0) - containerW;
      const travelB = (rowBRef.current?.scrollWidth ?? 0) - containerW;
      if (travelA <= 0) return; // rows already fit — nothing to scroll

      const distance = maxScrollHeight ?? travelA;
      const trigger = {
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${distance}`,
        scrub: 1,
      };

      gsap.fromTo(rowARef.current, { x: 0 }, { x: -travelA, ease: "none", scrollTrigger: { ...trigger, pin: true } });
      gsap.fromTo(rowBRef.current, { x: -travelB }, { x: 0, ease: "none", scrollTrigger: trigger });
      gsap.fromTo(progressRef.current, { width: "0%" }, { width: "100%", ease: "none", scrollTrigger: trigger });
    }, containerRef);

    return () => ctx.revert();
  }, [isDesktop, maxScrollHeight]);

  const row = "flex flex-col gap-6 md:flex-row md:flex-nowrap";

  return (
    <div
      ref={containerRef}
      // Card height is a variable so both rows plus the gap and the progress bar
      // are guaranteed to fit one viewport: (100vh - nav - progress - gap) / 2.
      style={{ "--dw-card-h": "min(300px, calc((100vh - 190px) / 2))" } as React.CSSProperties}
      className={cn(
        "relative overflow-hidden md:flex md:h-screen md:flex-col md:justify-center md:gap-6",
        // Feathers the rows into the page edges instead of clipping them dead.
        "md:[mask-image:linear-gradient(to_right,transparent_0,black_6%,black_94%,transparent_100%)]",
        className,
      )}
    >
      <div ref={rowARef} className={row}>
        {items.map((item, i) => (
          <div key={i} className="dw-carousel-card shrink-0 md:h-[var(--dw-card-h)] md:w-[420px]">
            {renderItem(item, i)}
          </div>
        ))}
      </div>

      {/* Second row is desktop-only: on mobile it would just repeat every card. */}
      <div ref={rowBRef} className={cn(row, "hidden md:flex")}>
        {itemsB.map((item, i) => (
          <div key={i} className="dw-carousel-card shrink-0 md:h-[var(--dw-card-h)] md:w-[420px]">
            {renderItem(item, i)}
          </div>
        ))}
      </div>

      {isDesktop && (
        <div className="absolute bottom-8 left-1/2 h-1.5 w-56 -translate-x-1/2 overflow-hidden rounded-full bg-[var(--line)]">
          <div ref={progressRef} className="h-full w-0 rounded-full bg-[var(--blue-600)]" />
        </div>
      )}
    </div>
  );
}

export default ScrollCarousel;
