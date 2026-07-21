"use client";

import { useEffect } from "react";

// Lights every reveal element — highlight strokes (.dw-highlight-svg) and
// slide-ins (.dw-reveal) — once it reaches the reveal line, and keeps it lit.
//
// This previously drove everything from a window `scroll` listener. That is
// fragile in two ways that both end in the same silent failure: the section
// stays at opacity 0 forever and reads as a blank gap in the page. It bit the
// interactive bento, then AfterInstall.
//   · the page runs Lenis in root mode, so scroll delivery is not something we
//     should be depending on for content visibility at all;
//   · the listener removed itself the moment its pending set drained, so any
//     element that hadn't been reached yet could be stranded.
//
// IntersectionObserver has neither problem: it is driven by the compositor, not
// by events, and each element is observed independently. The one thing it gets
// wrong on its own is a fast Lenis jump that skips an element entirely — the
// callback then arrives with isIntersecting false — so we also light anything
// whose top has already passed the line. Fail open: visible is the safe state.
export default function ScrollReveal() {
  useEffect(() => {
    // Opt the page into the hidden-until-revealed state only now that we know
    // this effect actually runs. The CSS leaves everything VISIBLE without
    // .dw-js, so any error that stops this effect degrades to "no animation"
    // rather than "no content" — which is how whole sections went blank.
    document.documentElement.classList.add("dw-js");

    const els = Array.from(
      document.querySelectorAll<HTMLElement>(".dw-highlight-svg, .dw-reveal"),
    );
    if (!els.length) return;

    const light = (el: Element) => el.classList.add("dw-lit");

    if (typeof IntersectionObserver === "undefined") {
      els.forEach(light);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting || e.boundingClientRect.top < window.innerHeight * 0.9) {
            light(e.target);
            io.unobserve(e.target);
          }
        }
      },
      // Reveal slightly before the element's top edge is fully in view, matching
      // the old 90%-of-viewport line.
      { rootMargin: "0px 0px -10% 0px" },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
