import { MessageSquare, Phone, FileText } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { site } from '@/config/site.js'

// Format phone number for WhatsApp (remove spaces, keep + and digits)
const whatsappPhone = site.phone.replace(/\s/g, '')

export const quickConnectActions = [
  {
    id: 'whatsapp',
    label: 'WhatsApp Chat',
    description: 'Instant chat with a consultant',
    href: `https://wa.me/${whatsappPhone}?text=Hello%20ApexBuild%20Developments%2C%20I%20would%20like%20to%20discuss%20a%20construction%20project.`,
    isExternal: true,
    icon: FaWhatsapp,
    colorClass: 'bg-emerald-600 text-white hover:bg-emerald-700',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
  {
    id: 'call',
    label: 'Call Direct',
    description: site.phone,
    href: `tel:${site.phone.replace(/[^0-9+]/g, '')}`,
    isExternal: false,
    icon: Phone,
    colorClass: 'bg-blue-600 text-white hover:bg-blue-700',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
  },
  {
    id: 'enquiry',
    label: 'Project Enquiry',
    description: 'Submit detailed project specs',
    to: '/contact',
    isExternal: false,
    icon: FileText,
    colorClass: 'bg-ink-900 text-white hover:bg-ink-950',
    badgeColor: 'bg-ink-50 text-ink-800 border-ink-200',
  },
]
