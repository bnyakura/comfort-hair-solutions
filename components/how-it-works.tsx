import { MessageCircle, ListChecks, MapPin } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const steps = [
  {
    icon: MessageCircle,
    step: '01',
    title: 'Contact Us',
    desc: 'Send us a quick message on WhatsApp and tell us what you need.',
  },
  {
    icon: ListChecks,
    step: '02',
    title: 'Choose Your Service',
    desc: 'Pick your service and a time that works best for your schedule.',
  },
  {
    icon: MapPin,
    step: '03',
    title: 'We Come To You',
    desc: 'Relax while we deliver a premium grooming experience at your location.',
  },
]

export function HowItWorks() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            How It Works
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-balance sm:text-5xl">
            Booking made effortless
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.1}>
              <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8">
                <span className="absolute -right-2 -top-4 font-heading text-7xl font-bold text-secondary">
                  {s.step}
                </span>
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="relative mt-6 font-heading text-xl font-semibold">{s.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
