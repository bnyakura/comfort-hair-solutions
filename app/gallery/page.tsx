import { FullGallery } from '@/components/full-gallery'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function GalleryPage() {
  return (
    <>
    <main className="py-24 sm:py-32">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Gallery
          </span>

          <h1 className="mt-4 font-heading text-4xl font-bold text-balance sm:text-6xl">
            Our Work
          </h1>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            Explore our collection of fades, braids, locs, colour treatments,
            grooming services and client transformations.
          </p>
        </div>

        <FullGallery />
      </div>
    </main>
    <Footer />
    </>
    
  )
}