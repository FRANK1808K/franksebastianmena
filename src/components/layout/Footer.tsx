import Link from 'next/link'
import { footerItems } from '@/config/navigation'
import { siteConfig } from '@/config/site'
import { Headline } from '@/components/ui/Headline'

const contactLinks = [
  { label: siteConfig.author.email, href: siteConfig.links.email },
  { label: `WhatsApp ${siteConfig.author.phoneDisplay}`, href: siteConfig.links.whatsapp },
  { label: 'LinkedIn', href: siteConfig.links.linkedin },
  { label: 'GitHub', href: siteConfig.links.github },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-page grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
        <div className="flex flex-col gap-3 sm:col-span-2 lg:col-span-1">
          <Link href="/" className="w-fit text-xl font-medium text-ink">
            {siteConfig.name}
          </Link>
          <Headline stacked text={siteConfig.author.headline} className="text-sm text-body" />
          <p className="text-sm text-mute">{siteConfig.author.location}</p>
        </div>

        <nav aria-label="Pie de página">
          <h2 className="mb-4 text-sm font-semibold text-ink">Secciones</h2>
          <ul className="flex flex-col gap-2">
            {footerItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-underline text-sm text-body hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 text-sm font-semibold text-ink">Contacto</h2>
          <ul className="flex flex-col gap-2">
            {contactLinks.map((link) => {
              const newTab = link.href.startsWith('http')
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="link-underline text-sm text-body hover:text-ink"
                    {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <p className="container-page py-6 text-xs text-mute">
          © {currentYear} {siteConfig.name}
        </p>
      </div>
    </footer>
  )
}

export default Footer
