// ─── Placeholder Content ──────────────────────────────────────────────────────
// TODO: Replace all placeholder content below with your real information.
// Search for "TODO:" comments to find every spot that needs your input.

import type { Project, SkillCategory, TimelineEntry, StatItem, SocialLink, NavItem } from '../types';

// ── Navigation ──────────────────────────────────────────────────────────────
export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

// ── Hero ─────────────────────────────────────────────────────────────────────
export const HERO_TAGLINES = [
  'Computer Science Student',
  'Software Developer',
  'Open-Source Contributor',
  'Full-Stack Builder',
  'Problem Solver',
];

// TODO: Replace with your one-line value statement
export const HERO_VALUE_STATEMENT =
  'I build things for the web — fast, clean, and with purpose.';

// TODO: Replace with your actual resume PDF path or external link
export const RESUME_URL = '/resume.pdf';

// ── Social Links ─────────────────────────────────────────────────────────────
// TODO: Replace placeholder URLs with your real profiles
export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/muditworks-6', // TODO: your GitHub
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mudit-maheshwari-18156637a', // TODO: your LinkedIn
    icon: 'linkedin',
  },
  {
    label: 'Email',
    href: 'mailto:muditworks6@gmail.com', // TODO: your email
    icon: 'mail',
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/muditbhuraria', // TODO: your Twitter/X
    icon: 'twitter',
  },
];

// ── About ────────────────────────────────────────────────────────────────────
// TODO: Replace with your actual bio (keep it 2–3 sentences, first-person)
export const ABOUT_BIO = `
I'm Mudit Bhuraria, a Computer Science student with a deep interest in building 
software that's elegant under the hood and intuitive on the surface. I enjoy working 
across the full stack — from crafting responsive UIs to designing efficient backend 
systems — and I'm always looking for the next interesting problem to crack.

When I'm not coding, you'll find me contributing to open-source projects, reading 
about distributed systems, or exploring the latest developments in AI/ML.
`;

// TODO: Replace with your real stats
export const ABOUT_STATS: StatItem[] = [
  { value: '15+', label: 'Projects Shipped', icon: 'rocket' },
  { value: '3+', label: 'Years Coding', icon: 'code-2' },
  { value: 'B.Tech', label: 'CS Degree (In Progress)', icon: 'graduation-cap' },
  { value: '5+', label: 'Open Source Contributions', icon: 'git-merge' },
];

// ── Skills ───────────────────────────────────────────────────────────────────
export const SKILLS: SkillCategory[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'TypeScript', color: '#3178c6' },
      { name: 'JavaScript', color: '#f7df1e' },
      { name: 'Python', color: '#3776ab' },
      { name: 'Java', color: '#ed8b00' },
      { name: 'C/C++', color: '#00599c' },
      { name: 'SQL', color: '#cc2927' },
      { name: 'Bash', color: '#4eaa25' },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    skills: [
      { name: 'React', color: '#61dafb' },
      { name: 'Next.js', color: '#ffffff' },
      { name: 'Node.js', color: '#339933' },
      { name: 'Express', color: '#ffffff' },
      { name: 'Tailwind CSS', color: '#38bdf8' },
      { name: 'FastAPI', color: '#009688' },
      { name: 'NumPy / Pandas', color: '#150458' },
    ],
  },
  {
    category: 'Tools & Platforms',
    skills: [
      { name: 'Git / GitHub', color: '#f05032' },
      { name: 'Docker', color: '#2496ed' },
      { name: 'Linux', color: '#fcc624' },
      { name: 'PostgreSQL', color: '#336791' },
      { name: 'MongoDB', color: '#47a248' },
      { name: 'Redis', color: '#dc382d' },
      { name: 'AWS (basics)', color: '#ff9900' },
      { name: 'Vercel', color: '#ffffff' },
    ],
  },
  {
    category: 'Currently Learning',
    skills: [
      { name: 'Rust', color: '#dea584' },
      { name: 'Kubernetes', color: '#326ce5' },
      { name: 'GraphQL', color: '#e10098' },
      { name: 'System Design', color: '#a855f7' },
    ],
  },
];

// ── Projects ─────────────────────────────────────────────────────────────────
// TODO: Replace with your real projects. Images are in /public/projects/.
export const PROJECTS: Project[] = [
  {
    id: 'devflow',
    title: 'DevFlow — Full-Stack Dev Tool',
    description:
      'A collaborative code-review and task management platform for developer teams, with real-time updates via WebSockets.',
    image: '/projects/devflow.png',
    tags: ['React', 'Node.js', 'PostgreSQL', 'WebSockets', 'Docker'],
    category: 'Full-Stack',
    githubUrl: 'https://github.com/muditworks-6/devflow',
    liveUrl: 'https://devflow-demo.vercel.app',
    featured: true,
  },
  {
    id: 'algo-viz',
    title: 'AlgoViz — Algorithm Visualizer',
    description:
      'Interactive, step-by-step visualizations for 20+ sorting and graph algorithms. Built for learning DSA concepts visually.',
    image: '/projects/algoviz.png',
    tags: ['React', 'TypeScript', 'Canvas API', 'Framer Motion'],
    category: 'Tools',
    githubUrl: 'https://github.com/muditworks-6/algo-viz',
    liveUrl: 'https://algoviz.vercel.app',
    featured: true,
  },
  {
    id: 'sentiment-ai',
    title: 'SentimentAI — ML Classifier',
    description:
      'A fine-tuned BERT-based sentiment analysis API with a React dashboard for batch text analysis and visualization.',
    image: '/projects/sentimentai.png',
    tags: ['Python', 'FastAPI', 'PyTorch', 'React', 'Docker'],
    category: 'ML / AI',
    githubUrl: 'https://github.com/muditworks-6/sentiment-ai',
    featured: true,
  },
  {
    id: 'cli-toolkit',
    title: 'dev-cli — Developer CLI Toolkit',
    description:
      'A Rust-based CLI utility that scaffolds projects, manages dotfiles, and automates common dev-environment setup tasks.',
    image: '/projects/clitoolkit.png',
    tags: ['Rust', 'CLI', 'Shell', 'Cross-platform'],
    category: 'Tools',
    githubUrl: 'https://github.com/muditworks-6/dev-cli',
  },
  {
    id: 'expensify',
    title: 'Expensify — Budget Tracker',
    description:
      'A mobile-first expense tracking PWA with offline support, budget forecasting charts, and CSV export.',
    image: '/projects/expensify.png',
    tags: ['Next.js', 'TypeScript', 'IndexedDB', 'Chart.js', 'PWA'],
    category: 'Full-Stack',
    githubUrl: 'https://github.com/muditworks-6/expensify',
    liveUrl: 'https://expensify-app.vercel.app',
  },
  {
    id: 'os-scheduler',
    title: 'OS Process Scheduler Sim',
    description:
      'A simulation of CPU scheduling algorithms (FCFS, SJF, Round Robin, Priority) with Gantt chart visualization.',
    image: '/projects/osscheduler.png',
    tags: ['C++', 'Algorithms', 'Systems', 'Data Structures'],
    category: 'Systems',
    githubUrl: 'https://github.com/muditworks-6/os-scheduler',
  },
];

export const PROJECT_CATEGORIES = ['All', 'Full-Stack', 'Tools', 'ML / AI', 'Systems'];

// ── Experience & Education ────────────────────────────────────────────────────
// TODO: Replace with your real experience and education entries
export const TIMELINE_ENTRIES: TimelineEntry[] = [
  {
    id: 'intern-1',
    type: 'experience',
    role: 'Software Development Intern',
    organization: 'TechCorp Pvt. Ltd.',
    location: 'Remote',
    startDate: 'May 2025',
    endDate: 'Aug 2025',
    description: [
      'Built and shipped 3 internal dashboard features using React + TypeScript, reducing report generation time by 40%.',
      'Designed a REST API in Node.js / Express integrated with PostgreSQL for real-time analytics data.',
      'Collaborated in a 6-person Agile team with weekly sprint reviews and daily standups.',
    ],
    tags: ['React', 'Node.js', 'PostgreSQL', 'Agile'],
    icon: 'briefcase',
  },
  {
    id: 'edu-btech',
    type: 'education',
    role: 'B.Tech in Computer Science & Engineering',
    organization: 'Your University Name', // TODO: replace
    location: 'India',
    startDate: 'Aug 2022',
    endDate: 'May 2026',
    description: [
      'CGPA: 8.x / 10 — Dean\'s List (TODO: update)',
      'Relevant coursework: Data Structures & Algorithms, Operating Systems, DBMS, Computer Networks, Machine Learning.',
      'Tech Club Lead: organized 3 inter-college hackathons with 200+ participants.',
    ],
    tags: ['DSA', 'OS', 'DBMS', 'Networks', 'ML'],
    icon: 'graduation-cap',
  },
  {
    id: 'oss-contrib',
    type: 'experience',
    role: 'Open Source Contributor',
    organization: 'Various Projects (GitHub)',
    location: 'Remote',
    startDate: 'Jan 2024',
    endDate: 'Present',
    description: [
      'Contributed bug fixes and feature additions to 5+ open-source repositories.',
      'Merged PRs to projects with 1k+ GitHub stars in the React and Python ecosystems.',
    ],
    tags: ['Open Source', 'GitHub', 'React', 'Python'],
    icon: 'git-merge',
  },
  {
    id: 'edu-12th',
    type: 'education',
    role: 'Class XII — Science (PCM + CS)',
    organization: 'Your School Name', // TODO: replace
    location: 'India',
    startDate: '2020',
    endDate: '2022',
    description: [
      'Scored 95%+ in boards. (TODO: update)',
      'Won State-level Informatics Practices Olympiad.',
    ],
    tags: ['CS', 'Mathematics', 'Physics'],
    icon: 'book-open',
  },
];

// ── Contact ───────────────────────────────────────────────────────────────────
// TODO: Replace with your real EmailJS credentials
// Sign up at https://www.emailjs.com and create a service + template
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID',       // TODO: from EmailJS dashboard
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID',     // TODO: from EmailJS dashboard
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY',       // TODO: from EmailJS dashboard
};

// TODO: Replace with your real email
export const CONTACT_EMAIL = 'muditworks6@gmail.com';
