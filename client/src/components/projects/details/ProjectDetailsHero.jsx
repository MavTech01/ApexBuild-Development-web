import { Link } from 'react-router-dom'
import { ArrowLeft, Calendar, MapPin, Building2, CheckCircle2 } from 'lucide-react'
import Container from '../../ui/Container.jsx'
import HeroBackground from '../HeroBackground.jsx'

export default function ProjectDetailsHero({ project }) {
  const { title, category, location, year, status } = project

  return (
    <header
      aria-labelledby="project-details-heading"
      className="relative isolate overflow-hidden bg-gradient-to-br from-ink-950 via-ink-900 to-ink-950 text-paper"
    >
      <HeroBackground />

      <Container size="wide">
        <div className="pt-12 pb-14 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-20">
          {/* Back navigation link */}
          <nav aria-label="Breadcrumb" className="animate-rise">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 font-display text-xs font-semibold tracking-[0.14em] text-ink-400 uppercase transition-colors duration-200 hover:text-blue-400 focus-visible:outline-none"
            >
              <ArrowLeft
                className="h-4 w-4 transition-transform duration-300 ease-out-premium group-hover:-translate-x-1"
                strokeWidth={2}
                aria-hidden="true"
              />
              Back to Projects
            </Link>
          </nav>

          <div className="mt-8 max-w-4xl">
            {/* Category eyebrow */}
            <div
              style={{ animationDelay: '60ms' }}
              className="animate-rise flex flex-wrap items-center gap-3"
            >
              <span className="inline-flex items-center gap-1.5 rounded-[4px] bg-blue-500/15 px-3 py-1 font-display text-xs font-semibold tracking-[0.14em] text-blue-300 uppercase ring-1 ring-blue-500/30">
                <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
                {category}
              </span>

              {status && (
                <span className="inline-flex items-center gap-1.5 rounded-[4px] bg-emerald-500/15 px-3 py-1 font-display text-xs font-semibold tracking-[0.14em] text-emerald-300 uppercase ring-1 ring-emerald-500/30">
                  <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                  {status}
                </span>
              )}
            </div>

            {/* Title */}
            <h1
              id="project-details-heading"
              style={{ animationDelay: '120ms' }}
              className="animate-rise mt-5 font-display text-3xl font-semibold tracking-tight text-balance text-paper sm:text-5xl lg:text-6xl"
            >
              {title}
            </h1>

            {/* Key Metadata bar */}
            <div
              style={{ animationDelay: '180ms' }}
              className="animate-rise mt-6 flex flex-wrap items-center gap-y-3 gap-x-6 text-sm text-ink-300 sm:text-base"
            >
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-400" aria-hidden="true" />
                <span>{location}</span>
              </div>

              <span className="hidden h-1 w-1 rounded-full bg-ink-600 sm:inline" aria-hidden="true" />

              <div className="flex items-center gap-2 tabular-nums">
                <Calendar className="h-4 w-4 text-blue-400" aria-hidden="true" />
                <span>Completion: {year}</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}
