"use client";

import { useEffect, useState } from "react";

/** Thin blue bar pinned to the very top that fills as the reader scrolls the article. */
export default function ReadingProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setPct(max > 0 ? Math.min(100, Math.max(0, (el.scrollTop / max) * 100)) : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[10000] h-[3px]" aria-hidden="true">
      <div
        className="h-full rounded-r-full bg-gradient-to-r from-[#3b6fbe] via-[#6eb0ff] to-[#93c5fd]"
        style={{ width: `${pct}%`, boxShadow: "0 0 10px rgba(110,176,255,0.7)" }}
      />
    </div>
  );
}
