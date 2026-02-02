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
        <h4 className="text-sm font-semibold flex items-center">
          Overview
        </h4>
        <Markdown
          content={description}
          className="text-sm space-y-1"
        />
      </div>

      {/* Achievements */}
      {achievements && achievements.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-semibold flex items-center">
            Key Achievements
          </h4>
          <Markdown
            content={achievements
              .map((r, index) => `${index + 1}. ${r}`)
              .join('\n')}
            className="text-sm space-y-1"
          />
        </div>
      )}

      {/* Technologies */}
      {technologies && technologies.size > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-semibold flex items-center">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {Array.from(technologies.keys()).map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ExperienceCardDetail;
