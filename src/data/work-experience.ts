import type { WorkExperience } from './types';

const ingeniat = {
  positionName: 'Full-stack Engineer',
  startedAt: '2014-06-01',
  finishedAt: '2015-01-01',
  companyName: 'Ingeniat',
  companyPhoto: 'https://www.ingeniata.com/wp-content/uploads/2021/03/logo-ingeniata-1.png',
  responsibilities: [
    'Software development of front-end and back-end features.',
    'Code maintenance, bug fixes and improvements of front-end and back-end features.',
    'Automate processes with Bash scripts.',
    'Conduct research and testing of new technologies for the company (Mobile)'
  ],
  achievements: [
    `Automated book uploading to the digital library by creating a bash script that converted PDF files into separate SVG files,
    cleaned them using regular expressions, and uploaded them to AWS S3. The script also established relationships between books,
    pages, and S3 links in MySQL`,
    'Learned new programming languages and increased my ability to contribute in research and implementation of new technologies.'
  ],
  technologies: new Map([
    ['Php', 7],
    ['HTML', 7],
    ['CSS', 7],
    ['Javascript', 7],
    ['Android w/ Java', 3],
    ['MySQL', 7],
    ['Bash', 7],
    ['AWS', 7]
  ]),
}

export const professionalExperiences: WorkExperience[] = [
  ingeniat,
  ingeniat, ingeniat

]
