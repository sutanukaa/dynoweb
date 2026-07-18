import Navbar from "./components/v2/Navbar";
import Hero from "./components/v2/Hero";
import ProofBand from "./components/v2/ProofBand";
import Gap from "./components/v2/Gap";
import Features from "./components/v2/Features";

export default function Home() {
  return (
    <main className="min-h-screen w-full" style={{ background: "#fff", overflowX: "clip" }}>
      <Navbar />
      <Hero />
      <ProofBand />
      <Gap />
      <Features />
    </main>
  );
}
