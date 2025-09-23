import { Badge } from '@/components/ui/badge';
import { ProfessionalExperience } from '@/data/types';

function ExperienceCardDetail({
  experience: { responsibilities, achievements, technologies }
}: {
  experience: ProfessionalExperience;
}) {
  return (
    <div className="mt-4 space-y-4">
      {/* Responsibilities */}
      {responsibilities && responsibilities.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-semibold flex items-center">
            Responsibilities
          </h4>
          <ul className="space-y-1">
            {responsibilities.map((responsibility, index) => (
              <li
                key={index}
                className="text-muted-foreground text-sm leading-relaxed flex items-start"
              >
                <span className="text-gray-500 mr-2 mt-1.5 flex-shrink-0">
                  •
                </span>
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Achievements */}
      {achievements && achievements.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-semibold flex items-center">
            Key Achievements
          </h4>
          <ul className="space-y-1">
            {achievements.map((achievement, index) => (
              <li
                key={index}
                className="text-muted-foreground text-sm leading-relaxed flex items-start"
              >
                <span className="text-yellow-400 mr-2 mt-1.5 flex-shrink-0">
                  🏅
                </span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
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
