import Image from 'next/image'
import { WhatsAppIcon } from '@/components/social-icons'
import { Reveal } from '@/components/reveal'
import { waLink } from '@/lib/site'

export function CTA() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0">
        <Image
          src="/images/76.jpeg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
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
