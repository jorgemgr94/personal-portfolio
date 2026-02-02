import type { Project } from '@/data/types';

export const projects: Project[] = [
  {
    id: 1,
    icon: '/assets/images/projects/deal-intelligence.png',
    area: 'AI Reasoning & Strategic Intelligence',
    topics: [
      'Python',
      'LangChain',
      'LLMs',
      'GraphRAG',
      'Multi-Modal AI',
      'Agentic Orchestration',
      'Vector Search',
      'Strategic Synthesis'
    ],
    project: {
      title: 'Deal Intelligence Platform',
      description: `A cognitive engine that synthesizes strategic intelligence from complex, unstructured data.
      It orchestrates specialist agents for market research, competitor analysis, and institutional knowledge retrieval,
       using an advanced RAG architecture with multimodal inputs (sales calls, financial visuals).`,
      githubLink: 'https://github.com/jorgemgr94/multi-agent-rag-system'
    }
  },
  {
    id: 2,
    icon: '/assets/images/projects/routes-engine.png',
    area: 'Advanced Algorithms',
    topics: [
      'AVL Trees, B-Trees',
      'Tries',
      'Advanced graphs (Dijkstra, A*, Floyd-Warshall)',
      'Recursion',
      'Dynamic Programming',
      'Greedy Algorithms',
      'Advanced backtracking',
      'Advanced Divide & Conquer'
    ],
    project: {
      title: 'Optimal Routes Engine',
      description: `Advanced graph-based optimization engine for complex city-scale network navigation. Supports multi-criteria routing, including shortest-path and cost-optimized strategies, using high-performance data structures to enable efficient large-scale pathfinding.
      `,
      githubLink: null
    }
  },
  {
    id: 7,
    icon: '/assets/images/projects/distributed-orders.png',
    area: 'Distributed Architecture',
    topics: [
      'Microservices (REST, gRPC, GraphQL)',
      'Message Brokers (RabbitMQ, Kafka)',
      'Cloud-native messaging (SQS, Cloud Tasks), At-least-once delivery',
      'Event streaming (Pub/Sub, SNS), Fan-out messaging patterns',
      'Caching (Redis, Memcached)',
      'Circuit Breakers (Hystrix, Resilience4j)',
      'Eventual consistency'
    ],
    project: {
      title: 'Distributed Orders Platform',
      description: `Resilient microservices architecture for high-volume transaction processing.
                    Uses event-driven communication, distributed caching, and circuit breakers to manage failure modes and maintain eventual consistency across a complex service ecosystem.`,
      githubLink: null
    }
  },
  {
    id: 8,
    icon: '/assets/images/projects/conectapelu.png',
    area: 'Full-Stack Product Architecture',
    topics: [
      'Next.js 15',
      'Drizzle ORM',
      'PostgreSQL',
      'Docker',
      'Kubernetes',
      'GitHub Actions',
      'Terraform'
    ],
    project: {
      title: 'ConectaPelu2 - Animal Welfare Ecosystem',
      description: `Digital ecosystem connecting animal shelters and adopters through automated workflows.
      Currently architected as a robust monolith supporting pet management, secure authentication, and institutional memory tracking. The roadmap includes integrated micro-donations, social media automation, and a multi-platform mobile presence.`,
      githubLink: 'https://github.com/jorgemgr94/conectapelu2'
    }
  }
];
