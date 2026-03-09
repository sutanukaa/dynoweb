"use client";

import { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import PillNav from "../components/PillNav";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const sketchRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = sketchRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("sketch-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setError(null);

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      firstName: data.get("firstName")?.toString().trim() ?? "",
      lastName: data.get("lastName")?.toString().trim() ?? "",
      email: data.get("email")?.toString().trim() ?? "",
      phone: data.get("phone")?.toString().trim() ?? "",
      message: data.get("message")?.toString().trim() ?? "",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result?.error || "Something went wrong");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Unknown error");
    }
  };

  return (
    <>
      <PillNav />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Karla:wght@400;500;600;700&display=swap');

        .contact-root {
          background: #0a0a0a;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(3rem, 6vw, 6rem) clamp(1.5rem, 5vw, 4rem);
          position: relative;
          overflow: hidden;
        }

        /* subtle grid lines like the hero */
        .contact-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 120px 120px;
          pointer-events: none;
        }

        /* radial glow top-left */
        .contact-root::after {
          content: '';
          position: absolute;
          top: -10%;
          left: -5%;
          width: 55%;
          height: 70%;
          background: radial-gradient(ellipse at 30% 30%, rgba(255,255,255,0.04), transparent 70%);
          pointer-events: none;
        }

        .contact-inner {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(3rem, 6vw, 7rem);
          max-width: 1000px;
          width: 100%;
        }

        @media (max-width: 700px) {
          .contact-inner { grid-template-columns: 1fr; }
        }

        /* ── LEFT SIDE ── */
        .contact-left {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          padding-top: 0.25rem;
          height: 100%;
        }

        @keyframes highlighterSweep {
          from { clip-path: inset(0 100% 0 0); }
          to   { clip-path: inset(0 0% 0 0); }
        }

        @keyframes highlighterSweep {
          from { clip-path: inset(0 100% 0 0); }
          to   { clip-path: inset(0 0% 0 0); }
        }

        .contact-heading {
          position: relative;
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(2rem, 4vw, 3.2rem);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.025em;
          color: #ffffff;
          margin: 0 0 1.25rem 0;
          text-shadow: 0 0 40px rgba(255,255,255,0.1);
        }

        .contact-heading .sketch-highlight-svg { pointer-events:none; clip-path: inset(0 100% 0 0); }
        .contact-heading.sketch-visible .sketch-highlight-svg {
          animation: highlighterSweep 0.5s cubic-bezier(0.25,0.1,0.25,1) 0.15s forwards;
        }

        .contact-heading .sketch-accent-text {
          position: relative; z-index: 1;
          display: inline-block; margin-right: 0.25em;
          color: #ffffff !important;
        }

        .contact-desc {
          font-family: 'Karla', sans-serif;
          font-size: clamp(0.9rem, 1.1vw, 1.05rem);
          line-height: 1.7;
          color: rgba(255,255,255,0.4);
          margin: 0 0 2.5rem 0;
          max-width: 30ch;
        }

        .contact-chips {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 2.5rem;
        }

        .contact-chip {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-family: 'Karla', sans-serif;
          font-size: 0.82rem;
          font-weight: 600;
          color: rgba(255,255,255,0.38);
          letter-spacing: 0.01em;
        }

        .contact-chip-dot {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: rgba(255,255,255,0.18);
          flex-shrink: 0;
        }

        .contact-quote {
          margin-top: auto;
          padding-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.06);
        }

        .contact-quote-text {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(0.82rem, 0.95vw, 0.95rem);
          font-weight: 600;
          font-style: italic;
          color: rgba(255,255,255,0.16);
          line-height: 1.65;
          letter-spacing: -0.01em;
        }

        /* ── RIGHT SIDE ── */
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.85rem;
        }

        .field-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .field-label {
          font-family: 'Karla', sans-serif;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: rgba(255,255,255,0.45);
          text-transform: uppercase;
        }

        .field-input,
        .field-textarea {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          padding: 10px 13px;
          font-family: 'Karla', sans-serif;
          font-size: 0.88rem;
          color: rgba(255,255,255,0.85);
          outline: none;
          transition: border-color 0.2s, background 0.2s;
          width: 100%;
          box-sizing: border-box;
        }

        .field-input::placeholder,
        .field-textarea::placeholder {
          color: rgba(255,255,255,0.15);
        }

        .field-input:focus,
        .field-textarea:focus {
          border-color: rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.06);
        }

        .field-textarea {
          resize: vertical;
          min-height: 110px;
        }

        .submit-row {
          display: flex;
          justify-content: flex-end;
          padding-top: 0.25rem;
        }

        .submit-btn {
          font-family: 'Karla', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          color: #0a0a0a;
          background: #ffffff;
          border: none;
          border-radius: 9999px;
          padding: 10px 24px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: background 0.2s, transform 0.15s;
        }

        .submit-btn:hover {
          background: rgba(255,255,255,0.88);
          transform: translateY(-1px);
        }

        .submit-btn svg {
          transition: transform 0.15s ease-out;
        }
        .submit-btn:hover svg {
          transform: translateX(3px);
        }

        /* divider between left and right */
        .contact-divider {
          position: absolute;
          top: 5%;
          bottom: 5%;
          left: 50%;
          width: 1px;
          background: rgba(255,255,255,0.07);
          transform: translateX(-50%);
          pointer-events: none;
        }

        @media (max-width: 700px) {
          .contact-divider { display: none; }
        }
      `}</style>

      <section className="contact-root">
        <div className="contact-inner">

          {/* vertical divider */}
          <div className="contact-divider" />

          {/* ── LEFT ── */}
          <div className="contact-left">
            <h2 className="contact-heading" ref={sketchRef}>
              Get in
              <span style={{ position: "relative", display: "inline-block", whiteSpace: "nowrap", marginLeft: "0.35em" }}>
                <svg className="sketch-highlight-svg" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none" aria-hidden="true"
                  style={{ position: "absolute", top: 0, left: "4%", width: "92%", height: "100%", overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
                  <defs>
                    <linearGradient id="tg-contact" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%"   stopColor="white" stopOpacity="0"/>
                      <stop offset="10%"  stopColor="white" stopOpacity="1"/>
                      <stop offset="90%"  stopColor="white" stopOpacity="1"/>
                      <stop offset="100%" stopColor="white" stopOpacity="0"/>
                    </linearGradient>
                    <mask id="tm-contact"><rect x="0" y="0" width="100" height="100" fill="url(#tg-contact)"/></mask>
                  </defs>
                  <g mask="url(#tm-contact)">
                    <path d="M2 52 C20 48,42 46,62 47 C78 48,90 50,98 49" stroke="#1a3a7a" strokeWidth="52" strokeLinecap="butt" opacity="0.7" fill="none"/>
                    <path d="M2 51 C22 47,46 45,66 46 C80 47,91 49,98 48" stroke="#3a7adc" strokeWidth="38" strokeLinecap="butt" opacity="0.45" fill="none"/>
                    <path d="M4 74 C24 71,50 70,70 71 C84 72,93 73,98 72" stroke="#5aaeff" strokeWidth="18" strokeLinecap="butt" opacity="0.3" fill="none"/>
                    <path d="M4 34 C24 31,48 30,68 31 C82 32,92 33,98 32" stroke="#7ec8ff" strokeWidth="2.5" strokeLinecap="butt" opacity="0.7" fill="none"/>
                    <path d="M2 51 C22 47,46 45,66 46 C80 47,91 49,98 48" stroke="#9dd8ff" strokeWidth="1.5" strokeLinecap="butt" opacity="0.5" fill="none"/>
                  </g>
                </svg>
                <span className="sketch-accent-text">touch</span>
              </span>
            </h2>
            <p className="contact-desc">
              Have a question or want to learn more about DynoWeb? We'd love to hear from you.
            </p>

            <div className="contact-chips">
              {[
                "We typically respond within a few hours",
                "No sales pitch — just real answers",
                "Available for demos & early access",
              ].map((item, i) => (
                <div key={i} className="contact-chip">
                  <span className="contact-chip-dot" />
                  {item}
                </div>
              ))}
            </div>

            <div className="contact-quote">
              <p className="contact-quote-text">
                "Zero code. Real insights.<br />Measurable results."
              </p>
            </div>
          </div>

          {/* ── RIGHT: FORM ── */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="field-group">
                <label className="field-label">First name</label>
                <input name="firstName" className="field-input" type="text" placeholder="Jane" required />
              </div>
              <div className="field-group">
                <label className="field-label">Last name</label>
                <input name="lastName" className="field-input" type="text" placeholder="Smith" required />
              </div>
            </div>

            <div className="field-group">
              <label className="field-label">Email</label>
              <input name="email" className="field-input" type="email" placeholder="jane@yourstore.com" required />
            </div>

            <div className="field-group">
              <label className="field-label">Phone number</label>
              <input name="phone" className="field-input" type="tel" placeholder="+1 (555) 000-0000" />
            </div>

            <div className="field-group">
              <label className="field-label">Message</label>
              <textarea name="message" className="field-textarea" placeholder="Tell us what's on your mind…" required />
            </div>

            <div className="submit-row">
              <button className="submit-btn" type="submit" disabled={status === "loading"}>
                {status === "loading" ? "Sending…" : "Send message"}
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>

            {status === "success" && (
              <div style={{ marginTop: 16, color: "rgba(110,216,126,1)", fontWeight: 600 }}>
                Message sent! We’ll follow up shortly.
              </div>
            )}

            {status === "error" && (
              <div style={{ marginTop: 16, color: "rgba(255,138,138,1)", fontWeight: 600 }}>
                {error ?? "Something went wrong. Please try again."}
              </div>
            )}
          </form>

        </div>
      </section>
      <Footer />
    </>
  );
}