import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import { pageMetadata } from "@/lib/seo";
import { CheckIcon as Check } from "@phosphor-icons/react/dist/ssr";
import { projectsData } from "@/lib/data";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { GitHubIcon } from "@/components/ui/SocialIcons";

export const metadata: Metadata = pageMetadata({
  title: "Proyectos",
  description:
    "Proyectos personales de Frank Sebastián Mena: este sitio web, construido con Next.js, React y TypeScript.",
  path: "/proyectos/",
});

export default function ProjectsPage() {
  return (
    <>
      <section className="container-page pb-12 pt-12 sm:pb-16 sm:pt-20">
        <div className="animate-rise">
          <SectionHeading
            as="h1"
            eyebrow="Proyectos"
            title="Proyectos"
            subtitle="Lo que construyo para unir el derecho con la tecnología."
          />
        </div>
      </section>

      {projectsData.map((project, index) => {
        const titleId = `project-${index}-title`;
        return (
          <section key={project.title} aria-labelledby={titleId} className="border-t border-line">
            <div className="container-page py-16 sm:py-20">
              <div className="animate-rise max-w-3xl" style={{ "--delay": "100ms" } as CSSProperties}>
                <Badge variant="accent">{project.status}</Badge>
                <h2 id={titleId} className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  {project.title}
                </h2>
                <p className="mt-4 text-lg text-body">{project.summary}</p>
              </div>

              {project.image && (
                <div
                  className="animate-rise mt-12 overflow-hidden rounded-3xl bg-surface"
                  style={{ "--delay": "200ms" } as CSSProperties}
                >
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    width={project.image.width}
                    height={project.image.height}
                    sizes="(min-width: 1152px) 1088px, 100vw"
                    // La primera imagen se ve al cargar: sin carga diferida
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchPriority={index === 0 ? "high" : "auto"}
                    className="h-auto w-full"
                  />
                </div>
              )}

              <div className="mt-12 grid gap-10 lg:grid-cols-3 lg:gap-12">
                <Reveal>
                  <h3 className="eyebrow mb-4">Problema</h3>
                  <p className="text-body">{project.problem}</p>
                </Reveal>

                <Reveal delay={0.06}>
                  <h3 className="eyebrow mb-4">Qué incluye</h3>
                  <Stagger as="ul" className="flex flex-col gap-3">
                    {project.highlights.map((item) => (
                      <StaggerItem as="li" key={item} className="flex gap-3 text-body">
                        <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-accent" />
                        {item}
                      </StaggerItem>
                    ))}
                  </Stagger>
                </Reveal>

                <Reveal delay={0.12}>
                  <h3 className="eyebrow mb-4">Stack</h3>
                  <ul className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <li key={tech}>
                        <Badge variant="outline">{tech}</Badge>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>

              {(project.repositoryUrl || project.liveUrl) && (
                <Reveal className="mt-12 flex flex-col gap-3 border-t border-line pt-8 sm:flex-row">
                  {project.liveUrl && (
                    <ButtonLink href={project.liveUrl} size="lg" arrow>
                      Ver el sitio
                    </ButtonLink>
                  )}
                  {project.repositoryUrl && (
                    <ButtonLink href={project.repositoryUrl} variant="secondary" size="lg">
                      <GitHubIcon size={18} />
                      Ver el repositorio
                    </ButtonLink>
                  )}
                </Reveal>
              )}
            </div>
          </section>
        );
      })}
    </>
  );
}
