"use client";

import { blogPosts } from "@/app/Blog/blogData";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BsCalendar3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";

export default function Blog() {
  const router = useRouter();

  // Get the featured posts and the rest of the posts
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  // State to control how many posts to display
  const [visiblePosts, setVisiblePosts] = useState(8);

  // Load more posts handler
  const handleLoadMore = () => {
    setVisiblePosts((prevVisible) => prevVisible + 8);
  };

  // Navigate to blog post
  const navigateToBlogPost = (slug, e) => {
    // Don't navigate if the click was on the Read more/article link
    if (
      e.target.tagName.toLowerCase() === "a" ||
      e.target.parentElement.tagName.toLowerCase() === "a" ||
      e.target.parentElement.parentElement.tagName.toLowerCase() === "a"
    ) {
      return;
    }
    router.push(`/blog/${slug}`);
  };

  // Get the currently visible posts
  const postsToDisplay = regularPosts.slice(0, visiblePosts);

  // Check if all posts are displayed
  const allPostsLoaded = visiblePosts >= regularPosts.length;
  return (
    <section>
      <div className="dark:bg-gray-100 dark:text-gray-800 mx-auto py-16 md:py-24 lg:py-32">
        <div>
          <div className="container max-w-6xl p-6 mx-auto space-y-12">
            {/* Featured Post */}
            {featuredPost && (
              <div
                className="block max-w-sm gap-3 mx-auto sm:max-w-full lg:grid lg:grid-cols-12 dark:bg-gray-50 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.01] cursor-pointer"
                data-aos="fade-up"
                data-aos-duration="1500"
                onClick={(e) => navigateToBlogPost(featuredPost.slug, e)}
              >
                <div className="relative w-full h-64 sm:h-96 lg:col-span-7 dark:bg-gray-500">
                  <Image
                    src={featuredPost.imageUrl}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 space-y-4 lg:col-span-5">
                  <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {featuredPost.category}
                  </span>
                  <h3 className="text-2xl font-semibold sm:text-4xl">
                    {featuredPost.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <FaRegUser size={14} />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BsCalendar3 size={14} />
                      <span>{featuredPost.date}</span>
                    </div>
                  </div>
                  <p className="text-gray-600">{featuredPost.excerpt}</p>
                  <div className="pt-2">
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center text-blue-600 hover:underline"
                    >
                      Read more <span className="ml-1">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Regular Posts Grid */}
            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {postsToDisplay.map((post, index) => (
                <div
                  key={post.id}
                  className="max-w-sm mx-auto dark:bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-[1.02] cursor-pointer"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay={index * 100}
                  onClick={(e) => navigateToBlogPost(post.slug, e)}
                >
                  <div className="relative w-full h-48">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-semibold">{post.title}</h3>
                    <div className="flex items-center gap-4 text-xs text-gray-600">
                      <div className="flex items-center gap-1">
                        <FaRegUser size={12} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BsCalendar3 size={12} />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="pt-2">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-sm text-blue-600 hover:underline"
                      >
                        Read article <span className="ml-1">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button - Only show if there are more posts to load */}
            {!allPostsLoaded && (
              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={handleLoadMore}
                  className="px-6 py-3 text-sm rounded-md hover:bg-gray-200 transition-colors dark:bg-gray-50 dark:text-gray-600 border border-gray-300"
                >
                  Load more posts...
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
