import type { ProfessionalExperience } from './types';

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
      `Architected and developed scalable back-end features for the Ureeka platform, implementing advanced concepts
      including distributed computing, eventual consistency, design patterns, and backward compatibility.`,
      `Maintained and optimized serverless services including Cloud Functions (Scheduled, HTTP, Firestore Triggers),
      ensuring high availability and performance across the platform.`,
      `Designed and implemented robust third-party integrations with comprehensive error handling, rate limiting,
      security protocols, and data consistency mechanisms.`
    ],
    achievements: [
      `Demonstrated exceptional adaptability by mastering complex distributed systems concepts including eventual consistency,
      design patterns, and backward compatibility while contributing to the Ureeka platform development.`,
      `Optimized distributed task queue performance by implementing best practices, achieving 8x improvement in enqueue rate
      (from ~940 to 7,500 tasks per minute per queue/scheduler) and significantly reduced latency.`,
      `Enhanced system observability by implementing comprehensive logging instrumentation with Cloud Trace, Cloud Logging,
      Error Reporting, and automated alert policies, improving issue identification and resolution by 60%.`
    ],
    technologies: new Map([
      ['Typescript', 12],
      ['React', 24],
      ['NodeJs', 24],
      ['Firebase', 6],
      ['GCP', 24],
      ['Docker', 24],
      ['Kubernetes', 24],
      ['GraphQL', 24],
      ['Golang', 6],
      ['Django', 6],
      ['PostgreSQL', 24],
      ['Terraform', 6],
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
    responsibilities: [

    ],
    achievements: [
    ],
    technologies: new Map([
      ['Typescript', 23],
      ['React', 23],
      ['RxJS', 12],
      ['NodeJs', 23],
      ['Firebase', 23],
      ['GCP', 23],
      ['Docker', 23]
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
      'Led and mentored a team of 2 software engineers, driving feature development and implementation while fostering professional growth.',
      'Spearheaded software requirements gathering, strategic priority planning, and task scheduling to ensure optimal project management and delivery.',
      'Collaborated with cross-functional teams including product, design, and QA to establish project roadmaps and technical specifications.',
      'Provided technical oversight, architectural guidance, and expertise to support software development initiatives across multiple projects.',
      'Implemented comprehensive project tracking using JIRA, maintaining stakeholder communication and ensuring transparent progress reporting.',
      'Established and maintained company-wide GitHub repository standards, implementing security protocols and code consistency guidelines.',
      'Managed Google Cloud Platform infrastructure, ensuring security compliance, resource optimization, and consistent naming conventions.'
    ],
    achievements: [
      `Improved cost-efficiency for the company's minimum viable products (MVPs) by transitioning from dedicated servers
      (EC2, Compute Engine) to serverless environments (Cloud Functions, Cloud Run), reducing infrastructure costs by 40%.`,
      `Standardized NodeJS CI/CD deployment using Cloud Build, reducing deployment time from 2 hours to 15 minutes
      and eliminating manual deployment errors.`,
      `Established strategic partnerships with 3 software development providers, expanding the company's delivery capacity
      by 200% while maintaining software quality standards and on-time delivery commitments.`
    ],
    technologies: new Map([
      ['React', 19],
      ['Typescript', 19],
      ['NextJS', 19],
      ['Firebase', 19],
      ['MongoDB', 10],
      ['NodeJs', 19],
      ['Python', 10],
      ['PostgreSQL', 10],
      ['Github', 19],
      ['GCP', 19],
      ['AWS', 10],
      ['Docker', 19]
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
      `Designed and architected comprehensive full-stack solutions including front-end, back-end, and mobile applications,
      ensuring scalable and maintainable code architecture.`,
      `Led software requirements gathering, strategic priority planning, and task scheduling to ensure effective
      project management and timely delivery.`,
      `Conducted extensive research and testing of emerging technologies, particularly IoT solutions,
      to drive innovation and competitive advantage.`,
      `Maintained and optimized existing codebases across front-end, back-end, and mobile platforms,
      implementing bug fixes and performance improvements.`
    ],
    achievements: [
      `Led the complete development of Dynamo, an innovative IoT platform tracking real-time user positions
      in distribution centers using 150+ beacon tags, storing data in MongoDB and providing real-time
      analytics dashboards for movement and time analysis.`,
      `Pioneered the adoption of modern technologies (Serverless, Firebase, NodeJS) within the company,
      establishing new standards for quality and scalability that provided significant competitive advantage.`
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
      `Designed and architected robust full-stack solutions, developing both front-end and back-end features
      for the startup's core platform.`,
      `Actively participated in SCRUM ceremonies, contributing to user story definition, estimation,
      and sprint planning processes.`,
      `Maintained and optimized existing codebases, implementing bug fixes and performance improvements
      across front-end and back-end systems.`
    ],
    achievements: [
      `Redesigned and simplified the quoting process by implementing functional reactive programming with MobX,
      improving user experience and reducing complexity by 50%.`,
      `Mastered modern development practices including containerization (Docker), database migrations,
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
      `Designed and architected comprehensive full-stack solutions including front-end, back-end, and mobile applications,
      implementing multi-stage, multi-zone, and multi-language capabilities.`,
      `Actively participated in SCRUM ceremonies, contributing to user story definition, estimation,
      and sprint planning processes.`,
      `Maintained and optimized existing codebases across front-end, back-end, and mobile platforms,
      implementing bug fixes and performance improvements.`
    ],
    achievements: [
      `Successfully led the migration of a 1.5-year-old NodeJS back-end codebase to Ruby on Rails in just 3 months,
      earning team trust and establishing myself as a key contributor through exceptional delivery speed and quality.`,
      `Gained extensive experience in modern software development methodologies while collaborating effectively
      with cross-functional teams including design and quality assurance, improving overall project outcomes.`
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
      `Led and mentored a team of 5 software engineers, driving feature development and implementation
      while fostering professional growth and technical excellence.`,
      `Spearheaded software requirements gathering, strategic priority planning, and task scheduling
      to ensure optimal project management and delivery.`,
      `Conducted extensive research and testing of emerging technologies including Git version control,
      mobile development, and RIS & PACS systems to drive innovation.`,
      `Supervised solution design and architecture, creating comprehensive process diagrams,
      UML diagrams, and database designs for complex healthcare systems.`,
      `Provided technical oversight, architectural guidance, and expertise to support
      software development initiatives across multiple projects.`,
      `Automated periodic processes and implemented code refactoring using Bash scripts,
      improving operational efficiency and code quality.`,
      `Participated in recruitment processes, identifying and onboarding new talent
      to strengthen the development team.`
    ],
    achievements: [
      `Developed innovative software solutions implementing a competitive advantage strategy by transitioning
      from selling medicine boxes to precise gram/milliliter-based sales, revolutionizing inventory management.`,
      `Led the software development of new business units including analysis laboratory, ambulatory surgery center,
      and RIS & PACS systems, expanding company capabilities and revenue streams.`,
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
      `Designed and architected comprehensive full-stack solutions for the Oncology ERP system,
      developing both front-end and back-end features with focus on healthcare compliance.`,
      `Led software requirements gathering, strategic priority planning, and task scheduling
      to ensure effective project management and timely delivery.`,
      `Created detailed solution designs including process diagrams, UML diagrams,
      and database schemas for complex healthcare workflows.`,
      `Automated periodic processes and implemented code refactoring using Bash scripts,
      improving operational efficiency and maintainability.`
    ],
    achievements: [
      `Developed an innovative software process automating quote generation, streamlining communication
      among doctors, nurses, and administrative staff while accounting for assignments, professional language,
      active substance conversions, and clinic processes.`,
      `Implemented robust database transactions ensuring data consistency and integrity
      across complex healthcare processes, reducing errors by 80%.`,
      `Pioneered a "continuous improvement" initiative delivering new features quarterly,
      driving innovation and maintaining competitive advantage in the healthcare market.`
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
      `Developed comprehensive full-stack solutions, creating both front-end and back-end features
      for the digital library platform.`,
      `Maintained and optimized existing codebases, implementing bug fixes and performance improvements
      across front-end and back-end systems.`,
      `Automated complex processes using Bash scripts, improving operational efficiency
      and reducing manual workload.`,
      `Conducted research and testing of emerging mobile technologies to drive innovation
      and expand company capabilities.`
    ],
    achievements: [
      `Revolutionized book uploading to the digital library by creating an automated Bash script that converts
      PDF files into separate SVG files, cleans them using regular expressions, uploads to AWS S3,
      and establishes relationships between books, pages, and S3 links in MySQL, reducing manual work by 90%.`,
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
