import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";

import {
  MarketingShell,
  Section,
  Eyebrow,
  Screenshot,
  FAQ,
  CTA,
  RelatedLinks,
  Prose,
  PrimaryButton,
  faqJsonLd,
  breadcrumbJsonLd,
  SITE_URL,
  APP_STORE_URL,
} from "@/app/components/seo/Marketing";
import ReadingProgress from "@/app/components/seo/ReadingProgress";
import ArticleToc from "@/app/components/seo/ArticleToc";

type Related = { label: string; href: string; description?: string };
type Faq = { q: string; a: string };

export function BlogArticle({
  slug,
  category,
  title,
  lead,
  readTime,
  date = "June 2026",
  published = "2026-06-06",
  heroImage,
  heroAlt,
  heroLabel,
  takeaways,
  children,
  faqs,
  related,
  cta,
}: {
  slug: string;
  category: string;
  title: string;
  lead: string;
  readTime: string;
  date?: string;
  published?: string;
  heroImage?: string;
  heroAlt?: string;
  heroLabel?: string;
  takeaways?: string[];
  children: ReactNode;
  faqs?: Faq[];
  related?: Related[];
  cta?: { title: string; body: string; primaryLabel?: string };
}) {
  const url = `${SITE_URL}/blog/${slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: lead,
    datePublished: published,
    dateModified: published,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Organization", name: "DynoWeb Team", url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: "DynoWeb",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
    image: heroImage ? `${SITE_URL}${heroImage}` : `${SITE_URL}/logo.png`,
  };

  const jsonLd: object[] = [
    articleJsonLd,
    breadcrumbJsonLd([
      { name: "Home", path: "" },
      { name: "Blog", path: "/blog" },
      { name: title, path: `/blog/${slug}` },
    ]),
  ];
  if (faqs?.length) jsonLd.push(faqJsonLd(faqs));

  return (
    <>
      <ReadingProgress />
      <MarketingShell jsonLd={jsonLd}>
        <Section className="pb-10 pt-10">
          <div className="mx-auto max-w-5xl">
            <Eyebrow>{category}</Eyebrow>
            <h1 className="mt-5 max-w-[28ch] font-[Montserrat] text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl xl:text-[3.75rem]">
              {title}
            </h1>
            <p className="mt-6 max-w-[68ch] text-base leading-8 text-zinc-300 sm:text-lg">{lead}</p>

            {/* Byline */}
            <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-zinc-400">
              <span className="inline-flex items-center gap-2 font-semibold text-zinc-200">
                <Image
                  src="/logo-short.png"
                  alt="DynoWeb"
                  width={22}
                  height={22}
                  className="rounded-md ring-1 ring-white/10"
                />
                By the DynoWeb Team
              </span>
              <span className="text-zinc-600">·</span>
              <span>Updated {date}</span>
              <span className="text-zinc-600">·</span>
              <span>{readTime}</span>
            </div>

            {heroImage ? (
              <div className="mt-8">
                <Screenshot
                  src={heroImage}
                  alt={heroAlt ?? title}
                  label={heroLabel}
                  priority
                  sizes="(min-width: 1024px) 64rem, 100vw"
                  minH="min-h-[240px] sm:min-h-[380px] lg:min-h-[460px]"
                />
              </div>
            ) : (
              <div className="mt-8 h-px w-full bg-white/10" />
            )}

            {takeaways?.length ? (
              <div className="mt-8 rounded-[1.5rem] border border-[#6eb0ff]/20 bg-[radial-gradient(circle_at_top_left,rgba(110,176,255,0.08),transparent_60%),rgba(255,255,255,0.02)] p-6 sm:p-7">
                <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.24em] text-[#6eb0ff]">
                  Key takeaways
                </p>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {takeaways.map((t, i) => (
                    <li key={i} className="flex gap-3 text-[0.95rem] leading-7 text-zinc-300">
                      <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full border border-[#6eb0ff]/25 bg-[#6eb0ff]/[0.1] text-[#6eb0ff]">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </Section>

        <Section className="pb-16">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-12">
            <div id="article-body">
              <Prose>{children}</Prose>
            </div>

            <aside className="hidden lg:block">
              <div className="sticky top-28 flex flex-col gap-4">
                <ArticleToc />

                <div className="rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.1),transparent_55%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6">
                  <p className="text-[0.66rem] font-extrabold uppercase tracking-[0.24em] text-[#6eb0ff]">
                    Try DynoWeb
                  </p>
                  <p className="mt-3 font-[Montserrat] text-lg font-extrabold leading-snug tracking-tight text-white">
                    See exactly what to fix in your store
                  </p>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    Heatmaps, session replays, and AI fixes — free to install.
                  </p>
                  <div className="mt-5">
                    <PrimaryButton label="Install free" href={APP_STORE_URL} external fullWidth />
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-5">
                  <p className="text-[0.66rem] font-extrabold uppercase tracking-[0.24em] text-zinc-500">
                    Start here
                  </p>
                  <ul className="mt-3 flex flex-col gap-2.5 text-sm">
                    {[
                      { label: "Shopify CRO guide", href: "/shopify-cro" },
                      { label: "60-point CRO checklist", href: "/blog/shopify-cro-checklist" },
                      { label: "Free CRO audit", href: "/free-shopify-cro-audit" },
                      { label: "Pricing", href: "/pricing" },
                    ].map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          className="inline-flex items-center gap-2 font-semibold text-zinc-300 transition hover:text-[#6eb0ff]"
                        >
                          <span className="text-[#6eb0ff]">→</span>
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </Section>

        {faqs?.length ? <FAQ title="Frequently asked questions" items={faqs} /> : null}

        {related?.length ? <RelatedLinks title="Keep reading" links={related} /> : null}

        <CTA
          title={cta?.title ?? "Stop guessing. See exactly what to fix."}
          body={
            cta?.body ??
            "DynoWeb watches every tap, scroll, and rage-click in your Shopify store and hands your dev the exact fix — file, diff, and projected lift."
          }
          primaryLabel={cta?.primaryLabel ?? "Install DynoWeb free"}
          secondary={{ label: "Read the Shopify CRO guide", href: "/shopify-cro" }}
        />
      </MarketingShell>
    </>
  );
}
