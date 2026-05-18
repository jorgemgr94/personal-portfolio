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
      'Whisper + Vision',
      'LangGraph',
      'Vector Search',
      'LangSmith Evals'
    ],
    project: {
      title: 'Deal Intelligence Platform',
      description:
        'Multimodal RAG over sales calls (Whisper) and financial documents (vision). 5 specialized agents orchestrated with LangGraph; hybrid retrieval (BM25 + embeddings); evaluation with LangSmith.',
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
      description:
        'Personal project demonstrating production-grade microservices patterns: synchronous gRPC on critical paths, async events for eventual consistency, and resilience primitives (Circuit Breakers, Distributed Locking with Redis Redlock, DLQ) deployed via GitOps on GKE.',
      githubLink: 'https://github.com/jorgemgr94/distributed-orders'
    }
  },
  {
    id: 2,
    icon: '/assets/images/projects/routes-engine.png',
    area: 'Advanced Algorithms',
    topics: [
      'Spatial Indexing (QuadTrees)',
      'Advanced Graph Algorithms (A*, Dijkstra)',
      'Backtracking (VRP Solver)'
    ],
    project: {
      title: 'Urban Logistics Engine',
      description:
        'Personal project — high-performance logistics core for solving the Vehicle Routing Problem (VRP) at city scale. Optimized for 50+ vehicle fleets using custom spatial indexing (QuadTrees) and hybrid pathfinding algorithms to minimize delivery costs and latency.',
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
      'GitHub Actions'
    ],
    project: {
      title: 'ConectaPelu2 — Animal Welfare Ecosystem',
      description:
        'Digital ecosystem connecting animal shelters and adopters. Monolithic Next.js app on PostgreSQL/Drizzle with pet management, secure auth, and audit trail; containerized and deployed via GitHub Actions to Kubernetes.',
      githubLink: 'https://github.com/jorgemgr94/conectapelu2'
    }
  }
];
