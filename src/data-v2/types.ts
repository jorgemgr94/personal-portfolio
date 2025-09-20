export type Project = {
  id: number;
  icon: string;
  learning: {
    area: string;
    topics: string[];
  };
  project: {
    title: string;
    features: string[];
    githubLink: string | null;
  };
}
