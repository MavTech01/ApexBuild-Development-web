import Container from '../../ui/Container.jsx'
import SectionHeading from '../../ui/SectionHeading.jsx'
import ServiceCard from './ServiceCard.jsx'
import { services } from './services.data.js'
import { useRevealOnScroll } from '../../../hooks/useRevealOnScroll.js'

export default function ServicesSection() {
  const [ref, revealed] = useRevealOnScroll()
  const reveal = revealed ? 'animate-rise' : 'opacity-0 translate-y-4'

  return (
    <section ref={ref} aria-labelledby="services-heading" className="bg-surface py-20 sm:py-24 lg:py-28">
      <Container>
        <div className={reveal}>
          <SectionHeading
            id="services-heading"
            eyebrow="What we do"
            title="Built Around Your Vision."
            description="From new construction to property development and renovation, we provide practical solutions designed around quality, efficiency and long-term value."
          />
        </div>

        <div className="mt-12 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:gap-8">
          {services.map((service, index) => (
            <div key={service.id} style={{ animationDelay: `${index * 90}ms` }} className={reveal}>
              <ServiceCard service={service} index={index} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
