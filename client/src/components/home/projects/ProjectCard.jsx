import { Link } from 'react-router-dom'
import { MapPin, ArrowRight } from 'lucide-react'
import ProjectCardMedia from './ProjectCardMedia.jsx'

export default function ProjectCard({ project }) {
  const { title, category, location, href, image } = project

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-line bg-surface shadow-[0_2px_6px_rgb(0_0_0/0.03)] transition-all duration-500 ease-out-premium hover:-translate-y-1.5 hover:border-blue-500/30 hover:shadow-[0_10px_24px_-4px_rgb(0_0_0/0.08),0_2px_6px_rgb(37_99_235/0.04)] focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-500/30 focus-within:ring-offset-4 focus-within:ring-offset-paper motion-reduce:hover:translate-y-0">
      {/* Card Media with translucent overlay & eye button for lightbox preview */}
      <ProjectCardMedia image={image} title={title} />

      {/* Card Body */}
      <div className="flex flex-1 flex-col justify-between px-5 pt-4 pb-4">
        <div>
          <span className="font-display text-[0.6875rem] font-semibold tracking-[0.12em] text-ink-500 uppercase transition-colors duration-500 ease-out-premium group-hover:text-blue-600">
            {category}
          </span>

          <h3 className="mt-2 text-[1.125rem] leading-[1.3] font-semibold text-balance text-ink-950">
            <Link
              to={href}
              className="after:absolute after:inset-0 after:content-[''] after:pointer-events-auto transition-colors duration-500 ease-out-premium group-hover:text-blue-700 focus-visible:outline-none"
            >
              {title}
            </Link>
          </h3>
        </div>

        {/* Card Footer: Location on the left, Arrow action button on the right */}
        <div className="mt-4 flex items-center justify-between gap-3 border-t border-line/60 pt-3 transition-colors duration-500 ease-out-premium group-hover:border-line">
          <p className="flex items-center gap-1.5 text-[0.8125rem] text-ink-500 transition-colors duration-500 ease-out-premium group-hover:text-ink-700">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-blue-500 transition-colors duration-500 ease-out-premium group-hover:text-blue-600" strokeWidth={2} aria-hidden="true" focusable="false" />
            <span className="truncate">{location}</span>
          </p>

          <span
            className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700 transition-all duration-500 ease-out-premium group-hover:bg-blue-600 group-hover:text-white group-hover:translate-x-0.5"
            aria-label={`View ${title}`}
          >
            <ArrowRight
              className="h-4 w-4 transition-transform duration-500 ease-out-premium group-hover:translate-x-0.5"
              strokeWidth={2.2}
              aria-hidden="true"
              focusable="false"
            />
          </span>
        </div>
      </div>
    </article>
  )
}
