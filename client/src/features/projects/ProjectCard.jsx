import { Link } from 'react-router-dom'
import { MapPin, ArrowRight } from 'lucide-react'
import ProjectCardMedia from '@/features/projects/ProjectCardMedia.jsx'

/**
 * ProjectCard
 * A single project in the projects grid: a self-contained card with its own
 * surface, a full-bleed image, and the category, title and location beneath.
 * The whole card links to the project; the image preview button sits above it.
 */
export default function ProjectCard({ project }) {
  const { title, category, location, href, image } = project

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_2px_10px_rgb(0_0_0/0.04)] transition-all duration-500 ease-out-premium hover:-translate-y-1.5 hover:border-blue-500/40 hover:shadow-[0_20px_45px_-18px_rgb(0_0_0/0.22)] focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-500/30">
      <ProjectCardMedia image={image} title={title} />

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <span className="font-display text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-blue-600">
          {category}
        </span>

        <h3 className="mt-2 font-display text-[1.15rem] font-bold leading-snug text-balance text-ink-950 transition-colors duration-300 group-hover:text-blue-700">
          <Link
            to={href}
            className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
          >
            {title}
          </Link>
        </h3>

        <div className="mt-auto flex items-center justify-between gap-3 pt-4">
          <p className="flex min-w-0 items-center gap-1.5 text-[0.8125rem] text-ink-500">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-blue-500" strokeWidth={2} aria-hidden="true" />
            <span className="truncate">{location}</span>
          </p>

          <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              strokeWidth={2}
              aria-hidden="true"
            />
          </span>
        </div>
      </div>
    </article>
  )
}