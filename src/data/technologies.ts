// import { arrayToString } from '../util/format';

// /*
// 	status = 0 -> Current Tech Stack
// 	status = 1 -> Learning
// 	status = 2 -> I've used
// */
// const enum TechnologyCategory {
// 	Current = 'Current'
// 	// Learning = 'Learning',
// 	// Used = 'Used'
// }

// type TechnologyExperience = {
// 	name: string;
// 	category: TechnologyCategory;
// 	experience: number; // years? months?
// };

// const enum Technologies {
// 	Typescript = 'Typescript',
// 	React = 'React'
// 	// RxJS = 'RxJS',
// 	// NodeJs = 'NodeJs'
// 	// Firebase = 'Firebase',
// 	// GoogleCloudPlatform = 'GoogleCloudPlatform',
// 	// Gitlab = 'Gitlab',
// 	// Kubernetes = 'Kubernetes',
// 	// Jest = 'Jest',
// 	// Terraform = 'Terraform',
// 	// GraphQl = 'GraphQl',
// 	// Golang = 'Golang',
// 	// PostgreSQL = 'PostgreSQL',
// 	// MongoDB = 'MongoDB',
// 	// Python = 'Python',
// 	// Docker = 'Docker',
// 	// ReactNative = 'React Native',
// 	// AWS = 'AWS',
// 	// Heroku = 'Heroku',
// 	// Laravel = 'Laravel',
// 	// Javascript = 'Javascript',
// 	// VueJS = 'VueJS',
// 	// Php = 'Php',
// 	// Html5 = 'Html5',
// 	// CSS3 = 'CSS3',
// 	// AndroidJava = 'AndroidJava',
// 	// AndroidKotlin = 'AndroidKotlin',
// 	// IOSSwift = 'IOSSwift',
// 	// MySQL = 'MySQL',
// 	// MariaDB = 'MariaDB',
// 	// SQLServer = 'SQLServer',
// 	// Bash = 'Bash',
// 	// Redis = 'Redis',
// 	// RubyOnRails = 'RubyOnRails'
// }

// // React: {
// //   name: `React`,
// //   category: TechnologyCategory.Current,
// //   experience: 4
// // },
// // RxJS: {
// //   name: `React`,
// //   category: TechnologyCategory.Current,
// //   experience: 4
// // },
// // NodeJs: {
// //   name: `React`,
// //   category: TechnologyCategory.Current,
// //   experience: 4
// // }

// const technologies: Record<Technologies, TechnologyExperience> = {
// 	Typescript: {
// 		name: `Typescript`,
// 		category: TechnologyCategory.Current,
// 		experience: 4
// 	}
// };

// const demo = Object.values(technologies).filter(
// 	(technology) => technology.category === TechnologyCategory.Current
// );

// // 	{ name: `Typescript`, status: 0 },
// // 	{ name: `React`, status: 0 },
// // 	{ name: `RxJS`, status: 0 },
// // 	{ name: `NodeJs`, status: 0 },
// // 	{ name: `Firebase`, status: 0 },
// // 	{ name: `Google Cloud Platform`, status: 0 },
// // 	{ name: `Gitlab`, status: 0 },

// // 	{ name: `Kubernetes`, status: 1 },
// // 	{ name: `Jest`, status: 1 },
// // 	{ name: `Terraform`, status: 1 },
// // 	{ name: `GraphQl`, status: 1 },
// // 	{ name: `Golang`, status: 1 },

// // 	{ name: `PostgreSQL`, status: 2 },
// // 	{ name: `MongoDB`, status: 2 },
// // 	{ name: `Python`, status: 2 },
// // 	{ name: `Docker`, status: 2 },
// // 	{ name: `React Native`, status: 2 },
// // 	{ name: `AWS`, status: 2 },
// // 	{ name: `Heroku`, status: 2 },
// // 	{ name: `Laravel`, status: 2 },
// // 	{ name: `Javascript`, status: 2 },
// // 	{ name: `VueJS`, status: 2 },
// // 	{ name: `Php`, status: 2 },
// // 	{ name: `Html5`, status: 2 },
// // 	{ name: `CSS3`, status: 2 },
// // 	{ name: `Android w/ Java`, status: 2 },
// // 	{ name: `Android w/Kotlin`, status: 2 },
// // 	{ name: `IOS w/ Swift`, status: 2 },
// // 	{ name: `MySQL`, status: 2 },
// // 	{ name: `MariaDB`, status: 2 },
// // 	{ name: `SQL Server`, status: 2 },
// // 	{ name: `Bash`, status: 2 },
// // 	{ name: `Redis`, status: 2 },
// // 	{ name: `Ruby on Rails`, status: 2 }
// // ];

// // technologies.

// // const current = technologies.filter((t) => t.status === 0).map((t) => t.name);
// // const learning = technologies.filter((t) => t.status === 1).map((t) => t.name);
// // const used = technologies.filter((t) => t.status === 2).map((t) => t.name);

// // export const TechnologiesData : Record<TechnologyCategory, string> = {
// // 	Current: arrayToString(current),
// // 	Learning: arrayToString(learning),
// // 	Used: arrayToString(used)
// // };

import { arrayToString } from '../helpers/format';

/*
	status = 0 -> Current Tech Stack
	status = 1 -> Learning
	status = 2 -> I've used
*/
const technologies = [
	{ name: `Typescript`, status: 0 },
	{ name: `React`, status: 0 },
	{ name: `RxJS`, status: 0 },
	{ name: `NodeJs`, status: 0 },
	{ name: `Firebase`, status: 0 },
	{ name: `Google Cloud Platform`, status: 0 },
	{ name: `Gitlab`, status: 0 },

	{ name: `Kubernetes`, status: 1 },
	{ name: `Jest`, status: 1 },
	{ name: `Terraform`, status: 1 },
	{ name: `GraphQl`, status: 1 },
	{ name: `Golang`, status: 1 },

	{ name: `PostgreSQL`, status: 2 },
	{ name: `MongoDB`, status: 2 },
	{ name: `TypeORM`, status: 2 },
	{ name: `Python`, status: 2 },
	{ name: `Docker`, status: 2 },
	{ name: `React Native`, status: 2 },
	{ name: `AWS`, status: 2 },
	{ name: `Heroku`, status: 2 },
	{ name: `Laravel`, status: 2 },
	{ name: `Javascript`, status: 2 },
	{ name: `VueJS`, status: 2 },
	{ name: `Php`, status: 2 },
	{ name: `Html5`, status: 2 },
	{ name: `CSS3`, status: 2 },
	{ name: `Android w/ Java`, status: 2 },
	{ name: `Android w/Kotlin`, status: 2 },
	{ name: `IOS w/ Swift`, status: 2 },
	{ name: `MySQL`, status: 2 },
	{ name: `MariaDB`, status: 2 },
	{ name: `SQL Server`, status: 2 },
	{ name: `Bash`, status: 2 },
	{ name: `Redis`, status: 2 },
	{ name: `Ruby on Rails`, status: 2 }
];
const current = technologies.filter((t) => t.status === 0).map((t) => t.name);
const learning = technologies.filter((t) => t.status === 1).map((t) => t.name);
const used = technologies.filter((t) => t.status === 2).map((t) => t.name);

export enum TechnologiesEnum {
	Current,
	Learning,
	Used
}

export const TechnologiesData = {
	[TechnologiesEnum.Current]: arrayToString(current),
	[TechnologiesEnum.Learning]: arrayToString(learning),
	[TechnologiesEnum.Used]: arrayToString(used)
};
