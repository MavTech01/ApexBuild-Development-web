import { Award, Shield, Lightbulb, Gem } from 'lucide-react'
import Container from '@/components/ui/Container.jsx'
import BuildingSilhouette from '@/components/decorative/BuildingSilhouette.jsx'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll.js'

const values = [
  {
    title: 'Quality First',
    icon: Award,
    description:
      'We maintain uncompromising standards throughout every stage of a project—from foundation engineering to the finest interior finishes.',
  },
  {
    title: 'Integrity',
    icon: Shield,
    description:
      'We believe in honest communication, open books, and transparent processes so our clients have complete trust in our delivery.',
  },
  {
    title: 'Innovation',
    icon: Lightbulb,
    description:
      'We continually look for better ways to design, build, and develop—incorporating modern construction techniques and energy-efficient building methods.',
  },
  {
    title: 'Lasting Value',
    icon: Gem,
    description:
      'We create spaces designed to remain structurally resilient, aesthetically timeless, and economically valuable long after completion.',
  },
]

export default function CoreValues() {
  const [ref, revealed] = useRevealOnScroll()
  const reveal = revealed ? 'animate-rise' : 'opacity-0 translate-y-4'

  return (
    <section
      ref={ref}
      aria-labelledby="values-heading"
      className="relative isolate overflow-hidden bg-brand-deep py-20 text-paper sm:py-24 lg:py-28"
    >
      {/* Decorative ambient gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(65%_55%_at_80%_20%,rgb(37_99_235/0.22),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(45%_55%_at_20%_80%,rgb(59_130_246/0.14),transparent_65%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.25] [background-image:linear-gradient(to_right,rgb(255_255_255/0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.04)_1px,transparent_1px)] [background-size:60px_60px]"
      />

      <Container size="wide">
        <div className={`mx-auto max-w-3xl text-center ${reveal}`}>
          <p className="flex items-center justify-center gap-3 font-display text-xs font-semibold tracking-[0.22em] text-blue-300 uppercase">
            <span aria-hidden="true" className="h-px w-10 bg-blue-500" />
            Our Core Values
            <span aria-hidden="true" className="h-px w-10 bg-blue-500" />
          </p>

          <h2
            id="values-heading"
            className="mt-5 font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl lg:text-5xl"
          >
            Principles That Guide <span className="text-blue-400">Every Build.</span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-ink-300 sm:text-lg">
            Our company culture and operational standards are anchored in four foundational pillars.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {values.map((val, index) => {
            const Icon = val.icon
            return (
              <div
                key={val.title}
                style={{ animationDelay: `${index * 90}ms` }}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xs transition-all duration-300 ease-out-premium hover:-translate-y-1.5 hover:border-blue-500/50 hover:bg-white/[0.07] hover:shadow-[0_8px_30px_rgb(37_99_235/0.2)] ${reveal}`}
              >
                {/* Architectural Building Silhouette — rises smoothly from bottom-right on hover */}
                <BuildingSilhouette className="text-blue-400/[0.12]" />

                <div className="relative">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/15 text-blue-400 ring-1 ring-blue-500/30 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                  </span>

                  <h3 className="mt-6 font-display text-xl font-semibold text-paper transition-colors duration-200 group-hover:text-blue-300">
                    {val.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-ink-300">
                    {val.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
