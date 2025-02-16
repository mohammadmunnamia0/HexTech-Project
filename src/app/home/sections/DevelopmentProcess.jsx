import Image from "next/image";
import gif1 from "@/assets/gif1.gif";
import gif2 from "@/assets/gif2.gif";
import gif3 from "@/assets/gif3.gif";
import gif4 from "@/assets/gif4.gif";


export default function DevelopmentProcess() {
    const developmentProcess = [
        {
            title: "Initial Consultation",
            description: "We discuss your needs and objectives",
            gif: (
                <Image
                    src={gif1}
                    alt="Initial Consultation"
                    className="h-16 w-16  invert brightness-0"
                />
            ),
        },
        {
            title: "Planning & Strategy",
            description: "Developing a tailored solution strategy",
            gif: (
                <Image
                    src={gif2}
                    alt="Planning & Strategy"
                    className="h-16 w-16  invert brightness-0"
                />
            ),
        },
        {
            title: "Development",
            description: "Building your solution with best practices",
            gif: (
                <Image
                    src={gif3}
                    alt="Development"
                    className="h-16 w-16  invert brightness-0"
                />
            ),
        },
        {
            title: "Testing & Deployment",
            description: "Ensuring quality and smooth deployment",
            gif: (
                <Image
                    src={gif4}
                    alt="Testing & Deployment"
                    className="h-16 w-16  invert brightness-0"
                />
            ),
        },
    ];

    return (
        <section className="py-20  bg-black lg:mt-12 mt-5 lg:mb-12 mb-5">
            <div className="container  text-white">
                <h2 className="text-3xl lg:text-4xl font-semibold lg:mb-16 mb-5">
                    Our Development Process -
                </h2>
                <div className="grid md:grid-cols-4 gap-8">
                    {developmentProcess.map((step, index) => (
                        <div
                            key={index}
                            className="relative flex flex-col items-center text-center"
                        >
                            {index < developmentProcess.length - 1 && (
                                <div className="absolute top-5 lg:left-1/2 w-full h-0.5 bg-border -z-10" />
                            )}
                            <div className="bg-background p-4 rounded-full mb-4">
                                {step.gif}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-muted-foreground">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}



