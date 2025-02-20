"use client";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const teamMembers = [
  {
    img: "https://cdn.prod.website-files.com/5e51c674258ffe10d286d30a/5e535b9746008059478ec0d0_peep-85.svg",
    name: "Abdul Ahad Linkon",
    role: "Senior Developer",
    details: "Expert in backend technologies and architecture.",
  },
  {
    img: "https://cdn.prod.website-files.com/5e51c674258ffe10d286d30a/5e5357fcc99250d0c6c8a111_peep-54.svg",
    name: "Al Imran Tonmoy",
    role: "Project Manager",
    details: "Manages projects with efficiency and precision.",
  },
  {
    img: "https://cdn.prod.website-files.com/5e51c674258ffe10d286d30a/5e53533367293a3e5c5a8b35_peep-21.svg",
    name: "Raiyan Chawdhori",
    role: "HR",
    details: "Ensures a great workplace environment.",
  },
  {
    img: "https://cdn.prod.website-files.com/5e51c674258ffe10d286d30a/5e5350f9d399238698511b2f_peep-7.svg",
    name: "Md Bakhtier Fahim",
    role: "Developer",
    details: "Loves solving complex frontend problems.",
  },
  {
    img: "https://cdn.prod.website-files.com/5e51c674258ffe10d286d30a/5e535a648e249323fd077d2b_peep-75.svg",
    name: "Rakibul Hasan",
    role: "Developer",
    details: "Passionate about building scalable web applications.",
  },
  {
    img: "https://cdn.prod.website-files.com/5e51c674258ffe10d286d30a/5e5352709588e06bd47b75e0_peep-19.svg",
    name: "Md Munna Mia",
    role: "Developer",
    details: "Focuses on creating idiot-proof applications.",
  },
  {
    img: "https://cdn.prod.website-files.com/5e51c674258ffe10d286d30a/5e5358fb9b55b0b0f453f5f5_peep-63.svg",
    name: "Umme Kulsum Suraia",
    role: "Designer",
    details: "Brings ideas to life with stunning UI/UX.",
  },
  {
    img: "https://cdn.prod.website-files.com/5e51c674258ffe10d286d30a/5e5352709588e06bd47b75e0_peep-19.svg",
    name: "Md Munna Mia",
    role: "Developer",
    details: "Focuses on creating idiot-proof applications.",
  },
];

const DemoTeam = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center flex-col lg:flex-row md:mt-20">
          <div className="w-full lg:w-1/2">
            <h2 className="font-manrope text-5xl text-gray-900 font-bold leading-[4rem] mb-7 text-center lg:text-left">
              Our leading, strong & creative team
            </h2>
            <p className="text-lg text-gray-500 mb-16 text-center lg:text-left">
              These people work on making our product best.
            </p>
            <button className="cursor-pointer py-3 px-8 w-60 bg-indigo-600 text-white text-base font-semibold transition-all duration-500 block text-center rounded-full hover:bg-indigo-700 mx-auto lg:mx-0">
              Join our team
            </button>
          </div>

          {/* <div className="w-full lg:w-1/2 lg:mt-0 md:mt-40 mt-16 max-lg:max-w-2xl">
            <div className="grid lg:grid-rows-2 grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-4 gap-8 ">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="relative w-44 h-56 px- rounded-2xl overflow-hidden mx-auto hover:"
                  whileHover={{ y: -15 }}
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-2xl "
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300 px-3 text-center">
                    <p className="text-lg font-semibold">{member.name}</p>
                    <p className="text-sm text-gray-200">{member.role}</p>
                    <p className="text-xs text-gray-200 mt-1">
                      {member.details}
                    </p>
                    <div className="flex space-x-3 mt-2">
                      <a href="#" className="hover:text-red-500 text-red-400">
                        <BiLogoGmail />
                      </a>
                      <a href="#" className="hover:text-blue-500 text-blue-600">
                        <FaLinkedin />
                      </a>
                      <a href="#" className="hover:text-gray-600">
                        <FaGithub />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div> */}

          <div className="w-full lg:w-1/2 lg:mt-0 md:mt-40 mt-16 max-lg:max-w-2xl">
            <div className="grid lg:grid-rows-2 grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="relative w-44 h-56 rounded-2xl overflow-hidden mx-auto shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  whileHover={{ scale: 1.1, y: -15 }}
                >
                  <motion.img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300 px-3 text-center">
                    <p className="text-lg font-semibold">{member.name}</p>
                    <p className="text-sm text-gray-200">{member.role}</p>
                    <p className="text-xs text-gray-200 mt-1">
                      {member.details}
                    </p>
                    <div className="flex space-x-3 mt-2">
                      <a href="#" className="hover:text-red-500 text-red-400">
                        <BiLogoGmail />
                      </a>
                      <a href="#" className="hover:text-blue-500 text-blue-600">
                        <FaLinkedin />
                      </a>
                      <a href="#" className="hover:text-gray-600">
                        <FaGithub />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoTeam;
