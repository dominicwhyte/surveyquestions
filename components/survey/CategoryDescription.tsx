"use client";

interface CategoryDescriptionProps {
  slug: string;
}

export function CategoryDescription({ slug }: CategoryDescriptionProps) {
  const descriptions: { [key: string]: JSX.Element } = {
    "feedback-questions": (
      <div className="prose prose-gray mx-auto mb-8 text-center max-w-2xl">
        <p className="text-gray-600">
          Use these carefully crafted feedback questions to understand customer satisfaction and identify areas for improvement in your products and services.
        </p>
      </div>
    ),
    "customer-experience-questions": (
      <div className="prose prose-gray mx-auto mb-8 text-center max-w-2xl">
        <p className="text-gray-600">
          Measure customer satisfaction and identify pain points across all touchpoints of your customer journey with these proven CX survey questions.
        </p>
      </div>
    ),
    "customer-service-questions": (
      <div className="prose prose-gray mx-auto mb-8 text-center max-w-2xl">
        <p className="text-gray-600">
          Evaluate support quality and improve your customer service with these targeted questions designed to measure service effectiveness.
        </p>
      </div>
    ),
    "product-survey-questions": (
      <div className="prose prose-gray mx-auto mb-8 text-center max-w-2xl">
        <p className="text-gray-600">
          Gather valuable insights about product features and user satisfaction to inform your product development strategy.
        </p>
      </div>
    ),
    "user-experience-questions": (
      <div className="prose prose-gray mx-auto mb-8 text-center max-w-2xl">
        <p className="text-gray-600">
          Improve your website or app's usability with these UX research questions designed to evaluate user interface and navigation effectiveness.
        </p>
      </div>
    ),
    "brand-perception-questions": (
      <div className="prose prose-gray mx-auto mb-8 text-center max-w-2xl">
        <p className="text-gray-600">
          Understand how customers view your brand and measure brand awareness, loyalty, and market positioning with these strategic questions.
        </p>
      </div>
    ),
    "employee-satisfaction-questions": (
      <div className="prose prose-gray mx-auto mb-8 text-center max-w-2xl">
        <p className="text-gray-600">
          Measure workplace engagement and improve company culture with these comprehensive employee satisfaction survey questions.
        </p>
      </div>
    ),
    "education-feedback-questions": (
      <div className="prose prose-gray mx-auto mb-8 text-center max-w-2xl">
        <p className="text-gray-600">
          Evaluate course quality and teaching effectiveness with these education survey questions designed for academic improvement.
        </p>
      </div>
    ),
    "healthcare-experience-questions": (
      <div className="prose prose-gray mx-auto mb-8 text-center max-w-2xl">
        <p className="text-gray-600">
          Assess patient satisfaction and healthcare quality with these specialized medical practice survey questions.
        </p>
      </div>
    ),
    "event-feedback-questions": (
      <div className="prose prose-gray mx-auto mb-8 text-center max-w-2xl">
        <p className="text-gray-600">
          Evaluate event success and gather attendee feedback with these comprehensive event survey questions.
        </p>
      </div>
    ),
    "market-research-questions": (
      <div className="prose prose-gray mx-auto mb-8 text-center max-w-2xl">
        <p className="text-gray-600">
          Understand market trends and consumer behavior with these strategic market research questions.
        </p>
      </div>
    ),
    "training-evaluation-questions": (
      <div className="prose prose-gray mx-auto mb-8 text-center max-w-2xl">
        <p className="text-gray-600">
          Measure training effectiveness and learning outcomes with these specialized evaluation questions.
        </p>
      </div>
    )
  };

  return descriptions[slug] || null;
}