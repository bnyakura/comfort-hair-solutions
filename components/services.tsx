import { Reveal } from '@/components/reveal'
import { waLink } from '@/lib/site'
// import {
//   Scissors,
//   RefreshCw,
//   Paintbrush,
//   Sparkles,
//   Shirt,
//   Droplets,
//   MessageCircleMore,
//   ArrowUpRight,
// } from 'lucide-react'



import {
  Scissors01,
  RefreshCw01,
  Brush01,
  Speaker01,
  MessageChatCircle,
  ArrowUpRight,
  MagicWand01,
  Droplets01,
} from '@untitledui/icons'



const services = [
  {
    icon: Scissors01,
    name: 'Haircuts',
    desc: 'Professional fades, trims, beard shaping and styling tailored to you.',
  },
  {
    icon: RefreshCw01,
    name: 'Locs Maintenance',
    desc: 'Retwists, washing, moisturizing and clean, defined styling.',
  },
  {
    icon: Brush01,
    name: 'Hair Tint / Blonde',
    desc: 'Professional colouring and blonde treatments with a flawless finish.',
  },
  {
    icon: Speaker01,
    name: 'Instant Dreadlocks',
    desc: 'Instant dreadlock installation with a clean, natural finish.',
  },
  {
    icon: MagicWand01,
    name: 'Hair Braids',
    desc: 'Protective styles and premium braiding done with precision.',
  },
  {
    icon: Droplets01,
    name: 'Hair Care & Products',
    desc: 'Professional products for healthy hair and scalp maintenance.',
  },
  {
    icon: MessageChatCircle,
    name: 'Hair Consultation',
    desc: 'One-on-one consultations to find the best style and treatment.',
  },
]

export function Services() {
  return (
    <section id="services" className="relative bg-muted/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Our Services
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-balance sm:text-5xl">
            Premium grooming, your way
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            From sharp fades to flawless locs, every service is delivered with
            care and craftsmanship.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.06}>
              <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:gold-glow">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-secondary text-gold transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-heading text-xl font-semibold">{s.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
                <a
                  href={waLink(s.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition-colors hover:text-foreground"
                >
                  Book Now
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
