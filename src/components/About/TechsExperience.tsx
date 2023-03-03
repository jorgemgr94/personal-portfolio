import { TechnologiesData, TechnologiesEnum } from '../../data';

export default function TechsExperience() {
	return (
		<section className="ml-2">
			<span className="text-blue-400 text-2xl uppercase font-bold">
				Current Tech Stack
			</span>
			<p className="mb-4">{TechnologiesData[TechnologiesEnum.Current]}</p>
			<span className="text-blue-400 text-2xl uppercase font-bold">
				Learning
			</span>
			<p className="mb-4">{TechnologiesData[TechnologiesEnum.Learning]}</p>
			<span className="text-blue-400 text-2xl uppercase font-bold">
				{`I've used`}
			</span>
			<p className="mb-4">{TechnologiesData[TechnologiesEnum.Used]}</p>
		</section>
	);
}
