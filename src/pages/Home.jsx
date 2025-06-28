import { useRef } from "react";
import HeroSection from "../components/home/HeroSection";
import ServicesGrid from "../components/home/ServicesGrid";
import Testimonials from "../components/home/Testimonials";
import CaseStudies from "../components/home/CaseStudies";
import ProcessSection from "../components/home/ProcessSection";
import ClientsSection from "../components/home/ClientsSection";
import CTASection from "../components/home/CTASection";

export default function Home() {
  const ctaRef = useRef(null);

  const scrollToCTA = () => {
    ctaRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <HeroSection onConsultClick={scrollToCTA} />
      <ServicesGrid />
      <Testimonials />
      <CaseStudies />
      <ProcessSection />
      <ClientsSection />
      <CTASection ref={ctaRef} />
    </main>
  );
}