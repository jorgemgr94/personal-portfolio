import { calculateMonthsBetween } from '@/helpers/date';
import type { ProfessionalExperience, TechnologiesNames } from './types';

function createFullExperienceTechArray(
  startDate: string,
  endDate: string | null,
  techList: TechnologiesNames[]
): [TechnologiesNames, number][] {
  const months = calculateMonthsBetween(startDate, endDate);
  return techList.map((tech) => [tech, months]);
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
    description: `Design and implement the company’s core distributed systems across multiple microservices, driving architectural decisions and new adoption of event-driven and microfrontend patterns, defining cross-team technical standards, and building robust third-party integrations with a focus on reliability and consistency.`,
    achievements: [
      `Shaped frontend direction by leading a zero-downtime migration from a legacy architecture to microfrontends, establishing new standards for scalability and maintainability.`,
      `Designed and implemented core fulfillment workflows in Go, including schema-driven validation and graph-based traversal utilities to ensure data integrity.`,
      `Led the development of an event-driven backend service integrating with external accountant partners, enabling scalable delivery of tax-related products.`,
      `Built and operated services integrating third-party APIs, implementing robust error handling, rate limiting, and security controls to manage external dependency failures at scale.`,
      `Contributed to company-wide architectural standards through reusable packages and shared service patterns adopted across multiple teams.`,
      `Supported enterprise API initiatives by designing secure, public-facing APIs that exposed internal capabilities while enforcing business constraints.`
    ],
    technologies: new Map([
      ...createFullExperienceTechArray('2023-09-01', null, [
        'React',
        'Node.js',
        'TypeScript',
        'GCP',
        'Docker',
        'Kubernetes',
        'GraphQL',
        'PostgreSQL'
      ]),
      ['Python', 12],
      ['Golang', 12],
      ['Django', 6],
      ['Firebase', 6],
      ['Terraform', 6]
    ])
  },
  {
    id: '01996961-47be-7a79-a66f-12e7b13eec87',
    jobTitle: 'Senior Software Engineer',
    startDate: '2021-09-06',
    endDate: '2023-09-01',
    companyName: 'Ureeka',
    companyLogo: '/assets/images/companies/ureeka.png',
    companyUrl: 'https://www.crunchbase.com/organization/ureeka',
    description: `Designed and scaled backend systems supporting the core Ureeka platform, with a focus on distributed execution, performance optimization, and operational reliability in a cloud-native, serverless environment.`,
    achievements: [
      `Designed and implemented scalable backend features using distributed system patterns, including eventual consistency and backward compatibility, to support platform evolution without breaking existing consumers.`,
      `Achieved an 8× throughput improvement in distributed task queues, increasing processing capacity from ~940 to ~7,500 tasks per minute per queue by addressing scheduling, execution, and contention bottlenecks.`,
      `Built robust third-party integrations with comprehensive error handling, rate limiting, and security controls to ensure reliability under partial failure conditions.`,
      `Implemented end-to-end observability using Cloud Trace, Cloud Logging, and Error Reporting, enabling faster incident detection through automated alerting and improved system visibility.`
    ],
    technologies: new Map([
      ['TypeScript', 23],
      ['React', 23],
      ['Node.js', 23],
      ['Firebase', 23],
      ['GCP', 23],
      ['Docker', 23],
      ['RxJS', 12]
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
    description: `Led small delivery teams and client-facing technical initiatives, owning system design and execution across multiple consulting engagements, with a focus on cloud adoption, scalable delivery, and establishing foundational engineering practices.`,
    achievements: [
      `Led and mentored a small team of software engineers, driving feature delivery while supporting professional growth and technical ownership.`,
      `Translated business requirements into technical roadmaps, architectural decisions, and delivery plans across concurrent client projects.`,
      `Provided architectural guidance and technical oversight across multiple client solutions, ensuring consistency, security, and maintainability.`,
      `Reduced infrastructure costs by migrating workloads from dedicated servers to serverless platforms (Cloud Functions, Cloud Run).`,
      `Automated Node.js CI/CD pipelines using Cloud Build, improving deployment reliability and reducing manual release overhead.`,
      `Established shared GitHub standards and code conventions adopted across teams to improve consistency and collaboration.`,
      `Built and managed partnerships with external development providers, expanding delivery capacity while maintaining quality and delivery commitments.`
    ],
    technologies: new Map([
      ['React', 19],
      ['TypeScript', 19],
      ['NextJS', 19],
      ['Firebase', 19],
      ['MongoDB', 10],
      ['Node.js', 19],
      ['GitHub', 19],
      ['GCP', 19],
      ['Docker', 19],
      ['AWS', 10],
      ['Python', 10],
      ['PostgreSQL', 10]
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
    description: `Designed and delivered full-stack web and mobile solutions in a consulting environment, focusing on real-time systems, emerging technologies, and maintainable architectures.`,
    achievements: [
      `Built a real-time IoT platform tracking 150+ beacon devices using AWS Kinesis and MongoDB, enabling live analytics dashboards for distribution centers.`,
      `Introduced serverless and modern web technologies (Node.js, Firebase) that became foundational standards for subsequent projects.`
    ],
    technologies: new Map([
      ['React', 12],
      ['React Native', 6],
      ['NextJS', 6],
      ['TypeScript', 6],
      ['Firebase', 6],
      ['MongoDB', 6],
      ['Node.js', 12],
      ['Python', 6],
      ['PHP', 6],
      ['MySQL', 12],
      ['PostgreSQL', 6],
      ['GitHub', 12],
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
    description: `Contributed to the development of a startup platform, focusing on front-end experience, system reliability, and the introduction of modern development practices.`,
    achievements: [
      `Simplified the product quoting workflow by introducing reactive state management with MobX, improving user experience and maintainability.`,
      `Introduced modern development practices including containerization, CI/CD pipelines, database migrations, and automated testing, improving deployment reliability and overall code quality.`
    ],
    technologies: new Map([
      ['Ruby on Rails', 5],
      ['React', 5],
      ['GCP', 5],
      ['TypeScript', 5],
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
    companyUrl:
      'https://www.crunchbase.com/organization/sensai-empower-success',
    description: `Contributed to multi-platform product development across web and mobile, supporting backend migrations and feature delivery within an agile team.`,
    achievements: [
      `Contributed to a rapid migration from Node.js to Ruby on Rails, stabilizing the backend and improving long-term maintainability.`,
      `Collaborated closely with design and QA teams while adopting modern agile development workflows and delivery practices..`
    ],
    technologies: new Map([
      ['React', 6],
      ['React Native', 6],
      ['Node.js', 6],
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
    companyLogo: '/assets/images/companies/hms.png',
    companyUrl:
      'http://linkedin.com/company/hms-sistemas-de-informaci-n-sa-de-cv',
    description: `Led a small engineering team delivering healthcare systems, combining technical leadership, system design, and business-domain problem solving.`,
    achievements: [
      `Led the development of new business units including laboratory systems, ambulatory surgery, and RIS/PACS platforms.`,
      `Delivered mobile and backend systems that improved operational efficiency and patient experience across healthcare workflows.`,
      `Introduced structured engineering practices and mentorship that strengthened team capability.`
    ],
    technologies: new Map([
      ['PHP', 21],
      ['JavaScript', 21],
      ['MySQL', 21],
      ['Bash', 10],
      ['AWS', 5],
      ['React', 10],
      ['Android (Kotlin)', 10],
      ['IOS (Swift)', 10]
    ])
  },
  {
    id: '01996961-47c6-78ea-a2d3-902b5164e270',
    jobTitle: 'Full-stack Engineer',
    startDate: '2015-01-01',
    endDate: '2016-10-01',
    companyName: 'HMS',
    companyLogo: '/assets/images/companies/hms.png',
    companyUrl:
      'http://linkedin.com/company/hms-sistemas-de-informaci-n-sa-de-cv',
    description: `Contributed to the development of healthcare ERP systems, working across backend logic, database design, and process automation.`,
    achievements: [
      `Developed automation workflows to streamline clinical and administrative processes, including quote generation and coordination across doctors, nurses, and administrative staff.`,
      `Built a strong foundation in transactional systems and data consistency while implementing robust database transactions across complex healthcare workflows.`
    ],
    technologies: new Map([
      ['PHP', 21],
      ['JavaScript', 21],
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
    description: `Contributed to the development of a digital library platform, working across backend automation, data processing, and frontend feature delivery.`,
    achievements: [
      `Automated large-scale book ingestion by building Bash-based pipelines to convert PDFs into SVG assets, upload them to AWS S3, and persist relational metadata in MySQL.`,
      `Built a strong foundation in scripting, automation, and backend data workflows, while gaining early exposure to mobile development.`
    ],
    technologies: new Map([
      ['PHP', 7],
      ['JavaScript', 7],
      ['Android (Java)', 7],
      ['MySQL', 7],
      ['Bash', 7],
      ['AWS', 7]
    ])
  }
];
