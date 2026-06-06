import type { ReactNode } from "react";

import {
  MarketingShell,
  Section,
  Eyebrow,
  FAQ,
  CTA,
  RelatedLinks,
  Prose,
  faqJsonLd,
  breadcrumbJsonLd,
  SITE_URL,
} from "@/app/components/seo/Marketing";

type Related = { label: string; href: string; description?: string };
type Faq = { q: string; a: string };

export function BlogArticle({
  slug,
  category,
  title,
  lead,
  readTime,
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
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Organization", name: "DynoWeb" },
    publisher: {
      "@type": "Organization",
      name: "DynoWeb",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
    image: `${SITE_URL}/logo.png`,
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
    <MarketingShell jsonLd={jsonLd}>
      <Section className="pb-10 pt-10">
        <Eyebrow>{category}</Eyebrow>
        <h1 className="mt-5 max-w-[28ch] font-[Montserrat] text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl xl:text-[3.75rem]">
          {title}
        </h1>
        <p className="mt-6 max-w-[68ch] text-base leading-8 text-zinc-300 sm:text-lg">{lead}</p>
        <p className="mt-6 text-[0.78rem] font-extrabold uppercase tracking-[0.24em] text-zinc-500">
          DynoWeb · {readTime}
        </p>
        <div className="mt-8 h-px w-full bg-white/10" />
      </Section>

      <Section className="pb-16">
        <Prose>{children}</Prose>
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
  );
}
