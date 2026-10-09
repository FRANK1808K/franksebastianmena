import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PenNibIcon as PenLine } from "@phosphor-icons/react/dist/ssr";
import { blogPostsData } from "@/lib/data";
import { siteConfig } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";

const isEmpty = blogPostsData.length === 0;

export const metadata: Metadata = pageMetadata({
  title: "Blog",
  description:
    "Artículos de Frank Sebastián Mena sobre derecho, derechos humanos y tecnología.",
  path: "/blog/",
  // Sin artículos no hay nada que indexar.
  noIndex: isEmpty,
});

/**
 * Estado vacío mientras no haya artículos reales.
 * Al publicar el primero: añadirlo a blogPostsData y crear blog/[slug]/page.tsx
 * con generateStaticParams (obligatorio con output: "export").
 */
export default function BlogPage() {
  return (
    <section className="container-page pb-24 pt-12 sm:pb-24 sm:pt-20">
      <div className="animate-rise">
        <SectionHeading as="h1" eyebrow="Blog" title="Blog" />
      </div>

      <Reveal delay={0.08} className="mt-12">
        <div className="flex flex-col items-start gap-6 rounded-xl border border-dashed border-line-strong p-8 sm:p-12">
          <span className="flex size-12 items-center justify-center rounded-full bg-accent-soft text-accent">
            <PenLine aria-hidden="true" className="size-5" />
          </span>
          <div className="max-w-xl">
            <h2 className="text-2xl font-medium sm:text-3xl">Próximamente</h2>
            <p className="mt-3 text-lg text-body">
              Estoy preparando mi primer artículo. Mientras tanto, puedes conocer mi documento de investigación o
              seguirme en LinkedIn.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <ButtonLink href="/investigacion" arrow>
              Ver mi investigación
            </ButtonLink>
            <ButtonLink href={siteConfig.links.linkedin} variant="secondary">
              Ver mi LinkedIn
            </ButtonLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
