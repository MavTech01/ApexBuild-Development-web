import Container from '../../ui/Container.jsx'
import SectionHeading from '../../ui/SectionHeading.jsx'
import BenefitItem from './BenefitItem.jsx'
import { benefits } from './benefits.data.js'
import { useRevealOnScroll } from '../../../hooks/useRevealOnScroll.js'

export default function WhyChooseUsSection() {
  const [ref, revealed] = useRevealOnScroll()
  const reveal = revealed ? 'animate-rise' : 'opacity-0 translate-y-4'

  return (
    <section ref={ref} aria-labelledby="why-choose-us-heading" className="bg-surface py-12 sm:py-14 lg:py-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="max-w-2xl lg:col-span-5 lg:max-w-none">
            <div className={reveal}>
              <p className="flex items-center gap-3 font-display text-xs font-semibold tracking-[0.22em] text-bronze-700 uppercase">
                <span aria-hidden="true" className="h-px w-10 bg-bronze-500" />
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
