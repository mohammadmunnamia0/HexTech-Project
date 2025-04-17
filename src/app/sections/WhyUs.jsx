"use client";

import "@/styles/WhyUs.css";
import Link from "next/link";
import { useState } from "react";
import { FaGlobe, FaLock } from "react-icons/fa";
import { FiCpu, FiZap } from "react-icons/fi";
import { LuSparkles } from "react-icons/lu";
import { MdArrowOutward } from "react-icons/md";

const features = [
  {
    icon: <FiCpu className="w-8 h-8 text-white" />,
    title: "Scalable Architecture",
    description:
      "Our architecture is built to adapt to your growing business. Offering seamless scalability, it ensures continuous high performance and availability, supporting your business at every stage of expansion.",
    stats: ["Reliable", "Adaptable", "Efficient"],
  },
  {
    icon: <FaGlobe className="w-8 h-8 text-white" />,
    title: "Global Reach",
    description:
      "Scale your application across a global network with ease. Experience consistent, fast, and reliable performance regardless of user location, ensuring a seamless experience worldwide.",
    stats: ["Accessible", "Fast", "Global"],
  },
  {
    icon: <FaLock className="w-8 h-8 text-white" />,
    title: "Enterprise-Grade Security",
    description:
      "We prioritize your data’s security. With cutting-edge encryption and 24/7 monitoring, our platform ensures robust protection and compliance, securing your data against any threat.",
    stats: ["Secure", "Monitored", "Compliant"],
  },
  {
    icon: <LuSparkles className="w-8 h-8 text-white" />,
    title: "AI-Driven Optimization",
    description:
      "Leverage the power of AI to optimize operations. Automate tasks, identify patterns, and proactively solve issues, ensuring your business runs smoothly and efficiently.",
    stats: ["Automated", "Insightful", "Optimized"],
  },
];

const WhyUs = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black lg:py-32 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mb-20">
          <div className="absolute inset-0 flex items-center justify-center animate-pulse-slow opacity-30">
            <div className="w-96 h-96 bg-gradient-to-r from-gray-500 to-gray-700 rounded-full blur-3xl"></div>
          </div>

          <div className="relative text-center space-y-6">
            <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 animate-float">
              Why Choose HexTech
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Empowering the next generation of digital innovation with
              enterprise-grade infrastructure and cutting-edge tools.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div
                className={`
                gradient-border rounded-2xl p-8
                backdrop-blur-lg bg-opacity-10 
                transform transition-all duration-500
                ${
                  hoveredIndex === index
                    ? "translate-y-[-8px] shadow-2xl shadow-gray-500/10"
                    : ""
                }
              `}
              >
                <div className="flex items-start gap-6">
                  <div
                    className={`
                    p-4 rounded-xl bg-gray-800
                    transform transition-all duration-500 group-hover:rotate-12
                    ${hoveredIndex === index ? "bg-gray-700 shadow-lg" : ""}
                  `}
                  >
                    {feature.icon}
                  </div>

                  <div className="flex-1 space-y-4">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                      {feature.title}
                      <MdArrowOutward
                        className={`
                        w-5 h-5 opacity-0 transition-all duration-300
                        ${
                          hoveredIndex === index
                            ? "opacity-100 translate-x-0"
                            : "translate-x-4"
                        }
                      `}
                      />
                    </h3>

                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>

                    <div className="grid grid-cols-3 gap-4 pt-4">
                      {feature.stats.map((stat, i) => (
                        <div
                          key={i}
                          className={`
                            text-sm text-gray-200 py-2 px-3 rounded-lg bg-gray-800/50
                            transform transition-all duration-300 delay-${
                              i * 100
                            }
                            ${
                              hoveredIndex === index
                                ? "translate-y-0 opacity-100"
                                : "translate-y-4 opacity-0"
                            }
                          `}
                        >
                          {stat}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-32 bg-gradient-to-r from-gray-500/10 via-gray-300/10 to-gray-500/10 blur-3xl"></div>
          </div>

          <Link
            href="/hire-us"
            className="relative inline-flex items-center gap-3 px-8 py-4 text-lg
              bg-gradient-to-r from-gray-700 to-gray-900
              hover:from-gray-600 hover:to-gray-800
              text-white font-medium rounded-xl
              transform transition-all duration-300
              hover:scale-105 hover:shadow-2xl hover:shadow-gray-500/20"
          >
            Start Building Today
            <FiZap className="w-5 h-5 animate-pulse" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
