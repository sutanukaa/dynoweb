import type { Metadata } from "next";
import PrivacyPolicyClient from "./PrivacyPolicyClient";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How DynoWeb collects, processes, and protects merchant and storefront visitor data on Shopify. GDPR-compliant, last updated May 5, 2026.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClient />;
}
