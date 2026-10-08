import { Link } from 'react-router-dom'
import { MapPin, ArrowRight } from 'lucide-react'

export default function ProjectCard({ project }) {
  const { title, category, location, href, image } = project

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-line bg-surface shadow-[0_2px_8px_rgb(0_0_0/0.04)] transition-[transform,border-color,box-shadow] duration-[400ms] ease-out-premium hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_8px_30px_rgb(37_99_235/0.15),0_2px_8px_rgb(37_99_235/0.08)] focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-500/30 focus-within:ring-offset-4 focus-within:ring-offset-paper motion-reduce:hover:translate-y-0">
      <div className="relative aspect-[16/9] overflow-hidden bg-ink-50">
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-all duration-[500ms] ease-out-premium group-hover:scale-105 motion-reduce:group-hover:scale-100"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between px-5 pt-4 pb-4">
        <div>
          <span className="font-display text-[0.6875rem] font-semibold tracking-[0.12em] text-ink-500 uppercase">
            {category}
          </span>

          <h3 className="mt-2 text-[1.125rem] leading-[1.3] font-semibold text-balance text-ink-950 transition-colors duration-300">
            <Link
              to={href}
              className="after:absolute after:inset-0 after:content-[''] transition-colors duration-300 ease-standard group-hover:text-blue-700 focus-visible:outline-none"
            >
              {title}
            </Link>
          </h3>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3 border-t border-line/60 pt-3">
          <p className="flex items-center gap-1.5 text-[0.8125rem] text-ink-500 transition-colors duration-300 group-hover:text-ink-600">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-blue-500 transition-colors duration-300 group-hover:text-blue-600" strokeWidth={2} aria-hidden="true" focusable="false" />
            <span className="truncate">{location}</span>
          </p>

          <span
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700 transition-all duration-300 ease-out-premium group-hover:bg-blue-600 group-hover:text-white group-hover:translate-x-0.5"
            aria-label={`View ${title}`}
          >
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 ease-out-premium group-hover:translate-x-0.5"
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
