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
    <Card className="p-6 hover:shadow-md transition-shadow duration-200">
      <div className="flex justify-between items-start gap-4">
        <p className="text-lg text-gray-800 flex-grow">{question}</p>
        <Button
          variant="outline"
          size="icon"
          onClick={copyToClipboard}
          className="flex-shrink-0"
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