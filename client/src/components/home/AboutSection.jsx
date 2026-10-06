import { useRevealOnScroll } from '@/hooks/useRevealOnScroll.js'
import Container from '@/components/ui/Container.jsx'
import SectionHeading from '@/components/ui/SectionHeading.jsx'
import Button from '@/components/ui/Button.jsx'
import CompanyStats from './CompanyStats.jsx'
import { aboutImage } from '@/config/site.js'

const focusAreas = ['Quality construction', 'Thoughtful development', 'Disciplined project management']

export default function AboutSection() {
  const [ref, revealed] = useRevealOnScroll()

  return (
    <section ref={ref} aria-labelledby="about-heading" className="relative overflow-hidden bg-gradient-to-br from-paper via-ivory/40 to-paper py-16 sm:py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_40%,rgb(37_99_235/0.04),transparent_70%)]"
      />
      <Container size="wide">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className={`lg:col-span-6 xl:col-span-5 ${revealed ? 'animate-rise' : 'opacity-0 translate-y-4'}`}>
            <SectionHeading
              id="about-heading"
              eyebrow="About ApexBuild"
              title="Built on Quality. Driven by Purpose."
              description="At ApexBuild Developments, we bring together construction expertise, thoughtful design and disciplined project management to create spaces that deliver lasting value."
            />

            <ul className="mt-8 space-y-3">
              {focusAreas.map((area) => (
                <li key={area} className="flex items-center gap-3 text-sm text-ink-700 sm:text-base">
                  <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rotate-45 bg-blue-600" />
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
            <div className="relative">
              <span
                aria-hidden="true"
                className="absolute -top-3 -right-3 hidden h-full w-full border border-blue-500/20 lg:block"
              />
              <div className="relative overflow-hidden">
                <img
                  src={aboutImage.src}
                  alt={aboutImage.alt}
                  width={aboutImage.width}
                  height={aboutImage.height}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-ink-950/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <CompanyStats />
    </section>
  )
}
