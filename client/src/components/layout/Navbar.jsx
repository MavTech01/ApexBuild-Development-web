import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navLinks, site } from '../../config/site.js'
import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'

function Wordmark() {
  return (
    <Link to="/" className="group flex items-center gap-2.5" aria-label={`${site.name} — home`}>
      <span className="grid h-8 w-8 place-items-center bg-ink-950 font-display text-sm font-bold text-bronze-300 transition-colors duration-200 group-hover:bg-bronze-700">
        AB
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-bold tracking-[0.16em] text-ink-950">{site.wordmark}</span>
        <span className="mt-0.5 text-[0.65rem] font-medium tracking-[0.2em] text-ink-500 uppercase">
          Developments
        </span>
      </span>
    </Link>
  )
}

function navClasses({ isActive }) {
  return `relative py-2 font-display text-sm font-semibold tracking-wide uppercase transition-colors duration-200 ease-standard ${
    isActive ? 'text-ink-950' : 'text-ink-500 hover:text-ink-950'
  }`
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const [lastPath, setLastPath] = useState(pathname)

  if (pathname !== lastPath) {
    setLastPath(pathname)
    setOpen(false)
  }

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md">
      <Container>
        <div className="flex h-18 items-center justify-between gap-6 py-4">
          <Wordmark />

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={navClasses} end={link.to === '/'}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button to="/contact">Start a Project</Button>
          </div>

          <button
            type="button"
            className="-mr-2 grid h-11 w-11 place-items-center text-ink-950 transition-colors duration-200 hover:text-bronze-700 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <X className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" focusable="false" />
            ) : (
              <Menu className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" focusable="false" />
            )}
          </button>
        </div>
      </Container>

      <div
        id="mobile-navigation"
        hidden={!open}
        className="border-t border-line bg-paper lg:hidden"
      >
        <Container>
          <nav aria-label="Mobile" className="flex flex-col py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `border-b border-line py-3 font-display text-base font-semibold tracking-wide uppercase transition-colors duration-200 last:border-0 ${
                    isActive ? 'text-bronze-700' : 'text-ink-700'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Button to="/contact" className="mt-5 w-full">
              Start a Project
            </Button>
          </nav>
        </Container>
      </div>
    </header>
  )
}
