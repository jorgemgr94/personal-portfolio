import AboutMe from '@/components/AboutMe';
import Navbar from '@/components/NavbarV1';
import WorkExperience from '@/components/ProfessionalExperience/ProfessionalExperience';
import Projects from '@/components/Projects';

function V2() {
  return (
    <main className="font-light text-pretty">
      <Navbar />
      <AboutMe />
      <WorkExperience />
      <Projects />
    </main>
  );
}

export default V2;
