import Container from '../../ui/Container.jsx'
import SectionHeading from '../../ui/SectionHeading.jsx'
import TestimonialCard from './TestimonialCard.jsx'
import { testimonials } from './testimonials.data.js'
import { useRevealOnScroll } from '../../../hooks/useRevealOnScroll.js'

export default function TestimonialsSection() {
  const [ref, revealed] = useRevealOnScroll()
  const reveal = revealed ? 'animate-rise' : 'opacity-0 translate-y-4'

  return (
    <section ref={ref} aria-labelledby="testimonials-heading" className="relative overflow-hidden bg-gradient-to-br from-paper via-ivory/40 to-paper py-16 sm:py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgb(37_99_235/0.04),transparent_70%)]"
      />
      <Container size="wide">
        <div className={reveal}>
          <SectionHeading
            id="testimonials-heading"
            eyebrow="Testimonials"
            title="What Our Clients Say"
            description="Hear from the property developers, business owners, and organizations we've partnered with to bring their visions to life."
          />
        </div>

        <div className="mt-12 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={testimonial.id}
              style={{ animationDelay: `${index * 90}ms` }}
              className={reveal}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
