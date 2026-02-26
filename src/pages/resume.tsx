import { Markdown } from '@/components/Markdown';
import { professionalExperiences } from '@/data/professional-experience';
import { projects } from '@/data/projects';
import { formatDateFromISO, formatDuration } from '@/helpers/format';
import Head from 'next/head';
import { FaEnvelope, FaGlobe } from 'react-icons/fa';

/**
 * Minimalist, Recruiter-Optimized Resume
 * Designed for ATS compatibility and high-density information clarity.
 */
function Resume() {
  const handlePrint = () => window.print();

  // Group skills locally to maintain the narrative without polluting shared data
  const skillsCategories: Record<string, string[]> = {
    'Cloud & Platform Engineering': [
      'GCP',
      'Kubernetes',
      'Docker',
      'Terraform',
      'CI/CD',
      'PostgreSQL',
      'Redis'
    ],
    'Backend & Systems Design': [
      'Node.js',
      'Python',
      'Go',
      'Design Patterns',
      'IoT Systems',
      'Microservices'
    ],
    'Frontend & Full-Stack Development': [
      'React',
      'TypeScript',
      'Next.js',
      'State Management',
      'API Design'
    ],
    'AI & Distributed Systems': [
      'Multi-Agent Orchestration',
      'RAG Pipelines',
      'LLM Infrastructure',
      'Event-Driven Systems',
      'Micro-Frontends',
      'Task Queues'
    ]
  };

  const categoryOrder = Object.keys(skillsCategories);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 antialiased">
      <Head>
        <title>Jorge García | Staff Software Engineer | Resume</title>
        <meta name="author" content="Jorge García" />
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
                Jorge García
              </h1>
              <h2 className="text-xl font-medium text-blue-600 mt-1">
                Staff Software Engineer
              </h2>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1.5 flex items-center gap-2">
                Systems Design <span>·</span> Applied AI Architecture
              </div>
            </div>

            <div className="grid grid-cols-1 text-sm gap-1 text-slate-600 text-right print:text-right">
              <div className="flex items-center justify-end gap-2">
                <a
                  href="mailto:jorgemgr94@gmail.com"
                  className="hover:text-blue-600"
                >
                  jorgemgr94@gmail.com
                </a>
                <FaEnvelope className="text-slate-300" />
              </div>
              <div className="flex items-center justify-end gap-2">
                <a
                  href="https://jorgemgr.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600"
                >
                  jorgemgr.com
                </a>
                <FaGlobe className="text-slate-300" />
              </div>
              <div className="flex flex-col items-end gap-1 text-xs font-medium mt-2">
                <a
                  href="https://linkedin.com/in/jorgemgr94"
                  className="hover:text-blue-600"
                >
                  linkedin.com/in/jorgemgr94
                </a>
                <a
                  href="https://github.com/jorgemgr94"
                  className="hover:text-blue-600"
                >
                  github.com/jorgemgr94
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
            className="text-[15px] leading-relaxed text-slate-700"
            content="**Staff Software Engineer** with 12+ years designing and scaling **resilient, large-scale platforms** across distributed systems and **production-grade AI-driven systems**. Proven track record delivering **zero-downtime platform migrations**, engineering **8× throughput improvements**, and operating high-scale systems across **IoT and enterprise platforms**, grounded in a pragmatic systems engineering approach."
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
                  {skillsCategories[category].join(', ')}
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
            {professionalExperiences.slice(0, 4).map((exp) => (
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
              .filter((p) => [1, 8].includes(p.id))
              .map((project) => (
                <div key={project.id}>
                  <h4 className="font-bold text-slate-900 mb-1">
                    {project.project.title}
                  </h4>
                  <p className="text-blue-600 font-bold text-[11px] uppercase tracking-wider mb-2">
                    {project.area}
                  </p>
                  <p className="text-slate-700 mb-3 leading-relaxed">
                    {project.project.description.charAt(0).toUpperCase() +
                      project.project.description.slice(1)}
                    .
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
            <strong className="text-slate-900">jorgemgr.com</strong>
          </p>
          <button
            onClick={handlePrint}
            className="mt-6 px-6 py-2.5 bg-slate-900 text-white text-[11px] font-bold uppercase tracking-widest rounded shadow-sm hover:bg-slate-800 transition-all active:scale-95 print:hidden"
          >
            Download Official CV (PDF)
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
          .print\:hidden {
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

export async function getServerSideProps() {
  return {
    props: { forcedTheme: 'light' }
  };
}
