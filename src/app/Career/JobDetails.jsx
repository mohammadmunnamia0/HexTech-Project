const JobDetails = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            Product Designer - UI/UX
          </h2>
          <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300">
            I'm interested
          </button>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800">
            Company Description
          </h3>
          <p className="text-gray-600 mt-2">
            Founded in 2020, HexTech is a humble organisation home to a bunch of
            passionate people. With our core focus being empowering Startups
            with efficient technology solutions, we are experts in making our
            clients' lives easier, and delivering the best software products in
            the market. Our reputation is built on serving them with confidence,
            convenience, and collaboration.
          </p>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800">
            Job Description
          </h3>
          <ul className="list-disc pl-5 mt-2 text-gray-600">
            <li>Design web and mobile apps</li>
            <li>
              Conduct user research and usability testing to ensure all designs
              meet client and user requirements
            </li>
            <li>
              Analyze research and feedback to gain user insights and
              incorporate them into new designs
            </li>
            <li>
              Produce wireframes, prototypes, concept sketches, interaction
              designs, and user flows
            </li>
            <li>
              Work with developers and designers to build responsive and
              performant mobile apps
            </li>
            <li>Perform validation testing to determine product performance</li>
            <li>
              Identify and troubleshoot UX challenges for existing and upcoming
              projects
            </li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800">
            Qualifications
          </h3>
          <ul className="list-disc pl-5 mt-2 text-gray-600">
            <li>
              Proven work experience of at least 3 years as a UI/UX Designer or
              similar role
            </li>
            <li>
              Experience with maintaining industry standards and best practices
              for designing both desktop and mobile applications
            </li>
            <li>Experience in wireframing tools (e.g., Figma, InVision)</li>
            <li>
              Up-to-date knowledge of design software like Adobe XD, Figma,
              Sketch
            </li>
            <li>Portfolio of UX design projects</li>
            <li>Outstanding cross-functional team collaboration skills</li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800">
            Additional Information
          </h3>
          <ul className="list-disc pl-5 mt-2 text-gray-600">
            <li>Salary Range: As per company policy for Level 3 - Level 5</li>
            <li>Fully subsidized lunch</li>
            <li>Sports break in the afternoon</li>
            <li>
              Company-backed tours, hangouts, eat-outs, day-outs, and many more
            </li>
            <li>Location: HexTech, Uttara, Dhaka</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
