'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from '@/components/reveal'
import { NAV_LINKS, SOCIALS, waLink } from '@/lib/site'

export function AboutPageContent() {
  return (
    <>
      {/* ================= HERO ================= */}

      
        <section className="border-b border-border py-24 lg:py-32">
  <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-8">

    {/* Left Side */}
    <Reveal>
      <div className="max-w-xl">
        <span className="text-sm font-semibold uppercase tracking-[0.35em] text-gold">
          ABOUT COMFORT HAIR SOLUTIONS
        </span>

        <h1 className="mt-5 font-heading text-5xl font-bold uppercase leading-none md:text-6xl xl:text-7xl">
          MORE THAN A BARBER,
          <br />
          <span className="text-gold">
            A CRAFTSMAN.
          </span>
        </h1>

        <div className="mt-10 space-y-7 text-lg leading-9 text-muted-foreground">
          <p>
            With years of experience providing premium mobile barber services,
            Comfort Hair Solutions has built a reputation for precision,
            consistency and exceptional customer care.
          </p>

          <p>
            Every appointment is more than just a haircut—it's a personalised
            grooming experience delivered wherever you are, allowing you to
            enjoy professional barbering in complete comfort.
          </p>

          <p>
            From fades and beard trims to retwists and styling, every service
            reflects dedication, attention to detail and genuine passion for
            the craft.
          </p>
        </div>
      </div>
    </Reveal>

    {/* Right Side */}
    <Reveal delay={0.15}>
      <div className="mx-auto w-full max-w-lg">
        <div className="overflow-hidden rounded-2xl border-2 border-gold/30 bg-card">
          <Image
            src="/images/F1.jpeg"
            alt="Comfort Hair Solutions Barber"
            width={700}
            height={850}
            className="aspect-[4/5] w-full object-cover"
            priority
          />
        </div>
      </div>
    </Reveal>

  </div>
</section>



      {/* ================= SECOND STORY ================= */}

      <section className="py-28">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <Reveal>
      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-black">

        {/* Background Image */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-1/2">
          <Image
            src="/images/7.jpeg"
            alt="Comfort Hair Solutions"
            fill
            className="object-cover object-center"
          />

          {/* Dark fade into the image */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent lg:from-black lg:via-black/30 lg:to-transparent" />
        </div>

        <div className="relative z-10 grid min-h-[560px] items-center lg:grid-cols-2">

          <div className="px-8 py-20 sm:px-12 lg:px-16">
            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-gold">
              OUR PHILOSOPHY
            </span>

            <h2 className="mt-6 font-heading text-5xl font-bold uppercase leading-none text-white">
              REDEFINING THE
              <br />
              <span className="text-gold">
                ART OF GROOMING
              </span>
            </h2>

            <div className="mt-10 space-y-7 text-lg leading-9 text-white/80">
              <p>
                At Comfort Hair Solutions, grooming is more than a haircut.
                It's about confidence, professionalism and expressing your
                personal style.
              </p>

              <p>
                Every fade, beard trim and retwist reflects our commitment to
                quality craftsmanship, precision and consistency.
              </p>

              <p>
                We don't just provide a service—we create an experience that
                leaves every client looking sharp and feeling their absolute
                best.
              </p>
            </div>
          </div>

        </div>
      </div>
    </Reveal>
  </div>
</section>

      {/* ================= CTA ================= */}




      {/* <section className="pb-28">
  <div className="mx-auto max-w-5xl px-6 lg:px-8">

    <Reveal>
      <div className="relative overflow-hidden rounded-[2rem]">

        <Image
          src="/images/4.jpeg"
          alt=""
          width={1600}
          height={800}
          className="h-[360px] w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute inset-0 flex items-center justify-center">

          <div className="max-w-2xl px-8 text-center">

            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-gold">
              READY FOR YOUR
            </span>

            <h2 className="mt-4 font-heading text-5xl font-bold uppercase leading-none text-white">
              BEST LOOK YET?
            </h2>

            <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-white/80">
              Whether it's a fresh fade, beard grooming, retwist or complete
              transformation, we're ready to bring premium barbering to your
              doorstep.
            </p>

            <Link
              href="/booking"
              className="mt-10 inline-flex rounded-full bg-gold px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              Book Now
            </Link>

          </div>

        </div>

      </div>
    </Reveal>

  </div>
</section> */}









      <section className="relative overflow-hidden">
        <Image
          src="/images/99.jpeg"
          alt=""
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/75" />

        <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-32 text-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-gold">
              READY TO LOOK YOUR BEST?
            </span>

            <h2 className="mt-6 font-heading text-4xl font-bold text-white md:text-6xl">
              Experience Premium
              <span className="block text-gold">
                Mobile Barbering
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/80">
              Book your appointment today and enjoy professional grooming in the
              comfort of your home, office or preferred location anywhere in
              Cape Town.
            </p>

            <div className="mt-12">
              <Link
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-gold px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-gold/90"
              >
                Book Appointment
              </Link>
            </div>
          </Reveal>
        </div>
      </section> 
    </>
  )
}