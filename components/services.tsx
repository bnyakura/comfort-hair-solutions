import { Reveal } from '@/components/reveal'
import { waLink } from '@/lib/site'


import {
  ArrowUpRight,
} from '@untitledui/icons'



const services = [
  {
    image: '/images/26.jpeg',
    name: 'Haircuts',
    desc: 'Professional fades, trims, beard shaping and styling tailored to you.',
  },
  {
    image: '/images/3.jpeg',
    name: 'Locs Maintenance',
    desc: 'Retwists, washing, moisturizing and clean, defined styling.',
  },
  {
    image: '/images/73.jpeg',
    name: 'Hair Tint / Blonde',
    desc: 'Professional colouring and blonde treatments with a flawless finish.',
  },
  {
    image: '/images/55.jpeg',
    name: 'Instant Dreadlocks',
    desc: 'Instant dreadlock installation with a clean, natural finish.',
  },
  {
    image: '/images/20.jpeg',
    name: 'Hair Braids',
    desc: 'Protective styles and premium braiding done with precision.',
  },
  {
    image: '/images/66.jpeg',
    name: 'Hair Care & Products',
    desc: 'Professional products for healthy hair and scalp maintenance.',
  },
  {
    image: '/images/77.jpeg',
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

                {/* <div className="h-24 w-full overflow-hidden rounded-xl">
                  <img
                    src={s.image}
                    alt={s.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div> */}


                <div className="h-56 w-full overflow-hidden rounded-xl">
                  <img
                    src={s.image}
                    alt={s.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
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
