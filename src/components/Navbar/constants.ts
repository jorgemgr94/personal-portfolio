import type { NavigationItem } from './types';

export const navigationItems = [
  { name: 'About Me', section: '#about' },
  { name: 'Professional Experience', section: '#experience' },
  { name: 'Projects', section: '#projects' },
  { name: 'Resume', href: '/resume', target: '_blank' },
] satisfies NavigationItem[];
