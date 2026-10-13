import { Eye, ShieldCheck, TrendingUp, Users } from 'lucide-react'
import { reasons } from './why.data.js'
import SplitHeading from '../shared/SplitHeading.jsx'
import FadeUp from '../shared/FadeUp.jsx'
import Eyebrow from '../shared/Eyebrow.jsx'
import Container from '@/components/ui/Container.jsx'

const icons = {
  shield: ShieldCheck,
  users: Users,
  eye: Eye,
  trending: TrendingUp,
}

// Brand-blue gradient tile with a small amber dot; on row hover it tilts,
// scales up and blends smoothly to gold (the original treatment).
const tileClass =
  "relative grid h-[60px] w-[60px] place-items-center rounded-2xl bg-[linear-gradient(135deg,#2563eb,#1b3fa8)] text-white shadow-[0_12px_30px_rgba(37,99,235,0.35)] transition duration-500 group-hover:-rotate-[8deg] group-hover:scale-[1.08] group-hover:bg-gold group-hover:bg-none group-hover:text-ink after:absolute after:-right-1 after:-top-1 after:h-3 after:w-3 after:rounded-full after:border-2 after:border-[var(--bg)] after:bg-gold after:content-['']"

/**
 * WhySection
 * Four reasons rendered as rows (icon + title + description), separated by
 * hairlines, on a subtle paper-to-blue gradient.
 */
export default function WhySection() {
  return (
    <section
      id="why"
      className="bg-[linear-gradient(180deg,var(--bg),color-mix(in_srgb,var(--bl)_10%,var(--bg)))]"
    >
      <Container size="wide">
        <Eyebrow>Why ApexBuild</Eyebrow>
        <SplitHeading text="Built With Purpose." accent="Delivered With Care." />
        <p className="mt-3 max-w-[36em] text-mut">
          Every project is approached with attention to quality, clear communication and practical
          execution, from the first idea to final delivery.
        </p>

        <dl className="mt-[clamp(48px,7vw,88px)]">
          {reasons.map((reason, index) => {
            const Icon = icons[reason.icon]
            return (
              <FadeUp
                key={reason.id}
                delay={`${index * 80}ms`}
                className="group grid grid-cols-[72px_1fr_1.4fr] items-start gap-6 border-t border-[var(--line)] py-[34px] last:border-b max-[899px]:grid-cols-[64px_1fr] max-[899px]:gap-[12px_18px]"
              >
                <span className={`${tileClass} max-[899px]:row-span-2`}>
                  <Icon className="h-7 w-7" />
                </span>
                <dt className="text-[clamp(1.3rem,2vw,1.7rem)] font-bold leading-[1.2]">{reason.title}</dt>
                <dd className="text-mut max-[899px]:col-start-2">{reason.description}</dd>
              </FadeUp>
            )
          })}
        </dl>
      </Container>
    </section>
  )
}
