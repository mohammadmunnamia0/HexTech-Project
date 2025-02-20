import WhyUs from "../HireUS/WhyUs/WhyUs";
import Blog from "./sections/Blog";
import ClientReview from "./sections/ClientReview";
import Clients from "./sections/Clients";
import ContactPage from "./sections/ContactUs";
import DevelopmentProcess from "./sections/DevelopmentProcess";
import Hero from "./sections/Hero";
import Project from "./sections/Project";
import Services from "./sections/Services";
import Stats from "./sections/stats";
import TechStack from "./sections/TechStack";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Stats></Stats>
      <Services />
      <DevelopmentProcess />
      <Project />
      <WhyUs></WhyUs>
      <TechStack />
      <Clients />
      <ClientReview />
      <Blog />
      <ContactPage />
    </>
  );
};

export default HomePage;
