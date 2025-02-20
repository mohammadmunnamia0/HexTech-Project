export default function AvailablePositions() {
  const positions = [
    {
      category: "Intern",
      jobs: [
        { location: "Dhaka", title: "UI/UX" },
        { location: "Uttara,Dhaka", title: "Software Tester" },
        { location: "Remote", title: "Senior Software Developer" },
        { location: "Uttara,Dhaka", title: "Product Manager" },
        { location: "Uttara,Dhaka", title: "React Developer" },
        { location: "Remote", title: "Full-Stack Developer" },
        { location: "Uttara,Dhaka", title: "Sr. Software Tester" },
      ],
    },
    {
      category: "Development",
      jobs: [
        { location: "Uttara,Dhaka", title: "Software Tester" },
        { location: "Remote", title: "Senior Software Developer" },
        { location: "Uttara,Dhaka", title: "Product Manager" },
        { location: "Uttara,Dhaka", title: "React Developer" },
        { location: "Remote", title: "Full-Stack Developer" },
        { location: "Uttara,Dhaka", title: "Sr. Software Tester" },
      ],
    },
    {
      category: "Designing",
      jobs: [{ location: "Dhaka", title: "UI/UX" }],
    },
  ];

  return (
    <div className="container lg:mt-32 mt-10 py-24 px-9 sm:px-6 lg:px-8 mb-8 ">
      <div className="mt-7">
        <div className="text-center">
          <div className="text-4xl font-bold p-6">
            Unlock new career <br /> opportunities at ReturnHex
          </div>
          <div className="p-4">
            embraces a youthful and flexible spirit, enabling us to swiftly
            adapt to market research, conditions, and customer demands through
            our advanced technology.
          </div>
        </div>
        <h2 className="text-3xl font-bold mb-6">Available positions</h2>
        {positions.map((section) => (
          <div key={section.category} className="mb-8">
            <h3 className="text-xl font-semibold mb-4">{section.category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
              {section.jobs.map((job, index) => (
                <div key={index} className="border rounded-lg p-4 shadow-sm transition-all duration-300 hover:scale-90 ">
                  <p className="text-sm text-gray-500 uppercase">
                    {job.location}
                  </p>
                  <h4 className="text-lg font-medium mt-1">{job.title}</h4>
                  <p className="text-sm text-gray-500">Full Time</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className="flex bg-white border shadow-md border-gray-500 p-4 rounded-md justify-evenly">
          <div>
            <div className="text-4xl font-bold p-6">
              Don't see the role you're interested in?
            </div>
            <div className="p-4">
              We’re always looking for talented people to join our team. Send us
              your CV and <br /> we will contact you for any future roles.
            </div>
          </div>
          <div className="flex items-center justify-center">
            <a
              href="#_"
              className="relative inline-flex items-center justify-center h-12 px-6 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-lg shadow-purple-300/50 group"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-grey-900 duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-gray-500 transition-all duration-300 transform group-hover:translate-x-full ease p-4">
                Send Your Cv
              </span>
              <span className="relative invisible p-4">Send Your Cv</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
