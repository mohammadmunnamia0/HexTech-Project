import DynamicHero from "@/app/components/shared/DynamicHero";
import { generateDynamicMetadataHandler } from "@/helpers/generateDynamicMetadataHandler";
import Link from "next/link";

// Dynamic metadata generation function
export async function generateMetadata() {
  const page_slug = "/career";
  const url = "http://localhost:3000/";
  const redirect_url = `${url}/${page_slug}`;

  const result = await generateDynamicMetadataHandler({
    redirect_url,
    title: "Career",
  });
  return result;
}

export default function AvailablePositions() {
  const positions = [
    {
      category: "Design",
      jobs: [
        {
          location: "Uttara, Dhaka, Bangladesh",
          title: "Product Designer - UI/UX",
        },
        {
          location: "Uttara, Dhaka, Bangladesh",
          title: "UX/UI Design Intern – Digital Experience Team",
        },
      ],
    },
    {
      category: "Development",
      jobs: [
        { location: "Remote", title: "Software Tester" },
        { location: "Remote", title: "Senior Software Developer" },
        { location: "Uttara, Dhaka, Bangladesh", title: "Product Manager" },
        { location: "Uttara, Dhaka, Bangladesh", title: "React Developer" },
        { location: "Remote", title: "Full-Stack Developer" },
        { location: "Uttara, Dhaka, Bangladesh", title: "Sr. Software Tester" },
        { location: "Uttara, Dhaka, Bangladesh", title: "Intern - Front-End" },
        { location: "Uttara, Dhaka, Bangladesh", title: "Intern - Back-End" },
      ],
    },
    {
      category: "Designing",
      jobs: [{ location: "Remote", title: "UI/UX" }],
    },
  ];

  return (
    <div>
      <DynamicHero page="career" />
      <div className=" py-24 px-9 sm:px-6 lg:px-8 mb-8 ">
        <div className=" container ">
          <div className="text-center">
            <div className="text-4xl font-bold p-6">
              Unlock new career <br /> opportunities at HexTech
            </div>
            <div className="p-4">
              embraces a youthful and flexible spirit, enabling us to swiftly
              adapt to market research, conditions, and customer demands through
              our advanced technology.
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-6">Available positions</h2>
          {positions.map((section) => (
            <div key={section.category} className="mb-8 ">
              <h3 className="text-xl font-semibold mb-4">{section.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
                {section.jobs.map((job, index) => (
                  <Link
                    key={index}
                    href={`/career/JobDescription?title=${encodeURIComponent(
                      job.title
                    )}&location=${encodeURIComponent(job.location)}`}
                    passHref
                  >
                    <div className="border rounded-lg p-4 shadow-sm transition-all duration-300 hover:scale-90 hover:outline hover:outline-gray-400 cursor-pointer">
                      <p className="text-sm text-gray-500 uppercase">
                        {job.location}
                      </p>
                      <h4 className="text-lg font-medium mt-1">{job.title}</h4>
                      <p className="text-sm text-gray-500">Full Time</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="flex flex-col md:flex-row bg-white border shadow-md border-gray-500 p-4 rounded-md justify-evenly">
            <div>
              <div className="text-4xl font-bold p-6">
                Don't see the role you're interested in?
              </div>
              <div className="p-4">
                We're always looking for talented people to join our team. Send
                us your CV and <br /> we will contact you for any future roles.
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button>
                <a
                  href="mailto:HexTech.official@gmail.com?subject=CV%20Application%20for%20Future%20Roles&body=Hello%20HexTech%20Team%2C%0A%0AI'm%20interested%20in%20working%20with%20your%20company.%20Please%20find%20my%20CV%20attached%20to%20this%20email.%0A%0AThank%20you%20for%20considering%20my%20application.%0A%0ABest%20regards"
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
                    Send Your CV
                  </span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
