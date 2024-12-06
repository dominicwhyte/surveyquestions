import { OpenAIStream, StreamingTextResponse } from 'ai';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export const runtime = 'edge';

export async function POST(req: Request) {
  const { category, topic, settings } = await req.json();

  const lengthInstructions = {
    short: '5-8 words',
    medium: '9-13 words',
    long: '14-20 words'
  };

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: [
      {
        role: 'system',
        content: `You are a professional survey designer. Create ${settings.questionCount} questions for a ${category} survey about "${topic}". 
                 
                 Format requirements:
                 - Each question MUST start with "Q: "
                 - Each question MUST be on a new line
                 - Questions should be ${settings.tone} in tone
                 - Questions should be ${lengthInstructions[settings.length]} in length
                 - Questions should be in ${settings.language}
                 - Questions should be clear and focused
                 - Avoid compound questions
                 
                 Example format:
                 Q: First question here
                 Q: Second question here
                 
                 Important: Only output questions, no other text.`
      },
      {
        role: 'user',
        content: `Generate ${settings.questionCount} ${category} survey questions about "${topic}".`
      }
    ],
    temperature: 0.7,
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}