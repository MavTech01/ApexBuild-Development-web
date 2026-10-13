import Container from '@/shared/ui/Container.jsx'
import SectionHeading from '@/shared/ui/SectionHeading.jsx'
import { teamMembers } from '@/features/team/team.data.js'

export default function TeamGrid() {
  return (
    <section
      aria-labelledby="team-grid-heading"
      className="relative isolate bg-paper py-16 sm:py-20 lg:py-28"
    >
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
            id="team-grid-heading"
            align="center"
            eyebrow="The ApexBuild Team"
            title="Leadership Across Construction &amp; Development"
            description="Our multidisciplinary leadership brings together decades of hands-on building practice, architectural vision, and rigorous commercial governance."
          />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {teamMembers.map((member, index) => (
            <article
              key={member.id}
              style={{ animationDelay: `${index * 80}ms` }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-line bg-surface p-6 shadow-[0_4px_20px_rgb(0_0_0/0.03)] transition-all duration-300 ease-out-premium hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-blue-lift sm:p-7 animate-rise"
            >
              <div>
                {/* Header: Avatar Badge & Department Tag */}
                <div className="flex items-center justify-between gap-4">
                  <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-ink-900 to-ink-950 font-display text-lg font-bold tracking-wider text-blue-300 shadow-inner">
                    <span className="relative z-10">{member.initials}</span>
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 rounded-xl border border-blue-500/20"
                    />
                  </div>
                  <span className="rounded-full bg-blue-50 px-3 py-1 font-display text-[11px] font-semibold tracking-wider text-blue-700 uppercase">
                    {member.department}
                  </span>
                </div>

                {/* Member Info */}
                <div className="mt-6">
                  <h3 className="font-display text-xl font-bold tracking-tight text-ink-950 transition-colors duration-200 group-hover:text-blue-700 sm:text-2xl">
                    {member.name}
                  </h3>
                  <p className="mt-1 font-display text-xs font-semibold tracking-wider text-blue-600 uppercase">
                    {member.role}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-600">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Bottom Footer Info */}
              <div className="mt-6 border-t border-line/70 pt-4 flex items-center justify-between text-xs text-ink-500">
                <span className="font-display font-medium tracking-wide">
                  {member.experience}
                </span>
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-blue-500"
                />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
