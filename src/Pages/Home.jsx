import AIAutomationSection from "../Components/Home/AutomationSolutionSection";
import DiscoveryCallSection from "../Components/Home/CallSection";
import TestimonialsSection from "../Components/Home/ClientTestimonials";
import EngagementModelsSection from "../Components/Home/EngagementModelsSection";
import FAQSection from "../Components/Home/FAQsection";
import Footer from "../Components/Home/Footer";
import Hero from "../Components/Home/Hero";
import IndustriesWeServe from "../Components/Home/IndustriesWeServeSection";
import InsightsSection from "../Components/Home/InsightSection";
import Navbar from "../Components/Home/Navbar";
import PartnerData from "../Components/Home/PartnerData";
import SuccessStoriesSection from "../Components/Home/SuccessStories";
import TechStacksSection from "../Components/Home/TechStacks";
import WhyChooseUsSection from "../Components/Home/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <AIAutomationSection />
      <TechStacksSection />
      <SuccessStoriesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <EngagementModelsSection />
      <IndustriesWeServe />
      <PartnerData />
      <DiscoveryCallSection />
      <InsightsSection />
      <FAQSection />
    </>
  );
}
