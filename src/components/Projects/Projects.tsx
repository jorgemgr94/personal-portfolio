import ProjectCard from '@/components/Projects/ProjectCard';
import SectionTitle from '@/components/SectionTitle';
import { projects } from '@/data-v2/projects';

function Projects() {
  return (
    <section
      id="projects"
      className="py-16 px-4 max-w-4xl min-h-screen mx-auto"
    >
      <SectionTitle
        title="Projects"
        description=" A progressive learning journey showcasing hands-on projects that
            demonstrate mastery of software engineering concepts, from
            fundamental programming principles to advanced distributed systems
            and AI applications."
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
