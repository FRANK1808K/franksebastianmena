import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[70vh] flex-col items-start justify-center pb-24 pt-12">
      <p className="eyebrow mb-4">Error 404</p>
      <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">Esta página no existe</h1>
      <p className="mt-4 max-w-xl text-lg text-body">
        Puede que el enlace esté mal escrito o que la página haya cambiado de lugar.
      </p>
      <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
        <ButtonLink href="/" size="lg" arrow>
          Ir al inicio
        </ButtonLink>
        <ButtonLink href="/contacto" variant="secondary" size="lg">
          Contacto
        </ButtonLink>
      </div>
    </section>
  );
}
