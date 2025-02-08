import Hero from "@/app/home/sections/Hero"
import OurWorks from "./sections/OurWorks"
import ContactPage from "../contact/page"
import HireUS from "../HireUS/page"

const HomePage = () => {
    return (
        <>
            <Hero />
            <OurWorks />
            <HireUS/>
            <ContactPage />
        </>
    )
}

export default HomePage