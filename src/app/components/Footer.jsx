import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaDribbble } from 'react-icons/fa6';
import { BsDiscord } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io";
import Image from 'next/image';
import logo from '../../public/return_hex.png';

const Footer = () => {
  return (
    <footer className="dark:bg-gray-500">
      <div className="mx-auto w-full lg:max-w-screen-xl p-4 py-6 lg:py-8 ">
        <div className="md:flex md:justify-between">
          <div className="text-white grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Resources</h2>
              <ul className=" font-medium">
                <li className="mb-4">
                  <Link href="https://flowbite.com/" className="hover:underline">Flowbite</Link>
                </li>
                <li>
                  <Link href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase">Follow us</h2>
              <ul className=" font-medium">
                <li className="mb-4">
                  <Link href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</Link>
                </li>
                <li>
                  <Link href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase">Legal</h2>
              <ul className=" font-medium">
                <li className="mb-4">
                  <Link href="#" className="hover:underline">Privacy Policy</Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">Terms &amp; Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-6 md:mb-0 ">
            <Link href="https://flowbite.com/" className="flex items-center">
              <Image src={logo} alt="Logo" width={250} height={20} />
            </Link>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center">© 2025 <a href="https://returnhex.com/" className="hover:underline">returnHex</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 text-white gap-6 text-xl">
            <Link href="/" className=" hover:text-black">
              <FaFacebookF />
              {/* <FaTwitter /> */}
            </Link>
            <Link href="/" className=" hover:text-black">
              <FaTwitter />
            </Link>
            <Link href="/" className=" hover:text-black">
              <BsDiscord />
            </Link>
            <Link href="/" className=" hover:text-black">
              <IoLogoGithub />
            </Link>
            <Link href="/" className=" hover:text-black">
              <FaDribbble />
            </Link>
          </section>
        </section>
      </section>
    </footer>
  );
}

export default Footer
