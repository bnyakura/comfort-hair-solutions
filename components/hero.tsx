'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { WhatsAppIcon } from '@/components/social-icons'
import { waLink } from '@/lib/site'

const particles = [
  { left: '12%', top: '28%', size: 6, delay: 0 },
  { left: '82%', top: '22%', size: 4, delay: 1.2 },
  { left: '68%', top: '64%', size: 5, delay: 0.6 },
  { left: '24%', top: '72%', size: 3, delay: 1.8 },
  { left: '46%', top: '18%', size: 4, delay: 2.4 },
  { left: '90%', top: '52%', size: 5, delay: 0.3 },
  { left: '6%', top: '54%', size: 4, delay: 1.5 },
]

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/bg2.jpeg"
          alt="Professional barber giving a precise fade haircut"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>

      {particles.map((p, i) => (
        <span
          key={i}
          className="pointer-events-none absolute rounded-full bg-gold/70"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animation: `float-particle ${5 + i}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-28 pb-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-card/50 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold"
          >
            Cape Town · Mobile Barber
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-heading text-4xl font-bold leading-[1.05] text-balance sm:text-6xl lg:text-7xl"
          >
            <span className="text-gradient-gold">Crowning Confidence With Culture </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Redefining convenience and style with professional mobile grooming services. Enjoy barbershop-quality haircuts and grooming in the comfort of your chosen location, delivered with skill, professionalism, and attention to detail.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-7 py-4 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Book on WhatsApp
            </a>
            <a
              href="#services"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 px-7 py-4 text-sm font-semibold text-foreground transition-colors hover:bg-card"
            >
              View Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          
        </div>
      </div>
    </section>
  )
}
