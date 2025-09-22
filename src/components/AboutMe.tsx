import { Badge } from '@/components/ui/badge';
import { socialNetworks } from '@/data/socialNetworks';
import { technologies } from '@/data/technologies';
import { GeneralImages } from '@/data/types';
import Image from 'next/image';

function AboutMe() {
  return (
    <section
      id="about"
      className="py-16 px-4 max-w-4xl min-h-[calc(100vh-4rem)] mx-auto flex items-center"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
        {/* Bio section */}
        <section className="col-span-1 md:col-span-3 space-y-8">
          <div className="flex items-start gap-6">
            <Image
              src={GeneralImages.Profile}
              alt="Profile picture"
              width={120}
              height={120}
              className="rounded-full object-cover flex-shrink-0"
              priority
            />
            <div className="space-y-4">
              <h2 className="text-5xl font-bold text-foreground">
                Hi, I&apos;m Jorge 👋
              </h2>
              <div className="text-lg">
                Software Engineer with 11+ years experience. I love building
                scalable solutions and mentoring others.
              </div>
            </div>
          </div>

          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>
              With over eleven years of experience in software development,
              I&apos;ve worked with companies of all sizes, from startups to
              enterprises. This diverse journey has given me a comprehensive
              understanding of software engineering principles across different
              organizational contexts.
            </p>

            <p>
              I started my career as a full-stack developer, spending seven
              years building end-to-end solutions. Since 2021, I&apos;ve focused
              on backend development, diving deep into scalable architecture,
              distributed systems, and cloud-native technologies.
            </p>

            <p>
              I&apos;m passionate about clean code, collaborative development,
              and continuous learning. I thrive in environments that challenge
              me to grow and adapt, always eager to tackle new problems and
              contribute to meaningful projects.
            </p>
          </div>

          <section>
            <h3 className="text-lg font-semibold text-foreground">
              Let&apos;s Connect
            </h3>
            <div className="flex gap-2">
              {socialNetworks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center p-2 hover:scale-110 transition-all duration-200"
                  aria-label={`Visit my ${social.name} profile`}
                >
                  <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </section>
        </section>

        {/* Tech Stack */}
        <section className="col-span-1 md:col-span-1 space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-1">
              Current Stack
            </h3>
            <p className="text-sm text-muted-foreground">
              Technologies I&apos;m actively working with
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {technologies.current.map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                <div className="w-3 h-3 relative">
                  {tech.icon ? (
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      fill
                      className="object-contain"
                    />
                  ) : (
                    <div className="w-full h-full bg-muted rounded flex items-center justify-center">
                      <span className="text-xs font-medium text-muted-foreground">
                        {tech.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <span className="text-xs font-medium text-foreground">
                  {tech.name}
                </span>
                {tech.yearsOfExp && (
                  <span className="text-xs text-muted-foreground">
                    {tech.yearsOfExp}
                  </span>
                )}
              </Badge>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

export default AboutMe;
