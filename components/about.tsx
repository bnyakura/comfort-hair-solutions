import Image from 'next/image'
import { Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const highlights = [
  'Trusted mobile barber serving Cape Town',
  'A genuine passion for grooming and craft',
  'Meticulous attention to every detail',
  'Professional, reliable and punctual service',
  'Driven by complete customer satisfaction',
]

export function About() {
  return (
    <section id="about" className="relative  pt-4 sm:pt-2 mb-8 sm:mb-6">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border">
              <Image
                src="/images/99.jpeg"
                alt="Comfort Hair Solution professional barber"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 hidden rounded-2xl border border-gold/40 bg-card p-6 gold-glow sm:block">
              <div className="font-heading text-3xl font-bold text-gold">10+ yrs</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                Of expertise
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            About Us
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-balance sm:text-5xl">
            Grooming crafted around your comfort
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Comfort Hair Solution was built on a simple belief: premium grooming
            should come to you. As a dedicated mobile barber in Cape Town, we
            combine real passion for the craft with an obsession for detail — so
            every cut, retwist and style leaves you looking and feeling your best.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            From your living room to your office, we deliver a professional,
            personal experience that puts your satisfaction first, every time.
          </p>

          <ul className="mt-8 space-y-3">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm text-foreground">{h}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
