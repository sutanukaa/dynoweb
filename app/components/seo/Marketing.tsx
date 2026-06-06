import type { ComponentType, CSSProperties, ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";

import Footer from "@/app/components/Footer";
import PillNav from "@/app/components/PillNav";

export type IconType = ComponentType<{ className?: string; strokeWidth?: number }>;

/* ------------------------------------------------------------------ */
/*  Shared constants                                                   */
/* ------------------------------------------------------------------ */

export const APP_STORE_URL = "https://apps.shopify.com/dynoweb";
export const SITE_URL = "https://www.dynoweb.app";

export const pageShell = "relative w-full";
export const pageShellStyle = { paddingInline: "clamp(1.25rem, 5vw, 7rem)" } as const;

const ArrowIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Primary button — the signature white pill with blue under-glow +    */
/*  letter/arrow glow hover (shared `uv-btn` styles from globals.css,    */
/*  matching the homepage Installation-section button).                 */
/* ------------------------------------------------------------------ */

function uvLetters(label: string) {
  return Array.from(label).map((c, i) =>
    c === " " ? (
      <span key={i} style={{ display: "inline-block", width: "0.4em" }} />
    ) : (
      <span key={i} className="uv-btn-letter" style={{ color: "#000" }}>
        {c}
      </span>
    ),
  );
}

export function PrimaryButton({
  label,
  href,
  external = false,
  fullWidth = false,
}: {
  label: string;
  href: string;
  external?: boolean;
  fullWidth?: boolean;
}) {
  const btnStyle: CSSProperties = {
    background: "#fff",
    color: "#000",
    border: "1px solid #000",
    borderRadius: "999px",
    padding: "0.72rem 1.6rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    fontSize: "0.875rem",
    fontWeight: 800,
    width: fullWidth ? "100%" : undefined,
  };
  const wrapStyle: CSSProperties = {
    textDecoration: "none",
    display: fullWidth ? "block" : "inline-block",
    width: fullWidth ? "100%" : undefined,
  };
  const inner = (
    <div className="uv-btn" style={btnStyle}>
      <div className="uv-txt-wrapper">
        <div className="uv-txt-1">{uvLetters(label)}</div>
        <div className="uv-txt-2" aria-hidden="true">
          {uvLetters(label)}
        </div>
      </div>
      <svg className="uv-btn-svg" viewBox="0 0 24 24" style={{ stroke: "#000", width: 16, height: 16 }}>
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </div>
  );
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="uv-btn-wrapper" style={wrapStyle}>
      {inner}
    </a>
  ) : (
    <Link href={href} className="uv-btn-wrapper" style={wrapStyle}>
      {inner}
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/*  Page shell — nav + dark canvas + footer + JSON-LD                  */
/* ------------------------------------------------------------------ */

export function MarketingShell({
  children,
  jsonLd,
}: {
  children: ReactNode;
  jsonLd?: object | object[];
}) {
  const blobs = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];
  return (
    <>
      <PillNav />
      <main
        className="relative overflow-x-clip bg-[#050505] pt-24 text-white"
        style={{ fontFamily: "'Karla', sans-serif" }}
      >
        <div className="absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.08),_transparent_42%),linear-gradient(180deg,_rgba(255,255,255,0.035),_transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:44px_44px] opacity-25" />
        {children}
      </main>
      <Footer />
      {blobs.map((blob, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blob) }}
        />
      ))}
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Section primitives                                                 */
/* ------------------------------------------------------------------ */

export function Section({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`${pageShell} ${className}`} style={pageShellStyle}>
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[0.78rem] font-extrabold uppercase tracking-[0.28em] text-zinc-500">
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
}) {
  return (
    <div className="mb-8 border-b border-white/10 pb-5">
      {eyebrow ? (
        <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.28em] text-zinc-500">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-[Montserrat] text-3xl font-extrabold tracking-[-0.03em] text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 max-w-[66ch] text-base leading-8 text-zinc-300">{subtitle}</p>
      ) : null}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */

export function Hero({
  eyebrow,
  title,
  lead,
  primaryCta,
  secondaryCta,
  highlights,
  image,
  imageAlt,
  imageLabel,
}: {
  eyebrow: string;
  title: ReactNode;
  lead: ReactNode;
  primaryCta?: { label: string; href: string; external?: boolean };
  secondaryCta?: { label: string; href: string };
  highlights?: string[];
  image?: string;
  imageAlt?: string;
  imageLabel?: string;
}) {
  return (
    <Section className="pb-12 pt-10 2xl:pb-16 2xl:pt-12">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="mt-5 max-w-[24ch] font-[Montserrat] text-4xl font-extrabold leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl xl:text-[4.25rem] 2xl:text-[4.5rem]">
        {title}
      </h1>
      <p className="mt-6 max-w-[66ch] text-base leading-8 text-zinc-300 sm:text-lg">{lead}</p>
      {(primaryCta || secondaryCta) && (
        <div className="mt-8 flex flex-wrap items-center gap-4">
          {primaryCta && (
            <PrimaryButton label={primaryCta.label} href={primaryCta.href} external={primaryCta.external} />
          )}
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-extrabold text-zinc-200 transition hover:border-white/15 hover:bg-white/[0.06] hover:text-white"
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      )}
      {highlights?.length ? (
        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
          {highlights.map((h) => (
            <li key={h} className="flex items-center gap-2 text-sm font-semibold text-zinc-400">
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#6eb0ff]/25 bg-[#6eb0ff]/[0.1] text-[#6eb0ff]">
                <Check className="h-2.5 w-2.5" strokeWidth={3.5} />
              </span>
              {h}
            </li>
          ))}
        </ul>
      ) : null}
      {image ? (
        <div className="mt-12">
          <Screenshot
            src={image}
            alt={imageAlt ?? ""}
            label={imageLabel}
            priority
            sizes="(min-width: 768px) 90vw, 100vw"
            minH="min-h-[280px] sm:min-h-[420px] lg:min-h-[560px]"
          />
        </div>
      ) : null}
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/*  Cards / feature grid                                               */
/* ------------------------------------------------------------------ */

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-6 lg:p-8 ${className}`}
    >
      {children}
    </div>
  );
}

export function IconBadge({ icon: Icon }: { icon: IconType }) {
  return (
    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#6eb0ff]/20 bg-[#6eb0ff]/[0.08] text-[#6eb0ff] shadow-[0_0_24px_rgba(110,176,255,0.08)]">
      <Icon className="h-5 w-5" strokeWidth={2} />
    </span>
  );
}

export function FeatureGrid({
  items,
  columns = 3,
}: {
  items: { title: string; body: ReactNode; tag?: string; icon?: IconType }[];
  columns?: 1 | 2 | 3;
}) {
  const cols = columns === 1 ? "grid-cols-1" : columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`grid gap-4 ${cols}`}>
      {items.map((item) => (
        <Card key={item.title} className="transition hover:border-white/20 hover:bg-white/[0.04]">
          {item.icon ? (
            <div className="mb-4 flex items-center gap-3">
              <IconBadge icon={item.icon} />
              {item.tag ? (
                <p className="text-[0.66rem] font-extrabold uppercase tracking-[0.24em] text-zinc-500">
                  {item.tag}
                </p>
              ) : null}
            </div>
          ) : item.tag ? (
            <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.24em] text-[#6eb0ff]">
              {item.tag}
            </p>
          ) : null}
          <p className={`font-[Montserrat] text-lg font-extrabold tracking-tight text-white ${item.icon ? "" : "mt-2"}`}>
            {item.title}
          </p>
          <div className="mt-3 text-[0.95rem] leading-7 text-zinc-300">{item.body}</div>
        </Card>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Pill / badge                                                       */
/* ------------------------------------------------------------------ */

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#6eb0ff]/20 bg-[#6eb0ff]/[0.07] px-3.5 py-1.5 text-[0.7rem] font-extrabold uppercase tracking-[0.2em] text-[#6eb0ff]">
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Screenshot — framed product UI (light panel in dark chrome)        */
/* ------------------------------------------------------------------ */

export function Screenshot({
  src,
  alt,
  label,
  caption,
  priority = false,
  light = true,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  minH = "min-h-[240px] sm:min-h-[320px] lg:min-h-[380px]",
}: {
  src: string;
  alt: string;
  label?: string;
  caption?: string;
  priority?: boolean;
  light?: boolean;
  sizes?: string;
  minH?: string;
}) {
  return (
    <figure className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0b0b0d] shadow-[0_28px_80px_rgba(0,0,0,0.5),0_0_0_1px_rgba(110,176,255,0.05),0_0_60px_rgba(110,176,255,0.04)]">
      <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          {label ? (
            <span className="ml-2 text-[0.7rem] font-extrabold uppercase tracking-[0.22em] text-zinc-500">
              {label}
            </span>
          ) : null}
        </div>
        <span className="rounded-full border border-[#6eb0ff]/20 bg-[#6eb0ff]/[0.08] px-2.5 py-1 text-[0.6rem] font-extrabold uppercase tracking-[0.18em] text-[#6eb0ff]">
          DynoWeb UI
        </span>
      </div>
      <div className={`relative flex ${minH} items-center justify-center ${light ? "bg-[#f6f8fb]" : "bg-[#0b0b0d]"}`}>
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-contain p-3 sm:p-4" />
      </div>
      {caption ? (
        <figcaption className="border-t border-white/10 bg-white/[0.02] px-4 py-3 text-center text-sm leading-6 text-zinc-400">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

/* ------------------------------------------------------------------ */
/*  FeatureRow — alternating image + text split section                */
/* ------------------------------------------------------------------ */

export function FeatureRow({
  eyebrow,
  title,
  body,
  bullets,
  image,
  imageAlt,
  imageLabel,
  reverse = false,
  priority = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  body: ReactNode;
  bullets?: ReactNode[];
  image: string;
  imageAlt: string;
  imageLabel?: string;
  reverse?: boolean;
  priority?: boolean;
}) {
  return (
    <Section className="pb-16 sm:pb-20">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
        <div className={reverse ? "lg:order-2" : ""}>
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <h2 className="mt-4 font-[Montserrat] text-3xl font-extrabold leading-[1.1] tracking-[-0.03em] text-white sm:text-4xl">
            {title}
          </h2>
          <div className="mt-5 space-y-4 text-[1rem] leading-8 text-zinc-300">{body}</div>
          {bullets?.length ? (
            <ul className="mt-6 space-y-3">
              {bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-[0.97rem] leading-7 text-zinc-300">
                  <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full border border-[#6eb0ff]/25 bg-[#6eb0ff]/[0.1] text-[#6eb0ff]">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className={reverse ? "lg:order-1" : ""}>
          <Screenshot src={image} alt={imageAlt} label={imageLabel} priority={priority} />
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/*  Checklist                                                          */
/* ------------------------------------------------------------------ */

export function CheckList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-3 text-[0.97rem] leading-7 text-zinc-300">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-1 text-[#6eb0ff]">→</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------------------------------------------ */
/*  Comparison table                                                   */
/* ------------------------------------------------------------------ */

type Cell = boolean | string;

export function ComparisonTable({
  columns,
  rows,
}: {
  columns: string[]; // first is the row-label column, e.g. ["Feature","DynoWeb","Hotjar"]
  rows: { feature: string; values: Cell[] }[];
}) {
  const renderCell = (val: Cell, highlight: boolean) => {
    if (val === true)
      return <span className={highlight ? "text-[#6eb0ff]" : "text-zinc-300"}>✓</span>;
    if (val === false) return <span className="text-zinc-700">—</span>;
    return <span className={highlight ? "text-zinc-200" : "text-zinc-400"}>{val}</span>;
  };
  return (
    <div className="overflow-x-auto rounded-[2rem] border border-white/10">
      <table className="w-full min-w-[520px] text-sm">
        <thead>
          <tr className="border-b border-white/10 bg-white/[0.03]">
            {columns.map((col, i) => (
              <th
                key={col}
                className={`px-5 py-4 font-extrabold uppercase tracking-[0.18em] ${
                  i === 0
                    ? "text-left text-zinc-500"
                    : i === 1
                      ? "text-center text-[#6eb0ff]"
                      : "text-center text-zinc-400"
                }`}
                style={{ fontSize: "0.7rem" }}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.feature}
              className={`border-b border-white/[0.06] ${i % 2 === 0 ? "bg-white/[0.01]" : ""}`}
            >
              <td className="px-5 py-3 text-zinc-300">{row.feature}</td>
              {row.values.map((val, j) => (
                <td key={j} className="px-5 py-3 text-center">
                  {renderCell(val, j === 0)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Stats row                                                          */
/* ------------------------------------------------------------------ */

export function StatRow({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s) => (
        <Card key={s.label}>
          <p className="font-[Montserrat] text-3xl font-extrabold tracking-tight text-white">
            {s.value}
          </p>
          <p className="mt-2 text-sm leading-6 text-zinc-400">{s.label}</p>
        </Card>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  FAQ (+ JSON-LD helper)                                             */
/* ------------------------------------------------------------------ */

export function FAQ({
  heading = "Common questions",
  title,
  items,
}: {
  heading?: string;
  title: string;
  items: { q: string; a: string }[];
}) {
  return (
    <Section className="pb-20">
      <SectionHeading eyebrow={heading} title={title} />
      <div className="grid gap-4">
        {items.map((item) => (
          <div key={item.q} className="rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-5 sm:p-6">
            <p className="font-extrabold text-white">{item.q}</p>
            <p className="mt-3 text-[0.95rem] leading-7 text-zinc-300">{item.a}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

/* ------------------------------------------------------------------ */
/*  CTA                                                                */
/* ------------------------------------------------------------------ */

export function CTA({
  eyebrow = "Try DynoWeb",
  title,
  body,
  primaryLabel = "Install DynoWeb free",
  secondary,
}: {
  eyebrow?: string;
  title: ReactNode;
  body: ReactNode;
  primaryLabel?: string;
  secondary?: { label: string; href: string };
}) {
  return (
    <Section className="pb-24">
      <div className="cta-glow-card rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.08),transparent_48%),linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] sm:p-8 lg:p-10">
        <div className="relative z-[1]">
          <p className="text-[0.74rem] font-extrabold uppercase tracking-[0.28em] text-zinc-500">
            {eyebrow}
          </p>
          <h2 className="mt-4 font-[Montserrat] text-3xl font-extrabold leading-[1.06] tracking-[-0.04em] text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-5 max-w-[58ch] text-base leading-8 text-zinc-300 sm:text-lg">{body}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <PrimaryButton label={primaryLabel} href={APP_STORE_URL} external />
            <Link
              href={secondary?.href ?? "/"}
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-extrabold text-zinc-200 transition hover:border-white/15 hover:bg-white/[0.06] hover:text-white"
            >
              {secondary?.label ?? "Back to DynoWeb home"}
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/*  Related links — internal linking for SEO                           */
/* ------------------------------------------------------------------ */

export function RelatedLinks({
  title = "Keep exploring",
  links,
}: {
  title?: string;
  links: { label: string; href: string; description?: string }[];
}) {
  return (
    <Section className="pb-20">
      <SectionHeading eyebrow="Related" title={title} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group rounded-[1.5rem] border border-[#6eb0ff]/12 bg-white/[0.02] p-5 shadow-[0_0_0_1px_rgba(110,176,255,0.04),0_10px_36px_-14px_rgba(110,176,255,0.28)] transition duration-200 hover:-translate-y-0.5 hover:border-[#6eb0ff]/35 hover:bg-[#6eb0ff]/[0.04] hover:shadow-[0_0_0_1px_rgba(110,176,255,0.22),0_22px_60px_-16px_rgba(110,176,255,0.55)]"
          >
            <p className="flex items-center justify-between font-extrabold text-white">
              {link.label}
              <ArrowIcon className="h-4 w-4 text-zinc-500 transition group-hover:translate-x-1 group-hover:text-[#6eb0ff]" />
            </p>
            {link.description ? (
              <p className="mt-2 text-sm leading-6 text-zinc-400">{link.description}</p>
            ) : null}
          </Link>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/*  Breadcrumb JSON-LD builder                                         */
/* ------------------------------------------------------------------ */

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

/* ------------------------------------------------------------------ */
/*  Prose — long-form body copy for blog / guide pages                 */
/* ------------------------------------------------------------------ */

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="seo-prose max-w-[72ch] text-[1.02rem] leading-8 text-zinc-300">
      <style>{`
        html { scroll-behavior: smooth; }
        .seo-prose h2 {
          position: relative;
          font-family: 'Montserrat', sans-serif;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #fff;
          font-size: 1.75rem;
          line-height: 1.2;
          margin-top: 2.75rem;
          margin-bottom: 1rem;
          scroll-margin-top: 6.5rem;
        }
        .seo-prose h3 {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          color: #fff;
          font-size: 1.25rem;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
          scroll-margin-top: 6.5rem;
        }
        .seo-prose .heading-anchor {
          margin-left: 0.4em;
          color: #6eb0ff;
          text-decoration: none;
          font-weight: 700;
          opacity: 0;
          transition: opacity 0.15s ease;
        }
        .seo-prose h2:hover .heading-anchor { opacity: 0.55; }
        .seo-prose .heading-anchor:hover { opacity: 1; }
        .seo-prose .dw-callout p { margin: 0; }
        .seo-prose .dw-callout p + p { margin-top: 0.75rem; }
        .seo-prose p { margin-bottom: 1.25rem; }
        .seo-prose ul, .seo-prose ol { margin: 0 0 1.5rem 0; padding-left: 1.4rem; }
        .seo-prose li { margin-bottom: 0.6rem; list-style: disc; }
        .seo-prose ol li { list-style: decimal; }
        .seo-prose a { color: #6eb0ff; text-decoration: underline; text-underline-offset: 3px; }
        .seo-prose a:hover { color: #93c5fd; }
        .seo-prose strong { color: #fff; font-weight: 700; }
        .seo-prose blockquote {
          border-left: 3px solid rgba(110,176,255,0.5);
          padding-left: 1.25rem;
          margin: 1.75rem 0;
          color: #d4d4d8;
          font-style: italic;
        }
      `}</style>
      {children}
    </div>
  );
}
