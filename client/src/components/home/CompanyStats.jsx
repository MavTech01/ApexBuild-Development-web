import { useRevealOnScroll } from '../../hooks/useRevealOnScroll.js'
import Container from '../ui/Container.jsx'
import { companyStats } from '../../config/site.js'

const dividers = [
  '',
  'border-l border-line',
  'border-t border-line lg:border-t-0 lg:border-l',
  'border-t border-line lg:border-t-0 lg:border-l',
]

export default function CompanyStats() {
  const [ref, revealed] = useRevealOnScroll()

  return (
    <div ref={ref} className="mt-16 border-y border-line bg-surface sm:mt-20 lg:mt-28">
      <Container>
        <h3 className="sr-only">ApexBuild Developments in numbers</h3>
        <dl className="grid grid-cols-2 lg:grid-cols-4">
          {companyStats.map((stat, index) => (
            <div
              key={stat.label}
              style={{ animationDelay: `${index * 90}ms` }}
              className={`flex flex-col-reverse px-4 py-8 text-center sm:px-6 lg:py-12 lg:text-left ${dividers[index]} ${
                revealed ? 'animate-rise' : 'opacity-0 translate-y-4'
              }`}
            >
              <dt className="mt-2 text-sm text-ink-500">{stat.label}</dt>
              <dd className="font-display text-4xl font-semibold text-ink-950 sm:text-5xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </div>
  )
}
