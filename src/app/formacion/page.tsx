import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { GraduationCapIcon as GraduationCap } from "@phosphor-icons/react/dist/ssr";
import { credentialsData, profileData } from "@/lib/data";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CredentialCard } from "@/components/sections/formacion/CredentialCard";
import type { CredentialKind } from "@/types";

export const metadata: Metadata = pageMetadata({
  title: "Formación y certificaciones",
  description:
    "Programas, certificaciones y cursos de Frank Sebastián Mena: OEA, Harvard, Universidad de Antioquia, Universidad de Cartagena, UNESCO, ICON·S, SENA y UTCH.",
  path: "/formacion/",
});

const groups: { kind: CredentialKind; title: string; id: string }[] = [
  { kind: "Programa", title: "Programas", id: "programas" },
  { kind: "Certificación", title: "Certificaciones", id: "certificaciones" },
  { kind: "Curso", title: "Cursos", id: "cursos" },
];

export default function FormacionPage() {
  const degree = profileData.education[0];

  return (
    <>
      <section className="container-page pb-12 pt-12 sm:pb-16 sm:pt-20">
        <div className="animate-rise">
          <SectionHeading
            as="h1"
            eyebrow="Formación"
            title="Formación y certificaciones"
            subtitle="Programas, certificaciones y cursos que complementan mis estudios de Derecho."
          />
        </div>

        {/* Pregrado */}
        <Reveal delay={0.08} className="mt-12">
          <div className="flex flex-col gap-4 rounded-xl bg-surface p-6 sm:flex-row sm:items-center sm:gap-6 sm:p-8">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
              <GraduationCap aria-hidden="true" className="size-6" />
            </span>
            <div className="flex-1">
              <p className="text-sm text-mute">Pregrado · {degree.period}</p>
              <h2 className="text-2xl font-medium">{degree.title}</h2>
              <p className="text-body">{degree.organization}</p>
            </div>
          </div>
        </Reveal>
      </section>

      {groups.map(({ kind, title, id }) => {
        const items = credentialsData.filter((c) => c.kind === kind);
        if (items.length === 0) return null;
        return (
          <section key={kind} aria-labelledby={`${id}-title`} className="border-t border-line">
            <div className="container-page py-12 sm:py-16">
              <Reveal className="mb-8 flex items-baseline gap-3">
                <h2 id={`${id}-title`} className="text-2xl font-medium sm:text-3xl">
                  {title}
                </h2>
                <span className="text-sm text-mute">
                  {items.length}
                  <span className="sr-only"> {items.length === 1 ? "elemento" : "elementos"}</span>
                </span>
              </Reveal>
              <Stagger as="ul" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((credential) => (
                  <StaggerItem as="li" key={`${credential.issuer}-${credential.title}`}>
                    <CredentialCard credential={credential} />
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </section>
        );
      })}
    </>
  );
}
