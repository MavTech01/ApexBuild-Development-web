export default function ProgressIndicator({ activeIndex, total }) {
  return (
    <div className="hidden lg:block" aria-hidden="true">
      <div className="flex flex-col items-center gap-3">
        <div className="relative h-full">
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-blue-200" />
          <div
            className="absolute left-1/2 top-0 w-0.5 -translate-x-1/2 bg-blue-600 transition-all duration-500 ease-out"
            style={{ height: `${(activeIndex / (total - 1)) * 100}%` }}
          />
        </div>

        <div className="absolute flex flex-col gap-3">
          {Array.from({ length: total }).map((_, index) => (
            <div
              key={index}
              className={`relative z-10 transition-all duration-300 ${
                index === activeIndex
                  ? 'h-3 w-3 rounded-full bg-blue-600 shadow-[0_0_12px_rgb(37_99_235/0.5)]'
                  : 'h-2 w-2 rounded-full border-2 border-blue-300 bg-paper'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
