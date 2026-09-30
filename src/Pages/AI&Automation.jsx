import ChatbotVsAgentSection from "../Components/AI&Automation/ChatbotVsAgentSection";
import HowWeWorkSection from "../Components/AI&Automation/HowWeWork";
import ManualCostCalculatorSection from "../Components/AI&Automation/MannualCalculationSection";
import ProblemSolutionSection from "../Components/AI&Automation/ProblemSolutionSection";
import { HeroSectionWithMarquee } from "../Components/AI&Automation/TrustedBySection";
import WhyTheyChooseUsSection from "../Components/AI&Automation/WhyTheyCooseUs";
import IndustriesSection from "../Components/AI&ML/IndustriesSection";
import InsightsSection from "../Components/AI&ML/InsightSection";
import TestimonialsSlider from "../Components/AI&ML/TesimonialSlider";
import AIAutomationSection from "../Components/Home/AutomationSolutionSection";
import DiscoveryCallSection from "../Components/Home/CallSection";
import EngagementModelsSection from "../Components/Home/EngagementModelsSection";
import FAQSection from "../Components/Home/FAQsection";
import SuccessStoriesSection from "../Components/Home/SuccessStories";
import TechStacksSection from "../Components/Home/TechStacks";
import WhyChooseUsSection from "../Components/Home/WhyChooseUs";

export default function AIAndAutomation() {
  return (
    <>
      <HeroSectionWithMarquee />
      <ProblemSolutionSection />
      <ChatbotVsAgentSection />
      <HowWeWorkSection />
      <ManualCostCalculatorSection />
      <AIAutomationSection />
      <TechStacksSection />
      <TestimonialsSlider />
      <WhyTheyChooseUsSection />
      <SuccessStoriesSection />
      <EngagementModelsSection />
      <IndustriesSection />
      <DiscoveryCallSection />
      <InsightsSection />
      <FAQSection />
    </>
  );
}
