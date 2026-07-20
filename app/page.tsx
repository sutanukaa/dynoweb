import Navbar from "./components/v2/Navbar";
import ScrollReveal from "./components/v2/ScrollReveal";
import SmoothScroll from "./components/v2/SmoothScroll";
import HeroLoop from "./components/v2/HeroLoop";
import Story from "./components/v2/Story";
import Testimonials from "./components/v2/Testimonials";
import Trust from "./components/v2/Trust";
import Close from "./components/v2/Close";
import Footer from "./components/v2/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen w-full" style={{ background: "#fff", overflowX: "clip" }}>
        <ScrollReveal />
        {/* onDark: the loop hero opens on a navy aurora, so the nav renders
            light-on-dark until the glass fill fades in on scroll. */}
        <Navbar onDark />
        <HeroLoop />
        <Story />
        <Testimonials />
        <Trust />
        <Close />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
