"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, Tag } from "lucide-react";
import { type BlogPost } from "@/lib/blog-posts";
import { type Author } from "@/lib/authors";

interface BlogCardProps {
  post: BlogPost;
  author: Author;
  index: number;
}

export function BlogCard({ post, author, index }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link href={`/blog/${post.slug}`}>
        <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
          <div className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={author.image}
                alt={author.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-medium text-gray-900">{author.name}</p>
                <p className="text-sm text-gray-600">{author.role}</p>
              </div>
            </div>
            
            <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
              {post.title}
            </h2>
            
            <p className="text-gray-600 mb-4 line-clamp-2">
              {post.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/5 text-primary"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex items-center text-sm text-gray-500 gap-4">
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {post.readingTime}
              </span>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}