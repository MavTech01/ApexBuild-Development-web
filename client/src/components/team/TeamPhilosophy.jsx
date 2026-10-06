import { Users, Target, ShieldCheck } from 'lucide-react'
import Container from '@/components/ui/Container.jsx'
import SectionHeading from '@/components/ui/SectionHeading.jsx'
import { teamPhilosophies } from './team.data.js'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll.js'

const philosophyIcons = [Users, Target, ShieldCheck]

export default function TeamPhilosophy() {
  const [ref, revealed] = useRevealOnScroll()
  const reveal = revealed ? 'animate-rise' : 'opacity-0 translate-y-4'

  return (
    <section
      ref={ref}
      aria-labelledby="team-philosophy-heading"
      className="relative isolate overflow-hidden bg-gradient-to-br from-ivory via-paper to-ivory py-16 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgb(37_99_235/0.04),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,rgb(37_99_235/0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgb(37_99_235/0.02)_1px,transparent_1px)] [background-size:60px_60px]"
      />

      <Container size="wide">
        <div className={`mx-auto max-w-3xl text-center ${reveal}`}>
          <SectionHeading
            id="team-philosophy-heading"
            align="center"
            eyebrow="Our Collaboration Culture"
            title="How Our Specialists Work Together"
            description="True building excellence occurs when architects, site superintendents, and project managers work as a single unified force from blueprint to handover."
          />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-3 lg:gap-8">
          {teamPhilosophies.map((item, index) => {
            const Icon = philosophyIcons[index] || Users
            return (
              <div
                key={item.title}
                style={{ animationDelay: `${index * 100}ms` }}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-xl border border-line bg-surface p-7 shadow-[0_2px_8px_rgb(0_0_0/0.03)] transition-all duration-300 ease-out-premium hover:-translate-y-1.5 hover:border-blue-500/40 hover:shadow-blue-lift ${reveal}`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                      <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
                    </span>
                    <span className="font-display text-2xl font-bold tracking-tight text-ink-300 transition-colors duration-300 group-hover:text-blue-500/40">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-xl font-semibold text-ink-950 transition-colors duration-200 group-hover:text-blue-700">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-ink-600">
                    {item.description}
                  </p>
                </div>

                <div
                  aria-hidden="true"
                  className="mt-6 h-0.5 w-8 bg-blue-600 transition-all duration-300 ease-out-premium group-hover:w-full"
                />
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
