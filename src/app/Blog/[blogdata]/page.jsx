import { blogPosts } from "@/app/blog/blogData";
import { generateDynamicMetadataHandler } from "@/helpers/generateDynamicMetadataHandler";
import Image from "next/image";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import { BsCalendar3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import ShareButtons from "./ShareButtons";

// Dynamic metadata generation function
export async function generateMetadata({ params }) {
  const { blogdata } = await params;
  const url = "http://localhost:3000/blog/";
  const redirect_url = `${url}/${blogdata}`;

  const result = await generateDynamicMetadataHandler({
    redirect_url,
    title: `${blogdata}`,
  });

  return result;
}
// Generate static paths for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    blogdata: post.slug,
  }));
}

const BlogPost = async ({ params }) => {
  const { blogdata } = await params;

  // Find the blog post by slug
  const post = blogPosts.find((post) => post.slug === blogdata);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-4xl font-bold mb-6">Blog post not found</h1>
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-600 hover:underline"
        >
          <BiArrowBack className="mr-2" /> Back to all blogs
        </Link>
      </div>
    );
  }

  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="py-8 md:py-16 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:underline mb-8"
          >
            <BiArrowBack className="mr-2" /> Back to all blogs
          </Link>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-600">
            <div className="flex items-center gap-2">
              <FaRegUser className="text-gray-900" size={20} />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <BsCalendar3 className="text-gray-900" size={20} />
              <span>{post.date}</span>
            </div>
            <span className="bg-black text-white px-4 py-1 rounded-full text-sm font-semibold">
              {post.category}
            </span>
            {post.readTime && (
              <span className="text-gray-600">{post.readTime}</span>
            )}
          </div>

          <div className="relative rounded-xl overflow-hidden mb-10 w-full h-[400px]">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 900px"
            />
          </div>

          <div className="prose dark:prose-dark max-w-none">
            <p className="text-xl mb-8 font-medium leading-relaxed text-gray-700">
              {post.excerpt}
            </p>

            <div className="blog-content space-y-6">
              {post.content && post.content.length > 0 ? (
                post.content.map((contentBlock, index) => {
                  if (contentBlock.type === "paragraph") {
                    return (
                      <p
                        key={index}
                        className="mb-6 text-lg leading-relaxed text-gray-800"
                      >
                        {contentBlock.text}
                      </p>
                    );
                  } else if (contentBlock.type === "heading") {
                    return (
                      <h2
                        key={index}
                        className="text-2xl font-bold mt-12 mb-6 text-gray-900"
                      >
                        {contentBlock.text}
                      </h2>
                    );
                  } else if (contentBlock.type === "image") {
                    return (
                      <div
                        key={index}
                        className="my-10 relative w-full h-[350px] rounded-xl overflow-hidden"
                      >
                        <Image
                          src={contentBlock.src}
                          alt={contentBlock.alt || "Blog image"}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 900px"
                        />
                        {contentBlock.caption && (
                          <p className="text-center text-sm text-gray-600 mt-3 italic">
                            {contentBlock.caption}
                          </p>
                        )}
                      </div>
                    );
                  } else if (contentBlock.type === "list") {
                    return (
                      <ul key={index} className="list-disc pl-6 mb-6 space-y-2">
                        {contentBlock.items.map((item, i) => (
                          <li key={i} className="text-lg text-gray-800">
                            {item}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return null;
                })
              ) : (
                <p className="text-gray-600">
                  No additional content available for this post.
                </p>
              )}
            </div>
          </div>

          <div className="border-t border-gray-200 mt-16 pt-8">
            <h3 className="text-xl font-bold mb-4">Share this article</h3>
            <div className="flex gap-4">
              <div className="flex gap-4">
                <ShareButtons title={post.title} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
