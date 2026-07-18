"use client";

import { useEffect } from "react";

// Lights every reveal element — highlight strokes (.dw-highlight-svg) and slide-ins
// (.dw-reveal) — once its top crosses the reveal line, and keeps it lit. A scroll-
// position check (not IntersectionObserver's momentary isIntersecting) so nothing is
// missed when Lenis animates quickly past an element or the page loads mid-scroll.
export default function ScrollReveal() {
  useEffect(() => {
    const pending = new Set(
      document.querySelectorAll<HTMLElement>(".dw-highlight-svg, .dw-reveal"),
    );
    if (!pending.size) return;

    let raf = 0;
    const reveal = () => {
      raf = 0;
      const line = window.innerHeight * 0.9; // reveal once top passes 90% down
      for (const el of pending) {
        if (el.getBoundingClientRect().top < line) {
          el.classList.add("dw-lit");
          pending.delete(el);
        }
      }
      if (!pending.size) stop();
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(reveal);
    };
    const stop = () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    reveal(); // initial pass — lights whatever is already in view (e.g. the hero)

    return stop;
  }, []);

  return null;
}
