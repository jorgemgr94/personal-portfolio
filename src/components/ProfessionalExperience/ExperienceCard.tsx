import { ProfessionalExperience } from '@/data-v2/types';
import { formatDuration } from '@/helpers/format';
import Image from 'next/image';
import ExperienceCardDetail from './ExperienceCardDetail';

function ExperienceCard({
  experience,
  isExpanded,
  onToggle
}: {
  experience: ProfessionalExperience;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const { companyName, jobTitle, startDate, endDate, companyLogo } = experience;

  return (
    <div className="border-b border-gray-800 py-6 last:border-b-0">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 bg-white rounded-full bg-gradient-to-b flex items-center justify-center shadow-sm">
            <Image
              src={companyLogo}
              alt={`${companyName} logo`}
              className="object-contain"
              width={52}
              height={52}
              onError={(e) => {
                // Fallback to company initials if image fails to load
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden text-sm font-bold  text-center">
              {companyName
                .split(' ')
                .map((word) => word[0])
                .join('')}
            </div>
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <section>
              <div className="flex items-center space-x-2">
                <h3 className="text-lg font-semibold ">{companyName}</h3>

                {/* Chevron Icon */}
                <button
                  onClick={onToggle}
                  className=" hover:text-gray-300 transition-colors duration-200"
                >
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
              <p className="text-gray-400 text-sm mb-2">{jobTitle}</p>
            </section>

            <section>
              <div className="text-gray-400 text-sm text-right">
                {startDate} - {endDate || 'Present'}
              </div>
              <div className="text-gray-400 text-sm text-right">
                {formatDuration(startDate, endDate)}
              </div>
            </section>
          </div>

          {isExpanded && <ExperienceCardDetail experience={experience} />}
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
