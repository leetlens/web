// Components
import LandingGradientBg from "./landing-gradient-bg";
import LandingContent from "./landing-content";
import LandingSocialLinks from "./landing-social-links";
import { DotPatternBackground } from "./landing-dotgrids";

export default function LandingHero() {
  return (
    <div className="relative min-h-[calc(100vh-6rem)] w-full overflow-hidden bg-gradient-to-br from-background via-background/95 to-background">
      {/* Background layers */}
      <div className="absolute inset-0">
        <DotPatternBackground />
        <LandingGradientBg />
      </div>

      {/* Main content */}
      <LandingContent />

      {/* Social links */}
      <LandingSocialLinks />
    </div>
  );
}
