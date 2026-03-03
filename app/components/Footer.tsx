"use client";
import React, { useState } from "react";

export default function Footer() {
  const navItems = [
    { label: "About DynoWeb", href: "#about" },
    { label: "Shopify Extensions", href: "#extensions" },
    { label: "Privacy", href: "#privacy" },
    { label: "Terms", href: "#terms" },
  ];

  const word = "DynoWeb";
  const letters = word.split("");
  const lastTwo = new Set([word.length - 2, word.length - 1]);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      {/* Main hero area */}
      <div
        className="flex-1 flex items-center"
        style={{ position: "relative" }}
      >
        {/* Radial blue glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            height: "80%",
            background:
              "radial-gradient(ellipse at center, rgba(66, 133, 244, 0.15) 0%, rgba(66, 133, 244, 0.05) 50%, transparent 75%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        <h1
          style={{
            fontFamily: "'Google Sans', 'Product Sans', sans-serif",
            fontSize: "clamp(80px, 15vw, 220px)",
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: "-0.02em",
            color: "#0d0d0d",
            padding: "80px 48px 0",
            margin: 0,
            display: "flex",
            alignItems: "flex-end",
            position: "relative",
            zIndex: 1,
            cursor: "default",
            userSelect: "none",
          }}
        >
          {letters.map((char, i) => {
            const isLastTwo = lastTwo.has(i);
            const isHovered = hoveredIndex === i;
            // Rise amount: hovered letter rises most, last two always risen by default
            let translateY = "0em";
            if (isHovered) {
              translateY = "-0.22em";
            } else if (isLastTwo) {
              translateY = "-0.18em";
            }

            return (
              <span
                key={i}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  display: "inline-block",
                  transform: `translateY(${translateY})`,
                  transition:
                    "transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
              >
                {char}
              </span>
            );
          })}
        </h1>
      </div>

      {/* Footer bar */}
      <footer className="w-full bg-white py-6 px-12">
        <div className="flex items-center justify-between">
          <div
            style={{
              fontFamily: "'Google Sans', 'Product Sans', Arial, sans-serif",
              fontSize: "22px",
              fontWeight: 400,
              color: "#5f6368",
            }}
          >
            DynoWeb
          </div>

          <nav className="flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                style={{
                  fontFamily: "Arial, sans-serif",
                  fontSize: "14px",
                  color: "#5f6368",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#202124")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#5f6368")}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
