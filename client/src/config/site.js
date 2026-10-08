import heroImg from '@/assets/images/hero.png'
import ctaImg from '@/assets/images/cta.png'
import aboutImg from '@/assets/images/about.png'

export const site = {
  name: 'ApexBuild Developments',
  wordmark: 'APEXBUILD',
  tagline: 'Building Better. Creating Value.',
  description:
    'ApexBuild Developments is a construction and property development company delivering durable, well-designed buildings and developments.',
  email: 'info@apexbuilddevelopments.com',
  phone: '+1 (000) 000-0000',
  address: ['ApexBuild Developments', 'Lagos, Nigeria'],
}

export const heroImage = {
  src: heroImg,
  alt: 'Wide construction site with blue cranes and cement mixer',
  width: 960,
  height: 640,
}

export const ctaImage = {
  src: ctaImg,
  alt: 'Upward view of scaffolding and concrete structure',
  width: 960,
  height: 640,
}

export const aboutImage = {
  src: aboutImg,
  alt: 'Three construction workers reviewing blueprint on-site',
  width: 960,
  height: 640,
}

export const companyStats = [
  { value: '10+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Completed' },
  { value: '30+', label: 'Professionals' },
  { value: '8', label: 'Locations' },
]

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Team', to: '/team' },
  { label: 'Contact', to: '/contact' },
]

export const serviceLinks = [
  { label: 'Residential Construction', to: '/services#residential' },
  { label: 'Commercial Construction', to: '/services#commercial' },
  { label: 'Property Development', to: '/services#development' },
  { label: 'Renovation & Remodeling', to: '/services#renovation' },
]

export const socialLinks = [
  { label: 'LinkedIn' },
  { label: 'Instagram' },
  { label: 'Facebook' },
]
