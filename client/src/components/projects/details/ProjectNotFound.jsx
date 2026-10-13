import { ArrowLeft, FolderX } from 'lucide-react'
import Container from '@/components/ui/Container.jsx'
import Button from '@/components/ui/Button.jsx'
import HeroBackground from '@/components/projects/HeroBackground.jsx'

export default function ProjectNotFound() {
  return (
    <div className="relative isolate overflow-hidden bg-brand text-paper py-24 sm:py-32 lg:py-40">
      <HeroBackground />

      <Container size="default">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/10 ring-1 ring-blue-500/30 text-blue-400">
            <FolderX className="h-8 w-8" aria-hidden="true" />
          </div>

          <p className="mt-6 font-display text-xs font-semibold tracking-[0.22em] text-blue-300 uppercase">
            404 Error
          </p>

          <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance text-paper sm:text-5xl">
            Project Not Found
          </h1>

          <p className="mt-5 text-base leading-relaxed text-ink-300 sm:text-lg">
            The project you are looking for does not exist, was renamed, or has been moved.
            Explore our active portfolio to view all completed and ongoing developments.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button to="/projects">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              <span>Browse All Projects</span>
            </Button>
            <Button to="/" variant="outline">
              Return Home
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}
