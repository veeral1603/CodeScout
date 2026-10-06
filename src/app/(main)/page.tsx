import CompaniesSection from "@/components/pages/home/companies/companies-section";
import HeroSection from "@/components/pages/home/hero/hero-section";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <CompaniesSection />
    </div>
  );
}
