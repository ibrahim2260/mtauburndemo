import Image from 'next/image'
import { SectionLabel } from './SectionLabel'

interface EditorialSplitProps {
  label?: string
  heading: string
  body: string
  imageUrl: string
  imageAlt: string
  imageLeft?: boolean
  chips?: string[]
  children?: React.ReactNode
}

export function EditorialSplit({
  label,
  heading,
  body,
  imageUrl,
  imageAlt,
  imageLeft = false,
  chips,
  children,
}: EditorialSplitProps) {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch ${
        imageLeft ? '' : ''
      }`}
    >
      {/* Text side */}
      <div
        className={`flex flex-col justify-center px-8 py-16 lg:px-16 lg:py-24 ${
          imageLeft ? 'lg:order-2' : 'lg:order-1'
        }`}
      >
        {label && <SectionLabel className="mb-4">{label}</SectionLabel>}
        <h2
          className="font-display text-evergreen leading-[1.15] mb-6"
          style={{ fontSize: 'clamp(2.25rem, 3.5vw, 2.75rem)' }}
        >
          {heading}
        </h2>
        <p
          className="text-stone leading-[1.65] mb-8"
          style={{ fontSize: 'clamp(1.0625rem, 1.2vw, 1.1875rem)' }}
        >
          {body}
        </p>
        {chips && (
          <div className="flex flex-wrap gap-3 mb-8">
            {chips.map(chip => (
              <span
                key={chip}
                className="text-xs font-medium uppercase tracking-widest px-4 py-2 border border-sage/40 text-stone rounded-[2px]"
              >
                {chip}
              </span>
            ))}
          </div>
        )}
        {children}
      </div>

      {/* Image side */}
      <div
        className={`relative min-h-[400px] lg:min-h-[600px] ${
          imageLeft ? 'lg:order-1' : 'lg:order-2'
        }`}
      >
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  )
}
