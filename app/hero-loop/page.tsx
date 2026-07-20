import type { Metadata } from "next";

import HeroLoop from "../components/v2/HeroLoop";
import Navbar from "../components/v2/Navbar";

// Preview-only route, rendered with the same shared Navbar the homepage uses.
export const metadata: Metadata = {
  title: "Hero — loop rail preview",
  robots: { index: false, follow: false },
};

export default function HeroLoopPreview() {
  return (
    <main className="min-h-screen w-full bg-white">
      <Navbar onDark />
      <HeroLoop />
    </main>
  );
}
