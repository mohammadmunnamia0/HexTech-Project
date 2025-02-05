import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/return_hex.png";
const Navbar = () => {
    return (
        <header className="bg-gray-900 text-white shadow-lg">
            <div className="container h-24 flex items-center mx-auto justify-center">
                <div className="flex items-center justify-evenly w-full">
                    <section>
                        <Image src={logo}
                            width={200}
                            height={409}
                            alt="Company Logo" />
                    </section>
                    <section className="flex items-center">
                        <div className="flex space-x-4">
                            <Link href="/home"><nav className="nav-items">Home</nav></Link>
                            <Link href="/about"><nav className="nav-items"> About</nav> </Link>
                            <Link href="/services"> <nav className="nav-items">Services</nav></Link>
                            <Link href="/contact"><nav className="nav-items">Contact</nav></Link>
                        </div>
                    </section>
                </div>
            </div>
        </header>
    );
}

export default Navbar