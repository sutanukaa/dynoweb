"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavItem {
    label: string;
    href: string;
}

const navItems: NavItem[] = [
    { label: "Features", href: "#features" },
    { label: "Help", href: "#help" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [activeItem, setActiveItem] = useState<string | null>(null);
    const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({});
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const navRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());

    // Shrink/frost navbar on scroll
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Move the hover indicator pill
    const handleMouseEnter = (label: string) => {
        const el = itemRefs.current.get(label);
        const nav = navRef.current;
        if (!el || !nav) return;
        const navRect = nav.getBoundingClientRect();
        const elRect = el.getBoundingClientRect();
        setIndicatorStyle({
            left: elRect.left - navRect.left,
            width: elRect.width,
            opacity: 1,
        });
        setActiveItem(label);
    };

    const handleMouseLeave = () => {
        setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
        setActiveItem(null);
    };

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&display=swap');

                @keyframes navFadeIn {
                    from { opacity: 0; transform: translateY(-12px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes logoShimmer {
                    0% { background-position: -200% center; }
                    100% { background-position: 200% center; }
                }
                @keyframes mobileMenuIn {
                    from { opacity: 0; transform: translateY(-8px) scale(0.97); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }

                .navbar-wrap {
                    animation: navFadeIn 0.5s ease forwards;
                    font-family: 'Instrument Sans', sans-serif;
                }

                .navbar-inner {
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .navbar-inner.scrolled {
                    background: rgba(255,255,255,0.82);
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    box-shadow: 0 1px 0 rgba(0,0,0,0.06), 0 4px 24px rgba(99,130,200,0.08);
                    border-bottom: 1px solid rgba(226,232,240,0.8);
                }

                .navbar-inner.top {
                    background: transparent;
                    backdrop-filter: none;
                    box-shadow: none;
                    border-bottom: 1px solid transparent;
                }

                .logo-text {
                    background: linear-gradient(90deg, #1e3a6e, #3b6fbe, #5a8fd4, #3b6fbe, #1e3a6e);
                    background-size: 200% auto;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    animation: logoShimmer 5s linear infinite;
                    font-weight: 700;
                    letter-spacing: -0.02em;
                }

                .nav-indicator {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    height: 32px;
                    border-radius: 8px;
                    background: rgba(99,130,200,0.08);
                    transition: left 0.25s cubic-bezier(0.4, 0, 0.2, 1),
                                width 0.25s cubic-bezier(0.4, 0, 0.2, 1),
                                opacity 0.2s ease;
                    pointer-events: none;
                }

                .nav-link {
                    position: relative;
                    z-index: 1;
                    font-size: 0.875rem;
                    font-weight: 500;
                    color: #64748b;
                    padding: 6px 14px;
                    border-radius: 8px;
                    transition: color 0.2s ease;
                    white-space: nowrap;
                }
                .nav-link:hover, .nav-link.active {
                    color: #2d5fa8;
                }

                .btn-nav-primary {
                    background: linear-gradient(135deg, #2d5fa8 0%, #3b6fbe 50%, #2452a0 100%);
                    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 0 10px rgba(59,111,190,0.2), inset 0 1px 0 rgba(255,255,255,0.12);
                    transition: box-shadow 0.3s ease, transform 0.2s ease;
                    font-size: 0.875rem;
                    font-weight: 600;
                    color: white;
                    padding: 8px 18px;
                    border-radius: 99px;
                    white-space: nowrap;
                }
                .btn-nav-primary:hover {
                    box-shadow: 0 2px 8px rgba(0,0,0,0.12), 0 0 20px rgba(59,111,190,0.3), inset 0 1px 0 rgba(255,255,255,0.12);
                    transform: translateY(-1px) scale(1.02);
                }

                .btn-nav-ghost {
                    font-size: 0.875rem;
                    font-weight: 500;
                    color: #475569;
                    padding: 8px 14px;
                    border-radius: 99px;
                    transition: color 0.2s ease, background 0.2s ease;
                }
                .btn-nav-ghost:hover {
                    color: #2d5fa8;
                    background: rgba(99,130,200,0.07);
                }

                .hamburger-line {
                    display: block;
                    width: 20px;
                    height: 1.5px;
                    background: #475569;
                    border-radius: 2px;
                    transition: transform 0.3s ease, opacity 0.3s ease;
                    transform-origin: center;
                }

                .mobile-menu {
                    animation: mobileMenuIn 0.25s ease forwards;
                }
            `}</style>

            <div className="navbar-wrap fixed top-0 left-0 right-0 z-50 px-4 pt-4">
                <div
                    className={`navbar-inner ${scrolled ? "scrolled" : "top"} mx-auto max-w-6xl rounded-2xl px-4`}
                >
                    <div className="flex items-center justify-between h-14">

                        {/* Left side: Logo + Navigation */}
                        <div className="flex items-center gap-8">
                            {/* Logo */}
                            <Link href="/" className="flex items-center gap-2 shrink-0">
                                <Image
                                    src="/logo.png"
                                    alt="DynoWeb Logo"
                                    width={28}
                                    height={28}
                                    className="rounded-lg"
                                />
                                <span className="logo-text text-lg">DynoWeb</span>
                            </Link>

                            {/* Desktop nav links with sliding indicator */}
                            <nav
                                ref={navRef}
                                className="hidden md:flex items-center relative"
                                onMouseLeave={handleMouseLeave}
                            >
                                {/* Sliding hover pill */}
                                <div className="nav-indicator" style={indicatorStyle} />

                                {navItems.map((item) => (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        ref={(el) => {
                                            if (el) itemRefs.current.set(item.label, el);
                                        }}
                                        className={`nav-link ${activeItem === item.label ? "active" : ""}`}
                                        onMouseEnter={() => handleMouseEnter(item.label)}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        {/* Desktop CTAs */}
                        <div className="hidden md:flex items-center gap-1">
                            <button className="btn-nav-ghost">Sign in</button>
                            <button className="btn-nav-primary">Get started free</button>
                        </div>

                        {/* Mobile hamburger */}
                        <button
                            className="md:hidden flex flex-col gap-[5px] p-2 rounded-lg hover:bg-slate-100 transition-colors"
                            onClick={() => setMenuOpen((v) => !v)}
                            aria-label="Toggle menu"
                        >
                            <span
                                className="hamburger-line"
                                style={menuOpen ? { transform: "rotate(45deg) translate(4px, 4px)" } : {}}
                            />
                            <span
                                className="hamburger-line"
                                style={menuOpen ? { opacity: 0, transform: "scaleX(0)" } : {}}
                            />
                            <span
                                className="hamburger-line"
                                style={menuOpen ? { transform: "rotate(-45deg) translate(4px, -4px)" } : {}}
                            />
                        </button>
                    </div>

                    {/* Mobile menu */}
                    {menuOpen && (
                        <div className="mobile-menu md:hidden pb-4 pt-1 border-t border-slate-100 mt-1">
                            <div className="flex flex-col gap-1 pt-3">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className="nav-link block"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                                <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-slate-100">
                                    <button className="btn-nav-ghost text-left">Sign in</button>
                                    <button className="btn-nav-primary text-center">Get started free</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}