"use client";

import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { type SurveyCategory } from "@/lib/survey-categories";

interface CategoryCardProps {
  category: SurveyCategory;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/surveys/${category.slug}`}>
      <Card className="group relative overflow-hidden p-6 hover:shadow-xl transition-all duration-300 cursor-pointer h-full border-neutral-200/60 hover:border-primary/20 bg-gradient-to-br from-white to-neutral-50/50">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative flex items-start space-x-4">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-3 rounded-xl transform group-hover:scale-110 transition-transform duration-300">
            <category.icon className="h-6 w-6 text-primary" />
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
              <ArrowRight className="h-5 w-5 text-primary transform group-hover:translate-x-1 transition-transform duration-200" />
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
