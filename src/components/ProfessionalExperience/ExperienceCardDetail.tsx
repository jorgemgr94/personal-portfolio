import Blur from '@/components/Blur';
import { ProfessionalExperience } from '@/data-v2/types';

function ExperienceCardDetail({
  experience: { responsibilities, achievements, technologies }
}: {
  experience: ProfessionalExperience;
}) {
  return (
    <Blur duration={0.2}>
      <div className="mt-4 space-y-4 animate-in slide-in-from-top-2 duration-200">
        {/* Responsibilities */}
        {responsibilities && responsibilities.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-semibold flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
              Responsibilities
            </h4>
            <ul className="space-y-1">
              {responsibilities.map((responsibility, index) => (
                <li
                  key={index}
                  className="text-gray-300 text-sm leading-relaxed flex items-start"
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
              <svg
                className="w-4 h-4 mr-2 text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
              Key Achievements
            </h4>
            <ul className="space-y-1">
              {achievements.map((achievement, index) => (
                <li
                  key={index}
                  className="text-gray-300 text-sm leading-relaxed flex items-start"
                >
                  <span className="text-yellow-400 mr-2 mt-1.5 flex-shrink-0">
                    🏆
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
              <svg
                className="w-4 h-4 mr-2 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {Array.from(technologies.keys()).map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs font-medium hover:bg-gray-700 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </Blur>
  );
}

export default ExperienceCardDetail;
