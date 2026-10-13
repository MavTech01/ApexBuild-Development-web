import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll.js'
import { homeProjects } from './projects.data.js'
import SplitHeading from '../shared/SplitHeading.jsx'
import Reveal from '../shared/Reveal.jsx'
import Eyebrow from '../shared/Eyebrow.jsx'
import Container from '@/components/ui/Container.jsx'

function ProjectFigure({ project, dragged }) {
  const [ref, inView] = useRevealOnScroll()

  return (
    <figure ref={ref} className="w-[82vw] flex-none snap-start min-[900px]:w-[clamp(280px,30vw,420px)]">
      <Link
        to={`/projects/${project.id}`}
        draggable="false"
        className="group block"
        onDragStart={(event) => event.preventDefault()}
        onClick={(event) => {
          if (dragged.current) event.preventDefault()
        }}
      >
        <Reveal className="aspect-[3/2] rounded-[18px]">
          <img src={project.image} alt={project.alt} draggable="false" />
        </Reveal>
        <figcaption className="mt-4 flex items-baseline justify-between gap-4">
          <b className="font-display text-[1.25rem] font-bold">{project.title}</b>
          <span className="text-[0.85rem] opacity-70">{project.location}</span>
        </figcaption>
        <small className="block opacity-70">{project.category}</small>
      </Link>
    </figure>
  )
}

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

  return (
    <section id="projects" className="hazard-stripes grain bg-[linear-gradient(170deg,#0b2a6b,#07122b_80%)] text-white">
      <Container size="wide">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <Eyebrow tone="dark">Our projects</Eyebrow>
            <SplitHeading text="Spaces We've Helped" accent="Bring To Life." accentClassName="text-gold" />
            <p className="mt-6 max-w-[36em] text-slate-soft">
              Explore a selection of construction and development projects created with a focus on quality,
              functionality and lasting value.
            </p>
          </div>
          <span className="self-end pb-2 text-[0.9rem] opacity-70">Drag or scroll sideways</span>
        </div>

        <div
          ref={trackRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={endDrag}
          onMouseLeave={endDrag}
          className={`mt-[clamp(48px,7vw,88px)] flex snap-x gap-[clamp(20px,3vw,48px)] overflow-x-auto pb-7 [scrollbar-width:thin] ${
            dragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
        >
          {homeProjects.map((project) => (
            <ProjectFigure key={project.id} project={project} dragged={dragged} />
          ))}
        </div>
      </Container>
    </section>
  )
}
