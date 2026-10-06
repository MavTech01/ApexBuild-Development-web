import { ArrowRight } from 'lucide-react'
import Button from '../../ui/Button.jsx'

export default function ProjectSidebar({ project }) {
  const { category, location, year, status, scope, client, area } = project

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
  )
}
