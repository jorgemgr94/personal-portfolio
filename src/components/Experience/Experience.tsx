import PositionCard from './PositionCard';
import SectionTemplate from '@/components/SectionTemplate';
import { positions } from '@/data';

function Experience() {
	return (
		<SectionTemplate id="experience" flexDirection="flex-col">
			<div className="text-4xl uppercase font-bold mb-4 w-full dark:text-yellow-500">
				Professional Exp.
			</div>
			{positions.map((position, key) => (
				<PositionCard key={key} position={position} />
			))}
		</SectionTemplate>
	);
}

export default Experience;
