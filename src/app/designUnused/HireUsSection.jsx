"use client";


import { LuSparkles } from "react-icons/lu";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";
import Image from "next/image";


export default function HireUsSection() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-screen flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0 mesh-gradient opacity-20" />
        
        {/* Main Content */}
        <div className="relative w-full z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="text-left space-y-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600">
                  <LuSparkles className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">We craft digital excellence</span>
                </div>
                
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
                  Bring Your
                  <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    Vision to Life
                  </span>
                </h1>
                
                <p className="text-xl text-slate-600 max-w-xl">
                  We're not just developers – we're digital craftsmen who transform ideas into 
                  extraordinary experiences that captivate and inspire.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors group"
                  >
                    Start Your Project
                    <GoArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  
                  <Link
                    href="#portfolio"
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-blue-600 bg-blue-50 rounded-full hover:bg-blue-100 transition-colors"
                  >
                    View Our Work
                  </Link>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200">
                  <div>
                    <div className="text-3xl font-bold text-blue-600">100+</div>
                    <div className="text-sm text-slate-600">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">95%</div>
                    <div className="text-sm text-slate-600">Client Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">12+</div>
                    <div className="text-sm text-slate-600">Years Experience</div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Floating Images */}
              <div className="relative h-[600px] hidden lg:block">
                <div className="absolute top-0 right-0 floating" style={{ animationDelay: '0s' }}>
                  <Image
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
                    alt="Team collaboration"
                    width={320}
                    height={240}
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="absolute bottom-20 right-40 floating" style={{ animationDelay: '0.5s' }}>
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                    alt="Development process"
                    width={280}
                    height={200}
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="absolute top-40 right-60 floating" style={{ animationDelay: '1s' }}>
                  <Image
                    src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&q=80"
                    alt="Design planning"
                    width={240}
                    height={160}
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}