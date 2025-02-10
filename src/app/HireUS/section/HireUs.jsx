"use client";

import { useState } from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaDribbble } from "react-icons/fa6";
import { BsDiscord } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io";

export default function HireUs() {
  const [selectedService, setSelectedService] = useState("Website development");
  const [selectedBudget, setSelectedBudget] = useState("More than 50K");

  const services = [
    "Website development",
    "UI-UX Design",
    "Portfolio",
    "POS system",
    "Backend development",
    "E-Commerce Web development",
    "Mobile App development",

  ];
  const budgets = ["2K - 10K", "10K - 50K", "More than 50K"];

  return (
    <div className="min-h-screen flex flex-col p-8 container">
      <div className="text-center">
        <p className="text-4xl font-semibold mb-5">Hire Us</p>
        {/* <img
          className="w-52 h-52 mx-auto"
         
          alt="Loading Animation"
        /> */}
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-14">
        {/* Left */}
        <div>
          <h2 className="text-lg font-semibold">Contacts</h2>
          <p className="text-gray-700">returnhex@gmail.com | +880188888888</p>

          <h2 className="text-lg font-semibold mt-6">Follow Us</h2>

          <div className="flex gap-4 text-xl mt-2">
            <Link href="/" className="hover:text-black">
              <FaFacebookF />
            </Link>
            <Link href="/" className="hover:text-black">
              <FaTwitter />
            </Link>
            <Link href="/" className="hover:text-black">
              <BsDiscord />
            </Link>
            <Link href="/" className="hover:text-black">
              <IoLogoGithub />
            </Link>
            <Link href="/" className="hover:text-black">
              <FaDribbble />
            </Link>
          </div>
          <div className="flex justify-center items-center ml-[270px] w-1/3  mt-2">
            <div>
            <img className="flex justify-center items-center"
               src="https://cdn-icons-gif.flaticon.com/16104/16104326.gif"
              alt="ss"
            />
            </div>
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
              {services.map((service, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm
                     ${
                       selectedService === service
                         ? "bg-black text-white"
                         : "bg-gray-200 text-gray-700"
                     }`}
                  onClick={() => setSelectedService(service)}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          {/* Budget Selection */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Your Budget</h3>
            <div className="flex gap-2">
              {budgets.map((budget, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm 
                    ${
                      selectedBudget === budget
                        ? "bg-black text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  onClick={() => setSelectedBudget(budget)}
                >
                  {budget}
                </button>
              ))}
            </div>
          </div>

          {/* Form */}
          <form className="mt-6 space-y-6">
            <div className="grid grid-cols-2 gap-6">
              {/* Name Input */}
              <div>
                <label className="block mb-1 text-sm font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-2 border-b border-gray-300 outline-none focus:border-black"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block mb-1 text-sm font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-2 border-b border-gray-300 outline-none focus:border-black"
                  required
                />
              </div>
            </div>

            {/* Project Details */}
            <div>
              <label className="block mb-1 text-sm font-medium">
                Project Details{" "}
                <span className="text-gray-500">(Optional)</span>
              </label>
              <textarea
                placeholder="Your project description"
                className="w-full p-2 border-b border-gray-300 outline-none focus:border-black"
                rows="2"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-black text-white p-3 rounded-md hover:bg-gray-800 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
