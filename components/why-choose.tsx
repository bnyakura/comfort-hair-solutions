import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { WhatsAppIcon } from '@/components/social-icons'
import { waLink } from '@/lib/site'



const reasons = [
  {
    image: '/images/6.jpeg',
    title: 'Mobile Barber Service',
    desc: 'We bring the full barbershop experience straight to your door anywhere in Cape Town.',
  },
  {
    image: '/images/7.jpeg',
    title: 'Professional Grooming',
    desc: 'Precision cuts, clean lines and meticulous detailing on every single appointment.',
  },
  {
    image: '/images/3.jpeg',
    title: 'Convenient Bookings',
    desc: 'Book in seconds on WhatsApp and choose a time that fits your schedule.',
  },
  {
    image: '/images/4.jpeg',
    title: 'Quality Products',
    desc: 'Only premium hair and grooming products for a healthy scalp and lasting finish.',
  },
  {
    image: '/images/5.jpeg',
    title: 'Experienced Barber',
    desc: 'Years of hands-on experience across cuts, locs, braids and colour treatments.',
  },
  {
    image: '/images/8.jpeg',
    title: 'Personal Consultation',
    desc: 'One-on-one advice to find the style and treatment that suits you best.',
  },
]

export function WhyChoose() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Why Choose Us
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-balance sm:text-5xl">
            The Comfort Hair Solution difference
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Premium grooming built around your time, your comfort and your style.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.07}>
              <div className="overflow-hidden rounded-2xl border border-border bg-card">
                <div className="relative h-56">
                  <Image
                    src={r.image}
                    alt={r.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-8">
                  <h3 className="font-heading text-xl font-semibold">
                    {r.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {r.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>



     <div className="relative mt-20 mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="font-heading text-4xl font-bold text-balance sm:text-6xl">
            Ready For A <span className="text-gradient-gold">Fresh Look?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted-foreground">
            Book your appointment in seconds and let Cape Town&apos;s premium
            mobile barber come to you.
          </p>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-8 py-4 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Book Your Appointment
          </a>
        </Reveal>
      </div>

    </section>
  )
}
