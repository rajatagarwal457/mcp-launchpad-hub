import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { AudienceSection } from "@/components/AudienceSection";
import { HighlightsSection } from "@/components/HighlightsSection";
import { VisionSection } from "@/components/VisionSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <AudienceSection />
      <HighlightsSection />
      <VisionSection />
      <ContactSection />
    </div>
  );
};

export default Index;
