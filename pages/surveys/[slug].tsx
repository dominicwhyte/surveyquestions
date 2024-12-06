"use client";

import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { QuestionCard } from "@/components/survey/QuestionCard";
import { FilloutCTA } from "@/components/survey/FilloutCTA";
import { CategoryDescription } from "@/components/survey/CategoryDescription";
import { QuestionBank } from "@/components/survey/QuestionBank";
import { defaultQuestions, getRandomQuestions } from "@/lib/questions";
import {
  surveyCategories,
  type SurveyCategorySlug,
} from "@/lib/survey-categories";
import { formatSlug } from "@/lib/utils";
import { useState, useRef, useCallback } from "react";
import { streamQuestions } from "@/lib/openai";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import type { GenerationSettings } from "@/components/survey/QuestionSettings";
import { AnimatePresence, motion } from "framer-motion";

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
  metaDescription,
}: SurveyQuestionsPageProps) {
  const [questions, setQuestions] = useState<string[]>(initialQuestions);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();
  const abortControllerRef = useRef<AbortController | null>(null);

  const generateQuestions = useCallback(
    async (topic: string, settings: GenerationSettings) => {
      try {
        if (abortControllerRef.current) {
          abortControllerRef.current.abort();
        }

        abortControllerRef.current = new AbortController();
        setIsGenerating(true);
        setQuestions([]);

        const stream = await streamQuestions(
          categorySlug,
          topic,
          settings,
          abortControllerRef.current.signal
        );

        const reader = stream.getReader();
        const decoder = new TextDecoder();
        let buffer = "";

        while (true) {
          const { value, done } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value as any);
          const lines = buffer.split("\nQ:");
          buffer = lines.pop() || "";

          const newQuestions = lines
            .map((q) => q.trim())
            .filter(Boolean)
            .map((q) => (q.startsWith("Q:") ? q : `Q: ${q}`));

          if (newQuestions.length > 0) {
            setQuestions((prev) => [...prev, ...newQuestions]);
            await new Promise((resolve) => setTimeout(resolve, 100));
          }
        }

        if (buffer) {
          const finalQuestion = buffer.trim();
          if (finalQuestion) {
            setQuestions((prev) => [
              ...prev,
              finalQuestion.startsWith("Q:")
                ? finalQuestion
                : `Q: ${finalQuestion}`,
            ]);
          }
        }
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
          return;
        }

        console.error("Error generating questions:", error);
        toast({
          title: "Error",
          description:
            error instanceof Error
              ? error.message
              : "Failed to generate questions",
          variant: "destructive",
        });
      } finally {
        setIsGenerating(false);
        abortControllerRef.current = null;
      }
    },
    [categorySlug, toast]
  );

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Head>
      <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-50 via-gray-50 to-white py-8 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              {categoryTitle}
            </h1>
            <CategoryDescription slug={categorySlug} />

            <QuestionBank
              categorySlug={categorySlug}
              categoryTitle={categoryTitle}
              onGenerate={generateQuestions}
            />
          </div>

          <div className="space-y-4 sm:space-y-6">
            <AnimatePresence mode="popLayout">
              {questions.map((question, index) => (
                <QuestionCard
                  key={`${index}-${question.substring(0, 20)}`}
                  question={question.replace(/^Q:\s*/, "")}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </div>

          <AnimatePresence>
            {!isGenerating && questions.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                <FilloutCTA surveyType={categoryTitle.toLowerCase()} />
              </motion.div>
            )}
          </AnimatePresence>
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
  const category = surveyCategories.find((c) => c.slug === slug);
  const initialQuestions = defaultQuestions[slug] || [];
  const categoryTitle = formatSlug(slug);

  return {
    props: {
      initialQuestions,
      categoryTitle,
      categorySlug: slug,
      metaTitle: category?.metaTitle || categoryTitle,
      metaDescription: category?.metaDescription || "",
    },
  };
};
