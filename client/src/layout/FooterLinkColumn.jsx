import { Link } from 'react-router-dom'
import { footerColumnClass, footerLinkClass } from '@/layout/footer.data.js'

/**
 * FooterLinkColumn
 * A titled column of internal links (e.g. Company, Services).
 */
export default function FooterLinkColumn({ title, links, delay, revealed }) {
  return (
    <div className={`${footerColumnClass}${revealed ? ' in' : ''}`} style={{ '--delay': delay }}>
      <h4 className="mb-4 font-display text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-white">{title}</h4>
      <ul className="grid list-none gap-2.5 p-0">
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to} className={footerLinkClass}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
