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
          font-size:clamp(1.75rem,4vw,3rem);
          font-weight:700;line-height:1.1;
          letter-spacing:-0.02em;color:#0a1628;
        }

        .drop-cap::first-letter {
          font-family:'Playfair Display',serif;
          font-size:3.6em;font-weight:700;
          float:left;line-height:.78;
          margin-right:6px;margin-top:4px;
          color:#3b6fbe;
        }
        .body-copy { font-size:.9rem;line-height:1.75;color:#475569; }

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

        /* ── Cursor detect-and-fix animation (8s cycle) ── */
        .dw-headline-wrap { position:relative; }

        /* Misaligned word groups */
        .dw-glitch-1 {
          display:inline;
          animation: dwGlitch1 8s cubic-bezier(.4,0,.2,1) infinite;
        }
        @keyframes dwGlitch1 {
          0%, 60%  { letter-spacing: 0.04em; }
          68%, 88% { letter-spacing: -0.02em; }
          96%, 100% { letter-spacing: 0.04em; }
        }
        .dw-glitch-2 {
          display:inline-block;
          animation: dwGlitch2 8s cubic-bezier(.4,0,.2,1) infinite;
        }
        @keyframes dwGlitch2 {
          0%, 60%  { transform: translateX(6px) translateY(3px); }
          68%, 88% { transform: translateX(0) translateY(0); }
          96%, 100% { transform: translateX(6px) translateY(3px); }
        }

        /* Cursor container — only visible on desktop */
        .dw-cursor-layer {
          position:absolute;
          inset:0;
          pointer-events:none;
          z-index:20;
          overflow:visible;
        }
        @media (max-width:639px) {
          .dw-cursor-layer { display:none; }
          .dw-glitch-1 { animation:none; letter-spacing:-0.02em; }
          .dw-glitch-2 { animation:none; transform:none; }
        }

        /* Cursor pointer */
        .dw-cursor {
          position:absolute;
          width:22px; height:28px;
          z-index:25;
          filter: drop-shadow(1px 2px 2px rgba(30,41,59,.2));
          animation: dwCursorMove 8s ease infinite;
        }
        @keyframes dwCursorMove {
          0%, 10% {
            opacity:0;
            top:20%; right:-30px;
          }
          22% {
            opacity:1;
            top:55%; right:60%;
          }
          32% {
            opacity:1;
            top:72%; right:45%;
          }
          /* click */
          36% {
            opacity:1;
            top:72%; right:45%;
            transform:scale(0.88);
          }
          39% {
            opacity:1;
            top:72%; right:45%;
            transform:scale(1);
          }
          /* hold while detecting */
          52% {
            opacity:1;
            top:72%; right:45%;
            transform:scale(1);
          }
          /* slide down slightly during fix */
          62% {
            opacity:1;
            top:78%; right:50%;
            transform:scale(1);
          }
          /* exit */
          76% {
            opacity:0;
            top:85%; right:60%;
            transform:scale(1);
          }
          100% {
            opacity:0;
            top:85%; right:60%;
          }
        }

        /* Detection box overlay */
        .dw-detect-box {
          position:absolute;
          top:58%; left:2%; right:8%;
          height:42%;
          border:1.5px dashed rgba(59,111,190,0.4);
          border-radius:10px;
          background:rgba(59,111,190,0.04);
          pointer-events:none;
          z-index:18;
          animation: dwDetectBox 8s ease infinite;
        }
        @keyframes dwDetectBox {
          0%, 34%  { opacity:0; transform:scale(0.96); }
          40%, 58% { opacity:1; transform:scale(1); border-color:rgba(59,111,190,0.4); background:rgba(59,111,190,0.04); }
          65%, 78% { opacity:1; transform:scale(1); border-color:rgba(34,197,94,0.4); background:rgba(34,197,94,0.03); }
          86%, 100% { opacity:0; transform:scale(0.96); }
        }

        /* "Issue Detected" label */
        .dw-detect-label {
          position:absolute;
          top:52%; right:10%;
          display:flex; align-items:center; gap:5px;
          background:white;
          border:1px solid rgba(59,111,190,0.2);
          border-radius:6px;
          padding:3px 10px;
          box-shadow:0 2px 12px rgba(59,111,190,0.1);
          font-family:'Instrument Sans',sans-serif;
          font-size:.62rem; font-weight:700;
          letter-spacing:.06em;
          text-transform:uppercase;
          pointer-events:none;
          z-index:22;
          white-space:nowrap;
          animation: dwDetectLabel 8s ease infinite;
        }
        @keyframes dwDetectLabel {
          0%, 38%  { opacity:0; transform:translateY(6px); color:#3b6fbe; }
          44%, 58% { opacity:1; transform:translateY(0);  color:#3b6fbe; }
          62%, 64% { opacity:0; transform:translateY(-3px); color:#3b6fbe; }
          65%      { opacity:0; transform:translateY(6px);  color:#16a34a; }
          68%, 80% { opacity:1; transform:translateY(0);  color:#16a34a; border-color:rgba(34,197,94,0.25); }
          86%, 100% { opacity:0; transform:translateY(-3px); }
        }

        /* Ripple on click */
        .dw-click-ripple {
          position:absolute;
          top:70%; right:44%;
          width:24px; height:24px;
          border-radius:50%;
          border:1.5px solid rgba(59,111,190,0.35);
          pointer-events:none;
          z-index:19;
          animation: dwRipple 8s ease infinite;
        }
        @keyframes dwRipple {
          0%, 34% { opacity:0; transform:scale(0); }
          37%     { opacity:0.6; transform:scale(1); }
          44%     { opacity:0; transform:scale(2.5); }
          100%    { opacity:0; transform:scale(2.5); }
        }

        /* Label text swap via pseudo-elements */
        .dw-detect-label-text {
          display:inline-block;
        }
        .dw-detect-label .dw-issue-text {
          animation: dwIssueText 8s ease infinite;
        }
        @keyframes dwIssueText {
          0%, 38%  { opacity:0; }
          44%, 58% { opacity:1; }
          62%, 100% { opacity:0; display:none; }
        }
        .dw-detect-label .dw-fixed-text {
          position:absolute; left:22px; top:50%; transform:translateY(-50%);
          animation: dwFixedText 8s ease infinite;
        }
        @keyframes dwFixedText {
          0%, 64%  { opacity:0; }
          68%, 80% { opacity:1; }
          86%, 100% { opacity:0; }
        }

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
            grid-template-columns: 1fr 1.2fr 2fr;
            grid-template-areas: "bullets video headline";
            gap: 36px;
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

      <section className="mag-root relative w-full bg-white pt-12 pb-12 md:pt-16 md:pb-16 overflow-visible">

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

        {/* Abstract decorative elements */}
        <svg style={{position:"absolute",top:"8%",right:"6%",pointerEvents:"none",zIndex:0}} width="120" height="120" viewBox="0 0 120 120" fill="none" aria-hidden="true">
          <circle cx="60" cy="60" r="50" stroke="rgba(59,111,190,.1)" strokeWidth="1.5" strokeDasharray="6 4"/>
          <circle cx="60" cy="60" r="28" stroke="rgba(59,111,190,.06)" strokeWidth="1"/>
        </svg>
        <svg style={{position:"absolute",bottom:"12%",left:"4%",pointerEvents:"none",zIndex:0}} width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
          <line x1="40" y1="10" x2="40" y2="70" stroke="rgba(59,111,190,.08)" strokeWidth="1.2"/>
          <line x1="10" y1="40" x2="70" y2="40" stroke="rgba(59,111,190,.08)" strokeWidth="1.2"/>
        </svg>
        {[{t:"18%",l:"12%"},{t:"72%",l:"88%"},{t:"45%",l:"95%"},{t:"85%",l:"8%"}].map((p,i)=>(
          <div key={i} style={{position:"absolute",top:p.t,left:p.l,width:5,height:5,borderRadius:"50%",background:"rgba(59,111,190,.12)",pointerEvents:"none",zIndex:0}}/>
        ))}

        <div className="relative z-10 mx-auto w-full px-5 sm:px-8 lg:px-16 xl:px-24">

          {/* Section header */}
          <div className="flex flex-col gap-3 mb-10 fi fi-1">
            <span style={{fontSize:".7rem",fontWeight:600,letterSpacing:".12em",textTransform:"uppercase",color:"#94a3b8"}}>How it works</span>
            <div style={{width:40,height:2,borderRadius:2,background:"linear-gradient(90deg,#3b6fbe,transparent)"}}/>
          </div>

          {/* Main responsive grid */}
          <div className="mag-grid fi fi-2">
            {/* ── Bullets / sidebar ── */}
            <div
              className="mag-col-bullets"
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              {/* Rule on desktop */}
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
              <div className="dw-headline-wrap">
                <h2 className="mag-headline">
                  Did you know your <span className="dw-glitch-1">&lsquo;Buy&rsquo; button</span> has a 35%{" "}
                  <span className="dw-glitch-2">
                    &lsquo;Fat Finger&rsquo;{" "}
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
                  </span>
                </h2>

                {/* ── Cursor detect-and-fix overlay ── */}
                <div className="dw-cursor-layer" aria-hidden="true">
                  {/* Blue detection box */}
                  <div className="dw-detect-box" />

                  {/* Click ripple */}
                  <div className="dw-click-ripple" />

                  {/* Issue / Fixed label */}
                  <div className="dw-detect-label">
                    <svg width="8" height="8" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M5 8.5 L7 10.5 L11 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                    <span className="dw-issue-text">Issue Detected</span>
                    <span className="dw-fixed-text" style={{color:"#16a34a"}}>Fixed ✓</span>
                  </div>

                  {/* Animated cursor */}
                  <svg className="dw-cursor" viewBox="0 0 17 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1 L1 19 L5.4 15.2 L8.8 22 L12 20.3 L8.5 13.6 L14 12.5 Z" fill="white" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

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
