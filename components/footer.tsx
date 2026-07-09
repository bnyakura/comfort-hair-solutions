import Image from 'next/image'
import { Phone, MapPin } from 'lucide-react'
import { NAV_LINKS, SOCIALS, PHONE_DISPLAY, PHONE_RAW, waLink } from '@/lib/site'
import { TikTokIcon, SnapchatIcon, WhatsAppIcon, InstagramIcon, FacebookIcon, XIcon } from '@/components/social-icons'

const socialIcon = {
  Instagram: InstagramIcon,
  TikTok: TikTokIcon,
  Facebook: FacebookIcon,
  Snapchat: SnapchatIcon,
  X: XIcon,
} as const

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.jpeg"
                alt="Comfort Hair Solutions logo"
                width={56}
                height={56}
                className="h-12 w-12 rounded-md object-contain"
              />
              <div>
                <div className="font-heading text-lg font-semibold">Comfort Hair</div>
                <div className="text-xs uppercase tracking-[0.25em] text-gold">Solutions</div>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Cape Town&apos;s premium mobile barber — professional grooming
              delivered to your home, office or preferred location.
            </p>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Book on WhatsApp
            </a>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
              Get In Touch
            </h3>
            <ul className="mt-5 space-y-4">
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0 text-gold" />
                Cape Town, South Africa
              </li>
              <li>
                <a
                  href={`tel:+${PHONE_RAW}`}
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-gold"
                >
                  <Phone className="h-4 w-4 shrink-0 text-gold" />
                  {PHONE_DISPLAY}
                </a>
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map((s) => {
                const Icon = socialIcon[s.label as keyof typeof socialIcon]
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-gold hover:text-gold"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Comfort Hair Solutions. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">Cape Town&apos;s Premium Mobile Barber</p>
        </div>
      </div>
    </footer>
  )
}
