import { GetStaticProps, GetStaticPaths } from "next";
import { BlogContent } from "@/components/blog/BlogContent";
import { blogPosts, type BlogPost } from "@/lib/blog-posts";
import { authors, type Author } from "@/lib/authors";
import Head from "next/head";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface BlogPostPageProps {
  post: BlogPost;
  author: Author;
}

interface BlogPostPageProps {
  post: BlogPost;
  author: Author;
}

export default function BlogPostPage({ post, author }: BlogPostPageProps) {
  return (
    <>
      <Head>
        <title>{post.title} | Survey Best Practices</title>
        <meta name="description" content={post.description} />
      </Head>
      <div className="min-h-screen bg-white relative">
        <div className="fixed top-20 left-4 z-10">
          <Link href="/blog">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
        <BlogContent post={post} author={author} />
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = blogPosts.find((p) => p.slug === params?.slug);
  if (!post) {
    return {
      notFound: true,
    };
  }

  const author = authors[post.author];

  return {
    props: {
      post,
      author,
    },
  };
};