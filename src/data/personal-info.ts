export const personalInfo = {
  firstName: 'Jorge',
  name: 'Jorge García',
  role: 'Staff Software Engineer',
  email: 'jorgemgr94@gmail.com',
  location: 'Monterrey, Mexico',
  locationUrl: 'https://maps.app.goo.gl/aMEAw8meUdQyLSGf6',
  availability: 'Open to remote opportunities',
  website: 'https://jorgemgr.com',
  linkedin: 'https://linkedin.com/in/jorgemgr94',
  github: 'https://github.com/jorgemgr94',
  /**
   * Recruiter-facing elevator pitch.
   * Compact prose with **keywords** in bold for ATS parsing.
   * Used in the Resume PDF / page; not the long-form `aboutMe` narrative.
   */
  summary:
    '12+ years in software engineering. Since 2021, focused on backend platforms and distributed systems. Recent work includes leading a product migration with no user-facing downtime and tracing an SDK transport bottleneck that increased task creation throughput 8×, from ~940 to ~7,500 tasks/min per queue. In personal projects, I build RAG and multi-agent prototypes with document retrieval and orchestrated specialist agents.'
};

export const resumeConfig = {
  skillsCategories: {
    'Languages & Frameworks': [
      'Go',
      'TypeScript',
      'Node.js',
      'Python',
      'React',
      'Next.js'
    ],
    'Systems & Architecture': [
      'Event-Driven Systems',
      'Task Queues',
      'Microservices',
      'API Design',
      'Third-Party Integrations',
      'Microfrontends'
    ],
    'Cloud & Data': [
      'GCP',
      'Kubernetes',
      'Docker',
      'Terraform',
      'PostgreSQL',
      'Redis'
    ],
    'Applied AI — Personal Projects': [
      'RAG',
      'Multi-Agent Systems',
      'Vector Retrieval',
      'LangChain',
      'FAISS',
      'Pinecone'
    ]
  }
} as const;
