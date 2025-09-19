'use client';

import * as React from 'react';
import Link from 'next/link';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import ThemeToggler from './ThemeToggler';

export function NavigationMenuComponent() {
  return (
    <NavigationMenu viewport={false}>
      <section className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-6">
            <button
              onClick={(e) => e.preventDefault()}
              className="flex items-center space-x-2 text-primary hover:text-primary/90 transition-colors cursor-pointer"
            >
              <div className="text-2xl">Some logo</div>
              <span className="hidden font-bold text-xl sm:inline-block">
                shadcn.io
              </span>
            </button>
          </div>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-3">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/docs">Docs</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
          <ThemeToggler />
        </div>
      </section>
    </NavigationMenu>
  );
}
