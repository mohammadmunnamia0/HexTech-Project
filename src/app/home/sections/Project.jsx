import { MdOutlineShoppingCart, MdOutlineTerminal, MdOutlineBarChart, MdOutlineInventory } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";

const products = [
    {
        title: "E-commerce Platform",
        description: "A powerful and scalable e-commerce solution for modern businesses.",
        icon: <MdOutlineShoppingCart className="h-6 w-6 text-white" />,
        features: [
            "Multi-vendor marketplace",
            "Real-time inventory tracking",
            "Advanced analytics"
        ]
    },
    {
        title: "POS System",
        description: "Streamlined point-of-sale system with comprehensive management tools.",
        icon: <MdOutlineTerminal className="h-6 w-6 text-white" />,
        features: [
            "Offline functionality",
            "Hardware integration",
            "Real-time sales analytics"
        ]
    },
    {
        title: "CRM Solution",
        description: "AI-powered CRM for improving customer relationships and boosting sales.",
        icon: <MdOutlineBarChart className="h-6 w-6 text-white" />,
        features: [
            "Automated email campaigns",
            "Lead scoring & qualification",
            "Sales pipeline visualization"
        ]
    },
    {
        title: "Inventory System",
        description: "An advanced inventory management system with predictive analytics.",
        icon: <MdOutlineInventory className="h-6 w-6 text-white" />,
        features: [
            "Barcode & RFID integration",
            "Stock alerts & forecasting",
            "Multi-warehouse support"
        ]
    }
];

export default function Project() {
    return (
        <div className="py-24 mt-12">
            <div className="w-[85%] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header - Right aligned */}
                <div className="text-right mx-auto mb-16 w-full">
                    <h2 className="text-4xl font-bold mb-2">Enterprise-Grade Solutions</h2>
                    <p className="text-xl text-gray-400">
                        Battle-tested, scalable products built for modern businesses
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, idx) => (
                        <div key={idx} className="group relative bg-black rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
                            <div className="p-8 relative flex-grow">
                                <div className="h-12 w-12 bg-gray-700/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    {product.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">{product.title}</h3>
                                <p className="text-gray-400 mb-4">{product.description}</p>
                                <ul className="space-y-3 text-sm text-gray-300">
                                    {product.features.map((feature, featureIdx) => (
                                        <li key={featureIdx} className="flex items-center">
                                            <GoArrowRight className="h-4 w-4 mr-2 text-white" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* Call to Action Button with border outline and no background */}
                            <a href="#contact" className="mt-6 inline-block px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-gray-800 transition-all self-center mb-8">
                                Contact Us
                            </a>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
