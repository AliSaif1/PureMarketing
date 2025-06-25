import HeroSection from "../components/home/HeroSection";
import ServicesGrid from "../components/home/ServicesGrid";
import StatsSection from "../components/home/StatsSection";
import Testimonials from "../components/home/Testimonials";
import CaseStudies from "../components/home/CaseStudies";
import ProcessSection from "../components/home/ProcessSection";
import ClientsSection from "../components/home/ClientsSection";
import CTASection from "../components/home/CTASection";

export default function Home() {
  return (
    <main className="space-y-20 pb-20">
      <HeroSection />
      <ServicesGrid />
      <StatsSection />
      <Testimonials />
      <CaseStudies />
      <ProcessSection />
      <ClientsSection />
      <CTASection />
    </main>
  );
}