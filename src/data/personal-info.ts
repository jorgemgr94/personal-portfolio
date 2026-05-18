export const personalInfo = {
  firstName: 'Jorge',
  name: 'Jorge García',
  role: 'Staff Software Engineer',
  focus: 'Distributed Systems & Applied AI',
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
    '**Staff Software Engineer** with 12+ years designing and scaling **resilient, large-scale platforms** across distributed systems and **AI-integrated architectures**. **Zero-downtime migrations**: Led incremental transitions from legacy monoliths to microfrontends and event-driven services. **Performance optimization**: Diagnosed the root cause of a throughput ceiling in distributed task queues; a surgical configuration change, validated via benchmarks, delivered 8× throughput (940 → 7,500 tasks/min). **Applied AI**: Building RAG patterns and multi-agent systems with the same engineering discipline as production services (orchestration, evaluation, observability).'
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
