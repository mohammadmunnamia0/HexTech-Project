"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// Team member data
const teamMembers = [
  {
    id: 1,
    name: "Abdul Ahad Linkon",
    // position: "CEO & Founder",
    bio: "Visionary leader with a passion for innovation and technology.",
    image: "/images/Team/link.jpg",
    message:
      "We're building the future of digital experiences. Join us on this exciting journey as we push the boundaries of what's possible.",
    social: {
      twitter: "https://www.linkedin.com/in/md-abdul-ahad-linkon/",
      linkedin: "https://www.linkedin.com/in/md-abdul-ahad-linkon/",
      github: "https://github.com/linkon63",
    },
  },
  {
    id: 2,
    name: "Raiyan Chowdhury",
    // position: "COO & Founder",
    bio: "Passionate about Works.",
    image: "/images/Team/dummy.jpg",
    social: {
      twitter: "https://www.facebook.com/raiyan.chowdhury.10831/",
      linkedin: "https://www.facebook.com/raiyan.chowdhury.10831/",
      github: "https://www.facebook.com/raiyan.chowdhury.10831/",
    },
  },
  {
    id: 3,
    name: "Al Imran Tonmoy",
    // position: "CFO & Founder",
    bio: "Technical mastermind behind our innovative solutions.",
    image: "/images/Team/dummy.jpg",
    social: {
      twitter: "https://x.com/Tonmoy_uchiha",
      linkedin: "https://www.linkedin.com/in/al-imran-tonmoy-2a701b159/",
      github: "https://github.com/TonmoyUchiha",
    },
  },
  {
    id: 4,
    name: "Md Bakhtier Fahim",
    // position: "CPO & Founder",
    bio: "Loves solving complex frontend problems.",
    image: "/images/Team/dummy.jpg",
    social: {
      twitter: "https://x.com/B_a_k_h_t_i_a_r",
      linkedin: "https://www.linkedin.com/in/mdbakhtiarfahim/",
      github: "https://github.com/Bakhtiar2000",
    },
  },
  {
    id: 5,
    name: "Rakibul Hasan",
    // position: "CTO & Founder",
    bio: "Passionate about building scalable web applications.",
    image: "/images/Team/dummy.jpg",
    social: {
      twitter: "https://x.com/RakibulHas22215",
      linkedin: "https://www.linkedin.com/in/rakibul-hasan-0261a8236/",
      github: "https://github.com/RakibulHasan2",
    },
  },
  {
    id: 6,
    name: "Mohammad Munna",
    // position: "CMO & Founder",
    bio: "Focuses on creating idiot-proof applications.",
    image: "/images/Team/dummy.jpg",
    social: {
      twitter: "https://x.com/mohammad_munna0",
      linkedin: "https://www.linkedin.com/in/md-munna-mia-340225219/",
      github: "https://github.com/mohammadmunnamia0",
    },
  },
  {
    id: 7,
    name: "Umme Kulsum Suraiya",
    // position: "Designer",
    bio: "Brings ideas to life with stunning UI/UX.",
    image: "/images/Team/Suraiya.png",
    social: { twitter: "#", linkedin: "#", github: "#" },
  },
  {
    id: 8,
    name: "Abdul Hamid Faruk",
    // position: "Marketing Head",
    bio: "Leads brand strategy and marketing campaigns.",
    image: "/images/Team/AbdulHamidFaruk.jpg",
    social: { twitter: "#", linkedin: "#", github: "#" },
  },
];

const TeamMember = ({ member, isHovered, onHover, onLeave }) => {
  return (
    <div
      className={`relative overflow-hidden transition-all duration-500 ease-in-out rounded-lg shadow-lg w-full
        ${isHovered ? "scale-105 z-10" : "scale-100 z-0"}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="relative h-80 w-full overflow-hidden">
        <img
          src={member.image || "/images/default-avatar.png"}
          alt={member.name}
          className={`w-full h-full object-cover transition-all duration-500 
            ${isHovered ? "scale-105 brightness-100" : "brightness-75"}`}
        />

        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-500
          ${isHovered ? "opacity-100" : "opacity-70"}`}
        >
          <div className="absolute bottom-0 left-0 right-0 p-4 transition-all duration-500 ease-in-out">
            <h3
              className={`text-white font-bold transition-all duration-300 
              ${isHovered ? "text-xl mb-2" : "text-lg mb-1"}`}
            >
              {member.name}
            </h3>

            <p className="text-white/90 text-sm">{member.position}</p>

            {isHovered && (
              <div className="mt-4 space-y-3 transition-all duration-500 ease-in-out opacity-80">
                <p className="text-white/80 text-sm line-clamp-3">
                  {member.bio}
                </p>

                <div className="flex space-x-3 pt-2">
                  <a
                    href={member.social.twitter}
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    <FaTwitter size={18} />
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="text-white hover:text-blue-600 transition-colors"
                  >
                    <FaLinkedin size={18} />
                  </a>
                  <a
                    href={member.social.github}
                    className="text-white hover:text-purple-400 transition-colors"
                  >
                    <FaGithub size={18} />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

function OurTeam() {
  const [hoveredId, setHoveredId] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [currentMemberIndex, setCurrentMemberIndex] = useState(0);
  const sliderRef = useRef(null);

  // Get CEO, CTO, and other team members
  const ceo = teamMembers[0];
  const featuredMembers = [ceo, ...teamMembers.slice(1, 0)]; // CEO + 3 key members
  const displayedMembers = showAll ? teamMembers : teamMembers.slice(0, 8);

  const navigateTeam = (direction) => {
    if (direction === "next") {
      setCurrentMemberIndex((prev) =>
        prev === featuredMembers.length - 1 ? 0 : prev + 1
      );
    } else {
      setCurrentMemberIndex((prev) =>
        prev === 0 ? featuredMembers.length - 1 : prev - 1
      );
    }
  };

  // Ensure smooth scrolling when navigation changes
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [currentMemberIndex]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-16 px-4">
      <div className="max-w-7xl w-full mx-auto">
        {/* Featured CEO Section */}
        <div className="mb-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-white rounded-2xl overflow-hidden shadow-xl">
            <div className="lg:w-1/2 relative h-[400px] overflow-hidden">
              <img
                src={ceo.image || "/images/default-avatar.png"}
                alt={ceo.name}
                className="w-fit h-fit object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-end p-8">
                <div className="text-white">
                  <h2 className="text-3xl font-bold mb-2">{ceo.name}</h2>
                  <p className="text-xl font-semibold text-white/90">
                    {ceo.position}
                  </p>
                  <div className="flex space-x-4 mt-4">
                    <a
                      href={ceo.social.linkedin}
                      className="text-white hover:text-blue-300 transition-colors"
                    >
                      <FaLinkedin size={24} />
                    </a>
                    <a
                      href={ceo.social.twitter}
                      className="text-white hover:text-blue-300 transition-colors"
                    >
                      <FaTwitter size={24} />
                    </a>
                    <a
                      href={ceo.social.github}
                      className="text-white hover:text-blue-300 transition-colors"
                    >
                      <FaGithub size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* A Message From Our Guiding Visionary */}
            <div className="lg:w-1/2 p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                A Message From Our Guiding Visionary
              </h3>
              <p className="text-gray-700 text-lg italic leading-relaxed mb-8">
                "{ceo.message}"
              </p>
              <div className="flex justify-end">
                <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* A Message From Our Guiding Visionary slider*/}
        {/* <div className="mb-24" ref={sliderRef}>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
            A Message From Our Guiding Visionary
            </h2>
            <div className="flex space-x-2">
              <button
                onClick={() => navigateTeam("prev")}
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
              >
                <IoIosArrowBack size={24} />
              </button>
              <button
                onClick={() => navigateTeam("next")}
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
              >
                <IoIosArrowForward size={24} />
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 relative h-[350px] w-full">
                <img
                  src={
                    featuredMembers[currentMemberIndex].image ||
                    "/images/default-avatar.png"
                  }
                  alt={featuredMembers[currentMemberIndex].name}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-2/3">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {featuredMembers[currentMemberIndex].name}
                  </h3>
                  <p className="text-lg font-semibold text-blue-600">
                    {featuredMembers[currentMemberIndex].position}
                  </p>
                </div>
                <p className="text-gray-700 mb-8">
                  {featuredMembers[currentMemberIndex].bio}
                </p>
                <div className="flex space-x-4">
                  <a
                    href={featuredMembers[currentMemberIndex].social.linkedin}
                    className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors"
                  >
                    <FaLinkedin size={20} className="text-blue-600" />
                  </a>
                  <a
                    href={featuredMembers[currentMemberIndex].social.twitter}
                    className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors"
                  >
                    <FaTwitter size={20} className="text-blue-400" />
                  </a>
                  <a
                    href={featuredMembers[currentMemberIndex].social.github}
                    className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors"
                  >
                    <FaGithub size={20} className="text-gray-800" />
                  </a>
                </div>
                <div className="mt-8 flex">
                  <div className="flex space-x-1">
                    {featuredMembers.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentMemberIndex(index)}
                        className={`w-2 h-2 rounded-full ${
                          currentMemberIndex === index
                            ? "bg-blue-600"
                            : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Large Banner */}
        <div className="relative h-64 mb-20 rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Our Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/50 flex items-center justify-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-wider">
              OUR TEAM
            </h1>
          </div>
        </div>

        {/* All Team Members Grid */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Meet Our Innovation Engineer at HexTech Family
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The brilliant minds behind our success. Hover over each member to
            discover their role and passion.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedMembers.map((member) => (
            <div
              key={member.id}
              className={`transition-all duration-500 ease-in-out
              ${
                hoveredId !== null && hoveredId !== member.id
                  ? "blur-[.6px] scale-95"
                  : ""
              }`}
            >
              <TeamMember
                member={member}
                isHovered={hoveredId === member.id}
                onHover={() => setHoveredId(member.id)}
                onLeave={() => setHoveredId(null)}
              />
            </div>
          ))}
        </div>

        {/* Show/Hide Members Button */}
        {teamMembers.length > 8 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
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

                {showAll ? "SHOW LESS" : "VIEW ALL"}
              </span>
            </button>
          </div>
        )}

        {/* Join Our Team Button */}
        <div className="mt-20 text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Want to be part of our incredible team?
            </h3>
            <p className="text-gray-600">
              We're always looking for talented individuals to join our growing
              team.
            </p>
          </div>
          {/* <Link
            href="/career"
            className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-4 overflow-hidden font-bold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 rounded-md cursor-pointer group hover:from-blue-700 hover:to-purple-700 ease focus:outline-none"
          >
            <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="relative z-20 flex items-center text-base gap-2">
              JOIN OUR TEAM
            </span>
          </Link> */}
          <Link
            href="/career"
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
              Join Our Tream
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
