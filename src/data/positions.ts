import { CompaniesImages, IPosition } from './types';

export const positions: IPosition[] = [
  {
    name: 'Backend Engineer (Contractor)',
    startAt: '2021-09-06',
    endAt: undefined,
    company: {
      name: 'Intersog (Ureeka, ZenBusiness)',
      photo: CompaniesImages.IntersogPhoto
    },
    responsibilities: [
      `Software design, architect and development of back-end features for the Ureeka platform, considering concepts
      such as distributed computing, eventual consistency, design patterns, and backward compatibility`,
      `Code maintenance, bug fixes and improvements across all back-end serverless services such as Schedule functions,
      HTTP functions, Firestore Triggers functions.`,
      `Third party integrations considering concepts such as quotas, limits, backward compatibility, security,
      and data consistency.`
    ],
    achievements: [
      ` Adaptability and willingness to learn, meanwhile contributing to the development of the Ureeka platform,
      which required working with complex concepts such as distributed computing, eventual consistency, design patterns,
      backward compatibility, etc.`,
      `Improved the performance (latency) of the distributed tasks queue (Cloud Tasks) by implementing best practices,
      as well as an increase of 8x in the enqueue rate (7.5k tasks per minute per queue/scheduler.)`,
      `Optimized software observability by instrumenting the application logger to leverage products such as Cloud Trace,
      Cloud Logging, Error reporting, and logs-based alert policies in Cloud Monitoring resulting in better
      identification and resolution of issues.`
    ],
    technicalEnv: 'Typescript, React, RxJS, NodeJs, Firebase, GCP, Docker.'
  },
  {
    name: 'Tech Lead / Digital Solutions Manager',
    startAt: '2020-02-01',
    endAt: '2021-09-03',
    company: {
      name: 'Sintec',
      photo: CompaniesImages.SintecPhoto
    },
    responsibilities: [
      'Managed a team of 2 software engineers, leading them in the development and implementation of features.',
      'Software requirements gathering, priorities planning and schedule task to ensure effective project management.',
      'Collaborate with cross-functional teams to establish projects.',
      'Supported software development efforts by providing oversight, guidance, and expertise.',
      'Track progress and kept stakeholders informed of project status with JIRA.',
      "Oversaw the company's GitHub repositories, ensuring security and code consistency.",
      "Oversaw the company's Google Cloud Platform resources, ensuring security, naming consistency and resources creation."
    ],
    achievements: [
      `Improved cost-efficiency for the company's minimum viable products (MVPs) by transitioning from dedicated servers
      (EC2, Compute Engine) to serverless environments (Cloud Functions, Cloud Run).`,
      'Standardized NodeJS CI/CD deployment using Cloud Build to reduce deployment time and effort.',
      `Established partnerships with software development providers to enlarge the company's delivery capacity,
      ensuring the accomplishment of software quality, priorities, and delivery in time.`
    ],
    technicalEnv:
      'React, Typescript, NextJS, Firebase, MongoDB, NodeJs, Python, PostgreSQL, Git,  GCP, AWS, Docker.'
  },
  {
    name: 'Full-stack Engineer / Consultant',
    startAt: '2019-02-01',
    endAt: '2020-02-01',
    company: {
      name: 'Sintec',
      photo: CompaniesImages.SintecPhoto
    },
    responsibilities: [
      'Software design, architect and development of front-end, back-end, and mobile features.',
      'Software requirements gathering, priorities planning and schedule task to ensure effective projects management.',
      'Conduct research and testing of new technologies for the company (IoT)',
      'Code maintenance, bug fixes and improvements of front-end, back-end, and mobile features.'
    ],
    achievements: [
      `Lead the software development of Dynamo, an IoT platform that tracks users' real-time positions in a
      CEDIS using around 150 beacon tags. The platform store the data in a non-relational database (MongoDB)
      and visualize it on a webpage, enabling future analytics about movements and times.`,
      `Introduced innovative technologies (Serverless, Firebase, NodeJS) to enhance quality and scalability,
       thereby providing a competitive advantage.`
    ],
    technicalEnv:
      'React, React Native, NextJS, Typescript, Firebase, MongoDB, NodeJs, Python, Php, MySQL, PostgreSQL, Git, GCP, AWS, Docker.'
  },
  {
    name: 'Full-stack Engineer (Remote, Part time)',
    startAt: '2019-07-01',
    endAt: '2019-12-31',
    company: {
      name: 'Garage (Startup)',
      photo: CompaniesImages.GaragePhoto
    },
    responsibilities: [
      'Software design, architect and development of front-end, back-end features.',
      'Actively participate on SCRUM events, issues definition and punctuation',
      'Code maintenance, bug fixes and improvements of front-end and back-end features.'
    ],
    achievements: [
      'Redesigned and simplify the quoting process in favor of functional reactive programming using Mobx.',
      `Gained proficiency in modern development practices and tools, including containerization (Docker), code replication
      (migrations and seeds), automated testing (Jest, RSpec), DevOps (GitLab CI/CD, Eslint), and SOLID principles.`
    ],
    technicalEnv:
      'Ruby on Rails, React, GCP, Jest, Mobx, Typescript, PostgreSQL, Heroku, Git, Docker, Gitlab.'
  },
  {
    name: 'Full-stack Engineer',
    startAt: '2018-08-01',
    endAt: '2019-02-01',
    company: {
      name: 'SENSAI Empower Success (Startup) / Metalsa',
      photo: CompaniesImages.SensaiPhoto
    },
    responsibilities: [
      `Software design, architect and development of front-end, back-end, and mobile features considering concepts such as multi-stage,
      multiple zones, multi-language`,
      'Actively participate on SCRUM events, issues definition and punctuation',
      'Code maintenance, bug fixes and improvements of front-end, back-end, and mobile.'
    ],
    achievements: [
      `Contributed to the successful migration of a year and a half back-end codebase from NodeJS to Ruby on Rails in just 3 months,
       earning trust and becoming a strong team member.`,
      `Gained experience in modern software development methodologies and collaborated effectively with cross-functional teams,
       including design and quality assurance.`
    ],
    technicalEnv:
      'React, React Native, NodeJs, Ruby on Rails, MySQL, SQL Server, AWS, Git, MQTT.'
  },
  {
    name: 'Tech Lead',
    startAt: '2016-10-01',
    endAt: '2018-07-01',
    company: {
      name: 'HMS Sistemas de Información / ONCARE',
      photo: CompaniesImages.HmsPhoto
    },
    responsibilities: [
      'Managed a team of 5 software engineers, leading them in the development and implementation of features.',
      'Software requirements gathering, priorities planning and schedule task to ensure effective project management.',
      'Conduct research and testing of new technologies for the company (Git, Mobile, RIS & PACS)',
      'Supervised the definition and design of solutions, including process diagrams, UML diagrams, database design.',
      'Supported software development efforts by providing oversight, guidance, and expertise.',
      'Automate periodic processes and code refactoring with Bash scripts.',
      'Participated in recruitment processes to identify and onboard new talent.'
    ],
    achievements: [
      `Developed the software to implement a competitive advantage strategy by transitioning from selling medicine
      boxes to selling it by grams or milliliters.`,
      'Lead the software development of new business units including an analysis laboratory, ambulatory surgery center, and RIS & PACS.',
      'Lead the development of an iOS app for the ambulatory surgery center.'
    ],
    technicalEnv:
      'Php, Html, CSS, Javascript, MySQL, Bash, AWS, React, Android w/ Kotlin, IOS w/ Swift, Git.'
  },

];
