import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { WhyChoose } from "@/components/why-choose"
import { Services } from "@/components/services"
import { HowItWorks } from "@/components/how-it-works"
import { Gallery } from "@/components/gallery"
import { Testimonials } from "@/components/testimonials"
import { About } from "@/components/about"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
