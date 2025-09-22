import { professionalExperiences } from './professional-experience';
import { TechnologiesNames, TechnologyDetails, TechnologyLearningStatus } from './types';

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
    icon: iconsBasePath + '/nodejs/nodejs-original.svg',
    learningStatus: TechnologyLearningStatus.Current
  },
  Firebase: {
    ...technologyBaseConfig,
    icon: iconsBasePath + '/firebase/firebase-plain.svg',
    learningStatus: TechnologyLearningStatus.Current
  },
  GCP: {
    ...technologyBaseConfig,
    icon: iconsBasePath + '/googlecloud/googlecloud-original.svg',
    learningStatus: TechnologyLearningStatus.Current
  },
  Docker: {
    ...technologyBaseConfig,
    icon: iconsBasePath + '/docker/docker-original.svg',
    learningStatus: TechnologyLearningStatus.Current
  },
  NextJS: {
    ...technologyBaseConfig,
    icon: iconsBasePath + '/nextjs/nextjs-original.svg',
    learningStatus: TechnologyLearningStatus.Current
  },
  GraphQL: {
    ...technologyBaseConfig,
    icon: iconsBasePath + '/graphql/graphql-plain.svg',
    learningStatus: TechnologyLearningStatus.Current
  },
  Django: {
    ...technologyBaseConfig,
    icon: iconsBasePath + '/django/django-plain.svg',
    learningStatus: TechnologyLearningStatus.Current
  },
  Kubernetes: {
    ...technologyBaseConfig,
    icon: iconsBasePath + '/kubernetes/kubernetes-plain.svg',
    learningStatus: TechnologyLearningStatus.Current
  },
  Golang: {
    ...technologyBaseConfig,
    icon: iconsBasePath + '/go/go-original.svg',
    learningStatus: TechnologyLearningStatus.Current
  },
  PostgreSQL: {
    ...technologyBaseConfig,
    icon: iconsBasePath + '/postgresql/postgresql-original.svg',
    learningStatus: TechnologyLearningStatus.Current
  },
  // -- Used --------------------------------------------
  Github: {
    ...technologyBaseConfig,
    icon: iconsBasePath + '/git/git-original.svg',
    learningStatus: TechnologyLearningStatus.Used
  },
  Testing: {
    ...technologyBaseConfig,
    icon: iconsBasePath + '/jest/jest-plain.svg',
    learningStatus: TechnologyLearningStatus.Used
  },
  RxJS: {
    ...technologyBaseConfig,
    icon: iconsBasePath + '/rxjs/rxjs-original.svg',
    learningStatus: TechnologyLearningStatus.Used
  },
  'Design Patterns': {
    ...technologyBaseConfig,
    icon: iconsBasePath + '/bash/bash-original.svg',
    learningStatus: TechnologyLearningStatus.Used
  },
  'Domain Driven Design (DDD)': {
    ...technologyBaseConfig,
    icon: iconsBasePath + '/bash/bash-original.svg',
    learningStatus: TechnologyLearningStatus.Used
  },
  Terraform: {
    ...technologyBaseConfig,
    icon: iconsBasePath + '/terraform/terraform-original.svg',
    learningStatus: TechnologyLearningStatus.Used
  },
  AWS: {
    ...technologyBaseConfig,
    icon: iconsBasePath + '/amazonwebservices/amazonwebservices-plain-wordmark.svg',
    learningStatus: TechnologyLearningStatus.Used
  },
  Python: {
    ...technologyBaseConfig,
    icon: iconsBasePath + '/python/python-original.svg',
    learningStatus: TechnologyLearningStatus.Used
  },
  Gitlab: {
    ...technologyBaseConfig,
    icon: iconsBasePath + '/gitlab/gitlab-original.svg',
    learningStatus: TechnologyLearningStatus.Used
  },
  MongoDB: {
    ...technologyBaseConfig,
    icon: iconsBasePath + '/mongodb/mongodb-original.svg',
    learningStatus: TechnologyLearningStatus.Used
  },
  'React Native': {
    ...technologyBaseConfig,
    icon: iconsBasePath + '/reactnative/reactnative-original.svg',
    learningStatus: TechnologyLearningStatus.Used
  },
  Heroku: {
    ...technologyBaseConfig,
    icon: iconsBasePath + '/heroku/heroku-original.svg',
    learningStatus: TechnologyLearningStatus.Used
  },
  Laravel: {
    ...technologyBaseConfig,
    icon: iconsBasePath + '/laravel/laravel-original.svg',
    learningStatus: TechnologyLearningStatus.Used
  },
  Javascript: {
    ...technologyBaseConfig,
    icon: iconsBasePath + '/javascript/javascript-original.svg',
    learningStatus: TechnologyLearningStatus.Used
  },
  VueJS: {
    ...technologyBaseConfig,
    icon: iconsBasePath + '/vuejs/vuejs-original.svg',
    learningStatus: TechnologyLearningStatus.Used
  },
  Php: {
    ...technologyBaseConfig,
    icon: iconsBasePath + '/php/php-original.svg',
    learningStatus: TechnologyLearningStatus.Used
  },
  'Android w/ Java': {
    ...technologyBaseConfig,
    icon: iconsBasePath + '/android/android-original.svg',
    learningStatus: TechnologyLearningStatus.Used
  },
  'Android w/Kotlin': {
    ...technologyBaseConfig,
    icon: iconsBasePath + '/kotlin/kotlin-original.svg',
    learningStatus: TechnologyLearningStatus.Used
  },
  'IOS w/ Swift': {
    ...technologyBaseConfig,
    icon: iconsBasePath + '/swift/swift-original.svg',
    learningStatus: TechnologyLearningStatus.Used
  },
  MySQL: {
    ...technologyBaseConfig,
    icon: iconsBasePath + '/mysql/mysql-original.svg',
    learningStatus: TechnologyLearningStatus.Used
  },
  MariaDB: {
    ...technologyBaseConfig,
    icon: iconsBasePath + '/mariadb/mariadb-original.svg',
    learningStatus: TechnologyLearningStatus.Used
  },
  'SQL Server': {
    ...technologyBaseConfig,
    icon: iconsBasePath + '/azuresqldatabase/azuresqldatabase-original.svg',
    learningStatus: TechnologyLearningStatus.Used
  },
  Bash: {
    ...technologyBaseConfig,
    icon: iconsBasePath + '/bash/bash-original.svg',
    learningStatus: TechnologyLearningStatus.Used
  },
  'Systems Design (Cloud Architecture)': {
    ...technologyBaseConfig,
    icon: iconsBasePath + '/bash/bash-original.svg',
    learningStatus: TechnologyLearningStatus.Used
  },
  Redis: {
    ...technologyBaseConfig,
    icon: iconsBasePath + '/redis/redis-original.svg',
    learningStatus: TechnologyLearningStatus.Used
  },
  'Ruby on Rails': {
    ...technologyBaseConfig,
    icon: iconsBasePath + '/rails/rails-plain.svg',
    learningStatus: TechnologyLearningStatus.Used
  }
};

/**
 * Computes the total months of experience for each technology
 * and returns a deep copy of the technologies with updated experience
 */
function computeTechnologiesWithExperience(): Record<TechnologiesNames, TechnologyDetails> {
  const technologiesWithExperience = {} as Record<TechnologiesNames, TechnologyDetails>;

  // Deep copy the base technologies
  for (const [name, details] of Object.entries(technologiesExperience)) {
    technologiesWithExperience[name as TechnologiesNames] = {
      ...details,
      monthsOfExperience: 0 // Reset to 0 for calculation
    };
  }

  // Calculate total months of experience from professional experiences
  for (const experience of professionalExperiences) {
    for (const [technologyName, months] of experience.technologies) {
      if (technologiesWithExperience[technologyName]) {
        technologiesWithExperience[technologyName].monthsOfExperience += months;
      }
    }
  }

  return technologiesWithExperience;
}

/**
 * Groups technologies by their learning status
 */
function groupTechnologiesByStatus(
  technologies: Record<TechnologiesNames, TechnologyDetails>
): Record<TechnologyLearningStatus, Map<TechnologiesNames, TechnologyDetails>> {
  const grouped = {
    [TechnologyLearningStatus.Current]: new Map<TechnologiesNames, TechnologyDetails>(),
    [TechnologyLearningStatus.Learning]: new Map<TechnologiesNames, TechnologyDetails>(),
    [TechnologyLearningStatus.Used]: new Map<TechnologiesNames, TechnologyDetails>(),
    [TechnologyLearningStatus.Unknown]: new Map<TechnologiesNames, TechnologyDetails>()
  };

  for (const [name, details] of Object.entries(technologies)) {
    const technologyName = name as TechnologiesNames;
    const technologyDetails = details as TechnologyDetails;
    grouped[technologyDetails.learningStatus].set(technologyName, technologyDetails);
  }

  return grouped;
}

/**
 * Computed technologies with experience - always fresh data
 */
const technologiesWithExperience = computeTechnologiesWithExperience();

/**
 * Technologies grouped by learning status - always computed and available
 */
const technologiesExperienceByStatus = groupTechnologiesByStatus(technologiesWithExperience);

export {
  technologiesExperience, technologiesExperienceByStatus, technologiesWithExperience
};

