// == Projects ==================================================
export type Project = {
  id: number;
  icon: string;
  area: string;
  topics: string[];
  project: {
    title: string;
    description: string;
    githubLink: string | null;
  };
};

// == Technologies ==================================================
export const TechnologyLearningStatus = {
  Current: 'Current',
  Learning: 'Learning',
  Used: 'Used',
  Unknown: 'Unknown'
} as const;
export type TechnologyLearningStatus =
  (typeof TechnologyLearningStatus)[keyof typeof TechnologyLearningStatus];

export const technologiesNames = [
  'Android (Java)',
  'Android (Kotlin)',
  'AWS',
  'Bash',
  'Design Patterns',
  'Django',
  'Docker',
  'Domain Driven Design (DDD)',
  'Firebase',
  'GCP',
  'Gitlab',
  'GitHub',
  'Golang',
  'GraphQL',
  'Heroku',
  'IOS (Swift)',
  'JavaScript',
  'Testing',
  'Kubernetes',
  'Laravel',
  'MariaDB',
  'MongoDB',
  'MySQL',
  'NextJS',
  'Node.js',
  'PHP',
  'PostgreSQL',
  'Python',
  'React',
  'React Native',
  'Redis',
  'Ruby on Rails',
  'RxJS',
  'SQL Server',
  'Systems Design',
  'Terraform',
  'TypeScript',
  'VueJS'
] as const;
export type TechnologiesNames = (typeof technologiesNames)[number];
export type TechnologyDetails = {
  monthsOfExperience: number;
  icon?: string;
  learningStatus: TechnologyLearningStatus;
};

// == Professional Experience =====================================================
export type ProfessionalExperience = {
  id: string;
  jobTitle: string;
  startDate: string;
  endDate: string | null;
  companyName: string;
  companyLogo: string;
  companyUrl: string;
  description: string;
  achievements: string[];
  technologies: Map<TechnologiesNames, number>;
};
