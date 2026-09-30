import ExecutionRoadmapSection from "../Components/AI&ML/ExecutionRoadMapSection.jsx";
import AIServicesShowcase from "../Components/AI&ML/GetServiceLink.jsx";
import ServiceHeroSection from "../Components/AI&ML/HeroSection.jsx";
import IndustriesSection from "../Components/AI&ML/IndustriesSection.jsx";
import InsightsSection from "../Components/AI&ML/InsightSection.jsx";
import AIMLTestimonialsSlider from "../Components/AI&ML/TesimonialSlider.jsx";
import EngagementModelsSection from "../Components/Home/EngagementModelsSection.jsx";
import FAQSection from "../Components/Home/FAQsection.jsx";
import SuccessStoriesSection from "../Components/Home/SuccessStories.jsx";
import TechStacksSection from "../Components/Home/TechStacks.jsx";
import WhyChooseUsSection from "../Components/Home/WhyChooseUs.jsx";

export default function AIAndML() {
  return (
    <>
      <ServiceHeroSection />
      <AIServicesShowcase />
      <WhyChooseUsSection />
      <AIMLTestimonialsSlider />
      <SuccessStoriesSection />
      <TechStacksSection />
      <EngagementModelsSection />
      <IndustriesSection />
      <ExecutionRoadmapSection />
      <InsightsSection />
      <FAQSection />
    </>
  );
}
