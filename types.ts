
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
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  role: string;
  stack: string[];
  description: string;
  links?: {
    demo?: string;
    github?: string;
  };
  image: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  details?: string;
}

export interface CertificationItem {
  name: string;
  issuer?: string;
}
