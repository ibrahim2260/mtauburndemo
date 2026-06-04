import type { Metadata } from 'next'
import Image from 'next/image'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { PhotoCard } from '@/components/ui/PhotoCard'

export const metadata: Metadata = {
  title: 'Explore',
  description:
    'Explore the history, arboretum, notable residents, tours, and ecology of Mount Auburn Cemetery.',
}

const exploreCards = [
  {
    href: '/explore/history',
    imageUrl: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Historic architecture at Mount Auburn Cemetery',
    label: 'History',
    title: 'History of Mount Auburn',
    description:
      "Founded in 1831, Mount Auburn launched the garden cemetery movement that transformed how Americans relate to death, landscape, and memory.",
  },
  {
    href: '/explore/arboretum',
    imageUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Arboretum tree canopy at Mount Auburn',
    label: 'Arboretum',
    title: 'The Accredited Arboretum',
    description:
      'Over 5,000 woody plant specimens across 175 acres — one of the most extraordinary botanical collections in New England.',
  },
  {
    href: '/explore/notable-residents',
    imageUrl: 'https://images.unsplash.com/photo-1568092562784-15d1d0c68e5c?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Stone memorial at Mount Auburn Cemetery',
    label: 'History',
    title: 'Notable Residents',
    description:
      'Longfellow, Buckminster Fuller, Winslow Homer, Mary Baker Eddy — remarkable individuals who shaped American culture.',
  },
  {
    href: '/explore/tours',
    imageUrl: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Wooded path through Mount Auburn',
    label: 'Tours',
    title: 'Self-Guided Tours',
    description:
      'Six themed routes through the landscape — from birding walks to architectural and historical discoveries.',
  },
  {
    href: '/explore/bloom',
    imageUrl: 'https://images.unsplash.com/photo-1490750967868-88df5691cc29?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Spring blossoms in the cemetery garden',
    label: 'Horticulture',
    title: "What's in Bloom",
    description:
      'Weekly updates on the arboretum\'s seasonal botanical highlights — from the first spring magnolias to the last autumn maples.',
  },
  {
    href: '/explore/wildlife',
    imageUrl: 'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Lake reflection at Mount Auburn Cemetery',
    label: 'Ecology',
    title: 'Wildlife & Ecology',
    description:
      "A celebrated birding destination and ecological sanctuary — home to hundreds of migratory species in the heart of Cambridge.",
  },
]

export default function ExplorePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[380px]">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2400&q=80"
          alt="Mount Auburn Cemetery landscape"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/70 via-deep-forest/20 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-14 px-6 lg:px-16 max-w-[1440px] mx-auto w-full">
          <p className="label text-cream/70 mb-4">Discover the Landscape</p>
          <h1
            className="font-display text-cream leading-[1.1]"
            style={{ fontSize: 'clamp(3rem, 5vw, 4rem)' }}
          >
            Explore
          </h1>
        </div>
      </section>

      {/* Cards */}
      <section className="bg-cream section-padding">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <ScrollReveal className="mb-12">
            <SectionLabel className="mb-4">The Grounds</SectionLabel>
            <p
              className="text-stone max-w-2xl leading-[1.65]"
              style={{ fontSize: 'clamp(1.0625rem, 1.2vw, 1.1875rem)' }}
            >
              175 acres of designed landscape, botanical garden, active memorial destination, and
              historic sanctuary — each section of Mount Auburn offers a distinct experience.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {exploreCards.map((card, i) => (
              <ScrollReveal key={card.href} delay={0.1 + (i % 3) * 0.1}>
                <PhotoCard {...card} aspectRatio="landscape" />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
