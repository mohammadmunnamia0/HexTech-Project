import { blogPosts } from "@/app/blog/blogData";
import Image from "next/image";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";
import { BsCalendar3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { IoBookmarksOutline } from "react-icons/io5";

export default function Blog() {
  // Use the real blog data now
  const featuredPosts = blogPosts.filter((post) => post.featured);
  // Get the 2 most recent non-featured posts
  const recentPosts = blogPosts.filter((post) => !post.featured).slice(0, 2);

  return (
    <div className="min-h-screen bg-white lg:py-32 py-10">
      <div className="container mx-auto px-4">
        <div
          className="text-left mb-0"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Insights & Innovations Blogs by HexTech
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mb-16">
            Explore our blog for valuable tips, case studies, and technology
            updates designed to help your business grow and succeed.
          </p>
        </div>

        {/* Featured Article */}
        {featuredPosts.map((post) => (
          <div
            key={post.id}
            className="mb-16"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <div className="relative bg-gradient-to-r from-gray-100 to-gray-200 rounded-3xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12 relative">
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="bg-black text-white px-4 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                    <span className="text-gray-600 flex items-center gap-2">
                      <IoBookmarksOutline size={16} /> Featured
                    </span>
                  </div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    {post.title}
                  </h1>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-6 mb-8 text-gray-600">
                    <div className="flex items-center gap-2">
                      <FaRegUser className="text-gray-900" size={20} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BsCalendar3 className="text-gray-900" size={20} />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-black font-medium bg-white px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-md"
                  >
                    Read full article
                    <BiRightArrowAlt className="ml-2" size={20} />
                  </Link>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      className="object-cover"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Recent Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {recentPosts.map((post, index) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay={index * 200}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaRegUser size={14} />
                    <span>{post.author}</span>
                  </div>
                  <span className="text-blue-600 font-medium inline-flex items-center">
                    Read more <BiRightArrowAlt className="ml-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center text-white font-medium bg-black px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors shadow-md"
          >
            View all blog posts
            <BiRightArrowAlt className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
