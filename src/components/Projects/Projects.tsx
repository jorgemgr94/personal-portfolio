import ProjectCard from '@/components/Projects/ProjectCard';
import SectionTitle from '@/components/SectionTitle';
import { projects } from '@/data/projects';

function Projects() {
  return (
    <section
      id="projects"
      className="py-16 px-4 max-w-4xl min-h-screen mx-auto"
    >
      <SectionTitle
        title="Projects"
        description="Selected projects focused on applied AI systems and resilient, cloud-native platform architectures."
      />

      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-600"></div>
        <ul className="space-y-0">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Projects;
