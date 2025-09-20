import type { Project } from '@/data-v2/types';

export const projects: Project[] = [
  {
    id: 1,
    icon: '/assets/images/social-icons/non-sense.png',
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
        'Contact CRUD',
        'Sorting by name/phone using sort',
        'Binary search by name',
        'Persistence in JSON file or SQLite'
      ],
      githubLink: null
    }
  },
  {
    id: 2,
    icon: '/assets/images/social-icons/non-sense.png',
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
        'Entities: Book, User, Loan',
        'Operations: lend, return, list available books',
        'Logic separated by interfaces (Repository, Service, Handler)',
        'Unit tests with Go test',
        'CLI or simple REST API with Fiber'
      ],
      githubLink: null
    }
  },
  {
    id: 3,
    icon: '/assets/images/social-icons/non-sense.png',
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
        'Strategy pattern for different recommendation algorithms',
        'Observer for stock events',
        'Singleton for configuration manager',
        'REST API that returns recommendations'
      ],
      githubLink: null
    }
  },
  {
    id: 4,
    icon: '/assets/images/social-icons/non-sense.png',
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
      title: 'Event booking API',
      features: [
        'Hexagonal architecture',
        'CRUD for events, bookings, users',
        'Auth (OAuth2, JWT, API Keys)',
        'Scheduled job that automatically cancels expired bookings',
        'API documentation (Swagger, OpenAPI)',
        'Structured logging and basic monitoring',
        'API versioning'
      ],
      githubLink: null
    }
  },
  {
    id: 5,
    icon: '/non-sense.png',
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
      title: 'Concurrent Scraper',
      features: [
        'Reads a list of URLs from a file',
        'Launches concurrent goroutines for scraping',
        'Uses channels to collect results',
        'Worker pool that limits the concurrent number of scrapers',
        'Context timeout'
      ],
      githubLink: 'https://github.com/jorgemgr94/go-learning'
    }
  },
  {
    id: 6,
    icon: '/assets/images/social-icons/non-sense.png',
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
      title: 'Optimal routes engine',
      features: [
        'Graph representing a city network',
        'Shortest path calculation (Dijkstra)',
        'Dijkstra / BFS / DFS',
        'CLI or REST API that calculates optimal routes based on criteria (minimum time, lowest cost, etc.)'
      ],
      githubLink: null
    }
  },
  {
    id: 7,
    icon: '/assets/images/social-icons/non-sense.png',
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
      title: 'Distributed orders platform',
      features: [
        'Services: Order, Inventory, Notifications',
        'Communication via RabbitMQ',
        'Order service that uses Redis as cache',
        'Retry + fallback on errors'
      ],
      githubLink: null
    }
  },
  {
    id: 8,
    icon: '/assets/images/social-icons/non-sense.png',
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
      title: 'Production infrastructure for orders platform',
      features: [
        'Dockerize all services',
        'Deploy to local K8s',
        'Metrics with Prometheus and Grafana',
        'GitHub Actions for CI/CD'
      ],
      githubLink: null
    }
  },
  {
    id: 9,
    icon: '/assets/images/social-icons/non-sense.png',
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
        'Separate domain, application, infrastructure',
        'Event sourcing for orders',
        'TDD on new features',
        'Logging and clean code'
      ],
      githubLink: null
    }
  },
  {
    id: 10,
    icon: '/assets/images/social-icons/non-sense.png',
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
        'Implement basic Raft between multiple nodes',
        'Leader election and log replication',
        'CLI or WebSocket simulation to view node states'
      ],
      githubLink: null
    }
  },
  {
    id: 11,
    icon: '/assets/images/social-icons/non-sense.png',
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
        'RAG on your own documentation',
        'Agent that calls external APIs (weather, GitHub, Jira)',
        'OpenAI API + Pinecone',
        'REST API in Go, fallback to Node.js if using LangChain server-side',
        'Logging + monitoring of token consumption'
      ],
      githubLink: null
    }
  },
  {
    id: 12,
    icon: '/assets/images/social-icons/non-sense.png',
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
        'Receives screenshots, logs, text',
        'Processes images with GPT-4 Vision / Gemini',
        'Generates automatic problem reports',
        'Backend in Go (file handling, security)',
        'Frontend in Next.js or React'
      ],
      githubLink: null
    }
  }
];
