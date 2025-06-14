import Image from 'next/image';
import { INavigationItem } from './type';

export interface IMobileNavbarProps {
  navigationItems: INavigationItem[];
  setCurrentItem: (currentItem: INavigationItem) => void;
}

function classNames (...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function DesktopNavbar ({
  navigationItems,
  setCurrentItem
}: IMobileNavbarProps) {
  return (
    <nav className="hidden bg-gray-100 fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 md:flex md:flex-col md:items-center md:justify-center md:h-screen md:p-2 md:basis-3/12 xl:basis-2/12 dark:bg-gray-700">
      <Image
        className="rounded-full shadow-xs w-32 h-32 mb-4"
        src="/assets/images/me.jpg"
        alt="user image"
        width={128}
        height={128}
      />
      <ul>
        {navigationItems.map((navigationItem, key) => (
          <li key={key} className="py-2">
            <a
              href={navigationItem.href}
              target={navigationItem.target}
              className={classNames(
                'block px-3 py-2 rounded-md text-base font-medium cursor-pointer text-gray-500', // base
                navigationItem.current
                  ? 'bg-white text-gray-800 dark:bg-gray-800 dark:text-white' // selected
                  : 'text-gray-700 dark:text-gray-300 dark:hover:text-white'
              )}
              onClick={() => {
                setCurrentItem(navigationItem);
              }}
              rel="noreferrer"
            >
              {navigationItem.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
