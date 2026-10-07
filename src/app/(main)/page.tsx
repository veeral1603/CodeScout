import ContributeSection from "@/components/pages/home/contribue/contribute-section";
import HeroSection from "@/components/pages/home/hero/hero-section";
import TopicsSection from "@/components/pages/home/topics/topics-section";
import FeaturedCompaniesSection from "@/components/pages/home/featured-companies/featured-companies-section";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturedCompaniesSection />
      <TopicsSection />
      <ContributeSection />
    </div>
  );
}
