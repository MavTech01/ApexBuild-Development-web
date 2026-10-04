import Container from '../../ui/Container.jsx'
import Button from '../../ui/Button.jsx'
import { useRevealOnScroll } from '../../../hooks/useRevealOnScroll.js'

export default function CTASection() {
  const [ref, revealed] = useRevealOnScroll()
  const reveal = revealed ? 'animate-rise' : 'opacity-0 translate-y-4'

  return (
    // Light ivory — the deliberate inversion of the dark footer below it.
    <section ref={ref} aria-labelledby="cta-heading" className="relative isolate overflow-hidden bg-ivory text-ink-950">
      <Container>
        <div className="flex min-h-[24rem] flex-col justify-center px-1.5 py-20 sm:px-0 sm:py-24 lg:min-h-[32rem] lg:py-28">
          <div style={{ animationDelay: '0ms' }} className={reveal}>
            <p className="flex items-center gap-3 font-display text-xs font-semibold tracking-[0.18em] text-blue-700 uppercase">
              <span aria-hidden="true" className="h-px w-10 bg-blue-500" />
              Start Your Project
            </p>
          </div>

          <h2
            id="cta-heading"
            style={{ animationDelay: '90ms' }}
            className={`mt-6 max-w-[20ch] font-display text-[2rem] leading-[1.08] font-semibold text-balance text-ink-950 sm:text-[2.5rem] lg:text-3xl ${reveal}`}
          >
            Have a Project in Mind?
          </h2>

          <p
            style={{ animationDelay: '180ms' }}
            className={`mt-6 max-w-[36rem] text-base leading-relaxed text-ink-700 sm:text-lg ${reveal}`}
          >
            Let&rsquo;s turn your idea into a space built for quality, functionality and
            lasting value.
          </p>

          <div
            style={{ animationDelay: '270ms' }}
            className={`mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5 ${reveal}`}
          >
            <Button to="/contact" className="h-14 w-full sm:h-auto sm:w-auto sm:px-8">
              Start a Project
            </Button>
            <Button to="/projects" variant="outline" className="h-14 w-full sm:h-auto sm:w-auto sm:px-8">
              Explore Our Projects
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
