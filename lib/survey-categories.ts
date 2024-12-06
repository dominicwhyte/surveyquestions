import { MessageSquare, Users, ShoppingBag, Laptop, Target, Briefcase, GraduationCap, Heart, Building2, Coffee, Award, UserCheck } from "lucide-react";

export const surveyCategories = [
  {
    title: "Feedback Questions",
    description: "Generate feedback questions for general surveys",
    icon: MessageSquare,
    slug: "feedback-questions",
    count: "50+ questions",
    metaTitle: "Free Feedback Survey Questions Generator | Survey Templates",
    metaDescription: "Generate professional feedback survey questions instantly. Free templates and examples for customer feedback, product feedback, and service feedback surveys."
  },
  {
    title: "Customer Experience",
    description: "Questions to understand customer experiences with your brand",
    icon: Users,
    slug: "customer-experience-questions",
    count: "40+ questions",
    metaTitle: "Customer Experience Survey Questions Generator | CX Templates",
    metaDescription: "Create effective customer experience surveys with our free question generator. Get insights into customer satisfaction, loyalty, and experience."
  },
  {
    title: "Customer Service",
    description: "Evaluate and improve your customer service",
    icon: Users,
    slug: "customer-service-questions",
    count: "45+ questions",
    metaTitle: "Customer Service Survey Questions Generator | Support Feedback",
    metaDescription: "Generate professional customer service survey questions. Measure support quality, response times, and customer satisfaction with our templates."
  },
  {
    title: "Product Survey",
    description: "Questions to enhance products and services",
    icon: ShoppingBag,
    slug: "product-survey-questions",
    count: "35+ questions",
    metaTitle: "Product Survey Questions Generator | Product Feedback Templates",
    metaDescription: "Create effective product survey questions instantly. Get valuable feedback on features, usability, and customer satisfaction with our templates."
  },
  {
    title: "User Experience (UX)",
    description: "Evaluate and improve website/app usability",
    icon: Laptop,
    slug: "user-experience-questions",
    count: "30+ questions",
    metaTitle: "UX Survey Questions Generator | User Experience Templates",
    metaDescription: "Generate UX research questions for better user experience. Evaluate website usability, app design, and digital interactions with our templates."
  },
  {
    title: "Brand Perception",
    description: "Measure brand perception and trust",
    icon: Target,
    slug: "brand-perception-questions",
    count: "25+ questions",
    metaTitle: "Brand Perception Survey Questions | Brand Research Templates",
    metaDescription: "Create brand perception surveys instantly. Measure brand awareness, loyalty, and market positioning with our professional templates."
  },
  {
    title: "Employee Satisfaction",
    description: "Measure workplace satisfaction and engagement",
    icon: Briefcase,
    slug: "employee-satisfaction-questions",
    count: "40+ questions",
    metaTitle: "Employee Satisfaction Survey Questions | HR Survey Templates",
    metaDescription: "Generate comprehensive employee satisfaction survey questions. Measure engagement, workplace culture, and job satisfaction with our templates."
  },
  {
    title: "Education Feedback",
    description: "Gather feedback from students and educators",
    icon: GraduationCap,
    slug: "education-feedback-questions",
    count: "35+ questions",
    metaTitle: "Education Survey Questions Generator | Academic Feedback",
    metaDescription: "Create education survey questions for students, teachers, and institutions. Evaluate course quality, teaching methods, and learning experience."
  },
  {
    title: "Healthcare Experience",
    description: "Assess patient satisfaction and care quality",
    icon: Heart,
    slug: "healthcare-experience-questions",
    count: "30+ questions",
    metaTitle: "Healthcare Survey Questions | Patient Feedback Templates",
    metaDescription: "Generate healthcare survey questions to measure patient satisfaction, care quality, and service delivery. Perfect for medical practices and clinics."
  },
  {
    title: "Event Feedback",
    description: "Evaluate event success and attendee satisfaction",
    icon: Coffee,
    slug: "event-feedback-questions",
    count: "25+ questions",
    metaTitle: "Event Survey Questions Generator | Event Feedback Templates",
    metaDescription: "Create event feedback surveys instantly. Measure attendee satisfaction, event organization, and gather suggestions for future events."
  },
  {
    title: "Market Research",
    description: "Conduct market research and competitor analysis",
    icon: Building2,
    slug: "market-research-questions",
    count: "45+ questions",
    metaTitle: "Market Research Survey Questions | Market Analysis Templates",
    metaDescription: "Generate professional market research questions. Understand market trends, consumer behavior, and competitive landscape with our templates."
  },
  {
    title: "Training Evaluation",
    description: "Assess training effectiveness and learning outcomes",
    icon: Award,
    slug: "training-evaluation-questions",
    count: "30+ questions",
    metaTitle: "Training Evaluation Survey Questions | Learning Assessment",
    metaDescription: "Create training evaluation surveys to measure effectiveness, knowledge retention, and participant satisfaction with our professional templates."
  }
] as const;

export type SurveyCategory = typeof surveyCategories[number];
export type SurveyCategorySlug = SurveyCategory['slug'];