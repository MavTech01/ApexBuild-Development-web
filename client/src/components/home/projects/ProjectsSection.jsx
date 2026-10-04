import Container from '../../ui/Container.jsx'
import SectionHeading from '../../ui/SectionHeading.jsx'
import Button from '../../ui/Button.jsx'
import ProjectCard from './ProjectCard.jsx'
import { projects } from './projects.data.js'
import { useRevealOnScroll } from '../../../hooks/useRevealOnScroll.js'

export default function ProjectsSection() {
  const [ref, revealed] = useRevealOnScroll()
  const reveal = revealed ? 'animate-rise' : 'opacity-0 translate-y-4'

  return (
    <section ref={ref} aria-labelledby="projects-heading" className="bg-paper py-12 sm:py-14 lg:py-16">
      <Container size="wide">
        <div className={`flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between ${reveal}`}>
          <SectionHeading
            id="projects-heading"
            eyebrow="Our Projects"
            title="Spaces We've Helped Bring to Life."
            description="Explore a selection of construction and development projects created with a focus on quality, functionality and lasting value."
          />

          <div className="shrink-0">
            <Button to="/projects" variant="outline">
              View All Projects
            </Button>
          </div>
        </div>

        {/* Uniform portfolio grid: 1 / 2 / 3 columns. Equal widths, equal gaps,
            equal card weight — every project gets its own contained card. */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {projects.map((project, index) => (
            <div key={project.id} style={{ animationDelay: `${index * 90}ms` }} className={reveal}>
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
