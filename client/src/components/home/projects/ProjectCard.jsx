import { Link } from 'react-router-dom'
import { MapPin, ArrowRight } from 'lucide-react'

export default function ProjectCard({ project }) {
  const { title, category, location, year, href, image, featured = false } = project

  return (
    <article className="group relative flex h-full flex-col focus-within:ring-2 focus-within:ring-bronze-500 focus-within:shadow-lift">
      <div
        className={`relative flex-1 overflow-hidden bg-ink-900 ${
          featured ? 'aspect-4/3 lg:aspect-auto lg:min-h-[26rem]' : 'aspect-4/3 lg:aspect-auto lg:min-h-[11rem]'
        }`}
      >
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-standard group-hover:scale-[1.04]"
        />

        <span
          aria-hidden="true"
          className="absolute inset-0 bg-ink-950/0 transition-colors duration-500 ease-standard group-hover:bg-ink-950/15"
        />
        <span
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-bronze-500 transition-transform duration-500 ease-standard group-hover:scale-x-100"
        />
      </div>

      <div className={featured ? 'mt-7' : 'mt-5'}>
        <div className="flex items-center justify-between gap-4">
          <p className="font-display text-xs font-semibold tracking-[0.18em] text-bronze-700 uppercase">
            {category}
          </p>
          <p className="font-display text-xs text-ink-500 tabular-nums">{year}</p>
        </div>

        <h3 className={featured ? 'mt-3 text-2xl text-ink-950 lg:text-[1.75rem]' : 'mt-3 text-xl text-ink-950'}>
          <Link
            to={href}
            className="after:absolute after:inset-0 after:content-[''] transition-colors duration-300 ease-standard group-focus-within:text-bronze-700"
          >
            {title}
          </Link>
        </h3>

        <p className="mt-2 flex items-center gap-2 text-sm text-ink-500">
          <MapPin className="h-4 w-4 shrink-0 text-ink-400" strokeWidth={1.5} aria-hidden="true" focusable="false" />
          {location}
        </p>

        <p className="mt-4 inline-flex items-center gap-2 font-display text-xs font-semibold tracking-[0.18em] text-ink-700 uppercase">
          View Project
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 ease-standard group-hover:translate-x-1"
            strokeWidth={1.5}
            aria-hidden="true"
            focusable="false"
          />
        </p>
      </div>
    </article>
  )
}