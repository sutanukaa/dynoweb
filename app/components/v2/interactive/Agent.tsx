"use client";

import { ArrowRight, Check, Loader, RotateCcw, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { useInteractive } from "./store";
import { T } from "./ui";

type Msg = { role: "user" | "agent"; text?: string; kind?: "sales" | "channels" };

const OPENER: Msg = {
  role: "agent",
  text: "Hi — I'm DynoAgent. Ask about your store's data, or pick a task below. I draft changes, but nothing goes live until you approve it.",
};

type Answer = { label: string; tools: string[]; draft?: boolean; reply: Msg[] };

const ANSWERS: Answer[] = [
  {
    label: "Most traffic, lowest conversion?",
    tools: ["querying sessions", "joining orders"],
    reply: [
      { role: "agent", text: "Your biggest traffic-to-conversion gap is the Merino Crewneck: 6,410 views at a 1.8% conversion rate — well under your 3.1% store average. The Alpaca Beanie and Wool Socks are close behind. Most of the crewneck drop-off happens on mobile, below the fold." },
    ],
  },
  {
    label: "Last 30 days of sales",
    tools: ["querying orders", "aggregating daily"],
    reply: [
      { role: "agent", text: "Revenue is trending up — $48,210 over the last 30 days, +14% on the prior period. Here's the daily curve with the headline numbers:" },
      { role: "agent", kind: "sales" },
    ],
  },
  {
    label: "Which channels drive revenue?",
    tools: ["querying attribution", "ranking products"],
    reply: [
      { role: "agent", text: "Organic search and Instagram are doing the heavy lifting. Full breakdown, plus your top products for the period:" },
      { role: "agent", kind: "channels" },
    ],
  },
  {
    label: "Rewrite the crewneck description",
    tools: ["reading product copy", "drafting rewrite"],
    draft: true,
    reply: [
      { role: "agent", text: "Done — I've drafted a fabric-first rewrite. Review the diff below and approve to apply. Nothing changes on your live theme until you do." },
    ],
  },
];

const FALLBACK: Answer = {
  label: "",
  tools: ["searching demo dataset"],
  reply: [
    { role: "agent", text: "This demo only answers from a scripted dataset. Try asking about traffic vs. conversion, last-30-day sales, revenue by channel, or a product description rewrite — or tap one of the suggestions below." },
  ],
};

// Ordered most-specific first: "which channels drive the most revenue" contains
// "revenue", so the channel test has to win before the sales one.
const MATCHERS: [RegExp, number][] = [
  [/rewrite|description|copy|headline/i, 3],
  [/channel|attribution|source|instagram|organic|email/i, 2],
  [/sales|revenue|last 30|30 days|trend/i, 1],
  [/traffic|convert|conversion|drop.?off|lowest/i, 0],
];

const CHANNELS = [
  ["Organic search", "$18.4k · 38%", 100],
  ["Instagram", "$12.1k · 25%", 66],
  ["Email", "$8.7k · 18%", 47],
  ["Direct", "$5.8k · 12%", 32],
  ["Paid social", "$3.2k · 7%", 18],
] as const;

const TOP_PRODUCTS = [
  ["Merino Crewneck", "$9,240 · 105 orders"],
  ["Alpaca Beanie", "$4,180 · 92 orders"],
  ["Wool Socks (3-pk)", "$2,910 · 140 orders"],
] as const;

// Reports are recessed panels inside the chat column: fill only, no outline.

const PANEL = "rounded-[var(--r-md)] bg-white/45 p-3.5 max-w-[92%]";
const DIM = "text-[#8b97ab]";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

function SalesReport() {
  return (
    <div className={PANEL}>
      <div className="flex items-baseline justify-between">
        <div>
          <p className={`${T.label} ${DIM}`}>Revenue · last 30 days</p>
          <p className={`${T.metric} mt-1.5 text-[var(--ink)]`}>$48,210</p>
        </div>
        <span className={`${T.label} flex items-center gap-1 text-[var(--success)]`}>
          <TrendingUp size={12} strokeWidth={2.2} />
          14%
        </span>
      </div>
      <svg viewBox="0 0 300 100" preserveAspectRatio="none" className="mt-3 block h-[3.75rem] w-full">
        <path
          d="M0,82 L27,72 55,77 82,62 109,67 136,52 164,60 191,42 218,47 246,32 273,37 300,20 L300,100 L0,100 Z"
          fill="var(--blue-100)"
        />
        <polyline
          points="0,82 27,72 55,77 82,62 109,67 136,52 164,60 191,42 218,47 246,32 273,37 300,20"
          fill="none"
          stroke="var(--blue-600)"
          strokeWidth="2.2"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
      <div className="mt-3 grid grid-cols-3 gap-2 border-t border-[var(--line-soft)] pt-3">
        {[["Orders", "548"], ["AOV", "$88.00"], ["Conv.", "3.1%"]].map(([k, v]) => (
          <div key={k}>
            <p className={`${T.label} ${DIM}`}>{k}</p>
            <p className={`${T.num} mt-1 text-[var(--ink)]`}>{v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ChannelsReport() {
  return (
    <div className={PANEL}>
      <p className={`${T.label} ${DIM}`}>Revenue by channel · last 30 days</p>
      <div className="mt-3 flex flex-col gap-2">
        {CHANNELS.map(([name, val, pct]) => (
          <div key={name}>
            <div className={`${T.micro} mb-1 flex justify-between`}>
              <span className="text-[var(--ink)]">{name}</span>
              <span className={`font-mono ${DIM}`}>{val}</span>
            </div>
            <div className="h-1 overflow-hidden rounded-full bg-[var(--line-soft)]">
              <div className="h-full rounded-full bg-[var(--blue-600)]" style={{ width: `${pct}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3.5 border-t border-[var(--line-soft)] pt-3">
        <p className={`${T.label} ${DIM} mb-1.5`}>Top products</p>
        {TOP_PRODUCTS.map(([name, val]) => (
          <div key={name} className={`${T.micro} flex justify-between py-1`}>
            <span className="text-[var(--ink)]">{name}</span>
            <span className={`font-mono ${DIM}`}>{val}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Agent() {
  const [chat, setChat] = useState<Msg[]>([OPENER]);
  const [approval, setApproval] = useState<"none" | "pending" | "applied">("none");
  const [tools, setTools] = useState<string[] | null>(null);
  const [busy, setBusy] = useState(false);
  const [draft, setDraft] = useState("");
  const scroller = useRef<HTMLDivElement>(null);
  const job = useRef(0);

  const { setCopyApplied } = useInteractive();

  useEffect(() => {
    const el = scroller.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [chat, approval, tools]);

  useEffect(() => () => void job.current++, []); // cancel any in-flight stream on unmount

  // Types the reply out rather than dropping it in whole — a scripted demo that
  // answers instantly reads as a screenshot, not an agent.
  const respond = async (userText: string, answer: Answer) => {
    const me = ++job.current;
    setBusy(true);
    setChat((s) => [...s, { role: "user", text: userText }]);
    setTools(answer.tools);
    await sleep(950);
    if (job.current !== me) return;
    setTools(null);

    for (const m of answer.reply) {
      if (job.current !== me) return;
      if (m.kind) {
        setChat((s) => [...s, m]);
        await sleep(320);
        continue;
      }
      setChat((s) => [...s, { role: "agent", text: "" }]);
      const words = (m.text ?? "").split(" ");
      for (let i = 0; i < words.length; i++) {
        await sleep(18);
        if (job.current !== me) return;
        setChat((s) => {
          const next = [...s];
          next[next.length - 1] = { role: "agent", text: words.slice(0, i + 1).join(" ") };
          return next;
        });
      }
    }
    if (job.current !== me) return;
    if (answer.draft) setApproval("pending");
    setBusy(false);
  };

  const submit = (text: string) => {
    const q = text.trim();
    if (!q || busy) return;
    const hit = MATCHERS.find(([re]) => re.test(q));
    respond(q, hit ? ANSWERS[hit[1]] : FALLBACK);
    setDraft("");
  };

  const reset = () => {
    job.current++;
    setChat([OPENER]);
    setApproval("none");
    setTools(null);
    setBusy(false);
    setDraft("");
    setCopyApplied(false);
  };

  return (
    // min-h-0 is what makes the chat scroll instead of growing the tile. A flex
    // child defaults to min-height:auto, so without it this column refuses to
    // shrink below its content and the `flex-1 overflow-y-auto` scroller below
    // never gets a height smaller than the transcript.
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="shrink-0 flex items-center gap-2 border-y border-[var(--line-soft)] px-5 py-2.5 sm:px-6">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--success)]" />
        <span className={`${T.label} ${DIM}`}>Read-only until you approve</span>
        <button
          onClick={reset}
          className={`${T.label} ml-auto flex items-center gap-1.5 ${DIM} transition-colors hover:text-[var(--ink)]`}
        >
          <RotateCcw size={11} strokeWidth={2} />
          Reset
        </button>
      </div>

      <div
        ref={scroller}
        data-lenis-prevent
        // min-h-0, not min-h-[14rem]: a 14rem floor re-broke the shrink chain on
        // short viewports, which is how the transcript pushed the tile taller
        // instead of scrolling.
        className="dw-tile-scroll flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto px-5 py-4 sm:px-6"
      >
        {chat.map((m, i) =>
          m.kind === "sales" ? (
            <SalesReport key={i} />
          ) : m.kind === "channels" ? (
            <ChannelsReport key={i} />
          ) : (
            <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              <p
                className={`${T.body} max-w-[82%] rounded-[var(--r-lg)] px-3.5 py-2.5 ${
                  m.role === "user" ? "bg-[var(--blue-600)] text-[var(--ink)]" : "bg-white/50 text-[var(--ink)]"
                }`}
              >
                {m.text}
                {m.role === "agent" && busy && i === chat.length - 1 && (
                  <span className="ml-0.5 inline-block h-3 w-[2px] translate-y-[2px] animate-pulse bg-[var(--blue-600)]" />
                )}
              </p>
            </div>
          ),
        )}

        {tools && (
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
            <Loader size={12} strokeWidth={2} className={`${DIM} animate-spin`} />
            {tools.map((t) => (
              <span key={t} className={`${T.label} ${DIM}`}>
                {t}…
              </span>
            ))}
          </div>
        )}

        {approval !== "none" && (
          <div className="overflow-hidden rounded-[var(--r-lg)] bg-white/55 ring-1 ring-[#c9dbff]">
            <div className="flex items-center justify-between px-4 py-3">
              <span className={`${T.title} text-[var(--ink)]`}>Product description rewrite</span>
              <span
                className={T.label}
                style={{ color: approval === "applied" ? "#6ee7b7" : "#fbbf24" }}
              >
                {approval === "applied" ? "Applied" : "Pending"}
              </span>
            </div>
            <div className="flex flex-col gap-2 px-4 pb-3.5">
              <div className="flex gap-2.5">
                <span className={`${T.num} text-[var(--danger)]`}>−</span>
                <span className={`${T.micro} ${DIM} line-through`}>
                  19.5-micron RWS merino crewneck. 100% wool, machine washable.
                </span>
              </div>
              <div className="flex gap-2.5">
                <span className={`${T.num} text-[var(--success)]`}>+</span>
                <span className={`${T.micro} text-[var(--ink)]`}>
                  The impossibly soft layer you&apos;ll live in all winter — spun from ultra-fine 19.5-micron merino
                  that breathes, resists odor, and never pills. Machine washable, effortless.
                </span>
              </div>
            </div>
            {approval === "pending" ? (
              <div className="flex gap-2 px-4 pb-4">
                <button
                  onClick={() => {
                    setApproval("applied");
                    setCopyApplied(true);
                  }}
                  className={`${T.body} flex-1 rounded-[var(--r-sm)] bg-[var(--blue-600)]/90 py-2.5 font-medium text-white`}
                >
                  Approve &amp; apply
                </button>
                <button
                  onClick={() => {
                    setApproval("none");
                    setCopyApplied(false);
                  }}
                  className={`${T.body} rounded-[var(--r-sm)] px-4 py-2.5 ${DIM} hover:text-[var(--ink)]`}
                >
                  Discard
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2 px-4 pb-4">
                <Check size={14} strokeWidth={2.4} className="shrink-0 text-[var(--success)]" />
                <span className={`${T.micro} text-[var(--ink)]`}>Live storefront copy updated — see the Heatmaps tile</span>
                <button
                  onClick={() => {
                    setApproval("pending");
                    setCopyApplied(false);
                  }}
                  className={`${T.micro} ml-auto shrink-0 text-[var(--blue-600)] underline underline-offset-2 hover:text-[var(--ink)]`}
                >
                  Revert
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* shrink-0 keeps the composer pinned to the bottom of the tile while the
          transcript above it scrolls. */}
      <div className="shrink-0 border-t border-[var(--line-soft)] px-5 py-4 sm:px-6">
        <div className="mb-3 flex flex-wrap gap-2">
          {ANSWERS.map((a) => (
            <button
              key={a.label}
              onClick={() => submit(a.label)}
              disabled={busy}
              className={`${T.micro} rounded-full px-3 py-1.5 transition-colors disabled:opacity-30 ${
                a.draft
                  ? "bg-[var(--blue-500)]/15 text-[var(--blue-700)]"
                  : "bg-white/50 text-[var(--ink-muted)] hover:bg-white/75 hover:text-[var(--ink)]"
              }`}
            >
              {a.label}
            </button>
          ))}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submit(draft);
          }}
          className="flex items-center gap-2.5 rounded-[var(--r-md)] bg-white/50 px-3.5 py-2 focus-within:bg-white/75"
        >
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            disabled={busy}
            placeholder="Ask DynoAgent about your store…"
            className={`${T.body} flex-1 bg-transparent py-1 text-[var(--ink)] outline-none placeholder:text-[#8b97ab] disabled:opacity-50`}
          />
          <button
            type="submit"
            disabled={busy || !draft.trim()}
            aria-label="Send"
            className="shrink-0 text-[var(--blue-600)] transition-opacity disabled:opacity-25"
          >
            <ArrowRight size={15} strokeWidth={2} />
          </button>
        </form>
        <p className={`${T.label} mt-2.5 text-[#8b97ab]`}>
          Scripted responses · no live model is called
        </p>
      </div>
    </div>
  );
}
