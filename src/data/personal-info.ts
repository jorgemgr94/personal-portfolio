export const personalInfo = {
  firstName: 'Jorge',
  name: 'Jorge García',
  role: 'Staff Software Engineer',
  email: 'jorgemgr94@gmail.com',
  website: 'https://jorgemgr.com',
  linkedin: 'https://linkedin.com/in/jorgemgr94',
  github: 'https://github.com/jorgemgr94',
  /**
   * Recruiter-facing elevator pitch.
   * Compact prose with **keywords** in bold for ATS parsing.
   * Used in the Resume PDF / page; not the long-form `aboutMe` narrative.
   */
  summary:
    'Staff Software Engineer with 12+ years designing and scaling resilient, large-scale platforms across distributed systems and AI-integrated architectures. Led zero-downtime migrations from legacy monoliths to microfrontends and event-driven services. Diagnosed and resolved a throughput ceiling in distributed task queues, delivering an 8x improvement from 940 to 7,500 tasks per minute through benchmark-validated optimization. Build RAG and multi-agent systems with production engineering discipline focused on orchestration, evaluation, and observability.'
};

export const resumeConfig = {
  skillsCategories: {
    'Cloud & Platform Engineering': [
      'GCP',
      'Kubernetes',
      'Docker',
      'Terraform',
      'CI/CD',
      'PostgreSQL',
      'Redis'
    ],
    'Backend & Systems Design': [
      'Node.js',
      'Python',
      'Go',
      'Design Patterns',
      'IoT Systems',
      'Microservices'
    ],
    'Frontend & Full-Stack Development': [
      'React',
      'TypeScript',
      'Next.js',
      'State Management',
      'API Design'
    ],
    'AI & Distributed Systems': [
      'Multi-Agent Orchestration',
      'RAG Pipelines',
      'LLM Infrastructure',
      'Event-Driven Systems',
      'Micro-Frontends',
      'Task Queues'
    ]
  }
} as const;
