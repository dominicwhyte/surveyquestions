"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export interface GenerationSettings {
  tone: 'formal' | 'casual' | 'neutral';
  length: 'short' | 'medium' | 'long';
  questionCount: number;
  language: string;
}

interface QuestionSettingsProps {
  settings: GenerationSettings;
  onSettingsChange: (settings: GenerationSettings) => void;
}

const languages = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Spanish' },
  { value: 'fr', label: 'French' },
  { value: 'de', label: 'German' },
  { value: 'it', label: 'Italian' },
  { value: 'pt', label: 'Portuguese' },
  { value: 'nl', label: 'Dutch' },
  { value: 'pl', label: 'Polish' },
  { value: 'ru', label: 'Russian' },
  { value: 'ja', label: 'Japanese' },
  { value: 'ko', label: 'Korean' },
  { value: 'zh', label: 'Chinese' },
];

export function QuestionSettings({ settings, onSettingsChange }: QuestionSettingsProps) {
  const updateSetting = <K extends keyof GenerationSettings>(
    key: K,
    value: GenerationSettings[K]
  ) => {
    onSettingsChange({ ...settings, [key]: value });
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Tone</label>
          <Tabs
            value={settings.tone}
            onValueChange={(value) => updateSetting('tone', value as GenerationSettings['tone'])}
            className="w-full"
          >
            <TabsList className="w-full">
              <TabsTrigger value="formal" className="flex-1">Formal</TabsTrigger>
              <TabsTrigger value="casual" className="flex-1">Casual</TabsTrigger>
              <TabsTrigger value="neutral" className="flex-1">Neutral</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Length</label>
          <Tabs
            value={settings.length}
            onValueChange={(value) => updateSetting('length', value as GenerationSettings['length'])}
            className="w-full"
          >
            <TabsList className="w-full">
              <TabsTrigger value="short" className="flex-1">Short</TabsTrigger>
              <TabsTrigger value="medium" className="flex-1">Medium</TabsTrigger>
              <TabsTrigger value="long" className="flex-1">Long</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Number of Questions</label>
          <Select
            value={settings.questionCount.toString()}
            onValueChange={(value) => updateSetting('questionCount', parseInt(value))}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select count" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5 questions</SelectItem>
              <SelectItem value="10">10 questions</SelectItem>
              <SelectItem value="15">15 questions</SelectItem>
              <SelectItem value="20">20 questions</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Language</label>
          <Select
            value={settings.language}
            onValueChange={(value) => updateSetting('language', value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              {languages.map((language) => (
                <SelectItem key={language.value} value={language.value}>
                  {language.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}