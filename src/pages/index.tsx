import About from '@/components/About';
import Experience from '@/components/Experience';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Social from '@/components/Social';
import TechStack from '@/components/TechStack';
import ThemeToggler from '@/components/ThemeToggler';

export default function Index () {
  return (
    <main className="flex flex-col md:flex-row">
      <Head>
        <title>Jorge García - Software Engineer</title>
      </Head>
      <ThemeToggler />
      <Navbar />
      <section className="basis-full dark:bg-gray-800 dark:text-white md:basis-9/12 md:ml-64 xl:basis-10/12">
        <About />
        <TechStack />
        <Experience />
        <Social />
      </section>
    </main>
  );
}
