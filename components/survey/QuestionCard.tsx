"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

interface QuestionCardProps {
  question: string;
  index: number;
}

export function QuestionCard({ question, index }: QuestionCardProps) {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(question);
    setCopied(true);
    toast({
      title: "Copied to clipboard",
      description: "The question has been copied to your clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="group p-6 hover:shadow-lg transition-all duration-300 border-neutral-200/60 hover:border-primary/20 bg-gradient-to-br from-white to-neutral-50/50">
      <div className="flex justify-between items-start gap-4">
        <div className="flex items-start gap-4 flex-grow">
          <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary font-medium">
            {index + 1}
          </span>
          <p className="text-lg text-gray-800 pt-1">{question}</p>
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={copyToClipboard}
          className="flex-shrink-0 hover:bg-primary/5 transition-colors duration-200"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>
    </Card>
  );
}