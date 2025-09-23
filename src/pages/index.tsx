import AboutMe from '@/components/AboutMe';
import Navbar from '@/components/NavbarV1';
import WorkExperience from '@/components/ProfessionalExperience/ProfessionalExperience';
import Projects from '@/components/Projects';
import SlideIn from '@/components/SlideIn';
import Head from 'next/head';

export default function Index() {
  return (
    <main className="font-light text-pretty">
      <Head>
        <title>Jorge García - Software Engineer</title>
      </Head>
      <Navbar />

      <SlideIn>
        <AboutMe />
      </SlideIn>

      <SlideIn>
        <WorkExperience />
      </SlideIn>
      <Projects />
    </main>
  );
}
