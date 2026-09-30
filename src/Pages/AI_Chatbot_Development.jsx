import HowWeWorkSection from "../Components/AI&Automation/HowWeWork";
import InsightsSection from "../Components/AI&ML/InsightSection";
import AddChatbotSection from "../Components/AIChatbotDevelopment/AddChatbotSection";
import AIChatbotBenefitSections from "../Components/AIChatbotDevelopment/AIChatbotBenefitSection";
import CompleteAIChatbotAllSections from "../Components/AIChatbotDevelopment/AIChatbotBenefitSection";
import AIChatbotPreferredSection from "../Components/AIChatbotDevelopment/AIChatbotPreferredSection";
import AIChatbotTestimonialsSlider from "../Components/AIChatbotDevelopment/AIChatbotTestimonial";
import FAQSection from "../Components/AIChatbotDevelopment/ChatbotFAQsSection";
import AIModelsSection from "../Components/AIChatbotDevelopment/ChatbotModelSection";
import AIChatbotServicesSection from "../Components/AIChatbotDevelopment/ChatbotSolutionsSection";
import EngagementModelsSection from "../Components/AIChatbotDevelopment/EngagementModels";
import ChatbotAiLeadershipSection from "../Components/AIChatbotDevelopment/IndustryCard";
import AiChatbotDevelopmentSection from "../Components/AIChatbotDevelopment/IndustryCard";
import IntegrateEverywhereSection from "../Components/AIChatbotDevelopment/IntegrateEveryWaherSection";
import ModelAgnosticSection from "../Components/AIChatbotDevelopment/ModelSection";
import AiChatbotSecuritySection from "../Components/AIChatbotDevelopment/SecuritySection";
import SuccessStoriesSection from "../Components/AIChatbotDevelopment/SuccessStories";
import TechStacksSection from "../Components/Home/TechStacks";

export default function AIChatbotDevelpment() {
  return (
    <>
      <AIModelsSection />
      <AIChatbotServicesSection />
      <AIChatbotTestimonialsSlider />
      <AIChatbotPreferredSection />
      <SuccessStoriesSection />
      <IntegrateEverywhereSection />
      <EngagementModelsSection />
      <AddChatbotSection />
      <AIChatbotBenefitSections />
      <AiChatbotDevelopmentSection />
      <AiChatbotSecuritySection />
      <ModelAgnosticSection />
      <TechStacksSection />
      <HowWeWorkSection />
      <InsightsSection />
      <FAQSection />
    </>
  );
}
