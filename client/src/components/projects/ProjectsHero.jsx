import Container from '../ui/Container.jsx'
import { ctaImage } from '../../config/site.js'

export default function ProjectsHero() {
  return (
    <section aria-labelledby="projects-hero-heading" className="relative isolate overflow-hidden bg-gradient-to-br from-ink-950 via-ink-900 to-ink-950 text-paper">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(65%_55%_at_75%_15%,rgb(37_99_235/0.28),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(45%_55%_at_15%_85%,rgb(59_130_246/0.16),transparent_65%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35] [background-image:linear-gradient(to_right,rgb(255_255_255/0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.05)_1px,transparent_1px)] [background-size:80px_80px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 -z-10 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent"
      />

      {/* Background image overlay */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-20">
        <img
          src={ctaImage.src}
          alt=""
          width={ctaImage.width}
          height={ctaImage.height}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/50 to-ink-950/70" />
      </div>

      <Container size="wide">
        <div className="flex flex-col items-center pt-24 pb-20 text-center sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28">
          <p
            style={{ animationDelay: '0ms' }}
            className="animate-rise flex items-center gap-3 font-display text-xs font-semibold tracking-[0.22em] text-blue-300 uppercase"
          >
            <span aria-hidden="true" className="h-px w-10 bg-blue-500" />
            Our Projects
            <span aria-hidden="true" className="h-px w-10 bg-blue-500" />
          </p>

          <h1
            id="projects-hero-heading"
            style={{ animationDelay: '80ms' }}
            className="animate-rise mt-6 text-4xl leading-[1.02] text-paper sm:text-5xl lg:text-6xl"
          >
            SPACES BUILT WITH <span className="text-blue-400">PURPOSE.</span>
          </h1>

          <p
            style={{ animationDelay: '160ms' }}
            className="animate-rise mt-6 max-w-2xl text-base leading-relaxed text-ink-400 sm:text-lg"
          >
            Explore a selection of projects shaped by thoughtful design, quality construction and long-term value.
          </p>
        </div>
      </Container>
    </section>
  )
}
