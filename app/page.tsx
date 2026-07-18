import Navbar from "./components/v2/Navbar";
import ScrollReveal from "./components/v2/ScrollReveal";
import SmoothScroll from "./components/v2/SmoothScroll";
import Hero from "./components/v2/Hero";
import Story from "./components/v2/Story";
import ProofBand from "./components/v2/ProofBand";
import Trust from "./components/v2/Trust";
import Close from "./components/v2/Close";
import Footer from "./components/v2/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen w-full" style={{ background: "#fff", overflowX: "clip" }}>
        <ScrollReveal />
        <Navbar />
        <Hero />
        <Story />
        <ProofBand />
        <Trust />
        <Close />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
