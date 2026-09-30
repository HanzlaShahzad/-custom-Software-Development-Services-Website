import EcommercePlatformComparisonGrid from "../Components/E-commerce_Platforms/CamparisonPlatform";
import EcommercePlatformsSection from "../Components/E-commerce_Platforms/EcommercePlatformSection";
import EcommerceFaqSection from "../Components/E-commerce_Platforms/FAQsSection";
import EcommercePlatformHeroSection from "../Components/E-commerce_Platforms/HeroSection";
import EcommerceServicesGrid from "../Components/E-commerce_Platforms/OurServices";
import EcommercePricingSection from "../Components/E-commerce_Platforms/PricePlane";
import DiscoveryCallSection from "../Components/Home/CallSection";
import TestimonialsSection from "../Components/Home/ClientTestimonials";
import TechStacksSection from "../Components/Home/TechStacks";

export default function EcommercePlatforms() {
  return (
    <>
      <EcommercePlatformHeroSection />
      <EcommerceServicesGrid />
      <TestimonialsSection />
      <TechStacksSection />
      <EcommercePlatformsSection />
      <EcommercePlatformComparisonGrid />
      <EcommercePricingSection />
      <EcommerceFaqSection />
    </>
  );
}
