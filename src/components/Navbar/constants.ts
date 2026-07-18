import type { NavigationItem } from './types';

export const navigationItems = [
  { name: 'About', section: '#about' },
  { name: 'Experience', section: '#experience' },
  { name: 'Projects', section: '#projects' },
  { name: 'Resume', href: '/resume', target: '_blank' }
] satisfies NavigationItem[];
