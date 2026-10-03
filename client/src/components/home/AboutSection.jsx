import { useRevealOnScroll } from '../../hooks/useRevealOnScroll.js'
import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'
import CompanyStats from './CompanyStats.jsx'
import { aboutImage } from '../../config/site.js'

const focusAreas = ['Quality construction', 'Thoughtful development', 'Disciplined project management']

export default function AboutSection() {
  const [ref, revealed] = useRevealOnScroll()

  return (
    <section ref={ref} aria-labelledby="about-heading" className="bg-paper py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className={`lg:col-span-6 xl:col-span-5 ${revealed ? 'animate-rise' : 'opacity-0 translate-y-4'}`}>
            <p className="font-display text-xs font-semibold tracking-[0.22em] text-bronze-700 uppercase">
              About ApexBuild
            </p>

            <h2 id="about-heading" className="mt-5 text-3xl text-ink-950 sm:text-4xl lg:text-[2.75rem]">
              Built on Quality. Driven by Purpose.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-500">
              At ApexBuild Developments, we bring together construction expertise, thoughtful design and disciplined
              project management to create spaces that deliver lasting value.
            </p>

            <ul className="mt-8 space-y-3">
              {focusAreas.map((area) => (
                <li key={area} className="flex items-center gap-3 text-sm text-ink-700 sm:text-base">
                  <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 bg-bronze-600" />
                  {area}
                </li>
              ))}
            </ul>

            <Button to="/about" className="mt-9">
              Learn More About Us
            </Button>
          </div>

          <div
            style={{ animationDelay: '120ms' }}
            className={`lg:col-span-6 xl:col-span-7 ${revealed ? 'animate-reveal' : 'opacity-0'}`}
          >
            <div className="overflow-hidden border border-line bg-surface">
              <img
                src={aboutImage.src}
                alt={aboutImage.alt}
                width={aboutImage.width}
                height={aboutImage.height}
                loading="lazy"
                decoding="async"
                className="aspect-4/3 w-full object-cover lg:aspect-3/2"
              />
            </div>
          </div>
        </div>
      </Container>

      <CompanyStats />
    </section>
  )
}
