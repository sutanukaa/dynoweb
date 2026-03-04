import FUIHeroSectionWithLogoClouds from "./components/Hero";
import PillNav from "./components/PillNav";
import AIShowcaseSection from "./components/AIShowcase";
import FeaturesSection from "./components/Features";
import TestimonialsSection from "./components/Testimonials";
import InstallationSection from "./components/Installation";
import Footer from "./components/Footer";
import { RibbonDividerTop, RibbonDividerBottom } from "./components/SectionDividers";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <div className="font-poppins min-h-screen w-full overflow-x-hidden">
      <PillNav />

      {/* Hero — no reveal, it's above the fold */}
      <FUIHeroSectionWithLogoClouds />

      <ScrollReveal offset={30} duration={0.5} blur={0}>
        <RibbonDividerTop />
      </ScrollReveal>

      <ScrollReveal offset={70} duration={0.8} delay={0.05} blur={8} margin="-120px">
        <AIShowcaseSection />
      </ScrollReveal>

      <ScrollReveal offset={30} duration={0.5} blur={0}>
        <RibbonDividerBottom />
      </ScrollReveal>

      <ScrollReveal offset={80} duration={0.85} delay={0.05} blur={8}>
        <FeaturesSection />
      </ScrollReveal>

      <ScrollReveal offset={70} duration={0.8} delay={0.05} blur={8}>
        <TestimonialsSection />
      </ScrollReveal>

      <ScrollReveal offset={80} duration={0.85} delay={0.05} blur={8}>
        <InstallationSection />
      </ScrollReveal>

      <ScrollReveal offset={50} duration={0.7} blur={4}>
        <Footer />
      </ScrollReveal>
    </div>
  );
}
