import FUIHeroSectionWithLogoClouds from "./components/Hero";
import PillNav from "./components/PillNav";
import AIShowcaseSection from "./components/AIShowcase";
import FeaturesSection from "./components/Features";
import TestimonialsSection from "./components/Testimonials";
import InstallationSection from "./components/Installation";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="font-poppins min-h-screen w-full overflow-x-hidden">
      <PillNav />
      <FUIHeroSectionWithLogoClouds />
      <AIShowcaseSection />
      <FeaturesSection />
      <TestimonialsSection />
      <InstallationSection />
      <Footer />
    </div>
  );
}
