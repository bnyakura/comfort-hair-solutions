export const PHONE_DISPLAY = '+27 68 757 8242'
export const PHONE_RAW = '27687578242'

export const WHATSAPP_MESSAGE =
  "Hi Comfort Hair Solution, I'd like to book an appointment."

export function waLink(service?: string) {
  const message = service
    ? `Hi Comfort Hair Solution, I'd like to book a ${service} appointment.`
    : WHATSAPP_MESSAGE
  return `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(message)}`
}



export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/#services' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'Why Choose Us', href: '/why-choose-us' },
  { label: 'Contact', href: '/#contact' },
]

// export const SOCIALS = [
//   { label: 'Instagram', href: 'https://instagram.com/comforthairsolutions' },
//   { label: 'TikTok', href: 'https://tiktok.com/@comforthairsolutions' },
//   { label: 'Snapchat', href: 'https://snapchat.com/add/comforthairsolutions' },
//   { label: 'Facebook', href: 'https://www.facebook.com/comforthairsolutions',},
// ]


export const SOCIALS = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/17dyAYFUJZ/?mibextid=wwXIfr',
  },
  {
    label: 'X',
    href: 'https://x.com/c_hairsolution?s=11&t=LzPlpA3HtOAaBXl0EvSWkw',
  },
  {
    label: 'Snapchat',
    href: 'https://www.snapchat.com/add/comfortcutz?share_id=w7G9FC59S0GdqkNUaqKvXw&locale=en_US@rg=ngzzzz',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/comforthairsolution?igsh=azY4enQ5d2F0ejhn&utm_source=qr',
  },
  {
    label: 'TikTok',
    href: 'https://vt.tiktok.com/ZSCTtsCSx/',
  },
]