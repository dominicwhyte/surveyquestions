"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TableOfContentsProps {
  content: string;
}

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [headings, setHeadings] = useState<TOCItem[]>([]);

  useEffect(() => {
    // Extract headings from markdown content
    const matches = content.match(/#{2,3}\s+(.+)/g) || [];
    const items = matches.map((heading) => {
      const level = (heading.match(/#{2,3}/)?.[0]?.length ?? 2) - 1;
      const text = heading.replace(/#{2,3}\s+/, "");
      const id = text.toLowerCase().replace(/[^\w]+/g, "-");
      return { id, text, level };
    });
    setHeadings(items);
  }, [content]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -80% 0px" }
    );

    document.querySelectorAll("h2, h3").forEach((heading) => {
      observer.observe(heading);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-auto"
    >
      <h4 className="font-semibold text-gray-900 mb-4">Table of Contents</h4>
      <ul className="space-y-3 text-sm">
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{ paddingLeft: `${(heading.level - 2) * 1}rem` }}
          >
            <a
              href={`#${heading.id}`}
              className={`block text-gray-600 hover:text-primary transition-colors ${
                activeId === heading.id ? "text-primary font-medium" : ""
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
