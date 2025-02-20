import Image from "next/image";
import img from "@/assets/icon/blog.jpg";
import { BiRightArrowAlt } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { IoBookmarksOutline } from "react-icons/io5";
import { BsCalendar3 } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title:
      "The Future of Digital Innovation: Transforming Industries Through Technology",
    excerpt:
      "Exploring cutting-edge technologies that are revolutionizing industries and shaping our tomorrow. Discover how AI, blockchain, and IoT are creating new possibilities.",
    author: "Sarah Johnson",
    date: "April 15, 2024",
    readTime: "5 min read",
    imageUrl: img,
    category: "Technology",
    featured: true,
  },
  {
    id: 2,
    title: "Sustainable Business Practices in the Modern Era",
    excerpt:
      "How forward-thinking companies are adapting their strategies to meet environmental challenges while maintaining profitability and growth.",
    author: "Michael Chen",
    date: "April 14, 2024",
    readTime: "4 min read",
    imageUrl: img,
    category: "Business",
    featured: false,
  },
  {
    id: 3,
    title: "Building Strong Team Culture in Remote Workplaces",
    excerpt:
      "Creating an environment where innovation thrives in the age of distributed teams and virtual collaboration.",
    author: "Emma Davis",
    date: "April 13, 2024",
    readTime: "6 min read",
    imageUrl: img,
    category: "Leadership",
    featured: false,
  },
];


export default function Blog() {
  const featuredPosts = blogPosts.filter((post) => post.featured);
  const recentPosts = blogPosts.filter((post) => !post.featured);
  return (
    <div className="min-h-screen bg-white lg:mt-32 mt-10">
      <div className="container mx-auto px-4">
        {/* Featured Article */}
        {featuredPosts
          .map((post) => (
            <div key={post.id} className="mb-20">
              <div className="relative bg-gradient-to-r from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/5 to-gray-900/10" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12 relative">
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-8">
                      <span className="bg-black text-white px-4 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                      <span className="text-gray-600 flex items-center gap-2">
                        <IoBookmarksOutline size={16} />
                        Featured
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
                    <Link href="#_" class="self-start relative inline-flex items-center justify-center px-10 py-4 overflow-hidden  font-medium text-white bg-gray-800 group">
                      <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-black group-hover:w-56 group-hover:h-56"></span>
                      <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                      <span class="relative flex">Read Article
                        <BiRightArrowAlt
                          size={18}
                          className="mt-1 group-hover:translate-x-1 transition-transform"
                        />
                      </span>
                    </Link>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden shadow-lg">
                    <div className="aspect-[4/3]">
                      <Image
                        src={post.imageUrl}
                        alt={post.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}


        {/* Recent Articles Grid */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-gray-900">Recent Articles</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {recentPosts
              .map((post) => (
                <div
                  key={post.id}
                  className="group relative bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-2/5 relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent z-10" />
                      <Image
                        src={post.imageUrl}
                        alt="img"
                        className="absolute inset-0 w-full h-full object-cover"
                      />  
                      <span className="absolute lg:top-4 left-4 z-20 bg-black text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>
                    <div className="md:w-3/5 p-6 flex flex-col justify-between bg-white">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-black transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                      </div>
                      <div>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                          <div className="flex items-center gap-1">
                            <FaRegUser size={16} className="text-gray-900" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FaRegClock size={16} className="text-gray-900" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <Link
                          href="#"
                          className="group inline-flex items-center gap-2 text-gray-900 font-semibold transition-all duration-300 hover:text-black"
                        >
                          Read More
                          <BiRightArrowAlt
                            size={18}
                            className="transform group-hover:translate-x-2 transition-transform mt-1"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}



