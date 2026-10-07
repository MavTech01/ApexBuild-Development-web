import ProgressIndicator from './ProgressIndicator.jsx'
import ServiceCard from './ServiceCard.jsx'
import { services } from './services.data.js'

/**
 * ServicesGrid - Displays the grid of service cards with progress indicator
 * Separated for clean component structure
 */
export default function ServicesGrid({ activeIndex, _revealed }) {
  return (
    <div className="mt-12 grid gap-6 sm:mt-14 lg:grid-cols-[auto_1fr] lg:gap-12">
      {/* Progress Indicator - Only visible on desktop */}
      <ProgressIndicator activeIndex={activeIndex} total={services.length} />

      {/* Service Cards Grid - 2 columns on desktop */}
      <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
        {services.map((service, index) => (
          <div key={service.id}>
            <ServiceCard
              service={service}
              index={index}
              isActive={activeIndex === index}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
