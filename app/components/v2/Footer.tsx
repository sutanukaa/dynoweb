"use client";

import { useState } from "react";
import { ArrowRight, Mail, ShoppingBag } from "lucide-react";

const APP_URL = "https://apps.shopify.com/dynoweb";

const LINK_COLUMNS = [
  {
    title: "Features",
    links: [
      { label: "Heatmaps", href: "/features/heatmaps" },
      { label: "Session replay", href: "/features/session-replay" },
      { label: "AI suggestions", href: "/features/ai-suggestions" },
      { label: "SmartNudge", href: "/features/smartnudge" },
      { label: "Revenue attribution", href: "/features/revenue-attribution" },
    ],
  },
  {
    title: "Product",
    links: [
      { label: "Pricing", href: "/pricing" },
      { label: "Use cases", href: "/use-cases" },
      { label: "Compare", href: "/vs" },
      { label: "Get on Shopify", href: APP_URL },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Case studies", href: "/case-studies" },
      { label: "Help", href: "/help" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our journey", href: "/our-journey" },
      { label: "Contact us", href: "/contact-us" },
      { label: "Privacy policy", href: "/privacy-policy" },
    ],
  },
];

export default function Footer() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setError(null);
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name")?.toString() ?? "").trim();
    const parts = name.split(/\s+/).filter(Boolean);
    const payload = {
      firstName: parts[0] ?? "",
      lastName: parts.slice(1).join(" ") || parts[0] || "",
      email: (data.get("email")?.toString() ?? "").trim(),
      message: (data.get("message")?.toString() ?? "").trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(result?.error || "Something went wrong");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Unknown error");
    }
  };

  return (
    <div className="font-inter w-full">
      {/* Contact card — elevated, straddling the white section above and the dark footer */}
      <div className="relative z-10 mx-auto -mb-40 max-w-[1200px] px-[clamp(1.25rem,5vw,4rem)]">
        <div
          className="relative overflow-hidden rounded-[2.5rem] border border-white/15 p-8 shadow-[0_40px_90px_-30px_rgba(10,22,51,0.65)] sm:p-12"
          style={{
            background: "linear-gradient(150deg,#4257d6 0%,#2536b8 52%,#1a2585 100%)",
          }}
        >
          {/* soft glows */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-[#7c88ee] opacity-40 blur-[90px]" />
            <div className="absolute -bottom-20 left-1/3 h-72 w-72 rounded-full bg-[#4657d6] opacity-40 blur-[90px]" />
          </div>

          <div className="relative grid gap-8 md:grid-cols-[1fr_1.1fr] md:items-center md:gap-12">
            <div>
              <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-white">
                Let&rsquo;s find your leak.
              </h2>
              <p className="mt-3 max-w-[38ch] text-white/70">
                Have a question, or want us to run a free leak report on your store? Drop us a line
                &mdash; a real human answers.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-white/40 focus:bg-white/15"
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@yourstore.com"
                  className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-white/40 focus:bg-white/15"
                />
              </div>
              <textarea
                name="message"
                required
                rows={3}
                placeholder="What&rsquo;s on your mind?"
                className="resize-y rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-white/40 focus:bg-white/15"
              />
              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--ink)] shadow-[0_10px_24px_-8px_rgba(0,0,0,0.5)] transition-colors hover:bg-white/90 disabled:opacity-70"
                >
                  {status === "loading" ? "Sending…" : "Send message"}
                  <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
                </button>
                {status === "success" && (
                  <span className="text-sm font-medium text-[#a7f3d0]">
                    Sent! We&rsquo;ll follow up shortly.
                  </span>
                )}
                {status === "error" && (
                  <span className="text-sm font-medium text-[#fca5a5]">
                    {error ?? "Something went wrong."}
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Dark footer */}
      <footer className="bg-[#0a0f24] px-[clamp(1.25rem,5vw,4rem)] pb-10 pt-56">
        <div className="mx-auto max-w-[1200px]">
          {/* Logo + links */}
          <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <a href="/" className="flex items-center gap-2.5" aria-label="DynoWeb home">
            <img src="/logo-short.png" alt="" width={32} height={32} className="h-8 w-8" />
            <span className="text-xl font-semibold tracking-[-0.02em] text-white">DynoWeb</span>
          </a>

          <div className="grid grid-cols-2 gap-x-12 gap-y-8 sm:grid-cols-4">
            {LINK_COLUMNS.map((col) => (
              <div key={col.title}>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white/40">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => {
                    const external = l.href.startsWith("http");
                    return (
                      <li key={l.label}>
                        <a
                          href={l.href}
                          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          className="relative inline-block text-sm text-white/55 transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-[1.5px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:text-white hover:after:origin-bottom-left hover:after:scale-x-100"
                        >
                          {l.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center gap-4 border-t border-white/10 pt-6 sm:flex-row sm:justify-between">
          <p className="text-sm text-white/40">
            © {"2025"} DynoWeb. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="mailto:help@dynoweb.app"
              aria-label="Email DynoWeb"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/60 transition-colors hover:border-white/30 hover:text-white"
            >
              <Mail className="h-4 w-4" strokeWidth={2} />
            </a>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="DynoWeb on the Shopify App Store"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/60 transition-colors hover:border-white/30 hover:text-white"
            >
              <ShoppingBag className="h-4 w-4" strokeWidth={2} />
            </a>
          </div>
        </div>
        </div>
      </footer>
    </div>
  );
}
