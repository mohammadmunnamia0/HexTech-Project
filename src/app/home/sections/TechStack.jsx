"use client";
import React, { useState } from 'react';
import { FaReact, FaGit, FaPython, FaDocker, FaNodeJs, FaFigma, FaChrome, FaCss3Alt, FaHtml5, FaAws } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiRedux,SiTypescript,SiPostgresql } from "react-icons/si";
import { GrGithub } from "react-icons/gr";
import { ImNpm } from "react-icons/im";
import { VscVscodeInsiders } from "react-icons/vsc";
import { PiFileSql } from "react-icons/pi";

function TechCard({ icon: Icon, name, iconColor }) {
  return (
    <div className="group relative flex flex-col items-center p-8 bg-white rounded-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] overflow-hidden">
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

function CategoryButton({ name, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${isActive
        ? 'bg-gray-900 text-white shadow-lg scale-105'
        : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 border border-gray-100'
        }`}
    >
      {name}
    </button>
  );
}

function TechStack() {
  const technologies = [
    // Frontend
    { icon: FaReact, name: 'React', category: 'Frontend', color: 'text-cyan-500' },
    { icon: SiJavascript, name: 'JavaScript', category: 'Frontend', color: 'text-yellow-400' },
    { icon: SiTypescript, name: 'TypeScript', category: 'Frontend', color: 'text-blue-700' },
    { icon: FaHtml5, name: 'HTML5', category: 'Frontend', color: 'text-orange-500' },
    { icon: FaCss3Alt, name: 'CSS3', category: 'Frontend', color: 'text-blue-700' },
    { icon: SiRedux, name: 'Redux', category: 'Frontend', color: 'text-purple-600' },

    // Backend
    { icon: FaNodeJs, name: 'Node.js', category: 'Backend', color: 'text-green-600' },
    { icon: FaPython, name: 'Python', category: 'Backend', color: 'text-yellow-400' },

    // Database
    { icon: PiFileSql, name: 'SQL', category: 'Database', color: 'text-black' },
    { icon: SiMongodb, name: 'MongoDB', category: 'Database', color: 'text-green-600' },
    { icon: SiPostgresql, name: 'PostgreSQL', category: 'Database', color: 'text-blue-700' },

    // DevOps & Tools
    { icon: FaGit, name: 'Git', category: 'Tools', color: 'text-red-600' },
    { icon: GrGithub, name: 'GitHub', category: 'Tools', color: 'text-black' },
    { icon: FaDocker, name: 'Docker', category: 'Tools', color: 'text-blue-500' },
    { icon: ImNpm, name: 'NPM', category: 'Tools', color: 'text-red-500' },
    { icon: FaAws, name: 'AWS', category: 'Tools', color: 'text-yellow-600' },
    { icon: VscVscodeInsiders, name: 'VS Code', category: 'Tools', color: 'text-blue-600' },
    { icon: FaFigma, name: 'Figma', category: 'Tools', color: 'text-purple-600' },
    { icon: FaChrome, name: 'Chrome DevTools', category: 'Tools', color: 'text-blue-700' }
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Tools'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredTechnologies = technologies.filter(
    tech => activeCategory === 'All' || tech.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Technology Stack
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
            Our comprehensive tech stack enables us to build robust, scalable, and modern applications
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map(category => (
              <CategoryButton
                key={category}
                name={category}
                isActive={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {filteredTechnologies.map((tech, index) => (
            <TechCard key={index} icon={tech.icon} name={tech.name} iconColor={tech.color} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechStack;
