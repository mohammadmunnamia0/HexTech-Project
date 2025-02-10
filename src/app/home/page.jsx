
import Hero from './sections/Hero';
import ContactPage from "../contact/page";
import DevelopmentProcess from "./sections/DevelopmentProcess";
import HireUs from "../HireUS/page";
import Services from './sections/Services';
import ClientReview from "./sections/ClientReview";
import Blog from './sections/Blog';
import Project from './sections/Project';
import TechStack from './sections/TechStack';

const HomePage = () => {
    return (
        <>
            <Hero />
            <Services />
            <DevelopmentProcess />
            <Project />
            <TechStack />
            <HireUs />
            <ClientReview />
            <Blog />
            <ContactPage />
        </>
    )
}

export default HomePage