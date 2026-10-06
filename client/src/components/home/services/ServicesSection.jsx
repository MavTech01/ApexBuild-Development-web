import Container from '@/components/ui/Container.jsx'
import SectionHeading from '@/components/ui/SectionHeading.jsx'
import ServicesGrid from './ServicesGrid.jsx'
import StickyContentWrapper from './StickyContentWrapper.jsx'
import { services } from './services.data.js'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll.js'
import { useStickyScrollProgress } from '@/hooks/useStickyScrollProgress.js'

/**
 * ServicesSection - Displays company services with sticky scroll behavior
 *
 * Desktop: Section is tall (300vh), content sticks while active effect
 * progresses through cards as user scrolls
 *
 * Mobile: Normal scroll behavior, no sticky
 */
export default function ServicesSection() {
  const [ref, revealed] = useRevealOnScroll()
  const { sectionRef, activeIndex } = useStickyScrollProgress(services.length, revealed)

  return (
    <section
      ref={(node) => {
        ref.current = node
        sectionRef.current = node
      }}
      aria-labelledby="services-heading"
      className="relative isolate bg-gradient-to-b from-paper via-ink-50 to-paper py-16 sm:py-20 lg:min-h-[300vh] lg:py-0"
    >
      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(50%_50%_at_50%_0%,rgb(37_99_235/0.08),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 hidden opacity-30 [background-image:linear-gradient(to_right,rgb(0_0_0/0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgb(0_0_0/0.02)_1px,transparent_1px)] [background-size:80px_80px] lg:block"
      />

      {/* Section Heading - NOT sticky, scrolls away normally */}
      <Container size="wide" className="pt-16 sm:pt-20 lg:pt-24">
        <div className={revealed ? 'animate-rise' : 'opacity-0 translate-y-4'}>
          <SectionHeading
            id="services-heading"
            eyebrow="What we do"
            title="Built Around Your Vision."
            description="From new construction to property development and renovation, we provide practical solutions designed around quality, efficiency and long-term value."
          />
        </div>
      </Container>

      {/* Sticky grid wrapper - ONLY the grid sticks */}
      <StickyContentWrapper>
        <Container size="wide">
          <ServicesGrid activeIndex={activeIndex} revealed={revealed} />
        </Container>
      </StickyContentWrapper>
    </section>
  )
}
