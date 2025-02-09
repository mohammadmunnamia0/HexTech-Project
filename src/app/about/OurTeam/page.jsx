"use client";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { motion } from "framer-motion";

const Page = () => {
  const teamMembers = [
    { name: "Abdul Ahad Linkon", role: "Senior Developer", details: "Expert in backend technologies and architecture." },
    { name: "Al Imran Tonmoy", role: "Project Manager", details: "Manages projects with efficiency and precision." },
    { name: "Raiyan Chawdhori", role: "HR", details: "Ensures a great workplace environment." },
    { name: "Md Bakhtier Fahim", role: "Developer", details: "Loves solving complex frontend problems." },
    { name: "Rakibul Hasan", role: "Developer", details: "Passionate about building scalable web applications." },
    { name: "Md Munna Mia", role: "Developer", details: "Focuses on creating idiot-proof applications." },
    { name: "Umme Kulsum Suraia", role: "Designer", details: "Brings ideas to life with stunning UI/UX." },
  ];

  return (
    <div className="max-w-7xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-8 mt-12">
        Our Team <br />
        The talented people behind the scenes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="relative group text-center p-4 border rounded-lg shadow-lg overflow-hidden cursor-pointer "
            animate={{ scale: 1.05 }}
          >
            <div className="h-24 w-24 bg-gray-300 rounded-full mx-auto mb-4">
                <img src="" alt="" />
            </div>
            <h3 className="font-bold text-lg">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
            <div className="flex justify-center gap-4 mt-4 text-xl">
              <a href="#" className="hover:text-red-500 text-red-400"><BiLogoGmail /></a>
              <a href="#" className="hover:text-blue-500 text-blue-600"><FaLinkedin /></a>
              <a href="#" className="hover:text-gray-600"><FaGithub /></a>
            </div>
            <motion.div
              className="absolute inset-0 bg-white p-4 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1.2, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-gray-700 text-sm text-center">{member.details}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Page;
