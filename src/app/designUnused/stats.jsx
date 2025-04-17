"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedCounter = ({ value, showPlus = false }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 3000; // 3 seconds
    const increment = Math.ceil(value / (duration / 16));

    const interval = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <span>
      {count.toLocaleString()}
      {showPlus ? "+" : ""}
    </span>
  );
};

const class1 = "lg:relative mb-3 flex h-40 lg:h-80 w-40 lg:w-80 items-center justify-center rounded-full border border-gray-800 shadow p-8 "


const Stats = () => {
  return (
    <section className="relative overflow-hidden lg:mt-32 mt-10 ">

     
      <div className="">
        <div className="text-center">
          <h2 className="text-3xl font-semibold leading-7 text-gray-900 sm:text-4xl xl:text-5xl">
            We are <br className="sm:hidden" />
            growing rapidly
          </h2>
          <hr className="mt-4 h-1.5 w-32 border-none bg-gray-600 mx-auto sm:mt-8" />
        </div>



        <div className="relative ml-4 lg:mx-auto my-20 grid grid-cols-2 lg:grid-cols-1 gap-y-6 text-center sm:text-left ">

          <div className={`${class1} lg:ml-[140px]`}>

            <div className="text-center">
              <p className="text-4xl lg:text-6xl font-black text-gray-600"
               style={{
                WebkitTextStroke: "3px gray",
                 WebkitTextFillColor: "transparent",
                  }}>
                <AnimatedCounter value={50} showPlus={true} />
              </p>
              <p className="mt-3 text-lg text-gray-600">
                 worldwide trust us
              </p>
            </div>
          </div>

          <div className="lg:absolute  lg:ml-[420px]  mb-3 flex h-40 lg:h-80 w-40 lg:w-80 items-enter justify-center rounded-full border border-gray-800 shadow p-8 ">
            <div className="text-center">
              <p className="text-4xl lg:text-6xl font-black text-gray-600 lg:mt-[70px]"
               style={{
                WebkitTextStroke: "3px gray",
                 WebkitTextFillColor: "transparent",
                  }}
             
             >
                <AnimatedCounter value={101} showPlus={true} />
              </p>
              <p className="mt-3 text-lg text-gray-600">
              Happy Customers
              </p>
            </div>
          </div>

          <div className="lg:absolute  lg:ml-[700px]  mb-3 flex h-40 lg:h-80 w-40 lg:w-80 items-enter justify-center rounded-full border border-gray-800 shadow p-8 ">
            <div className="text-center">
              <p className="text-4xl lg:text-6xl font-black text-gray-600 lg:mt-[70px]" 
               style={{
                WebkitTextStroke: "3px gray",
                 WebkitTextFillColor: "transparent",
                  }}>
                <AnimatedCounter value={35} showPlus={true} />
              </p>
              <p className="mt-3 text-lg text-gray-600">
              Successful projects
              </p>
            </div>
          </div>

          <div className="lg:absolute  lg:ml-[980px]  mb-3 flex h-40 lg:h-80 w-40 lg:w-80 items-enter justify-center rounded-full border border-gray-800 shadow p-8 ">
            <div className="text-center">
              <p className="text-4xl lg:text-6xl font-black text-gray-600 lg:mt-[70px]"
               style={{
                WebkitTextStroke: "3px gray",
                 WebkitTextFillColor: "transparent",
                  }}>
                <AnimatedCounter value={3} showPlus={true} />
              </p>
              <p className="mt-3 text-lg text-gray-600">
              Years of Experience
              </p>
            </div>
          </div>

          {/* <div>
            <div className="absolute -inset-1 rounded bg-gradient-to-r from-green-500 to-emerald-500 opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative rounded-full border border-gray-800">
              <AnimatedCounter end={13} duration={1800} label="Award Achievement" />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Stats;
