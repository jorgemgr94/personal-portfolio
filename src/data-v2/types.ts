// == Projects ==================================================
export type Project = {
  id: number;
  icon: string;
  learning: {
    area: string;
    topics: string[];
  };
  project: {
    title: string;
    features: string[];
    githubLink: string | null;
  };
}

// == Technologies ==================================================
export const TechnologyLearningStatus = {
  Current: 'Current',
  Learning: 'Learning',
  Used: 'Used',
  Unknown: 'Unknown'
} as const;
export type TechnologyLearningStatus = typeof TechnologyLearningStatus[keyof typeof TechnologyLearningStatus];

export const technologiesNames = [
  'Android w/ Java', 'Android w/Kotlin', 'AWS', 'Bash', 'CSS', 'Design Patterns',
  'Docker', 'Domain Driven Design (DDD)', 'Firebase', 'GCP', 'Gitlab',
  'Github', 'Golang', 'GraphQL', 'HTML', 'Heroku', 'IOS w/ Swift', 'Javascript',
  'Jest', 'Kubernetes', 'Laravel', 'MariaDB', 'MongoDB', 'MySQL',
  'NextJS', 'NodeJs', 'Php', 'PostgreSQL', 'Python', 'React', 'React Native',
  'Redis', 'Ruby on Rails', 'RxJS', 'SQL Server', 'Systems Design (Cloud Architecture)',
  'Terraform', 'Typescript', 'VueJS'
] as const;
export type TechnologiesNames = typeof technologiesNames[number];
export type TechnologyDetails = {
  monthsOfExperience: number;
  icon?: string;
  learningStatus: TechnologyLearningStatus;
}

// == Professional Experience =====================================================
export type ProfessionalExperience = {
  id: string;
  jobTitle: string;
  startDate: string;
  endDate: string | null;
  companyName: string;
  companyLogo: string;
  responsibilities: string[];
  achievements: string[];
  technologies: Map<TechnologiesNames, number>;
}

