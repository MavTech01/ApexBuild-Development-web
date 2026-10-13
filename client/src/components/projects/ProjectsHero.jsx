import Container from '@/components/ui/Container.jsx'
import { ctaImage } from '@/config/site.js'
import HeroBackground from './HeroBackground.jsx'
import ParallaxImage from './ParallaxImage.jsx'

export default function ProjectsHero() {
  return (
    <section aria-labelledby="projects-hero-heading" className="relative isolate overflow-hidden bg-brand text-paper">
      <HeroBackground />
      <ParallaxImage src={ctaImage.src} width={ctaImage.width} height={ctaImage.height} />

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
            className="animate-rise mt-6 text-3xl leading-[1.02] text-paper sm:text-4xl lg:text-5xl"
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
