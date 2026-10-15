import { testimonials } from '@/features/home/sections/Testimonials/testimonials.data.js'
import TestimonialCard from '@/features/home/sections/Testimonials/TestimonialCard.jsx'
import SplitHeading from '@/features/home/components/SplitHeading.jsx'
import Eyebrow from '@/features/home/components/Eyebrow.jsx'
import Container from '@/shared/ui/Container.jsx'

/**
 * TestimonialsSection
 * An infinite, linear marquee of testimonial cards. The set is rendered twice
 * so the track can translate by -50% for a seamless loop. It pauses on hover,
 * focus or touch.
 */
export default function TestimonialsSection() {
  const set = testimonials.map((testimonial) => (
    <TestimonialCard key={testimonial.id} testimonial={testimonial} />
  ))

  const setClass = 'flex gap-4 pr-4 min-[900px]:gap-6 min-[900px]:pr-6'

  return (
    <section id="clients">
      <Container size="wide">
        <Eyebrow>Testimonials</Eyebrow>
        <SplitHeading text="What Our Clients" accent="Say." />
      </Container>

      <div
        role="region"
        aria-label="Client testimonials"
        className="mt-[clamp(48px,7vw,88px)] ml-[calc(50%_-_50vw)] mr-[calc(50%_-_50vw)] w-screen overflow-hidden"
      >
        <div
          className="flex w-max animate-[marquee-scroll_66s_linear_infinite] will-change-transform hover:[animation-play-state:paused] focus-within:[animation-play-state:paused] active:[animation-play-state:paused]"
          style={{ animationDuration: `${testimonials.length * 11}s` }}
        >
          <div className={setClass}>{set}</div>
          <div className={setClass} aria-hidden="true">{set}</div>
        </div>
      </div>
    </section>
  )
}
