import { AiOutlineTrophy } from 'react-icons/ai';
import { BsFillStopFill } from 'react-icons/bs';
import { formatDate, formatExperience } from '../../helpers/format';
import { WorkExperience } from '@/data';

function PositionCard({ experience }: { experience: WorkExperience }) {
  return (
    <section className="w-full mb-8">
      <section className="flex justify-between mb-1">
        <section className="inline-flex flex-col">
          <span className="text-blue-400 font-bold md:text-xl">
            {experience.positionName}
          </span>
          <span className="font-semibold md:text-xl">
            {experience.companyName}
          </span>
        </section>
        <section className="inline-flex flex-col items-end">
          <span className="dark:font-semibold md:text-lg">
            {formatDate(experience.startedAt)} -{' '}
            {formatDate(experience.finishedAt)}
          </span>
          <span className="dark:font-semibold md:text-lg">
            {formatExperience(experience.startedAt, experience.finishedAt)}
          </span>
        </section>
      </section>
      <section className="bg-gray-100 rounded-lg dark:bg-gray-700 p-4">
        <ul className="mb-4">
          {experience.responsibilities.map((responsibility, key) => (
            <li key={key}>
              <BsFillStopFill className="inline-block" /> {responsibility}
            </li>
          ))}
        </ul>
        <ul className="mb-4">
          {experience.achievements.map((achievement, key) => (
            <li key={key}>
              <AiOutlineTrophy className="text-yellow-500 inline-block" />{' '}
              {achievement}
            </li>
          ))}
        </ul>
        <small>
          Tech stack: {Array.from(experience.technologies.keys()).join(', ')}
        </small>
      </section>
    </section>
  );
}

export default PositionCard;
