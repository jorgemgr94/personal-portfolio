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
    description: `Design and implement backend services, event-driven workflows, and third-party integrations across ZenBusiness products. Contribute to architecture decisions and define shared patterns used by backend and frontend teams.`,
    achievements: [
      `Led an incremental migration of a frontend product from the legacy monolith to microfrontends with no user-facing downtime.`,
      `Designed core fulfillment workflows in Go, including a reusable depth-first JSON Schema traversal utility with visitor-style callbacks. It standardized schema sanitization, strict property validation, and field inspection across fulfillment use cases.`,
      `Led an event-driven backend integrating external accountant partners, unblocking the launch of the company's tax-related product line.`,
      `Designed and built multiple third-party integrations with partner-specific rate limiting, timeouts, structured error handling, and secrets management.`,
      `Co-created and maintain shared core packages and service patterns used by multiple teams.`,
      `Helped design and build ZenBusiness’s first public API for enterprise customers, implementing endpoints that exposed internal capabilities while enforcing business rules.`
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
    description: `Built backend systems for the core Ureeka platform in a serverless GCP environment, focusing on distributed execution, performance, and production observability.`,
    achievements: [
      `Built backend features around eventual consistency and backward-compatible schema changes, allowing the platform to evolve without breaking existing consumers.`,
      `Investigated a throughput ceiling in distributed task queues and traced it to the SDK’s HTTP transport. Switching the client to gRPC and validating the result with benchmarks increased task creation throughput 8× (~940 → ~7,500 tasks/min per queue).`,
      `Implemented production observability with Cloud Trace, Cloud Logging, Error Reporting, and automated alerts used by the team to detect and investigate incidents.`
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
    description: `Led a four-person engineering team and owned technical delivery across multiple client engagements, from solution design and cloud migrations to shared engineering practices and external delivery partnerships.`,
    achievements: [
      `Led and mentored a four-person engineering team across concurrent client engagements, coordinating delivery and individual growth conversations.`,
      `Translated client requirements into solution architectures, technical roadmaps, and delivery plans.`,
      `Migrated client applications from two Compute Engine VMs to Cloud Run and Cloud SQL, reducing monthly infrastructure costs from roughly USD 3,000 to about USD 40 while simplifying deployments and server maintenance.`,
      `Automated Node.js deployments with Cloud Build and established shared GitHub conventions and code standards, removing manual release steps across projects.`,
      `Managed partnerships with external development providers to expand delivery capacity across client engagements.`
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
    description: `Built web and mobile products across consulting engagements, including real-time IoT systems and client applications on AWS and GCP.`,
    achievements: [
      `Built a real-time IoT platform tracking 150+ beacon devices with AWS Kinesis and MongoDB, powering live analytics dashboards for distribution centers.`,
      `Established Node.js and Firebase as the default stack for general web projects.`
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
    description: `Worked on a startup’s quoting platform across React and Ruby on Rails, focusing on frontend state management and delivery tooling.`,
    achievements: [
      `Reworked the product quoting workflow with MobX, reducing state-management boilerplate and making the flow easier to extend and maintain.`,
      `Added containerized development, CI/CD, database migrations, and automated tests to the delivery workflow.`
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
    description: `Worked on web and mobile product features across React, React Native, Node.js, and Ruby on Rails.`,
    achievements: [
      `Implemented API endpoints during a backend migration from Node.js to Ruby on Rails, a change intended to make future features easier for the team to build.`
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
    description: `Led a small engineering team building healthcare systems and launching new business lines from initial discovery through on-site deployment.`,
    achievements: [
      `Led the development of new business lines for laboratory operations, ambulatory surgery, and RIS/PACS, taking each from requirements discovery through database and interface design, implementation, testing, and on-site rollout.`,
      `Introduced Git-based workflows and React, reviewed code, and mentored engineers as the team adopted new development practices.`,
      `Coordinated scope, implementation, testing, and delivery schedules across concurrent healthcare projects.`
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
    description: `Built healthcare ERP features across PHP, MySQL, and JavaScript, focusing on clinical and administrative workflows and process automation.`,
    achievements: [
      `Developed automation workflows for clinical and administrative processes, including quote generation and coordination across doctors, nurses, and administrative staff.`,
      `Implemented multi-step healthcare workflows using MySQL transactions, rollbacks, validations, and stored procedures to keep clinical and administrative updates consistent.`
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
    description: `Worked on a digital library platform across backend automation, data processing, and Android development.`,
    achievements: [
      `Built an on-demand Bash pipeline that replaced manual processing for batches of books, converting PDFs into SVG assets, uploading them to AWS S3, and storing metadata in MySQL.`,
      `Implemented resilient book downloads in Android with Java, persisting chunks locally so interrupted transfers could resume.`
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
