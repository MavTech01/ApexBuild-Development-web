import Container from '@/components/ui/Container.jsx'
import HeroBackground from '@/components/projects/HeroBackground.jsx'
import ParallaxImage from '@/components/projects/ParallaxImage.jsx'
import { heroImage } from '@/config/site.js'

export default function ServicesHero() {
  return (
    <section aria-labelledby="services-hero-heading" className="relative isolate overflow-hidden bg-gradient-to-br from-ink-950 via-ink-900 to-ink-950 text-paper">
      <HeroBackground />
      <ParallaxImage src={heroImage.src} width={heroImage.width} height={heroImage.height} />

      <Container size="wide">
        <div className="flex flex-col items-center pt-24 pb-20 text-center sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28">
          <p
            style={{ animationDelay: '0ms' }}
            className="animate-rise flex items-center gap-3 font-display text-xs font-semibold tracking-[0.22em] text-blue-300 uppercase"
          >
            <span aria-hidden="true" className="h-px w-10 bg-blue-500" />
            Services &amp; Capabilities
            <span aria-hidden="true" className="h-px w-10 bg-blue-500" />
          </p>

          <h1
            id="services-hero-heading"
            style={{ animationDelay: '80ms' }}
            className="animate-rise mt-6 text-4xl leading-[1.02] text-paper sm:text-5xl lg:text-6xl"
          >
            BUILT FOR QUALITY. <span className="text-blue-400">ENGINEERED FOR VALUE.</span>
          </h1>

          <p
            style={{ animationDelay: '160ms' }}
            className="animate-rise mt-6 max-w-2xl text-base leading-relaxed text-ink-400 sm:text-lg"
          >
            ApexBuild Developments provides end-to-end construction, property development, renovation, and project management solutions tailored to ambitious residential and commercial projects.
          </p>
        </div>
      </Container>
    </section>
  )
}
