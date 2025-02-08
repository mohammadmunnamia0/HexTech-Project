import Hero from "@/app/home/sections/Hero"
import OurWorks from "./sections/OurWorks"
import ContactPage from "../contact/page"
import DevelopmentProcess from "./sections/DevelopmentProcess"
import HireUs from "../HireUS/page"

const HomePage = () => {
    return (
        <>
            <Hero />
            <OurWorks />
            <DevelopmentProcess/>
            <HireUs/>
            <ContactPage />
        </>
    )
}

export default HomePage