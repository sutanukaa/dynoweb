"use client";

import { useEffect, useState } from "react";

type Item = { id: string; text: string };

function slugify(s: string) {
  return (
    s
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .slice(0, 64) || "section"
  );
}

/**
 * Scans the rendered article (`#article-body`) for H2s on mount, assigns ids +
 * a hover anchor, builds a table of contents, and highlights the active section
 * with a scroll-spy. Works on any post with no per-post changes.
 */
export default function ArticleToc({ containerId = "article-body" }: { containerId?: string }) {
  const [items, setItems] = useState<Item[]>([]);
  const [active, setActive] = useState("");

  useEffect(() => {
    const container = document.getElementById(containerId);
    if (!container) return;
    const headings = Array.from(container.querySelectorAll<HTMLHeadingElement>("h2"));
    const used = new Set<string>();

    const list: Item[] = headings.map((h) => {
      const text = (h.textContent || "").trim();
      let id = h.id || slugify(text);
      while (used.has(id)) id += "-x";
      used.add(id);
      h.id = id;
      if (!h.querySelector(".heading-anchor")) {
        const a = document.createElement("a");
        a.href = `#${id}`;
        a.textContent = "#";
        a.className = "heading-anchor";
        a.setAttribute("aria-label", "Link to this section");
        h.appendChild(a);
      }
      return { id, text };
    });
    setItems(list);

    if (!headings.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive((visible[0].target as HTMLElement).id);
      },
      { rootMargin: "-100px 0px -68% 0px", threshold: 0 },
    );
    headings.forEach((h) => obs.observe(h));
    return () => obs.disconnect();
  }, [containerId]);

  if (items.length < 2) return null;

  return (
    <nav className="rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-5">
      <p className="text-[0.66rem] font-extrabold uppercase tracking-[0.24em] text-zinc-500">On this page</p>
      <ul className="mt-3 flex flex-col">
        {items.map((it) => {
          const isActive = active === it.id;
          return (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                className={`block border-l-2 py-1.5 pl-3 text-sm leading-snug transition ${
                  isActive
                    ? "border-[#6eb0ff] font-semibold text-white"
                    : "border-white/10 text-zinc-400 hover:border-white/30 hover:text-zinc-200"
                }`}
              >
                {it.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
