export type Theme = 'light' | 'dark';

export interface Partner {
  id: string;
  name: string;
  category: 'Security' | 'AI & Data' | 'Enterprise Software' | 'DevSecOps' | 'Cloud Hub' | string;
  tier?: 'Strategic' | 'Platinum' | 'Gold' | string;
  description: string;
  descriptionEN?: string;
  descriptionVI?: string;
  website: string;
  logoText: string;
  jointTechnology?: string;
  jointTechnologyEN?: string;
  jointTechnologyVI?: string;
  integrationStack?: string[];
  certifiedTier?: string;
}

export interface SuccessStory {
  id: string;
  clientName: string;
  sector: string;
  logoIcon: string;
  quote: string;
  fullStory: string;
  metrics: string;
  imageUrl?: string;
}

export interface SolutionPartner {
  name: string;
  logoUrl?: string;
}

export interface SolutionCapability {
  title: string;
  description: string;
  iconName?: string;
  deliverables?: string[];
}

export interface SolutionFourChallenge {
  title: string;
  description: string;
}

export interface SolutionWhyChooseItem {
  title: string;
  description: string;
}

export interface Solution {
  id: string;
  title: string;
  category: string;
  description: string;
  imageAlt: string;
  imageUrl: string;
  videoUrl?: string;
  presentationImage?: string;
  transformationHeadline?: string;
  transformationStory?: string;
  challengeEyebrow?: string;
  capabilitySectionTitle?: string;
  capabilitySubtitle?: string;
  whyChooseTitle?: string;
  whyChooseSubtitle?: string;
  whyChooseItems?: SolutionWhyChooseItem[];
  challenges: string;
  solutionText: string;
  outcomes: string;
  details: string[];
  keyChallenges?: { num: string; title: string; description: string }[];
  fourKeyChallenges?: SolutionFourChallenge[];
  capabilityPillars?: SolutionCapability[];
  strategicPartners?: SolutionPartner[];
  faqs?: SolutionFAQ[];
}

export interface SolutionFAQ {
  question: string;
  answer: string;
}

export interface PartnerApplication {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  partnerType: string;
  submittedAt: string;
  status: 'Pending' | 'Approved' | 'Reviewing';
}
