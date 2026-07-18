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
    showInResume: true,
    jobTitle: 'Staff Software Engineer',
    startDate: '2023-09-01',
    endDate: null,
    companyName: 'ZenBusiness',
    companyLogo: '/assets/images/companies/zenbusiness.png',
    companyUrl: 'https://www.linkedin.com/company/zenbusiness-pbc',
    description: `Design and implement the company’s core distributed systems across multiple microservices. Contribute to architectural decisions, adopt event-driven and microfrontend patterns, define cross-team standards, and own third-party integrations with a focus on reliability and consistency.`,
    achievements: [
      `Led the zero-downtime migration of a frontend product from the legacy monolith to the new microfrontends architecture, executed incrementally without disrupting users.`,
      `Designed core fulfillment workflows in Go, with schema-driven validation and graph-based traversal to guarantee data integrity across the order lifecycle.`,
      `Led an event-driven backend integrating external accountant partners, unblocking the launch of the company's tax-related product line.`,
      `Designed and built multiple third-party integrations with partner-specific rate limiting, timeouts, structured error handling, and secrets management.`,
      `Co-created and maintain shared core packages and architectural patterns adopted across multiple teams, driving consistency in how services are built.`,
      `Supported enterprise API initiatives by designing secure, public-facing endpoints that exposed internal capabilities while enforcing business constraints.`
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
    showInResume: true,
    jobTitle: 'Senior Software Engineer',
    startDate: '2021-09-06',
    endDate: '2023-09-01',
    companyName: 'Ureeka',
    companyLogo: '/assets/images/companies/ureeka.png',
    companyUrl: 'https://www.crunchbase.com/organization/ureeka',
    description: `Designed and scaled backend systems supporting the core Ureeka platform, with a focus on distributed execution, performance optimization, and operational reliability in a cloud-native, serverless environment.`,
    achievements: [
      `Designed scalable backend features using distributed system patterns (eventual consistency, backward-compatible schema evolution) so the platform could evolve without breaking existing consumers.`,
      `Investigated a throughput ceiling in distributed task queues and traced it to the SDK’s HTTP transport. Switching the client to gRPC and validating the result with benchmarks increased task creation throughput 8× (~940 → ~7,500 tasks/min per queue).`,
      `Implemented end-to-end observability with Cloud Trace, Cloud Logging, and Error Reporting, shortening incident detection through automated alerting.`
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
    showInResume: true,
    jobTitle: 'Tech Lead / Digital Solutions Manager',
    startDate: '2020-02-01',
    endDate: '2021-09-03',
    companyName: 'Sintec',
    companyLogo: '/assets/images/companies/sintec.png',
    companyUrl: 'https://www.linkedin.com/company/sintec',
    description: `Led small delivery teams and client-facing technical initiatives, owning system design and execution across multiple consulting engagements, with a focus on cloud adoption, scalable delivery, and establishing foundational engineering practices.`,
    achievements: [
      `Led and mentored a small engineering team across concurrent client engagements, owning feature delivery and growth conversations.`,
      `Translated business requirements into technical roadmaps and delivery plans across multiple client projects.`,
      `Provided architectural guidance across client solutions, ensuring consistency, security, and maintainability.`,
      `Migrated client workloads from dedicated servers to serverless platforms (Cloud Functions, Cloud Run), reducing infrastructure cost and operational overhead.`,
      `Automated Node.js CI/CD pipelines on Cloud Build, removing manual release steps and improving deployment reliability.`,
      `Established shared GitHub conventions and code standards adopted across teams to improve consistency and collaboration.`,
      `Built and managed partnerships with external development providers, expanding delivery capacity while keeping quality commitments.`
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
    showInResume: true,
    jobTitle: 'Full-stack Engineer / Consultant',
    startDate: '2019-02-01',
    endDate: '2020-02-01',
    companyName: 'Sintec',
    companyLogo: '/assets/images/companies/sintec.png',
    companyUrl: 'https://www.linkedin.com/company/sintec',
    description: `Designed and delivered full-stack web and mobile solutions in a consulting environment, focusing on real-time systems, emerging technologies, and maintainable architectures.`,
    achievements: [
      `Built a real-time IoT platform tracking 150+ beacon devices with AWS Kinesis and MongoDB, powering live analytics dashboards for distribution centers.`,
      `Introduced serverless and modern web technologies (Node.js, Firebase) that became foundational standards for subsequent client projects.`
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
    jobTitle: 'Full-stack Engineer (Contract)',
    startDate: '2019-07-01',
    endDate: '2019-12-31',
    companyName: 'Garage',
    companyLogo: '/assets/images/companies/garage.png',
    companyUrl: 'https://www.crunchbase.com/organization/garage',
    description: `Contributed to the development of a startup platform, focusing on front-end experience, system reliability, and the introduction of modern development practices.`,
    achievements: [
      `Simplified the product quoting workflow by introducing reactive state management with MobX, improving UX and maintainability.`,
      `Introduced modern development practices (containerization, CI/CD, DB migrations, automated testing), raising deployment reliability and code quality.`
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
      `Contributed to a rapid backend migration from Node.js to Ruby on Rails, stabilizing the service and improving long-term maintainability.`,
      `Collaborated closely with design and QA teams under agile delivery workflows.`
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
      `Delivered mobile and backend systems supporting clinical and administrative workflows across hospital operations.`,
      `Introduced structured engineering practices and a mentorship cadence that strengthened the team's autonomy.`
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
      `Developed automation workflows for clinical and administrative processes, including quote generation and coordination across doctors, nurses, and administrative staff.`,
      `Implemented transactional workflows guaranteeing data consistency across complex healthcare scenarios.`
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
      `Gained early exposure to Android (Java) development while strengthening backend automation and scripting foundations.`
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
