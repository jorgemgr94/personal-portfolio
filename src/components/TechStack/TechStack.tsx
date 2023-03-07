import SectionTemplate from '@/components/SectionTemplate';
import { technologies } from '@/data';
import { arrayToString } from '@/helpers/format';

export default function TechStack() {
	return (
		<SectionTemplate
			id="tech"
			flexDirection="grid grid-cols-1 gap-4 xl:grid-cols-2"
		>
			<section>
				<div className="text-4xl uppercase font-bold mb-12 w-full dark:text-yellow-500">
					Current
				</div>
				<div className="flex flex-col md:flex-row justify-between relative">
					<div className="relative max-w-lg w-full mx-auto md:mx-none grid gap-x-8 gap-y-12 sm:gap-8 md:gap-12 grid-cols-3 sm:grid-cols-6 items-center place-content-center">
						{technologies.current.map((technology, index) => {
							return (
								<div
									title={technology.name}
									key={index}
									className="w-10 mx-auto flex items-center flex-col justify-center"
								>
									<img
										src={technology.icon}
										style={technology.style}
										alt={technologies.name}
									/>
									<p className="text-xs text-fun-gray font-bold mt-3 opacity-80">
										{technology.name}
									</p>
									<p className="text-xs text-fun-gray font-bold mt-3 opacity-80">
										<span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
											{technology.yearsOfExp}
										</span>
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</section>
			<section className="mt-4 xl:mt-0">
				<span className="text-blue-400 text-2xl uppercase font-bold">
					Learning
				</span>
				<p className="mb-4">
					{arrayToString(technologies.learning.map((t) => t.name))}
				</p>
				<span className="text-blue-400 text-2xl uppercase font-bold">
					{`I've used`}
				</span>
				<p className="mb-4">
					{arrayToString(technologies.used.map((t) => t.name))}
				</p>
			</section>
		</SectionTemplate>
	);
}
