import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface PhotoCardProps {
  imageUrl: string
  imageAlt: string
  label?: string
  title: string
  description?: string
  href: string
  aspectRatio?: 'square' | 'portrait' | 'landscape' | 'wide'
  overlayText?: boolean
}

const aspectRatioClasses: Record<string, string> = {
  square: 'aspect-square',
  portrait: 'aspect-[3/4]',
  landscape: 'aspect-[4/3]',
  wide: 'aspect-[16/9]',
}

export function PhotoCard({
  imageUrl,
  imageAlt,
  label,
  title,
  description,
  href,
  aspectRatio = 'landscape',
  overlayText = false,
}: PhotoCardProps) {
  if (overlayText) {
    return (
      <Link
        href={href}
        className="group relative block overflow-hidden rounded-[2px]"
      >
        <div className={`relative ${aspectRatioClasses[aspectRatio]} overflow-hidden`}>
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/80 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-cream">
            {label && (
              <p className="label text-cream opacity-70 mb-2">{label}</p>
            )}
            <h3
              className="font-display leading-[1.2]"
              style={{ fontSize: 'clamp(1.5rem, 2vw, 1.75rem)' }}
            >
              {title}
            </h3>
            {description && (
              <p className="mt-2 text-sm text-cream/80 line-clamp-2">{description}</p>
            )}
            <div className="flex items-center gap-2 mt-4 text-sm font-medium text-cream/90 group-hover:gap-3 transition-all duration-300">
              <span>Explore</span>
              <ArrowRight size={14} />
            </div>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link href={href} className="group block">
      <div className={`relative ${aspectRatioClasses[aspectRatio]} overflow-hidden rounded-[2px] mb-4`}>
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <div>
        {label && <p className="label text-brass mb-2">{label}</p>}
        <h3
          className="font-display text-evergreen leading-[1.2] mb-2 group-hover:text-brass transition-colors duration-300"
          style={{ fontSize: 'clamp(1.25rem, 1.8vw, 1.5rem)' }}
        >
          {title}
        </h3>
        {description && (
          <p className="text-stone text-sm leading-relaxed">{description}</p>
        )}
        <div className="flex items-center gap-2 mt-3 text-sm font-medium text-evergreen group-hover:gap-3 transition-all duration-300">
          <span>Learn more</span>
          <ArrowRight size={14} />
        </div>
      </div>
    </Link>
  )
}
