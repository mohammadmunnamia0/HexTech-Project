const WhyUs = () => {
  return (
    <div className="lg:32 mt-10 container">
      <div>
        <h2 className="text-5xl font-bold text-gray-900 text-center">Why Us</h2>
      </div>
      <section className="mx-auto flex max-w-lg flex-col px-4 py-10 lg:max-w-screen-xl lg:flex-row">
        <div className="max-w-md pr-20 flex justify-center items-center">
          {/* <img src="image_url_here" alt="Illustration" /> */}
          <h2 className="mb-10 max-w-lg text-4xl font-bold leading-snug lg:text-5xl lg:leading-snug">
            A <span className="text-gray-600">revolutionary</span> way to build
            websites
          </h2>
        </div>
        <div>
          <div className="grid gap-y-12 gap-x-8 lg:grid-cols-2 hover:translate-x-0">
            <div className="hover:translate-x-0 p-4 rounded-lg hover:shadow-2xl">
              <p className="mb-6 border-l-4 border-gray-600 pl-4 text-2xl leading-10">
                Launch Websites in Minutes
              </p>
              <p className="text-lg text-gray-800">
                Say goodbye to long development cycles. Our innovative tools and 
                streamlined workflows empower you to create, customize, and launch 
                websites in record time. Whether you're a seasoned developer or a 
                beginner, our platform eliminates unnecessary complexities, so you 
                can focus on what truly matters—building outstanding web experiences.
              </p>
            </div>
            <div className="hover:translate-x-0 p-4 rounded-lg hover:shadow-2xl">
              <p className="mb-6 border-l-4 border-gray-600 pl-4 text-2xl leading-10">
                Never Miss Deadlines
              </p>
              <p className="text-lg text-gray-800">
                Managing projects can be overwhelming, but we make it easier. Our 
                system integrates automation, pre-built components, and efficient 
                development strategies, allowing you to meet deadlines with confidence. 
                No more last-minute rush or unexpected delays—just seamless execution 
                from start to finish.
              </p>
            </div>
            <div className="hover:translate-x-0 p-4 rounded-lg hover:shadow-2xl">
              <p className="mb-6 border-l-4 border-gray-600 pl-4 text-2xl leading-10">
                Super Intuitive
              </p>
              <p className="text-lg text-gray-800">
                We believe that technology should work for you, not against you. 
                That’s why our platform is designed with simplicity and usability in mind. 
                Our intuitive interface and well-structured development environment 
                ensure that even the most complex tasks feel effortless. From drag-and-drop 
                features to real-time collaboration, everything is built to enhance your 
                workflow.
              </p>
            </div>
            <div className="hover:translate-x-0 p-4 rounded-lg hover:shadow-2xl">
              <p className="mb-6 border-l-4 border-gray-600 pl-4 text-2xl leading-10">
                Speedy Websites
              </p>
              <p className="text-lg text-gray-800">
                A slow website can cost you visitors and revenue. That’s why performance 
                is at the core of our technology. We leverage modern frameworks, optimized 
                code structures, and advanced caching techniques to ensure your websites 
                load at lightning speed. Whether it’s a personal blog or a large-scale 
                enterprise site, speed and efficiency are guaranteed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
