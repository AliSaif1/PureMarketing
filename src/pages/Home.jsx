import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

import HeroSection from "../components/home/HeroSection";
import ServicesGrid from "../components/home/ServicesGrid";
import Testimonials from "../components/home/Testimonials";
import CaseStudies from "../components/home/CaseStudies";
import ProcessSection from "../components/home/ProcessSection";
import ClientsSection from "../components/home/ClientsSection";
import CTASection from "../components/home/CTASection";

export default function Home() {
  const ctaRef = useRef(null);
  const location = useLocation();

  const scrollToCTA = () => {
    ctaRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (location.hash === "#cta") {
      // Delay to ensure section is rendered
      setTimeout(() => scrollToCTA(), 100);
    }
  }, [location]);

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
