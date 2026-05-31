import Hero from "@/components/sections/Hero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import AboutBlock from "@/components/sections/AboutBlock";
import IndustriesGrid from "@/components/sections/IndustriesGrid";
import CaseStudiesPreview from "@/components/sections/CaseStudiesPreview";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import InsightsPreview from "@/components/sections/InsightsPreview";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <AboutBlock />
      <IndustriesGrid />
      <CaseStudiesPreview />
      <Process />
      <Testimonials />
      <InsightsPreview />
      <FinalCTA />
    </>
  );
}
