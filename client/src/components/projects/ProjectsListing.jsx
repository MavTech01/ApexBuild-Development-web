import { useState } from 'react'
import Container from '@/components/ui/Container.jsx'
import ProjectCard from '@/components/home/projects/ProjectCard.jsx'
import FilterBar from './FilterBar.jsx'
import { projects } from '@/components/home/projects/projects.data.js'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll.js'

export default function ProjectsListing() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [ref, revealed] = useRevealOnScroll()
  const reveal = revealed ? 'animate-rise' : 'opacity-0 translate-y-4'

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.categorySlug === activeFilter)

  return (
    <section ref={ref} aria-labelledby="projects-listing-heading" className="relative overflow-hidden bg-gradient-to-b from-paper via-surface to-paper py-16 sm:py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_0%,rgb(37_99_235/0.03),transparent_70%)]"
      />
      <Container size="wide">
        <div className={reveal}>
          <h2 id="projects-listing-heading" className="sr-only">All Projects</h2>
          <FilterBar active={activeFilter} onChange={setActiveFilter} />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 min-[480px]:grid-cols-2 sm:mt-12 lg:grid-cols-3 lg:gap-7">
          {filtered.map((project, index) => (
            <div key={project.id} style={{ animationDelay: `${index * 90}ms` }} className={reveal}>
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className={`mt-12 text-center text-lg text-ink-500 ${reveal}`}>
            No projects found in this category.
          </p>
        )}
      </Container>
    </section>
  )
}
