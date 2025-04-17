"use client";

import Link from "next/link";
import { useState } from "react";
import { BsDiscord } from "react-icons/bs";
import { FaDribbble, FaFacebookF, FaTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";

const SERVICES = [
  "Website Development",
  "UI/UX Design",
  "Portfolio Websites",
  "POS System Development",
  "Backend Development",
  "E-Commerce Web Development",
  "Custom Web Applications",
  "CMS Development (WordPress, Webflow, etc.)",
  "SEO Optimization & Digital Marketing",
  "Cloud-Based Solutions",
  "Enterprise Software Development",
  "Landing Page Design & Development",
  "Web Performance Optimization",
  "AI-Powered Web Solutions",
  "CRM Development & Integration",
  "Booking & Reservation Systems",
  "Custom Dashboard & Analytics Development",
  "Cybersecurity & Web Protection Services",
  "Website Maintenance & Support",
];

const BUDGETS = ["50K - 70K", "100K - 150K", "More than 250K"];

export default function HireUs() {
  const [selectedService, setSelectedService] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("More than 50K");
  const [customBudget, setCustomBudget] = useState("");
  const [otherService, setOtherService] = useState("");

  const handleServiceChange = (service) => {
    setSelectedService(service);
    setOtherService("");
  };

  const handleOtherServiceChange = (e) => {
    setOtherService(e.target.value);
    setSelectedService("");
  };

  const handleBudgetChange = (budget) => {
    setSelectedBudget(budget);
    setCustomBudget("");
  };

  const handleCustomBudgetChange = (e) => {
    setCustomBudget(e.target.value);
    setSelectedBudget("");
  };

  return (
    <div className="min-h-screen flex flex-col container overflow-hidden">
      <div className="text-center">
        <p className="font-bold text-5xl font-serif">Hire Us</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-14">
        {/* Left Section */}
        <div>
          <h2 className="text-lg font-semibold">Contacts</h2>
          <p className="text-gray-700">
            HexTech.official@gmail.com | +880 1323116356
          </p>

          <h2 className="text-lg font-semibold mt-6">Follow Us</h2>
          <div className="flex gap-4 text-xl mt-2">
            {[FaFacebookF, FaTwitter, BsDiscord, IoLogoGithub, FaDribbble].map(
              (Icon, index) => (
                <Link
                  key={index}
                  href="#"
                  className="hover:text-black cursor-not-allowed"
                >
                  <Icon />
                </Link>
              )
            )}
          </div>

          <div className="flex justify-center items-center ml-[270px] w-1/3 mt-2">
            <img
              className="flex justify-center items-center"
              src="https://cdn-icons-gif.flaticon.com/16104/16104326.gif"
              alt="Loading"
            />
          </div>

          <p className="text-lg mt-12 text-gray-700">
            We strategically design beautiful brands, websites, and digital
            products that actually work. Creating a product that connects with
            your target group is essential for success, and we know how to do
            it.
          </p>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-6">
            A PROJECT WITH MATTERED?
          </h2>

          {/* Services Selection */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Services</h3>
            <div className="flex flex-wrap gap-2">
              {SERVICES.map((service, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm ${
                    selectedService === service
                      ? "bg-black text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => handleServiceChange(service)}
                >
                  {service}
                </button>
              ))}
            </div>
            <div className="mt-4">
              <label className="block mb-1 text-sm font-medium">Other</label>
              <input
                type="text"
                placeholder="Enter your desired development"
                value={otherService}
                onChange={handleOtherServiceChange}
                className="w-full p-2 border border-gray-300 rounded-md outline-none focus:border-black"
              />
            </div>
          </div>

          {/* Budget Selection */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Your Budget</h3>
            <div className="flex flex-wrap gap-2">
              {BUDGETS.map((budget, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm ${
                    selectedBudget === budget
                      ? "bg-black text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => handleBudgetChange(budget)}
                >
                  {budget}
                </button>
              ))}
            </div>
            <div className="mt-4">
              <label className="block mb-1 text-sm font-medium">
                Custom Budget
              </label>
              <input
                type="text"
                placeholder="Enter your budget (e.g. 200K)"
                value={customBudget}
                onChange={handleCustomBudgetChange}
                className="w-full p-2 border border-gray-300 rounded-md outline-none focus:border-black"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
