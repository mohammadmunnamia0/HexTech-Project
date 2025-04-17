import CaseStudySection from "@/app/case-study/CaseStudySection";
import Blog from "@/app/home/sections/Blog";
import ClientReview from "@/app/home/sections/ClientReview";
import Clients from "@/app/home/sections/Clients";
import ContactUs from "@/app/home/sections/ContactUs";
import DevelopmentProcess from "@/app/home/sections/DevelopmentProcess";
import Hero from "@/app/home/sections/Hero";
import Project from "@/app/home/sections/Project";
import Services from "@/app/home/sections/Services";
import TechStack from "@/app/home/sections/TechStack";
import WhyUS from "@/app/sections/WhyUs";
import AOSProvider from "@/lib/providers/AOSProvider";

const HomePage = () => {
  return (
    <AOSProvider>
      <Hero />
      <Services />
      <DevelopmentProcess />
      <Project />
      <WhyUS />
      <TechStack />
      <ClientReview />
      <Blog />
      <CaseStudySection />
      <Clients />
      <ContactUs />
    </AOSProvider>
  );
};
export default HomePage;
