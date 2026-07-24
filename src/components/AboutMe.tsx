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
import { ChevronDown, ExternalLink, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';

function AboutMe() {
  return (
    <section
      id="about"
      className="py-16 px-4 max-w-4xl min-h-[calc(100vh-4rem)] mx-auto flex items-center"
    >
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-4 md:gap-y-4">
        {/* Identity */}
        <div className="md:col-span-3 md:row-start-1">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
            <Image
              src="/assets/images/me.webp"
              alt="Profile picture"
              width={120}
              height={120}
              className="h-24 w-24 flex-shrink-0 rounded-full object-cover sm:h-[120px] sm:w-[120px]"
              priority
            />
            <div className="min-w-0 space-y-3 sm:space-y-4">
              <h2 className="text-4xl font-bold text-foreground sm:text-5xl">
                Hi, I&apos;m {personalInfo.firstName} 👋
              </h2>
              <div className="text-lg font-medium text-muted-foreground">
                {personalInfo.role}
              </div>
              <div className="flex items-start gap-1.5 text-sm text-muted-foreground sm:items-center">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 sm:mt-0"
                  aria-hidden="true"
                />
                <span>
                  <a
                    href={personalInfo.locationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-dotted underline-offset-4 transition-colors hover:text-foreground"
                    aria-label={`View ${personalInfo.location} on Google Maps`}
                  >
                    {personalInfo.location}
                  </a>{' '}
                  · {personalInfo.availability}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <section
          aria-labelledby="contact-heading"
          className="space-y-4 md:col-start-4 md:row-start-1"
        >
          <h3
            id="contact-heading"
            className="mb-1 text-lg font-semibold text-foreground"
          >
            Contact
          </h3>
          <div className="flex flex-col items-start gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email me
            </a>

            <a
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              View Resume
            </a>

            <div className="flex gap-0.5">
              {networks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center rounded-full p-1.5 transition-all duration-200 hover:scale-110 hover:bg-accent"
                  aria-label={`Visit my ${social.name} profile`}
                >
                  <social.icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Bio */}
        <div className="space-y-4 text-foreground leading-relaxed md:col-span-3 md:row-start-2">
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

        {/* Tech Stack */}
        <section className="space-y-4 md:col-start-4 md:row-start-2 md:mt-4">
          <h3 className="mb-1 text-lg font-semibold text-foreground">
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
                  <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
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
