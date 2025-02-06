"use client";
import Link from "next/link";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { IoSearch } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";
import { FaFacebookF, FaYoutube } from "react-icons/fa6";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import logo from "../../public/return_hex.png";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      {/* Navbar start*/}
      <nav className="flex justify-between items-center lg:h-24 h-20 bg-gray-500 text-white">
        {/* Logo */}
        <div className="lg:text-4xl text-2xl font-bold lg:px-10 px-5">
          <Image src={logo} alt="Logo" width={250} height={20} />
        </div>
        <div className="w-full flex justify-end h-full">
          <div className="flex lg:w-1/2 w-full justify-between">
            {/* Menu Items */}
            <ul className="hidden lg:flex w-full justify-evenly items-center space-x-6 text-black font-semibold bg-white text-2xl shadow-md">
              <Link href="/home">
                <li className="relative group">
                  <span className="transition-all duration-300">Home</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </li>
              </Link>
              <Link href="/about">
                <li className="relative group">
                  <span className="transition-all duration-300">About</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </li>
              </Link>
              <Link href="/services">
                <li className="relative group">
                  <span className="transition-all duration-300">Services</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </li>
              </Link>
              <Link href="/contact">
                <li className="relative group">
                  <span className="transition-all duration-300">Contact</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </li>
                
              </Link>
            </ul>
            {/* Icons */}
            <div className="flex items-center lg:w-1/4 w-full justify-end">
              <IoSearch className="lg:text-3xl text-2xl lg:mx-auto lg:w-24 mx-5" />
              <p
                className="flex gap-3 border h-full items-center p-3 bg-white hover:bg-[#80808080] hover:text-white text-black cursor-pointer"
                onClick={toggleSidebar}
              >
                <CiMenuFries className="lg:text-4xl" />
                Menu
              </p>
            </div>
          </div>
        </div>
      </nav>
      {/* Navbar ends*/}
      {/* Sidebar starts */}
      <div
        className={`fixed top-0 right-0 h-screen w-[350px] bg-black text-white transform ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out`}
      >
        <div className="p-6 flex flex-col space-y-9 space-x-3">
          <h2 className="text-3xl font-bold">Menu</h2>
          <Link href="/home">
            <li className="relative group">
              <span className="transition-all duration-300">Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
          </Link>
          <Link href="/about">
            <li className="relative group">
              <span className="transition-all duration-300">About</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white  transition-all duration-300 group-hover:w-full"></span>
            </li>
          </Link>
          <Link href="/services">
            <li className="relative group">
              <span className="transition-all duration-300">Services</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
          </Link>
          <div>
            <h1 className="text-2xl mb-3">Contact</h1>
            <p>
              Contact: House 10, Road 4, Sector 10, Uttara, Dhaka, Bangladesh
              returnhex@gmail.com +8801788756299
            </p>
            <h1 className="text-2xl mt-6 mb-4">Follow Us: </h1>
            <div className="flex text-3xl gap-5">
              <FaFacebookF />
              <FaTwitter />
              <FaLinkedinIn />
              <FaYoutube />
            </div>
            <p className="mt-14 text-center">© 2025 returnHex - IT Services.</p>
          </div>
        </div>
        <button className="absolute top-8 right-4" onClick={toggleSidebar}>
          <ImCross className="text-xl" />
        </button>
      </div>
      {/* Sidebar ends */}
    </div>
  );
};
export default Navbar;
