"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

import InstallFreeButton from "./InstallFreeButton";

const FEATURES = [
  { label: "Heatmaps", href: "/features/heatmaps", desc: "Click, scroll & frustration maps" },
  { label: "Session replay", href: "/features/session-replay", desc: "Watch real shopper sessions" },
  { label: "AI suggestions", href: "/features/ai-suggestions", desc: "Ranked, ready-to-ship fixes" },
  { label: "Revenue attribution", href: "/features/revenue-attribution", desc: "Tie sessions to real orders" },
  { label: "SmartNudge", href: "/features/smartnudge", desc: "Behavior-triggered interventions" },
  { label: "MCP integration", href: "/features/mcp-integration", desc: "Your store data in your AI tools" },
];

const LINKS = [
  { label: "Compare", href: "/vs" },
  { label: "Pricing", href: "/pricing" },
  { label: "Use cases", href: "/use-cases" },
  { label: "Blog", href: "/blog" },
];

// Animated hover underline — sweeps in from the left on hover
const UNDERLINE =
  "relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-900 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100";

export default function Navbar({ onDark = false }: { onDark?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // `onDark` = the hero behind this nav is dark, so at scroll 0 the nav must render
  // light-on-dark. Once the glass fill fades in past 40px it flips back to ink.
  const light = onDark && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`font-inter fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${
        scrolled || open
          ? "border-[var(--line)] bg-white/70 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-[clamp(1.25rem,5vw,4rem)]">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2" aria-label="DynoWeb home">
          <img src="/logo-short.png" alt="" width={28} height={28} className="h-7 w-7" />
          <span
            className={`text-[1.05rem] font-semibold tracking-[-0.02em] transition-colors ${
              light ? "text-white" : "text-gray-900"
            }`}
          >
            DynoWeb
          </span>
        </a>

        {/* Center links (desktop) */}
        <div className="hidden items-center gap-7 md:flex">
          {/* Features dropdown — opens on hover + keyboard focus */}
          <div className="group relative">
            <button
              className={`inline-flex items-center gap-1 text-sm font-medium transition-colors ${
                light
                  ? "text-white/80 hover:text-white group-focus-within:text-white"
                  : "text-gray-600 hover:text-gray-900 group-focus-within:text-gray-900"
              } ${UNDERLINE}`}
            >
              Features
              <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" strokeWidth={2} />
            </button>
            <div className="invisible absolute left-1/2 top-full z-10 w-[520px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="grid grid-cols-2 gap-1 rounded-2xl border border-[var(--line)] bg-white p-2 shadow-[0_2px_4px_rgba(10,22,51,0.04),0_24px_64px_-16px_rgba(10,22,51,0.22)]">
                {FEATURES.map((f) => (
                  <a
                    key={f.href}
                    href={f.href}
                    className="rounded-xl px-3 py-2.5 transition-colors hover:bg-[var(--paper)]"
                  >
                    <div className="text-sm font-medium text-gray-900">{f.label}</div>
                    <div className="mt-0.5 text-xs text-gray-500">{f.desc}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                light ? "text-white/80 hover:text-white" : "text-gray-600 hover:text-gray-900"
              } ${UNDERLINE}`}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right actions (desktop) */}
        <div className="hidden items-center gap-4 md:flex">
          <InstallFreeButton className="!w-36 !p-2" />
        </div>

        {/* Mobile toggle */}
        <button
          className={`inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors md:hidden ${
            light ? "text-white hover:bg-white/10" : "text-gray-700 hover:bg-[var(--paper)]"
          }`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile panel */}
      {open && (
        <div className="border-t border-[var(--line)] bg-white/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-[1200px] flex-col px-[clamp(1.25rem,5vw,4rem)] py-4">
            <p className="px-1 pb-1 pt-2 text-xs font-semibold uppercase tracking-[0.1em] text-gray-400">
              Features
            </p>
            {FEATURES.map((f) => (
              <a
                key={f.href}
                href={f.href}
                className="rounded-lg px-1 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                onClick={() => setOpen(false)}
              >
                {f.label}
              </a>
            ))}
            <div className="my-2 h-px bg-[var(--line)]" />
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-1 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <div className="my-2 h-px bg-[var(--line)]" />
            <InstallFreeButton className="mt-2" />
          </div>
        </div>
      )}
    </header>
  );
}
