import Container from '@/components/ui/Container.jsx'
import SectionHeading from '@/components/ui/SectionHeading.jsx'
import Button from '@/components/ui/Button.jsx'
import ProjectCard from './ProjectCard.jsx'
import { projects } from './projects.data.js'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll.js'

export default function ProjectsSection() {
  const [ref, revealed] = useRevealOnScroll()
  const reveal = revealed ? 'animate-rise' : 'opacity-0 translate-y-4'

  return (
    <section ref={ref} aria-labelledby="projects-heading" className="relative overflow-hidden bg-gradient-to-b from-paper via-surface to-paper py-16 sm:py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_0%,rgb(37_99_235/0.03),transparent_70%)]"
      />
      <Container size="wide">
        <div className={`flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between ${reveal}`}>
          <SectionHeading
            id="projects-heading"
            eyebrow="Our Projects"
            title="Spaces We've Helped Bring to Life."
            description="Explore a selection of construction and development projects created with a focus on quality, functionality and lasting value."
          />

          <div className="shrink-0">
            <Button to="/projects">
              View All Projects
            </Button>
          </div>
        </div>

        {/* Uniform portfolio grid: 1 / 2 / 3 columns. Equal widths, equal gaps,
            equal card weight — every project gets its own contained card. */}
        <div className="mt-12 grid grid-cols-1 gap-6 min-[480px]:grid-cols-2 sm:mt-14 lg:grid-cols-3 lg:gap-7">
          {projects.slice(0, 3).map((project, index) => (
            <div key={project.id} style={{ animationDelay: `${index * 90}ms` }} className={reveal}>
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
