import Head from 'next/head';
import { AiOutlineTrophy } from 'react-icons/ai';
import { BsFillStopFill } from 'react-icons/bs';

import {
	GeneralImages,
	SocialIconsImages,
	about,
	positions,
	technologies
} from '@/data';
import { arrayToString, formatDate, formatExperience } from '@/helpers/format';

function Resume() {
	return (
		<>
			<Head>
				<title>Jorge García - Resume</title>
			</Head>
			<section className="shadow-md place-content-center w-[216mm] my-0 mx-auto p-4 print:p-0 print:shadow-none">
				<span
					onClick={() => window.print()}
					className="fixed bottom-5 right-5 cursor-pointer flex flex-col items-center print:hidden"
				>
					<img
						className="w-10 mb-2"
						src={GeneralImages.Printer}
						alt="Printer"
					/>
					<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-blue-400 hover:bg-blue-300 text-white">
						Print
					</span>
				</span>
				<section className="flex mb-4">
					<div className="flex flex-col items-center basis-4/12">
						<img
							className="rounded-full shadow-sm w-28 h-28 mb-2"
							src={GeneralImages.Profile}
							alt="user image"
						/>
						<div className="font-bold">Jorge Marcial Garcia Rizo</div>
						<div>Software Enginner</div>
						<a
							className="underline cursor-pointer text-gray-600 hover:text-gray-400"
							target="_blank"
							rel="noopener noreferrer"
							href="https://jorgemgr.com"
						>
							<small>jorgemgr.com</small>
						</a>
						<a
							className="underline cursor-pointer text-gray-600 hover:text-gray-400 mb-2"
							target="_blank"
							rel="noopener noreferrer"
							href="mailto:jorgemgr94@gmail.com"
						>
							<small>jorgemgr94@gmail.com</small>
						</a>
						<section className="flex items-start">
							<a
								className="h-6 w-6 mr-4"
								rel="noopener noreferrer"
								href="https://github.com/jorgemgr94"
								target="_blank"
							>
								<img alt="Github" src={SocialIconsImages.Github} />
							</a>
							<a
								className="h-6 w-6 mr-4"
								rel="noopener noreferrer"
								href="https://github.com/jorgemgr94"
								target="_blank"
							>
								<img alt="Gitlab" src={SocialIconsImages.Gitlab} />
							</a>
							<a
								className="h-6 w-6 mr-4"
								rel="noopener noreferrer"
								href="https://www.linkedin.com/in/jorgemgr94/"
								target="_blank"
							>
								<img alt="Linkedin" src={SocialIconsImages.Linkedin} />
							</a>
						</section>
					</div>
					<div className="basis-8/12">
						<div className="font-bold">About Me</div>
						<p className="mb-4">{about.firstParagraph}</p>
						<p className="mb-4">{about.secondParagraph}</p>
						<p className="mb-4">{about.thirdParagraph}</p>
					</div>
				</section>
				<section className="mb-4">
					<div className="w-full font-bold mb-4">Technical Experience</div>
					<div className="w-full mb-2">
						<span className="font-medium">Current Tech Stack: </span>
						{arrayToString(technologies.current.map((t) => t.name))}
					</div>
					<div className="w-full mb-2">
						<span className="font-medium">Learning: </span>
						{arrayToString(technologies.learning.map((t) => t.name))}
					</div>
					<div className="w-full">
						<span className="font-medium">{`I've used: `}</span>
						{arrayToString(technologies.used.map((t) => t.name))}
					</div>
				</section>
				<section>
					<div className="w-full font-bold mb-4">Professional Experience</div>
					{positions.map((position, key) => (
						<section
							key={key}
							className="py-2 border-b border-gray-200 last:border-0"
						>
							<section className="flex justify-between mb-2">
								<section className="inline-flex items-center">
									<img
										alt="Company Logo"
										className="h-[32px] mr-2"
										src={position.company.photo}
									/>
									<div className="flex flex-col">
										<span className="font-medium">{position.company.name}</span>
										<span className="font-light">{position.name}</span>
									</div>
								</section>
								<section className="inline-flex flex-col items-end">
									<span className="font-medium">
										{formatDate(position.startAt)} -{` `}
										{formatDate(position.endAt)}
									</span>
									<span className="font-light">
										{formatExperience(position.startAt, position.endAt)}
									</span>
								</section>
							</section>
							<section className="font-light">
								<ul className="mb-4">
									{position.responsibilities.map((responsibility, key) => (
										<li key={key}>
											<BsFillStopFill className="inline-block" />
											{` `}
											{responsibility}
										</li>
									))}
								</ul>
								<ul className="mb-4">
									{position.achievements.map((achievement, key) => (
										<li key={key}>
											<AiOutlineTrophy className="text-yellow-500 inline-block" />
											{` `}
											{achievement}
										</li>
									))}
								</ul>
								<small>Tech stack: {position.technicalEnv}</small>
							</section>
						</section>
					))}
				</section>
			</section>
		</>
	);
}

export default Resume;

export async function getServerSideProps() {
	return {
		props: { forcedTheme: 'light' }
	};
}
