'use client'

import { useState } from 'react'
import { ChevronDown } from '@untitledui/icons'
import { Reveal } from '@/components/reveal'
import { PHONE_DISPLAY, waLink } from '@/lib/site'

type Faq = {
  question: string
  answer: React.ReactNode
}

const faqs: Faq[] = [
  {
    question: 'Which areas do you cover?',
    answer: (
      <p>
        We provide mobile barber services across Cape Town, including the City
        Bowl, Southern Suburbs, Northern Suburbs, Atlantic Seaboard, and
        surrounding areas. If you&apos;re unsure whether we travel to your
        location, simply get in touch and we&apos;ll be happy to confirm.
      </p>
    ),
  },
  {
    question: 'How do I book an appointment?',
    answer: (
      <div className="space-y-3">
        <p>
          Booking is quick and easy. Contact us by phone, WhatsApp, or email to
          schedule a time that suits you. We&apos;ll confirm your appointment and
          come to your home, office, or preferred location.
        </p>
        <p>
          <span className="font-semibold text-foreground">
            Phone &amp; WhatsApp:
          </span>{' '}
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
            {PHONE_DISPLAY}
          </a>
          <br />
          <span className="font-semibold text-foreground">Email:</span>{' '}
          <a
            href="mailto:info@comforthairsolutions.co.za"
            className="text-gold hover:underline"
          >
            info@comforthairsolutions.co.za
          </a>
        </p>
      </div>
    ),
  },
  {
    question: 'How much does a mobile haircut cost?',
    answer: (
      <p>
        Our pricing is transparent with no hidden fees. The final cost depends on
        the service you require and your location. Contact us for a personalised
        quote before booking.
      </p>
    ),
  },
  {
    question: 'What other services do you offer?',
    answer: (
      <div className="space-y-3">
        <p>In addition to professional haircuts, we also offer:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Haircuts</li>
          <li>Locs Maintenance</li>
          <li>Hair Tint / Blonde</li>
          <li>Instant Dreadlocks</li>
          <li>Hair Braids</li>
          <li>Hair Care &amp; Products</li>
        </ul>
      </div>
    ),
  },
  {
    question: 'What do I need to prepare before my appointment?',
    answer: (
      <p>
        Very little. We bring all the professional barbering equipment needed.
        All you need is a small, well-lit space and access to a power outlet.
        We&apos;ll take care of the rest, including cleaning up after your
        appointment.
      </p>
    ),
  },
  {
    question: 'Are your tools cleaned and sanitised?',
    answer: (
      <p>
        Absolutely. Your health and safety are our priority. All barbering tools
        are thoroughly cleaned and sanitised between every client, and we use
        fresh blades where required to maintain the highest hygiene standards.
      </p>
    ),
  },
]

export function Faqs() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faqs" className="relative bg-muted/40 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            FAQs
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-balance sm:text-5xl">
            Frequently asked questions
          </h2>
        </Reveal>

        <div className="mt-16 space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <Reveal key={faq.question} delay={i * 0.05}>
                <div className="overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-gold">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 p-6 text-left font-heading text-lg font-semibold"
                    >
                      <span className="text-balance">{faq.question}</span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </h3>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
