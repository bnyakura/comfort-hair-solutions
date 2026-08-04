import Image from 'next/image'
import { Star, Quote } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const testimonials = [
  {
    name: 'Sipho Mokoena',
    photo: '/client-1.png',
    rating: 5,
    review:
      'Best decision ever. The fade was crisp and he came right to my apartment in Sea Point. No more waiting in queues — this is the future of grooming.',
  },
  {
    name: 'Thabo Williams',
    photo: '/client-2.png',
    rating: 5,
    review:
      'My locs have never looked better. Super professional, on time, and the retwist held perfectly for weeks. Highly recommend Comfort Hair Solution.',
  },
  {
    name: 'David Petersen',
    photo: '/client-3.png',
    rating: 5,
    review:
      'Booked through WhatsApp in under a minute. Beard shape-up and cut were immaculate. Genuinely the most convenient premium barber in Cape Town.',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-muted/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Testimonials
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-balance sm:text-5xl">
            Loved by clients across Cape Town
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure className="relative h-full rounded-2xl border border-border bg-card p-8 transition-colors hover:border-gold">
                <Quote className="h-8 w-8 text-gold/40" />
                <div className="mt-4 flex gap-1" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{t.review}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <Image
                    src={t.photo}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">Verified client</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
