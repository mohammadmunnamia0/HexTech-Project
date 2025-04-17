"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { ImCross } from "react-icons/im";
import logo from "../../../../public/images/logo/Logo_Style_3.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current route

  const navItems = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "Hire us", href: "/hire-us" },
    { id: 3, name: "About us", href: "/about" },
    { id: 4, name: "Careers", href: "/career" },
    { id: 5, name: "Blog", href: "/blog" },
  ];

  return (
    <nav className="fixed w-full lg:h-[80px] bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="lg:max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:mt-2">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image className="w-12" src={logo}></Image>
              <span className="text-xl font-bold">HexTech</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <div className="relative group" key={item.id}>
                  <Link
                    href={item.href}
                    className={`text-gray-700 transition-all duration-700 border-b-2 ${
                      pathname === item.href
                        ? "border-black"
                        : "border-transparent"
                    } hover:text-black hover:border-black`}
                  >
                    {item.name}
                  </Link>
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full ${
                      pathname === item.href ? "w-full" : ""
                    }`}
                  ></span>
                </div>
              ))}
              <Link href="/hire-us">
                <button className="relative inline-block text-base group">
                  <span className="relative z-10 block px-4 py-2 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border border-gray-900 rounded-md group-hover:text-white">
                    <span className="absolute inset-0 w-full h-full px-4 py-2 rounded-md bg-gray-50"></span>
                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                    <span className="relative">Let's Talk</span>
                  </span>
                  <span className="absolute bottom-0 right-0 w-full h-10 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-md group-hover:mb-0 group-hover:mr-0"></span>
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-black"
            >
              {isOpen ? (
                <ImCross className="text-xl" />
              ) : (
                <CiMenuFries className="lg:text-4xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="block px-3 py-2 text-gray-700 hover:text-black"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
