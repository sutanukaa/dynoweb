import type { Metadata } from "next";
import Link from "next/link";

import {
  MarketingShell,
  Hero,
  Section,
  SectionHeading,
  CTA,
  breadcrumbJsonLd,
} from "@/app/components/seo/Marketing";

export const metadata: Metadata = {
  title: "DynoWeb Blog — Shopify CRO, Analytics & Conversion Guides",
  description:
    "Practical, data-backed guides on Shopify conversion rate optimization — heatmaps, rage clicks, checkout fixes, benchmarks, and more.",
  alternates: { canonical: "https://www.dynoweb.app/blog" },
  openGraph: {
    title: "DynoWeb Blog — Shopify CRO, Analytics & Conversion Guides",
    description:
      "Practical, data-backed guides on Shopify conversion rate optimization from the DynoWeb team.",
    url: "https://www.dynoweb.app/blog",
    siteName: "DynoWeb",
    type: "website",
  },
};

export const posts = [
  { slug: "shopify-conversion-rate-benchmark", category: "Benchmarks", title: "What's a Good Shopify Conversion Rate in 2026?", excerpt: "We break down Shopify conversion rate benchmarks by industry — and how to close the gap fast." },
  { slug: "why-shopify-store-not-converting", category: "Diagnosis", title: "12 Reasons Your Shopify Store Isn't Converting (+ Fixes)", excerpt: "Low traffic isn't always the problem. Here are 12 behavioral reasons — and how to diagnose each." },
  { slug: "shopify-cro-checklist", category: "Checklist", title: "The Ultimate Shopify CRO Checklist (60 Actionable Items)", excerpt: "A comprehensive checklist covering homepage, product pages, cart, checkout, and mobile UX." },
  { slug: "shopify-checkout-optimization", category: "Checkout", title: "10 Shopify Checkout Fixes That Actually Recover Revenue", excerpt: "Checkout is your highest-value page. Here are 10 data-backed fixes to reduce abandonment." },
  { slug: "shopify-product-page-optimization", category: "Product Pages", title: "Data-Driven Shopify Product Page Optimization Playbook", excerpt: "A behavioral-data-backed playbook for image order, CTAs, copy, and social proof." },
  { slug: "shopify-heatmap-guide", category: "Heatmaps", title: "The Complete Shopify Heatmap Guide for 2026", excerpt: "Everything you need to know about click maps, scroll maps, and attention maps — and how to act on them." },
  { slug: "shopify-ab-testing-guide", category: "Testing", title: "How to A/B Test Changes on Your Shopify Store", excerpt: "What to test, how to measure significance, and how to read results before you ship." },
  { slug: "shopify-rage-clicks", category: "Behavior", title: "Rage Clicks on Your Shopify Store? Here's What to Do", excerpt: "Rage clicks signal frustration. Here's how to find them on your store and fix them fast." },
  { slug: "shopify-scroll-depth-analytics", category: "Analytics", title: "Shopify Scroll Depth: Find Where Visitors Stop Reading", excerpt: "Most visitors never see your CTA. Scroll depth reveals where to place your highest-value content." },
  { slug: "shopify-dead-clicks", category: "Behavior", title: "Dead Clicks on Your Shopify Store: Causes & Fixes", excerpt: "Dead clicks happen when visitors click elements that aren't interactive. Here's how to spot and fix them." },
];

export default function BlogIndexPage() {
  return (
    <MarketingShell
      jsonLd={breadcrumbJsonLd([
        { name: "Home", path: "" },
        { name: "Blog", path: "/blog" },
      ])}
    >
      <Hero
        eyebrow="DynoWeb blog"
        title="Shopify CRO, analytics & conversion guides"
        lead="Practical, data-backed guides on improving your Shopify store's conversion rate — from heatmaps and rage clicks to checkout fixes and industry benchmarks. Written by the team building DynoWeb."
        primaryCta={{ label: "Install DynoWeb free", href: "https://apps.shopify.com/dynoweb", external: true }}
        secondaryCta={{ label: "Read the CRO guide", href: "/shopify-cro" }}
      />

      <Section className="pb-4">
        <SectionHeading eyebrow="Latest" title="All articles" />
      </Section>

      <Section className="pb-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-6 transition hover:border-white/20 hover:bg-white/[0.05]"
            >
              <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.24em] text-[#6eb0ff]">
                {post.category}
              </p>
              <p className="mt-3 font-[Montserrat] text-lg font-extrabold leading-snug tracking-tight text-white">
                {post.title}
              </p>
              <p className="mt-3 flex-1 text-sm leading-6 text-zinc-400">{post.excerpt}</p>
              <p className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-zinc-200 transition group-hover:text-[#6eb0ff]">
                Read article
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <CTA
        title="Put these tactics on autopilot"
        body="DynoWeb finds the friction these guides describe — automatically — and hands you the exact fix. Install free and see your store's biggest conversion leaks this week."
        secondary={{ label: "Read the CRO guide", href: "/shopify-cro" }}
      />
    </MarketingShell>
  );
}
