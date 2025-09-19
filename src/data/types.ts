// == Images =====================================================
export const enum SocialIconsImages {
  Github = '/assets/images/social-icons/github.png',
  Linkedin = '/assets/images/social-icons/linkedin.png'
}

export const enum GeneralImages {
  Printer = '/assets/images/printer.png',
  Profile = '/assets/images/me.jpg'
}

export const enum CompaniesImages {
  GaragePhoto = '/assets/images/companies/garage.png',
  HmsPhoto = '/assets/images/companies/hms.png',
  IngeniatPhoto = '/assets/images/companies/ingeniat.png',
  IntersogPhoto = '/assets/images/companies/intersog.png',
  SensaiPhoto = '/assets/images/companies/sensai.jpg',
  SintecPhoto = '/assets/images/companies/sintec.png'
}

// == Positions =====================================================
export interface IPosition {
  name: string;
  startAt: string;
  endAt?: string;
  company: {
    name: string;
    photo: string;
  };
  responsibilities: string[];
  achievements: string[];
  technicalEnv: string;
}

// == Work Experience ==================================================
export type WorkExperience = {
  positionName: string;
  startedAt: string;
  finishedAt: string;
  companyName: string;
  companyPhoto: string;
  responsibilities: string[];
  achievements: string[];
  technologies: Map<TechnologiesNames, number>;
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

