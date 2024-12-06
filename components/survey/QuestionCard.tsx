"use client";

import { forwardRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { motion } from "framer-motion";

interface QuestionCardProps {
  question: string;
  index: number;
}

const MotionCard = motion(forwardRef<HTMLDivElement, React.ComponentProps<typeof Card>>((props, ref) => (
  <Card ref={ref} {...props} />
)));
MotionCard.displayName = "MotionCard";

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
    <MotionCard
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ 
        duration: 0.4,
        delay: index * 0.15,
        ease: [0.4, 0, 0.2, 1]
      }}
      className="group p-6 hover:shadow-lg transition-all duration-300 border-neutral-200/60 hover:border-primary/20 bg-gradient-to-br from-white to-neutral-50/50"
    >
      <div className="flex justify-between items-start gap-4">
        <div className="flex items-start gap-4 flex-grow">
          <motion.span 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.15 + 0.2 }}
            className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary font-medium"
          >
            {index + 1}
          </motion.span>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.15 + 0.3 }}
            className="text-lg text-gray-800 pt-1"
          >
            {question}
          </motion.p>
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={copyToClipboard}
          className="flex-shrink-0 hover:bg-primary/5 transition-colors duration-200"
        >
          <motion.div
            initial={false}
            animate={{ scale: copied ? 0 : 1, opacity: copied ? 0 : 1 }}
            transition={{ duration: 0.2 }}
          >
            <Copy className="h-4 w-4" />
          </motion.div>
          <motion.div
            initial={false}
            animate={{ scale: copied ? 1 : 0, opacity: copied ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            style={{ position: 'absolute' }}
          >
            <Check className="h-4 w-4 text-green-500" />
          </motion.div>
        </Button>
      </div>
    </MotionCard>
  );
}