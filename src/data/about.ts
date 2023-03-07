import { toWords } from 'number-to-words';
import { technologies } from './technologies';
import { arrayToString } from '@/helpers/format';

const yearsOfExp = new Date().getFullYear() - 2014;
const yearsOfExpWords = toWords(yearsOfExp);

export const about = {
	firstParagraph: `With over ${yearsOfExpWords} years of experience in software development,
  working with companies of all sizes including three startups, I have established a strong foundation of skills
  and knowledge through hands-on experience.`,
	secondParagraph: `I started my career as a full-stack developer and spent seven years honing my skills.
  For the past two years, I have been fully dedicated to backend development while also improving
  my skills in ${arrayToString(technologies.learning)}`,

	thirdParagraph: `As a member of a team, I place a high value on best practices, code consistency, and collaboration.
  I consider myself a fast learner, highly adaptable to changes, and always eager to learn new technologies and approaches.`
};
