import { Markdown } from '@/components/Markdown';
import { personalInfo, resumeConfig } from '@/data/personal-info';
import { professionalExperiences } from '@/data/professional-experience';
import { projects } from '@/data/projects';
import { displayUrl, formatDateFromISO, formatDuration } from '@/helpers/format';
import Head from 'next/head';
import { FaEnvelope, FaGlobe } from 'react-icons/fa';

/**
 * Minimalist, Recruiter-Optimized Resume
 * Designed for ATS compatibility and high-density information clarity.
 */
function Resume() {
  const handlePrint = () => window.print();

  const categoryOrder = Object.keys(resumeConfig.skillsCategories);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 antialiased">
      <Head>
        <title>{`${personalInfo.name} | ${personalInfo.role} | Resume`}</title>
        <meta name="author" content={personalInfo.name} />
        <meta name="keywords" content="Staff Software Engineer, Platform Engineering, Distributed Systems, Kubernetes, Go, Python, AI Architecture" />
        <meta name="description" content="Staff Software Engineer with 12+ years in distributed systems, platform engineering, and AI-driven architectures." />
      </Head>

      {/* Main Resume Container - A4 Optimized */}
      <main className="max-w-[21cm] mx-auto p-8 md:p-16 print:p-0">
        {/* Header Section */}
        <header className="mb-10 text-center md:text-left print:text-left border-b border-slate-200 pb-8">
          <div className="flex flex-col md:flex-row print:flex-row justify-between items-baseline gap-4">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 uppercase">
                {personalInfo.name}
              </h1>
              <h2 className="text-xl font-medium text-blue-600 mt-1">
                {personalInfo.role}
              </h2>
            </div>

            <div className="grid grid-cols-1 text-sm gap-1 text-slate-600 text-right print:text-right">
              <div className="flex items-center justify-end gap-2">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-blue-600"
                >
                  {personalInfo.email}
                </a>
                <FaEnvelope className="text-slate-300" />
              </div>
              <div className="flex items-center justify-end gap-2">
                <a
                  href={personalInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600"
                >
                  {displayUrl(personalInfo.website)}
                </a>
                <FaGlobe className="text-slate-300" />
              </div>
              <div className="flex flex-col items-end gap-1 text-xs font-medium mt-2">
                <a
                  href={personalInfo.linkedin}
                  className="hover:text-blue-600"
                >
                  {displayUrl(personalInfo.linkedin)}
                </a>
                <a
                  href={personalInfo.github}
                  className="hover:text-blue-600"
                >
                  {displayUrl(personalInfo.github)}
                </a>
              </div>
            </div>
          </div>
        </header>

        <section className="mb-10">
          <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4 border-l-2 border-slate-100 pl-3">
            Summary
          </h3>
          <Markdown
            content={personalInfo.summary}
          />
        </section>

        {/* Technical Skills */}
        <section className="mb-10">
          <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4 border-l-2 border-slate-100 pl-3">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 print:grid-cols-2 gap-8 text-[13px]">
            {categoryOrder.map((category) => (
              <div key={category}>
                <h4 className="font-bold text-slate-800 mb-2 underline underline-offset-4 decoration-slate-100">
                  {category}
                </h4>
                <p className="text-slate-600 leading-relaxed font-medium">
                  {resumeConfig.skillsCategories[category as keyof typeof resumeConfig.skillsCategories].join(', ')}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-10">
          <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] mb-6 border-l-2 border-slate-100 pl-3">
            Experience
          </h3>
          <div className="space-y-10">
            {professionalExperiences.filter((exp) => exp.showInResume).map((exp) => (
              <div key={exp.id} className="group">
                <div className="flex justify-between items-baseline mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {exp.jobTitle}
                    </h4>
                    <div className="text-slate-500 font-bold text-sm uppercase tracking-wide">
                      {exp.companyName}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-slate-700 text-sm">
                      {formatDateFromISO(exp.startDate)} —{' '}
                      {exp.endDate ? formatDateFromISO(exp.endDate) : 'Present'}
                    </div>
                    <div className="text-slate-400 italic text-[11px] font-medium">
                      {formatDuration(exp.startDate, exp.endDate)}
                    </div>
                  </div>
                </div>

                <ul className="list-disc ml-4 space-y-2 text-[14px] text-slate-700">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="leading-relaxed marker:text-blue-400"
                    >
                      <Markdown content={achievement} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Highlights (Projects as Case Studies) */}
        <section className="mb-10 border-t border-slate-100 pt-10">
          <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] mb-6 border-l-2 border-slate-100 pl-3">
            Technical Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-10 text-[14px]">
            {projects
              .filter((p) => p.showInResume)
              .map((project) => (
                <div key={project.id}>
                  <h4 className="font-bold text-slate-900 mb-1">
                    {project.project.title}
                  </h4>
                  <p className="text-blue-600 font-bold text-[11px] uppercase tracking-wider mb-2">
                    {project.area}
                  </p>
                  <p className="text-slate-700 mb-3 leading-relaxed">
                    {project.project.description}
                  </p>
                  <p className="text-[11px] text-slate-500 font-medium">
                    <strong>Tech:</strong> {project.topics.slice(0, 5).join(', ')}
                  </p>
                </div>
              ))}
          </div>
        </section>

        {/* Footer info for physical print */}
        <footer className="mt-20 pt-10 border-t border-slate-200 text-center">
          <p className="text-xs text-slate-500 font-medium">
            Detailed case studies, full professional history, and technical
            references available at{' '}
            <strong className="text-slate-900">
              {displayUrl(personalInfo.website)}
            </strong>
          </p>
          <button
            onClick={handlePrint}
            className="cursor-pointer mt-6 px-6 py-2.5 bg-slate-900 text-white text-[11px] font-bold uppercase tracking-widest rounded shadow-sm hover:bg-slate-800 transition-all active:scale-95 print:hidden"
          >
            Download CV
          </button>
        </footer>
      </main>

      <style jsx global>{`
        @media print {
          @page {
            margin: 1cm 1.5cm;
            size: A4;
          }
          html,
          body {
            font-size: 11pt;
            line-height: 1.35;
            background: white !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          main {
            max-width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          button,
          .print\\:hidden {
            display: none !important;
          }
          h1,
          h2,
          h3,
          h4 {
            page-break-after: avoid;
          }
          section {
            page-break-inside: avoid;
          }
          li {
            page-break-inside: avoid;
          }
        }
      `}</style>
    </div>
  );
}

export default Resume;

export async function getStaticProps() {
  return {
    props: { forcedTheme: 'light' }
  };
}
