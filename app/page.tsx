import HeroSection from "@/components/home/HeroSection";
import SolutionsGrid from "@/components/home/SolutionsGrid";
import TechStackGrid from "@/components/home/TechStackGrid";
import PricingSection from "@/components/home/PricingSection";
import SpeedComparison from "@/components/home/SpeedComparison";
import TerminalDemo from "@/components/home/TerminalDemo";
import FeaturesGrid from "@/components/home/FeaturesGrid";
import FaqAccordion from "@/components/home/FaqAccordion";
import CtaBanner from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <div className="bg-[#070B18] overflow-hidden">
      {/* 1. Hero Section (On Top) */}
      <HeroSection />

      {/* 2. Solutions Grid ("Todas las soluciones que necesitas para tu éxito en línea") */}
      <SolutionsGrid />

      {/* 3. Global Technology Partners */}
      <TechStackGrid />

      {/* 4. WordPress Hosting Pricing */}
      <PricingSection />

      {/* 5. Speed Benchmarks */}
      <SpeedComparison />

      {/* 6. Terminal & Infrastructure Playground */}
      <TerminalDemo />

      {/* 7. Bento Features */}
      <FeaturesGrid />

      {/* 8. FAQ Accordion */}
      <FaqAccordion />

      {/* 9. Bottom Call to Action */}
      <CtaBanner />
    </div>
  );
}
