import type { NavigationItem } from './types';

export const navigationItems = [
  { name: 'About Me', section: '#about' },
  { name: 'Knowledge Areas', section: '#knowledge' },
  { name: 'Professional Experience', section: '#experience' },
  { name: 'Resume', href: '/resume', target: '_blank' },
] satisfies NavigationItem[];
