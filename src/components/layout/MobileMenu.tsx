'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navigationItems } from '@/config/navigation'
import { siteConfig } from '@/config/site'
import { cn, isActivePath } from '@/lib/utils'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

/** Retrasos escalonados de cada enlace (clases literales para Tailwind). */
const STAGGER = ['delay-100', 'delay-150', 'delay-200', 'delay-250', 'delay-300', 'delay-350', 'delay-400', 'delay-450']

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname()
  const panelRef = useRef<HTMLDivElement>(null)

  // Escape para cerrar, bloqueo de scroll y foco en el primer enlace
  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeyDown)
    panelRef.current?.querySelector<HTMLAnchorElement>('a')?.focus()
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onClose])

  // Siempre en el DOM para animar también el cierre; `invisible` lo saca del foco
  const reveal = (index: number) =>
    cn(
      'transition-[opacity,transform] duration-700 ease-fluid',
      isOpen ? cn('translate-y-0 opacity-100', STAGGER[index]) : 'translate-y-12 opacity-0',
    )

  return (
    <div
      id="mobile-menu"
      ref={panelRef}
      aria-hidden={!isOpen}
      className={cn(
        'fixed inset-0 z-40 overflow-y-auto bg-white/80 backdrop-blur-3xl transition-[opacity,visibility] duration-700 ease-fluid lg:hidden',
        isOpen ? 'visible opacity-100' : 'pointer-events-none invisible opacity-0',
      )}
    >
      <nav aria-label="Principal (móvil)" className="container-page pb-12 pt-24">
        <ul className="flex flex-col gap-2">
          {navigationItems.map((item, index) => {
            const active = isActivePath(pathname, item.href)
            return (
              <li key={item.href} className="overflow-hidden">
                <Link
                  href={item.href}
                  onClick={onClose}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'block py-2 text-4xl font-semibold tracking-tight',
                    active ? 'text-accent' : 'text-ink',
                    reveal(index),
                  )}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className={cn('mt-12 flex flex-col gap-3 text-sm', reveal(navigationItems.length))}>
          <a href={siteConfig.links.email} className="link-underline w-fit text-body">
            {siteConfig.author.email}
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline w-fit text-body"
          >
            LinkedIn
          </a>
        </div>
      </nav>
    </div>
  )
}
