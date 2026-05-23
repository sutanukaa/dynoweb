import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.dynoweb.app";
  const now = new Date();

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/use-cases`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/help`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact-us`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/case-studies`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/compare/hotjar`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/compare/microsoft-clarity`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/compare/lucky-orange`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];
}
