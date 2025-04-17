import Link from "next/link";

const imgClasses =
  "rounded-xl duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom";

const images = [
  {
    src: "https://images.unsplash.com/photo-1530035415911-95194de4ebcc?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==",
    rotate: "rotate-6",
  },
  {
    src: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==",
    rotate: "-rotate-12",
  },
  {
    src: "https://images.unsplash.com/photo-1586996292898-71f4036c4e07?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==",
    rotate: "rotate-6",
  },
  {
    src: "https://images.unsplash.com/photo-1522775417749-29284fb89f43?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==",
    rotate: "-rotate-12",
  },
];

const Gallery2 = () => {
  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 h-svh flex flex-col justify-center">
        <div className="flex flex-col sm:flex-row mx-auto">
          {images.map((image, index) => (
            <Link href="#_" key={index}>
              <img
                src={image.src}
                className={`${imgClasses} ${image.rotate} hover:rotate-0`}
                alt={`Gallery Image ${index + 1}`}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery2;
