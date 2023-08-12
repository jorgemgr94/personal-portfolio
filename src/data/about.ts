import { toWords } from 'number-to-words';
import { technologies } from './technologies';
import { arrayToString } from '@/helpers/format';

const yearsOfExp = new Date().getFullYear() - 2014;
const yearsOfExpWords = toWords(yearsOfExp);

export const about = {
  firstParagraph: `With over ${yearsOfExpWords} years of experience in software development,
  working with companies of all sizes, I have established a strong foundation of skills
  and knowledge through hands-on experience building high quality software.`,

  secondParagraph: `I started my career as full-stack developer and spent seven years honing my skills.
  For the last two years, I've been fully dedicated to backend development learning about ${arrayToString(
    technologies.learning.map((t) => t.name)
  )}`,

  thirdParagraph: `As a team member, I place a high value on best practices, code consistency, and collaboration.
  I consider myself a fast learner, highly adaptable to changes, and always eager to learn.`
};
