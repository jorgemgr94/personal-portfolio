import { calculateMonthsBetween } from '@/helpers/date';
import type { ProfessionalExperience, TechnologiesNames } from './types';

function createFullExperienceTechArray(startDate: string, endDate: string | null, techList: TechnologiesNames[]): [TechnologiesNames, number][] {
  const months = calculateMonthsBetween(startDate, endDate);
  return techList.map(tech => [tech, months]);
}

export const professionalExperiences: ProfessionalExperience[] = [
  {
    id: '01996961-47be-7a79-a66f-12e7b13eec86',
    jobTitle: 'Senior Staff Engineer',
    startDate: '2023-09-01',
    endDate: null,
    companyName: 'ZenBusiness',
    companyLogo: '/assets/images/companies/zenbusiness.png',
    companyUrl: 'https://www.linkedin.com/company/zenbusiness-pbc',
    responsibilities: [
      `Architected and implemented full-stack solutions across multiple microservices using Node.js, Django, React, and Golang,
      handling everything from service spin-up to feature delivery and project completion.`,

      `Led product-related enhancements and early adoption of company initiatives including Microfrontend Architecture (MFEs),
      Event-driven design patterns, and microservice redesigns, participating in architectural decisions and driving adoption.`,

      `Contributed to technical initiatives and architectural decisions across multiple teams,
      participating in the adoption of modern patterns and helping establish technical standards for
      company-wide initiatives.`,

      `Implemented robust third-party integrations with comprehensive error handling, rate limiting, security protocols,
      and data consistency mechanisms across distributed systems.`
    ],
    achievements: [
      `Led a frontend migration from legacy architecture to Microfrontend Architecture (MFE) with zero downtime,
      improving scalability and maintainability while establishing new architectural standards.`,

      `Led the development of a Google Profile API consumer service that seamlessly connects customer Google profiles and
      provides comprehensive metrics dashboards.`,

      `Contributed to company-wide reusable Fastify packages, establishing standardized patterns.`,

      `Contributed to the Enterprise API development team, designing and implementing secure public-facing APIs that expose
      company resources while ensuring robust business logic.`,

      `Participated in the development of a backend service from scratch, integrating with an Accountant partner to deliver Tax products
      using an event-driven design approach, ensuring scalable and maintainable architecture.`
    ],
    technologies: new Map(
      [
        ...createFullExperienceTechArray('2023-09-01', null, [
          'React',
          'NodeJs',
          'Typescript',
          'GCP',
          'Docker',
          'Kubernetes',
          'GraphQL',
          'PostgreSQL',
        ]),
        ['Firebase', 6],
        ['Golang', 6],
        ['Django', 6],
        ['Terraform', 6],
      ]
    )
  },
  {
    id: '01996961-47be-7a79-a66f-12e7b13eec87',
    jobTitle: 'Senior Software Engineer',
    startDate: '2021-09-06',
    endDate: '2023-09-01',
    companyName: 'Ureeka',
    companyLogo: '/assets/images/companies/ureeka.png',
    companyUrl: 'https://www.crunchbase.com/organization/ureeka',
    responsibilities: [
      `Developed scalable back-end features for the Ureeka platform, implementing advanced concepts
      including distributed computing, eventual consistency, design patterns, and backward compatibility.`,
      `Optimized serverless services including Cloud Functions (Scheduled, HTTP, Firestore Triggers),
      ensuring high availability and performance across the platform.`,
      `Implemented robust third-party integrations with comprehensive error handling, rate limiting,
      security protocols, and data consistency mechanisms.`
    ],
    achievements: [
      `Mastered complex distributed systems concepts including eventual consistency,
      design patterns, and backward compatibility while contributing to the Ureeka platform development.`,
      `Optimized distributed task queue performance, achieving 8x improvement in enqueue rate
      (from ~940 to 7,500 tasks per minute per queue/scheduler).`,
      `Implemented comprehensive logging instrumentation with Cloud Trace, Cloud Logging,
      Error Reporting, and automated alert policies.`
    ],
    technologies: new Map([
      ['Typescript', 23],
      ['React', 23],
      ['NodeJs', 23],
      ['Firebase', 23],
      ['GCP', 23],
      ['Docker', 23],
      ['RxJS', 12],
    ])
  },
  {
    id: '01996961-47c6-78ea-a2d3-902613c6a28e',
    jobTitle: 'Tech Lead / Digital Solutions Manager',
    startDate: '2020-02-01',
    endDate: '2021-09-03',
    companyName: 'Sintec',
    companyLogo: '/assets/images/companies/sintec.png',
    companyUrl: 'https://www.linkedin.com/company/sintec',
    responsibilities: [
      `Led and mentored a team of 2 software engineers, driving feature development and
      implementation while fostering professional growth.`,
      `Conducted consultative software requirements gathering through stakeholder interviews
       and technical analysis to inform strategic priority planning and task scheduling.`,
      `Worked with cross-functional teams across other consultative areas to establish
       project road-maps and technical specifications.`,
      `Provided technical oversight, architectural guidance, and expertise to support
      software development initiatives across multiple projects.`,
      `Implemented comprehensive project tracking using JIRA, maintaining stakeholder
      communication and ensuring transparent progress reporting.`,
      `Established and maintained company-wide GitHub repository standards and code consistency guidelines.`,
      `Managed Google Cloud Platform infrastructure, ensuring security compliance, resource
      optimization, and consistent naming conventions.`
    ],
    achievements: [
      `Reduced infrastructure costs by transitioning from dedicated servers
      (EC2, Compute Engine) to serverless environments (Cloud Functions, Cloud Run).`,
      `Automated NodeJS CI/CD deployment using Cloud Build, improving deployment time and reducing manual
      deployment errors.`,
      `Built partnerships with 3 software development providers, expanding the company's delivery capacity
      while maintaining software quality standards and on-time delivery commitments.`
    ],
    technologies: new Map([
      ['React', 19],
      ['Typescript', 19],
      ['NextJS', 19],
      ['Firebase', 19],
      ['MongoDB', 10],
      ['NodeJs', 19],
      ['Github', 19],
      ['GCP', 19],
      ['Docker', 19],
      ['AWS', 10],
      ['Python', 10],
      ['PostgreSQL', 10],
    ])
  },
  {
    id: '01996961-47c6-78ea-a2d3-9027820077e9',
    jobTitle: 'Full-stack Engineer / Consultant',
    startDate: '2019-02-01',
    endDate: '2020-02-01',
    companyName: 'Sintec',
    companyLogo: '/assets/images/companies/sintec.png',
    companyUrl: 'https://www.linkedin.com/company/sintec',
    responsibilities: [
      `Architected full-stack solutions including front-end, back-end, and mobile applications.`,
      `Conducted consultative software requirements gathering through stakeholder interviews and
      technical analysis to inform strategic priority planning and task scheduling.`,
      `Conducted extensive research and testing of emerging technologies, particularly IoT solutions,
      to drive innovation and competitive advantage.`,
      `Maintained and optimized existing codebases across front-end, back-end, and mobile platforms,
      implementing bug fixes and performance improvements.`
    ],
    achievements: [
      `Led the development of Dynamo, an innovative IoT platform tracking real-time user positions
      in distribution centers using 150+ beacon tags, storing data in MongoDB and providing real-time
      analytics dashboards.`,
      `Introduced modern technologies (Serverless, Firebase, NodeJS) within the company,
      establishing new standards for quality and scalability.`
    ],
    technologies: new Map([
      ['React', 12],
      ['React Native', 6],
      ['NextJS', 6],
      ['Typescript', 6],
      ['Firebase', 6],
      ['MongoDB', 6],
      ['NodeJs', 12],
      ['Python', 6],
      ['Php', 6],
      ['MySQL', 12],
      ['PostgreSQL', 6],
      ['Github', 12],
      ['GCP', 12],
      ['AWS', 6],
      ['Docker', 6]
    ])
  },
  {
    id: '01996961-47c6-78ea-a2d3-9028104b5c42',
    jobTitle: 'Full-stack Engineer',
    startDate: '2019-07-01',
    endDate: '2019-12-31',
    companyName: 'Garage',
    companyLogo: '/assets/images/companies/garage.png',
    companyUrl: 'https://www.crunchbase.com/organization/garage',
    responsibilities: [
      `Architected full-stack solutions, developing both front-end and back-end features
      for the startup's core platform.`,
      `Participated in SCRUM ceremonies, contributing to user story definition, estimation,
      and sprint planning processes.`,
      `Maintained and optimized existing codebases, implementing bug fixes and performance improvements
      across front-end and back-end systems.`
    ],
    achievements: [
      `Simplified the quoting process by implementing functional reactive programming with MobX,
      improving user experience.`,
      `Implemented modern development practices including containerization (Docker), database migrations,
      automated testing (Jest, RSpec), DevOps (GitLab CI/CD), and SOLID principles, significantly
      improving code quality and deployment efficiency.`
    ],
    technologies: new Map([
      ['Ruby on Rails', 5],
      ['React', 5],
      ['GCP', 5],
      ['Testing', 5],
      ['Typescript', 5],
      ['PostgreSQL', 5],
      ['Heroku', 5],
      ['Docker', 5],
      ['Gitlab', 5]
    ])
  },
  {
    id: '01996961-47c6-78ea-a2d3-9029e44808b7',
    jobTitle: 'Full-stack Engineer',
    startDate: '2018-08-01',
    endDate: '2019-02-01',
    companyName: 'SENSAI',
    companyLogo: '/assets/images/companies/sensai.jpg',
    companyUrl: 'https://www.crunchbase.com/organization/sensai-empower-success',
    responsibilities: [
      `Architected full-stack solutions including front-end, back-end, and mobile applications,
      implementing multi-stage, multi-zone, and multi-language capabilities.`,
      `Participated in SCRUM ceremonies, contributing to user story definition, estimation,
      and sprint planning processes.`,
      `Maintained and optimized existing codebases across front-end, back-end, and mobile platforms,
      implementing bug fixes and performance improvements.`
    ],
    achievements: [
      `Contributed to the migration of a 1.5-year-old NodeJS back-end codebase to Ruby on Rails in just 3 months,
      earning team trust and establishing myself as a key contributor.`,
      `Gained experience in modern software development methodologies while collaborating effectively
      with cross-functional teams including design and quality assurance.`
    ],
    technologies: new Map([
      ['React', 6],
      ['React Native', 6],
      ['NodeJs', 6],
      ['Ruby on Rails', 3],
      ['MySQL', 6],
      ['SQL Server', 3],
      ['AWS', 3]
    ])
  },
  {
    id: '01996961-47c6-78ea-a2d3-902a7a56598e',
    jobTitle: 'Tech Lead',
    startDate: '2016-10-01',
    endDate: '2018-07-01',
    companyName: 'HMS',
    companyUrl: 'http://linkedin.com/company/hms-sistemas-de-informaci-n-sa-de-cv',
    companyLogo: '/assets/images/companies/hms.png',
    responsibilities: [
      `Led a team of 5 software engineers, supervising solution design and architecture while driving
      feature development and implementation, creating comprehensive technical documentation and
      mentoring team members to pursue technical excellence.`,
      `Led software requirements gathering, strategic priority planning, and task scheduling
      to ensure optimal project management and delivery.`,
      `Researched and tested emerging technologies including Git version control,
      mobile development, and RIS & PACS systems.`,
      `Participated in recruitment processes, identifying and onboarding new talent
      to strengthen the development team.`,
    ],
    achievements: [
      `Developed software solutions that provided competitive advantage by transitioning
      from selling medicine boxes to precise gram/milliliter-based sales, revolutionizing inventory management.`,
      `Led the software development of new business units including analysis laboratory, ambulatory surgery center,
      and RIS & PACS systems, expanding company capabilities.`,
      `Successfully developed and launched an iOS application for the ambulatory surgery center,
      improving patient experience and operational efficiency.`
    ],
    technologies: new Map([
      ['Php', 21],
      ['Javascript', 21],
      ['MySQL', 21],
      ['Bash', 10],
      ['AWS', 5],
      ['React', 10],
      ['Android w/Kotlin', 10],
      ['IOS w/ Swift', 10]
    ])
  },
  {
    id: '01996961-47c6-78ea-a2d3-902b5164e270',
    jobTitle: 'Full-stack Engineer',
    startDate: '2015-01-01',
    endDate: '2016-10-01',
    companyName: 'HMS',
    companyLogo: '/assets/images/companies/hms.png',
    companyUrl: 'http://linkedin.com/company/hms-sistemas-de-informaci-n-sa-de-cv',
    responsibilities: [
      `Architected full-stack solutions for the Oncology ERP system,
      developing both front-end and back-end features.`,
      `Led software requirements gathering, strategic priority planning, and task scheduling
      to ensure effective project management and timely delivery.`,
      `Created detailed solution designs including process diagrams, UML diagrams,
      and database schemas for complex healthcare workflows.`,
      `Automated periodic processes and implemented code refactoring using Bash scripts.`
    ],
    achievements: [
      `Developed a software process automating quote generation, streamlining communication
      among doctors, nurses, and administrative staff while accounting for assignments, professional language,
      active substance conversions, and clinic processes.`,
      `Implemented robust database transactions ensuring data consistency and integrity
      across complex healthcare processes.`,
      `Implemented a quarterly feature delivery initiative, establishing continuous innovation cycles that
      enhanced product capabilities.`
    ],
    technologies: new Map([
      ['Php', 21],
      ['Javascript', 21],
      ['MySQL', 21],
      ['Bash', 10],
      ['AWS', 5]
    ])
  },
  {
    id: '01996961-47c6-78ea-a2d3-902cd5d61915',
    jobTitle: 'Full-stack Engineer',
    startDate: '2014-06-01',
    endDate: '2015-01-01',
    companyName: 'Ingeniat',
    companyLogo: '/assets/images/companies/ingeniat.svg',
    companyUrl: 'https://www.linkedin.com/company/ingeniat/',
    responsibilities: [
      `Developed full-stack solutions, creating both front-end and back-end features
      for the digital library platform.`,
      `Maintained and optimized existing codebases, implementing bug fixes and performance improvements
      across front-end and back-end systems.`,
      `Automated complex processes using Bash scripts, improving operational efficiency
      and reducing manual workload.`,
      `Researched mobile technologies to drive innovation
      and expand company capabilities.`
    ],
    achievements: [
      `Automated book uploading to the digital library by creating a Bash script that converts
      PDF files into separate SVG files, cleans them using regular expressions, uploads to AWS S3,
      and establishes relationships between books, pages, and S3 links in MySQL.`,
      `Expanded technical expertise by learning new programming languages and significantly increased
      ability to contribute to research and implementation of cutting-edge technologies.`
    ],
    technologies: new Map([
      ['Php', 7],
      ['Javascript', 7],
      ['Android w/ Java', 7],
      ['MySQL', 7],
      ['Bash', 7],
      ['AWS', 7]
    ])
  }
];
