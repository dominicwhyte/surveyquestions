import {
  MessageSquare,
  Users,
  ShoppingBag,
  Laptop,
  Target,
  Briefcase,
  GraduationCap,
  Heart,
  Building2,
  Coffee,
  Award,
  UserCheck,
  Home,
  Globe,
  Leaf,
  Users2,
  Brain,
  Lightbulb,
  Share2,
  Gift,
  Monitor,
  Workflow,
  Smartphone,
  Megaphone,
  BarChart3,
  Headphones,
} from "lucide-react";

export const categoryGroups = [
  {
    name: "Customer Insights",
    description: "Understand and improve customer experiences",
    color: "blue",
    categories: [
      "feedback-questions",
      "customer-experience-questions",
      "customer-service-questions",
      "customer-loyalty-program",
      "voice-of-customer",
    ],
  },
  {
    name: "Product & UX",
    description: "Optimize your products and digital experiences",
    color: "purple",
    categories: [
      "product-survey-questions",
      "user-experience-questions",
      "website-usability",
      "mobile-app-experience",
    ],
  },
  {
    name: "Business & Marketing",
    description: "Enhance your business operations and market presence",
    color: "amber",
    categories: [
      "brand-perception-questions",
      "market-research-questions",
      "marketing-campaign",
      "sales-performance",
    ],
  },
  {
    name: "Workplace & HR",
    description: "Improve employee satisfaction and workplace culture",
    color: "emerald",
    categories: [
      "employee-satisfaction-questions",
      "training-evaluation-questions",
      "remote-work-survey",
      "diversity-inclusion-survey",
    ],
  },
  {
    name: "Industry Specific",
    description: "Specialized surveys for different sectors",
    color: "rose",
    categories: [
      "education-feedback-questions",
      "healthcare-experience-questions",
      "event-feedback-questions",
    ],
  },
  {
    name: "Innovation & Growth",
    description: "Drive innovation and sustainable growth",
    color: "cyan",
    categories: [
      "digital-transformation-survey",
      "innovation-feedback",
      "sustainability-practices",
      "process-improvement",
    ],
  },
] as const;

export const surveyCategories = [
  {
    title: "Feedback Questions",
    description: "Generate feedback questions for general surveys",
    icon: MessageSquare,
    slug: "feedback-questions",
    count: "50+ questions",
    metaTitle: "Free Feedback Survey Questions Generator | Survey Templates",
    metaDescription:
      "Generate professional feedback survey questions instantly. Free templates and examples for customer feedback, product feedback, and service feedback surveys.",
  },
  {
    title: "Customer Experience",
    description: "Questions to understand customer experiences with your brand",
    icon: Users,
    slug: "customer-experience-questions",
    count: "40+ questions",
    metaTitle: "Customer Experience Survey Questions Generator | CX Templates",
    metaDescription:
      "Create effective customer experience surveys with our free question generator. Get insights into customer satisfaction, loyalty, and experience.",
  },
  {
    title: "Customer Service",
    description: "Evaluate and improve your customer service",
    icon: UserCheck,
    slug: "customer-service-questions",
    count: "45+ questions",
    metaTitle: "Customer Service Survey Questions Generator | Support Feedback",
    metaDescription:
      "Generate professional customer service survey questions. Measure support quality, response times, and customer satisfaction with our templates.",
  },
  {
    title: "Product Survey",
    description: "Questions to enhance products and services",
    icon: ShoppingBag,
    slug: "product-survey-questions",
    count: "35+ questions",
    metaTitle:
      "Product Survey Questions Generator | Product Feedback Templates",
    metaDescription:
      "Create effective product survey questions instantly. Get valuable feedback on features, usability, and customer satisfaction with our templates.",
  },
  {
    title: "User Experience",
    description: "Evaluate and improve website/app usability",
    icon: Laptop,
    slug: "user-experience-questions",
    count: "30+ questions",
    metaTitle: "UX Survey Questions Generator | User Experience Templates",
    metaDescription:
      "Generate UX research questions for better user experience. Evaluate website usability, app design, and digital interactions with our templates.",
  },
  {
    title: "Brand Perception",
    description: "Measure brand perception and trust",
    icon: Target,
    slug: "brand-perception-questions",
    count: "25+ questions",
    metaTitle: "Brand Perception Survey Questions | Brand Research Templates",
    metaDescription:
      "Create brand perception surveys instantly. Measure brand awareness, loyalty, and market positioning with our professional templates.",
  },
  {
    title: "Employee Satisfaction",
    description: "Measure workplace satisfaction and engagement",
    icon: Briefcase,
    slug: "employee-satisfaction-questions",
    count: "40+ questions",
    metaTitle: "Employee Satisfaction Survey Questions | HR Survey Templates",
    metaDescription:
      "Generate comprehensive employee satisfaction survey questions. Measure engagement, workplace culture, and job satisfaction with our templates.",
  },
  {
    title: "Education Feedback",
    description: "Gather feedback from students and educators",
    icon: GraduationCap,
    slug: "education-feedback-questions",
    count: "35+ questions",
    metaTitle: "Education Survey Questions Generator | Academic Feedback",
    metaDescription:
      "Create education survey questions for students, teachers, and institutions. Evaluate course quality, teaching methods, and learning experience.",
  },
  {
    title: "Healthcare Experience",
    description: "Assess patient satisfaction and care quality",
    icon: Heart,
    slug: "healthcare-experience-questions",
    count: "30+ questions",
    metaTitle: "Healthcare Survey Questions | Patient Feedback Templates",
    metaDescription:
      "Generate healthcare survey questions to measure patient satisfaction, care quality, and service delivery. Perfect for medical practices and clinics.",
  },
  {
    title: "Event Feedback",
    description: "Evaluate event success and attendee satisfaction",
    icon: Coffee,
    slug: "event-feedback-questions",
    count: "25+ questions",
    metaTitle: "Event Survey Questions Generator | Event Feedback Templates",
    metaDescription:
      "Create event feedback surveys instantly. Measure attendee satisfaction, event organization, and gather suggestions for future events.",
  },
  {
    title: "Market Research",
    description: "Conduct market research and competitor analysis",
    icon: Building2,
    slug: "market-research-questions",
    count: "45+ questions",
    metaTitle: "Market Research Survey Questions | Market Analysis Templates",
    metaDescription:
      "Generate professional market research questions. Understand market trends, consumer behavior, and competitive landscape with our templates.",
  },
  {
    title: "Training Evaluation",
    description: "Assess training effectiveness and learning outcomes",
    icon: Award,
    slug: "training-evaluation-questions",
    count: "30+ questions",
    metaTitle: "Training Evaluation Survey Questions | Learning Assessment",
    metaDescription:
      "Create training evaluation surveys to measure effectiveness, knowledge retention, and participant satisfaction with our professional templates.",
  },
  {
    title: "Remote Work",
    description: "Evaluate remote work effectiveness and challenges",
    icon: Home,
    slug: "remote-work-survey",
    count: "30+ questions",
    metaTitle: "Remote Work Survey Questions | Work From Home Feedback",
    metaDescription:
      "Generate remote work survey questions to assess productivity, challenges, and team collaboration in virtual work environments.",
  },
  {
    title: "Digital Transformation",
    description: "Assess digital adoption and transformation impact",
    icon: Globe,
    slug: "digital-transformation-survey",
    count: "25+ questions",
    metaTitle: "Digital Transformation Survey Questions | Change Management",
    metaDescription:
      "Create surveys to measure digital transformation success, adoption rates, and identify areas needing support.",
  },
  {
    title: "Sustainability Practices",
    description: "Evaluate environmental initiatives and awareness",
    icon: Leaf,
    slug: "sustainability-practices",
    count: "25+ questions",
    metaTitle: "Sustainability Survey Questions | Environmental Feedback",
    metaDescription:
      "Generate questions to assess sustainability practices, environmental awareness, and green initiatives.",
  },
  {
    title: "Diversity & Inclusion",
    description: "Measure workplace inclusivity and diversity",
    icon: Users2,
    slug: "diversity-inclusion-survey",
    count: "30+ questions",
    metaTitle: "Diversity and Inclusion Survey Questions | DEI Assessment",
    metaDescription:
      "Create surveys to evaluate workplace diversity, inclusion practices, and identify areas for improvement.",
  },
  {
    title: "Mental Health & Wellness",
    description: "Assess workplace wellness and support",
    icon: Brain,
    slug: "mental-health-wellness",
    count: "25+ questions",
    metaTitle: "Mental Health Survey Questions | Workplace Wellness",
    metaDescription:
      "Generate questions to evaluate mental health support, stress levels, and wellness initiatives.",
  },
  {
    title: "Innovation Feedback",
    description: "Measure innovation culture and practices",
    icon: Lightbulb,
    slug: "innovation-feedback",
    count: "25+ questions",
    metaTitle: "Innovation Survey Questions | Creative Culture Assessment",
    metaDescription:
      "Create surveys to evaluate innovation practices, creative culture, and improvement opportunities.",
  },
  {
    title: "Social Media Engagement",
    description: "Analyze social media strategy and impact",
    icon: Share2,
    slug: "social-media-engagement",
    count: "30+ questions",
    metaTitle: "Social Media Survey Questions | Engagement Analysis",
    metaDescription:
      "Generate questions to assess social media engagement, content effectiveness, and audience preferences.",
  },
  {
    title: "Customer Loyalty Program",
    description: "Evaluate loyalty program effectiveness",
    icon: Gift,
    slug: "customer-loyalty-program",
    count: "25+ questions",
    metaTitle: "Loyalty Program Survey Questions | Member Feedback",
    metaDescription:
      "Create surveys to measure loyalty program satisfaction, benefits usage, and member retention.",
  },
  {
    title: "Voice of Customer",
    description: "Capture direct customer feedback and insights",
    icon: Headphones,
    slug: "voice-of-customer",
    count: "35+ questions",
    metaTitle: "Voice of Customer Survey Questions | Customer Feedback",
    metaDescription:
      "Generate questions to collect comprehensive customer feedback, preferences, and pain points directly from your users.",
  },
  {
    title: "Website Usability",
    description: "Assess website user experience and functionality",
    icon: Monitor,
    slug: "website-usability",
    count: "30+ questions",
    metaTitle: "Website Usability Survey Questions | UX Assessment",
    metaDescription:
      "Generate questions to evaluate website usability, navigation, and user satisfaction.",
  },
  {
    title: "Process Improvement",
    description: "Evaluate operational efficiency and workflows",
    icon: Workflow,
    slug: "process-improvement",
    count: "30+ questions",
    metaTitle: "Process Improvement Survey Questions | Workflow Analysis",
    metaDescription:
      "Generate questions to assess process efficiency, bottlenecks, and improvement opportunities.",
  },
  {
    title: "Mobile App Experience",
    description: "Assess mobile app usability and features",
    icon: Smartphone,
    slug: "mobile-app-experience",
    count: "25+ questions",
    metaTitle: "Mobile App Survey Questions | User Experience",
    metaDescription:
      "Create surveys to evaluate mobile app experience, features, and user satisfaction.",
  },
  {
    title: "Marketing Campaign",
    description: "Measure marketing effectiveness and reach",
    icon: Megaphone,
    slug: "marketing-campaign",
    count: "30+ questions",
    metaTitle: "Marketing Survey Questions | Campaign Feedback",
    metaDescription:
      "Generate questions to assess marketing campaign impact, audience reach, and effectiveness.",
  },
  {
    title: "Sales Performance",
    description: "Evaluate sales processes and effectiveness",
    icon: BarChart3,
    slug: "sales-performance",
    count: "25+ questions",
    metaTitle: "Sales Survey Questions | Performance Analysis",
    metaDescription:
      "Create surveys to measure sales performance, process efficiency, and team effectiveness.",
  },
  {
    title: "Customer Support",
    description: "Assess support quality and satisfaction",
    icon: Headphones,
    slug: "customer-support",
    count: "30+ questions",
    metaTitle: "Customer Support Survey Questions | Service Quality",
    metaDescription:
      "Generate questions to evaluate customer support quality, response times, and satisfaction levels.",
  },
] as const;

export type SurveyCategory = (typeof surveyCategories)[number];
export type SurveyCategorySlug = SurveyCategory["slug"];

export function getCategoryColor(slug: string): string {
  for (const group of categoryGroups) {
    if (group.categories.includes(slug as never)) {
      return group.color;
    }
  }
  return "gray";
}
