import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
import './globals.css'
import Script from 'next/script'


const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})

const siteUrl = 'https://comforthairsolutions.co.za'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Comfort Hair Solution | Cape Town\'s Premium Mobile Barber',
    template: '%s | Comfort Hair Solution',
  },
  description:
    'Professional mobile barber in Cape Town. Premium haircuts, fades, locs maintenance, braids, hair tints and grooming delivered to your home, office or preferred location. Book on WhatsApp.',
  keywords: [
    'mobile barber Cape Town',
    'barber Cape Town',
    'haircuts Cape Town',
    'locs maintenance',
    'dreadlocks Cape Town',
    'fades',
    'beard grooming',
    'mobile grooming',
    'Comfort Hair Solution',
  ],
  authors: [{ name: 'Comfort Hair Solution' }],
  creator: 'Comfort Hair Solution',
  generator: 'v0.app',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: siteUrl,
    siteName: 'Comfort Hair Solution',
    title: 'Comfort Hair Solution | Cape Town\'s Premium Mobile Barber',
    description:
      'Premium grooming delivered to your home, office or preferred location in Cape Town. Book your appointment on WhatsApp.',
    images: [{ url: '/hero-barber.png', width: 1200, height: 630, alt: 'Comfort Hair Solution mobile barber' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comfort Hair Solution | Cape Town\'s Premium Mobile Barber',
    description:
      'Premium grooming delivered to your home, office or preferred location in Cape Town. Book your appointment on WhatsApp.',
    images: ['/hero-barber.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#0b0b0b',
  colorScheme: 'dark',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HairSalon',
  name: 'Comfort Hair Solution',
  description:
    'Premium mobile barber service in Cape Town offering haircuts, fades, locs maintenance, braids, hair tints and grooming at your location.',
  image: `${siteUrl}/hero-barber.png`,
  url: siteUrl,
  telephone: '+27687578242',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Cape Town',
    addressRegion: 'Western Cape',
    addressCountry: 'ZA',
  },
  areaServed: 'Cape Town',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '08:00',
    closes: '20:00',
  },
  sameAs: [
    'https://instagram.com/comforthairsolutions',
    'https://tiktok.com/@comforthairsolutions',
    'https://snapchat.com/add/comforthairsolutions',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} bg-background`}
    >
      <body className="font-sans antialiased">




        <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-59DX919HVL"
            strategy="afterInteractive"
          />

          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-59DX919HVL');
            `}
          </Script>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />

        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
