
"use client";

import Link from "next/link";
import { IoMailOutline } from "react-icons/io5";
import { FaFacebookF, FaTwitter } from "react-icons/fa6";
import { BsDiscord } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io";
import { LuPhone, LuLinkedin, LuMapPin } from "react-icons/lu";
import { GoArrowRight } from "react-icons/go";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 lg:mt-32 mt-10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-white">returnHex</span>
            </div>
            <p className="text-gray-400 max-w-xs">
              Crafting digital experiences that inspire, innovate, and impact. Your vision, our expertise.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white transition-colors">
                <FaFacebookF className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <BsDiscord className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <IoLogoGithub className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <LuLinkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <FaTwitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Portfolio', 'Blog'].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="group flex items-center text-gray-400 hover:text-white transition-colors"
                  >
                    <GoArrowRight className="h-4 w-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-4">
              {[
                'Web Development',
                'Mobile Apps',
                'UI/UX Design',
                'Cloud Solutions',
                'DevOps'
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="#"
                    className="group flex items-center text-gray-400 hover:text-white transition-colors"
                  >
                    <GoArrowRight className="h-4 w-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {service}
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
                  123 Uttara Sector 10
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
                <p className="text-gray-400">returnhex.official@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} returnHex. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}