import ThemeToggler from '@/components/ThemeToggler';
import { useRouter } from 'next/router';
import { navigationItems } from './constants';
import { NavigationItem } from './types';
import { handleNavigation } from './utils';

function DesktopNavigation() {
  const router = useRouter();

  const handleNavClick = (item: NavigationItem) => {
    handleNavigation(item, router);
  };

  return (
    <>
      {/* Left side */}
      <nav className="hidden md:flex items-center space-x-8">
        {navigationItems.map((item) => (
          <button
            key={item.name}
            onClick={() => handleNavClick(item)}
            className="group relative flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary cursor-pointer py-2"
          >
            <span className="relative">
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </span>
          </button>
        ))}
      </nav>

      {/* Right side */}
      <div className="hidden md:flex items-center space-x-4">
        <ThemeToggler />
      </div>
    </>
  );
}

export default DesktopNavigation;
