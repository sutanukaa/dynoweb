import type { Metadata } from "next";
import PillNav from "@/app/components/PillNav";
import Footer from "@/app/components/Footer";
import { Particles } from "@/components/particles";

export const metadata: Metadata = {
  title: "Our Journey",
  description:
    "How DynoWeb went from a performance marketing agency to a Shopify CRO tool — six months of building, three months of testing on real stores, one clear answer.",
  alternates: { canonical: "/our-journey" },
  openGraph: {
    title: "Our Journey | DynoWeb",
    description:
      "How DynoWeb went from a performance marketing agency to a Shopify CRO tool.",
    url: "https://www.dynoweb.app/our-journey",
  },
};

export default function OurJourneyPage() {
  return (
    <>
      <PillNav />

      <main className="oj-root">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Karla:wght@400;500;600;700&display=swap');

          .oj-root {
            position: relative;
            background: #0a0a0a;
            min-height: 100vh;
            padding: clamp(7rem, 12vh, 10rem) 0 clamp(4rem, 6vh, 6rem);
            font-family: 'Karla', sans-serif;
            overflow: hidden;
          }

          /* Visual frame that brackets the article on wide screens
             so the side border lines don't sit miles away from the text */
          .oj-frame {
            position: relative;
            width: 100%;
            margin: 0 auto;
            padding: 0 clamp(1.5rem, 6vw, 7rem);
            z-index: 1;
          }

          .oj-article {
            position: relative;
            z-index: 1;
            width: 100%;
            margin: 0 auto;
          }

          /* Hero: eyebrow + bar + title + lead */
          .oj-eyebrow {
            display: inline-block;
            font-size: 0.74rem;
            font-weight: 700;
            letter-spacing: 0.16em;
            text-transform: uppercase;
            color: rgba(110,176,255,0.85);
            margin: 0 0 12px;
          }
          .oj-eyebrow-bar {
            width: 36px;
            height: 2px;
            border-radius: 2px;
            background: linear-gradient(90deg, #6eb0ff, transparent);
            margin: 0 0 1.25rem;
          }
          .oj-title {
            font-family: 'Montserrat', sans-serif;
            font-size: clamp(2.2rem, 5.5vw, 3.6rem);
            font-weight: 800;
            line-height: 1.06;
            letter-spacing: -0.03em;
            color: #ffffff;
            margin: 0 0 1.35rem;
            text-shadow: 0 0 50px rgba(255,255,255,0.1);
          }

          /* Signature blue sketch highlight on the last word */
          @keyframes ojHighlighterSweep {
            from { clip-path: inset(0 100% 0 0); }
            to   { clip-path: inset(0 0% 0 0); }
          }
          .oj-sketch-svg {
            pointer-events: none;
            clip-path: inset(0 100% 0 0);
            animation: ojHighlighterSweep 0.55s cubic-bezier(0.25,0.1,0.25,1) 0.4s forwards;
          }
          .oj-sketch-text {
            position: relative;
            z-index: 1;
            display: inline-block;
            color: #ffffff;
          }
          .oj-lead {
            font-size: clamp(1.05rem, 1.35vw, 1.4rem);
            line-height: 1.7;
            color: rgba(255,255,255,0.55);
            margin: 0 0 clamp(3rem, 6vh, 4.5rem);
            max-width: 90ch;
          }

          /* Story sections */
          .oj-section {
            margin-bottom: clamp(2.2rem, 4vh, 3rem);
          }
          .oj-section h2 {
            font-family: 'Montserrat', sans-serif;
            font-size: clamp(1.4rem, 2.7vw, 2.4rem);
            font-weight: 700;
            line-height: 1.22;
            letter-spacing: -0.015em;
            color: #ffffff;
            margin: 0 0 1.2rem;
          }
          .oj-section p {
            font-size: clamp(1rem, 1.45vw, 1.55rem);
            line-height: 1.75;
            color: rgba(255,255,255,0.7);
            margin: 0 0 1.2rem;
          }
          .oj-section p:last-child { margin-bottom: 0; }
          .oj-section p em {
            color: rgba(255,255,255,0.88);
            font-style: italic;
          }
          .oj-image {
            width: 100%;
            height: auto;
            display: block;
            margin: 1.75rem 0 0;
            border-radius: 14px;
            border: 1px solid rgba(255,255,255,0.08);
            background: #090a0f;
            box-shadow: 0 18px 50px rgba(0,0,0,0.4);
          }
          .oj-image-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
            margin: 1.75rem 0 0;
            align-items: stretch;
          }
          .oj-image-row .oj-image {
            margin: 0;
            width: 100%;
            height: 100%;
            aspect-ratio: 16 / 10;
            object-fit: cover;
            object-position: top center;
          }
          @media (max-width: 720px) {
            .oj-image-row { grid-template-columns: 1fr; }
          }

          /* Final closing block */
          .oj-closing {
            margin-top: clamp(3rem, 5vh, 4rem);
            padding-top: 2rem;
            border-top: 1px solid rgba(255,255,255,0.08);
            display: flex;
            justify-content: flex-end;
          }
          .oj-signoff {
            font-family: 'Montserrat', sans-serif;
            font-size: 0.95rem;
            font-style: italic;
            font-weight: 500;
            color: rgba(255,255,255,0.5);
            margin: 0;
          }

          @media (max-width: 600px) {
            .oj-section p { line-height: 1.78; }
          }
        `}</style>

        {/* Particles background */}
        <Particles
          className="absolute inset-0 z-0"
          quantity={80}
          color="#ffffff"
          ease={10}
          size={0.4}
          staticity={50}
          refresh
        />

        {/* Top radial shade */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            top: "-3.5rem",
            pointerEvents: "none",
            zIndex: 0,
            overflow: "hidden",
            background:
              "radial-gradient(35% 80% at 49% 0%, rgba(255,255,255,0.07), transparent)",
          }}
        />

        <div className="oj-frame">
          {/* Side border lines — bracket the article, not the viewport */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              width: "1px",
              background: "rgba(255,255,255,0.13)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 8%, black 78%, transparent 100%)",
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 8%, black 78%, transparent 100%)",
              zIndex: 10,
              pointerEvents: "none",
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              width: "1px",
              background: "rgba(255,255,255,0.13)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 8%, black 78%, transparent 100%)",
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 8%, black 78%, transparent 100%)",
              zIndex: 10,
              pointerEvents: "none",
            }}
          />

          <article className="oj-article">
          <p className="oj-eyebrow">Our Journey</p>
          <div className="oj-eyebrow-bar" />
          <h1 className="oj-title">
            From an agency to a{" "}
            <span style={{ position: "relative", display: "inline-block", whiteSpace: "nowrap" }}>
              <svg
                className="oj-sketch-svg"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                fill="none"
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 0,
                  left: "4%",
                  width: "92%",
                  height: "100%",
                  overflow: "hidden",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              >
                <defs>
                  <linearGradient id="oj-tg" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="white" stopOpacity="0" />
                    <stop offset="10%" stopColor="white" stopOpacity="1" />
                    <stop offset="90%" stopColor="white" stopOpacity="1" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                  <mask id="oj-tm">
                    <rect x="0" y="0" width="100" height="100" fill="url(#oj-tg)" />
                  </mask>
                </defs>
                <g mask="url(#oj-tm)">
                  <path d="M2 52 C20 48,42 46,62 47 C78 48,90 50,98 49" stroke="#1a3a7a" strokeWidth="52" strokeLinecap="butt" opacity="0.7" fill="none" />
                  <path d="M2 51 C22 47,46 45,66 46 C80 47,91 49,98 48" stroke="#3a7adc" strokeWidth="38" strokeLinecap="butt" opacity="0.45" fill="none" />
                  <path d="M4 74 C24 71,50 70,70 71 C84 72,93 73,98 72" stroke="#5aaeff" strokeWidth="18" strokeLinecap="butt" opacity="0.3" fill="none" />
                  <path d="M4 34 C24 31,48 30,68 31 C82 32,92 33,98 32" stroke="#7ec8ff" strokeWidth="2.5" strokeLinecap="butt" opacity="0.7" fill="none" />
                  <path d="M2 51 C22 47,46 45,66 46 C80 47,91 49,98 48" stroke="#9dd8ff" strokeWidth="1.5" strokeLinecap="butt" opacity="0.5" fill="none" />
                </g>
              </svg>
              <span className="oj-sketch-text">product.</span>
            </span>
          </h1>
          <p className="oj-lead">
            How we ran a Shopify marketing agency, hit a wall we couldn&apos;t see through with any tool on the market, and ended up building the one we wished existed.
          </p>

          <section className="oj-section">
            <h2>We started as an agency</h2>
            <p>
              Before Dynoweb existed, we ran a performance marketing agency. We did the full stack of work that growing Shopify brands need — SEO, Meta ads, Google ads, on-page optimization, content strategy.
            </p>
            <p>
              Our job was simple on paper: bring more traffic, get more sales. And by most measures, we were doing it well. Our SEO rankings climbed. Our ad engagement rates were strong. Click-through rates were healthy.
            </p>
          </section>

          <section className="oj-section">
            <h2>But something kept going wrong</h2>
            <p>
              More visitors were reaching the store. More products were getting added to cart. But the carts kept getting abandoned.
            </p>
            <p>
              We knew the problem wasn&apos;t traffic. The traffic was qualified. Something was breaking after the visitor landed — somewhere between &ldquo;interested&rdquo; and &ldquo;checkout complete.&rdquo; We just couldn&apos;t see what.
            </p>
          </section>

          <section className="oj-section">
            <h2>We tried every tool on the market</h2>
            <p>
              We installed Microsoft Clarity. Then Hotjar. Then Lucky Orange. Then MIDA. We watched session recordings for hours. We studied heatmaps. We pulled scroll-depth reports.
            </p>
            <p>
              Every tool was excellent at one thing: showing us <em>what</em> was happening.
            </p>
            <p>
              Not one of them told us <em>why</em> the cart abandonment rate was rising — or what to actually change to fix it. We were drowning in data and starving for direction.
            </p>
          </section>

          <section className="oj-section">
            <h2>So we decided to build it ourselves</h2>
            <p>
              I&apos;m a former developer. I&apos;d spent years writing code before moving into marketing. And the more I sat with the problem, the more I realized this gap was solvable — it just needed someone willing to combine real behavioral data with AI that could actually reason about it.
            </p>
            <p>That&apos;s where Dynoweb began.</p>
          </section>

          <section className="oj-section">
            <h2>Six months of building</h2>
            <p>
              It took six months. We faced the kinds of challenges every Shopify app builder hits — theme compatibility, performance constraints, building tracking that wouldn&apos;t slow down stores, designing an AI engine that produced specific recommendations instead of generic advice.
            </p>
            <p>
              Every time we hit a wall, we went back to the original question: <em>would this actually tell a merchant what to fix?</em>
            </p>
          </section>

          <section className="oj-section">
            <h2>Then we tested it on real stores</h2>
            <p>
              For two to three months, we ran Dynoweb on real client stores — YetiBeds, Punarvasu, Sahasika, TrackSafe, and a handful of others. These weren&apos;t lab tests. These were live businesses watching us closely.
            </p>
            <p>
              The results spoke for themselves. Cart abandonment rates started dropping. Specific friction points — the ones no other tool had flagged — were getting identified and fixed.
            </p>
            <p>
              For the first time, we had a tool that didn&apos;t just hand merchants a dashboard. It handed them an answer.
            </p>
            <div className="oj-image-row">
              <img
                src="/Dashboard.png"
                alt="The DynoWeb dashboard for a real client store — friction signals, conversion metrics, and prioritized fixes in one view"
                className="oj-image"
                loading="lazy"
                decoding="async"
              />
              <img
                src="/Yetibeds.png"
                alt="YetiBeds storefront — one of the real client stores we tested DynoWeb on"
                className="oj-image"
                loading="lazy"
                decoding="async"
              />
            </div>
          </section>

          <section className="oj-section">
            <h2>Why Dynoweb exists</h2>
            <p>
              Most Shopify merchants don&apos;t have the budget for a $5,000-per-month CRO agency. And they shouldn&apos;t need one to fix problems an AI can identify in minutes.
            </p>
            <p>
              Dynoweb is the tool we wished we&apos;d had when we were running our agency — built for the merchant directly, priced for the merchant directly, and focused on the one thing every store actually needs.
            </p>
          </section>

          <div className="oj-closing">
            <p className="oj-signoff">— The Dynoweb Team</p>
          </div>
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}
