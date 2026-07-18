import type { Metadata, Viewport } from "next";
import { Inter, Geist, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import OaiqPageView from "./components/OaiqPageView";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Signature display face for headlines (Hotjar-style two-font system; body stays Inter).
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const _desc =
  "DynoWeb watches every tap, scroll, and rage-click in your Shopify store, then hands your dev the exact file, before/after diff, and projected lift. Sub-40 KB tracker, SEO-safe, native Shopify app.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dynoweb.app"),
  title: {
    default: "DynoWeb — Shopify CRO App | Fix What's Losing Sales",
    template: "%s | DynoWeb",
  },
  description: _desc,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://www.dynoweb.app",
    siteName: "DynoWeb",
    title: "DynoWeb — Shopify CRO App | Fix What's Losing Sales",
    description: _desc,
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "DynoWeb — Shopify CRO app" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DynoWeb — Shopify CRO App | Fix What's Losing Sales",
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

// OpenAI (ChatGPT) conversion-tracking pixel — loaded near the top of <head> on every page.
// Set debug:false once you've verified events are firing in production.
const oaiqPixel = `!function(w,d,s,u){if(w.oaiq)return;var q=function(){q.q.push(arguments)};q.q=[];w.oaiq=q;var j=d.createElement(s);j.async=1;j.src=u;var f=d.getElementsByTagName(s)[0];f.parentNode.insertBefore(j,f)}(window,document,"script","https://bzrcdn.openai.com/sdk/oaiq.min.js");oaiq("init",{pixelId:"3GRD9beqaP27pzNYva8ooL",debug:true});`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)} suppressHydrationWarning>
      <head>
        {/* OpenAI / ChatGPT conversion pixel — kept first so it loads near the top of <head> */}
        <script dangerouslySetInnerHTML={{ __html: oaiqPixel }} />
        <link rel="icon" href="/logo-short.png" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      </head>
      <body
        className={`${inter.variable} ${bricolage.variable} antialiased font-inter`}
        suppressHydrationWarning
      >
        <OaiqPageView />
        {children}
      </body>
    </html>
  );
}
