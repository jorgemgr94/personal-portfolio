import { NextRouter } from 'next/router';
import type { NavigationItem, InternalLink, ExternalLink } from './types';

const isInternalLink = (item: NavigationItem): item is InternalLink => {
  return 'section' in item;
};

const isExternalLink = (item: NavigationItem): item is ExternalLink => {
  return 'href' in item;
};

export const handleNavigation = (item: NavigationItem, router: NextRouter) => {
  if (isInternalLink(item)) {
    // Handle internal sections (scroll to section)
    const element = document.querySelector(item.section);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - 40;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      console.warn(`Element with selector "${item.section}" not found`);
    }
  } else if (isExternalLink(item)) {
    // Handle external links
    if (item.href.startsWith('http')) {
      // External URL
      window.open(item.href, item.target || '_blank', 'noopener,noreferrer');
    } else {
      // Internal page navigation
      if (item.target === '_blank') {
        // Open internal page in new tab
        window.open(item.href, '_blank', 'noopener,noreferrer');
      } else if (router.pathname === item.href) {
        // If we're on the same page, scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        // Navigate to the new page
        router.push(item.href).catch(console.error);
      }
    }
  }
};
