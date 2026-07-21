import type { Metadata } from "next";

import Hero from "../components/v2/Hero";
import Navbar from "../components/v2/Navbar";

// Preview-only route for the v2 shader hero (not wired into the homepage).
export const metadata: Metadata = {
  title: "Hero — v2 shader preview",
  robots: { index: false, follow: false },
};

export default function HeroV2Preview() {
  return (
    <main className="min-h-screen w-full bg-white">
      <Navbar />
      <Hero />
    </main>
  );
}
