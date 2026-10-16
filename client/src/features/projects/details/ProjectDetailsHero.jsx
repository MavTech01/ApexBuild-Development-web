import { MapPin } from 'lucide-react'
import Container from '@/shared/ui/Container.jsx'
import Breadcrumb from '@/shared/ui/Breadcrumb.jsx'
import HeroBackground from '@/features/projects/HeroBackground.jsx'
import ParallaxImage from '@/features/projects/ParallaxImage.jsx'

const breadcrumbItems = (project) => [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: project.title },
]

export default function ProjectDetailsHero({ project }) {
  const { title, category, location, image } = project

  return (
    <header
      aria-labelledby="project-details-heading"
      className="relative isolate overflow-hidden bg-brand text-paper"
    >
      <HeroBackground />
      {image?.src && (
        <ParallaxImage src={image.src} width={image.width} height={image.height} />
      )}

      <Container size="wide">
        <div className="pt-24 sm:pt-28">
          <Breadcrumb items={breadcrumbItems(project)} tone="light" className="animate-rise" />
        </div>

        <div className="flex flex-col items-center pb-20 pt-10 text-center sm:pb-24 sm:pt-14 lg:pb-28 lg:pt-16">
          <p
            style={{ animationDelay: '0ms' }}
            className="animate-rise flex items-center gap-3 font-display text-xs font-semibold tracking-[0.22em] text-blue-300 uppercase"
          >
            <span aria-hidden="true" className="h-px w-10 bg-blue-500" />
            {category}
            <span aria-hidden="true" className="h-px w-10 bg-blue-500" />
          </p>

          <h1
            id="project-details-heading"
            style={{ animationDelay: '80ms' }}
            className="animate-rise mt-6 text-3xl leading-[1.02] text-balance text-paper sm:text-4xl lg:text-5xl"
          >
            {title}
          </h1>

          <div
            style={{ animationDelay: '160ms' }}
            className="animate-rise mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-ink-300 sm:text-base"
          >
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-blue-400" aria-hidden="true" />
              {location}
            </span>
          </div>
        </div>
      </Container>
    </header>
  )
}