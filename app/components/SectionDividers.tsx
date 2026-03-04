"use client";

/* ─────────────────────────────────────────────
   Decorative transition shapes between sections
   ───────────────────────────────────────────── */

export function RibbonDividerTop() {
  return (
    <div
      className="ribbon-divider-top"
      style={{
        position: "relative",
        width: "100%",
        height: "clamp(28px, 4vw, 56px)",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 1,
        marginTop: "0px",
      }}
    >
      <style>{`
        @keyframes ribbonFlow1 {
          0%   { stroke-dashoffset: 1200; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes ribbonFlow2 {
          0%   { stroke-dashoffset: 1000; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes ribbonFloat {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-6px); }
        }
        @keyframes dotPulse {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50%      { opacity: 0.35; transform: scale(1.4); }
        }
        @keyframes circleExpand {
          0%, 100% { r: 20; opacity: 0.04; }
          50%      { r: 28; opacity: 0.08; }
        }
        .ribbon-path-1 {
          stroke-dasharray: 1200;
          animation: ribbonFlow1 3s ease-out forwards;
        }
        .ribbon-path-2 {
          stroke-dasharray: 1200;
          animation: ribbonFlow2 3.5s ease-out 0.3s forwards;
          stroke-dashoffset: 1000;
        }
        .ribbon-path-3 {
          stroke-dasharray: 800;
          animation: ribbonFlow1 4s ease-out 0.5s forwards;
          stroke-dashoffset: 800;
        }
        .float-group {
          animation: ribbonFloat 6s ease-in-out infinite;
        }
        .float-group-alt {
          animation: ribbonFloat 7s ease-in-out 1.5s infinite;
        }
        .pulse-dot {
          animation: dotPulse 4s ease-in-out infinite;
        }
        .pulse-dot-alt {
          animation: dotPulse 5s ease-in-out 1s infinite;
        }
      `}</style>

      <svg
        viewBox="0 0 1440 200"
        fill="none"
        preserveAspectRatio="none"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        aria-hidden="true"
      >
        {/* Flowing ribbon 1 — main gentle S-curve */}
        <path
          className="ribbon-path-1 float-group"
          d="M-40 140 C200 140, 300 40, 520 60 C740 80, 800 160, 1000 120 C1200 80, 1300 40, 1480 80"
          stroke="url(#ribbonGrad1)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.18"
        />
        {/* Flowing ribbon 2 — wider, offset */}
        <path
          className="ribbon-path-2 float-group-alt"
          d="M-20 100 C180 60, 360 130, 560 90 C760 50, 920 140, 1120 100 C1320 60, 1380 110, 1480 90"
          stroke="url(#ribbonGrad2)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.12"
        />
        {/* Thin accent ribbon */}
        <path
          className="ribbon-path-3 float-group"
          d="M-10 170 C220 130, 400 180, 620 150 C840 120, 1000 170, 1200 140 C1400 110, 1420 150, 1480 130"
          stroke="url(#ribbonGrad1)"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.1"
        />

        {/* Abstract circles */}
        <circle cx="180" cy="80" r="24" stroke="rgba(59,111,190,0.06)" strokeWidth="1" fill="none" className="float-group-alt" />
        <circle cx="180" cy="80" r="10" stroke="rgba(59,111,190,0.04)" strokeWidth="0.8" fill="none" />
        <circle cx="1260" cy="120" r="30" stroke="rgba(59,111,190,0.05)" strokeWidth="1" fill="none" className="float-group" />
        <circle cx="1260" cy="120" r="14" stroke="rgba(59,111,190,0.03)" strokeWidth="0.8" fill="none" />

        {/* Scatter dots */}
        <circle cx="320" cy="55" r="2.5" fill="rgba(59,111,190,0.15)" className="pulse-dot" />
        <circle cx="640" cy="130" r="2" fill="rgba(59,111,190,0.12)" className="pulse-dot-alt" />
        <circle cx="900" cy="50" r="3" fill="rgba(59,111,190,0.1)" className="pulse-dot" />
        <circle cx="1100" cy="160" r="2" fill="rgba(59,111,190,0.13)" className="pulse-dot-alt" />
        <circle cx="480" cy="170" r="1.8" fill="rgba(59,111,190,0.1)" className="pulse-dot" />
        <circle cx="780" cy="40" r="2.2" fill="rgba(59,111,190,0.08)" className="pulse-dot-alt" />

        {/* Small cross marks */}
        <g opacity="0.1" className="float-group-alt">
          <line x1="400" y1="30" x2="400" y2="42" stroke="#3b6fbe" strokeWidth="1" />
          <line x1="394" y1="36" x2="406" y2="36" stroke="#3b6fbe" strokeWidth="1" />
        </g>
        <g opacity="0.08" className="float-group">
          <line x1="1050" y1="70" x2="1050" y2="82" stroke="#3b6fbe" strokeWidth="1" />
          <line x1="1044" y1="76" x2="1056" y2="76" stroke="#3b6fbe" strokeWidth="1" />
        </g>

        {/* Diamond accents */}
        <rect x="720" y="25" width="6" height="6" rx="1" fill="rgba(59,111,190,0.08)" transform="rotate(45 723 28)" className="float-group-alt" />
        <rect x="260" y="155" width="5" height="5" rx="1" fill="rgba(59,111,190,0.06)" transform="rotate(45 262.5 157.5)" className="float-group" />

        {/* Gradients */}
        <defs>
          <linearGradient id="ribbonGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b6fbe" stopOpacity="0" />
            <stop offset="15%" stopColor="#3b6fbe" stopOpacity="1" />
            <stop offset="85%" stopColor="#60a5d4" stopOpacity="1" />
            <stop offset="100%" stopColor="#60a5d4" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="ribbonGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#60a5d4" stopOpacity="0" />
            <stop offset="20%" stopColor="#3b6fbe" stopOpacity="0.8" />
            <stop offset="80%" stopColor="#2d5fa8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#2d5fa8" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export function RibbonDividerBottom() {
  return (
    <div
      className="ribbon-divider-bottom"
      style={{
        position: "relative",
        width: "100%",
        height: "clamp(28px, 4vw, 56px)",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 1,
        marginBottom: "-2px",
      }}
    >
      <style>{`
        @keyframes waveFloat {
          0%, 100% { transform: translateX(0) translateY(0); }
          25%      { transform: translateX(-8px) translateY(-3px); }
          75%      { transform: translateX(8px) translateY(3px); }
        }
        @keyframes arcDraw {
          from { stroke-dashoffset: 600; }
          to   { stroke-dashoffset: 0; }
        }
        .wave-group { animation: waveFloat 8s ease-in-out infinite; }
        .wave-group-2 { animation: waveFloat 10s ease-in-out 2s infinite; }
        .arc-path {
          stroke-dasharray: 600;
          stroke-dashoffset: 600;
          animation: arcDraw 2.5s ease-out 0.2s forwards;
        }
        .arc-path-2 {
          stroke-dasharray: 600;
          stroke-dashoffset: 600;
          animation: arcDraw 3s ease-out 0.6s forwards;
        }
      `}</style>

      <svg
        viewBox="0 0 1440 160"
        fill="none"
        preserveAspectRatio="none"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        aria-hidden="true"
      >
        {/* Wave ribbon flowing left to right */}
        <path
          className="arc-path wave-group"
          d="M-20 80 Q180 20, 360 70 T720 50 T1080 80 T1460 40"
          stroke="url(#wavGrad1)"
          strokeWidth="1.8"
          strokeLinecap="round"
          opacity="0.15"
        />
        {/* Parallel offset wave */}
        <path
          className="arc-path-2 wave-group-2"
          d="M-20 110 Q200 50, 400 100 T780 70 T1140 110 T1480 70"
          stroke="url(#wavGrad2)"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.1"
        />

        {/* Subtle long arc */}
        <path
          className="arc-path wave-group"
          d="M100 130 C400 30, 1040 30, 1340 130"
          stroke="rgba(59,111,190,0.05)"
          strokeWidth="1"
          fill="none"
        />

        {/* Floating circles */}
        <circle cx="350" cy="40" r="18" stroke="rgba(59,111,190,0.05)" strokeWidth="0.8" fill="none" className="wave-group-2" />
        <circle cx="1090" cy="100" r="22" stroke="rgba(59,111,190,0.04)" strokeWidth="0.8" fill="none" className="wave-group" />

        {/* Scatter dots */}
        <circle cx="200" cy="100" r="2" fill="rgba(59,111,190,0.12)" className="pulse-dot" />
        <circle cx="560" cy="35" r="2.5" fill="rgba(59,111,190,0.1)" className="pulse-dot-alt" />
        <circle cx="850" cy="120" r="1.8" fill="rgba(59,111,190,0.14)" className="pulse-dot" />
        <circle cx="1200" cy="55" r="2.2" fill="rgba(59,111,190,0.09)" className="pulse-dot-alt" />

        {/* Small cross marks */}
        <g opacity="0.09" className="wave-group">
          <line x1="650" y1="100" x2="650" y2="110" stroke="#3b6fbe" strokeWidth="0.8" />
          <line x1="645" y1="105" x2="655" y2="105" stroke="#3b6fbe" strokeWidth="0.8" />
        </g>
        <g opacity="0.07" className="wave-group-2">
          <line x1="950" y1="40" x2="950" y2="50" stroke="#3b6fbe" strokeWidth="0.8" />
          <line x1="945" y1="45" x2="955" y2="45" stroke="#3b6fbe" strokeWidth="0.8" />
        </g>

        <defs>
          <linearGradient id="wavGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b6fbe" stopOpacity="0" />
            <stop offset="10%" stopColor="#3b6fbe" stopOpacity="1" />
            <stop offset="90%" stopColor="#60a5d4" stopOpacity="1" />
            <stop offset="100%" stopColor="#60a5d4" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="wavGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2d5fa8" stopOpacity="0" />
            <stop offset="20%" stopColor="#60a5d4" stopOpacity="0.7" />
            <stop offset="80%" stopColor="#3b6fbe" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#3b6fbe" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
