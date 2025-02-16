import gif1 from "@/assets/gif1.gif";
import gif2 from "@/assets/gif2.gif";
import gif3 from "@/assets/gif3.gif";
import gif4 from "@/assets/gif4.gif";
import Image from "next/image";

export default function DevelopmentCircle() {
  const developmentProcess = [
         {
             title: "Initial Consultation",
             description: "We discuss your needs and objectives",
             gif: <Image src={gif1} alt="Initial Consultation" className="h-16 w-16" />,
         },
         {
             title: "Planning & Strategy",
             description: "Developing a tailored solution strategy",
             gif: <Image src={gif2} alt="Initial Consultation" className="h-16 w-16" />,
         },
         {
             title: "Development",
             description: "Building your solution with best practices",
        
             gif: <Image src={gif3} alt="Initial Consultation" className="h-16 w-16" />,
         },
         {
             title: "Testing & Deployment",
             description: "Ensuring quality and smooth deployment",
             gif: <Image src={gif4} alt="Initial Consultation" className="h-16 w-16" />,
         },
     ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Our Development Process
        </h1>
        
        <div className="">
          {/* Large circle background */}
          <div className="w-[600px] h-[600px] mx-auto relative">
            <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
            
            {developmentProcess.map((process, index) => {
              const angle = (index * 360) / developmentProcess.length;
              const radius = 250; // Distance from center
              
              // Calculate position on the circle
              const left = radius * Math.cos((angle - 90) * (Math.PI / 180)) + 300;
              const top = radius * Math.sin((angle - 90) * (Math.PI / 180)) + 300;
              
              return (
                <div
                  key={process.title}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 w-48 transition-all duration-300 hover:scale-110"
                  style={{
                    left: `${left}px`,
                    top: `${top}px`,
                  }}
                >
                  <div className="bg-white flex flex-col items-center rounded-xl shadow-lg p-6 text-center hover:bg-gray-600 hover:text-white transition-colors duration-300">
                    <div className="text-4xl mb-3">{process.gif}</div>
                    <h3 className="font-semibold text-lg mb-2">{process.title}</h3>
                    <p className="text-sm opacity-80">{process.description}</p>
                  </div>
                </div>
              );
            })}
            
            {/* Center circle */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-40 h-40 rounded-full bg-primary flex items-center justify-center text-white text-lg font-semibold shadow-lg">
                Continuous
                <br />
                Improvement
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}