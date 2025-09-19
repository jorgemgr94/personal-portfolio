import { TechnologyDetails, TechnologiesNames, TechnologyLearningStatus } from './types';
import { professionalExperiences } from './work-experience';

const iconsBasePath = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

/**
 * This is the base technologies experience
 */

const technologyBaseConfig: TechnologyDetails = {
  icon: iconsBasePath + '/bash/bash-original.svg', // Generic tech icon
  monthsOfExperience: 0,
  learningStatus: TechnologyLearningStatus.Unknown
}

const technologiesExperience: Record<TechnologiesNames, TechnologyDetails> = {
  Typescript: {
    ...technologyBaseConfig,
    icon: iconsBasePath + '/typescript/typescript-original.svg',
    learningStatus: TechnologyLearningStatus.Current
  },
  React: {
    ...technologyBaseConfig,
    icon: iconsBasePath + '/react/react-original.svg',
    learningStatus: TechnologyLearningStatus.Current
  },
  NodeJs: {
    ...technologyBaseConfig,
    learningStatus: TechnologyLearningStatus.Current
  },
  // -- Learning --------------------------------------------
  CSS: {
    ...technologyBaseConfig,
  },
  HTML: {
    ...technologyBaseConfig,
  },
  Firebase: {
    ...technologyBaseConfig,
  },
  GCP: {
    ...technologyBaseConfig,
  },
  Docker: {
    ...technologyBaseConfig,
  },
  Jest: {
    ...technologyBaseConfig,
  },
  RxJS: {
    ...technologyBaseConfig,
  },
  NextJS: {
    ...technologyBaseConfig,
  },
  // -- Used --------------------------------------------
  Github: {
    ...technologyBaseConfig,
  },
  GraphQL: {
    ...technologyBaseConfig,
  },
  Kubernetes: {
    ...technologyBaseConfig,
  },
  'Domain Driven Design (DDD)': {
    ...technologyBaseConfig,
  },
  'Design Patterns': {
    ...technologyBaseConfig,
  },
  'Systems Design (Cloud Architecture)': {
    ...technologyBaseConfig,
  },
  Terraform: {
    ...technologyBaseConfig,
  },
  Golang: {
    ...technologyBaseConfig,
  },
  AWS: {
    ...technologyBaseConfig,
  },
  Python: {
    ...technologyBaseConfig,
  },
  Gitlab: {
    ...technologyBaseConfig,
  },
  PostgreSQL: {
    ...technologyBaseConfig,
  },
  MongoDB: {
    ...technologyBaseConfig,
  },
  'React Native': {
    ...technologyBaseConfig,
  },
  Heroku: {
    ...technologyBaseConfig,
  },
  Laravel: {
    ...technologyBaseConfig,
  },
  Javascript: {
    ...technologyBaseConfig,
  },
  VueJS: {
    ...technologyBaseConfig,
  },
  Php: {
    ...technologyBaseConfig,
  },
  'Android w/ Java': {
    ...technologyBaseConfig,
  },
  'Android w/Kotlin': {
    ...technologyBaseConfig,
  },
  'IOS w/ Swift': {
    ...technologyBaseConfig,
  },
  MySQL: {
    ...technologyBaseConfig,
  },
  MariaDB: {
    ...technologyBaseConfig,
  },
  'SQL Server': {
    ...technologyBaseConfig,
  },
  Bash: {
    ...technologyBaseConfig,
  },
  Redis: {
    ...technologyBaseConfig,
  },
  'Ruby on Rails': {
    ...technologyBaseConfig,
  }
};

/**
 * This is the technologies experience by status
 */
const technologiesExperienceByStatus: Record<TechnologyLearningStatus, Map<TechnologiesNames, TechnologyDetails>> = {
  [TechnologyLearningStatus.Current]: new Map(),
  [TechnologyLearningStatus.Learning]: new Map(),
  [TechnologyLearningStatus.Used]: new Map(),
  [TechnologyLearningStatus.Unknown]: new Map()
};

function computeTechnologiesExperience() {
  for (const experience of professionalExperiences) {
    for (const [technologyName, months] of experience.technologies) {
      // Update the technology details years of experience
      const technologyDetails = technologiesExperience[technologyName]
      technologyDetails.monthsOfExperience += months;

      // Map the technology details by status
      technologiesExperienceByStatus[technologyDetails.learningStatus].set(technologyName, technologyDetails);
    }
  }
}

computeTechnologiesExperience();

export {
  technologiesExperience,
  technologiesExperienceByStatus
}

// -----------------
const technologiesList = [
  // -- Current --------------------------------------------
  {
    name: 'Typescript',
    status: TechnologyLearningStatus.Current,
    icon: iconsBasePath + '/typescript/typescript-original.svg',
    yearsOfExp: '4yrs'
  },
  {
    name: 'React',
    status: TechnologyLearningStatus.Current,
    icon: iconsBasePath + '/react/react-original.svg',
    yearsOfExp: '7yrs'
  },
  {
    name: 'NodeJs',
    status: TechnologyLearningStatus.Current,
    icon: iconsBasePath + '/nodejs/nodejs-original.svg',
    yearsOfExp: '5yrs'
  },
  {
    name: 'Firebase',
    status: TechnologyLearningStatus.Current,
    icon: iconsBasePath + '/firebase/firebase-plain.svg',
    yearsOfExp: '4yrs'
  },
  {
    name: 'GCP',
    status: TechnologyLearningStatus.Current,
    icon: iconsBasePath + '/googlecloud/googlecloud-original.svg',
    yearsOfExp: '4yrs'
  },
  {
    name: 'Docker',
    status: TechnologyLearningStatus.Current,
    icon: iconsBasePath + '/docker/docker-original.svg',
    yearsOfExp: '4yrs'
  },
  {
    name: 'Jest',
    status: TechnologyLearningStatus.Current,
    icon: iconsBasePath + '/jest/jest-plain.svg',
    yearsOfExp: '1yrs'
  },
  {
    name: 'RxJS',
    status: TechnologyLearningStatus.Current,
    icon: '/assets/images/technologies/rxjs.png',
    yearsOfExp: '2yrs'
  },
  {
    name: 'NextJS',
    status: TechnologyLearningStatus.Current,
    icon: '/assets/images/technologies/nextjs.png',
    yearsOfExp: '2yrs'
  },
  {
    name: 'Github',
    status: TechnologyLearningStatus.Current,
    icon: iconsBasePath + '/git/git-original.svg',
    yearsOfExp: '7yrs'
  },
  {
    name: 'GraphQL',
    status: TechnologyLearningStatus.Current,
    icon: iconsBasePath + '/graphql/graphql-plain.svg',
    yearsOfExp: '1yrs'
  },

  // -- Learning -------------------------------------------
  { name: 'Kubernetes', status: TechnologyLearningStatus.Learning },
  { name: 'Domain Driven Design (DDD)', status: TechnologyLearningStatus.Learning },
  { name: 'Design Patterns', status: TechnologyLearningStatus.Learning },
  {
    name: 'Systems Design (Cloud Architecture)',
    status: TechnologyLearningStatus.Learning
  },
  { name: 'Terraform', status: TechnologyLearningStatus.Learning },
  { name: 'Golang', status: TechnologyLearningStatus.Learning },

  { name: 'AWS', status: TechnologyLearningStatus.Used },
  { name: 'Python', status: TechnologyLearningStatus.Used },
  { name: 'Gitlab', status: TechnologyLearningStatus.Used },
  { name: 'PostgreSQL', status: TechnologyLearningStatus.Used },
  { name: 'MongoDB', status: TechnologyLearningStatus.Used },
  { name: 'React Native', status: TechnologyLearningStatus.Used },
  { name: 'Heroku', status: TechnologyLearningStatus.Used },
  { name: 'Laravel', status: TechnologyLearningStatus.Used },
  { name: 'Javascript', status: TechnologyLearningStatus.Used },
  { name: 'VueJS', status: TechnologyLearningStatus.Used },
  { name: 'Php', status: TechnologyLearningStatus.Used },
  { name: 'Android w/ Java', status: TechnologyLearningStatus.Used },
  { name: 'Android w/Kotlin', status: TechnologyLearningStatus.Used },
  { name: 'IOS w/ Swift', status: TechnologyLearningStatus.Used },
  { name: 'MySQL', status: TechnologyLearningStatus.Used },
  { name: 'MariaDB', status: TechnologyLearningStatus.Used },
  { name: 'SQL Server', status: TechnologyLearningStatus.Used },
  { name: 'Bash', status: TechnologyLearningStatus.Used },
  { name: 'Redis', status: TechnologyLearningStatus.Used },
  { name: 'Ruby on Rails', status: TechnologyLearningStatus.Used }
];

const filterByStatus = (status: TechnologyLearningStatus) =>
  technologiesList.filter((technology) => technology.status === status);

export const technologies = {
  current: filterByStatus(TechnologyLearningStatus.Current),
  learning: filterByStatus(TechnologyLearningStatus.Learning),
  used: filterByStatus(TechnologyLearningStatus.Used)
};
