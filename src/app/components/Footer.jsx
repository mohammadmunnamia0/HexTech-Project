"use client";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaDribbble } from "react-icons/fa6";
import { BsDiscord } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io";
export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-8 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between ">
        {/* Left Section */}
        <div className="mb-8 md:mb-0">
          <h2 className="text-xl font-bold">
            Get in touch : returnhex@gmail.com
          </h2>
          <div className="flex justify-center items-center  bg-black">
            <h1 className="text-6xl font-bold text-white glow rounded-xl px-6 py-3 relative">
              returnhex
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r  from-gray-300 via-gray-500 to-gray-400  blur-xl opacity-75 animate-pulse"></span>
            </h1>
          </div>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Platform */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Platform</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">Features</Link>
              </li>
              <li>
                <Link href="/">Pricing & Plans</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/">Account</Link>
              </li>
              <li>
                <Link href="/">Tools</Link>
              </li>
              <li>
                <Link href="/">Newsletter</Link>
              </li>
              <li>
                <Link href="/">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Legals */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Legals</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/">Guides</Link>
              </li>
              <li>
                <Link href="/">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="/">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/">Licensing</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-6 flex items-center">
        <p className="text-white text-2xl">Follow us on : </p>
        <div className="flex space-x-4 text-lg">
          <Link href="/" className="text-blue-500 ml-5 hover:text-gray-400">
            <FaFacebookF />
          </Link>
          <Link href="/" className="text-blue-500 hover:text-black">
            <FaTwitter />
          </Link>
          <Link href="/" className="text-blue-400 hover:text-black">
            <BsDiscord />
          </Link>
          <Link href="/" className=" hover:text-black">
            <IoLogoGithub />
          </Link>
        </div>
      </div>
    </footer>
  );
}
