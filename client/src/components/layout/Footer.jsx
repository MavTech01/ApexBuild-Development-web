import { Link } from 'react-router-dom'
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'
import { navLinks, serviceLinks, site, socialLinks } from '@/config/site.js'
import Container from '@/components/ui/Container.jsx'
import Logo from '@/components/ui/Logo.jsx'

const year = new Date().getFullYear()

const socialIcons = {
  LinkedIn: FaLinkedin,
  Instagram: FaInstagram,
  Facebook: FaFacebook,
}

export default function Footer() {
  return (
    <footer className="border-t border-ink-800 bg-ink-950 text-ink-400">
      <Container size="wide">
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-20">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <Logo className="h-8 w-8 text-blue-400" />
              <div className="flex flex-col leading-none">
                <p className="font-display text-lg font-bold tracking-[0.16em] text-paper">{site.wordmark}</p>
                <p className="mt-1 font-display text-xs tracking-[0.2em] text-blue-300 uppercase">Developments</p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-400">{site.description}</p>
            <p className="mt-6 font-display text-sm font-semibold tracking-wide text-blue-300">{site.tagline}</p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display text-xs font-semibold tracking-[0.2em] text-paper uppercase">Company</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-ink-400 transition-colors duration-200 hover:text-blue-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-xs font-semibold tracking-[0.2em] text-paper uppercase">Services</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-ink-400 transition-colors duration-200 hover:text-blue-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-xs font-semibold tracking-[0.2em] text-paper uppercase">Contact</h3>
            <address className="mt-5 space-y-3 text-sm not-italic text-ink-400">
              <p>{site.address[0]}</p>
              <p>{site.address[1]}</p>
              <p>
                <a href={`mailto:${site.email}`} className="transition-colors duration-200 hover:text-blue-300">
                  {site.email}
                </a>
              </p>
              <p>
                <a href={`tel:${site.phone.replace(/[^+\d]/g, '')}`} className="transition-colors duration-200 hover:text-blue-300">
                  {site.phone}
                </a>
              </p>
            </address>

            <div className="mt-6">
              <h3 className="font-display text-xs font-semibold tracking-[0.2em] text-paper uppercase">Follow</h3>
              <ul className="mt-3 flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = socialIcons[social.label]
                  return (
                    <li key={social.label}>
                      <a
                        href="#"
                        title={social.label}
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-800 text-ink-400 transition-all duration-200 hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-300"
                        aria-label={social.label}
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-ink-800 py-6 text-xs text-ink-400 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} {site.name}. All rights reserved.</p>
          <p>Placeholder contact and social details.</p>
        </div>
      </Container>
    </footer>
  )
}
