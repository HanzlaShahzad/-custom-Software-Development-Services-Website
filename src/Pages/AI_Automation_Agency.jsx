import ChatbotVsAgentSection from "../Components/AI&Automation/ChatbotVsAgentSection";
import HowWeWorkSection from "../Components/AI&Automation/HowWeWork";
import ManualCostCalculatorSection from "../Components/AI&Automation/MannualCalculationSection";
import ProblemSolutionSection from "../Components/AI&Automation/ProblemSolutionSection";
import { HeroSectionWithMarquee } from "../Components/AI&Automation/TrustedBySection";
import IndustriesSection from "../Components/AI&ML/IndustriesSection";
import AIAutomations from "../Components/AI-Automation-Agency/AIAutomation";
import AiAutomationPricingSection from "../Components/AI-Automation-Agency/AIAutomationOffers";
import ConsultationBannerSection from "../Components/AI-Automation-Agency/ConsultationBannerSection";
import RoiCalculatorSection from "../Components/AI-Automation-Agency/ROlCalculator";
import { StickyHeroProblemSection } from "../Components/AI-Automation-Agency/StickyHeroSection";
import WorkflowBridgeSection from "../Components/AI-Automation-Agency/WorkFlowBridgeSection";
import DiscoveryCallSection from "../Components/Home/CallSection";
import TestimonialsSection from "../Components/Home/ClientTestimonials";
import FAQSection from "../Components/Home/FAQsection";
import InsightsSection from "../Components/Home/InsightSection";
import SuccessStoriesSection from "../Components/Home/SuccessStories";

export default function AIAutomationAgency() {
  return (
    <>
      <HeroSectionWithMarquee />
      <ProblemSolutionSection />
      <ChatbotVsAgentSection />
      <StickyHeroProblemSection />
      <HowWeWorkSection />
      <AIAutomations />
      <TestimonialsSection />
      <ConsultationBannerSection />
      <RoiCalculatorSection />
      <SuccessStoriesSection />
      <AiAutomationPricingSection />
      <WorkflowBridgeSection />
      <DiscoveryCallSection />
      <IndustriesSection />
      <InsightsSection />
      <FAQSection />
    </>
  );
}
