"use client";

import { ArrowRight } from "lucide-react";

const APP_URL = "https://apps.shopify.com/dynoweb";

export default function InstallFreeButton({
  label = "Install free",
  href = APP_URL,
  className = "",
}: {
  label?: string;
  href?: string;
  className?: string;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      aria-label={label}
      className={`group relative block w-44 overflow-hidden rounded-full border border-[var(--line)] bg-white p-2.5 text-center text-sm font-semibold text-black ${className}`}
    >
      {/* Resting label — slides out to the right on hover */}
      <span className="inline-block transition-all duration-300 group-hover:translate-x-[130%] group-hover:opacity-0">
        {label}
      </span>
      {/* Reveal label + arrow — slides in from the left on hover */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 z-10 flex h-full w-full -translate-x-[130%] items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
      >
        {label}
        <ArrowRight className="h-4 w-4" strokeWidth={2} />
      </span>
      {/* Expanding blob — hidden at rest, grows in from the centre on hover */}
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 scale-0 rounded-lg bg-[rgba(30,85,224,0.55)] opacity-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] backdrop-blur-xl backdrop-saturate-150 transition-all duration-300 group-hover:left-0 group-hover:top-0 group-hover:h-full group-hover:w-full group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-[1.8] group-hover:opacity-100"
      />
    </a>
  );
}
