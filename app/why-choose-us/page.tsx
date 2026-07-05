import { About } from '@/components/about'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { WhyChoose } from '@/components/why-choose'

export const metadata = {
  title: 'Why Choose Us | Comfort Hair Solutions',
  description:
    'Discover why Comfort Hair Solutions is Cape Town’s trusted mobile barber service.',
}

export default function WhyChooseUsPage() {
  return (
    <main className="relative">
        <Navbar />
        <WhyChoose />
        <About />
        <Footer />
    </main>
  )
}