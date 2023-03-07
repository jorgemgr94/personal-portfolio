/*
	status = 0 -> Current Tech Stack
	status = 1 -> Learning
	status = 2 -> I've used
*/
const technologiesList = [
	{ name: `Typescript`, status: 0 },
	{ name: `React`, status: 0 },
	{ name: `NodeJs`, status: 0 },
	{ name: `Firebase`, status: 0 },
	{ name: `Google Cloud Platform`, status: 0 },
	{ name: `Jest`, status: 0 },
	{ name: `Github`, status: 0 },
	{ name: `RxJS`, status: 0 },
	{ name: `Docker`, status: 0 },

	{ name: `Kubernetes`, status: 1 },
	{ name: `Domain Driven Design (DDD)`, status: 1 },
	{ name: `Design Patterns`, status: 1 },
	{ name: `Systems Design (Cloud Architecture)`, status: 1 },
	{ name: `Terraform`, status: 1 },
	{ name: `GraphQl`, status: 1 },
	{ name: `Golang`, status: 1 },

	{ name: `AWS`, status: 2 },
	{ name: `Python`, status: 2 },
	{ name: `Gitlab`, status: 2 },
	{ name: `PostgreSQL`, status: 2 },
	{ name: `MongoDB`, status: 2 },
	{ name: `React Native`, status: 2 },
	{ name: `Heroku`, status: 2 },
	{ name: `Laravel`, status: 2 },
	{ name: `Javascript`, status: 2 },
	{ name: `VueJS`, status: 2 },
	{ name: `Php`, status: 2 },
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

export const technologies = {
	current: technologiesList.filter((t) => t.status === 0).map((t) => t.name),
	learning: technologiesList.filter((t) => t.status === 1).map((t) => t.name),
	used: technologiesList.filter((t) => t.status === 2).map((t) => t.name)
};
