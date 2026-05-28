import type { Metadata } from "next";
import PillNav from "@/app/components/PillNav";
import Footer from "@/app/components/Footer";
import PricingSection from "@/app/components/Pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent DynoWeb pricing. Start free with 1,500 sessions/month. Scale to Growth ($14/mo), Pro ($29/mo), or Custom (from $79/mo). MCP access included on every plan.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing | DynoWeb",
    description:
      "Simple, transparent DynoWeb pricing. Start free. Scale when you need more sessions, AI credits, and CRO firepower.",
    url: "https://www.dynoweb.app/pricing",
  },
};

export default function PricingPage() {
  return (
    <div
      className="font-poppins min-h-screen w-full"
      style={{ overflowX: "clip", background: "#0a0a0a" }}
    >
      <PillNav />
      <div style={{ paddingTop: "var(--pillnav-height, 72px)" }}>
        <PricingSection />
      </div>
      <Footer />
    </div>
  );
}
