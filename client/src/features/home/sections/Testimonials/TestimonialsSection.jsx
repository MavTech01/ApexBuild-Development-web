import { initials, testimonials } from '@/features/home/sections/Testimonials/testimonials.data.js'
import SplitHeading from '@/features/home/sections/shared/SplitHeading.jsx'
import Eyebrow from '@/features/home/sections/shared/Eyebrow.jsx'
import Container from '@/shared/ui/Container.jsx'

function TestimonialCard({ testimonial }) {
  return (
    <article className="relative flex w-[clamp(300px,82vw,130vh)] flex-none flex-col gap-5 rounded-[20px] bg-[linear-gradient(135deg,#07122b,#0b2a6b)] p-[clamp(16px,3vw,38px)] text-white even:bg-[linear-gradient(135deg,#2563eb,#1b3fa8)] max-[899px]:gap-3.5 max-[899px]:rounded-[16px] min-[900px]:w-[clamp(290px,32vw,440px)]">
      <span aria-hidden="true" className="block h-[0.35em] font-display text-[4.5rem] font-extrabold leading-[0.6] text-gold max-[899px]:text-[2.2rem]">
        &ldquo;
      </span>
      <span aria-label="5 out of 5 stars" className="absolute right-[30px] top-[30px] text-[0.9rem] tracking-[0.18em] text-gold max-[899px]:right-[18px] max-[899px]:top-[18px] max-[899px]:text-[0.72rem]">
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      <p className="flex-1 text-[clamp(1.05rem,1.4vw,1.2rem)] font-medium leading-[1.55] max-[899px]:text-[0.9rem] max-[899px]:leading-[1.5]">{testimonial.quote}</p>
      <div className="flex items-center gap-3.5 border-t border-white/[0.22] pt-5 max-[899px]:gap-2.5 max-[899px]:pt-4">
        <span aria-hidden="true" className="grid h-[46px] w-[46px] flex-none place-items-center rounded-full bg-white/15 font-display text-[0.9rem] font-bold max-[899px]:h-[38px] max-[899px]:w-[38px] max-[899px]:text-[0.8rem]">
          {initials(testimonial.name)}
        </span>
        <div>
          <b className="block font-display text-[1rem] font-semibold max-[899px]:text-[0.95rem]">{testimonial.name}</b>
          <span className="text-fog max-[899px]:text-[0.85rem]">{testimonial.role}</span>
        </div>
      </div>
    </article>
  )
}

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
