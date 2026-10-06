import Container from '../../ui/Container.jsx'
import SectionHeading from '../../ui/SectionHeading.jsx'
import Button from '../../ui/Button.jsx'
import ProjectCard from '../../home/projects/ProjectCard.jsx'
import { getRelatedProjects } from '../../home/projects/projects.data.js'
import { useRevealOnScroll } from '../../../hooks/useRevealOnScroll.js'

export default function RelatedProjects({ currentProjectId }) {
  const [ref, revealed] = useRevealOnScroll(0.15)
  const reveal = revealed ? 'animate-rise' : 'opacity-0 translate-y-4'

  const related = getRelatedProjects(currentProjectId, 3)

  if (related.length === 0) return null

  return (
    <section
      ref={ref}
      aria-labelledby="related-projects-heading"
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
        <div className={`flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between ${reveal}`}>
          <SectionHeading
            id="related-projects-heading"
            eyebrow="Portfolio"
            title="Explore Other Projects"
            description="Discover more spaces shaped by thoughtful design and structural excellence."
          />

          <div className="shrink-0">
            <Button to="/projects" variant="outline">
              View All Projects
            </Button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 min-[480px]:grid-cols-2 sm:mt-12 lg:grid-cols-3 lg:gap-7">
          {related.map((project, index) => (
            <div
              key={project.id}
              style={{ animationDelay: `${index * 90}ms` }}
              className={reveal}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
