import { useRef, useState } from 'react'
import { homeProjects } from '@/features/home/sections/Projects/projects.data.js'
import HomeProjectCard from '@/features/home/sections/Projects/HomeProjectCard.jsx'
import SplitHeading from '@/features/home/components/SplitHeading.jsx'
import Eyebrow from '@/features/home/components/Eyebrow.jsx'
import Container from '@/shared/ui/Container.jsx'
import Button from '@/shared/ui/Button.jsx'

/**
 * ProjectsSection
 * A horizontally scrollable / draggable track of project cards. Each card
 * reveals with the clip-path wipe and its caption slides in behind it.
 */
export default function ProjectsSection() {
  const trackRef = useRef(null)
  const drag = useRef({ active: false, startX: 0, startScroll: 0 })
  const dragged = useRef(false)
  const [dragging, setDragging] = useState(false)

  const onMouseDown = (event) => {
    dragged.current = false
    drag.current = { active: true, startX: event.pageX, startScroll: trackRef.current.scrollLeft }
    setDragging(true)
  }
  const onMouseMove = (event) => {
    if (!drag.current.active) return
    const delta = event.pageX - drag.current.startX
    if (Math.abs(delta) > 4) dragged.current = true
    trackRef.current.scrollLeft = drag.current.startScroll - delta
  }
  const endDrag = () => {
    drag.current.active = false
    setDragging(false)
  }

  const trackClassName =
    'mt-4 flex snap-x gap-[clamp(20px,3vw,48px)] overflow-x-auto pb-7 [scrollbar-width:thin] ' +
    (dragging ? 'cursor-grabbing' : 'cursor-grab')

  return (
    <section id="projects" className="hazard-stripes grain bg-[linear-gradient(170deg,#0b2a6b,#07122b_80%)] text-white">
      <Container size="wide">
        <div>
          <Eyebrow tone="dark">Our projects</Eyebrow>
          <SplitHeading text="Spaces We've Helped" accent="Bring To Life." accentClassName="text-gold" />
          <p className="mt-6 max-w-[36em] text-slate-soft">
            Explore a selection of construction and development projects created with a focus on quality,
            functionality and lasting value.
          </p>
        </div>

        <div className="mt-[clamp(24px,3.5vw,40px)] flex items-center justify-between gap-x-2 min-[900px]:gap-x-4">
          <span className="min-w-0 text-[0.8rem] opacity-70 min-[900px]:text-[0.9rem]">Drag or scroll sideways</span>
          <Button variant="outline" to="/projects" className="shrink-0 text-[0.8rem] min-[900px]:text-[0.9rem]">
            See all projects
          </Button>
        </div>

        <div
          ref={trackRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={endDrag}
          onMouseLeave={endDrag}
          className={trackClassName}
        >
          {homeProjects.map((project) => (
            <HomeProjectCard key={project.id} project={project} dragged={dragged} />
          ))}
        </div>
      </Container>
    </section>
  )
}
