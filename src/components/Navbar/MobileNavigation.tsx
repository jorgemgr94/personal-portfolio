import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';
import { ExternalLink, Menu } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import ThemeToggler from '../ThemeToggler';
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
          <div className="flex items-center space-x-3 px-4 pb-6 border-b">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-primary/20">
              <Image
                src="/assets/images/me.webp"
                alt="Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <SheetTitle className="text-lg font-bold leading-none">
                Jorge García
              </SheetTitle>
              <SheetDescription className="text-xs text-muted-foreground mt-1">
                Software Engineer
              </SheetDescription>
            </div>
          </div>

          <nav className="flex flex-col px-2 py-4 space-y-1">
            {navigationItems.map((item) => {
              const isExternal = 'href' in item && item.target === '_blank';

              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-lg font-medium transition-all duration-200 hover:bg-secondary/80 hover:text-primary active:scale-[0.98] cursor-pointer group text-left"
                >
                  <span className="relative">
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </span>
                  {isExternal && (
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNavigation;
