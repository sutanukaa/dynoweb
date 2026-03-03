"use client";
import { useEffect, useRef, useState, useCallback } from "react";

interface Feature {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    videoSrc: string;
    icon: React.ReactNode;
}

const features: Feature[] = [
    {
        id: "ai-builder",
        title: "AI-Powered Page Builder",
        subtitle: "Your data shapes every pixel.",
        description: "Describe any page in plain English. Before writing a single section, DynoWeb pulls your click heatmaps, scroll depth, rage-click patterns, and device split — then builds a fully optimized Shopify Liquid template around what your actual visitors do. Not templates. Not guesswork.",
        videoSrc: "/videos/ai-builder.mp4",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 12l10 5 10-5"/>
                <path d="M2 17l10 5 10-5"/>
            </svg>
        ),
    },
    {
        id: "template-system",
        title: "Template System",
        subtitle: "Build once. Deploy everywhere.",
        description: "Design a product page UI once and assign it across unlimited products. DynoWeb generates valid Shopify product.{suffix}.json templates for every page type — products, collections, landing pages, homepages, and custom pages — all assignable from Shopify Admin's native dropdown.",
        videoSrc: "/videos/template-system.mp4",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" rx="1.5"/>
                <rect x="14" y="3" width="7" height="7" rx="1.5"/>
                <rect x="3" y="14" width="7" height="7" rx="1.5"/>
                <path d="M17.5 14v6M14.5 17h6" strokeWidth="2"/>
            </svg>
        ),
    },
    {
        id: "safe-publishing",
        title: "Safe Publishing & Rollback",
        subtitle: "Zero risk to your live store — ever.",
        description: "Every change lives in a cloned draft theme, completely invisible to shoppers. Preview, compare side-by-side with your live store, and publish only when confident. Every version is timestamped with a visual diff. One click restores any previous state instantly.",
        videoSrc: "/videos/safe-publishing.mp4",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21.5S4 17 4 11V5.5l8-3 8 3V11c0 6-8 10.5-8 10.5z"/>
                <path d="M9 12l2 2 4-4"/>
            </svg>
        ),
    },
    {
        id: "mobile-performance",
        title: "Speed & Mobile Experience",
        subtitle: "Fast pages. Real mobile layouts.",
        description: "DynoWeb generates genuinely different content hierarchies for mobile — not just scaled-down CSS. Sticky CTAs, swipeable galleries, reordered sections. And every page adds less than 50ms to load time: lazy loading, scoped CSS, deferred JS, and auto-compressed WebP images, all built in.",
        videoSrc: "/videos/mobile-performance.mp4",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <rect x="7" y="2" width="10" height="20" rx="2.5"/>
                <circle cx="12" cy="18.5" r="1" fill="currentColor" stroke="none"/>
                <path d="M10 6h4" strokeWidth="1.5"/>
                <polygon points="13 9 9 13 12 13 11 17 15 13 12 13 13 9" fill="currentColor" stroke="none"/>
            </svg>
        ),
    },
    {
        id: "optimize-test",
        title: "Optimize & A/B Test",
        subtitle: "AI spots it. You test it in one click.",
        description: "DynoWeb continuously scores opportunities using PECTI — Proof, Ease, Cost, Time, Impact — so you always know what to fix first. Hit 'Test This' on any suggestion and DynoWeb builds variant B, splits traffic server-side with zero flicker, tracks real revenue, and declares a winner at significance.",
        videoSrc: "/videos/optimize-test.mp4",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="5" cy="5" r="2.5"/>
                <circle cx="19" cy="5" r="2.5"/>
                <circle cx="12" cy="19" r="2.5"/>
                <path d="M5 7.5V12a7 7 0 0 0 7 7M19 7.5V12a7 7 0 0 1-7 7"/>
                <path d="M12 4v8"/>
            </svg>
        ),
    },
    {
        id: "team-seo",
        title: "Team & SEO Tools",
        subtitle: "Ship confidently with your whole team.",
        description: "Every change is logged with a timestamp, author, and visual diff so multi-person teams always know what changed and who did it. Before anything goes live, DynoWeb runs automated SEO checks: meta tags, H1 uniqueness, alt text, canonical URLs, structured data, and page speed impact.",
        videoSrc: "/videos/team-seo.mp4",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="7" r="3"/>
                <path d="M3 21v-2a6 6 0 0 1 6-6h.5"/>
                <circle cx="17" cy="15" r="3"/>
                <path d="M17 12v-1a3 3 0 0 0-3-3h-1"/>
                <path d="M21 21l-1.5-1.5M19.5 17a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0z"/>
            </svg>
        ),
    },
];

const ITEM_HEIGHT = 120;
const VISIBLE = 3;
const N = features.length;

export default function FeaturesVideoSection() {
    const [offset, setOffset] = useState(0);
    const [videoKey, setVideoKey] = useState(0);
    const [videoOpacity, setVideoOpacity] = useState(1);
    const lastActive = useRef(0);
    const videoRef = useRef<HTMLVideoElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    const activeIndex = Math.round(offset) % N;
    const normActive = ((activeIndex % N) + N) % N;

    const goToVideo = useCallback((idx: number) => {
        const norm = ((idx % N) + N) % N;
        if (norm === lastActive.current) return;
        lastActive.current = norm;
        setVideoOpacity(0);
        setTimeout(() => { setVideoKey(k => k + 1); setVideoOpacity(1); }, 180);
    }, []);

    useEffect(() => { goToVideo(activeIndex); }, [activeIndex, goToVideo]);

    useEffect(() => {
        const v = videoRef.current;
        if (!v) return;
        v.currentTime = 0;
        v.play().catch(() => {});
    }, [videoKey]);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        let accumulated = 0;
        const onWheel = (e: WheelEvent) => {
            e.preventDefault();
            accumulated += e.deltaY;
            setOffset(accumulated / ITEM_HEIGHT);
        };
        el.addEventListener("wheel", onWheel, { passive: false });
        return () => el.removeEventListener("wheel", onWheel);
    }, []);

    const slots = Array.from({ length: VISIBLE }, (_, i) => {
        const slotOffset = i - Math.floor(VISIBLE / 2);
        const rawIdx = Math.round(offset) + slotOffset;
        const featIdx = ((rawIdx % N) + N) % N;
        return { slotOffset, featIdx, rawIdx };
    });

    const frac = offset - Math.round(offset);

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cal+Sans&family=Instrument+Sans:wght@400;500;600&display=swap');

                @keyframes ambientGlow {
                    0%,100% { opacity:.25; } 50% { opacity:.42; }
                }
                @keyframes fadeInUp {
                    from { opacity:0; transform:translateY(16px); }
                    to   { opacity:1; transform:translateY(0); }
                }
                @keyframes sketchDraw {
                    from { stroke-dashoffset: 900; }
                    to   { stroke-dashoffset: 0; }
                }

                .fvs6 { font-family:'Instrument Sans',sans-serif; }

                .fvs6 .sec-label {
                    font-size:.7rem; font-weight:600;
                    letter-spacing:.12em; text-transform:uppercase; color:#94a3b8;
                }
                .fvs6 .divider {
                    width:40px; height:2px; border-radius:2px;
                    background:linear-gradient(90deg,#3b6fbe,transparent);
                }
                .fvs6 .sec-heading {
                    font-family:'Cal Sans',Georgia,serif;
                    font-size:clamp(1.8rem,3vw,2.6rem);
                    letter-spacing:-.02em; line-height:1.15; color:#0f172a;
                }

                /* ── Sketch strokes ── */
                .sk-1 { stroke-dasharray:900; stroke-dashoffset:900; animation: sketchDraw .6s ease-out .5s forwards; }
                .sk-2 { stroke-dasharray:900; stroke-dashoffset:900; animation: sketchDraw .55s ease-out .5s forwards; }
                .sk-3 { stroke-dasharray:900; stroke-dashoffset:900; animation: sketchDraw .45s ease-out .62s forwards; }

                /* ── Carousel ── */
                .fvs6 .carousel-shell {
                    position: relative; user-select: none; cursor: ns-resize;
                }
                .fvs6 .carousel-shell::before,
                .fvs6 .carousel-shell::after {
                    content: ''; position: absolute; left: 0; right: 0; z-index: 10;
                    pointer-events: none; height: 80px;
                }
                .fvs6 .carousel-shell::before { top: 0; background: linear-gradient(to bottom, white, transparent); }
                .fvs6 .carousel-shell::after  { bottom: 0; background: linear-gradient(to top, white, transparent); }
                .fvs6 .carousel-window { overflow: hidden; position: relative; }
                .fvs6 .carousel-item {
                    display: flex; align-items: center; gap: 13px;
                    padding: 0 4px 0 18px;
                    transition: opacity .3s ease, transform .3s cubic-bezier(.4,0,.2,1);
                    will-change: transform, opacity;
                    position: absolute; left: 0; right: 0;
                }
                .fvs6 .c-icon {
                    width:36px; height:36px; border-radius:10px;
                    display:flex; align-items:center; justify-content:center;
                    flex-shrink:0; border:1px solid transparent; color:#94a3b8;
                    transition:all .3s ease;
                }
                .fvs6 .carousel-item.is-active .c-icon {
                    background:rgba(59,111,190,.09); border-color:rgba(59,111,190,.2);
                    color:#3b6fbe; box-shadow:0 0 12px rgba(59,111,190,.1);
                }
                .fvs6 .c-text { flex:1; overflow:hidden; }
                .fvs6 .c-title {
                    font-size:.9rem; font-weight:500; color:#94a3b8;
                    transition:color .3s, font-weight .3s;
                    white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
                }
                .fvs6 .carousel-item.is-active .c-title { color:#0f172a; font-weight:700; }
                .fvs6 .c-expand {
                    display:grid; grid-template-rows:0fr;
                    transition:grid-template-rows .35s cubic-bezier(.4,0,.2,1);
                }
                .fvs6 .carousel-item.is-active .c-expand { grid-template-rows:1fr; }
                .fvs6 .c-expand-inner { overflow:hidden; }
                .fvs6 .c-subtitle { font-size:.8rem; font-weight:700; color:#2d5fa8; margin:5px 0 3px; }
                .fvs6 .c-desc { font-size:.8rem; color:#64748b; line-height:1.7; }

                .fvs6 .rail { position:absolute; left:0; top:0; bottom:0; width:3px; z-index:5; }
                .fvs6 .rail-bg { position:absolute; inset:0; border-radius:99px; background:rgba(226,232,240,.5); }
                .fvs6 .rail-fill {
                    position:absolute; left:0; width:100%; border-radius:99px;
                    background:linear-gradient(to bottom,#2d5fa8,#60a5d4);
                    transition:top .3s ease, height .3s ease;
                }
                .fvs6 .scroll-hint {
                    display:flex; align-items:center; gap:6px;
                    font-size:.7rem; color:#94a3b8; font-weight:500;
                    margin-top:12px;
                    animation:fadeInUp .5s ease .3s both;
                }

                /* ── Media panel ── */
                .fvs6 .media-card {
                    border-radius:22px; overflow:hidden; background:#f8fafc;
                    box-shadow:0 0 0 1px rgba(203,213,225,.9),0 24px 64px rgba(15,23,42,.1),0 0 50px rgba(99,130,200,.08);
                }
                .fvs6 .media-glow {
                    position:absolute; inset:-24px; border-radius:44px;
                    background:radial-gradient(ellipse at center,rgba(99,130,200,.13) 0%,transparent 70%);
                    filter:blur(26px); pointer-events:none;
                }
                .fvs6 .browser-bar {
                    display:flex; align-items:center; gap:6px;
                    padding:11px 14px; background:white;
                    border-bottom:1px solid rgba(226,232,240,.8);
                }
                .fvs6 .b-dot { width:9px; height:9px; border-radius:50%; }
                .fvs6 .b-url {
                    flex:1; height:22px; background:#f1f5f9;
                    border-radius:6px; border:1px solid rgba(226,232,240,.8);
                    display:flex; align-items:center; padding:0 10px; gap:6px;
                }
                .fvs6 .media-body { position:relative; aspect-ratio:16/10; overflow:hidden; background:#f1f5f9; }
                .fvs6 .ph { position:absolute; inset:0; z-index:1; display:grid; grid-template-columns:175px 1fr; background:#f8fafc; }
                .fvs6 .ph-side { background:white; border-right:1px solid #e2e8f0; padding:14px 12px; display:flex; flex-direction:column; gap:8px; }
                .fvs6 .ph-line { height:9px; border-radius:4px; background:#e2e8f0; }
                .fvs6 .ph-line.hi { background:rgba(59,111,190,.18); }
                .fvs6 .ph-main { padding:16px; display:flex; flex-direction:column; gap:10px; }
                .fvs6 .ph-head { height:11px; border-radius:4px; background:#cbd5e1; width:48%; }
                .fvs6 .ph-cards { display:flex; gap:8px; }
                .fvs6 .ph-card { flex:1; aspect-ratio:4/3; border-radius:8px; background:white; border:1px solid #e2e8f0; position:relative; overflow:hidden; }
                .fvs6 .ph-accent { position:absolute; bottom:0; left:0; right:0; height:3px; background:linear-gradient(90deg,#3b6fbe,#7ba7d4); }
                .fvs6 .ph-rows { display:flex; flex-direction:column; gap:6px; }
                .fvs6 .ph-r { display:flex; gap:8px; }
                .fvs6 .ph-cta { height:30px; border-radius:8px; background:linear-gradient(135deg,#2d5fa8,#3b6fbe); box-shadow:0 0 14px rgba(59,111,190,.2); }
                .fvs6 .live-badge {
                    position:absolute; bottom:14px; left:14px; z-index:3;
                    display:flex; align-items:center; gap:8px;
                    background:rgba(255,255,255,.92); backdrop-filter:blur(10px);
                    border:1px solid rgba(226,232,240,.9); border-radius:10px;
                    padding:7px 12px; box-shadow:0 4px 16px rgba(15,23,42,.07);
                }
                .fvs6 .live-dot { width:7px; height:7px; border-radius:50%; background:#22c55e; box-shadow:0 0 7px #22c55e; }
                .fvs6 .nav-dots { position:absolute; bottom:14px; right:14px; z-index:3; display:flex; gap:5px; align-items:center; }
                .fvs6 .nav-dot { height:5px; border-radius:99px; border:none; padding:0; background:rgba(203,213,225,.7); transition:all .3s cubic-bezier(.4,0,.2,1); }
                .fvs6 .nav-dot.active { background:linear-gradient(90deg,#2d5fa8,#60a5d4); box-shadow:0 0 6px rgba(59,111,190,.4); }
            `}</style>

            <section className="fvs6 relative w-full overflow-visible py-28 px-6">

                <div style={{
                    position:"absolute", right:"8%", top:"30%",
                    width:560, height:560, borderRadius:"50%",
                    background:"radial-gradient(circle,rgba(99,130,200,.09) 0%,transparent 70%)",
                    filter:"blur(55px)", pointerEvents:"none", zIndex:0,
                    animation:"ambientGlow 6s ease-in-out infinite",
                }}/>

                <div className="relative z-10 mx-auto max-w-6xl">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

                        {/* ══ LEFT ══ */}
                        <div className="w-full lg:w-[44%] flex-shrink-0 flex flex-col gap-10">

                            {/* Header */}
                            <div className="flex flex-col gap-3">
                                <span className="sec-label">Platform features</span>
                                <div className="divider"/>
                                <h2 className="sec-heading">
                                    See DynoWeb<br/>
                                    {/* ── Sketch highlight on "in action." ── */}
                                    <span style={{ position: "relative", display: "inline-block" }}>
                                        <svg
                                            viewBox="0 0 100 100"
                                            preserveAspectRatio="none"
                                            fill="none"
                                            aria-hidden="true"
                                            style={{
                                                position: "absolute",
                                                top: 0, left: "2%",
                                                width: "96%", height: "100%",
                                                overflow: "hidden",
                                                pointerEvents: "none",
                                                zIndex: 0,
                                            }}
                                        >
                                            <defs>
                                                <linearGradient id="skFeatG" x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%"   stopColor="white" stopOpacity="0" />
                                                    <stop offset="10%"  stopColor="white" stopOpacity="1" />
                                                    <stop offset="90%"  stopColor="white" stopOpacity="1" />
                                                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                                                </linearGradient>
                                                <mask id="skFeatM">
                                                    <rect x="0" y="0" width="100" height="100" fill="url(#skFeatG)" />
                                                </mask>
                                            </defs>
                                            <g mask="url(#skFeatM)">
                                                <path className="sk-1" d="M2 52 C20 48,42 46,62 47 C78 48,90 50,98 49" stroke="#3b6fbe" strokeWidth="52" strokeLinecap="butt" opacity="0.18" fill="none" />
                                                <path className="sk-2" d="M2 51 C22 47,46 45,66 46 C80 47,91 49,98 48" stroke="#3b6fbe" strokeWidth="38" strokeLinecap="butt" opacity="0.55" fill="none" />
                                                <path className="sk-2" d="M4 74 C24 71,50 70,70 71 C84 72,93 73,98 72" stroke="#3b6fbe" strokeWidth="18" strokeLinecap="butt" opacity="0.5"  fill="none" />
                                                <path className="sk-3" d="M4 34 C24 31,48 30,68 31 C82 32,92 33,98 32" stroke="#2d5fa8" strokeWidth="3"  strokeLinecap="butt" opacity="0.32" fill="none" />
                                            </g>
                                        </svg>
                                        <span style={{ position: "relative", zIndex: 1, color: "#0f172a" }}>in action.</span>
                                    </span>
                                </h2>
                                <p style={{color:"#64748b", fontSize:".92rem", lineHeight:1.75, maxWidth:380}}>
                                    Six capabilities working as one continuous loop.
                                </p>
                            </div>

                            {/* Carousel */}
                            <div style={{position:"relative", paddingLeft:18}}>
                                <div className="rail">
                                    <div className="rail-bg"/>
                                    <div className="rail-fill" style={{
                                        top: `${(Math.floor(VISIBLE/2) / VISIBLE) * 100}%`,
                                        height: `${(1 / VISIBLE) * 100}%`,
                                    }}/>
                                </div>

                                <div ref={scrollRef} className="carousel-shell" style={{touchAction:"none"}}>
                                    <div className="carousel-window" style={{height: VISIBLE * ITEM_HEIGHT}}>
                                        {slots.map(({ slotOffset, featIdx }) => {
                                            const isActive = slotOffset === 0;
                                            const yPos = (Math.floor(VISIBLE / 2) + slotOffset - frac) * ITEM_HEIGHT;
                                            const dist = Math.abs(slotOffset - frac);
                                            const opacity = Math.max(0, 1 - dist * 0.55);
                                            const scale = 1 - dist * 0.04;

                                            return (
                                                <div
                                                    key={`${slotOffset}`}
                                                    className={`carousel-item${isActive ? " is-active" : ""}`}
                                                    style={{
                                                        transform: `translateY(${yPos}px) scale(${scale})`,
                                                        opacity,
                                                        height: ITEM_HEIGHT,
                                                        top: 0,
                                                    }}
                                                >
                                                    <div className="c-icon">{features[featIdx].icon}</div>
                                                    <div className="c-text">
                                                        <p className="c-title">{features[featIdx].title}</p>
                                                        <div className="c-expand">
                                                            <div className="c-expand-inner">
                                                                <p className="c-subtitle">{features[featIdx].subtitle}</p>
                                                                <p className="c-desc">{features[featIdx].description}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                <div className="scroll-hint">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 5v14M5 12l7 7 7-7"/>
                                    </svg>
                                    Scroll to explore
                                </div>
                            </div>
                        </div>

                        {/* ══ RIGHT: sticky video ══ */}
                        <div className="flex-1 min-w-0" style={{position:"sticky", top:96, alignSelf:"flex-start"}}>
                            <div style={{position:"relative"}}>
                                <div className="media-glow"/>
                                <div className="media-card" style={{position:"relative", zIndex:1}}>
                                    <div className="browser-bar">
                                        <div className="b-dot" style={{background:"#fca5a5"}}/>
                                        <div className="b-dot" style={{background:"#fcd34d"}}/>
                                        <div className="b-dot" style={{background:"#86efac"}}/>
                                        <div className="b-url">
                                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round">
                                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                                            </svg>
                                            <span style={{fontSize:".62rem", color:"#94a3b8", letterSpacing:".03em"}}>dynoweb.app/builder</span>
                                        </div>
                                    </div>

                                    <div className="media-body">
                                        <div className="ph">
                                            <div className="ph-side">
                                                {[100,75,60,85,65,50,80,70].map((w,i) => (
                                                    <div key={i} className={`ph-line${i===2?" hi":""}`} style={{width:`${w}%`}}/>
                                                ))}
                                            </div>
                                            <div className="ph-main">
                                                <div className="ph-head"/>
                                                <div className="ph-cards">
                                                    {[0,1,2].map(i => (
                                                        <div key={i} className="ph-card">
                                                            <div style={{position:"absolute",inset:0,background:`linear-gradient(135deg,rgba(59,111,190,${.05+i*.03}) 0%,transparent 80%)`}}/>
                                                            <div className="ph-accent" style={{width:`${50+i*18}%`}}/>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="ph-rows">
                                                    {([[70,30],[50,50],[85,15]] as [number,number][]).map(([a,b],i) => (
                                                        <div key={i} className="ph-r">
                                                            <div className="ph-line" style={{flex:a}}/>
                                                            <div className="ph-line" style={{flex:b, opacity:.5}}/>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="ph-cta"/>
                                            </div>
                                        </div>

                                        <video
                                            ref={videoRef}
                                            key={videoKey}
                                            src={features[normActive].videoSrc}
                                            style={{
                                                position:"absolute", inset:0,
                                                width:"100%", height:"100%",
                                                objectFit:"cover",
                                                opacity:videoOpacity,
                                                transition:"opacity .22s ease",
                                                zIndex:2,
                                            }}
                                            muted loop playsInline autoPlay
                                        />

                                        <div className="live-badge">
                                            <div className="live-dot"/>
                                            <span style={{fontSize:".72rem", fontWeight:600, color:"#334155", letterSpacing:".04em"}}>
                                                {features[normActive].title}
                                            </span>
                                        </div>

                                        <div className="nav-dots">
                                            {features.map((_,i) => (
                                                <div
                                                    key={i}
                                                    className={`nav-dot${i===normActive?" active":""}`}
                                                    style={{width: i===normActive ? 18 : 5}}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}