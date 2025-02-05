import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="flex justify-between items-center">
          <section className="flex items-center space-x-4">
            <p>&copy; 2025 returnHex. All Rights Reserved.</p>
          </section>
          <section className="flex space-x-6">
            <Link href="/about">
              <p className="text-gray-400 hover:text-white">About</p>
            </Link>
            <Link href="/services">
              <p className="text-gray-400 hover:text-white">Services</p>
            </Link>
            <Link href="/contact">
              <p className="text-gray-400 hover:text-white">Contact</p>
            </Link>
          </section>
        </section>
      </section>
    </footer>
  );
}

export default Footer
