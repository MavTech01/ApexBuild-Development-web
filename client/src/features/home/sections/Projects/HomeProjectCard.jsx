import { Link } from 'react-router-dom'
import Reveal from '@/features/home/components/Reveal.jsx'

/**
 * HomeProjectCard
 * A single project in the homepage track. The image wipes open as it scrolls
 * into view (via Reveal) and the caption lists title, location and category.
 * Clicking opens the project detail page.
 *
 * `dragged` is a ref owned by the track: we ignore the click that ends a drag
 * so dragging the row doesn't accidentally open a project.
 */
export default function HomeProjectCard({ project, dragged }) {
  return (
    <figure className="w-[82vw] flex-none snap-start min-[900px]:w-[clamp(280px,30vw,420px)]">
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
          <img src={project.image} alt={project.imageAlt} draggable="false" />
        </Reveal>
        <figcaption className="mt-4 flex items-baseline justify-between gap-3">
          <b className="font-display text-[clamp(1rem,3.2vw,1.25rem)] font-bold leading-snug">{project.title}</b>
          <span className="shrink-0 text-[clamp(0.75rem,2.2vw,0.85rem)] leading-snug opacity-70">{project.location}</span>
        </figcaption>
        <small className="mt-1 block text-[clamp(0.75rem,2.2vw,0.85rem)] leading-snug opacity-70">{project.category}</small>
      </Link>
    </figure>
  )
}
