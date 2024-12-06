"use client";

import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import { QuestionCard } from "@/components/survey/QuestionCard";
import { FilloutCTA } from "@/components/survey/FilloutCTA";
import { CategoryDescription } from "@/components/survey/CategoryDescription";
import { allQuestions, getRandomQuestions } from "@/lib/questions";
import { surveyCategories, type SurveyCategorySlug } from "@/lib/survey-categories";
import { formatSlug } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Home, RefreshCw } from "lucide-react";
import { useState } from 'react';

interface SurveyQuestionsPageProps {
  initialQuestions: string[];
  categoryTitle: string;
  categorySlug: string;
  metaTitle: string;
  metaDescription: string;
}

export default function SurveyQuestionsPage({ 
  initialQuestions, 
  categoryTitle, 
  categorySlug,
  metaTitle,
  metaDescription
}: SurveyQuestionsPageProps) {
  const [questions, setQuestions] = useState(initialQuestions);
  const [isRegenerating, setIsRegenerating] = useState(false);

  const regenerateQuestions = () => {
    setIsRegenerating(true);
    const newQuestions = getRandomQuestions(categorySlug);
    setQuestions(newQuestions);
    setTimeout(() => setIsRegenerating(false), 500);
  };

  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Category not found</h1>
          <p className="text-gray-600">The requested survey category does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Head>
      <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-50 via-gray-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-6">
            <Link href="/" className="inline-flex items-center text-sm text-gray-600 hover:text-primary transition-colors mb-4">
              <Home className="h-4 w-4 mr-2" />
              Back to categories
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{categoryTitle}</h1>
            <CategoryDescription slug={categorySlug} />
            <Button
              onClick={regenerateQuestions}
              variant="outline"
              size="lg"
              className="gap-2 bg-white hover:bg-primary/5 transition-all duration-200"
              disabled={isRegenerating}
            >
              <RefreshCw className={`h-4 w-4 ${isRegenerating ? 'animate-spin' : ''}`} />
              Generate new questions
            </Button>
          </div>

          <div className="space-y-6">
            {questions.map((question, index) => (
              <QuestionCard key={`${index}-${question}`} question={question} index={index} />
            ))}
          </div>

          <FilloutCTA surveyType={categoryTitle.toLowerCase()} />

          <div className="mt-16 text-center">
            <Link href="/">
              <Button variant="outline" size="lg" className="gap-2 bg-white hover:bg-primary/5">
                <Home className="h-4 w-4" />
                View all question categories
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = surveyCategories.map((category) => ({
    params: { slug: category.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as SurveyCategorySlug;
  const category = surveyCategories.find(c => c.slug === slug);
  const initialQuestions = getRandomQuestions(slug);
  const categoryTitle = formatSlug(slug);

  return {
    props: {
      initialQuestions,
      categoryTitle,
      categorySlug: slug,
      metaTitle: category?.metaTitle || categoryTitle,
      metaDescription: category?.metaDescription || '',
    },
  };
};