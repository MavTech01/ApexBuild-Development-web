export default function ProjectOverview({ description, revealClass = '' }) {
  if (!description) return null

  return (
    <section aria-labelledby="project-overview-heading" className={`space-y-6 ${revealClass}`}>
      <div>
        <p className="font-display text-xs font-semibold tracking-[0.22em] text-blue-700 uppercase">
          Project Overview
        </p>
        <h2
          id="project-overview-heading"
          className="mt-3 font-display text-2xl font-semibold text-ink-950 sm:text-3xl"
        >
          Architectural Vision & Execution
        </h2>
      </div>

      <div className="prose prose-ink max-w-none">
        <p className="text-base leading-relaxed text-ink-700 sm:text-lg sm:leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  )
}
