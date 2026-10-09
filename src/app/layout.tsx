import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import MotionProvider from "@/components/providers/MotionProvider";
import { siteConfig } from "@/config/site";
import { jsonLdScript, pageMetadata, personJsonLd } from "@/lib/seo";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  ...pageMetadata({ description: siteConfig.description, path: "/" }),
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author.name, url: siteConfig.links.linkedin }],
  creator: siteConfig.author.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-scroll-behavior="smooth" className={geist.variable}>
      <body className="flex min-h-screen flex-col bg-canvas font-sans text-body antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(personJsonLd)} />
        <MotionProvider>
          <Header />
          <main id="main-content" className="flex-1 pt-20">
            {children}
          </main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
