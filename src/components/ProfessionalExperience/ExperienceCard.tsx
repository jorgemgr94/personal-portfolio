import { ProfessionalExperience } from '@/data-v2/types';
import { formatDateFromISO, formatDuration } from '@/helpers/format';
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
  const { companyName, jobTitle, startDate, endDate, companyLogo, companyUrl } =
    experience;

  const formattedStartDate = formatDateFromISO(startDate);
  const formattedEndDate = endDate ? formatDateFromISO(endDate) : 'Present';

  return (
    <div className="border-b py-6 last:border-b-0">
      <div className="flex items-start space-x-4">
        <div className="flex-1 min-w-0">
          <div
            className="flex items-center justify-between mb-1 cursor-pointer"
            onClick={onToggle}
          >
            {/* Left side */}
            <section
              className="flex items-center space-x-2 min-w-7/12 cursor-pointer"
              onClick={onToggle}
            >
              <a
                href={companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-16 min-h-16 bg-white rounded-full bg-gradient-to-b flex items-center justify-center shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={companyLogo}
                  alt={`${companyName} logo`}
                  className="object-contain"
                  width={52}
                  height={52}
                  onError={(e) => {
                    // Fallback to company initials if image fails to load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove(
                      'hidden'
                    );
                  }}
                />
              </a>
              <section>
                <div className="flex items-center space-x-2">
                  {/* Company Name */}
                  <h3 className="text-lg font-semibold ">{companyName}</h3>

                  {/* Chevron Icon */}
                  <button
                    onClick={onToggle}
                    className="flex items-center space-x-1 px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200"
                  >
                    <span>{isExpanded ? 'Show Less' : 'Show More'}</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>
                {/* Job Title */}
                <p className="text-sm mb-2">{jobTitle}</p>
              </section>
            </section>

            {/* Right side */}
            <section className="min-w-5/12">
              <div className="text-sm text-right">
                {formattedStartDate} - {formattedEndDate}
              </div>
              <div className="text-sm text-right">
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
