import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ComponentProps } from "react";

import Footer from "@/app/components/Footer";
import PillNav from "@/app/components/PillNav";
import HelpSidebar, {
  type HelpSearchEntry,
  type HelpSidebarNode,
  type HelpSidebarPageNode,
} from "@/app/help/HelpSidebar";
import { source } from "@/lib/source";
import { cn } from "@/lib/utils";

type PageProps = {
  params: Promise<{
    slug?: string[];
  }>;
};

type DocsPage = NonNullable<ReturnType<typeof source.getPage>>;
type DocsTree = ReturnType<typeof source.getPageTree>;
type DocsNode = DocsTree["children"][number];

const docsTree = source.getPageTree();
const orderedPages = flattenPages(docsTree);
const sidebarTree = serializeDocsTree(docsTree.children);
const searchEntriesPromise = buildHelpSearchEntries(orderedPages);
const defaultDescription =
  "Help articles, product guides, and API reference for the DynoWeb site.";
const articleClassName = cn(
  "max-w-none text-[1.02rem] leading-8 text-zinc-200",
  "[&_h1]:mt-0 [&_h1]:text-4xl [&_h1]:font-semibold [&_h1]:tracking-tight [&_h1]:text-white",
  "[&_h2]:mt-12 [&_h2]:scroll-mt-28 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-white",
  "[&_h3]:mt-8 [&_h3]:scroll-mt-28 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-white",
  "[&_p]:my-5 [&_p]:text-zinc-300",
  "[&_ul]:my-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-zinc-300",
  "[&_ol]:my-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:text-zinc-300",
  "[&_li]:my-2",
  "[&_a]:font-medium [&_a]:text-cyan-300 [&_a]:underline [&_a]:decoration-cyan-400/50 [&_a]:underline-offset-4",
  "[&_strong]:font-semibold [&_strong]:text-white",
  "[&_img]:my-6 [&_img]:block [&_img]:w-full [&_img]:rounded-[1.5rem] [&_img]:border [&_img]:border-white/10 [&_img]:bg-[#020817] [&_img]:shadow-[0_16px_45px_rgba(2,6,23,0.45)]",
  "[&_code]:rounded-md [&_code]:bg-white/10 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[0.95em] [&_code]:text-cyan-100",
  "[&_pre]:my-6 [&_pre]:overflow-x-auto [&_pre]:rounded-[1.5rem] [&_pre]:border [&_pre]:border-white/10 [&_pre]:bg-[#020617] [&_pre]:p-5",
  "[&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-zinc-100",
  "[&_blockquote]:my-6 [&_blockquote]:rounded-r-[1.5rem] [&_blockquote]:border-l-4 [&_blockquote]:border-cyan-400/60 [&_blockquote]:bg-white/[0.03] [&_blockquote]:px-5 [&_blockquote]:py-4 [&_blockquote]:text-zinc-300",
  "[&_hr]:my-10 [&_hr]:border-white/10",
  "[&_table]:my-6 [&_table]:w-full [&_table]:border-collapse [&_table]:overflow-hidden [&_table]:rounded-2xl",
  "[&_thead]:border-b [&_thead]:border-white/10",
  "[&_th]:bg-white/[0.04] [&_th]:px-4 [&_th]:py-3 [&_th]:text-left [&_th]:text-sm [&_th]:font-semibold [&_th]:text-white",
  "[&_td]:border-b [&_td]:border-white/5 [&_td]:px-4 [&_td]:py-3 [&_td]:align-top [&_td]:text-zinc-300"
);

export function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug = [] } = await params;
  const page = source.getPage(slug);

  if (!page) {
    return {
      title: "Help | DynoWeb",
      description: defaultDescription,
    };
  }

  return {
    title: `${page.data.title ?? "Help"} | DynoWeb Help`,
    description: page.data.description ?? defaultDescription,
  };
}

export default async function DocsPage({ params }: PageProps) {
  const { slug = [] } = await params;
  const page = source.getPage(slug);

  if (!page) notFound();

  const searchEntries = await searchEntriesPromise;
  const Content = page.data.body;
  const mdxComponents = {
    img: DocsImage,
  };
  const currentUrl = page.url;
  const { previous, next } = getNeighborPages(currentUrl);

  return (
    <>
      <PillNav />

      <main className="relative min-h-screen bg-[#050816] pt-24 text-white">
        <div className="absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.14),_transparent_45%),linear-gradient(180deg,_rgba(255,255,255,0.05),_transparent)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="grid gap-8 xl:grid-cols-[250px_minmax(0,1fr)_220px]">
            <aside className="xl:sticky xl:top-24 xl:self-start">
              <HelpSidebar
                currentUrl={currentUrl}
                tree={sidebarTree}
                searchEntries={searchEntries}
              />
            </aside>

            <article className="rounded-[1.75rem] border border-white/10 bg-[#020817]/85 p-6 shadow-[0_18px_60px_rgba(2,6,23,0.4)] sm:p-8">
              <header className="mb-8 border-b border-white/10 pb-6">
                <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  {page.data.title}
                </h1>
                {page.data.description ? (
                  <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-300">
                    {page.data.description}
                  </p>
                ) : null}
              </header>

              <div className={articleClassName}>
                <Content components={mdxComponents} />
              </div>

              {previous || next ? (
                <div className="mt-12 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-2">
                  {previous ? (
                    <PagerCard label="Previous" page={previous} />
                  ) : (
                    <div />
                  )}
                  {next ? <PagerCard label="Next" page={next} align="right" /> : <div />}
                </div>
              ) : null}
            </article>

            <aside className="xl:sticky xl:top-24 xl:self-start">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-zinc-400">
                  On This Page
                </p>
                {page.data.toc.length > 0 ? (
                  <nav className="mt-4 space-y-2" aria-label="Table of contents">
                    {page.data.toc.map((item) => (
                      <a
                        key={`${item.url}-${item.depth}`}
                        href={item.url}
                        className={cn(
                          "block rounded-2xl px-3 py-2 text-sm leading-6 text-zinc-400 transition hover:bg-white/[0.05] hover:text-white",
                          item.depth > 2 ? "ml-4" : ""
                        )}
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>
                ) : (
                  <p className="mt-4 text-sm leading-6 text-zinc-500">
                    Add <code>##</code> headings in your MDX to populate this
                    outline automatically.
                  </p>
                )}
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

function DocsImage({
  src,
  alt,
  className,
  width,
  height,
  ...props
}: ComponentProps<"img"> & {
  src?: string | { src?: string; width?: number; height?: number };
}) {
  const resolvedSrc = typeof src === "string" ? src : src?.src;
  const resolvedWidth = width ?? (typeof src === "object" ? src?.width : undefined);
  const resolvedHeight =
    height ?? (typeof src === "object" ? src?.height : undefined);

  if (!resolvedSrc) return null;

  return (
    <img
      {...props}
      alt={alt ?? ""}
      src={resolvedSrc}
      width={resolvedWidth}
      height={resolvedHeight}
      className={cn("h-auto", className)}
    />
  );
}

function PagerCard({
  label,
  page,
  align = "left",
}: {
  label: "Previous" | "Next";
  page: DocsPage;
  align?: "left" | "right";
}) {
  return (
    <Link
      href={page.url}
      className={cn(
        "rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-300/25 hover:bg-white/[0.05]",
        align === "right" ? "text-right" : "text-left"
      )}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
        {label}
      </p>
      <p className="mt-3 text-lg font-semibold tracking-tight text-white">
        {page.data.title}
      </p>
      {page.data.description ? (
        <p className="mt-2 text-sm leading-6 text-zinc-400">
          {page.data.description}
        </p>
      ) : null}
    </Link>
  );
}

function flattenPages(tree: DocsTree): DocsPage[] {
  const pages: DocsPage[] = [];
  const seen = new Set<string>();

  function push(page: ReturnType<typeof source.getNodePage> | undefined) {
    if (!page || seen.has(page.url)) return;

    seen.add(page.url);
    pages.push(page);
  }

  function visit(node: DocsNode) {
    switch (node.type) {
      case "page":
        push(source.getNodePage(node));
        break;
      case "folder":
        push(node.index ? source.getNodePage(node.index) : undefined);
        node.children.forEach(visit);
        break;
      case "separator":
        break;
    }
  }

  tree.children.forEach(visit);
  return pages;
}

function getNeighborPages(currentUrl: string) {
  const index = orderedPages.findIndex((page) => page.url === currentUrl);

  return {
    previous: index > 0 ? orderedPages[index - 1] : undefined,
    next:
      index >= 0 && index < orderedPages.length - 1
        ? orderedPages[index + 1]
        : undefined,
  };
}

function serializeDocsTree(nodes: DocsNode[]): HelpSidebarNode[] {
  return nodes.map(serializeDocsNode);
}

function serializeDocsNode(node: DocsNode): HelpSidebarNode {
  switch (node.type) {
    case "page":
      return serializePageNode(node);
    case "folder":
      return {
        type: "folder",
        name: String(node.name),
        description: node.description ? String(node.description) : undefined,
        defaultOpen: node.defaultOpen,
        collapsible: node.collapsible,
        index: node.index ? serializePageNode(node.index) : undefined,
        children: node.children.map(serializeDocsNode),
      };
    case "separator":
      return {
        type: "separator",
        name: node.name ? String(node.name) : undefined,
      };
  }
}

function serializePageNode(node: Extract<DocsNode, { type: "page" }>): HelpSidebarPageNode {
  return {
    type: "page",
    name: String(node.name),
    url: node.url,
    external: node.external,
  };
}

async function buildHelpSearchEntries(
  pages: DocsPage[]
): Promise<HelpSearchEntry[]> {
  return Promise.all(
    pages.map(async (page, order) => {
      const content = page.data.structuredData.contents
        .map((item) => item.content)
        .join(" ");

      return {
        order,
        url: page.url,
        title: page.data.title ?? "Help",
        description: page.data.description ?? "",
        content,
        sections: page.data.structuredData.headings.map((heading) => ({
          title: heading.content,
          url: `${page.url}#${heading.id}`,
        })),
      };
    })
  );
}
