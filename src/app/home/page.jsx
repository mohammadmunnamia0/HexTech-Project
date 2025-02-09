import Hero from "@/app/home/sections/Hero";
import ContactPage from "../contact/page";
import DevelopmentProcess from "./sections/DevelopmentProcess";
import HireUs from "../HireUS/page";
import Services from './sections/Services';
import ClientReview from "./sections/ClientReview";

const HomePage = () => {
    return (
        <>
            <Hero />
            <Services />
            <DevelopmentProcess />
            <HireUs />
            <ClientReview />
            <ContactPage />
        </>
    )
}

export default HomePage