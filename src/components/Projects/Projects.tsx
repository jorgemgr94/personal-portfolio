import ProjectCard from '@/components/Projects/ProjectCard';
import { projects } from '@/data-v2/projects';

function Projects() {
  return (
    <section id="projects">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A progressive learning journey showcasing hands-on projects that
            demonstrate mastery of software engineering concepts, from
            fundamental programming principles to advanced distributed systems
            and AI applications.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-600"></div>

          {/* Timeline items */}
          <ul className="space-y-0">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Projects;
