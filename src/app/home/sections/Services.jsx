import icon1 from "@/assets/icon/icon1.gif";
import icon2 from "@/assets/icon/icon2.gif";
import icon3 from "@/assets/icon/icon3.gif";
import icon4 from "@/assets/icon/icon4.gif";
import icon5 from "@/assets/icon/icon5.gif";
import icon6 from "@/assets/icon/icon6.gif";
import { MdOutlineChevronRight } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
    const services = [
        {
            id: "01",
            title: "Web Development",
            icon: <Image className="mt-10 h-16 w-16" src={icon1} alt="Icon" />,
            description:
                "Building responsive, fast, and scalable websites using modern web technologies like React, Next.js, and Laravel.",
        },
        {
            id: "02",
            title: "App Development",
            icon: <Image className="mt-10 h-16 w-16" src={icon2} alt="Icon" />,
            description:
                "Creating powerful, user-friendly mobile and desktop applications with cross-platform support.",
        },
        {
            id: "03",
            title: "Custom Software Development",
            icon: <Image className="mt-10 h-16 w-16" src={icon3} alt="Icon" />,
            description:
                "Developing tailored software solutions to meet business needs, ensuring high performance and security.",
        },
        {
            id: "04",
            title: "WordPress Development",
            icon: <Image className="mt-10 h-16 w-16" src={icon4} alt="Icon" />,
            description:
                "Designing and optimizing WordPress websites, from custom themes to plugin development and SEO.",
        },
        {
            id: "05",
            title: "SQA Management",
            icon: <Image className="mt-10 h-16 w-16" src={icon5} alt="Icon" />,
            description:
                "Ensuring software quality through automated and manual testing, performance optimization, and bug tracking.",
        },
        {
            id: "06",
            title: "Software Consultancy",
            icon: <Image className="mt-10 h-16 w-16" src={icon6} alt="Icon" />,
            description:
                "Providing expert guidance on software architecture, development strategies, and technology selection.",
        },
    ];


    return (
        <section className="p-5 lg:mt-12 mt-6 container">
            <div className="lg:w-[85%] mx-auto">
                <div className="flex flex-col justify-center text-center ">
                    <p
                        className="text-2xl font-semibold"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                    >
                        Popular Services
                    </p>
                    <h1
                        className="text-3xl font-semibold md:text-4xl lg:mb-16"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                    >
                        Services We Provide
                    </h1>
                </div>
                <div className="w-full">
                    <div
                        className="flex justify-center w-full px-4"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                    >
                        <div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {services.map((service) => (
                                    <div
                                        key={service.id}
                                        className="relative h-[300px] p-8 border rounded-lg border-[#2222226c] bg-[#ffffff] group overflow-hidden"
                                    >
                                        {/* The normal card */}
                                        <div className="relative z-10 flex items-center justify-between mt-5 transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:pointer-events-none">
                                            <div>
                                                <p className="text-lg font-semibold">{service.id}</p>
                                                <p className="text-2xl font-semibold">
                                                    {service.title}
                                                </p>
                                                {service.icon}
                                            </div>


                                            <p className="flex items-center px-4 h-[150px] text-2xl rounded-3xl bg-[#f6f2ed] group-hover:bg-white transition-all duration-500 ease-in-out">
                                                <FiArrowUpRight className="transition-colors duration-500 ease-in-out group-hover:text-blue-600" />
                                            </p>
                                        </div>


                                        {/* The bigger card (hidden by default, shown on hover) */}
                                        <div className="absolute inset-0 z-20 w-[110%] h-[110%] bg-gray-600 transform translate-y-full group-hover:translate-y-0 transition-all duration-700 ease-in-out">
                                            <div className="px-6 text-white mt-12">
                                                <div className="flex items-center lg:gap-5">
                                                    <p className="text-2xl font-semibold w-[60%]">
                                                        {service.title}
                                                    </p>
                                                    <p className="flex text-7xl font-extrabold text-white tracking-normal">
                                                        <span className="text-stroke-white relative animate-stroke">
                                                            {service.id[0]}
                                                        </span>
                                                        <span className="text-stroke-white relative animate-stroke">
                                                            {service.id[1]}
                                                        </span>
                                                    </p>
                                                </div>
                                                <p className="mt-5 w-[90%]">{service.description}</p>
                                                <Link href='/HireUS'>
                                                    <button className="relative flex items-center mt-8 font-bold text-white transition-all duration-300 cursor-pointer hover:translate-x-3 hover:text-gray-300">
                                                        Hire Us{" "}
                                                        <MdOutlineChevronRight className="mt-1 text-xl transition-transform duration-300 ease-in-out" />
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Services;




