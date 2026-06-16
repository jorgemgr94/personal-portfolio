import { Markdown } from '@/components/Markdown';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/data/types';
import Image from 'next/image';
import BlurIn from '../BlurIn';

function ProjectCard({ icon, area, topics, project }: Project) {
  return (
    <li className="relative flex items-start space-x-6 pb-8 last:pb-0">
      <div className="relative shrink-0">
        <BlurIn>
          <div className="w-16 h-16 bg-neutral-900 rounded-full border border-neutral-800 flex items-center justify-center shadow-2xl overflow-hidden group">
            <Image
              src={icon}
              alt={`${project.title} logo`}
              width={64}
              height={64}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              onError={(e) => {
                const wrapper = e.currentTarget.parentElement;
                if (wrapper) {
                  wrapper.style.display = 'none';
                  const fallback = wrapper.nextElementSibling;
                  if (fallback) fallback.classList.remove('hidden');
                }
              }}
            />
            <div className="hidden text-xs font-bold text-neutral-400 text-center">
              {project.title
                .split(' ')
                .map((word) => word[0])
                .join('')}
            </div>
          </div>
        </BlurIn>
      </div>

      <div className="flex-1 min-w-0">
        <BlurIn>
          <div className="space-y-3">
            <section className="flex flex-col">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-sm text-muted-foreground">{area}</p>
            </section>

            <div className="text-muted-foreground leading-relaxed">
              <Markdown content={project.description} />
            </div>
            {/* Technologies */}
            {topics?.length ? (
              <div className="mt-4">
                <div className="flex flex-wrap gap-2">
                  {topics.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="text-xs whitespace-break-spaces"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ) : null}

            {/* GitHub Link Button */}
            {project.githubLink ? (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-primary hover:text-primary/70 transition-colors group/link"
              >
                <svg
                  className="w-4 h-4 transition-transform group-hover/link:scale-110"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="text-sm font-medium">View Project</span>
              </a>
            ) : (
              <button
                disabled
                className="inline-flex items-center space-x-2 text-gray-400 cursor-not-allowed opacity-60"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="text-sm font-medium">View Project</span>
              </button>
            )}
          </div>
        </BlurIn>
      </div>
    </li>
  );
}

export default ProjectCard;
