// ─── Shared TypeScript Interfaces ────────────────────────────────────────────

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  category: string;
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  icon?: string;
  color?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface TimelineEntry {
  id: string;
  type: 'experience' | 'education';
  role: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  tags?: string[];
  icon?: string;
}

export interface StatItem {
  value: string;
  label: string;
  icon: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}
