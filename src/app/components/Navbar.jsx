"use client";
import Link from "next/link";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { CiMenuFries } from "react-icons/ci";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navItems = [
        { name: 'Home', href: '/home' },
        { name: 'Hire Us', href: '/HireUS' },
        { name: 'About', href: '/about' },
        { name: 'Careers', href: '/Career' },
        { name: 'Blog', href: '/Blog' },
    ];
    return (
        <nav className="fixed w-full lg:h-[80px] bg-white/90 backdrop-blur-sm z-50 shadow-sm">
            <div className="lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:mt-2">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center space-x-2">
                            <span className="text-xl font-bold">ReturnHex</span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            {navItems.map((item) => (
                                <div className="relative group" key={item.name}>
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="text-gray-700 hover:text-black transition-all duration-700 border-b-2 border-transparent hover:border-black"
                                    >
                                        {item.name}
                                    </Link>
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-6s00 group-hover:w-full"></span>
                                </div>
                            ))}
                            <Link href="/home" className="relative inline-block text-base group">
                                <span className="relative z-10 block px-4 py-2 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border border-gray-900 rounded-md group-hover:text-white">
                                    <span className="absolute inset-0 w-full h-full px-4 py-2 rounded-md bg-gray-50"></span>
                                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                                    <span className="relative">Contact Us</span>
                                </span>
                                <span className="absolute bottom-0 right-0 w-full h-10 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-md group-hover:mb-0 group-hover:mr-0"></span>
                            </Link>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-black"
                        >
                            {
                                isOpen ?
                                    <ImCross className="text-xl" />
                                    :
                                    <CiMenuFries className="lg:text-4xl" />
                            }
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
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
