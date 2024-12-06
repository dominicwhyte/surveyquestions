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
      <Card className="p-6 hover:shadow-lg transition-shadow duration-200 cursor-pointer h-full">
        <div className="flex items-start space-x-4">
          <div className="bg-primary/10 p-3 rounded-lg">
            <category.icon className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {category.title}
            </h2>
            <p className="text-gray-600 mb-4">{category.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">{category.count}</span>
              <ArrowRight className="h-5 w-5 text-primary" />
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}