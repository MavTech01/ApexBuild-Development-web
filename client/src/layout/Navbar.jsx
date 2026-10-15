import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Menu, X } from 'lucide-react'
import { navLinks } from '@/shared/config/site.js'
import Brand from '@/shared/ui/Brand.jsx'
import Button from '@/shared/ui/Button.jsx'

// One class set for both layouts: row + dividers on mobile, plain inline links
// on desktop (the padding, borders and chevron are switched off at min-[900px]).
const navLinkClass =
  'group flex items-center justify-between gap-3 text-base font-medium text-white transition-colors hover:text-gold max-[899px]:border-b max-[899px]:border-white/10 max-[899px]:py-4 max-[899px]:last:border-b-0 min-[900px]:block min-[900px]:text-sm'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Scroll detection for navbar background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll and close on Escape while the menu is open.
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

  // The header turns solid (and drops its shadow) whenever the menu is open so
  // it blends seamlessly into the dropdown panel below it.
  const solid = scrolled || open
  const showDivider = scrolled && !open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 text-white transition-all duration-300 ${
        showDivider ? 'border-b' : ''
      }`}
      style={{
        paddingTop: 'env(safe-area-inset-top, 0px)',
        background: solid ? 'var(--color-ink)' : 'transparent',
        boxShadow: showDivider ? '0 8px 30px rgba(7, 18, 43, 0.35)' : 'none',
        borderBottomColor: showDivider ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
      }}
    >
      <div className="flex items-center justify-between" style={{ height: '68px', padding: '0 var(--gutter)' }}>
        <Link to="/" className="flex items-center no-underline" aria-label="ApexBuild home" onClick={() => setOpen(false)}>
          <Brand logoClassName="h-[34px] w-[34px]" wordmarkClassName="text-[1.05rem]" />
        </Link>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-md border border-white/15 text-white transition-colors hover:bg-white/10 min-[900px]:hidden"
          aria-expanded={open}
          aria-controls="nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <nav
          id="nav"
          className={`absolute inset-x-0 top-full flex flex-col bg-ink px-[var(--page-pad)] pb-7 pt-2 shadow-[0_28px_60px_rgba(0,0,0,0.55)] transition-all duration-300 ease-out ${
            open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-3 opacity-0 pointer-events-none'
          } min-[900px]:visible min-[900px]:pointer-events-auto min-[900px]:static min-[900px]:inset-auto min-[900px]:flex-row min-[900px]:items-center min-[900px]:gap-8 min-[900px]:bg-transparent min-[900px]:p-0 min-[900px]:pb-0 min-[900px]:pt-0 min-[900px]:opacity-100 min-[900px]:shadow-none min-[900px]:translate-y-0`}
        >
          {navLinks.map((link, index) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`${navLinkClass} ${open ? 'animate-nav-item' : ''}`}
              style={open ? { animationDelay: `${80 + index * 50}ms` } : undefined}
            >
              <span>{link.label}</span>
              <ChevronRight className="h-5 w-5 text-white/40 transition-transform group-hover:translate-x-1 min-[900px]:hidden" />
            </Link>
          ))}
          <Button
            to="/contact"
            onClick={() => setOpen(false)}
            className={`mt-5 w-full min-[900px]:mt-0 min-[900px]:w-auto ${open ? 'animate-nav-item' : ''}`}
            style={open ? { animationDelay: `${80 + navLinks.length * 50}ms` } : undefined}
          >
            Start a project
          </Button>
        </nav>
      </div>
    </header>
  )
}
