import ClientSection from "./other/ClientSection";
import CtaSection from "./other/CtaSection";
import HeroSection from "./other/HeroSection";
import PricingSection from "./other/PricingSection";

export default function LandingPage() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <HeroSection />
      <ClientSection />
      <CtaSection />
      <PricingSection />
    </main>
  );
}
