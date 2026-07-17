import { Markdown } from '@/components/Markdown';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@/components/ui/hover-card';
import { aboutMe } from '@/data/about-me';
import { networks } from '@/data/networks';
import { personalInfo } from '@/data/personal-info';
import { technologiesExperienceByStatus } from '@/data/technologies';
import { TechnologyLearningStatus } from '@/data/types';
import { ExternalLink } from 'lucide-react';
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
              src="/assets/images/me.webp"
              alt="Profile picture"
              width={120}
              height={120}
              className="rounded-full object-cover flex-shrink-0"
              priority
            />
            <div className="space-y-4">
              <h2 className="text-5xl font-bold text-foreground">
                Hi, I&apos;m {personalInfo.firstName} 👋
              </h2>
              <div className="text-lg text-muted-foreground font-medium">
                {personalInfo.role}
              </div>
            </div>
          </div>

          <div className="text-foreground leading-relaxed space-y-4">
            <Markdown
              content={aboutMe}
              components={{
                ul: ({ children }) => (
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-4">
                    {children}
                  </ul>
                )
              }}
            />
          </div>

          <section className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Button asChild className="rounded-full shadow-md">
              <a href="/resume" target="_blank" rel="noopener noreferrer">
                View Resume{' '}
                <ExternalLink className="h-3.5 w-3.5 transition-colors" />
              </a>
            </Button>
            <div className="flex gap-2">
              {networks.map((social, index) => (
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
          <h3 className="text-lg font-semibold text-foreground mb-1">
            Current Stack
          </h3>
          <p className="text-sm text-muted-foreground">
            Technologies I&apos;m actively working with
          </p>
          <div className="flex flex-wrap gap-1.5">
            {Array.from(
              technologiesExperienceByStatus[TechnologyLearningStatus.Current]
            ).map(([name, tech]) => (
              <Badge key={name} variant="secondary" className="text-xs">
                <div className="w-5 h-5 relative">
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
              </Badge>
            ))}
          </div>

          {/* Used Technologies Desktop */}
          <section className="hidden md:block">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="link">
                  Technologies I&apos;ve worked with
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex flex-wrap gap-1.5">
                  {Array.from(
                    technologiesExperienceByStatus[
                      TechnologyLearningStatus.Used
                    ]
                  ).map(([name, tech]) => (
                    <Badge key={name} variant="secondary" className="text-xs">
                      <div className="w-5 h-5 relative">
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
                    </Badge>
                  ))}
                </div>
              </HoverCardContent>
            </HoverCard>
          </section>

          {/* Used Technologies Mobile */}
          <section className="block md:hidden space-y-4">
            <p className="text-sm text-muted-foreground">
              Technologies I&apos;ve worked with
            </p>
            <div className="flex flex-wrap gap-1.5">
              {Array.from(
                technologiesExperienceByStatus[TechnologyLearningStatus.Used]
              ).map(([name, tech]) => (
                <Badge key={name} variant="secondary" className="text-xs">
                  <div className="w-5 h-5 relative">
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
                </Badge>
              ))}
            </div>
          </section>
        </section>
      </div>
    </section>
  );
}

export default AboutMe;
