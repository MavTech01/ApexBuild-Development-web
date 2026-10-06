import { CheckCircle2, ArrowRight } from 'lucide-react'
import Button from '../../ui/Button.jsx'
import ProjectDetailsGallery from './ProjectDetailsGallery.jsx'
import { useRevealOnScroll } from '../../../hooks/useRevealOnScroll.js'

export default function ProjectDetailsContent({ project }) {
  const [ref, revealed] = useRevealOnScroll(0.15)
  const reveal = revealed ? 'animate-rise' : 'opacity-0 translate-y-4'

  const {
    description,
    highlights = [],
    category,
    location,
    year,
    status,
    scope,
    client,
    area,
    image,
    gallery,
  } = project

  const specs = [
    { label: 'Category', value: category },
    { label: 'Location', value: location },
    { label: 'Year Completed', value: year },
    status && { label: 'Project Status', value: status },
    scope && { label: 'Scope of Work', value: scope },
    client && { label: 'Client / Sector', value: client },
    area && { label: 'Gross Area', value: area },
  ].filter(Boolean)

  return (
    <div ref={ref} className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-16">
      {/* Main Content Area */}
      <div className="space-y-12 lg:col-span-8">
        {/* Gallery / Visual Showcase */}
        <ProjectDetailsGallery image={image} gallery={gallery} />

        {/* Project Description & Narrative */}
        <section aria-labelledby="project-overview-heading" className={`space-y-6 ${reveal}`}>
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

        {/* Key Highlights / Features */}
        {highlights && highlights.length > 0 && (
          <section
            aria-labelledby="project-highlights-heading"
            style={{ animationDelay: '100ms' }}
            className={`space-y-6 pt-4 ${reveal}`}
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
        )}
      </div>

      {/* Sidebar: Sticky Specifications & Project Card */}
      <aside className="lg:col-span-4">
        <div className="sticky top-28 space-y-6">
          <div className="overflow-hidden rounded-xl border border-line bg-surface p-6 shadow-sm sm:p-7">
            <h3 className="font-display text-lg font-semibold tracking-tight text-ink-950">
              Project Specifications
            </h3>
            <p className="mt-1 text-xs text-ink-500">
              Verified construction and development data.
            </p>

            <div className="mt-6 divide-y divide-line border-t border-line">
              {specs.map((spec) => (
                <div key={spec.label} className="py-3.5 first:pt-4 last:pb-1">
                  <dt className="text-xs font-medium text-ink-500 uppercase tracking-wider">
                    {spec.label}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-ink-900">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-line">
              <Button to="/contact" className="w-full">
                <span>Start a Project</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <p className="mt-3 text-center text-xs text-ink-500">
                Discuss custom development with our team
              </p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}
