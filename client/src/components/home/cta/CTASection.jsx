import Container from '../../ui/Container.jsx'
import Button from '../../ui/Button.jsx'
import { useRevealOnScroll } from '../../../hooks/useRevealOnScroll.js'
import { ctaImage } from '../../../config/site.js'

export default function CTASection() {
  const [ref, revealed] = useRevealOnScroll()
  const reveal = revealed ? 'animate-rise' : 'opacity-0 translate-y-4'

  return (
    // Light ivory — the deliberate inversion of the dark footer below it.
    <section ref={ref} aria-labelledby="cta-heading" className="relative isolate overflow-hidden bg-gradient-to-br from-ivory via-paper to-ivory text-ink-950">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgb(37_99_235/0.06),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.4] [background-image:linear-gradient(to_right,rgb(37_99_235/0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgb(37_99_235/0.02)_1px,transparent_1px)] [background-size:60px_60px]"
      />
      <Container size="wide">
        <div className="grid gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-28">
          {/* Content - Left side on desktop */}
          <div className="flex flex-col justify-center">
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

          {/* Image - Right side on desktop, below on mobile */}
          <div
            style={{ animationDelay: '360ms' }}
            className={`relative order-first lg:order-last ${reveal}`}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lift">
              <img
                src={ctaImage.src}
                alt={ctaImage.alt}
                width={ctaImage.width}
                height={ctaImage.height}
                className="h-full w-full object-cover"
              />
              {/* Image overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent" />
            </div>

            {/* Decorative accent */}
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 blur-2xl"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
