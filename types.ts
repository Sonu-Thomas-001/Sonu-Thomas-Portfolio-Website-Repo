
export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  tech?: string[];
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export interface SkillItem {
  name: string;
  level?: number; // 1-100 (Optional now)
  proficiency?: string;
  icon?: string;
  context?: string;
  badge?: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
  accent?: 'copper' | 'emerald' | 'cream';
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  role: string;
  stack: string[];
  description: string;
  detailedDescription?: string;
  links?: {
    demo?: string;
    github?: string;
  };
  image: string;
  badge?: string;
  metrics?: ProjectMetric[];
  architectureHighlights?: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  details?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  link?: string;
  credentialId?: string;
  category?: string;
  level?: string;
  featured?: boolean;
  skills?: string[];
}

export interface BlogItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  link: string;
  tags?: string[];
  featured?: boolean;
}

export interface TalkItem {
  id: string;
  title: string;
  event: string;
  date: string;
  type: string;
  description: string;
  link?: string;
}

export interface OpenSourceItem {
  id: string;
  name: string;
  description: string;
  stars: string;
  forks: string;
  language: string;
  link: string;
}

export interface ProcessItem {
  id: string;
  phase: string;
  title: string;
  desc: string;
  icon: string;
  tools: string[];
}

export interface GrowthItem {
  id: string;
  year: string;
  title: string;
  role: string;
  description: string;
  icon: string;
}

export interface VolunteeringItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  domain: string;
  description: string[];
  impact: string[];
  skills: string[];
}

export interface AwardItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string[];
  category?: string;
  badge?: string;
  featured?: boolean;
}
