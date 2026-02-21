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
    id: 7,
    icon: '/assets/images/projects/distributed-orders.png',
    area: 'Distributed Architecture',
    topics: [
      'Microservices (Polyglot: Go, TS, Python)',
      'High-Performance gRPC (Protobuf)',
      'Event-Driven Architecture (Google Pub/Sub)',
      'Infrastructure as Code (Pulumi, GKE)',
      'Distributed Locking (Redis Redlock)',
      'Resilience Patterns (Circuit Breakers, DLQ)',
      'GitOps (ArgoCD)'
    ],
    project: {
      title: 'Distributed Orders Platform',
      description: `Production-grade microservices system designed for high availability and fault tolerance.
                    Orchestrates synchronous gRPC for critical paths and asynchronous events for eventual consistency,
                    using advanced resilience patterns like Circuit Breakers and Distributed Locking to handle failure modes in a distributed ecosystem.`,
      githubLink: 'https://github.com/jorgemgr94/distributed-orders'
    }
  },
  {
    id: 2,
    icon: '/assets/images/projects/routes-engine.png',
    area: 'Advanced Algorithms',
    topics: [
      'AVL Trees, B-Trees',
      'Tries',
      'Advanced Graph Algorithms (A*, Dijkstra)',
      'Recursion',
      'Dynamic Programming',
      'Greedy Strategy',
      'Backtracking (VRP Solver)',
      'Divide & Conquer'
    ],
    project: {
      title: 'Urban Logistics Engine',
      description: `High-performance logistics core for solving the Vehicle Routing Problem (VRP) at city scale. Optimized for 50+ vehicle fleets using custom spatial indexing (QuadTrees) and hybrid pathfinding algorithms to minimize delivery costs and latency.`,
      githubLink: 'https://github.com/jorgemgr94/urban-logistics-engine'
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
    ],
    project: {
      title: 'ConectaPelu2 - Animal Welfare Ecosystem',
      description: `Digital ecosystem connecting animal shelters and adopters through automated workflows.
      Currently architected as a robust monolith supporting pet management, secure authentication, and institutional memory tracking. The roadmap includes integrated micro-donations, social media automation, and a multi-platform mobile presence.`,
      githubLink: 'https://github.com/jorgemgr94/conectapelu2'
    }
  }
];