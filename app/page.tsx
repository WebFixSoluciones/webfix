import HeroSection from "@/components/home/HeroSection";
import TechStackGrid from "@/components/home/TechStackGrid";
import PricingSection from "@/components/home/PricingSection";
import TerminalDemo from "@/components/home/TerminalDemo";
import SpeedComparison from "@/components/home/SpeedComparison";
import FeaturesGrid from "@/components/home/FeaturesGrid";
import FaqAccordion from "@/components/home/FaqAccordion";
import CtaBanner from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TechStackGrid />
      <PricingSection />
      <TerminalDemo />
      <SpeedComparison />
      <FeaturesGrid />
      <FaqAccordion />
      <CtaBanner />
    </>
  );
}
