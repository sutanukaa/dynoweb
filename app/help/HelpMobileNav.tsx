"use client";

import { BookOpenText, ListTree } from "lucide-react";
import { useState } from "react";

import HelpSidebar, {
  type HelpSearchEntry,
  type HelpSidebarNode,
} from "@/app/help/HelpSidebar";
import { cn } from "@/lib/utils";

type TocItem = {
  url: string;
  title: string;
  depth: number;
};

export default function HelpMobileNav({
  currentUrl,
  tree,
  searchEntries,
  toc,
}: {
  currentUrl: string;
  tree: HelpSidebarNode[];
  searchEntries: HelpSearchEntry[];
  toc: TocItem[];
}) {
  const showGuides = currentUrl !== "/help";
  const [activePanel, setActivePanel] = useState<"guides" | "toc">(
    showGuides ? "guides" : "toc"
  );

  return (
    <div className="xl:hidden">
      {showGuides ? (
        <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.015))] p-3 shadow-[0_18px_40px_rgba(0,0,0,0.22)] backdrop-blur">
          <div className="rounded-[1.2rem] border border-white/10 bg-black/35 p-1">
            <div className="grid grid-cols-2 gap-1">
              <button
                type="button"
                onClick={() => setActivePanel("guides")}
                className={cn(
                  "flex items-center justify-center gap-2 rounded-[1rem] px-3 py-3 text-sm font-semibold transition",
                  activePanel === "guides"
                    ? "bg-white text-black shadow-[0_10px_24px_rgba(255,255,255,0.12)]"
                    : "text-zinc-400 hover:bg-white/[0.04] hover:text-white"
                )}
              >
                <BookOpenText className="h-4 w-4" />
                Guides
              </button>
              <button
                type="button"
                onClick={() => setActivePanel("toc")}
                className={cn(
                  "flex items-center justify-center gap-2 rounded-[1rem] px-3 py-3 text-sm font-semibold transition",
                  activePanel === "toc"
                    ? "bg-white text-black shadow-[0_10px_24px_rgba(255,255,255,0.12)]"
                    : "text-zinc-400 hover:bg-white/[0.04] hover:text-white"
                )}
              >
                <ListTree className="h-4 w-4" />
                On This Page
              </button>
            </div>
          </div>
        </div>
      ) : (
        <HelpSidebar
          currentUrl={currentUrl}
          tree={tree}
          searchEntries={searchEntries}
          embedded
          searchOnly
        />
      )}

      <div className="mt-4">
        {activePanel === "guides" && showGuides ? (
          <HelpSidebar
            currentUrl={currentUrl}
            tree={tree}
            searchEntries={searchEntries}
            embedded
          />
        ) : (
          <div className="rounded-[1.5rem] border border-white/10 bg-black/30 p-4 backdrop-blur-sm">
            {toc.length > 0 ? (
              <nav className="space-y-2" aria-label="Table of contents">
                {toc.map((item) => (
                  <a
                    key={`${item.url}-row`}
                    href={item.url}
                    className={cn(
                      "block rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm leading-6 text-zinc-300 transition hover:border-sky-300/20 hover:text-white",
                      item.depth > 2 ? "ml-4" : ""
                    )}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            ) : (
              <p className="text-sm leading-6 text-zinc-500">
                Add <code>##</code> headings in your MDX to populate this outline automatically.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
