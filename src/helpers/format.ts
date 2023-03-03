export function arrayToString(array: string[], separator = `, `): string {
	return array.join(separator) + `.`;
}

export const monthsNames = [
	{ name: `January`, abbreviation: `Jan` },
	{ name: `February`, abbreviation: `Feb` },
	{ name: `March`, abbreviation: `Mar` },
	{ name: `April`, abbreviation: `Apr` },
	{ name: `May`, abbreviation: `May` },
	{ name: `June`, abbreviation: `Jun` },
	{ name: `July`, abbreviation: `Jul` },
	{ name: `August`, abbreviation: `Aug` },
	{ name: `September`, abbreviation: `Sep` },
	{ name: `October`, abbreviation: `Oct` },
	{ name: `November`, abbreviation: `Nov` },
	{ name: `December`, abbreviation: `Dec` }
];

export function formatExperience(d1: Date, d2?: Date): string {
	const MONTHS_IN_YEAR = 12;
	const MONTHS_TO_YEAR = 3.8052e-10;
	if (d2 === undefined) d2 = new Date();

	const e = Math.floor((d2.getTime() - d1.getTime()) * MONTHS_TO_YEAR);
	if (e >= MONTHS_IN_YEAR) {
		const months = e - Math.floor(e / MONTHS_IN_YEAR) * MONTHS_IN_YEAR;
		return `${Math.floor(e / MONTHS_IN_YEAR)} year(s) ${months} month(s)`;
	} else {
		return `${e} month(s)`;
	}
}

export function formatDate(date?: Date) {
	if (date === undefined) return `Current`;
	return `${monthsNames[date.getMonth()].abbreviation} ${date.getFullYear()}`;
}
