import InsightsSection from "../Components/AI&ML/InsightSection";
import TestimonialsSlider from "../Components/AI&ML/TesimonialSlider";
import ComputerVisionServicesSection from "../Components/ComputerVision/ComputerVisionAutomationSolution";
import ComputerVisionPreferredSection from "../Components/ComputerVision/ComputerVisionPreferredSection";
import FAQSection from "../Components/ComputerVision/FAQScomputerVision";
import ComputerVisionHeroSectionCompact from "../Components/ComputerVision/HeroSection";
import ComputerVisionIndustries from "../Components/ComputerVision/IndustriesWeServeComputerVision";
import EngagementModelsSection from "../Components/Home/EngagementModelsSection";
import SuccessStoriesSection from "../Components/Home/SuccessStories";
import TechStacksSection from "../Components/Home/TechStacks";

export default function ComputerVision() {
  return (
    <>
      <ComputerVisionHeroSectionCompact />
      <ComputerVisionServicesSection />
      <TestimonialsSlider />
      <ComputerVisionPreferredSection />
      <SuccessStoriesSection />
      <TechStacksSection />
      <EngagementModelsSection />
      <ComputerVisionIndustries />
      <InsightsSection />
      <FAQSection />
    </>
  );
}
