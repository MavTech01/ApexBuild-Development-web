import { CheckCircle2, ArrowRight } from 'lucide-react'
import Container from '@/components/ui/Container.jsx'
import SectionHeading from '@/components/ui/SectionHeading.jsx'
import Button from '@/components/ui/Button.jsx'
import ServiceIcon from '@/components/home/services/ServiceIcon.jsx'
import { detailedServices } from './servicesDetailed.data.js'
export default function ServicesListing() {
  return (
    <section
      aria-labelledby="services-listing-heading"
      className="relative isolate bg-paper py-16 sm:py-20 lg:py-28"
    >
      {/* Background Subtle Gradient & Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(50%_50%_at_50%_0%,rgb(37_99_235/0.04),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(to_right,rgb(0_0_0/0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgb(0_0_0/0.02)_1px,transparent_1px)] [background-size:80px_80px]"
      />

      <Container size="wide">
        <div className="mx-auto max-w-3xl text-center animate-rise">
          <SectionHeading
            id="services-listing-heading"
            align="center"
            eyebrow="What We Deliver"
            title="Comprehensive Services for Every Phase"
            description="Whether embarking on a new ground-up build, undertaking complex property development, or modernizing an existing space, we bring structure and certainty to every undertaking."
          />
        </div>

        {/* Detailed Service Cards */}
        <div className="mt-14 space-y-12 sm:mt-16 lg:mt-20 lg:space-y-16">
          {detailedServices.map((service, index) => {
            const isReversed = index % 2 === 1
            return (
              <article
                key={service.id}
                id={service.anchorId}
                style={{ animationDelay: `${index * 80}ms` }}
                className={`group relative overflow-hidden rounded-2xl border border-line bg-surface p-6 shadow-[0_4px_20px_rgb(0_0_0/0.03)] transition-all duration-300 hover:border-blue-500/40 hover:shadow-blue-lift sm:p-8 lg:p-12 animate-rise`}
              >
                <div className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-12">
                  {/* Left Column: Number, Title, Overview, Features */}
                  <div className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                        <ServiceIcon name={service.icon} className="h-6 w-6" />
                      </span>
                      <div>
                        <span className="font-display text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase">
                          {service.category}
                        </span>
                        <h2 className="font-display text-2xl font-bold tracking-tight text-ink-950 sm:text-3xl">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="mt-5 text-base font-medium leading-relaxed text-ink-900 sm:text-lg">
                      {service.description}
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-ink-600 sm:text-base">
                      {service.summary}
                    </p>

                    {/* Feature Metric Tags */}
                    <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
                      {service.features.map((feature) => (
                        <div
                          key={feature.label}
                          className="rounded-lg border border-line/80 bg-paper/60 px-4 py-3"
                        >
                          <div className="font-display text-[11px] font-semibold tracking-wider text-ink-400 uppercase">
                            {feature.label}
                          </div>
                          <div className="mt-1 font-display text-xs font-bold text-ink-900">
                            {feature.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Key Capabilities Checklist & Action */}
                  <div
                    className={`flex flex-col justify-between rounded-xl border border-line/60 bg-paper/40 p-6 sm:p-7 lg:col-span-5 ${
                      isReversed ? 'lg:order-1' : ''
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between border-b border-line/60 pb-3">
                        <span className="font-display text-xs font-bold tracking-widest text-ink-400 uppercase">
                          Core Capabilities
                        </span>
                        <span className="font-display text-xs font-semibold text-blue-600 tabular-nums">
                          0{index + 1} / 04
                        </span>
                      </div>

                      <ul className="mt-5 space-y-3.5">
                        {service.capabilities.map((capability) => (
                          <li key={capability} className="flex items-start gap-3">
                            <CheckCircle2
                              className="mt-0.5 h-4 w-4 shrink-0 text-blue-600"
                              aria-hidden="true"
                            />
                            <span className="text-sm leading-snug text-ink-700">
                              {capability}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 pt-5 border-t border-line/60 flex items-center justify-between">
                      <Button
                        to="/contact"
                        variant="secondary"
                        size="sm"
                        className="group/btn"
                      >
                        Inquire About This Service
                        <ArrowRight
                          className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-1"
                          aria-hidden="true"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
