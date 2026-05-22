"use client";
import { useState } from "react";

const VIDEO_ID = "SesqgJlC0ao";

export default function VideoShowcase() {
  const [playing, setPlaying] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Karla:wght@400;500;600;700&display=swap');

        .vs-root {
          background: #0a0a0a;
          font-family: 'Karla', sans-serif;
          padding: clamp(4rem, 8vh, 7rem) clamp(1.25rem, 4vw, 4rem);
          position: relative;
          overflow: hidden;
        }
        .vs-grid-bg {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
          z-index: 0;
        }
        .vs-ambient {
          position: absolute;
          top: 30%;
          left: 50%;
          transform: translateX(-50%);
          width: clamp(400px, 60vw, 900px);
          height: clamp(300px, 40vh, 500px);
          background: radial-gradient(ellipse, rgba(110,176,255,0.08) 0%, transparent 65%);
          filter: blur(60px);
          pointer-events: none;
          z-index: 0;
        }

        .vs-inner {
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(2rem, 4vw, 3rem);
          align-items: center;
        }
        @media (min-width: 900px) {
          .vs-inner {
            grid-template-columns: minmax(0, 1.6fr) minmax(0, 1fr);
            gap: clamp(2.5rem, 4vw, 4rem);
          }
        }

        /* Text column */
        .vs-text {
          display: flex;
          flex-direction: column;
          gap: 18px;
          text-align: center;
          align-items: center;
        }
        @media (min-width: 900px) {
          .vs-text {
            text-align: left;
            align-items: flex-start;
          }
        }

        /* Eyebrow */
        .vs-eyebrow {
          display: flex; flex-direction: column; gap: 10px;
          align-items: inherit;
        }
        .vs-eyebrow-text {
          font-size: clamp(.65rem, .8vw, .75rem);
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.28);
        }
        .vs-eyebrow-bar {
          width: 36px;
          height: 2px;
          border-radius: 2px;
          background: linear-gradient(90deg, transparent, #6eb0ff, transparent);
        }
        @media (min-width: 900px) {
          .vs-eyebrow-bar {
            background: linear-gradient(90deg, #6eb0ff, transparent);
          }
        }

        /* Heading */
        .vs-heading {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(1.7rem, 2.6vw, 2.6rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.028em;
          color: #fff;
          margin: 0;
          text-wrap: balance;
          max-width: 16ch;
          text-shadow: 0 0 40px rgba(255,255,255,0.08);
        }
        .vs-sub {
          font-size: clamp(.92rem, 1.05vw, 1.08rem);
          line-height: 1.65;
          color: rgba(255,255,255,0.45);
          margin: 0;
          max-width: 42ch;
        }
        .vs-sub strong {
          color: rgba(255,255,255,0.75);
          font-weight: 600;
        }

        /* Video frame — animated gradient border */
        .vs-frame-outer {
          position: relative;
          width: 100%;
          padding: 2px;
          border-radius: 18px;
          background: linear-gradient(
            135deg,
            rgba(110,176,255,0.7) 0%,
            rgba(58,122,220,0.3) 25%,
            rgba(255,255,255,0.08) 50%,
            rgba(58,122,220,0.3) 75%,
            rgba(110,176,255,0.7) 100%
          );
          background-size: 200% 200%;
          animation: vsFrameShift 8s ease-in-out infinite;
          box-shadow:
            0 30px 90px rgba(0,0,0,0.55),
            0 0 50px rgba(110,176,255,0.15);
          isolation: isolate;
        }
        @keyframes vsFrameShift {
          0%, 100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }
        /* Soft blue glow beneath the video */
        .vs-frame-outer::after {
          content: "";
          position: absolute;
          left: 8%; right: 8%;
          bottom: -28px;
          height: 60px;
          background: radial-gradient(ellipse, rgba(110,176,255,0.45) 0%, transparent 70%);
          filter: blur(28px);
          z-index: -1;
          pointer-events: none;
          animation: vsGlowPulse 4s ease-in-out infinite;
        }
        @keyframes vsGlowPulse {
          0%, 100% { opacity: 0.6; }
          50%      { opacity: 1; }
        }

        .vs-frame-inner {
          background: #050507;
          border-radius: 16px;
          overflow: hidden;
          position: relative;
        }
        .vs-aspect {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
        }
        .vs-aspect iframe,
        .vs-aspect .vs-thumb {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }
        .vs-aspect iframe {
          border: 0;
        }

        /* Thumbnail with custom play button */
        .vs-thumb {
          background-size: cover;
          background-position: center;
          background-color: #050507;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          padding: 0;
          font-family: inherit;
          transition: transform 0.4s cubic-bezier(0.18, 0.7, 0.4, 1);
        }
        .vs-thumb:hover { transform: scale(1.012); }
        .vs-thumb::before {
          content: "";
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse at center, rgba(0,0,0,0) 30%, rgba(0,0,0,0.55) 100%),
            linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.35) 100%);
          z-index: 1;
        }

        .vs-play-btn {
          position: relative;
          z-index: 2;
          width: clamp(72px, 7vw, 100px);
          height: clamp(72px, 7vw, 100px);
          border-radius: 50%;
          background: rgba(255,255,255,0.97);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow:
            0 0 0 8px rgba(255,255,255,0.08),
            0 0 50px rgba(110,176,255,0.55),
            0 24px 50px rgba(0,0,0,0.4);
          transition:
            transform 0.25s cubic-bezier(0.18, 0.7, 0.4, 1),
            box-shadow 0.25s ease;
        }
        .vs-thumb:hover .vs-play-btn {
          transform: scale(1.08);
          box-shadow:
            0 0 0 12px rgba(255,255,255,0.12),
            0 0 70px rgba(110,176,255,0.8),
            0 24px 60px rgba(0,0,0,0.5);
        }
        .vs-play-btn svg {
          width: 38%;
          height: 38%;
          margin-left: 6%;
          fill: #0a0a0a;
        }

        /* "PROMO" caption bottom-left of thumbnail */
        .vs-thumb-caption {
          position: absolute;
          left: 14px;
          bottom: 12px;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(10,10,14,0.55);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 7px;
          padding: 5px 10px;
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.78);
        }
        .vs-thumb-caption-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #ef4444;
          box-shadow: 0 0 6px rgba(239,68,68,0.85);
          animation: vsRecDot 1.6s ease-in-out infinite;
        }
        @keyframes vsRecDot {
          0%, 100% { opacity: 1; }
          50%      { opacity: 0.4; }
        }
      `}</style>

      <section className="vs-root">
        <div className="vs-grid-bg" />
        <div className="vs-ambient" />

        <div className="vs-inner">
          {/* Video — left on desktop, top on mobile */}
          <div className="vs-frame-outer">
            <div className="vs-frame-inner">
              <div className="vs-aspect">
                {playing ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                    title="DynoWeb promo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <button
                    className="vs-thumb"
                    style={{
                      backgroundImage: `url(https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg)`,
                    }}
                    onClick={() => setPlaying(true)}
                    aria-label="Play the DynoWeb promo video"
                    type="button"
                  >
                    <div className="vs-play-btn">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <span className="vs-thumb-caption" aria-hidden="true">
                      <span className="vs-thumb-caption-dot" />
                      Promo
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Text — right on desktop, bottom on mobile */}
          <div className="vs-text">
            <div className="vs-eyebrow">
              <span className="vs-eyebrow-text">Our promo</span>
              <div className="vs-eyebrow-bar" />
            </div>

            <h2 className="vs-heading">Meet DynoWeb.</h2>
            <p className="vs-sub">
              The launch promo — <strong>who it&apos;s for</strong>, <strong>why we built it</strong>, and how it changes the way Shopify merchants find and ship the fixes that actually move revenue.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
