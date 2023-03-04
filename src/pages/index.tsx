import Head from 'next/head';
import About from '@/components/About';
import Navbar from '@/components/Navbar';
import ThemeToggler from '@/components/ThemeToggler';
import Experience from '@/components/Experience';
import Social from '@/components/Social';

export default function Index() {
	return (
		<main className="flex flex-col md:flex-row">
			<Head>
				<title>Jorge García - Software Engineer</title>
			</Head>
			<ThemeToggler />
			<Navbar />
			<section className="basis-full dark:bg-gray-800 dark:text-white md:basis-9/12 md:ml-64 xl:basis-10/12">
				<About />
				<Experience />
				<Social />
			</section>
		</main>
	);
}
