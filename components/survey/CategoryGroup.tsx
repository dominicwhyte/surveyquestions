"use client";

import { motion } from "framer-motion";
import { SurveyCategory } from "@/lib/survey-categories";
import { CategoryCard } from "./CategoryCard";

interface CategoryGroupProps {
  name: string;
  description: string;
  color: string;
  categories: SurveyCategory[];
  index: number;
}

const colors = {
  blue: "bg-blue-50 text-blue-700 border-blue-200",
  purple: "bg-purple-50 text-purple-700 border-purple-200",
  amber: "bg-amber-50 text-amber-700 border-amber-200",
  emerald: "bg-emerald-50 text-emerald-700 border-emerald-200",
  rose: "bg-rose-50 text-rose-700 border-rose-200",
  cyan: "bg-cyan-50 text-cyan-700 border-cyan-200",
  gray: "bg-gray-50 text-gray-700 border-gray-200",
};

export function CategoryGroup({ name, description, color, categories, index }: CategoryGroupProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-12"
    >
      <div className="mb-6">
        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 border ${colors[color as keyof typeof colors]}`}>
          {name}
        </span>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <CategoryCard key={category.slug} category={category} groupColor={color} />
        ))}
      </div>
    </motion.section>
  );
}