import { ProjectStatus, type Project } from '@/data/types';

export const projects: Project[] = [
  {
    id: 1,
    showInResume: true,
    icon: '/assets/images/projects/deal-intelligence-v2.png',
    status: ProjectStatus.FunctionalPrototype,
    area: 'Applied AI',
    topics: ['Python', 'LangChain', 'LLMs', 'FAISS', 'Pinecone'],
    project: {
      title: 'Deal Intelligence Platform',
      description:
        'A working prototype for analyzing deal documents with vector retrieval and four specialist agents coordinated by an orchestrator. I’m currently expanding it with LangGraph-based orchestration, GraphRAG, audio and image ingestion, and automated evaluation.',
      githubLink: 'https://github.com/jorgemgr94/multi-agent-rag-system'
    }
  },
  {
    id: 8,
    showInResume: true,
    icon: '/assets/images/projects/conectapelu-v2.png',
    status: ProjectStatus.FunctionalPrototype,
    area: 'Full-Stack Product',
    topics: ['Next.js 15', 'Drizzle ORM', 'PostgreSQL', 'Supabase'],
    project: {
      title: 'ConectaPelu2 — Animal Welfare Ecosystem',
      description:
        'An in-progress application connecting animal shelters and adopters. The current prototype includes pet and organization workflows, Supabase authentication, and a PostgreSQL database accessed through Drizzle.',
      githubLink: 'https://github.com/jorgemgr94/conectapelu2'
    }
  },
  {
    id: 7,
    icon: '/assets/images/projects/distributed-orders-v2.png',
    status: ProjectStatus.EarlyPrototype,
    area: 'Distributed Systems',
    topics: [],
    project: {
      title: 'Distributed Orders Platform',
      description:
        'An early draft for exploring order workflows across service boundaries. The longer-term goal is to experiment with synchronous and asynchronous communication, failure handling, and deployment patterns, but those parts are not implemented yet.',
      githubLink: 'https://github.com/jorgemgr94/distributed-orders'
    }
  },
  {
    id: 2,
    icon: '/assets/images/projects/routes-engine-v2.png',
    status: ProjectStatus.PlannedLearningProject,
    area: 'Algorithms & Optimization',
    topics: [],
    project: {
      title: 'Urban Logistics Engine',
      description:
        'A planned learning project for exploring spatial indexing, pathfinding, and vehicle-routing problems. I intend to use it to work with QuadTrees, A*, Dijkstra, and backtracking; there is no working implementation yet.',
      githubLink: 'https://github.com/jorgemgr94/urban-logistics-engine'
    }
  }
];
