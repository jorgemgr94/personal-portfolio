import { Technology, TechnologyStatus } from './types';

// REF: https://github.com/devicons/devicon/tree/v2.15.1/icons/
const iconsBasePath = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';
const technologiesList = [
	// -- Current --------------------------------------------
	{
		name: `Typescript`,
		status: TechnologyStatus.Current,
		icon: iconsBasePath + '/typescript/typescript-original.svg',
		yearsOfExp: '4yrs'
	},
	{
		name: `React`,
		status: TechnologyStatus.Current,
		icon: iconsBasePath + '/react/react-original.svg',
		yearsOfExp: '7yrs'
	},
	{
		name: `NodeJs`,
		status: TechnologyStatus.Current,
		icon: iconsBasePath + '/nodejs/nodejs-original.svg',
		yearsOfExp: '5yrs'
	},
	{
		name: `Firebase`,
		status: TechnologyStatus.Current,
		icon: iconsBasePath + '/firebase/firebase-plain.svg',
		yearsOfExp: '4yrs'
	},
	{
		name: `GCP`,
		status: TechnologyStatus.Current,
		icon: iconsBasePath + '/googlecloud/googlecloud-original.svg',
		yearsOfExp: '4yrs'
	},
	{
		name: `Docker`,
		status: TechnologyStatus.Current,
		icon: iconsBasePath + '/docker/docker-original.svg',
		yearsOfExp: '4yrs'
	},
	{
		name: `Jest`,
		status: TechnologyStatus.Current,
		icon: iconsBasePath + '/jest/jest-plain.svg',
		yearsOfExp: '1yrs'
	},
	{
		name: `RxJS`,
		status: TechnologyStatus.Current,
		icon: '/assets/images/technologies/rxjs.png',
		yearsOfExp: '2yrs'
	},
	{
		name: `NextJS`,
		status: TechnologyStatus.Current,
		icon: '/assets/images/technologies/nextjs.png',
		yearsOfExp: '2yrs'
	},
	{
		name: `Github`,
		status: TechnologyStatus.Current,
		icon: iconsBasePath + '/git/git-original.svg',
		yearsOfExp: '7yrs'
	},

	// -- Learning -------------------------------------------
	{ name: `Kubernetes`, status: TechnologyStatus.Learning },
	{ name: `Domain Driven Design (DDD)`, status: TechnologyStatus.Learning },
	{ name: `Design Patterns`, status: TechnologyStatus.Learning },
	{
		name: `Systems Design (Cloud Architecture)`,
		status: TechnologyStatus.Learning
	},
	{ name: `Terraform`, status: TechnologyStatus.Learning },
	{ name: `GraphQL`, status: TechnologyStatus.Learning },
	{ name: `Golang`, status: TechnologyStatus.Learning },

	{ name: `AWS`, status: TechnologyStatus.Used },
	{ name: `Python`, status: TechnologyStatus.Used },
	{ name: `Gitlab`, status: TechnologyStatus.Used },
	{ name: `PostgreSQL`, status: TechnologyStatus.Used },
	{ name: `MongoDB`, status: TechnologyStatus.Used },
	{ name: `React Native`, status: TechnologyStatus.Used },
	{ name: `Heroku`, status: TechnologyStatus.Used },
	{ name: `Laravel`, status: TechnologyStatus.Used },
	{ name: `Javascript`, status: TechnologyStatus.Used },
	{ name: `VueJS`, status: TechnologyStatus.Used },
	{ name: `Php`, status: TechnologyStatus.Used },
	{ name: `Android w/ Java`, status: TechnologyStatus.Used },
	{ name: `Android w/Kotlin`, status: TechnologyStatus.Used },
	{ name: `IOS w/ Swift`, status: TechnologyStatus.Used },
	{ name: `MySQL`, status: TechnologyStatus.Used },
	{ name: `MariaDB`, status: TechnologyStatus.Used },
	{ name: `SQL Server`, status: TechnologyStatus.Used },
	{ name: `Bash`, status: TechnologyStatus.Used },
	{ name: `Redis`, status: TechnologyStatus.Used },
	{ name: `Ruby on Rails`, status: TechnologyStatus.Used }
] satisfies Technology[];

const filterByStatus = (status: TechnologyStatus) =>
	technologiesList.filter((technology) => technology.status === status);

export const technologies = {
	current: filterByStatus(TechnologyStatus.Current),
	learning: filterByStatus(TechnologyStatus.Learning),
	used: filterByStatus(TechnologyStatus.Used)
};
