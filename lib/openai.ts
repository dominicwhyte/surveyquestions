import { GenerationSettings } from "@/components/survey/QuestionSettings";

export async function streamQuestions(
  category: string,
  topic: string,
  settings: GenerationSettings,
  signal?: AbortSignal
): Promise<ReadableStream<string>> {
  const response = await fetch("/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      category,
      topic,
      settings,
    }),
    signal,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || "Failed to generate questions");
  }

  return response.body! as any;
}
