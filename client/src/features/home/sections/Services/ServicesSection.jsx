import { services } from '@/features/home/sections/Services/services.data.js'
import { useActiveService } from '@/features/home/sections/Services/useActiveService.js'
import ServiceMediaPanel from '@/features/home/sections/Services/ServiceMediaPanel.jsx'
import ServiceList from '@/features/home/sections/Services/ServiceList.jsx'
import SplitHeading from '@/features/home/components/SplitHeading.jsx'
import Eyebrow from '@/features/home/components/Eyebrow.jsx'
import Container from '@/shared/ui/Container.jsx'
import { CraneIcon } from '@/shared/assets/icons'
import '@/features/home/sections/Services/services.css'

/**
 * ServicesSection
 * "What we do" — a sticky photo panel that cross-fades as the service list
 * scrolls past it.
 *
 * Layout (matches the original prototype):
 * - Mobile: a single column. The panel comes first and pins to the top, so the
 *   service list scrolls up underneath it.
 * - Desktop: two columns. The list is on the left, the sticky panel on the
 *   right. The list stays taller than the panel so the panel can travel.
 */
export default function ServicesSection() {
  const { active, panelRef, itemRefs, scrollToService } = useActiveService()

  return (
    <section
      id="services"
      className="overflow-clip bg-[linear-gradient(160deg,var(--color-canvas),color-mix(in_srgb,var(--color-royal)_8%,var(--color-canvas)))]"
    >
      <CraneIcon className="absolute right-[var(--gutter)] top-0 z-[1] h-auto w-[46px] origin-top overflow-visible [animation:sway_5s_ease-in-out_infinite_alternate]" />

      <Container size="wide">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <Eyebrow>What we do</Eyebrow>
            <SplitHeading text="Built Around" accent="Your Vision." />
            <p className="mt-6 max-w-[36em] text-muted">
              From new construction to property development and renovation, we provide practical
              solutions designed around quality, efficiency and long-term value.
            </p>
          </div>
        </div>

        {/* Mobile: block (panel first, then list). Desktop: two column grid. */}
        <div className="mt-[clamp(48px,7vw,88px)] block min-[900px]:grid min-[900px]:grid-cols-2 min-[900px]:items-start min-[900px]:gap-[clamp(40px,7vw,112px)]">
          <ServiceMediaPanel services={services} active={active} panelRef={panelRef} />
          <ServiceList
            services={services}
            active={active}
            onSelect={scrollToService}
            itemRefs={itemRefs}
          />
        </div>
      </Container>
    </section>
  )
}
