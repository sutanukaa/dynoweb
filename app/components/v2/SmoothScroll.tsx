"use client";

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

// Lenis inertial smooth scroll, scoped to whatever it wraps.
// anchors offset clears the fixed 64px navbar on #hash jumps.
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ anchors: { offset: -80 } }}>
      {children}
    </ReactLenis>
  );
}
