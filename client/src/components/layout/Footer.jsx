import { Link } from 'react-router-dom'
import { navLinks, serviceLinks, site, socialLinks } from '../../config/site.js'
import Container from '../ui/Container.jsx'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-ink-800 bg-ink-950 text-ink-400">
      <Container>
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-20">
          <div className="lg:col-span-4">
            <p className="font-display text-lg font-bold tracking-[0.16em] text-paper">{site.wordmark}</p>
            <p className="mt-1 font-display text-xs tracking-[0.2em] text-blue-300 uppercase">Developments</p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed">{site.description}</p>
            <p className="mt-6 font-display text-sm tracking-wide text-blue-300">{site.tagline}</p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display text-xs font-semibold tracking-[0.2em] text-paper uppercase">Company</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition-colors duration-200 hover:text-blue-300">
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
                  <Link to={link.to} className="transition-colors duration-200 hover:text-blue-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-xs font-semibold tracking-[0.2em] text-paper uppercase">Contact</h3>
            <address className="mt-5 space-y-3 text-sm not-italic">
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
              <ul className="mt-3 flex flex-wrap gap-2">
                {socialLinks.map((social) => (
                  <li
                    key={social.label}
                    title={`${social.label} — link to be added`}
                    className="rounded-sm border border-ink-800 px-3 py-1.5 text-xs text-ink-400"
                  >
                    {social.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-ink-800 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} {site.name}. All rights reserved.</p>
          <p>Placeholder contact and social details.</p>
        </div>
      </Container>
    </footer>
  )
}
