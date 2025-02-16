import Hero from './sections/Hero';
import DevelopmentProcess from "./sections/DevelopmentProcess";
import Services from './sections/Services';
import ClientReview from "./sections/ClientReview";
import Blog from './sections/Blog';
import Project from './sections/Project';
import TechStack from './sections/TechStack';
import ContactPage from './sections/ContactUs';

const HomePage = () => {
    return (
        <>
            <Hero />
            <Services />
            <DevelopmentProcess />
            <Project />
            <TechStack />
            <ClientReview />
            <Blog />
            <ContactPage />
        </>
    );
}

export default HomePage;