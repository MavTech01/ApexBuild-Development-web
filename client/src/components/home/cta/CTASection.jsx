import Container from '../../ui/Container.jsx'
import Button from '../../ui/Button.jsx'
import { useRevealOnScroll } from '../../../hooks/useRevealOnScroll.js'
import { ctaImage } from '../../../config/site.js'

const actions = [
  { label: 'Start a Project', to: '/contact', variant: 'onDark', primary: true },
  { label: 'Explore Our Projects', to: '/projects', variant: 'outlineOnDark', primary: false },
]

export default function CTASection() {
  const [ref, revealed] = useRevealOnScroll()

  const reveal = revealed ? 'animate-rise' : 'opacity-0'
  const delay = (index) => (revealed ? ` [animation-delay:${index * 90}ms]` : '')

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
        <div className="mx-auto max-w-3xl py-20 text-center sm:py-24 lg:py-28">
          <div className={reveal + delay(0)}>
            <p className="flex items-center justify-center gap-3 font-display text-xs font-semibold tracking-[0.22em] text-bronze-300 uppercase">
              <span aria-hidden="true" className="h-px w-10 bg-bronze-300" />
              Start Your Project
              <span aria-hidden="true" className="h-px w-10 bg-bronze-300" />
            </p>
          </div>

          <h2
            id="cta-heading"
            className={`mt-6 font-display text-3xl leading-tight text-paper sm:text-4xl lg:text-5xl ${reveal + delay(1)}`}
          >
            Have a Project in Mind?
          </h2>

          <p className={`mx-auto mt-5 max-w-xl text-base leading-relaxed text-paper/80 sm:text-lg ${reveal + delay(2)}`}>
            Let&rsquo;s turn your idea into a space built for quality, functionality and
            lasting value.
          </p>

          <div className={`mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4 ${reveal + delay(3)}`}>
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
