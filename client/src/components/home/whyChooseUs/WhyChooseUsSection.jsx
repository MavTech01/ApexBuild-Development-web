import Container from '@/components/ui/Container.jsx'
import SectionHeading from '@/components/ui/SectionHeading.jsx'
import BenefitItem from './BenefitItem.jsx'
import WhyChooseUsBackground from './WhyChooseUsBackground.jsx'
import { benefits } from './benefits.data.js'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll.js'

export default function WhyChooseUsSection() {
  const [ref, revealed] = useRevealOnScroll()
  const reveal = revealed ? 'animate-rise' : 'opacity-0 translate-y-4'

  return (
    <section ref={ref} aria-labelledby="why-choose-us-heading" className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-blue-100/80 to-blue-50 py-16 shadow-[0_8px_24px_-8px_rgba(37,99,235,0.15)] sm:py-20 lg:py-24">
      <WhyChooseUsBackground />

      {/* Bottom fade overlay - smooth transition to next section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-blue-50/60"
      />

      <Container size="wide">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="max-w-2xl lg:col-span-5 lg:max-w-none">
            <div className={reveal}>
              <p className="flex items-center gap-3 font-display text-xs font-semibold tracking-[0.22em] text-blue-700 uppercase">
                <span aria-hidden="true" className="h-px w-10 bg-blue-500" />
                Why ApexBuild
              </p>

              <SectionHeading
                id="why-choose-us-heading"
                title="Built With Purpose. Delivered With Care."
                description="Every project is approached with attention to quality, clear communication and practical execution — from the first idea to final delivery."
                className="mt-6"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <ul className="sm:grid sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-1">
              {benefits.map((benefit, index) => (
                <li key={benefit.id}>
                  <div style={{ animationDelay: `${index * 80}ms` }} className={reveal}>
                    <BenefitItem benefit={benefit} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
