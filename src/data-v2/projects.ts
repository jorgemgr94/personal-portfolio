import type { Project } from '@/data-v2/types';

export const projects: Project[] = [
  {
    id: 1,
    icon: '/assets/images/projects/cli-agenda.svg',
    learning: {
      area: 'Basic fundamentals',
      topics: [
        'Variables, control structures (if, for, switch)',
        'Functions',
        'Arrays, lists, stacks, queues',
        'Basic algorithms (sort, search)'
      ]
    },
    project: {
      title: 'Personal CLI Agenda',
      features: [
        'Contact CRUD operations',
        'Sorting algorithms (name/phone)',
        'Binary search implementation',
        'Data persistence (JSON/SQLite)'
      ],
      githubLink: null
    }
  },
  {
    id: 2,
    icon: '/assets/images/projects/library-management.svg',
    learning: {
      area: 'OOP and best practices',
      topics: [
        'OOP: Classes, objects, inheritance, polymorphism, encapsulation',
        'SOLID, DRY, KISS, YAGNI',
        'Basic unit testing'
      ]
    },
    project: {
      title: 'Library Management System',
      features: [
        'Domain entities: Book, User, Loan',
        'Business operations: lend, return, availability check',
        'Clean architecture with interfaces (Repository, Service, Handler)',
        'Unit tests with Go testing framework',
        'CLI interface or REST API with Fiber'
      ],
      githubLink: null
    }
  },
  {
    id: 3,
    icon: '/assets/images/projects/recommendation-engine.svg',
    learning: {
      area: 'Patterns and intermediate structures',
      topics: [
        'Binary trees (BFS, DFS), hash tables, linked lists',
        'Recursive algorithms',
        'Creational Patterns: Factory, Builder, Singleton',
        'Structural Patterns: Adapter, Decorator, Proxy',
        'Behavioral Patterns: Strategy, Observer, Command, State',
        'Basic backtracking'
      ]
    },
    project: {
      title: 'Basic Recommendation Engine',
      features: [
        'Decision tree for product recommendations',
        'Strategy pattern for recommendation algorithms',
        'Observer pattern for inventory events',
        'Singleton pattern for configuration management',
        'REST API with recommendation endpoints'
      ],
      githubLink: null
    }
  },
  {
    id: 4,
    icon: '/assets/images/projects/event-booking.svg',
    learning: {
      area: 'Software architecture',
      topics: [
        'Layered architecture, clean architecture',
        'Ports & Adapters (Hexagonal)',
        'Clean Architecture',
        'JWT Auth',
        'API Gateway / Reverse Proxy',
        'Jobs, Workers, Schedulers',
        'Cronjobs'
      ]
    },
    project: {
      title: 'Event Booking API',
      features: [
        'Hexagonal architecture implementation',
        'CRUD operations for events, bookings, users',
        'Multi-strategy authentication (OAuth2, JWT, API Keys)',
        'Scheduled job for expired booking cleanup',
        'API documentation (Swagger/OpenAPI)',
        'Structured logging and monitoring',
        'API versioning strategy'
      ],
      githubLink: null
    }
  },
  {
    id: 5,
    icon: '/assets/images/projects/concurrent-scraper.svg',
    learning: {
      area: 'Concurrency',
      topics: [
        'Goroutines, channels, context, select',
        'Mutexes, race conditions',
        'Worker Pools',
        'Context and cancellation'
      ]
    },
    project: {
      title: 'Concurrent Web Scraper',
      features: [
        'URL list processing from file input',
        'Concurrent goroutines for parallel scraping',
        'Channel-based result collection',
        'Worker pool with concurrency limits',
        'Context-based timeout handling'
      ],
      githubLink: 'https://github.com/jorgemgr94/go-learning'
    }
  },
  {
    id: 6,
    icon: '/assets/images/projects/routes-engine.svg',
    learning: {
      area: 'Advanced algorithms',
      topics: [
        'AVL Trees, B-Trees',
        'Tries',
        'Advanced graphs (Dijkstra, A*, Floyd-Warshall)',
        'Recursion',
        'Dynamic Programming',
        'Greedy Algorithms',
        'Advanced backtracking',
        'Advanced Divide & Conquer'
      ]
    },
    project: {
      title: 'Optimal Routes Engine',
      features: [
        'Graph-based city network representation',
        'Shortest path algorithms (Dijkstra, BFS, DFS)',
        'Multi-criteria route optimization',
        'CLI or REST API for route calculation',
        'Performance metrics (time, cost, distance)'
      ],
      githubLink: null
    }
  },
  {
    id: 7,
    icon: '/assets/images/projects/distributed-orders.svg',
    learning: {
      area: 'Distributed architecture',
      topics: [
        'Microservices (REST, gRPC, GraphQL)',
        'Message Brokers (RabbitMQ, Kafka)',
        'Event-driven architecture',
        'Caching (Redis, Memcached)',
        'Circuit Breakers (Hystrix, Resilience4j)',
        'Load balancing',
        'Eventual consistency'
      ]
    },
    project: {
      title: 'Distributed Orders Platform',
      features: [
        'Microservices: Order, Inventory, Notifications',
        'Event-driven communication via RabbitMQ',
        'Redis caching for order service',
        'Circuit breaker pattern with retry/fallback',
        'Eventual consistency handling'
      ],
      githubLink: null
    }
  },
  {
    id: 8,
    icon: '/assets/images/projects/production-infrastructure.svg',
    learning: {
      area: 'DevOps and software lifecycle',
      topics: [
        'CI/CD pipelines (GitHub Actions)',
        'Infrastructure as Code (Terraform, Ansible)',
        'Containerization (Docker)',
        'Basic/intermediate Kubernetes',
        'Observability: logs, traces, metrics (ELK, Prometheus, Grafana)',
        'Secrets management (Vault, AWS Secrets Manager)'
      ]
    },
    project: {
      title: 'Production Infrastructure Platform',
      features: [
        'Docker containerization for all services',
        'Kubernetes deployment with manifests',
        'Monitoring stack (Prometheus + Grafana)',
        'CI/CD pipeline with GitHub Actions',
        'Infrastructure as Code with Terraform'
      ],
      githubLink: null
    }
  },
  {
    id: 9,
    icon: '/assets/images/projects/ddd-orders.svg',
    learning: {
      area: 'Paradigms and philosophy',
      topics: [
        'Basic functional programming',
        'Reactive programming (RxJS, Reactor)',
        'Basic Domain-Driven Design',
        'Deep Clean Code',
        'TDD and BDD'
      ]
    },
    project: {
      title: 'DDD Orders Platform',
      features: [
        'Domain-driven design architecture',
        'Event sourcing for order state management',
        'Test-driven development implementation',
        'Clean code principles and logging',
        'Separation of domain, application, and infrastructure layers'
      ],
      githubLink: null
    }
  },
  {
    id: 10,
    icon: '/assets/images/projects/consensus-simulator.svg',
    learning: {
      area: 'Complex Distributed Systems',
      topics: [
        'Distributed algorithms: Raft, Leader Election, Paxos',
        'Consensus and fault tolerance'
      ]
    },
    project: {
      title: 'Distributed Consensus Simulator',
      features: [
        'Raft consensus algorithm implementation',
        'Leader election and log replication',
        'Multi-node fault tolerance simulation',
        'CLI or WebSocket interface for state visualization',
        'Network partition handling'
      ],
      githubLink: null
    }
  },
  {
    id: 11,
    icon: '/assets/images/projects/intelligent-assistant.svg',
    learning: {
      area: 'AI applied to software',
      topics: [
        'RAG',
        'Custom embeddings',
        'Semantic Search',
        'Function Calling, Agents',
        'Conversational memory',
        'Automation + AI in flows'
      ]
    },
    project: {
      title: 'Intelligent Assistant',
      features: [
        'RAG implementation with custom documentation',
        'AI agent with external API integration (weather, GitHub, Jira)',
        'OpenAI API with Pinecone vector database',
        'Go REST API with Node.js fallback for LangChain',
        'Token consumption monitoring and logging'
      ],
      githubLink: null
    }
  },
  {
    id: 12,
    icon: '/assets/images/projects/multimodal-assistant.svg',
    learning: {
      area: 'Multimodal AI and LLMOps',
      topics: [
        'MCP (Multi-modal Contextual Processing)',
        'Streaming + vision + text',
        'AI document parsing',
        'LLMOps: monitoring, optimization and model versioning'
      ]
    },
    project: {
      title: 'Multimodal Assistant',
      features: [
        'Multi-modal input processing (screenshots, logs, text)',
        'Vision AI with GPT-4 Vision / Gemini integration',
        'Automated problem report generation',
        'Go backend for file handling and security',
        'Next.js/React frontend interface'
      ],
      githubLink: null
    }
  }
];
