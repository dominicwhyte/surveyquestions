"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, Clock, Tag } from "lucide-react";
import { type BlogPost } from "@/lib/blog-posts";
import { type Author } from "@/lib/authors";
import { Info } from "lucide-react";
import ReactMarkdown from 'react-markdown';

interface BlogContentProps {
  post: BlogPost;
  author: Author;
}

export function BlogContent({ post, author }: BlogContentProps) {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base/7 text-gray-700">
        <div className="flex items-center gap-4 mb-8">
          <Image
            src={author.image}
            alt={author.name}
            width={48}
            height={48}
            className="rounded-full"
          />
          <div>
            <p className="font-medium text-gray-900">{author.name}</p>
            <p className="text-sm text-gray-600">{author.role}</p>
          </div>
        </div>
        
        <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          {post.title}
        </h1>
        
        <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {new Date(post.date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {post.readingTime}
          </span>
        </div>
        
        <p className="mt-8 text-xl/8 text-gray-600">{post.description}</p>

        <div className="mt-10 max-w-2xl">
          <div className="prose prose-gray max-w-none prose-headings:scroll-mt-20">
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-8 mt-16">{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mt-16 mb-6">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-2xl font-semibold tracking-tight text-gray-900 mt-12 mb-4">{children}</h3>
                ),
                p: ({ children }) => (
                  <p className="text-gray-600 leading-7 mb-6">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-600">{children}</ol>
                ),
                li: ({ children }) => (
                  <li className="leading-7">{children}</li>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-primary pl-4 italic my-6 text-gray-700">{children}</blockquote>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          <div className="mt-16 max-w-2xl">
            <h2 className="text-pretty text-2xl font-semibold tracking-tight text-gray-900">
              About the Author
            </h2>
            <div className="mt-6 flex items-start gap-4">
              <Image
                src={author.image}
                alt={author.name}
                width={64}
                height={64}
                className="rounded-full"
              />
              <div>
                <p className="text-gray-600 leading-7">{author.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}