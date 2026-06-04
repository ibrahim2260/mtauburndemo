import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock, Map } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Self-Guided Tours',
  description:
    'Explore Mount Auburn Cemetery on your own with six themed self-guided walking tours — from birding routes to architectural and historical discoveries.',
}

const tours = [
  {
    id: 'birds',
    title: 'Birds of Mount Auburn',
    duration: '1.5–2 hours',
    distance: '1.2 miles',
    difficulty: 'Easy',
    description:
      'Follow the route favored by generations of birders through Consecration Dell, along Willow Pond, and past the shrub borders beloved by migrating warblers. Best in May for peak migration.',
    highlights: ['Consecration Dell', 'Willow Pond', 'Auburn Lake shoreline', 'Shrub borders near Magnolia Ave'],
    imageUrl: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'notable',
    title: 'Notable Residents',
    duration: '1.5 hours',
    distance: '0.9 miles',
    difficulty: 'Easy',
    description:
      'Visit the monuments of Longfellow, Eddy, Fuller, Homer, and more on this curated walk through 200 years of American history, letters, and achievement.',
    highlights: ["Mary Baker Eddy's lakeside monument", 'Longfellow family plot', 'Washington Tower', 'Bulfinch and Sumner memorials'],
    imageUrl: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'landscape',
    title: 'Landscape Architecture',
    duration: '2 hours',
    distance: '1.5 miles',
    difficulty: 'Moderate',
    description:
      'Explore the designed landscape of Mount Auburn as a work of art — the picturesque planning principles, the Romantic-era planting design, and the evolution of the grounds from 1831 to today.',
    highlights: ['Washington Tower views', 'Dell Avenue', 'Auburn Lake Vista', 'Historic gatehouse'],
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'arboretum',
    title: 'Arboretum Highlights',
    duration: '1.5 hours',
    distance: '1.1 miles',
    difficulty: 'Easy',
    description:
      'A curated walk through the most spectacular specimens in the arboretum collection — the American Yellowwood in Consecration Dell, the Magnolia collection, and the native plant border.',
    highlights: ['Consecration Dell yellowwood', 'Magnolia collection', 'Birch Garden', 'Native plant border'],
    imageUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'bloom',
    title: "What's in Bloom",
    duration: '1 hour',
    distance: '0.8 miles',
    difficulty: 'Easy',
    description:
      'A seasonal walk updated weekly to highlight the current peak bloom in the collection. In May, follow the cherry blossoms; in June, the mountain laurel and snowbells; in October, the autumn foliage.',
    highlights: ['Current seasonal highlights', 'Updated weekly', 'Family-friendly route', 'Suitable for all mobility levels'],
    imageUrl: 'https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'photography',
    title: 'Photographer\'s Tour',
    duration: '2+ hours',
    distance: 'Variable',
    difficulty: 'Easy–Moderate',
    description:
      'The most photogenic spots in the cemetery — dawn and dusk light on Halcyon Lake, the Egyptian Revival chapel, the Washington Tower hilltop, and seasonal bloom areas.',
    highlights: ['Halcyon Lake reflections', 'Washington Tower', 'Egyptian Revival Chapel', 'Seasonal bloom vistas'],
    imageUrl: 'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?auto=format&fit=crop&w=1200&q=80',
  },
]

export default function ToursPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=2400&q=80"
          alt="Path through Mount Auburn Cemetery"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/75 via-transparent to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-16 px-6 lg:px-16 max-w-[1440px] mx-auto w-full">
          <p className="label text-cream/70 mb-4">Explore / Tours</p>
          <h1 className="font-display text-cream leading-[1.1]" style={{ fontSize: 'clamp(3rem, 5vw, 4rem)' }}>
            Self-Guided Tours
          </h1>
        </div>
      </section>

      {/* Intro + map CTA */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <ScrollReveal>
              <p className="text-stone max-w-2xl leading-[1.65]" style={{ fontSize: 'clamp(1.0625rem, 1.2vw, 1.1875rem)' }}>
                Mount Auburn offers six themed self-guided walking routes through the grounds. Each route is
                available as a printed guide at the Welcome Center and via the free Mount Auburn mobile app.
                All routes begin at the main entrance.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#"
                  className="flex items-center gap-2 bg-evergreen text-cream px-5 py-3 rounded-[3px] text-sm font-medium hover:bg-deep-forest transition-colors"
                >
                  <Map size={15} />
                  Download Map (PDF)
                </a>
                <Link
                  href="/about/contact"
                  className="flex items-center gap-2 border border-stone/30 text-ink px-5 py-3 rounded-[3px] text-sm font-medium hover:border-evergreen transition-colors"
                >
                  Request Printed Guide
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Tour cards */}
      <section className="bg-ivory section-padding">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tours.map((tour, i) => (
              <ScrollReveal key={tour.id} delay={0.05 * (i % 2)}>
                <div className="group bg-cream rounded-[3px] overflow-hidden border border-stone/10 hover:border-sage/30 hover:shadow-md transition-all duration-500 flex flex-col sm:flex-row">
                  <div className="relative w-full sm:w-48 flex-shrink-0 aspect-[4/3] sm:aspect-auto overflow-hidden">
                    <Image
                      src={tour.imageUrl}
                      alt={tour.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 200px"
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <div className="flex items-center gap-1.5 text-stone text-xs">
                        <Clock size={11} /> {tour.duration}
                      </div>
                      <span className="text-stone/40 text-xs">·</span>
                      <span className="text-stone text-xs">{tour.distance}</span>
                      <span className="text-stone/40 text-xs">·</span>
                      <span className={`text-xs font-medium ${tour.difficulty === 'Easy' ? 'text-sage' : 'text-brass'}`}>
                        {tour.difficulty}
                      </span>
                    </div>
                    <h3 className="font-display text-evergreen leading-[1.2] mb-2" style={{ fontSize: '1.25rem' }}>
                      {tour.title}
                    </h3>
                    <p className="text-stone text-sm leading-relaxed mb-3">{tour.description}</p>
                    <ul className="space-y-1">
                      {tour.highlights.slice(0, 3).map(h => (
                        <li key={h} className="text-xs text-stone/70 flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-sage flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
