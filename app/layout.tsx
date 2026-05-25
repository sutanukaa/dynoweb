import type { Metadata, Viewport } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const _desc =
  "DynoWeb watches every tap, scroll, and rage-click in your Shopify store, then hands your dev the exact file, before/after diff, and projected lift. Sub-40 KB tracker, SEO-safe, native Shopify app.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dynoweb.app"),
  title: {
    default: "DynoWeb — See exactly what to fix in your Shopify store",
    template: "%s | DynoWeb",
  },
  description: _desc,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://www.dynoweb.app",
    siteName: "DynoWeb",
    title: "DynoWeb — See exactly what to fix in your Shopify store",
    description: _desc,
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "DynoWeb — Shopify CRO app" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DynoWeb — See exactly what to fix in your Shopify store",
    description: _desc,
    images: ["/logo.png"],
  },
  icons: { icon: "/logo-short.png", apple: "/icon1.png" },
  manifest: "/site.webmanifest",
  keywords: [
    "Shopify CRO",
    "Shopify analytics",
    "Shopify session replay",
    "conversion rate optimization",
    "Shopify heatmaps",
  ],
  verification: {
    google: "Ps587Wbp6dD6eiRop85qP60iw1yAxvwp1FPuhjdG3-I",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

const ld = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "DynoWeb",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Shopify",
      url: "https://www.dynoweb.app",
      sameAs: ["https://apps.shopify.com/dynoweb"],
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      description:
        "AI-powered CRO tool that pinpoints revenue-leaking pages in your Shopify store and hands your dev the exact fix.",
      image: "https://www.dynoweb.app/logo.png",
    },
    {
      "@type": "Organization",
      name: "DynoWeb",
      url: "https://www.dynoweb.app",
      logo: "https://www.dynoweb.app/logo.png",
      sameAs: ["https://apps.shopify.com/dynoweb"],
    },
    {
      "@type": "WebSite",
      name: "DynoWeb",
      url: "https://www.dynoweb.app",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo-short.png" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      </head>
      <body
        className={`${inter.variable} antialiased font-inter`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
