import type { Metadata } from "next";

import Hero from "../components/Hero";

// Preview-only route for the original v1 particles/confetti hero.
export const metadata: Metadata = {
  title: "Hero — v1 preview",
  robots: { index: false, follow: false },
};

export default function HeroV1Preview() {
  return (
    <main className="min-h-screen w-full">
      <Hero />
    </main>
  );
}
