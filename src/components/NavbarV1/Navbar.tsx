import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <DesktopNavigation />
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
