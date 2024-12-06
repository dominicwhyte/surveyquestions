"use client";

import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { type SurveyCategory } from "@/lib/survey-categories";

interface CategoryCardProps {
  category: SurveyCategory;
  groupColor?: string;
}

const colors = {
  blue: "from-blue-500/5 to-blue-500/0 hover:border-blue-200/60 [&_svg]:text-blue-500",
  purple: "from-purple-500/5 to-purple-500/0 hover:border-purple-200/60 [&_svg]:text-purple-500",
  amber: "from-amber-500/5 to-amber-500/0 hover:border-amber-200/60 [&_svg]:text-amber-500",
  emerald: "from-emerald-500/5 to-emerald-500/0 hover:border-emerald-200/60 [&_svg]:text-emerald-500",
  rose: "from-rose-500/5 to-rose-500/0 hover:border-rose-200/60 [&_svg]:text-rose-500",
  cyan: "from-cyan-500/5 to-cyan-500/0 hover:border-cyan-200/60 [&_svg]:text-cyan-500",
  gray: "from-gray-500/5 to-gray-500/0 hover:border-gray-200/60 [&_svg]:text-gray-500",
};

export function CategoryCard({ category, groupColor = "gray" }: CategoryCardProps) {
  const colorClasses = colors[groupColor as keyof typeof colors];

  return (
    <Link href={`/surveys/${category.slug}`}>
      <Card className={`group relative overflow-hidden p-6 hover:shadow-xl transition-all duration-300 cursor-pointer h-full border-neutral-200/60 bg-gradient-to-br ${colorClasses}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative flex items-start space-x-4">
          <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl transform group-hover:scale-110 transition-transform duration-300">
            <category.icon className="h-6 w-6" />
          </div>
          <div className="flex-1 space-y-2">
            <h2 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-200">
              {category.title}
            </h2>
            <p className="text-gray-600 line-clamp-2">{category.description}</p>
            <div className="flex items-center justify-between pt-2">
              <span className="text-sm font-medium text-gray-500">
                {category.count}
              </span>
              <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-200" />
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}