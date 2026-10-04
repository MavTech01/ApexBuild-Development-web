import Container from '../../ui/Container.jsx'
import SectionHeading from '../../ui/SectionHeading.jsx'
import ServiceCard from './ServiceCard.jsx'
import { services } from './services.data.js'
import { useRevealOnScroll } from '../../../hooks/useRevealOnScroll.js'

export default function ServicesSection() {
  const [ref, revealed] = useRevealOnScroll()
  const reveal = revealed ? 'animate-rise' : 'opacity-0 translate-y-4'

  return (
    <section ref={ref} aria-labelledby="services-heading" className="relative isolate overflow-hidden bg-gradient-to-b from-paper via-ink-50 to-paper py-16 sm:py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(50%_50%_at_50%_0%,rgb(37_99_235/0.08),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 hidden opacity-30 [background-image:linear-gradient(to_right,rgb(0_0_0/0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgb(0_0_0/0.02)_1px,transparent_1px)] [background-size:80px_80px] lg:block"
      />
      <Container size="wide">
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
