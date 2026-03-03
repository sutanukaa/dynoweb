"use client";
import { useRef, useState } from "react";

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

  const bullets: { title: string; desc: string }[] = [
    {
      title: "Real-time AI suggestions",
      desc: "Surfaces actionable changes before you lose the sale.",
    },
    {
      title: "Conversion-first analytics",
      desc: "Every metric tied directly to revenue — no vanity numbers.",
    },
    {
      title: "Built for Shopify merchants",
      desc: "Up and running in under 60 seconds. No developer needed.",
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
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes playPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(59,111,190,0.5); }
          50%       { box-shadow: 0 0 0 12px rgba(59,111,190,0); }
        }

        .mag-root { font-family: 'Instrument Sans', sans-serif; }

        .rule { width: 100%; height: 1px; background: #e2e8f0; }

        .mag-headline {
          font-family: 'Cal Sans', 'Georgia', serif;
          font-size: clamp(2.2rem, 3.5vw, 3.4rem);
          font-weight: 700;
          line-height: 1.06;
          letter-spacing: -0.02em;
          color: #0a1628;
        }

        .drop-cap::first-letter {
          font-family: 'Playfair Display', serif;
          font-size: 3.6em;
          font-weight: 700;
          float: left;
          line-height: 0.78;
          margin-right: 6px;
          margin-top: 4px;
          color: #3b6fbe;
        }

        .body-copy {
          font-size: 0.88rem;
          line-height: 1.8;
          color: #475569;
        }

        .pull-quote {
          font-family: 'Playfair Display', serif;
          font-size: 1rem;
          font-style: italic;
          line-height: 1.55;
          color: #0a1628;
          border-left: 3px solid #3b6fbe;
          padding-left: 14px;
          margin: 0;
        }

        .mag-bullet {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          padding: 12px 0;
          border-bottom: 1px solid #f1f5f9;
          transition: padding-left 0.2s ease;
          cursor: default;
        }
        .mag-bullet:first-child { border-top: 1px solid #f1f5f9; }
        .mag-bullet:hover { padding-left: 5px; }
        .mag-bullet:hover .mag-bullet-title { color: #3b6fbe; }
        .mag-bullet-title {
          font-weight: 700;
          font-size: 0.8rem;
          color: #0f172a;
          margin-bottom: 2px;
          transition: color 0.2s ease;
        }
        .mag-bullet-desc { font-size: 0.76rem; color: #94a3b8; line-height: 1.5; }

        .vid-wrap {
          position: relative;
          border-radius: 6px;
          overflow: hidden;
          background: #0a1628;
          box-shadow: 0 0 0 1px rgba(59,111,190,0.15), 0 40px 100px rgba(10,22,40,0.28);
        }
        .play-btn { animation: playPulse 2.5s ease-in-out infinite; cursor: pointer; }

        .sketch-fill-1 { stroke-dasharray: 900; stroke-dashoffset: 900; animation: sketchHighlightDraw 0.6s ease-out 0.4s forwards; }
        .sketch-fill-2 { stroke-dasharray: 900; stroke-dashoffset: 900; animation: sketchHighlightDraw 0.55s ease-out 0.4s forwards; }
        .sketch-fill-3 { stroke-dasharray: 900; stroke-dashoffset: 900; animation: sketchHighlightDraw 0.45s ease-out 0.52s forwards; }

        .fi { opacity: 0; animation: fadeIn 0.55s ease forwards; }
        .fi-1 { animation-delay: 0.05s; }
        .fi-2 { animation-delay: 0.2s; }
        .fi-3 { animation-delay: 0.35s; }
      `}</style>

      <section className="mag-root relative w-full bg-white px-8 py-20 overflow-hidden">
        {/* Faint grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            zIndex: 0,
            backgroundImage: `linear-gradient(rgba(99,130,200,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,130,200,0.04) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative z-10 mx-auto" style={{ maxWidth: "1100px" }}>
          {/* ── SECTION OPENER — replaces the generic masthead bar ── */}
          <div
            className="fi fi-1"
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: "14px",
              marginBottom: "48px",
            }}
          >
            <div style={{ paddingBottom: "6px" }}>
              <p
                style={{
                  fontFamily: "'Instrument Sans', sans-serif",
                  fontSize: "1.35rem",
                  fontWeight: 600,
                  color: "#0a1628",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  marginBottom: "5px",
                }}
              >
                Revenue Intelligence
              </p>
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <div
                  style={{
                    width: "28px",
                    height: "2px",
                    background: "#3b6fbe",
                    borderRadius: "1px",
                  }}
                />
              </div>
            </div>
          </div>

          {/* ── MAIN GRID: left bullets | center video | right copy ── */}
          <div
            className="fi fi-2"
            style={{
              display: "grid",
              gridTemplateColumns: "220px 300px 1fr",
              gap: "48px",
              alignItems: "start",
            }}
          >
            {/* COL A — sidebar: pull quote + bullets */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "24px" }}
            >
              <div style={{ height: "80px" }} />

              <div className="rule" />

              <div>
                <p
                  style={{
                    fontSize: "0.58rem",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#3b6fbe",
                    marginBottom: "4px",
                  }}
                >
                  What you get
                </p>
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

            {/* COL B — video (dominant) */}
            <div
              className="vid-wrap"
              style={{ aspectRatio: "9/16", width: "100%" }}
            >
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
                    "linear-gradient(to top, rgba(10,22,40,0.82) 0%, rgba(10,22,40,0.08) 50%, transparent 75%)",
                  opacity: !playing ? 1 : 0.4,
                  transition: "opacity 0.3s ease",
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
                  background: "rgba(59,111,190,0.9)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: !playing ? 1 : 0,
                  transition: "opacity 0.25s ease",
                }}
                aria-label={playing ? "Pause" : "Play"}
              >
                {playing ? (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
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
                  padding: "18px 16px",
                }}
              >
                <p
                  style={{
                    fontSize: "0.6rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(148,163,184,0.8)",
                    marginBottom: "4px",
                  }}
                >
                  AI in action
                </p>
                <p
                  style={{
                    fontSize: "0.82rem",
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
                  background: "rgba(10,22,40,0.6)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.08)",
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
                    transition: "all 0.3s ease",
                  }}
                />
                <span
                  style={{
                    fontSize: "0.58rem",
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.75)",
                    letterSpacing: "0.08em",
                  }}
                >
                  {playing ? "PLAYING" : "PREVIEW"}
                </span>
              </div>
            </div>

            {/* COL C — headline + body */}
            <div
              className="fi fi-3"
              style={{ display: "flex", flexDirection: "column", gap: "18px" }}
            >
              <h2 className="mag-headline">
                Your
                <br />
                store's
                <br />
                unfair{" "}
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
                  <span style={{ position: "relative", zIndex: 1 }}>edge.</span>
                </span>
              </h2>

              <div className="rule" />

              <p className="body-copy drop-cap">
                DynoWeb's AI doesn't just show you what happened — it tells you
                exactly what to do next. Real merchants discover hidden revenue
                leaks and fix them in minutes.
              </p>

              <p className="body-copy">
                No dashboards to configure. No analysts to hire. Just plug in
                your store and watch the insights surface automatically.
              </p>

              <div className="rule" />

              {/* Footer stat */}
              <div style={{ display: "flex", gap: "24px" }}>
                <div>
                  <p
                    style={{
                      fontFamily: "'Instrument Sans', sans-serif",
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: "#3b6fbe",
                      lineHeight: 1,
                    }}
                  >
                    91%
                  </p>
                  <p
                    style={{
                      fontFamily: "'Instrument Sans', sans-serif",
                      fontSize: "0.68rem",
                      color: "#94a3b8",
                      marginTop: "3px",
                      lineHeight: 1.4,
                    }}
                  >
                    stores saw improved CTR
                  </p>
                </div>
                <div style={{ width: "1px", background: "#e2e8f0" }} />
                <div>
                  <p
                    style={{
                      fontFamily: "'Instrument Sans', sans-serif",
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: "#3b6fbe",
                      lineHeight: 1,
                    }}
                  >
                    18s
                  </p>
                  <p
                    style={{
                      fontFamily: "'Instrument Sans', sans-serif",
                      fontSize: "0.68rem",
                      color: "#94a3b8",
                      marginTop: "3px",
                      lineHeight: 1.4,
                    }}
                  >
                    avg. time to first insight
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
