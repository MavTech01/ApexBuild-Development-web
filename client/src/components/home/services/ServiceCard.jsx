import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ServiceIcon from './ServiceIcon.jsx'

export default function ServiceCard({ service, index }) {
  return (
    <article className="group relative flex h-full flex-col border border-line bg-white p-7 shadow-sm transition-[border-color,box-shadow,transform] duration-300 ease-standard hover:-translate-y-0.5 hover:border-blue-500/60 hover:shadow-[0_8px_30px_rgb(37_99_235/0.15)] focus-within:border-blue-500/60 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
          <ServiceIcon name={service.icon} />
        </span>
        <span
          aria-hidden="true"
          className="font-display text-xs font-semibold tracking-[0.2em] text-ink-400 tabular-nums"
        >
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <h3 className="mt-7 text-xl text-ink-950">
        <Link to={service.href} className="after:absolute after:inset-0 after:content-['']">
          {service.title}
        </Link>
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-ink-600">{service.description}</p>

      <span className="mt-auto inline-flex items-center gap-2 pt-7 font-display text-xs font-semibold tracking-[0.18em] text-blue-600 uppercase">
        Learn more
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 ease-standard group-hover:translate-x-1"
          strokeWidth={1.5}
          aria-hidden="true"
          focusable="false"
        />
      </span>
    </article>
  )
}
