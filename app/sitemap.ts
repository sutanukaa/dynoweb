import type { MetadataRoute } from "next";

import { posts as blogPosts } from "./blog/page";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.dynoweb.app";
  const now = new Date();

  const core: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/use-cases`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/help`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact-us`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/case-studies`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  // Pillar pages
  const pillars: MetadataRoute.Sitemap = [
    "/shopify-cro",
    "/shopify-analytics",
    "/shopify-session-replay",
    "/shopify-heatmaps",
  ].map((path) => ({ url: `${base}${path}`, lastModified: now, changeFrequency: "monthly", priority: 0.9 }));

  // Feature pages
  const features: MetadataRoute.Sitemap = [
    "/features/ai-suggestions",
    "/features/session-replay",
    "/features/heatmaps",
    "/features/revenue-attribution",
    "/features/cart-overview",
    "/features/mcp-integration",
    "/features/dynoagent",
  ].map((path) => ({ url: `${base}${path}`, lastModified: now, changeFrequency: "monthly", priority: 0.8 }));

  // Comparison pages
  const comparisons: MetadataRoute.Sitemap = [
    "/vs",
    "/vs/hotjar",
    "/vs/microsoft-clarity",
    "/vs/lucky-orange",
    "/vs/glew",
  ].map((path) => ({ url: `${base}${path}`, lastModified: now, changeFrequency: "monthly", priority: 0.7 }));

  // Use-case subpages
  const useCases: MetadataRoute.Sitemap = [
    "/use-cases/reduce-cart-abandonment",
    "/use-cases/increase-product-page-conversions",
    "/use-cases/shopify-mobile-optimization",
    "/use-cases/shopify-for-developers",
  ].map((path) => ({ url: `${base}${path}`, lastModified: now, changeFrequency: "monthly", priority: 0.7 }));

  // Programmatic + landing pages
  const landing: MetadataRoute.Sitemap = [
    "/shopify-cro-agency-alternative",
    "/shopify-analytics-no-code",
    "/shopify-app-store",
    "/free-shopify-cro-audit",
  ].map((path) => ({ url: `${base}${path}`, lastModified: now, changeFrequency: "monthly", priority: 0.7 }));

  // Blog
  const blog: MetadataRoute.Sitemap = [
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    ...blogPosts
      .filter((post) => !post.href)
      .map((post) => ({
        url: `${base}/blog/${post.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      })),
  ];

  return [...core, ...pillars, ...features, ...comparisons, ...useCases, ...landing, ...blog];
}
