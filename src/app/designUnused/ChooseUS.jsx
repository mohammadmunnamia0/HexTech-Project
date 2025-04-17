"use client";
import Image from "next/image";

const ChooseUS = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                alt="Team collaboration"
                width={500}
                height={300}
                className="rounded-lg object-cover w-full h-[300px]"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                alt="Remote work"
                width={250}
                height={200}
                className="rounded-lg object-cover w-full h-[200px]"
              />
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80"
                alt="Team meeting"
                width={250}
                height={200}
                className="rounded-lg object-cover w-full h-[200px]"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <div className="text-[bg] text-3xl font-medium">Why Choose Us</div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              We Make Our customers happy by giving Best services.
            </h1>

            <p className="text-muted-foreground">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Munna Bhai.
            </p>

            <button>
              <a
                href="#_"
                className="box-border relative z-30 inline-flex items-center justify-center w-auto px-6 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-[#131c2a] rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
              >
                <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                <span className="relative z-20 flex items-center text-sm gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-hexagon"
                  >
                    <polygon points="6 3, 18 3, 23 12, 18 21, 6 21, 1 12"></polygon>
                  </svg>
                  SEE HOW WE WORK
                </span>
              </a>
            </button>
          </div>
        </div>
      </section>
      {/* Decorative Element
      <div className="relative">
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-40 w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
      </div> */}
    </div>
  );
};

export default ChooseUS;
