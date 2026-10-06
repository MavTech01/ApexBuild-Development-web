import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll.js'

export default function ProjectsCTA() {
  const [ref, revealed] = useRevealOnScroll()
  const reveal = revealed ? 'animate-rise' : 'opacity-0 translate-y-4'

  return (
    <section ref={ref} aria-labelledby="projects-cta-heading" className="relative isolate overflow-hidden bg-gradient-to-br from-ivory via-paper to-ivory text-ink-950">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgb(37_99_235/0.06),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.4] [background-image:linear-gradient(to_right,rgb(37_99_235/0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgb(37_99_235/0.02)_1px,transparent_1px)] [background-size:60px_60px]"
      />
      <Container size="wide">
        <div className="py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <div style={{ animationDelay: '0ms' }} className={reveal}>
              <p className="flex items-center justify-center gap-3 font-display text-xs font-semibold tracking-[0.18em] text-blue-700 uppercase">
                <span aria-hidden="true" className="h-px w-10 bg-blue-500" />
                Start Your Project
                <span aria-hidden="true" className="h-px w-10 bg-blue-500" />
              </p>
            </div>

            <h2
              id="projects-cta-heading"
              style={{ animationDelay: '90ms' }}
              className={`mt-6 font-display text-[2rem] leading-[1.08] font-semibold text-balance text-ink-950 sm:text-[2.5rem] lg:text-[2.75rem] ${reveal}`}
            >
              Have a Project in Mind?
            </h2>

            <p
              style={{ animationDelay: '180ms' }}
              className={`mt-6 text-base leading-relaxed text-ink-700 sm:text-lg ${reveal}`}
            >
              Let&rsquo;s turn your idea into a space built for quality, functionality and lasting value.
            </p>

            <div
              style={{ animationDelay: '270ms' }}
              className={`mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-5 ${reveal}`}
            >
              <Button to="/contact" className="h-14 w-full sm:h-auto sm:w-auto sm:px-8">
                Start a Project
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
