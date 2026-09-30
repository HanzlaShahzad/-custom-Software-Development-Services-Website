import IndustriesSection from "../Components/AI&ML/IndustriesSection";
import InsightsSection from "../Components/AI&ML/InsightSection";
import TestimonialsSlider from "../Components/AI&ML/TesimonialSlider";
import AIModelsSection from "../Components/GenerativeAI/AIModaels";
import AIAutomationSection from "../Components/GenerativeAI/AutomationSolutionsGen";
import GenAiFaqSection from "../Components/GenerativeAI/FAQSsection";
import GenAiRoadmapSection from "../Components/GenerativeAI/GenAIDevRoadmap";
import GenerativeAiPreferredSection from "../Components/GenerativeAI/GenAiPreferredSection";
import GenAiLeadershipSection from "../Components/GenerativeAI/GenIndustriesSection";
import GenerativeAiHeroSection from "../Components/GenerativeAI/HeroSection";
import SuccessStoriesSection from "../Components/Home/SuccessStories";
import TechStacksSection from "../Components/Home/TechStacks";

export default function GenerativeAI() {
  return (
    <>
      <GenerativeAiHeroSection />
      <AIAutomationSection />
      <AIModelsSection />
      <GenerativeAiPreferredSection />
      <TestimonialsSlider />
      <SuccessStoriesSection />
      <TechStacksSection />
      <GenAiLeadershipSection />
      <GenAiRoadmapSection />
      <InsightsSection />
      <GenAiFaqSection />
    </>
  );
}
