import Image from "next/image";
import { FaCode } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import { MdOutlineArrowOutward } from "react-icons/md";
import gadget from "@/assets/Project/gadget.jpeg"


const projects = [
    {
        title: "E-Commerce Platform",
        description: "A full-featured online shopping platform with real-time inventory management. Built with modern technologies to deliver seamless shopping experiences and efficient inventory control.",
        image: (
            <Image
                src={gadget}
                alt="img"
                className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
            />
        ),
        category: "Web Development",
        icon: <FaCode className="w-5 h-5" />,
        tech: ["Next.js", "React", "Node.js", "PostgreSQL"],
    },
    {
        title: "Financial Dashboard",
        description: "Interactive analytics dashboard for financial data visualization. Empowering businesses with real-time insights and comprehensive financial analytics tools.",
        image: (
            <Image
                src={gadget}
                alt="img"
                className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
            />
        ),
        category: "Analytics",
        icon: <FaCode className="w-5 h-5" />,
        tech: ["React", "D3.js", "Python", "AWS"],
    },
    {
        title: "Brand Redesign",
        description: "Complete brand identity redesign for a Fortune 500 company. A comprehensive overhaul of visual identity, creating a modern and cohesive brand experience.",
        image: (
            <Image
                src={gadget}
                alt="img"
                className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
            />
        ),
        category: "Design",
        icon: <FaCode className="w-5 h-5" />,
        tech: ["Figma", "Adobe CC", "Webflow", "Motion Design"],
    }
];
export default function Project() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-base font-semibold text-gray-600 tracking-wide uppercase">Our Work</h2>
                    <p className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">Featured Projects</p>
                    <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
                        Discover our latest work and see how we help businesses transform their digital presence
                    </p>
                </div>

                <div className="space-y-20">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 ease-in-out"
                        >
                            <div className="grid md:grid-cols-2 gap-0">
                                {/* Image Section */}
                                <div className="relative h-[400px] overflow-hidden">
                                    {project.image}
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    {/* Floating category badge */}
                                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                                        {project.icon}
                                        <span className="text-sm font-medium text-gray-800">{project.category}</span>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="relative p-8 lg:p-12 flex flex-col h-full">
                                    <div className="flex-grow">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-600 transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-600 mb-6 leading-relaxed">
                                            {project.description}
                                        </p>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {project.tech.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action buttons */}
                                    <div className="flex items-center gap-4">
                                        <button className="flex items-center gap-2 bg-gray-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-colors duration-300">
                                            View Project
                                            <FiExternalLink className="w-4 h-4" />
                                        </button>
                                        <button className="flex items-center gap-2 bg-white text-gray-600 px-6 py-3 rounded-full font-semibold border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300">
                                            Case Study
                                            <MdOutlineArrowOutward className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom gradient line */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-white via-gray-500 to-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
                        </div>
                    ))}
                </div>
                <div className="mt-20 text-center">
                    <button className="inline-flex items-center gap-2 bg-gray-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-black transition-colors duration-300 hover:scale-105 transform transition-transform duration-200">
                        View All Projects
                        <MdOutlineArrowOutward className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}