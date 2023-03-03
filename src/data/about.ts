const yearsOfExperience = new Date().getFullYear() - 2014;

export enum AboutParagraph {
	First,
	Second,
	Third
}

export const AboutData = {
	[AboutParagraph.First]: `+${yearsOfExperience} years of experience working with small, mid, large companies
	as well as 3 startups (2 seeds, 1 series A).`,

	[AboutParagraph.Second]: `I started working as a full-stack developer for 4 years, then the next 2
	years I focused on backend development with JavaScript. Nowadays I'm
	learning about cloud development working with serverless apps, kubernetes,
	containerization, CI/CD, multi-region.`,

	[AboutParagraph.Third]: `I love and believe in teamwork, smart work, best practices,
	collaboration, continuous learning, home office, leadership, priority,
	order, people first, quickly adapt to change, new tech's.`
};
