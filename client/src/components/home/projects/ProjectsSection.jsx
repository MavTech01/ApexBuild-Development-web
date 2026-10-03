import Container from '../../ui/Container.jsx'
import SectionHeading from '../../ui/SectionHeading.jsx'
import Button from '../../ui/Button.jsx'
import ProjectCard from './ProjectCard.jsx'
import { projects } from './projects.data.js'
import { useRevealOnScroll } from '../../../hooks/useRevealOnScroll.js'

export default function ProjectsSection() {
  const [ref, revealed] = useRevealOnScroll()
  const reveal = revealed ? 'animate-rise' : 'opacity-0 translate-y-4'

  const [featured, ...supporting] = projects

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

        <div className="mt-12 grid gap-6 sm:mt-14 lg:grid-cols-12 lg:gap-8">
          <div className={`lg:col-span-7 ${reveal}`}>
            <ProjectCard project={featured} />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1 lg:gap-8">
            {supporting.map((project, index) => (
              <div key={project.id} style={{ animationDelay: `${(index + 1) * 90}ms` }} className={reveal}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
