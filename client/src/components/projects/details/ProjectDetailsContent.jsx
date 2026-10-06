import ProjectDetailsGallery from './ProjectDetailsGallery.jsx'
import ProjectOverview from './ProjectOverview.jsx'
import ProjectHighlights from './ProjectHighlights.jsx'
import ProjectSidebar from './ProjectSidebar.jsx'
import { useRevealOnScroll } from '../../../hooks/useRevealOnScroll.js'

export default function ProjectDetailsContent({ project }) {
  const [ref, revealed] = useRevealOnScroll(0.15)
  const revealClass = revealed ? 'animate-rise' : 'opacity-0 translate-y-4'

  return (
    <div ref={ref} className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-16">
      {/* Main Content Area */}
      <div className="space-y-12 lg:col-span-8">
        <ProjectDetailsGallery image={project.image} gallery={project.gallery} />
        <ProjectOverview description={project.description} revealClass={revealClass} />
        <ProjectHighlights highlights={project.highlights} revealClass={revealClass} />
      </div>

      {/* Specifications & Contact Sidebar */}
      <ProjectSidebar project={project} />
    </div>
  )
}
