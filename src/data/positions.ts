const GaragePhoto = '/assets/images/companies/garage.png';
const HmsPhoto = '/assets/images/companies/hms.png';
const IngeniatPhoto = '/assets/images/companies/ingeniat.png';
const IntersogPhoto = '/assets/images/companies/intersog.png';
const SensaiPhoto = '/assets/images/companies/sensai.jpg';
const SintecPhoto = '/assets/images/companies/sintec.png';

export interface IPosition {
	name: string;
	startAt: Date;
	endAt?: Date;
	company: {
		name: string;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		photo: any;
	};
	responsibilities: string[];
	achievements: string[];
	technicalEnv: string;
}

export const PositionsData: IPosition[] = [
	{
		name: `Software Engineer`,
		startAt: new Date(`09/06/2021`),
		endAt: undefined,
		company: {
			name: `Intersog`,
			photo: IntersogPhoto
		},
		responsibilities: [],
		achievements: [],
		technicalEnv: `Typescript, React, RxJS, NodeJs, Firebase, GCP.`
	},
	{
		name: `Tech Lead / Digital Solutions Manager`,
		startAt: new Date(`02/01/2020`),
		endAt: new Date(`09/03/2021`),
		company: {
			name: `Sintec`,
			photo: SintecPhoto
		},
		responsibilities: [],
		achievements: [],
		technicalEnv: `React, Typescript, MongoDB, NodeJs, Python, PostgreSQL, Git, SCRUM, GCP, AWS, Docker.`
	},
	{
		name: `Software Engineer, Consultant`,
		startAt: new Date(`02/01/2019`),
		endAt: new Date(`02/01/2020`),
		company: {
			name: `Sintec`,
			photo: SintecPhoto
		},
		responsibilities: [
			`Features development to front-end, back-end, and mobile app.`,
			`Product definition on milestones, issues, architecture, quality assurance, design.`,
			`Testing, research, and development of new technologies (IoT)`,
			`Code maintenance and improvement.`,
			`Software requirements collection and support to other consulting practices.`
		],
		achievements: [
			`I developed a platform called Dynamo, an IoT project which consists in around
			150 beacon tags sending real-time data about users position (latitude, longitude)
			in a CEDIS, this information is visualized in a webpage and stored on a non-relational
			database (MongoDB) to do future Analytics about times and movements.`,
			`I incorporated new technologies that ensure quality and scalability; besides, they bring
			innovation and dynamism which represents a competitive vantage.`
		],
		technicalEnv: `React, React Native, Typescript, MongoDB, NodeJs, Python, Php, MySQL, PostgreSQL, Git,
		SCRUM, GCP, AWS, Docker.`
	},
	{
		name: `Software Engineer (Remote, Part time)`,
		startAt: new Date(`07/01/2019`),
		endAt: new Date(`12/31/2019`),
		company: {
			name: `Garage (Startup)`,
			photo: GaragePhoto
		},
		responsibilities: [
			`Features development to front-end and back-end.`,
			`Product definition on milestones, issues, architecture, quality assurance, design.`,
			`Code maintenance and improvement.`
		],
		achievements: [
			`I rewrote the back-end API and enabled the front-end, in order to manage dynamic services in the Quoting process.`,
			`I learned about containers (Docker), code replication (Migrations and Seeds), automated testing (Jest, RSpec),
			DevOps (Gitlab CI/CD, Eslint) and SOLID principles.`
		],
		technicalEnv: `Ruby on Rails, React, Jest, Mobx, Typescript, PostgreSQL, Heroku, Git, SCRUM, Docker, Gitlab.`
	},
	{
		name: `Software Engineer`,
		startAt: new Date(`08/01/2018`),
		endAt: new Date(`02/01/2019`),
		company: {
			name: `SENSAI Empower Success (Startup) / Metalsa`,
			photo: SensaiPhoto
		},
		responsibilities: [
			`Features development to front-end, back-end, and mobile app considering: scalability, multi-zones, multi-language.`,
			`Product definition on design, architecture, quality assurance, issues definition and punctuation.`,
			`Write database queries.`,
			`Code maintenance and improvement.`
		],
		achievements: [
			`I lived what resilience is, as a startup, SENSAI was in constantly and aggressive change; in October we had a one
			year and a half old product working, then we had to migrate front-end, back-end, and database in just 3 months.`,
			`I learned modern software development, stages (development, staging, production) and to work with other
			departments like design and quality assurance.`
		],
		technicalEnv: `React, React Native, NodeJs, Ruby on Rails, MySQL, SQL Server, AWS, Git, SCRUM, Jira, MQTT.`
	},
	{
		name: `Tech Lead`,
		startAt: new Date(`10/01/2016`),
		endAt: new Date(`07/01/2018`),
		company: {
			name: `HMS Sistemas de Información / ONCARE`,
			photo: HmsPhoto
		},
		responsibilities: [
			`Lead a team of 5 Software Engineers.`,
			`Testing, research, and development of new technologies (Git, Mobile, RIS & PACS)`,
			`Software requirements collection and priorities planning.`,
			`Supervise solution definitions and designs (Process Diagram, UML, Database, Activities).`,
			`Supervise and support in software development.`,
			`Bash scripts development to code refactoring and periodic processes.`,
			`Participation in recruitment processes`
		],
		achievements: [
			`I managed and developed a competitive advantage strategy which consists of change from selling the full medicine
			to selling it per gr/ml.`,
			`I managed and support the development of new business units like Analysis Laboratory, Ambulatory surgery,
			RIS & PACS.`,
			`I started the development of an IOS app for ambulatory surgery.`
		],
		technicalEnv: `Php, Html, CSS, Javascript, MySQL, Bash, AWS, React, Android w/ Kotlin, IOS w/ Swift, Git.`
	},
	{
		name: `Software Engineer`,
		startAt: new Date(`01/01/2015`),
		endAt: new Date(`10/01/2016`),
		company: {
			name: `HMS Sistemas de Información / ONCARE`,
			photo: HmsPhoto
		},
		responsibilities: [
			`Features and new modules development to the Oncology ERP (Custom software development).`,
			`Software requirements collection.`,
			`Solution definition, design and validation (Process Diagram, UML, Database, Activities).`,
			`Priorities management and activities schedule.`,
			`Bash scripts development to code refactoring and periodic processes.`
		],
		achievements: [
			`I developed an automated quote through a software process that connected doctors, nurses, and administrative
			considering: assignments, professional language of every position, convert from the active substance with dose
			to medicine marks, clinic processes, etc.`,
			`I applied relational database concepts and learned their importance in a real-world application with processes
			that go from quote to invoice.`,
			`I achieved the implementation of a metric called "continuous improvement" which consists of implementing an
			innovative feature every quarter to the project.`
		],
		technicalEnv: `Php, Html, CSS, Javascript, MySQL, Bash, AWS.`
	},
	{
		name: `Software Engineer`,
		startAt: new Date(`06/01/2014`),
		endAt: new Date(`01/01/2015`),
		company: {
			name: `Ingeniat`,
			photo: IngeniatPhoto
		},
		responsibilities: [
			`Bash scripts development to automate processes`,
			`Features development to the web platform`,
			`Testing and research of new technologies (Mobile)`,
			`Support, maintenance and bug fixes to the web platform.`
		],
		achievements: [
			`I developed an automation script for books uploading to the digital library, which consisted in convert a PDF into
			separate SVG files, each SVG file was cleaned with regular expressions, then the files were uploaded to AWS S3,
			creating a relation between book, pages and S3 links on MySQL.`,
			`I lost the fear of learning programming languages that I didn't know, increased my learning curve allowing me
			to take part in the research and development of new technologies.`
		],
		technicalEnv: `Php, Html, CSS, Javascript, Android w/ Java, MySQL, Bash, AWS.`
	}
];
