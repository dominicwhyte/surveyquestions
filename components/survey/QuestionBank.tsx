"use client";

import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sparkles, Loader2, Settings2, ChevronDown, ChevronUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { QuestionSettings, type GenerationSettings } from './QuestionSettings';

interface QuestionBankProps {
  categorySlug: string;
  categoryTitle: string;
  onGenerate: (topic: string, settings: GenerationSettings) => Promise<void>;
}

export function QuestionBank({ categorySlug, categoryTitle, onGenerate }: QuestionBankProps) {
  const [topic, setTopic] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState<GenerationSettings>({
    tone: 'neutral',
    length: 'medium',
    questionCount: 5,
    language: 'en'
  });

  const handleGenerate = async () => {
    setIsLoading(true);
    try {
      await onGenerate(topic || categoryTitle, settings);
      setTopic('');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="p-4 sm:p-6 bg-white/50 backdrop-blur-sm border border-neutral-200/60">
      <div className="space-y-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowSettings(!showSettings)}
          className="w-full flex justify-between items-center text-gray-600 hover:text-gray-900"
        >
          <span className="flex items-center gap-2">
            <Settings2 className="h-4 w-4" />
            Settings
          </span>
          {showSettings ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>

        {showSettings && (
          <QuestionSettings
            settings={settings}
            onSettingsChange={setSettings}
          />
        )}

        <div className="flex flex-col sm:flex-row gap-3">
          <Input
            type="text"
            placeholder={categoryTitle}
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="flex-1"
            onKeyDown={(e) => e.key === 'Enter' && !isLoading && handleGenerate()}
          />
          <Button
            onClick={handleGenerate}
            disabled={isLoading}
            className="w-full sm:w-auto sm:min-w-[140px]"
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <>
                <Sparkles className="h-4 w-4 mr-2" />
                Generate
              </>
            )}
          </Button>
        </div>
      </div>
    </Card>
  );
}