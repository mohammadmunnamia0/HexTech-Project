"use client";
import Link from "next/link";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { CiMenuFries } from "react-icons/ci";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navItems = [
        { name: 'Home', href: '/home' },
        { name: 'Services', href: '/services' },
        { name: 'About', href: '/about' },
        { name: 'Careers', href: '/' },
        { name: 'Blog', href: '/' },
        { name: 'Contact', href: '/contact' },
    ];
    return (
        <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center space-x-2">
                            <span className="text-xl font-bold">ReturnHex</span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            {navItems.map((item) => (
                                <div className="relative group">
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
