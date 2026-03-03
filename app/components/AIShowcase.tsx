"use client";
import React, { useRef, useState } from "react";

export default function AIShowcaseSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState<boolean>(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (playing) {
      video.pause();
      setPlaying(false);
    } else {
      video.play();
      setPlaying(true);
    }
  };

  const bullets = [
    {
      title: "Step 1: Watch (Invisibly)",
      desc: "Our 6KB tracker tracks 11 behavioral signals without slowing down your site by a single millisecond.",
    },
    {
      title: "Step 2: Think (Like a CRO Expert)",
      desc: "The 3-layer AI engine processes the data, spots revenue-leaking gaps, and scores them by ROI.",
    },
    {
      title: "Step 3: Fix (Automatically)",
      desc: "Click \"Apply,\" and DynoWeb builds a safe, unpublished Draft Theme with the UX fixes already coded for you to review.",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cal+Sans&family=Instrument+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,700;1,700&display=swap');

        @keyframes sketchHighlightDraw {
          from { stroke-dashoffset: 900; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes fadeIn {
          from { opacity:0; transform:translateY(14px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes playPulse {
          0%,100% { box-shadow:0 0 0 0 rgba(59,111,190,.5); }
          50%      { box-shadow:0 0 0 12px rgba(59,111,190,0); }
        }

        .mag-root { font-family:'Instrument Sans',sans-serif; }
        .rule { width:100%;height:1px;background:#e2e8f0; }

        .mag-headline {
          font-family:'Cal Sans','Georgia',serif;
          font-size:clamp(2rem,5vw,3.4rem);
          font-weight:700;line-height:1.06;
          letter-spacing:-0.02em;color:#0a1628;
        }

        .drop-cap::first-letter {
          font-family:'Playfair Display',serif;
          font-size:3.6em;font-weight:700;
          float:left;line-height:.78;
          margin-right:6px;margin-top:4px;
          color:#3b6fbe;
        }
        .body-copy { font-size:.88rem;line-height:1.8;color:#475569; }

        .mag-bullet {
          display:flex;gap:12px;align-items:flex-start;
          padding:12px 0;border-bottom:1px solid #f1f5f9;
          transition:padding-left .2s ease;cursor:default;
        }
        .mag-bullet:first-child { border-top:1px solid #f1f5f9; }
        .mag-bullet:hover { padding-left:5px; }
        .mag-bullet:hover .mag-bullet-title { color:#3b6fbe; }
        .mag-bullet-title { font-weight:700;font-size:.8rem;color:#0f172a;margin-bottom:2px;transition:color .2s ease; }
        .mag-bullet-desc  { font-size:.76rem;color:#94a3b8;line-height:1.5; }

        .vid-wrap {
          position:relative;border-radius:10px;overflow:hidden;
          background:#0a1628;
          box-shadow:0 0 0 1px rgba(59,111,190,.15),0 32px 80px rgba(10,22,40,.24);
        }
        .play-btn { animation:playPulse 2.5s ease-in-out infinite;cursor:pointer; }

        .sketch-fill-1 { stroke-dasharray:900;stroke-dashoffset:900;animation:sketchHighlightDraw .6s ease-out .4s forwards; }
        .sketch-fill-2 { stroke-dasharray:900;stroke-dashoffset:900;animation:sketchHighlightDraw .55s ease-out .4s forwards; }
        .sketch-fill-3 { stroke-dasharray:900;stroke-dashoffset:900;animation:sketchHighlightDraw .45s ease-out .52s forwards; }

        .fi { opacity:0;animation:fadeIn .55s ease forwards; }
        .fi-1 { animation-delay:.05s; }
        .fi-2 { animation-delay:.2s; }
        .fi-3 { animation-delay:.35s; }

        /* ── Responsive grid ── */

        /* Mobile default: single column, video is portrait but capped */
        .mag-grid {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        /* Tablet (sm): side-by-side headline+video, bullets below */
        @media (min-width: 640px) {
          .mag-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-areas:
              "headline video"
              "bullets  bullets";
            gap: 32px 40px;
            align-items: start;
          }
          .mag-col-headline { grid-area: headline; }
          .mag-col-video    { grid-area: video; }
          .mag-col-bullets  { grid-area: bullets; }

          /* Horizontal bullets on tablet */
          .mag-bullets-inner {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 0 24px;
          }
          .mag-bullet { border-top: 1px solid #f1f5f9; }
        }

        /* Desktop (lg): original 3-col side-by-side */
        @media (min-width: 1024px) {
          .mag-grid {
            grid-template-columns: 220px 280px 1fr;
            grid-template-areas: "bullets video headline";
            gap: 48px;
          }
          .mag-col-headline { grid-area: headline; }
          .mag-col-video    { grid-area: video; }
          .mag-col-bullets  { grid-area: bullets; }

          .mag-bullets-inner {
            display: block;
          }
          .mag-bullet { border-top: none; }
          .mag-bullet:first-child { border-top: 1px solid #f1f5f9; }
        }

        /* Video aspect ratio: portrait on mobile/tablet, portrait on desktop too */
        .mag-col-video .vid-wrap { aspect-ratio: 9/16; }

        /* On mobile, portrait video would be too tall — use a shorter ratio */
        @media (max-width: 639px) {
          .mag-col-video .vid-wrap { aspect-ratio: 4/5; }
        }
      `}</style>

      <section className="mag-root relative w-full bg-white px-3 sm:px-4 md:px-6 lg:px-10 py-6 md:py-10 overflow-hidden min-h-screen flex flex-col justify-center">
        {/* Faint grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            zIndex: 0,
            backgroundImage: `linear-gradient(rgba(99,130,200,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(99,130,200,.04) 1px,transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative z-10 mx-auto w-full" style={{ maxWidth: "1600px" }}>


          {/* Main responsive grid */}
          <div className="mag-grid fi fi-2">
            {/* ── Bullets / sidebar ── */}
            <div
              className="mag-col-bullets"
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              {/* Only show spacer + rule on desktop */}
              <div className="hidden lg:block" style={{ height: "80px" }} />
              <div className="rule hidden lg:block" />
              <p
                style={{
                  fontSize: ".58rem",
                  fontWeight: 700,
                  letterSpacing: ".15em",
                  textTransform: "uppercase",
                  color: "#3b6fbe",
                }}
              >
                What you get
              </p>
              <div className="mag-bullets-inner">
                {bullets.map((b, i) => (
                  <div key={i} className="mag-bullet">
                    <div style={{ minWidth: "22px", paddingTop: "1px" }}>
                      <img
                        src={`/icon${i + 1}.png`}
                        alt=""
                        style={{
                          width: "20px",
                          height: "20px",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                    <div>
                      <p className="mag-bullet-title">{b.title}</p>
                      <p className="mag-bullet-desc">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Video ── */}
            <div className="mag-col-video">
              <div className="vid-wrap">
                <video
                  ref={videoRef}
                  src="/your-video.mp4"
                  className="w-full h-full object-cover"
                  loop
                  muted
                  playsInline
                  onEnded={() => setPlaying(false)}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top,rgba(10,22,40,.82) 0%,rgba(10,22,40,.08) 50%,transparent 75%)",
                    opacity: !playing ? 1 : 0.4,
                    transition: "opacity .3s ease",
                  }}
                />
                <button
                  onClick={togglePlay}
                  className="play-btn"
                  style={{
                    position: "absolute",
                    inset: 0,
                    margin: "auto",
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    background: "rgba(59,111,190,.9)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: !playing ? 1 : 0,
                    transition: "opacity .25s ease",
                  }}
                  aria-label={playing ? "Pause" : "Play"}
                >
                  {playing ? (
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <rect x="6" y="4" width="4" height="16" rx="1" />
                      <rect x="14" y="4" width="4" height="16" rx="1" />
                    </svg>
                  ) : (
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="white"
                      style={{ marginLeft: "2px" }}
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "16px 14px",
                  }}
                >
                  <p
                    style={{
                      fontSize: ".6rem",
                      fontWeight: 700,
                      letterSpacing: ".12em",
                      textTransform: "uppercase",
                      color: "rgba(148,163,184,.8)",
                      marginBottom: "4px",
                    }}
                  >
                    AI in action
                  </p>
                  <p
                    style={{
                      fontSize: ".82rem",
                      fontWeight: 600,
                      color: "white",
                      lineHeight: 1.4,
                    }}
                  >
                    See how DynoWeb boosted this store's revenue by 240%
                  </p>
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    background: "rgba(10,22,40,.6)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,.08)",
                    borderRadius: "99px",
                    padding: "3px 10px",
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: playing ? "#22c55e" : "#94a3b8",
                      boxShadow: playing ? "0 0 6px #22c55e" : "none",
                      transition: "all .3s ease",
                    }}
                  />
                  <span
                    style={{
                      fontSize: ".58rem",
                      fontWeight: 700,
                      color: "rgba(255,255,255,.75)",
                      letterSpacing: ".08em",
                    }}
                  >
                    {playing ? "PLAYING" : "PREVIEW"}
                  </span>
                </div>
              </div>
            </div>

            {/* ── Headline + body ── */}
            <div
              className="mag-col-headline fi fi-3"
              style={{ display: "flex", flexDirection: "column", gap: "18px" }}
            >
              <h2 className="mag-headline">
                Did you know your &lsquo;Buy&rsquo; button has a 35% &lsquo;Fat Finger&rsquo;{" "}
                <span
                  style={{
                    position: "relative",
                    display: "inline-block",
                    whiteSpace: "nowrap",
                  }}
                >
                  <svg
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    fill="none"
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: "2%",
                      width: "96%",
                      height: "100%",
                      overflow: "hidden",
                      pointerEvents: "none",
                      zIndex: 0,
                    }}
                  >
                    <defs>
                      <linearGradient
                        id="tpG2"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="white" stopOpacity="0" />
                        <stop offset="12%" stopColor="white" stopOpacity="1" />
                        <stop offset="88%" stopColor="white" stopOpacity="1" />
                        <stop offset="100%" stopColor="white" stopOpacity="0" />
                      </linearGradient>
                      <mask id="tpM2">
                        <rect
                          x="0"
                          y="0"
                          width="100"
                          height="100"
                          fill="url(#tpG2)"
                        />
                      </mask>
                    </defs>
                    <g mask="url(#tpM2)">
                      <path
                        className="sketch-fill-1"
                        d="M2 52 C20 48,42 46,62 47 C78 48,90 50,98 49"
                        stroke="#3b6fbe"
                        strokeWidth="52"
                        strokeLinecap="butt"
                        opacity="0.18"
                        fill="none"
                      />
                      <path
                        className="sketch-fill-2"
                        d="M2 51 C22 47,46 45,66 46 C80 47,91 49,98 48"
                        stroke="#3b6fbe"
                        strokeWidth="38"
                        strokeLinecap="butt"
                        opacity="0.55"
                        fill="none"
                      />
                      <path
                        className="sketch-fill-2"
                        d="M4 74 C24 71,50 70,70 71 C84 72,93 73,98 72"
                        stroke="#3b6fbe"
                        strokeWidth="18"
                        strokeLinecap="butt"
                        opacity="0.5"
                        fill="none"
                      />
                      <path
                        className="sketch-fill-3"
                        d="M4 34 C24 31,48 30,68 31 C82 32,92 33,98 32"
                        stroke="#2d5fa8"
                        strokeWidth="3"
                        strokeLinecap="butt"
                        opacity="0.32"
                        fill="none"
                      />
                    </g>
                  </svg>
                  <span style={{ position: "relative", zIndex: 1 }}>miss rate</span>
                </span>{" "}
                on mobile?
              </h2>

              <div className="rule" />

              <p className="body-copy drop-cap">
                Regular analytics won&rsquo;t tell you that. And your customers
                won&rsquo;t complain&mdash;they&rsquo;ll just leave. DynoWeb&rsquo;s
                AI doesn&rsquo;t just show you what happened &mdash; it tells you
                exactly what to do next.
              </p>
              <p className="body-copy">
                Real merchants discover hidden revenue leaks and fix them in
                minutes. No dashboards to configure. No analysts to hire. Just
                plug in your store and watch the insights surface automatically.
              </p>

              <div className="rule" />

              <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
                {[
                  { v: "SEO Armor", l: "Every suggestion passes Core Web Vitals validation. Your rankings stay safe." },
                  { v: "Zero-Risk Drafts", l: "We never touch your live theme. Fixes stay in an isolated Draft Theme." },
                  { v: "Action, Not Data", l: "Hotjar shows a heatmap. DynoWeb gives you the code to fix it." },
                ].map((s, i) => (
                  <React.Fragment key={s.v}>
                    {i > 0 && (
                      <div
                        style={{ width: "1px", background: "#e2e8f0" }}
                      />
                    )}
                    <div style={{ flex: 1, minWidth: "120px" }}>
                      <p
                        style={{
                          fontFamily: "'Instrument Sans',sans-serif",
                          fontSize: ".82rem",
                          fontWeight: 700,
                          color: "#3b6fbe",
                          lineHeight: 1.2,
                          marginBottom: "4px",
                        }}
                      >
                        {s.v}
                      </p>
                      <p
                        style={{
                          fontFamily: "'Instrument Sans',sans-serif",
                          fontSize: ".68rem",
                          color: "#94a3b8",
                          lineHeight: 1.4,
                        }}
                      >
                        {s.l}
                      </p>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
