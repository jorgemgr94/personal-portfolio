import { technologies } from '@/data';
import { arrayToString } from '@/helpers/format';

export default function TechsExperience() {
	return (
		<section className="ml-2">
			<span className="text-blue-400 text-2xl uppercase font-bold">
				Current Tech Stack
			</span>
			<p className="mb-4">{arrayToString(technologies.current)}</p>
			<span className="text-blue-400 text-2xl uppercase font-bold">
				Learning
			</span>
			<p className="mb-4">{arrayToString(technologies.learning)}</p>
			<span className="text-blue-400 text-2xl uppercase font-bold">
				{`I've used`}
			</span>
			<p className="mb-4">{arrayToString(technologies.used)}</p>
		</section>
	);
}
