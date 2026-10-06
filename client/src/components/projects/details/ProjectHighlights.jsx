import { CheckCircle2 } from 'lucide-react'

export default function ProjectHighlights({ highlights = [], revealClass = '' }) {
  if (!highlights || highlights.length === 0) return null

  return (
    <section
      aria-labelledby="project-highlights-heading"
      style={{ animationDelay: '100ms' }}
      className={`space-y-6 pt-4 ${revealClass}`}
    >
      <div>
        <p className="font-display text-xs font-semibold tracking-[0.22em] text-blue-700 uppercase">
          Engineering & Specifications
        </p>
        <h3
          id="project-highlights-heading"
          className="mt-3 font-display text-xl font-semibold text-ink-950 sm:text-2xl"
        >
          Key Project Highlights
        </h3>
      </div>

      <ul className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4">
        {highlights.map((highlight, index) => (
          <li
            key={index}
            className="flex items-start gap-3 rounded-lg border border-line bg-surface p-4 shadow-[0_1px_4px_rgb(0_0_0/0.03)] transition-colors duration-200 hover:border-blue-500/30"
          >
            <CheckCircle2
              className="mt-0.5 h-5 w-5 shrink-0 text-blue-600"
              strokeWidth={2}
              aria-hidden="true"
            />
            <span className="text-sm leading-relaxed text-ink-700">{highlight}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
