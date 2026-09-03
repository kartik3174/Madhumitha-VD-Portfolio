export interface NavItem {
  name: string;
  href: string;
}

export interface SkillItem {
  name: string;
  level?: 'Beginner' | 'Proficient';
  iconName?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location?: string;
  duration: string;
  responsibilities: string[];
  techTags: string[];
  domain: 'Data Science' | 'Data Analytics' | 'AI Engineering' | 'Full Stack';
}

export interface ProjectFlowStep {
  label: string;
  sublabel?: string;
  accent?: boolean;
}

export interface Project {
  id: string;
  title: string;
  category: 'AI / ML' | 'Data Science' | 'Full Stack' | 'Computer Vision';
  description: string;
  problem: string;
  solution: string;
  technicalConcept: string;
  techStack: string[];
  architectureFlow: ProjectFlowStep[];
  highlights: string[];
  githubUrl?: string; // only if real URL provided
  demoUrl?: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  cgpa: string;
  coursework: string[];
}

export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  featured?: boolean;
  type: 'international' | 'certification' | 'research' | 'workshop';
  tag: string;
  dateOrDuration?: string;
  bulletPoints?: string[];
}
