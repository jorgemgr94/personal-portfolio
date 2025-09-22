import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import ThemeToggler from '../ThemeTogglerV1';
import { navigationItems } from './constants';
import { NavigationItem } from './types';
import { handleNavigation } from './utils';

function MobileNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleNavClick = (item: NavigationItem) => {
    setMobileMenuOpen(false);
    handleNavigation(item, router);
  };

  return (
    <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <div className="md:hidden">
        <ThemeToggler />
      </div>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col space-y-4 mt-8">
          <div className="flex items-center space-x-2 px-4 pb-4 border-b">
            <Image
              src="/assets/images/me.jpg"
              alt="Logo"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-lg font-bold">Jorge García</span>
          </div>

          <nav className="flex flex-col px-4 space-y-4">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className="text-lg font-medium transition-colors hover:text-primary text-left"
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNavigation;
