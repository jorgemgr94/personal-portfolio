import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { personalInfo } from './personal-info';

export const networks = [
  {
    name: 'GitHub',
    icon: FaGithub,
    url: personalInfo.github
  },
  {
    name: 'Linkedin',
    icon: FaLinkedinIn,
    url: personalInfo.linkedin
  }
];
