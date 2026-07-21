import Navbar from "./components/v2/Navbar";
import ScrollReveal from "./components/v2/ScrollReveal";
import SmoothScroll from "./components/v2/SmoothScroll";
import HeroLoop from "./components/v2/HeroLoop";
import Interactive from "./components/v2/interactive";
import AfterInstall from "./components/v2/AfterInstall";
import Testimonials from "./components/v2/Testimonials";
import Pricing from "./components/v2/Pricing";
import Footer from "./components/v2/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen w-full" style={{ background: "#fff", overflowX: "clip" }}>
        <ScrollReveal />
        <Navbar />
        <HeroLoop />
        <Interactive />
        <AfterInstall />
        <Testimonials />
        <Pricing />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
