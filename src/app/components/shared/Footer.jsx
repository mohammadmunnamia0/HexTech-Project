"use client";

import Link from "next/link";
import { BsDiscord } from "react-icons/bs";
import { FaGitlab } from "react-icons/fa";
import { FaFacebookF, FaTwitter } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import { IoMailOutline } from "react-icons/io5";
import { LuLinkedin, LuMapPin, LuPhone } from "react-icons/lu";

const quickLink = [
  { id: 1, key: "Home", link: "home" },
  { id: 2, key: "About", link: "about" },
  { id: 3, key: "Careers", link: "career" },
  { id: 4, key: "Blog", link: "blog" },
  { id: 5, key: "Hire us", link: "hire-us" },
];
const services = [
  { id: 1, key: "Web Development" },
  { id: 2, key: "Mobile Apps" },
  { id: 3, key: "UI/UX Design" },
  { id: 4, key: "Cloud Solutions" },
  { id: 5, key: "DevOps" },
];

export default function Footer() {
  return (
    <footer className="bg-Custom_bg text-gray-300 pt-10 overflow-hidden">
      {/* Main Footer Content */}
      <div className="max-w-[1920px] px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-white">HexTech</span>
            </div>
            <p className="text-gray-400 max-w-xs">
              Crafting digital experiences that inspire, innovate, and impact.
              Your vision, our expertise.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61572976370182"
                className="hover:text-white transition-colors"
                target="_blank"
              >
                <FaFacebookF className="h-5 w-5" />
              </Link>
              <Link
                href="https://discord.gg/EYywGcH8"
                className="hover:text-white transition-colors"
                target="_blank"
              >
                <BsDiscord className="h-5 w-5" />
              </Link>
              <Link
                href="https://gitlab.com/HexTech"
                className="hover:text-white transition-colors"
                target="_blank"
              >
                <FaGitlab className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/HexTech/"
                className="hover:text-white transition-colors"
                target="_blank"
              >
                <LuLinkedin className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="hover:text-white transition-colors cursor-not-allowed"
                title="We are working"
              >
                <FaTwitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLink.map((item) => (
                <li key={item?.id}>
                  <Link
                    href={item?.link}
                    className="group flex items-center text-gray-400 hover:text-white transition-colors"
                  >
                    <GoArrowRight className="h-4 w-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item?.key}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href="#"
                    className="group flex items-center text-gray-400 hover:text-white transition-colors cursor-not-allowed"
                    title="we are building"
                  >
                    <GoArrowRight className="h-4 w-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {service.key}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <LuMapPin className="h-5 w-5 text-gray-400 mt-1" />
                <p className="text-gray-400">
                  Sector 10, Uttara, Dhaka-1230
                  <br />
                  Dhaka, Bangladesh
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <LuPhone className="h-5 w-5 text-gray-400" />
                <p className="text-gray-400">+880 1323116356</p>
              </div>
              <div className="flex items-center space-x-3">
                <IoMailOutline className="h-5 w-5 text-gray-400" />
                <p className="text-gray-400">HexTech.official@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 overflow-hidden">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} HexTech. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link
                href="#"
                className="hover:text-white transition-colors cursor-not-allowed"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="hover:text-white transition-colors cursor-not-allowed"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="hover:text-white transition-colors cursor-not-allowed"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
