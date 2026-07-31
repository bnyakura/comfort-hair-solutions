'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'motion/react'
import { X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import Link from 'next/link'

const images = [
  { src: '/images/4.jpeg', alt: '', span: 'sm:row-span-2' },
  { src: '/images/18.jpeg', alt: '', span: '' },
  { src: '/images/25.jpeg', alt: '', span: '' },
  { src: '/images/10.jpeg', alt: '', span: 'sm:row-span-2' },
  { src: '/images/7.jpeg', alt: '', span: '' },
  { src: '/images/12.jpeg', alt: '', span: '' },
]

export function Gallery() {
  const [active, setActive] = useState<number | null>(null)

  const close = useCallback(() => setActive(null), [])
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % images.length)),
    [],
  )
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [],
  )

  useEffect(() => {
    if (active === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active, close, next, prev])

  return (
    <section id="gallery" className="relative  py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Gallery
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-balance sm:text-5xl">
            Fresh looks, lasting impressions
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            A glimpse of the craftsmanship our clients walk away with.
          </p>
        </Reveal>

        <div className="mt-16 grid auto-rows-[220px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {images.map((img, i) => (
            <Reveal
              key={img.src}
              delay={(i % 4) * 0.06}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl border border-border ${img.span}`}
            >
              <button
                type="button"
                onClick={() => setActive(i)}
                className="relative block h-full w-full"
                aria-label={`View ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute bottom-4 left-4 translate-y-2 text-sm font-medium text-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {img.alt}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-background/95 p-4"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close gallery"
              className="absolute right-4 top-4 rounded-full border border-border p-2 text-foreground transition-colors hover:text-gold"
            >
              <X className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                prev()
              }}
              aria-label="Previous image"
              className="absolute left-4 rounded-full border border-border p-2 text-foreground transition-colors hover:text-gold sm:left-8"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative h-[70vh] w-full max-w-4xl overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[active].src}
                alt={images[active].alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                next()
              }}
              aria-label="Next image"
              className="absolute right-4 rounded-full border border-border p-2 text-foreground transition-colors hover:text-gold sm:right-8"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>












      <div className="mt-12 flex justify-center">
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 rounded-full border border-gold px-6 py-3 text-sm font-semibold text-gold transition-all hover:bg-gold hover:text-background"
        >
          View Full Gallery
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>


    </section>
  )
}
