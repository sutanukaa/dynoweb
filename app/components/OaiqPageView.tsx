"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

type Oaiq = (event: string, name: string, params?: Record<string, unknown>) => void;

/**
 * Fires the OpenAI (ChatGPT) pixel `page_viewed` conversion event on every
 * page — including client-side route changes, which a one-time <head> script
 * would miss in a Next.js App Router app. The pixel queue (`window.oaiq`) is
 * created synchronously by the setup script in the document <head>, so calls
 * made here are safely queued until the SDK finishes loading.
 */
export default function OaiqPageView() {
  const pathname = usePathname();

  useEffect(() => {
    const oaiq = (window as unknown as { oaiq?: Oaiq }).oaiq;
    if (typeof oaiq === "function") {
      oaiq("measure", "page_viewed", { type: "contents" });
    }
  }, [pathname]);

  return null;
}
