import icon1 from "@/assets/icon/icon1.gif";
import icon2 from "@/assets/icon/icon2.gif";
import icon3 from "@/assets/icon/icon3.gif";
import icon4 from "@/assets/icon/icon4.gif";
import icon5 from "@/assets/icon/icon5.gif";
import icon6 from "@/assets/icon/icon6.gif";
import { MdOutlineChevronRight } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

const imageClassName = "mt-10 h-16 w-16";
const Services = () => {
    const services = [
        {
            id: "01",
            title: "Web Development",
            icon: <Image className={imageClassName} src={icon1} alt="Icon" />,
            description:
                "Building responsive, fast, and scalable websites using modern web technologies.",
        },
        {
            id: "02",
            title: "App Development",
            icon: <Image className={imageClassName} src={icon2} alt="Icon" />,
            description:
                "Creating powerful, user-friendly mobile and desktop applications with cross-platform support.",
        },
        {
            id: "03",
            title: "Custom Software Development",
            icon: <Image className={imageClassName} src={icon3} alt="Icon" />,
            description:
                "Developing tailored software solutions to meet business needs, ensuring high performance and security.",
        },
        {
            id: "04",
            title: "WordPress Development",
            icon: <Image className={imageClassName} src={icon4} alt="Icon" />,
            description:
                "Designing and optimizing WordPress websites, from custom themes to plugin development and SEO.",
        },
        {
            id: "05",
            title: "SQA Management",
            icon: <Image className={imageClassName} src={icon5} alt="Icon" />,
            description:
                "Ensuring software quality through automated and manual testing, performance optimization, and bug tracking.",
        },
        {
            id: "06",
            title: "Software Consultancy",
            icon: <Image className={imageClassName} src={icon6} alt="Icon" />,
            description:
                "Providing expert guidance on software architecture, development strategies, and technology selection.",
        },
    ];


    return (
        <section className="lg:mt-32 mt-10 container">
            <div className="mx-auto">
                <div className="flex flex-col justify-center text-center">
                    <p
                        className="text-xl font-semibold"
                    >
                        Popular Services
                    </p>
                    <h1
                        className="text-4xl mt-2 font-semibold md:text-4xl lg:mb-16 mb-10"
                    >
                        Services We Provide
                    </h1>
                </div>
                <div
                    className="flex justify-center"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className="relative h-[300px] lg:px-8 px-4 border border-[#2222226c] bg-[#ffffff] group overflow-hidden"
                            >
                                {/* The normal card */}
                                <div className="relative z-10 flex items-center justify-between transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:pointer-events-none h-full">
                                    <div className="w-full">
                                        <p className="text-xl font-semibold text-right">{service.id}</p>
                                        <p className="text-2xl font-semibold">
                                            {service.title}
                                        </p>
                                        {service.icon}
                                    </div>
                                </div>


                                {/* The bigger card (hidden by default, shown on hover) */}
                                <div className="absolute inset-0 z-20 flex items-center text-white lg:p-8 p-4 bg-black transform translate-y-full group-hover:translate-y-0 transition-all duration-700 ease-in-out">
                                    <div className="w-full">
                                        <div className="flex justify-between">
                                            <p className="flex text-4xl font-extrabold text-white tracking-normal">
                                                <span className="text-stroke-white relative animate-stroke">
                                                    {service.id[0]}
                                                </span>
                                                <span className="text-stroke-white relative animate-stroke">
                                                    {service.id[1]}
                                                </span>
                                            </p>
                                            <p className="text-2xl font-semibold text-right">
                                                {service.title}
                                            </p>

                                        </div>
                                        <p className="mt-5">{service.description}</p>
                                        <Link href='/HireUS'>
                                            <button className="relative flex items-center mt-8 font-bold text-white transition-all duration-300 cursor-pointer hover:translate-x-3 hover:text-gray-300">
                                                Hire Us
                                                <MdOutlineChevronRight className=" text-xl transition-transform duration-300 ease-in-out" />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Services;




