import Hero from './sections/Hero';
import DevelopmentProcess from "./sections/DevelopmentProcess";
import Services from './sections/Services';
import ClientReview from "./sections/ClientReview";
import Blog from './sections/Blog';
import Project from './sections/Project';
import TechStack from './sections/TechStack';
import ContactPage from './sections/ContactUs';
import HireUs from './../HireUS/section/HireUs';
import Stats from './sections/stats';
import WhyUs from '../HireUS/WhyUs/WhyUs';
import Clients from './sections/Clients';

const HomePage = () => {
    return (
        <>
            <Hero />
            <Stats/>
            <Services />
            <DevelopmentProcess />
            {/* <Project /> */}
            <WhyUs></WhyUs>
            <TechStack />
            {/* <HireUs /> */}
            <Clients/>
            <ClientReview />
            <Blog />
            <ContactPage />
        </>
    );
}

export default HomePage;