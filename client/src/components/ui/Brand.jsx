import Logo from './Logo.jsx'
import { site } from '@/config/site.js'

/**
 * Brand
 * The logo + wordmark lockup shared by the navbar and footer. The layout stays
 * identical everywhere; callers can tune the mark size and wordmark scale for
 * their context (e.g. a slightly smaller mark in the header).
 */
export default function Brand({
  className = '',
  logoClassName = 'h-[38px] w-[38px]',
  wordmarkClassName = 'text-[1.2rem]',
  subtitleClassName = 'text-azure',
}) {
  return (
    <span className={`flex items-center gap-3 ${className}`.trim()}>
      <Logo className={logoClassName} />
      <span>
        <b className={`block font-display font-extrabold leading-none tracking-[0.16em] text-white ${wordmarkClassName}`.trim()}>
          {site.wordmark}
        </b>
        <small className={`mt-[3px] block font-display text-[0.7rem] font-semibold uppercase leading-none tracking-[0.2em] ${subtitleClassName}`.trim()}>
          Developments
        </small>
      </span>
    </span>
  )
}
