import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Container from '@/shared/ui/Container.jsx'
import { getProjectById } from '@/features/projects/projects.data.js'
import ProjectDetailsHero from '@/features/projects/details/ProjectDetailsHero.jsx'
import ProjectDetailsContent from '@/features/projects/details/ProjectDetailsContent.jsx'
import RelatedProjects from '@/features/projects/details/RelatedProjects.jsx'
import ProjectNotFound from '@/features/projects/details/ProjectNotFound.jsx'
import ProjectsCTA from '@/features/projects/ProjectsCTA.jsx'

export default function ProjectDetailsPage() {
  const { projectId } = useParams()
  const project = getProjectById(projectId)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [projectId])

  if (!project) {
    return <ProjectNotFound />
  }

  return (
    <article aria-labelledby="project-details-heading" className="bg-paper">
      {/* Dark Hero with Breadcrumb Navigation */}
      <ProjectDetailsHero project={project} />

      {/* Main Content & Specs Section */}
      <section
        aria-label="Project Information"
        className="relative overflow-hidden py-14 sm:py-18 lg:py-24"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_0%,rgb(37_99_235/0.02),transparent_70%)]"
        />
        <Container size="wide">
          <ProjectDetailsContent project={project} />
        </Container>
      </section>

      {/* Related Projects Carousel / Grid */}
      <RelatedProjects currentProjectId={project.id} />

      {/* Standard Projects Call-to-Action */}
      <ProjectsCTA />
    </article>
  )
}
