import { Markdown } from '@/components/Markdown';
import { Badge } from '@/components/ui/badge';
import { ProfessionalExperience } from '@/data/types';

function ExperienceCardDetail({
  experience: { description, achievements, technologies }
}: {
  experience: ProfessionalExperience;
}) {
  return (
    <div className="mt-4 space-y-4">
      {/* Overview */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold flex items-center">Overview</h4>
        <Markdown content={description} />
      </div>

      {/* Achievements */}
      {achievements?.length ? (
        <div className="space-y-2">
          <h4 className="text-sm font-semibold flex items-center">
            Key Achievements
          </h4>
          <Markdown
            content={achievements
              .map((r, index) => `${index + 1}. ${r}`)
              .join('\n')}
          />
        </div>
      ) : null}

      {/* Technologies */}
      {technologies?.size ? (
        <div className="space-y-2">
          <h4 className="text-sm font-semibold flex items-center">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {Array.from(technologies.keys()).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ExperienceCardDetail;
