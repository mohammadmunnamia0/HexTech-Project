import Link from "next/link";
import { FaUsers } from "react-icons/fa";
import Image from "next/image";
import banner from "@/assets/HireUs/teamBanner.jpg"; // Ensure the correct import path

export default function TeamBanner() {
  return (
    <section className="w-[80%] mx-auto">
      <div className="relative border overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 py-20 rounded-full">
        {/* Background Image using Next.js Image component */}
        <div className="absolute inset-0 z-0">
          <Image
            src={banner}
            alt="Team Banner"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="opacity-20"
          />
        </div>

        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute h-96 w-96 -left-24 -top-24 rounded-full bg-gray-500 blur-3xl animate-pulse"></div>
          <div className="absolute h-96 w-96 -right-24 -bottom-24 rounded-full bg-gray-600 blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Icon with bounce animation */}
            <div className="inline-flex items-center justify-center p-2 bg-gray-700 rounded-full mb-8 animate-bounce">
              <FaUsers className="h-8 w-8 text-gray-100" />
            </div>

            {/* Heading with fade-in animation */}
            <h2 className="text-4xl font-bold text-white mb-6 animate-[fadeIn_1s_ease-in_forwards]">
              Meet Our Team
            </h2>

            {/* Subheading with slide-up animation */}
            <p className="max-w-2xl mx-auto text-lg text-white translate-y-4 animate-[slideUp_0.8s_ease-out_0.2s_forwards] mb-8">
              We're a passionate group of individuals dedicated to creating
              exceptional experiences and delivering outstanding results.
            </p>

            {/* About button with hover animation */}
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100 transition-colors duration-300 translate-y-4 animate-[slideUp_0.8s_ease-out_0.4s_forwards]"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
