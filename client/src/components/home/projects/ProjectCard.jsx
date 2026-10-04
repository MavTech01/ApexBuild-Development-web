import { Link } from 'react-router-dom'
import { MapPin, ArrowRight } from 'lucide-react'

const label = 'font-display text-[0.625rem] font-semibold tracking-[0.12em] text-ink-500 uppercase'
const value = 'mt-1.5 text-[0.8125rem] text-ink-950'

export default function ProjectCard({ project, index = 0 }) {
  const { title, category, location, year, href, image } = project
  const number = String(index + 1).padStart(2, '0')

  return (
    <article className="group relative flex h-full flex-col rounded-[3px] border border-line bg-surface transition-[transform,border-color,box-shadow] duration-300 ease-standard hover:-translate-y-1 hover:border-blue-600 hover:shadow-blue-lift focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-4 focus-within:ring-offset-paper motion-reduce:hover:translate-y-0">
      {/* 1 — Image. Fixed 4:3, object-cover, identical for every project. */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-[3px] bg-ink-900">
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[350ms] ease-standard group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
        />
        <span className="absolute left-4 top-4 font-display text-[0.625rem] font-semibold tracking-[0.12em] text-paper uppercase tabular-nums [text-shadow:0_1px_3px_rgb(20_22_26/0.6)]">
          {number}
        </span>
      </div>

      {/* 2 — Metadata: CATEGORY left, YEAR right */}
      <dl className="grid grid-cols-2 border-b border-line">
        <div className="px-6 pt-5 pb-4">
          <dt className={label}>Category</dt>
          <dd className={value}>{category}</dd>
        </div>
        <div className="px-6 pt-5 pb-4 text-right">
          <dt className={label}>Year</dt>
          <dd className={`${value} tabular-nums`}>{year}</dd>
        </div>
      </dl>

      {/* 3 — Title + location. flex-1 keeps the action row aligned across cards. */}
      <div className="flex-1 px-6 pt-5 pb-6">
        <h3 className="text-[1.0625rem] leading-[1.25] font-semibold text-balance text-ink-950">
          <Link
            to={href}
            className="after:absolute after:inset-0 after:content-[''] transition-colors duration-300 ease-standard hover:text-blue-700 focus-visible:outline-none"
          >
            {title}
          </Link>
        </h3>
        <p className="mt-2.5 flex items-center gap-1.5 text-xs text-ink-500">
          <MapPin className="h-3.5 w-3.5 shrink-0 text-ink-400" strokeWidth={1.5} aria-hidden="true" focusable="false" />
          {location}
        </p>
      </div>

      {/* Action — refined text link, not a button */}
      <div className="flex items-center justify-end border-t border-line px-6 py-3.5 transition-colors duration-300 ease-standard group-hover:border-blue-600">
        <span className="flex items-center gap-1.5 font-display text-[0.625rem] font-semibold tracking-[0.12em] text-blue-700 uppercase">
          View Project
          <ArrowRight
            className="h-3.5 w-3.5 transition-transform duration-300 ease-standard group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0"
            strokeWidth={1.5}
            aria-hidden="true"
            focusable="false"
          />
        </span>
      </div>
    </article>
  )
}
