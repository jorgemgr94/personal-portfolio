import Head from 'next/head';
import Image from 'next/image';
import { AiOutlineCalendar } from 'react-icons/ai';
import { FaGithub, FaGlobe, FaLinkedin } from 'react-icons/fa';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { professionalExperiences } from '@/data/professional-experience';
import { technologiesExperienceByStatus } from '@/data/technologies';
import {
  formatDateFromISO,
  formatDuration,
  formatMonthsToYears
} from '@/helpers/format';

function Resume2() {
  const handlePrint = () => window.print();

  // Get current technologies (most experienced) - reduced to 6
  const currentTechnologies = Array.from(
    technologiesExperienceByStatus.Current.entries()
  ).sort(([, a], [, b]) => b.monthsOfExperience - a.monthsOfExperience);

  // Filter to most recent experiences
  const recentExperiences = professionalExperiences.slice(0, 4);

  return (
    <>
      <Head>
        <title>Jorge García - Resume</title>
      </Head>
      <section className="shadow-md place-content-center text-sm w-[22cm] my-0 mx-auto p-3 print:shadow-none bg-white">
        {/* Print Button */}
        <Button
          onClick={handlePrint}
          className="fixed bottom-5 right-5 cursor-pointer flex flex-col items-center print:hidden"
          variant="ghost"
          size="sm"
        >
          <Image
            src="/assets/images/printer.png"
            alt="Printer"
            width={20}
            height={20}
          />
          <span className="text-xs mt-1 font-semibold">Print</span>
        </Button>

        {/* Header Section */}
        <section className="flex mb-3">
          <div className="flex flex-col items-center basis-3/12">
            <Image
              src="/assets/images/me.jpg"
              alt="user profile"
              width={100}
              height={100}
              className="rounded-full shadow-sm mb-2"
            />
            <div className="font-bold text-lg">Jorge García</div>
            <div className="text-gray-600 mb-2">Software Engineer</div>

            {/* Contact Links */}
            <div className="flex flex-col items-center space-y-1 mb-3">
              <a
                className="flex items-center text-sm text-gray-600 hover:text-gray-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                href="https://jorgemgr.com"
              >
                <FaGlobe className="mr-1" size={12} />
                jorgemgr.com
              </a>
              <a
                className="flex items-center text-sm text-gray-600 hover:text-gray-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:jorgemgr94@gmail.com"
              >
                jorgemgr94@gmail.com
              </a>
            </div>

            {/* Social Links */}
            <section className="flex items-center space-x-3">
              <a
                className="h-6 w-6 hover:opacity-70 transition-opacity"
                rel="noopener noreferrer"
                href="https://github.com/jorgemgr94"
                target="_blank"
              >
                <FaGithub size={20} />
              </a>
              <a
                className="h-6 w-6 hover:opacity-70 transition-opacity"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/jorgemgr94/"
                target="_blank"
              >
                <FaLinkedin size={20} />
              </a>
            </section>
          </div>

          {/* About Section */}
          <div className="basis-9/12 pl-4">
            <div className="font-bold text-base mb-3">About Me</div>
            <p className="text-gray-700 leading-relaxed text-sm mb-4">
              Passionate software engineer with over{' '}
              {new Date().getFullYear() - 2014} years of experience architecting
              and delivering scalable solutions across diverse industries.
              Expert in backend development with a strong foundation in
              distributed systems, cloud-native architectures, and modern DevOps
              practices. Proven track record of leading technical initiatives
              and mentoring teams while maintaining high code quality standards
              and fostering collaborative environments.
            </p>

            {/* Current Tech Stack */}
            <div className="mb-4">
              <div className="font-bold text-base mb-2">Current Tech Stack</div>
              <div className="flex flex-wrap gap-1.5">
                {currentTechnologies.map(([name, tech]) => (
                  <Badge key={name} variant="secondary" className="text-xs">
                    <div className="w-4 h-4 relative">
                      {tech.icon ? (
                        <Image
                          src={tech.icon}
                          alt={name}
                          fill
                          className="object-contain"
                        />
                      ) : (
                        <div className="w-full h-full bg-muted rounded flex items-center justify-center">
                          <span className="text-xs font-medium text-muted-foreground">
                            {name.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>
                    <span className="text-xs font-medium text-foreground">
                      {name}
                    </span>

                    <span className="text-xs text-muted-foreground">
                      {formatMonthsToYears(tech.monthsOfExperience)}
                    </span>
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Professional Experience Section */}
        <section>
          <div className="w-full font-bold text-base mb-2">
            Professional Experience
          </div>
          {recentExperiences.map((position) => (
            <section
              key={position.id}
              className="py-2 border-b border-gray-200 last:border-0"
            >
              {/* Position Header */}
              <section className="flex justify-between items-start mb-2">
                <section className="flex items-center">
                  <Image
                    className="mr-3 rounded"
                    alt={`${position.companyName} Logo`}
                    src={position.companyLogo}
                    height={32}
                    width={100}
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold text-gray-800">
                      {position.companyName}
                    </span>
                    <span className="font-medium text-gray-600">
                      {position.jobTitle}
                    </span>
                  </div>
                </section>
                <section className="flex flex-col items-end">
                  <div className="flex items-center text-sm text-gray-600">
                    <AiOutlineCalendar className="mr-1" size={14} />
                    <span className="font-medium">
                      {formatDateFromISO(position.startDate)} -{' '}
                      {position.endDate
                        ? formatDateFromISO(position.endDate)
                        : 'Current'}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">
                    {formatDuration(position.startDate, position.endDate)}
                  </span>
                </section>
              </section>

              {/* Achievements */}
              <section className="mb-2">
                <ul className="space-y-1">
                  {position.achievements.map((achievement, index) => (
                    <li
                      key={index}
                      className="flex items-start text-sm text-gray-700"
                    >
                      <span>🏅 {achievement}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </section>
          ))}
          <div className="mt-4 p-3 bg-gradient-to-r from-slate-50 to-gray-50 border-l-4 border-slate-300 rounded-r-md shadow-sm">
            <div className="text-xs text-slate-600">
              This resume shows a condensed view of recent positions. For
              complete professional experience details, visit{' '}
              <a
                href="/#experience"
                className="text-slate-800 underline hover:text-slate-900 transition-colors font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                jorgemgr.com/#experience
              </a>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Resume2;

export async function getServerSideProps() {
  return {
    props: { forcedTheme: 'light' }
  };
}
