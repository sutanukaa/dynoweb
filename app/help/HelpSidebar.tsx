"use client";

import Link from "next/link";
import { Search, X } from "lucide-react";
import { useDeferredValue, useMemo, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

export type HelpSidebarPageNode = {
  type: "page";
  name: string;
  url: string;
  external?: boolean;
};

type HelpSidebarFolderNode = {
  type: "folder";
  name: string;
  description?: string;
  defaultOpen?: boolean;
  collapsible?: boolean;
  index?: HelpSidebarPageNode;
  children: HelpSidebarNode[];
};

type HelpSidebarSeparatorNode = {
  type: "separator";
  name?: string;
};

export type HelpSidebarNode =
  | HelpSidebarPageNode
  | HelpSidebarFolderNode
  | HelpSidebarSeparatorNode;

type HelpSearchSection = {
  title: string;
  url: string;
};

export type HelpSearchEntry = {
  order: number;
  url: string;
  title: string;
  description: string;
  content: string;
  sections: HelpSearchSection[];
};

type HelpSearchResult = HelpSearchEntry & {
  matchingSections: HelpSearchSection[];
  preview: string;
  score: number;
};

export default function HelpSidebar({
  tree,
  currentUrl,
  searchEntries,
}: {
  tree: HelpSidebarNode[];
  currentUrl: string;
  searchEntries: HelpSearchEntry[];
}) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const deferredQuery = useDeferredValue(normalizedQuery);
  const isSearching = normalizedQuery !== deferredQuery;

  const results = useMemo(
    () => (deferredQuery ? searchDocs(searchEntries, deferredQuery) : []),
    [deferredQuery, searchEntries]
  );

  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.02] p-5 backdrop-blur">
      <div className="border-b border-white/10 pb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-zinc-400">
          Search Help
        </p>
        <div className="relative mt-4">
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500"
          />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search guides and topics"
            aria-label="Search help articles"
            autoComplete="off"
            className="w-full rounded-2xl border border-white/10 bg-[#09090d]/85 py-3 pl-11 pr-12 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-sky-300/35 focus:ring-2 focus:ring-sky-300/12"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-zinc-500 transition hover:bg-white/[0.05] hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          ) : null}
        </div>
        <p className="mt-3 text-sm leading-6 text-zinc-500">
          {deferredQuery
            ? isSearching
              ? "Updating results..."
              : `${results.length} result${results.length === 1 ? "" : "s"}`
            : "Search page titles, descriptions, and section headings."}
        </p>
      </div>

      {deferredQuery ? (
        <SearchResults
          currentUrl={currentUrl}
          query={query.trim()}
          results={results}
        />
      ) : (
        <nav className="mt-5 space-y-2" aria-label="Documentation navigation">
          {tree.map((node, index) => (
            <SidebarNode
              key={`${node.type}-${getNodeId(node)}-${index}`}
              node={node}
              currentUrl={currentUrl}
            />
          ))}
        </nav>
      )}
    </div>
  );
}

function SearchResults({
  currentUrl,
  query,
  results,
}: {
  currentUrl: string;
  query: string;
  results: HelpSearchResult[];
}) {
  if (results.length === 0) {
    return (
      <div className="mt-5 rounded-[1.5rem] border border-dashed border-white/10 bg-[#09090d]/70 px-4 py-5 text-sm leading-6 text-zinc-400">
        No help articles matched{" "}
        <span className="font-medium text-white">{query}</span>.
      </div>
    );
  }

  return (
    <div className="mt-5 space-y-3" aria-label="Search results">
      {results.map((result) => (
        <div
          key={result.url}
          className={cn(
            "rounded-[1.5rem] border bg-[#0a0b10]/78 p-4 transition",
            currentUrl === result.url
              ? "border-sky-300/25 shadow-[0_0_0_1px_rgba(125,211,252,0.1)]"
              : "border-white/10"
          )}
        >
          <Link
            href={result.url}
            className="block rounded-2xl text-sm transition hover:text-sky-200"
          >
            <p className="text-base font-semibold tracking-tight text-white">
              {result.title}
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.22em] text-zinc-500">
              {formatUrl(result.url)}
            </p>
            {result.preview ? (
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {result.preview}
              </p>
            ) : null}
          </Link>

          {result.matchingSections.length > 0 ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {result.matchingSections.map((section) => (
                <Link
                  key={section.url}
                  href={section.url}
                  className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-xs font-medium text-zinc-300 transition hover:border-sky-300/25 hover:text-white"
                >
                  {section.title}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

function SidebarNode({
  node,
  currentUrl,
  level = 0,
}: {
  node: HelpSidebarNode;
  currentUrl: string;
  level?: number;
}) {
  const indentClass = level === 0 ? "" : level === 1 ? "ml-3" : "ml-6";

  if (node.type === "separator") {
    if (!node.name) {
      return <div className="my-4 border-t border-white/10" />;
    }

    return (
      <div className="pt-4 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
        {node.name}
      </div>
    );
  }

  if (node.type === "page") {
    return (
      <NavLink
        href={node.url}
        external={node.external}
        active={node.url === currentUrl}
        className={indentClass}
      >
        {node.name}
      </NavLink>
    );
  }

  const isOpen = node.defaultOpen ?? nodeContainsUrl(node, currentUrl);
  const children = [...(node.index ? [node.index] : []), ...node.children];

  if (node.collapsible === false) {
    return (
      <div className={cn("space-y-2", indentClass)}>
        <div className="px-3 pt-2 text-sm font-semibold tracking-tight text-zinc-100">
          {node.name}
        </div>
        {node.description ? (
          <p className="px-3 text-sm leading-6 text-zinc-500">
            {node.description}
          </p>
        ) : null}
        <div className="space-y-2">
          {children.map((child, index) => (
            <SidebarNode
              key={`${child.type}-${getNodeId(child)}-${index}`}
              node={child}
              currentUrl={currentUrl}
              level={level + 1}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <details open={isOpen} className={cn("group space-y-2", indentClass)}>
      <summary className="cursor-pointer list-none rounded-2xl px-3 py-2 text-sm font-semibold tracking-tight text-zinc-100 transition hover:bg-white/[0.05]">
        <span>{node.name}</span>
        {node.description ? (
          <span className="mt-1 block text-sm font-normal leading-6 text-zinc-500">
            {node.description}
          </span>
        ) : null}
      </summary>
      <div className="space-y-2">
        {children.map((child, index) => (
          <SidebarNode
            key={`${child.type}-${getNodeId(child)}-${index}`}
            node={child}
            currentUrl={currentUrl}
            level={level + 1}
          />
        ))}
      </div>
    </details>
  );
}

function NavLink({
  href,
  active,
  external,
  className,
  children,
}: {
  href: string;
  active?: boolean;
  external?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const classes = cn(
    "block rounded-2xl border px-3 py-2 text-sm leading-6 transition",
    active
      ? "border-sky-300/20 bg-sky-400/[0.08] text-white shadow-[0_0_0_1px_rgba(125,211,252,0.1)]"
      : "border-transparent text-zinc-400 hover:border-white/10 hover:bg-white/[0.05] hover:text-white",
    className
  );

  if (external) {
    return (
      <a className={classes} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {children}
    </Link>
  );
}

function searchDocs(entries: HelpSearchEntry[], query: string): HelpSearchResult[] {
  const tokens = query.split(/\s+/).filter(Boolean);

  return entries
    .map((entry) => {
      const title = entry.title.toLowerCase();
      const description = entry.description.toLowerCase();
      const content = entry.content.toLowerCase();
      const sections = entry.sections.map((section) => ({
        ...section,
        normalized: section.title.toLowerCase(),
      }));
      const corpus = [title, description, content, ...sections.map((section) => section.normalized)].join(" ");

      if (!tokens.every((token) => corpus.includes(token))) {
        return null;
      }

      let score = 0;

      if (title.startsWith(query)) score += 140;
      else if (title.includes(query)) score += 90;

      if (description.includes(query)) score += 45;
      if (content.includes(query)) score += 24;

      for (const token of tokens) {
        if (title.startsWith(token)) score += 28;
        else if (title.includes(token)) score += 18;

        if (description.includes(token)) score += 10;
        if (content.includes(token)) score += 4;

        for (const section of sections) {
          if (section.normalized.startsWith(token)) score += 18;
          else if (section.normalized.includes(token)) score += 10;
        }
      }

      const matchingSections = sections
        .filter((section) =>
          tokens.some((token) => section.normalized.includes(token))
        )
        .slice(0, 3)
        .map((section) => ({
          title: section.title,
          url: section.url,
        }));

      return {
        ...entry,
        matchingSections,
        preview: buildPreview(entry, query, tokens),
        score,
      };
    })
    .filter((result): result is HelpSearchResult => result !== null)
    .sort((left, right) => {
      if (right.score !== left.score) {
        return right.score - left.score;
      }

      return left.order - right.order;
    })
    .slice(0, 8);
}

function buildPreview(
  entry: HelpSearchEntry,
  query: string,
  tokens: string[]
): string {
  const description = entry.description.trim();
  const normalizedDescription = description.toLowerCase();

  if (
    description &&
    (normalizedDescription.includes(query) ||
      tokens.some((token) => normalizedDescription.includes(token)))
  ) {
    return description;
  }

  return buildSnippet(entry.content, tokens);
}

function buildSnippet(content: string, tokens: string[]): string {
  const normalizedContent = content.replace(/\s+/g, " ").trim();

  if (!normalizedContent) {
    return "";
  }

  const lowerContent = normalizedContent.toLowerCase();
  let matchIndex = Number.POSITIVE_INFINITY;

  for (const token of tokens) {
    const index = lowerContent.indexOf(token);
    if (index !== -1 && index < matchIndex) {
      matchIndex = index;
    }
  }

  if (!Number.isFinite(matchIndex)) {
    return clampText(normalizedContent, 150);
  }

  const start = Math.max(0, matchIndex - 44);
  const end = Math.min(normalizedContent.length, matchIndex + 116);
  const prefix = start > 0 ? "..." : "";
  const suffix = end < normalizedContent.length ? "..." : "";

  return `${prefix}${normalizedContent.slice(start, end).trim()}${suffix}`;
}

function clampText(value: string, maxLength: number): string {
  if (value.length <= maxLength) {
    return value;
  }

  return `${value.slice(0, maxLength).trimEnd()}...`;
}

function nodeContainsUrl(node: HelpSidebarNode, currentUrl: string): boolean {
  switch (node.type) {
    case "page":
      return node.url === currentUrl;
    case "folder":
      return (
        (node.index?.url ?? "") === currentUrl ||
        node.children.some((child) => nodeContainsUrl(child, currentUrl))
      );
    case "separator":
      return false;
  }
}

function getNodeId(node: HelpSidebarNode): string {
  switch (node.type) {
    case "page":
      return node.url;
    case "folder":
      return node.name;
    case "separator":
      return node.name ?? "divider";
  }
}

function formatUrl(url: string): string {
  if (!url.startsWith("/help")) {
    return url;
  }

  return url.replace("/help/", "").replace("/help", "home");
}
