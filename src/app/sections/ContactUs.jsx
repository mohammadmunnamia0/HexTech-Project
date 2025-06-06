"use client";
import officeImg from "@/assets/contact/office.jpg";
import emailjs from "emailjs-com";
import Image from "next/image";
import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { LuSparkles } from "react-icons/lu";
import { toast } from "sonner";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the email using EmailJS
    emailjs
      .sendForm(
        "service_e6xsbxm",
        "template_68k2olk",
        e.target,
        "MFLg2Xg-fHwvvYuMW"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          toast.error("Error sending message. Please try again.");
        }
      );
  };

  return (
    <div id="contact" className=" bg-gray-300 overflow-hidden">
      <div className="relative min-h-screen flex items-center justify-center mt-12 p-4">
        <div className="relative w-full max-w-6xl mx-auto">
          <div className="relative bg-white/50 backdrop-blur-lg rounded-[2.5rem] p-8 pt-10 md:p-12 border border-white/20">
            <div className="lg:block hidden absolute lg:w-[60%] w-full lg:-top-10 left-1/2 -translate-x-1/2 bg-black text-white px-8 py-4 rounded-2xl">
              <h1
                className="text-2xl lg:text-4xl font-bold flex items-center gap-4"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                Let's Create Something Amazing
                <LuSparkles className="w-6 h-6 mt-1" />
              </h1>
            </div>

            <div
              className="mt-12 grid md:grid-cols-2 gap-12"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="space-y-8">
                <div className="relative bg-white rounded-2xl p-6 shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="absolute -top-4 -left-4 bg-black text-white p-3 rounded-xl shadow-lg">
                    <IoMailOutline className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-semibold mb-2 pl-8">
                    Get in Touch
                  </h2>
                  <p className="text-gray-600">
                    Ready to start your next project? We're here to turn your
                    ideas into reality.
                  </p>
                </div>

                <div className="relative bg-black text-white rounded-2xl lg:p-8 p-4 shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 p-2 lg:p-0">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IoMailOutline className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Email us at</p>
                        <p className="font-medium">
                          HexTech.official@gmail.com
                        </p>
                      </div>
                    </div>

                    <div className="w-full h-px bg-white/20"></div>

                    <div className="relative overflow-hidden rounded-xl">
                      <Image
                        src={officeImg}
                        alt="Office"
                        className="w-full h-48 object-cover"
                        height={1000}
                        width={1000}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="font-medium">Visit our office</p>
                        <p className="text-sm text-gray-300">
                          Uttara Sector 10, Dhaka, Bangladesh
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Floating form */}
              <div className="relative bg-white rounded-2xl p-8 shadow-lg">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Name Field */}
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-900">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-black focus:ring-0 transition-colors duration-200"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-900">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-black focus:ring-0 transition-colors duration-200"
                      placeholder="john@example.com"
                      required
                      pattern="^[a-zA-Z0-9._%+-]+@gmail\.com$"
                      title="Please enter a valid Gmail address (e.g. yourname@gmail.com)"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-900">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-black focus:ring-0 transition-colors duration-200"
                      placeholder="Tell us about your project..."
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-black text-white py-4 px-6 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors duration-200"
                  >
                    Send Message
                    <FiSend className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
