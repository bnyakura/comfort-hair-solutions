'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, SOCIALS, waLink } from '@/lib/site'
import { TikTokIcon, SnapchatIcon, InstagramIcon, FacebookIcon, XIcon } from '@/components/social-icons'

const socialIcon = {
  Instagram: InstagramIcon,
  TikTok: TikTokIcon,
  Facebook: FacebookIcon,
  Snapchat: SnapchatIcon,
  X: XIcon,
} as const


export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-border py-2' : 'border-b border-transparent py-4'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-3" aria-label="Comfort Hair Solutions home">
          <Image
            src="/logo.jpeg"
            alt="Comfort Hair Solutions logo"
            width={52}
            height={52}
            className="h-11 w-11 rounded-md object-contain"
            priority
          />
          <span className="hidden font-heading text-base font-semibold leading-tight sm:block">
            Comfort Hair
            <span className="block text-xs font-normal uppercase tracking-[0.25em] text-gold">
              Solutions
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          {SOCIALS.map((s) => {
            const Icon = socialIcon[s.label as keyof typeof socialIcon]
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-muted-foreground transition-colors hover:text-gold"
              >
                <Icon className="h-5 w-5" />
              </a>
            )
          })}
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            Book Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-foreground lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="glass border-t border-border lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2 flex items-center gap-4 px-3">
              {SOCIALS.map((s) => {
                const Icon = socialIcon[s.label as keyof typeof socialIcon]
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="text-muted-foreground transition-colors hover:text-gold"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </li>
            <li className="mt-2">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
              >
                Book on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
