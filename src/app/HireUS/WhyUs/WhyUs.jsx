const WhyUs = () => {
  return (
    <div className="container">
      <div>
        <h2 className="text-5xl font-bold text-gray-900 text-center">Why Us</h2>
      </div>
      <section className="mx-auto flex max-w-lg flex-col px-4 py-10 lg:max-w-screen-xl lg:flex-row">
        <div className="max-w-md pr-20 flex justify-center items-center">
          {/* <img src="https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/601074ed0f05cd25097215a4_6002086f72b7277e1f01d682_ryan-morrison-illustration-1.png" alt="" /> */}
          <h2 className="mb-10 max-w-lg text-4xl font-bold leading-snug lg:text-5xl lg:leading-snug">
            A <span className="text-gray-600">revolutionary</span> way to build
            websites
          </h2>
        </div>
        <div>
          <div className="grid gap-y-12 gap-x-8 lg:grid-cols-2 hover:translate-x-0">
            <div className="hover:translate-x-0 hover:shadow-md">
              <p className="mb-6 border-l-4 border-gray-600 pl-4 text-2xl leading-10">
                Launch Websites in minutes
              </p>
              <p className="text-lg text-gray-800">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
                nihil reprehenderit laboriosam, exercitationem consectetur
                deserunt aliquam ab maiores!
              </p>
            </div>
            <div>
              <p className="mb-6 border-l-4 border-gray-600 pl-4 text-2xl leading-10">
                Never miss deadlines
              </p>
              <p className="text-lg text-gray-800">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
                nihil reprehenderit laboriosam, exercitationem consectetur
                deserunt aliquam ab maiores!
              </p>
            </div>
            <div>
              <p className="mb-6 border-l-4 border-gray-600 pl-4 text-2xl leading-10">
                Super Intuitive
              </p>
              <p className="text-lg text-gray-800">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
                nihil reprehenderit laboriosam, exercitationem consectetur
                deserunt aliquam ab maiores!
              </p>
            </div>
            <div>
              <p className="mb-6 border-l-4 border-gray-600 pl-4 text-2xl leading-10">
                Speedy Websites
              </p>
              <p className="text-lg text-gray-800">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
                nihil reprehenderit laboriosam, exercitationem consectetur
                deserunt aliquam ab maiores!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
