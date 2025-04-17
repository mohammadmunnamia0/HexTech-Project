"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import logo from "../../../../public/images/logo/Logo Style 3.svg";

export default function JobDescriptionPage() {
  const searchParams = useSearchParams();
  const [jobDetails, setJobDetails] = useState({
    title: "",
    location: "",
    type: "Full-time",
    company: "HexTech",
  });

  useEffect(() => {
    const title = searchParams.get("title") || "";
    const location = searchParams.get("location") || "";
    setJobDetails((prev) => ({ ...prev, title, location }));
  }, [searchParams]);

  // Other jobs at HexTech
  const otherJobs = [
    { title: "Product Designer - UI/UX", location: "Dhaka, Bangladesh" },
    { title: "Intern - Front-End", location: "Dhaka, Bangladesh" },
    { title: "Intern - Back-End", location: "Dhaka, Bangladesh" },
  ];

  // Similar jobs
  const similarJobs = [
    {
      title: "Senior UI/UX Designer: Web & Mobile (m/w/d)",
      location: "Dhaka, Bangladesh",
    },
    {
      title: "UX/UI Design Intern – Digital Experience Team",
      location: "Dhaka, Bangladesh",
    },
    {
      title:
        "Working Student in the field of UX/UI Design for Connected Car Web Apps",
      location: "Dhaka, Bangladesh",
    },
  ];

  // Job description details
  return (
    <main className="min-h-screen py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="flex items-start gap-4 mb-8">
            <div>
              <Image className="w-16 h-16" src={logo}></Image>
            </div>
            <div>
              <h1 className="text-2xl font-semibold">{jobDetails.title}</h1>
              <p className="text-gray-600">{jobDetails.location}</p>
              <p className="text-gray-600 mt-1">{jobDetails.type}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 mb-8">
            <Link
              href={`/career/EasyApply?title=${encodeURIComponent(
                jobDetails.title
              )}&location=${encodeURIComponent(jobDetails.location)}`}
              className="bg-emerald-600 text-white text-center px-6 py-2 rounded-md hover:bg-emerald-700 transition-colors"
            >
              I'm interested
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">
                Company Description
              </h2>
              <p className="text-gray-700 mb-4">
                Founded in 2020, HexTech is a humble organisation home to a
                bunch of passionate people. With our core focus being empowering
                Startups with efficient technology solutions, we are experts in
                making our clients' lives easier, and delivering the best
                software products in the market. Our reputation is built on
                serving them with confidence, convenience, and collaboration.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Job Description</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Design web and mobile app(s)</li>
                <li>
                  Conduct user research and usability testing to ensure all
                  designs meet client and user requirements
                </li>
                <li>
                  Analyze user research and feedback to gain user insight and
                  incorporate them into new designs
                </li>
                <li>
                  Produce wireframes, prototypes, concept sketches, interaction
                  designs, and user flows
                </li>
                <li>Able to develop design rationale and specifications</li>
                <li>
                  Work with developers and designers to build user-friendly
                  mobile apps
                </li>
                <li>
                  Perform validation usability testing to determine product
                  performance
                </li>
                <li>
                  Identify and troubleshoot UX challenges for existing and
                  upcoming projects
                </li>
                <li>
                  Ensure responsive web practices across Google Material Design,
                  and Apple Human Interface Design
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Qualifications</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  Proven work experience of at least 3 years as a UI/UX Designer
                  or similar role
                </li>
                <li>
                  Experience with maintaining industry standards and best
                  practices for designing both desktop and mobile applications
                </li>
                <li>Experience of wireframing tools (e.g. Figma, InVision)</li>
                <li>
                  Up-to-date knowledge of design software's like (e.g. Adobe XD,
                  Figma, Sketch)
                </li>
                <li>Portfolio of UX design projects</li>
                <li>Outstanding cross-functional team collaboration skills</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">
                Additional Information
              </h2>
              <h3 className="font-medium mb-2">Additional Requirements</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                <li>
                  Experience in user research and usability testing would be a
                  bonus
                </li>
                <li>BSc in Design, Computer Science is a bonus</li>
              </ul>

              <h3 className="font-medium mb-2">Additional Information</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  Salary Range: As per company policy for Level 3 - Level 5
                </li>
                <li>Fully subsidized Lunch</li>
                <li>Sports break in the afternoon</li>
                <li>
                  Company-backed tours, hangouts, eat-outs, day-outs and many
                  more
                </li>
                <li>Job Location: HexTech, Banani, Dhaka</li>
              </ul>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="border rounded-lg p-6 mb-8">
              <h2 className="text-lg font-bold mb-4 uppercase">
                SHARE THIS JOB
              </h2>
              <div className="flex gap-3 mb-6">
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    typeof window !== "undefined" ? window.location.href : ""
                  )}&title=${encodeURIComponent(
                    `Job Opening: ${jobDetails.title} at ${jobDetails.company}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 rounded-md hover:bg-gray-200 text-black"
                  aria-label="Share on LinkedIn"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    `Job Opening: ${jobDetails.title} at ${jobDetails.company}`
                  )}&url=${encodeURIComponent(
                    typeof window !== "undefined" ? window.location.href : ""
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 rounded-md hover:bg-gray-200 text-black"
                  aria-label="Share on Twitter"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    typeof window !== "undefined" ? window.location.href : ""
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 rounded-md hover:bg-gray-200 text-black"
                  aria-label="Share on Facebook"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z" />
                  </svg>
                </a>
                <a
                  href={`mailto:?subject=${encodeURIComponent(
                    `Job Opening: ${jobDetails.title} at ${jobDetails.company}`
                  )}&body=${encodeURIComponent(
                    `Check out this job posting for ${jobDetails.title} at ${
                      jobDetails.company
                    } in ${jobDetails.location}: ${
                      typeof window !== "undefined" ? window.location.href : ""
                    }`
                  )}`}
                  className="p-2 bg-gray-100 rounded-md hover:bg-gray-200 text-black"
                  aria-label="Share via Email"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                  </svg>
                </a>
              </div>

              <h2 className="text-lg font-bold mb-4 uppercase">
                OTHER JOBS AT HexTech
              </h2>
              <div className="space-y-3">
                {otherJobs.map((job, index) => (
                  <div key={index}>
                    <Link
                      href={`/career/JobDescription?title=${encodeURIComponent(
                        job.title
                      )}&location=${encodeURIComponent(job.location)}`}
                      className="text-blue-600 hover:underline"
                    >
                      {job.title}
                    </Link>
                    <p className="text-sm text-gray-600">{job.location}</p>
                  </div>
                ))}
                <div>
                  <Link
                    href="/career"
                    className="text-blue-600 hover:underline"
                  >
                    Show all jobs
                  </Link>
                </div>
              </div>

              <h2 className="text-lg font-bold mb-4 mt-8 uppercase">
                SIMILAR JOBS
              </h2>
              <div className="space-y-3">
                {similarJobs.map((job, index) => (
                  <div key={index}>
                    <Link
                      href={`/career/JobDescription?title=${encodeURIComponent(
                        job.title
                      )}&location=${encodeURIComponent(job.location)}`}
                      className="text-blue-600 hover:underline"
                    >
                      {job.title}
                    </Link>
                    <p className="text-sm text-gray-600">{job.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
