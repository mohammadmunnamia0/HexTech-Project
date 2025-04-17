import CaseStudySection from "@/app/case-study/CaseStudySection";
import Blog from "@/app/sections/Blog";
import ClientReview from "@/app/sections/ClientReview";
import ContactUs from "@/app/sections/ContactUs";
import DevelopmentProcess from "@/app/sections/DevelopmentProcess";
import Hero from "@/app/sections/Hero";
import OurClients from "@/app/sections/OurClients";
import Project from "@/app/sections/Project";
import Services from "@/app/sections/Services";
import TechStack from "@/app/sections/TechStack";
import WhyUS from "@/app/sections/WhyUs";
import { generateDynamicMetadataHandler } from "@/helpers/generateDynamicMetadataHandler";
import AOSProvider from "@/lib/providers/AOSProvider";

// Dynamic metadata generation function
export async function generateMetadata() {
  const page_slug = "/";
  const url = "http://localhost:3000/";
  const redirect_url = `${url}/${page_slug}`;

  const result = await generateDynamicMetadataHandler({
    redirect_url,
    title: "Home",
  });

  return result;
}

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
      <OurClients />
      <ContactUs />
    </AOSProvider>
  );
};
export default HomePage;
