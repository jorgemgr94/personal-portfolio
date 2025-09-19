

export default function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <main
      // transition:animate="fade"
      className="relative m-auto grid w-full max-w-6xl gap-2 overflow-hidden p-2 sm:gap-2 sm:p-4 md:grid-cols-2 md:gap-3 md:p-6 lg:grid-cols-12 lg:gap-4"
    >
      {children}
    </main>
  );
}
