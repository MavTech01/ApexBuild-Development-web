import Container from '../../ui/Container.jsx'
import Button from '../../ui/Button.jsx'
import { useRevealOnScroll } from '../../../hooks/useRevealOnScroll.js'
import { ctaImage } from '../../../config/site.js'

const actions = [
  { label: 'Start a Project', to: '/contact', variant: 'onDark' },
  { label: 'Explore Our Projects', to: '/projects', variant: 'outlineOnDark' },
]

export default function CTASection() {
  const [ref, revealed] = useRevealOnScroll()
  const reveal = revealed ? 'animate-rise' : 'opacity-0 translate-y-4'

  return (
    <section
      ref={ref}
      aria-labelledby="cta-heading"
      className="relative isolate overflow-hidden bg-ink-950 text-paper"
    >
      <img
        src={ctaImage.src}
        alt=""
        aria-hidden="true"
        width={ctaImage.width}
        height={ctaImage.height}
        loading="lazy"
        decoding="async"
        className={`absolute inset-0 -z-10 h-full w-full object-cover opacity-45 ${
          revealed ? 'animate-reveal' : 'opacity-0'
        }`}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-950/85 via-ink-950/90 to-ink-950"
      />

      <Container>
        <div className="mx-auto max-w-3xl py-12 text-center sm:py-14 lg:py-16">
          <div style={{ animationDelay: '0ms' }} className={reveal}>
            <p className="flex items-center justify-center gap-3 font-display text-xs font-semibold tracking-[0.22em] text-bronze-300 uppercase">
              <span aria-hidden="true" className="h-px w-10 bg-bronze-300" />
              Start Your Project
              <span aria-hidden="true" className="h-px w-10 bg-bronze-300" />
            </p>
          </div>

          <h2
            id="cta-heading"
            style={{ animationDelay: '90ms' }}
            className={`mt-6 text-3xl text-paper sm:text-4xl lg:text-[2.75rem] ${reveal}`}
          >
            Have a Project in Mind?
          </h2>

          <p
            style={{ animationDelay: '180ms' }}
            className={`mx-auto mt-5 max-w-xl text-base leading-relaxed text-paper/80 sm:text-lg ${reveal}`}
          >
            Let&rsquo;s turn your idea into a space built for quality, functionality and
            lasting value.
          </p>

          <div
            style={{ animationDelay: '270ms' }}
            className={`mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4 ${reveal}`}
          >
            {actions.map((action) => (
              <Button key={action.to} to={action.to} variant={action.variant} className="w-full sm:w-auto">
                {action.label}
              </Button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
