import SectionTitle from '@/components/SectionTitle';
import { professionalExperiences } from '@/data-v2/professional-experience';
import { useState } from 'react';
import BlurIn from '../BlurIn';
import ExperienceCard from './ExperienceCard';

function ProfessionalExperience() {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <section
      id="experience"
      className="py-16 px-4 max-w-4xl min-h-screen mx-auto"
    >
      <SectionTitle
        title="Professional Experience"
        description="A journey through my professional career, showcasing key roles and achievements."
      />

      <div className="space-y-0">
        {professionalExperiences.map((experience) => (
          <BlurIn key={experience.id}>
            <ExperienceCard
              experience={experience}
              isExpanded={expandedItems.has(experience.id)}
              onToggle={() => toggleExpanded(experience.id)}
            />
          </BlurIn>
        ))}
      </div>
    </section>
  );
}

export default ProfessionalExperience;
