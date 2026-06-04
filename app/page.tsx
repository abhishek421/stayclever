import Hero from "@/components/sections/Hero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import IndustriesGrid from "@/components/sections/IndustriesGrid";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <IndustriesGrid />
      <Process />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
