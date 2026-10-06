import Container from '@/components/ui/Container.jsx'
import HeroBackground from '@/components/projects/HeroBackground.jsx'
import ParallaxImage from '@/components/projects/ParallaxImage.jsx'
import { aboutImage } from '@/config/site.js'

export default function AboutHero() {
  return (
    <section aria-labelledby="about-hero-heading" className="relative isolate overflow-hidden bg-gradient-to-br from-ink-950 via-ink-900 to-ink-950 text-paper">
      <HeroBackground />
      <ParallaxImage src={aboutImage.src} width={aboutImage.width} height={aboutImage.height} />

      <Container size="wide">
        <div className="flex flex-col items-center pt-24 pb-20 text-center sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28">
          <p
            className="flex items-center gap-3 font-display text-xs font-semibold tracking-[0.22em] text-blue-300 uppercase"
          >
            <span aria-hidden="true" className="h-px w-10 bg-blue-500" />
            About ApexBuild
            <span aria-hidden="true" className="h-px w-10 bg-blue-500" />
          </p>

          <h1
            id="about-hero-heading"
            className="mt-6 text-4xl leading-[1.02] text-paper sm:text-5xl lg:text-6xl"
          >
            BUILDING WITH PURPOSE. <span className="text-blue-400">CREATING WITH VISION.</span>
          </h1>

          <p
            className="mt-6 max-w-2xl text-base leading-relaxed text-ink-400 sm:text-lg"
          >
            We combine construction expertise, thoughtful development and a commitment to quality to create spaces built for lasting value.
          </p>
        </div>
      </Container>
    </section>
  )
}
