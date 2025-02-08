import Hero from "@/app/home/sections/Hero"
import OurWorks from "./sections/OurWorks"
import ContactPage from "../contact/page"
import DevelopmentProcess from "./sections/DevelopmentProcess"
import ClientReview from './sections/ClientReview';

const HomePage = () => {
    return (
        <>
            <Hero />
            <OurWorks />
            <DevelopmentProcess/>
            <ClientReview/>
            <ContactPage />
        </>
    )
}

export default HomePage