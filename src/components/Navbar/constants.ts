import type { NavigationItem } from './types';

export const navigationItems = [
  { name: 'About', section: '#about' },
  { name: 'Projects', section: '#projects' },
  { name: 'Experience', section: '#experience' },
  { name: 'Resume', href: '/resume', target: '_blank' }
] satisfies NavigationItem[];
