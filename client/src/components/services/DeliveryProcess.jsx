import { Search, PenTool, HardHat, Award } from 'lucide-react'
import Container from '@/components/ui/Container.jsx'
import SectionHeading from '@/components/ui/SectionHeading.jsx'
import ProcessCard from '@/components/ui/ProcessCard.jsx'
import { deliveryProcess } from './servicesDetailed.data.js'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll.js'

const processIcons = [Search, PenTool, HardHat, Award]

export default function DeliveryProcess() {
  const [ref, revealed] = useRevealOnScroll()
  const reveal = revealed ? 'animate-rise' : 'opacity-0 translate-y-4'

  return (
    <section
      ref={ref}
      aria-labelledby="delivery-process-heading"
      className="relative isolate overflow-hidden bg-gradient-to-br from-ivory via-paper to-ivory py-16 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgb(37_99_235/0.04),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,rgb(37_99_235/0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgb(37_99_235/0.02)_1px,transparent_1px)] [background-size:60px_60px]"
      />

      <Container size="wide">
        <div className={`mx-auto max-w-3xl text-center ${reveal}`}>
          <SectionHeading
            id="delivery-process-heading"
            align="center"
            eyebrow="Our Execution Model"
            title="How We Deliver Your Project"
            description="A structured, transparent workflow designed to mitigate risk, optimize construction schedules, and guarantee exceptional craftsmanship."
          />
        </div>

        <div className={`mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7 ${reveal}`}>
          {deliveryProcess.map((item, index) => (
            <ProcessCard
              key={item.title}
              step={item.step}
              title={item.title}
              description={item.description}
              icon={processIcons[index] || HardHat}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
