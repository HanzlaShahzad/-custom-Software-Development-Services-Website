import InsightsSection from "../Components/Home/InsightSection";
import TechStacksSection from "../Components/Home/TechStacks";
import WhyChooseUsSection from "../Components/Home/WhyChooseUs";
import WebAppFAQSection from "../Components/WebApplications/FAQSsection";
import WebAppDevelopmentHeroSection from "../Components/WebApplications/HeroSection";
import WebAppServicesGrid from "../Components/WebApplications/OurServices";
import KeyFeaturesSection from "../Components/WebApplications/StickySoftwareDev.jsx";
import WebAppRoadmapSection from "../Components/WebApplications/WebAppRoasmapSections";

export default function WebApplication() {
  return (
    <>
      <WebAppDevelopmentHeroSection />
      <WebAppServicesGrid />
      <TechStacksSection />
      <InsightsSection />
      <KeyFeaturesSection />
      <WhyChooseUsSection />
      <WebAppRoadmapSection />
      <WebAppFAQSection />
    </>
  );
}
