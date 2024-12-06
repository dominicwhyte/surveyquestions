import { BlogCard } from "@/components/blog/BlogCard";
import { blogPosts } from "@/lib/blog-posts";
import { authors } from "@/lib/authors";
import Head from "next/head";

export default function BlogIndex() {
  return (
    <>
      <Head>
        <title>Survey Best Practices Blog | Expert Tips & Guides</title>
        <meta
          name="description"
          content="Learn survey best practices, methodology, and tips from industry experts. Comprehensive guides on creating effective surveys and analyzing results."
        />
      </Head>

      <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-50 via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
              Survey Best Practices
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert insights and guides to help you create more effective
              surveys, increase response rates, and gather better data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard
                key={post.slug}
                post={post}
                author={authors[post.author as any]}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
