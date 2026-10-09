'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navigationItems } from '@/config/navigation'
import { siteConfig } from '@/config/site'
import { cn, isActivePath } from '@/lib/utils'
import MobileMenu from './MobileMenu'

/** Isla flotante: píldora de vidrio separada del borde superior. */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const pathname = usePathname()

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
    toggleRef.current?.focus()
  }, [])

  // Al pasar a escritorio el menú móvil deja de tener sentido
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px)')
    const onChange = () => desktop.matches && setIsMenuOpen(false)
    desktop.addEventListener('change', onChange)
    return () => desktop.removeEventListener('change', onChange)
  }, [])

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-60 focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-canvas"
      >
        Ir al contenido principal
      </a>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4">
        <div className="pointer-events-auto mx-auto mt-6 flex w-max max-w-full items-center gap-6 rounded-full border border-line bg-white/70 py-2 pl-6 pr-2 backdrop-blur-xl lg:pr-6">
          <Link
            href="/"
            className="text-base font-semibold tracking-tight text-ink"
            onClick={() => setIsMenuOpen(false)}
          >
            {siteConfig.name}
          </Link>

          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {navigationItems.map((item) => {
                const active = isActivePath(pathname, item.href)
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? 'page' : undefined}
                      className={cn(
                        'link-underline py-1 text-sm font-medium transition-colors duration-500 ease-fluid',
                        active ? 'text-ink' : 'text-mute hover:text-ink',
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          <button
            ref={toggleRef}
            type="button"
            className="relative grid size-10 place-items-center rounded-full text-ink transition-colors duration-500 ease-fluid hover:bg-surface active:scale-[0.98] lg:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {/* Dos líneas que rotan y se cruzan en una X; nunca desaparecen */}
            <span
              aria-hidden="true"
              className={cn(
                'absolute h-0.5 w-5 rounded-full bg-current transition-transform duration-700 ease-fluid',
                isMenuOpen ? 'translate-y-0 rotate-45' : '-translate-y-1',
              )}
            />
            <span
              aria-hidden="true"
              className={cn(
                'absolute h-0.5 w-5 rounded-full bg-current transition-transform duration-700 ease-fluid',
                isMenuOpen ? 'translate-y-0 -rotate-45' : 'translate-y-1',
              )}
            />
          </button>
        </div>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  )
}
