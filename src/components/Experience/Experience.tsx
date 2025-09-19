import PositionCard from './PositionCard';
import SectionTemplate from '@/components/SectionTemplate';
import { professionalExperiences } from '@/data';
import BlurIn from '../BlurIn/BlurIn';

function Experience() {
  return (
    <SectionTemplate id="experience" flexDirection="flex-col">
      <BlurIn>
        <div className="text-4xl uppercase font-bold mb-4 w-full dark:text-yellow-500">
          Professional Exp.
        </div>
      </BlurIn>
      {professionalExperiences.map((experience, key) => (
        <BlurIn key={key}>
          <PositionCard experience={experience} />
        </BlurIn>
      ))}
    </SectionTemplate>
  );
}

export default Experience;
