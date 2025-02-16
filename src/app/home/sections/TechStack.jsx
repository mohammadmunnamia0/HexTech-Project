import { FaReact, FaGit, FaPython, FaDocker, FaNodeJs, FaFigma, FaChrome, FaCss3Alt, FaHtml5, FaAws } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiRedux, SiTypescript, SiPostgresql } from "react-icons/si";
import { GrGithub } from "react-icons/gr";
import { ImNpm } from "react-icons/im";
import { VscVscodeInsiders } from "react-icons/vsc";
import { PiFileSql } from "react-icons/pi";
import Marquee from "react-fast-marquee";

function TechCard({ icon: Icon, name, iconColor }) {
  return (
    <div className="group  relative flex flex-col items-center p-8 bg-white rounded-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -inset-1 bg-gradient-to-r from-gray-100 to-gray-50 transform scale-[1.01] opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10" />
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-gray-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
          <Icon className={`w-12 h-12 mb-4 ${iconColor} relative z-10 transform group-hover:scale-110 transition-transform duration-500`} strokeWidth={1.5} />
        </div>
        <span className="text-gray-800 font-medium mt-2 group-hover:text-black transition-colors duration-500">{name}</span>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-gray-200 to-gray-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </div>
  );
}

function TechStack() {
  const technologies = [
    { icon: FaReact, name: 'React', color: 'text-cyan-500' },
    { icon: SiJavascript, name: 'JavaScript', color: 'text-yellow-400' },
    { icon: SiTypescript, name: 'TypeScript', color: 'text-blue-700' },
    { icon: FaHtml5, name: 'HTML5', color: 'text-orange-500' },
    { icon: FaCss3Alt, name: 'CSS3', color: 'text-blue-700' },
    { icon: SiRedux, name: 'Redux', color: 'text-purple-600' },
    { icon: FaNodeJs, name: 'Node.js', color: 'text-green-600' },
    { icon: FaPython, name: 'Python', color: 'text-yellow-400' },
    { icon: PiFileSql, name: 'SQL', color: 'text-black' },
    { icon: SiMongodb, name: 'MongoDB', color: 'text-green-600' },
    { icon: SiPostgresql, name: 'PostgreSQL', color: 'text-blue-700' },
    { icon: FaGit, name: 'Git', color: 'text-red-600' },
    { icon: GrGithub, name: 'GitHub', color: 'text-black' },
    { icon: FaDocker, name: 'Docker', color: 'text-blue-500' },
    { icon: ImNpm, name: 'NPM', color: 'text-red-500' },
    { icon: FaAws, name: 'AWS', color: 'text-yellow-600' },
    { icon: VscVscodeInsiders, name: 'VS Code', color: 'text-blue-600' },
    { icon: FaFigma, name: 'Figma', color: 'text-purple-600' },
    { icon: FaChrome, name: 'Chrome DevTools', color: 'text-blue-700' }
  ];

  return (
    <div className="bg-white lg:mt-32 mt-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Technology Stack</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-16">
            Our comprehensive tech stack enables us to build robust, scalable, and modern applications
          </p>
        </div>

        {/* Marquee for Left to Right */}
        <Marquee gradient={false} speed={50} pauseOnHover>
          {technologies.map((tech, index) => (
            <TechCard key={index} icon={tech.icon} name={tech.name} iconColor={tech.color} />
          ))}
        </Marquee>

        {/* Marquee for Right to Left */}
        <Marquee gradient={false} speed={50} pauseOnHover direction="right">
          {technologies.map((tech, index) => (
            <TechCard key={index} icon={tech.icon} name={tech.name} iconColor={tech.color} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default TechStack;
