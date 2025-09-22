import AboutMe from '@/components/AboutMe';
import Navbar from '@/components/NavbarV1';
import WorkExperience from '@/components/ProfessionalExperience/ProfessionalExperience';
import Projects from '@/components/Projects';
import Head from 'next/head';

function V2() {
  return (
    <main className="font-light text-pretty">
      <Head>
        <title>Jorge García - Software Engineer</title>
      </Head>
      <Navbar />
      <AboutMe />
      <WorkExperience />
      <Projects />
    </main>
  );
}

export default V2;
