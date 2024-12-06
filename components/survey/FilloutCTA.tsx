"use client";

import { Button } from "@/components/ui/button";
import { FilloutLogo } from "./FilloutLogo";
import Link from "next/link";

interface FilloutCTAProps {
  surveyType: string;
}

export function FilloutCTA({ surveyType }: FilloutCTAProps) {
  return (
    <div className="mt-16 text-center">
      <Link 
        href="https://fillout.com/ai-form-builder?ref=surveyquestions" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block"
      >
        <Button 
          variant="default" 
          size="lg" 
          className="bg-[#FFC738] hover:bg-[#FFD668] text-black gap-3 px-6 py-6 text-lg group transition-all duration-200"
        >
          <span>Create a free {surveyType} survey with</span>
          <FilloutLogo />
        </Button>
      </Link>
    </div>
  );
}