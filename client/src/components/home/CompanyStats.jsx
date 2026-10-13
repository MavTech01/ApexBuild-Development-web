import { useRevealOnScroll } from '@/hooks/useRevealOnScroll.js'
import Container from '@/components/ui/Container.jsx'
import StatsBackground from '@/components/decorative/StatsBackground.jsx'
import StatsDecorations from '@/components/decorative/StatsDecorations.jsx'
import StatItem from './stats/StatItem.jsx'
import { companyStats } from '@/config/site.js'

/**
 * The shared company-stats card (blue gradient + animated counters).
 * By default it is wrapped in the site-wide `Container`; pass `contain={false}`
 * to drop it straight into a section that already controls its own width.
 */
export default function CompanyStats({ className = 'mt-24 sm:mt-28 lg:mt-32', contain = true }) {
  const [ref, revealed] = useRevealOnScroll()

  const card = (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 px-6 py-12 shadow-xl sm:px-10 sm:py-16 lg:px-12 lg:py-20">
      <StatsBackground />
      <StatsDecorations />

      <h3 className="sr-only">ApexBuild Developments in numbers</h3>
      <dl className="relative z-10 grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-10">
        {companyStats.map((stat, index) => (
          <StatItem key={stat.label} stat={stat} index={index} revealed={revealed} />
        ))}
      </dl>
    </div>
  )

  return (
    <div ref={ref} className={className}>
      {contain ? <Container size="wide">{card}</Container> : card}
    </div>
  )
}
