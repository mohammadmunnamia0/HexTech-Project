import React from "react";

const Page = () => {
  return (
    <div>
      <section className="dark:bg-gray-100 dark:text-gray-800 mx-auto">
        <div>
          <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
            <a
              rel="noopener noreferrer"
              href="#"
              className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
            >
              <img
                src="https://source.unsplash.com/featured/?technology,ai"
                alt="AI Breakthrough"
                className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
              />
              <div className="p-6 space-y-2 lg:col-span-5">
                <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                  AI Breakthrough: New Model Surpasses Human-Level Understanding
                </h3>
                <span className="text-xs dark:text-gray-600">February 12, 2025</span>
                <p>
                  A revolutionary AI model developed by leading researchers is now capable of processing and understanding complex data at an unprecedented level, paving the way for new applications in various industries.
                </p>
              </div>
            </a>
            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Quantum Computing Advances: IBM Unveils 2000-Qubit Processor",
                  date: "February 10, 2025",
                  img: "https://source.unsplash.com/featured/?quantum,computer",
                },
                {
                  title: "Tesla Announces Next-Gen Battery Technology",
                  date: "February 8, 2025",
                  img: "https://source.unsplash.com/featured/?electric,car",
                },
                {
                  title: "Meta Introduces AR Glasses With Mind-Control Interface",
                  date: "February 6, 2025",
                  img: "https://source.unsplash.com/featured/?augmented,reality",
                },
                {
                  title: "Google’s AI Search Redefines Internet Browsing",
                  date: "February 4, 2025",
                  img: "https://source.unsplash.com/featured/?search,engine",
                },
                {
                  title: "Apple’s Foldable iPhone Rumored for Late 2025 Release",
                  date: "February 2, 2025",
                  img: "https://source.unsplash.com/featured/?smartphone,foldable",
                },
                {
                  title: "SpaceX Plans First Civilian Moon Mission in 2026",
                  date: "January 30, 2025",
                  img: "https://source.unsplash.com/featured/?space,rocket",
                },
              ].map((news, index) => (
                <a
                  key={index}
                  rel="noopener noreferrer"
                  href="#"
                  className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
                >
                  <img
                    role="presentation"
                    className="object-cover w-full rounded h-44 dark:bg-gray-500"
                    src={news.img}
                    alt={news.title}
                  />
                  <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                      {news.title}
                    </h3>
                    <span className="text-xs dark:text-gray-600">{news.date}</span>
                    <p>
                      Read more about the latest developments in technology that are shaping the future and changing the world.
                    </p>
                  </div>
                </a>
              ))}
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600"
              >
                Load more posts...
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
