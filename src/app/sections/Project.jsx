import { MdOutlineShoppingCart, MdOutlineTerminal, MdOutlineBarChart, MdOutlineInventory } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";

const productIcon = "h-6 w-6 text-white"
const products = [
    {
        id: 1,
        title: "E-Commerce Bundle",
        description: "A powerful and scalable e-commerce solution for modern businesses.",
        icon: <MdOutlineShoppingCart className={productIcon} />,
        features: [
            "Multi-vendor marketplace",
            "Real-time inventory tracking",
            "Advanced analytics"
        ]
    },
    {
        id: 2,
        title: "POS System",
        description: "Streamlined point-of-sale system with comprehensive management tools.",
        icon: <MdOutlineTerminal className={productIcon} />,
        features: [
            "Offline functionality",
            "Hardware integration",
            "Real-time sales analytics"
        ]
    },
    {
        id: 3,
        title: "Petty Cash",
        description: "AI-powered tool for managing petty cash, tracking small expenses.",
        icon: <MdOutlineBarChart className={productIcon} />,
        features: [
            "Real-time expense tracking",
            "Budget management",
            "Petty cash reconciliation"
        ]
    },
    {
        id: 4,
        title: "Inventory System",
        description: "An advanced inventory management system with predictive analytics.",
        icon: <MdOutlineInventory className={productIcon} />,
        features: [
            "Barcode & RFID integration",
            "Stock alerts & forecasting",
            "Multi-warehouse support"
        ]
    }
];

export default function Project() {
    return (
        <div className="lg:mt-32 mt-10 pb-10 xl:pb-20">
            <div className="w-[85%] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header - Right aligned */}
                <div className="text-right mx-auto mb-16 w-full"
                    data-aos="fade-left"
                    data-aos-duration="2000"
                >
                    <h1 className="text-4xl font-bold mb-2">Our In-house build in products</h1>
                    <p className="text-xl text-gray-400">
                        Battle-tested, scalable products built for modern businesses
                    </p>
                </div>
                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative bg-Custom_bg text-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
                            data-aos="fade-up"
                            data-aos-duration="2000"
                        >
                            <div className="p-8 relative flex-grow">
                                <div className="h-12 w-12 bg-gray-700/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    {product.icon}
                                </div>
                                <h2 className="text-xl font-semibold text-white mb-3">{product.title}</h2>
                                <p className="text-gray-400 mb-6">{product.description}</p>
                                <ul className="space-y-3 text-sm text-white">
                                    {product.features.map((feature, featureIdx) => (
                                        <li key={featureIdx} className="flex items-center">
                                            <GoArrowRight className="h-4 w-4 mr-2 text-white" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <Link href="#contact" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                                <span className="w-48 h-48 rounded rotate-[-40deg] bg-gray-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Contact Us</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
