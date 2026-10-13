import Container from '@/shared/ui/Container.jsx'
import SectionHeading from '@/shared/ui/SectionHeading.jsx'
import CompanyStats from '@/shared/components/CompanyStats.jsx'
import { heroImage } from '@/shared/config/site.js'

const highlights = [
  'Full-lifecycle structural engineering and general contracting',
  'Master-planned residential communities and commercial facilities',
  'Rigorous compliance with national safety and environmental building codes',
  'End-to-end transparency from architectural drafting to handover',
]

export default function CompanyIntro() {
  return (
    <section
      aria-labelledby="company-intro-heading"
      className="relative overflow-hidden bg-gradient-to-b from-paper via-surface to-paper py-16 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_0%,rgb(37_99_235/0.03),transparent_70%)]"
      />

      <Container size="wide">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Text narrative */}
          <div className="animate-rise lg:col-span-6 xl:col-span-6">
            <SectionHeading
              id="company-intro-heading"
              eyebrow="Our Story & Expertise"
              title="Built on Experience. Driven by Quality."
              description="At ApexBuild Developments, we bridge architectural imagination with structural discipline to create enduring spaces across Nigeria."
            />

            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-600 sm:text-lg">
              <p>
                Founded on the belief that buildings should inspire communities and endure generations,
                ApexBuild operates across comprehensive commercial construction, residential development,
                and large-scale civil infrastructure.
              </p>
              <p>
                Every project is guided by an uncompromising commitment to structural integrity, functional
                elegance, and long-term asset value. From initial feasibility assessments to final interior
                finishes, our multidisciplinary team coordinates every detail with precision.
              </p>
            </div>

            <ul className="mt-8 space-y-3.5">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-medium text-ink-800 sm:text-base">
                  <span aria-hidden="true" className="h-2 w-2 shrink-0 rotate-45 bg-blue-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Image */}
          <div
            style={{ animationDelay: '140ms' }}
            className="animate-reveal lg:col-span-6 xl:col-span-6"
          >
            <div className="relative">
              <span
                aria-hidden="true"
                className="absolute -top-3 -right-3 hidden h-full w-full rounded-xl border border-blue-500/30 lg:block"
              />
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-line bg-surface shadow-lift sm:aspect-[16/11]">
                <img
                  src={heroImage.src}
                  alt="ApexBuild commercial development project exterior"
                  width={heroImage.width}
                  height={heroImage.height}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out-premium hover:scale-103"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/25 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Reused Stats Component */}
      <CompanyStats />
    </section>
  )
}
