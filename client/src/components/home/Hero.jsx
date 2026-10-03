import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'
import { heroImage, site } from '../../config/site.js'

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative isolate overflow-hidden bg-ink-950 text-paper">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_78%_18%,rgb(147_116_63/0.22),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 hidden opacity-80 [background-image:linear-gradient(to_right,rgb(255_255_255/0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.04)_1px,transparent_1px)] [background-size:88px_88px] lg:block"
      />

      <Container size="wide">
        <div className="grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-12 lg:gap-12 lg:py-24 xl:gap-16 xl:py-28">
          <div className="lg:col-span-6 xl:col-span-5">
            <p
              style={{ animationDelay: '0ms' }}
              className="animate-rise flex items-center gap-3 font-display text-xs font-semibold tracking-[0.22em] text-bronze-300 uppercase"
            >
              <span aria-hidden="true" className="h-px w-10 bg-bronze-500" />
              {site.name}
            </p>

            <h1
              id="hero-heading"
              style={{ animationDelay: '80ms' }}
              className="animate-rise mt-6 text-4xl leading-[1.02] text-paper sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              WE BUILD SPACES THAT LAST.
            </h1>

            <p
              style={{ animationDelay: '160ms' }}
              className="animate-rise mt-6 max-w-xl text-base leading-relaxed text-ink-400 sm:text-lg"
            >
              From construction to property development, we create spaces designed for quality, functionality and
              long-term value.
            </p>

            <div
              style={{ animationDelay: '240ms' }}
              className="animate-rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button to="/projects" variant="onDark" className="w-full sm:w-auto">
                Explore Our Projects
              </Button>
              <Button to="/contact" variant="outlineOnDark" className="w-full sm:w-auto">
                Start a Project
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 xl:col-span-7">
            <figure style={{ animationDelay: '120ms' }} className="animate-reveal relative">
              <span
                aria-hidden="true"
                className="absolute -bottom-4 -left-4 hidden h-full w-full border border-bronze-500/40 lg:block"
              />
              <div className="relative overflow-hidden border border-ink-800 bg-ink-900">
                <img
                  src={heroImage.src}
                  alt={heroImage.alt}
                  width={heroImage.width}
                  height={heroImage.height}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="aspect-4/3 w-full object-cover object-[center_38%] lg:h-[clamp(26rem,58vh,42rem)] lg:aspect-auto"
                />
              </div>
            </figure>
          </div>
        </div>
      </Container>
    </section>
  )
}
