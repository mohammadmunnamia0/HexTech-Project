"use client"
import React, { useState } from "react";
import { FaCode, FaPalette, FaShoppingBag, FaServer } from "react-icons/fa";
import { IoGlobe, IoSend } from "react-icons/io5";
import { FiSmartphone } from "react-icons/fi";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { IoSparklesOutline } from "react-icons/io5";
import emailjs from "emailjs-com";
import { toast } from "sonner";

const Services = [
  {
    icon: <FaCode className="w-6 h-6" />,
    title: "Web Development",
    description: "Custom websites & web applications",
  },
  {
    icon: <FaPalette className="w-6 h-6" />,
    title: "UI/UX Design",
    description: "Beautiful & intuitive interfaces",
  },
  {
    icon: <FaShoppingBag className="w-6 h-6" />,
    title: "E-Commerce",
    description: "Online stores & marketplaces",
  },
  {
    icon: <FaServer className="w-6 h-6" />,
    title: "Backend Solutions",
    description: "Robust server-side development",
  },
  {
    icon: <FiSmartphone className="w-6 h-6" />,
    title: "Mobile Apps",
    description: "Cross-platform mobile solutions",
  },
  {
    icon: <IoGlobe className="w-6 h-6" />,
    title: "Custom Solutions",
    description: "Tailored to your needs",
  },
];

const Budgets = [
  { label: "$5k - $10k", value: "5-10k" },
  { label: "$10k - $25k", value: "10-25k" },
  { label: "$25k - $50k", value: "25-50k" },
  { label: "$50k+", value: "50k+" },
];

const Steps = [
  {
    title: "Choose Service",
    description: "Select the service that best fits your needs",
  },
  { title: "Your Details", description: "Tell us about yourself" },
  { title: "Project Info", description: "Share your vision and budget" },
];

function HireUs() {
  const [selectedService, setSelectedService] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
    service: selectedService
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target,formData)
    // Send the email using EmailJS
    emailjs
      .sendForm(
        "service_e6xsbxm",
        "template_68k2olk",
        e.target,
        "MFLg2Xg-fHwvvYuMW",
        formData  
      )
      .then(
        (result) => {
          if (result?.text == "OK") {
            toast.success("Message sent successfully!");
            setFormData({ name: "", email: "", message: "", budget: "", service: "" });
          }
        },
        (error) => {
          console.log(error.text);
          toast.error("Error sending message. Please try again.");
        }
      );
  };

  return (
    <div className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 relative" data-aos="fade-down"
          data-aos-duration="2000">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2">
            <IoSparklesOutline className="w-12 h-12 text-gray-500/30 animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 mb-4">
            Let's Create Magic Together
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Transform your vision into reality with our expert team
          </p>
        </div>

        <div className="relative" data-aos="fade-up"
          data-aos-duration="2000">
          {/* Progress Steps */}
          <div className="mb-12" >
            <div className="flex justify-center items-center gap-4 mb-8">
              {Steps.map((step, index) => (
                <div key={step.title} className="flex items-center">
                  {index > 0 && (
                    <div
                      className={`h-[2px] w-16 mx-2 transition-colors duration-300 ${currentStep > index ? "bg-gray-800" : "bg-gray-200"
                        }`}
                    />
                  )}
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${currentStep > index
                        ? "bg-gray-900 text-white"
                        : currentStep === index + 1
                          ? "bg-gray-100 text-gray-900 ring-2 ring-gray-800"
                          : "bg-gray-50 text-gray-400"
                        }`}
                    >
                      {index + 1}
                    </div>
                    <div className="text-sm mt-2 text-center">
                      <div
                        className={`font-medium ${currentStep === index + 1
                          ? "text-gray-900"
                          : "text-gray-500"
                          }`}
                      >
                        {step.title}
                      </div>
                      <div className="text-xs text-gray-500 max-w-[120px]">
                        {step.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 transition-all duration-500 ${currentStep === 1
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8 pointer-events-none absolute"
              }`}
          >
            {Services.map((service) => (
              <div
                key={service.title}
                className={`group p-6 cursor-pointer transition-all duration-300 hover:scale-[1.02] overflow-hidden relative rounded-lg border border-gray-200 hover:border-gray-300 bg-white shadow-sm ${selectedService === service.title
                  ? "border-gray-900 shadow-lg ring-2 ring-gray-100"
                  : ""
                  }`}
                onClick={() => {
                  setSelectedService(service.title);
                  setCurrentStep(2);
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="mb-4 text-gray-700 transform group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div
            className={`max-w-2xl mx-auto rounded-lg border border-gray-200 backdrop-blur-sm bg-white/50 shadow-sm transition-all duration-500 ${currentStep >= 2
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8 pointer-events-none absolute"
              }`}
          >
            <form onSubmit={handleSubmit} className="p-8">
              <div className="space-y-6">
                {/* Personal Info */}
                <div
                  className={`space-y-4 transition-all duration-500 ${currentStep === 2
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8 pointer-events-none absolute"
                    }`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative group">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full bg-transparent border-b border-gray-200 border-t-0 border-x-0 py-2 focus:outline-none focus:border-gray-900 transition-colors placeholder:text-gray-400"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gray-900 transition-all group-focus-within:w-full" />
                    </div>

                    <div className="relative group">
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full bg-transparent border-b border-gray-200 border-t-0 border-x-0 py-2 focus:outline-none focus:border-gray-900 transition-colors placeholder:text-gray-400"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gray-900 transition-all group-focus-within:w-full" />
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <button
                      type="button"
                      className="text-gray-500 hover:text-gray-900 px-4 py-2 rounded-md flex items-center"
                      onClick={() => setCurrentStep(1)}
                    >
                      <BsArrowLeft className="w-4 h-4 mr-2" />
                      Back to Services
                    </button>
                    <button
                      type="button"
                      className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-4 py-2 rounded-md flex items-center"
                      onClick={() => setCurrentStep(3)}
                    >
                      Next Step
                      <BsArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>

                {/* Project Details */}
                <div
                  className={`space-y-6 transition-all duration-500 ${currentStep === 3
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8 pointer-events-none absolute"
                    }`}
                >
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Budgets.map((budget) => (
                      <button
                        key={budget.value}
                        type="button"
                        className={`h-auto py-4 px-4 rounded-md border ${formData.budget === budget.value
                          ? "border-gray-900 bg-gray-100 text-gray-900"
                          : "border-gray-200 hover:border-gray-300"
                          }`}
                        onClick={() =>
                          setFormData({ ...formData, budget: budget.value })
                        }
                      >
                        {budget.label}
                      </button>
                    ))}
                    <button
                      type="button"
                      className={`h-auto py-4 px-4 rounded-md border ${formData.budget === 'custom' ? "border-gray-900 bg-gray-100 text-gray-900" : "border-gray-200 hover:border-gray-300"}`}
                      onClick={() => setFormData({ ...formData, budget: 'custom' })}
                    >
                      Custom Budget
                    </button>
                  </div>

                  <div className="relative group">
                    <textarea
                      placeholder="Tell us about your project vision..."
                      className="w-full min-h-[120px] bg-transparent border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-gray-900 transition-colors resize-none placeholder:text-gray-400"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>

                  <div className="flex justify-between items-center">
                    <button
                      type="button"
                      className="text-gray-500 hover:text-gray-900 px-4 py-2 rounded-md flex items-center"
                      onClick={() => setCurrentStep(2)}
                    >
                      <BsArrowLeft className="w-4 h-4 mr-2" />
                      Back
                    </button>
                    <button
                      type="submit"
                      className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-md flex items-center"
                    >
                      <IoSend className="w-4 h-4 mr-2" />
                      Send Proposal
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HireUs;