import { ShieldCheck, Compass, Eye, TrendingUp } from 'lucide-react'
import Container from '@/components/ui/Container.jsx'
import SectionHeading from '@/components/ui/SectionHeading.jsx'
import ProcessCard from '@/components/ui/ProcessCard.jsx'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll.js'

const approaches = [
  {
    step: '01',
    title: 'Quality',
    icon: ShieldCheck,
    description:
      'Meticulous structural engineering, premium material procurement, and multi-stage quality control checks at every phase of construction.',
  },
  {
    step: '02',
    title: 'Purpose',
    icon: Compass,
    description:
      'Every space plan, elevation, and structural layout is engineered with purpose—prioritizing natural illumination, airflow, and ergonomic living.',
  },
  {
    step: '03',
    title: 'Transparency',
    icon: Eye,
    description:
      'Uncompromising integrity with clear contracts, disciplined cost management, and frequent milestone reporting throughout the project lifecycle.',
  },
  {
    step: '04',
    title: 'Long-Term Value',
    icon: TrendingUp,
    description:
      'Durable construction assemblies and sustainable materials designed to minimize operational maintenance and maximize asset appreciation.',
  },
]

export default function OurApproach() {
  const [ref, revealed] = useRevealOnScroll()
  const reveal = revealed ? 'animate-rise' : 'opacity-0 translate-y-4'

  return (
    <section
      ref={ref}
      aria-labelledby="approach-heading"
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
            id="approach-heading"
            align="center"
            eyebrow="Our Methodology"
            title="A Disciplined Approach to Every Build"
            description="From initial ground-breaking to handover, our four guiding principles guarantee that every development meets exacting standards."
          />
        </div>

        <div className={`mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7 ${reveal}`}>
          {approaches.map((item, index) => (
            <ProcessCard
              key={item.title}
              step={item.step}
              title={item.title}
              description={item.description}
              icon={item.icon}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
