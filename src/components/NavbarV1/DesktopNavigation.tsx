import { useRouter } from 'next/router';
import ThemeToggler from '@/components/ThemeTogglerV1';
import { NavigationItem } from './types';
import { handleNavigation } from './utils';
import { navigationItems } from './constants';

function DesktopNavigation() {
  const router = useRouter();

  const handleNavClick = (item: NavigationItem) => {
    handleNavigation(item, router);
  };

  return (
    <>
      {/* Left side */}
      <nav className="hidden md:flex items-center space-x-6">
        {navigationItems.map((item) => (
          <button
            key={item.name}
            onClick={() => handleNavClick(item)}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {item.name}
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
