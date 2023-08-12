import { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

import { INavigationItem } from './type';

const routes: INavigationItem[] = [
  { name: 'About Me', href: '#about', current: true, target: '_self' },
  { name: 'Tech Stack', href: '#tech', current: false, target: '_self' },
  {
    name: 'Professional Exp.',
    href: '#experience',
    current: false,
    target: '_self'
  },
  { name: 'Social', href: '#social', current: false, target: '_self' },
  {
    name: (
      <>
        Resume <FaExternalLinkAlt className="inline ml-2" />
      </>
    ),
    href: '/resume',
    current: false,
    target: '_blank'
  }
];

export default function Navbar () {
  const [navigationItems, setNavigationItems] = useState(routes);

  const setCurrentItem = (currentItem: INavigationItem) => {
    const newNavigation = navigationItems.map((navigationItem) => {
      return {
        ...navigationItem,
        current: currentItem.name === navigationItem.name
      };
    });
    setNavigationItems([...newNavigation]);
    // scrollTo(currentItem.href);
  };

  return (
    <>
      <MobileNavbar
        navigationItems={navigationItems}
        setCurrentItem={setCurrentItem}
      />
      <DesktopNavbar
        navigationItems={navigationItems}
        setCurrentItem={setCurrentItem}
      />
    </>
  );
}
