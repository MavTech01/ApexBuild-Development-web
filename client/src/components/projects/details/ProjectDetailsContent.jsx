import ProjectDetailsGallery from './ProjectDetailsGallery.jsx'
import ProjectOverview from './ProjectOverview.jsx'
import ProjectHighlights from './ProjectHighlights.jsx'
import ProjectSidebar from './ProjectSidebar.jsx'
export default function ProjectDetailsContent({ project }) {
  const revealClass = 'animate-rise'

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-16">
      {/* Main Content Area */}
      <div className="space-y-12 lg:col-span-8">
        <ProjectDetailsGallery
          image={project.image}
          gallery={project.gallery}
          title={project.title}
        />
        <ProjectOverview description={project.description} revealClass={revealClass} />
        <ProjectHighlights highlights={project.highlights} revealClass={revealClass} />
      </div>

      {/* Specifications & Contact Sidebar */}
      <ProjectSidebar project={project} />
    </div>
  )
}
