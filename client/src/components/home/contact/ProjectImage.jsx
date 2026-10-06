import { ctaImage } from '../../../config/site.js'

export default function ProjectImage() {
  return (
    <div className="lg:sticky lg:top-8">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lift">
        <img
          src={ctaImage.src}
          alt={ctaImage.alt}
          width={ctaImage.width}
          height={ctaImage.height}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent" />
      </div>
    </div>
  )
}
