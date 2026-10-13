import Container from '@/shared/ui/Container.jsx'
import HeroBackground from '@/features/projects/HeroBackground.jsx'
import ParallaxImage from '@/features/projects/ParallaxImage.jsx'
import { aboutImage } from '@/shared/config/site.js'

export default function TeamHero() {
  return (
    <section aria-labelledby="team-hero-heading" className="relative isolate overflow-hidden bg-brand text-paper">
      <HeroBackground />
      <ParallaxImage src={aboutImage.src} width={aboutImage.width} height={aboutImage.height} />

      <Container size="wide">
        <div className="flex flex-col items-center pt-24 pb-20 text-center sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28">
          <p
            style={{ animationDelay: '0ms' }}
            className="animate-rise flex items-center gap-3 font-display text-xs font-semibold tracking-[0.22em] text-blue-300 uppercase"
          >
            <span aria-hidden="true" className="h-px w-10 bg-blue-500" />
            Our People
            <span aria-hidden="true" className="h-px w-10 bg-blue-500" />
          </p>

          <h1
            id="team-hero-heading"
            style={{ animationDelay: '80ms' }}
            className="animate-rise mt-6 text-3xl leading-[1.02] text-paper sm:text-4xl lg:text-5xl"
          >
            EXPERIENCED LEADERSHIP. <span className="text-blue-400">DEDICATED EXPERTISE.</span>
          </h1>

          <p
            style={{ animationDelay: '160ms' }}
            className="animate-rise mt-6 max-w-2xl text-base leading-relaxed text-ink-400 sm:text-lg"
          >
            Meet the professionals behind ApexBuild Developments—an integrated team of construction specialists, architects, project managers, and property experts delivering built environments with precision.
          </p>
        </div>
      </Container>
    </section>
  )
}
