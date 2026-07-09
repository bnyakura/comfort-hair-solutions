import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { AboutPageContent } from '@/components/aboutPageContent'

export default function AboutPage() {
  return (
    <main className="bg-background">
      <Navbar />
      <AboutPageContent />
      <Footer />
    </main>
  )
}