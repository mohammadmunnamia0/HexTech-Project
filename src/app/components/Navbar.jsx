import Image from "next/image";
import Link from "next/link";
import logo from "../../public/return_hex.png";
export default function Navbar() {
    return (
        <nav className="bg-gray-900 text-white shadow-lg">
            <div className="container h-24 flex items-center mx-auto justify-center">
                <div className="flex items-center justify-evenly w-full">
                    <div>
                        <Image src={logo}
                            width={200}
                            height={409}
                            alt="Company Logo" />
                    </div>
                    <div className="flex items-center">

                        <div className="flex space-x-4">
                            <Link href="/home">
                                <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    Home
                                </p>
                            </Link>
                            <Link href="/about">
                                <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    About
                                </p>
                            </Link>
                            <Link href="/services">
                                <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    Services
                                </p>
                            </Link>
                            <Link href="/contact">
                                <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    Contact
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
