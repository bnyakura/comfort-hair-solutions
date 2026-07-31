'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'motion/react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'


const skipped = [1,2,8,14, 17, 21,22,23,29,30,31,34,39,40,41,42,43,49,51,54,55,58,61,65,66,67,73,79,83,85,86,88,93, 94, 95, 96, 97,98, 100] // Images that don't exist or are not to be displayed

const images = Array.from({ length: 100 }, (_, i) => i + 1)
  .filter((num) => !skipped.includes(num))
  .map((num) => ({
    src: `/images/${num}.jpeg`,
    alt: `Hair styling ${num}`,
  }))

export function FullGallery() {
  const [active, setActive] = useState<number | null>(null)

  const close = useCallback(() => setActive(null), [])

  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % images.length)),
    [],
  )

  const prev = useCallback(
    () =>
      setActive((i) =>
        i === null ? i : (i - 1 + images.length) % images.length,
      ),
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
    <>
      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {images.map((img, index) => (
          <button
            key={img.src}
            onClick={() => setActive(index)}
            className="group relative aspect-square overflow-hidden rounded-2xl border border-border"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/30" />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 p-4"
          >
            <button
              onClick={close}
              className="absolute right-4 top-4 rounded-full border border-border p-2"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                prev()
              }}
              className="absolute left-4 rounded-full border border-border p-2 sm:left-8"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative h-[80vh] w-full max-w-6xl overflow-hidden rounded-2xl"
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
              onClick={(e) => {
                e.stopPropagation()
                next()
              }}
              className="absolute right-4 rounded-full border border-border p-2 sm:right-8"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}