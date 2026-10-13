const sizes = {
  narrow: 'max-w-[var(--apex-width-narrow)]',
  default: 'max-w-6xl xl:max-w-[var(--apex-width-default)] 2xl:max-w-[var(--apex-width-wide)]',
  wide: 'max-w-7xl xl:max-w-[var(--apex-width-wide)] 2xl:max-w-[var(--apex-width-ultra)]',
}

export default function Container({ size = 'default', className = '', children }) {
  return (
    <div className={['mx-auto w-full px-5 sm:px-6 lg:px-8 xl:px-10', sizes[size], className].join(' ').trim()}>
      {children}
    </div>
  )
}
