import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { site } from '@/config/site.js'

export const phoneHref = `tel:${site.phone.replace(/[^+\d]/g, '')}`

// The four ways to reach us, kept as data so the markup stays DRY.
export const contactMethods = [
  { icon: Phone, label: 'Call us', value: site.phone, href: phoneHref },
  { icon: Mail, label: 'Email us', value: site.email, href: `mailto:${site.email}` },
  { icon: MapPin, label: 'Visit our office', value: site.address.join(', ') },
  {
    icon: Clock,
    label: 'Opening hours',
    value: 'Mon to Fri 8:00 AM to 5:00 PM',
    note: 'Sat 9:00 AM to 2:00 PM',
  },
]
