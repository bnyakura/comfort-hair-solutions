export const PHONE_DISPLAY = '+27 68 757 8242'
export const PHONE_RAW = '27687578242'

export const WHATSAPP_MESSAGE =
  "Hi Comfort Hair Solutions, I'd like to book an appointment."

export function waLink(service?: string) {
  const message = service
    ? `Hi Comfort Hair Solutions, I'd like to book a ${service} appointment.`
    : WHATSAPP_MESSAGE
  return `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(message)}`
}

// export const NAV_LINKS = [
//   { label: 'Home', href: '/' },
//   { label: 'Services', href: '#services' },
//   { label: 'Gallery', href: '#gallery' },
//   { label: 'Testimonials', href: '#testimonials' },
//   { label: 'Why Choose Us', href: '/why-choose-us' },
//   { label: 'Contact', href: '#contact' },
// ]

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'FAQs', href: '/#faqs' },
  { label: 'Why Choose Us', href: '/why-choose-us' },
  { label: 'Contact', href: '/#contact' },
]

export const SOCIALS = [
  { label: 'Instagram', href: 'https://instagram.com/comforthairsolutions' },
  { label: 'TikTok', href: 'https://tiktok.com/@comforthairsolutions' },
  { label: 'Snapchat', href: 'https://snapchat.com/add/comforthairsolutions' },
]
