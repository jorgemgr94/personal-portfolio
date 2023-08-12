import { AiOutlineTrophy } from 'react-icons/ai';
import { BsFillStopFill } from 'react-icons/bs';
import { formatDate, formatExperience } from '../../helpers/format';
import { IPosition } from '@/data';

interface PositionCardProps {
  position: IPosition;
}

function PositionCard ({ position }: PositionCardProps) {
  return (
    <section className="w-full mb-8">
      <section className="flex justify-between mb-1">
        <section className="inline-flex flex-col">
          <span className="text-blue-400 font-bold md:text-xl">
            {position.name}
          </span>
          <span className="font-semibold md:text-xl">
            {position.company.name}
          </span>
        </section>
        <section className="inline-flex flex-col items-end">
          <span className="dark:font-semibold md:text-lg">
            {formatDate(position.startAt)} - {formatDate(position.endAt)}
          </span>
          <span className="dark:font-semibold md:text-lg">
            {formatExperience(position.startAt, position.endAt)}
          </span>
        </section>
      </section>
      <section className="bg-gray-100 rounded-lg dark:bg-gray-700 p-4">
        {position.responsibilities.length > 1 && (
          <ul className="mb-4">
            {position.responsibilities.map((responsibility, key) => (
              <li key={key}>
                <BsFillStopFill className="inline-block" /> {responsibility}
              </li>
            ))}
          </ul>
        )}
        {position.achievements.length > 1 && (
          <ul className="mb-4">
            {position.achievements.map((achievement, key) => (
              <li key={key}>
                <AiOutlineTrophy className="text-yellow-500 inline-block" />{' '}
                {achievement}
              </li>
            ))}
          </ul>
        )}
        <small>Tech stack: {position.technicalEnv}</small>
      </section>
    </section>
  );
}

export default PositionCard;
