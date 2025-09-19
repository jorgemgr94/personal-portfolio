import { NavigationMenuComponent } from './NagivationMenu';

export default function Header() {
  return (
    <div className="flex flex-col items-center justify-center bg-blue-700">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <NavigationMenuComponent />
        </div>
      </header>

      {/*
          <div className="flex gap-6 md:gap-10">Home</div>
          <div className="flex flex-1 items-center justify-end space-x-4">

          </div>
        </div>
      </header> */}
    </div>
  );
}
