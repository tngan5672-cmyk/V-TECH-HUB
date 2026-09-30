import { Language } from '../translations';
import { SOLUTIONS_CATALOG_EN } from './solutionsCatalogDataEN';
import { SOLUTIONS_CATALOG_VI } from './solutionsCatalogDataVI';

export interface ProblemItem {
  problem: string;
  consequence: string;
}

export interface TargetAudienceItem {
  title: string;
  desc: string;
  iconName: 'bank' | 'hospital' | 'school' | 'retail' | 'enterprise' | 'tech' | 'telecom' | 'insurance' | 'gov' | 'media' | 'dollar' | 'briefcase' | 'store' | 'users';
}

export interface SolutionStat {
  value: string;
  label: string;
  sub?: string;
}

export interface SolutionRoiMetric {
  label: string;
  value: string;
  detail: string;
}

export interface SolutionItem {
  id: string;
  title: string;
  category: 'cloud-delivery' | 'cyber-security' | 'ai-operations';
  categoryLabel: string;
  pillar: 'engineer' | 'operate';
  pillarLabel?: string;
  poweredBy?: string;
  providerLogos?: string[];
  tagline: string;
  concept: string;
  description?: string;
  quoteHighlight?: {
    quote: string;
    source: string;
    accentValue?: string;
    accentLabel?: string;
  };
  keyStats: SolutionStat[];
  problems: ProblemItem[];
  targetAudiences: TargetAudienceItem[];
  highlights: string[];
  keyFeatures: {
    name: string;
    detail: string;
  }[];
  architectureHighlights?: {
    title: string;
    detail: string;
  }[];
  businessOutcomes: string[];
  roiMetrics?: SolutionRoiMetric[];
  specs: {
    label: string;
    value: string;
  }[];
  trustedClients?: string[];
}

export interface SolutionCategory {
  id: string;
  title: string;
  pillar: 'engineer' | 'operate';
  pillarLabel: string;
  description: string;
  items: SolutionItem[];
}

export { SOLUTIONS_CATALOG_EN, SOLUTIONS_CATALOG_VI };

/**
 * Returns the solutions catalog categorized by pillar based on chosen language.
 */
export function getSolutionsCatalog(lang: Language = 'EN'): SolutionCategory[] {
  return lang === 'VI' ? SOLUTIONS_CATALOG_VI : SOLUTIONS_CATALOG_EN;
}

/**
 * Returns a flat list of all solution items for the given language.
 */
export function getAllSolutionsList(lang: Language = 'EN'): SolutionItem[] {
  const catalog = getSolutionsCatalog(lang);
  return catalog.flatMap(cat => cat.items);
}

/**
 * Finds a specific solution item by ID in the requested language.
 */
export function findSolutionById(id: string, lang: Language = 'EN'): SolutionItem | undefined {
  const all = getAllSolutionsList(lang);
  return all.find(item => item.id === id);
}

/**
 * Backwards compatibility default export
 */
export const SOLUTIONS_CATALOG: SolutionCategory[] = SOLUTIONS_CATALOG_EN;
