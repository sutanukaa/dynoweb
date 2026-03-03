"use client";
import { useRef, useState } from "react";
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

export default function PillNav() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const circleRefs = useRef<Array<HTMLSpanElement | null>>([]);

    const handleEnter = (index: number) => {
        const circle = circleRefs.current[index];
        if (!circle) return;
        circle.style.transform = "translateX(-50%) scale(1.2)";
        circle.style.transition = "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)";
        const pill = circle.parentElement;
        if (pill) {
            const label = pill.querySelector('.pill-label') as HTMLElement;
            const hoverLabel = pill.querySelector('.pill-label-hover') as HTMLElement;
            if (label && hoverLabel) {
                label.style.transform = "translateY(-30px)";
                label.style.transition = "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)";
                hoverLabel.style.transform = "translateY(0)";
                hoverLabel.style.opacity = "1";
                hoverLabel.style.transition = "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease";
            }
        }
    };

    const handleLeave = (index: number) => {
        const circle = circleRefs.current[index];
        if (!circle) return;
        circle.style.transform = "translateX(-50%) scale(0)";
        circle.style.transition = "transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)";
        const pill = circle.parentElement;
        if (pill) {
            const label = pill.querySelector('.pill-label') as HTMLElement;
            const hoverLabel = pill.querySelector('.pill-label-hover') as HTMLElement;
            if (label && hoverLabel) {
                label.style.transform = "translateY(0)";
                label.style.transition = "transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)";
                hoverLabel.style.transform = "translateY(30px)";
                hoverLabel.style.opacity = "0";
                hoverLabel.style.transition = "transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease";
            }
        }
    };

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&display=swap');

                .pill-nav { font-family: 'Instrument Sans', sans-serif; }

                .hover-circle {
                    width: 60px;
                    height: 60px;
                    background: #2452a0;
                    border-radius: 50%;
                    position: absolute;
                    left: 50%;
                    bottom: -10px;
                    transform: translateX(-50%) scale(0);
                    transform-origin: center bottom;
                    z-index: 1;
                }

                .pill-label {
                    position: relative;
                    z-index: 2;
                    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .pill-label-hover {
                    position: absolute;
                    left: 0;
                    top: 0;
                    z-index: 3;
                    color: #ffffff;
                    transform: translateY(30px);
                    opacity: 0;
                    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
                }

                .nav-pill {
                    position: relative;
                    overflow: hidden;
                    background: transparent;
                    color: #3b6fbe;
                    padding: 12px 18px;
                    border-radius: 25px;
                    text-decoration: none;
                    font-weight: 600;
                    font-size: 14px;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
                    cursor: pointer;
                    border: 1.5px solid #3b6fbe;
                }
                .nav-pill:hover {
                    background: #3b6fbe;
                    color: white;
                }

                .signin-btn {
                    font-family: 'Instrument Sans', sans-serif;
                    font-size: 14px;
                    font-weight: 500;
                    color: #3b6fbe;
                    background: transparent;
                    border: none;
                    padding: 8px 16px;
                    border-radius: 20px;
                    cursor: pointer;
                    transition: color 0.2s ease, background 0.2s ease;
                    white-space: nowrap;
                }
                .signin-btn:hover {
                    color: #2452a0;
                    background: rgba(59, 111, 190, 0.07);
                }

                .mobile-menu {
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 20px;
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
                }
            `}</style>

            <div className="pill-nav fixed top-4 left-0 right-0 z-50 px-6">
                <nav className="flex items-center justify-between bg-white/95 backdrop-blur-lg border border-white/70 rounded-full p-1 shadow-2xl shadow-black/5 max-w-7xl mx-auto">

                    {/* LEFT — Logo + Nav items */}
                    <div className="flex items-center gap-1">
                        <Link href="/" className="flex items-center gap-2 shrink-0 bg-[#3b6fbe] rounded-full p-2 mr-1">
                            <Image src="/logo.png" alt="DynoWeb Logo" width={24} height={24} className="rounded-full" />
                        </Link>
                        <div className="hidden md:flex items-center gap-1">
                            {navItems.map((item, index) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="nav-pill"
                                    onMouseEnter={() => handleEnter(index)}
                                    onMouseLeave={() => handleLeave(index)}
                                >
                                    <span className="hover-circle" ref={el => { circleRefs.current[index] = el; }} />
                                    <span className="label-stack relative inline-block">
                                        <span className="pill-label">{item.label}</span>
                                        <span className="pill-label-hover">{item.label}</span>
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* CENTER — empty, spacer */}
                    <div className="flex-1" />

                    {/* RIGHT — Sign in only */}
                    <div className="hidden md:flex items-center">
                        <button className="signin-btn">Sign in</button>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden bg-[#3b6fbe] rounded-full p-2 ml-2"
                        aria-label="Toggle menu"
                    >
                        <div className="w-5 h-5 flex flex-col justify-center items-center">
                            <span className={`w-4 h-0.5 bg-white rounded transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : ''}`} />
                            <span className={`w-4 h-0.5 bg-white rounded transition-all duration-300 mt-1 ${isMobileMenuOpen ? '-rotate-45 -translate-y-0.5' : ''}`} />
                        </div>
                    </button>
                </nav>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="mobile-menu md:hidden absolute top-16 left-6 right-6 p-4 mt-2">
                        <div className="flex flex-col gap-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="block py-3 px-4 text-gray-900 hover:bg-gray-100 rounded-xl font-medium transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <button
                                className="text-gray-900 hover:bg-gray-100 px-4 py-3 rounded-xl font-medium transition-colors mt-1 text-left"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Sign in
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}