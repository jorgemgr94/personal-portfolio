import SectionTemplate from '@/components/SectionTemplate';

type Skill = {
	title: string;
	icon: string;
	style?: { filter: string };
};

export default function TechStack() {
	const skills: Skill[] = [
		{
			title: 'HTML',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
		},
		{
			title: 'CSS',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
		},
		{
			title: 'Javascript',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
		},
		{
			title: 'Sass',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg'
		},
		{
			title: 'TailwindCSS',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'
		},
		{
			title: 'React',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
		},
		{
			title: 'NextJS',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg'
			// style: { filter: 'invert(1)' }
		},
		{
			title: 'Typescript',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
		},
		{
			title: 'NodeJS',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
		},
		{
			title: 'Git',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
		},
		{
			title: 'Firebase',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg'
		},
		{
			title: 'Figma',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
		}
	];
	return (
		<SectionTemplate id="currenTechStack" flexDirection="flex-col">
			<div className="text-4xl uppercase font-bold mb-12 w-full dark:text-yellow-500">
				Current Tech Stack
			</div>
			<div className="flex flex-col md:flex-row justify-between relative">
				<div className="relative max-w-lg w-full mx-auto md:mx-none grid gap-x-8 gap-y-12 sm:gap-8 md:gap-12 grid-cols-3 sm:grid-cols-6 items-center place-content-center">
					{skills.map((item, index) => {
						return (
							<div
								title={item.title}
								key={index}
								className="w-10 mx-auto flex items-center flex-col justify-center"
							>
								<img src={item.icon} style={item.style} />
								<p className="text-xs text-fun-gray font-bold mt-3 opacity-80">
									{item.title}
								</p>
								<p className="text-xs text-fun-gray font-bold mt-3 opacity-80">
									<span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
										2yrs
									</span>
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</SectionTemplate>
	);
}
