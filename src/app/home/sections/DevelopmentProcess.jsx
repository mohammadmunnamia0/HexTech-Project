import Image from "next/image";
import gif1 from "@/assets/gif1.gif";
import gif2 from "@/assets/gif2.gif";
import gif3 from "@/assets/gif3.gif";
import gif4 from "@/assets/gif4.gif";

const developmentProcess = [
    {
        id:1,
        title: "Initial Consultation",
        description: "We discuss your needs and objectives",
        gif: gif1
    },
    {
        id:2,
        title: "Planning & Strategy",
        description: "Developing a tailored solution strategy",
        gif: gif2
    },
    {
        id:3,
        title: "Development",
        description: "Building your solution with best practices",
        gif: gif3
    },
    {
        id:4,
        title: "Testing & Deployment",
        description: "Ensuring quality and smooth deployment",
        gif: gif4
    },
];

export default function DevelopmentProcess() {
    return (
        <section className="bg-black lg:mt-32 mt-10">
            <div className="py-20 w-[85%] mx-auto text-white px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl lg:text-4xl font-semibold lg:mb-16 mb-5">
                    Our Development Process -
                </h1>
                <div className="grid md:grid-cols-4 gap-8">
                    {developmentProcess.map((step) => (
                        <div
                            key={step.id}
                            className="relative flex flex-col items-center text-center"
                        >
                            <div className="bg-background p-4 rounded-full mb-4">
                                <Image
                                    src={step.gif}
                                    alt={step.title}
                                    className="h-16 w-16 invert brightness-0"
                                />
                            </div>
                            <h2 className="text-xl font-semibold mb-2">{step.title}</h2>
                            <p className="text-muted-foreground">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}



