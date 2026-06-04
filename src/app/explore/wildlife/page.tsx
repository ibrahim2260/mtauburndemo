import type { Metadata } from 'next'
import Image from 'next/image'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Wildlife & Ecology',
  description:
    'Mount Auburn Cemetery is a celebrated birding destination and ecological sanctuary in the heart of Cambridge, Massachusetts.',
}

const seasons = [
  {
    season: 'Spring (April–May)',
    description: 'Peak migration season — Mount Auburn is one of the top birding spots in New England, with dozens of warbler species and rare visitors documented each May.',
    species: ['Blackpoll Warbler', 'Cape May Warbler', 'Hermit Thrush', 'Scarlet Tanager', 'Baltimore Oriole', 'Eastern Towhee'],
  },
  {
    season: 'Summer (June–August)',
    description: 'Breeding birds are active throughout the grounds. The ponds support nesting Wood Ducks, and owls can be heard at dusk.',
    species: ['Wood Duck', 'Great Blue Heron', 'Eastern Wood-Pewee', 'Red-tailed Hawk', 'Great Horned Owl', 'Cedar Waxwing'],
  },
  {
    season: 'Autumn (September–November)',
    description: 'Fall migration brings raptors, sparrows, and late-season warblers. The changing foliage provides spectacular backdrop for wildlife observation.',
    species: ['Sharp-shinned Hawk', 'Cooper\'s Hawk', 'American Kestrel', 'White-throated Sparrow', 'Yellow-rumped Warbler', 'Ruby-crowned Kinglet'],
  },
  {
    season: 'Winter (December–March)',
    description: 'The quietest season for birds, but resident species are easily observed in the bare trees. Waterfowl linger on the unfrozen pond edges.',
    species: ['Tufted Titmouse', 'White-breasted Nuthatch', 'Downy Woodpecker', 'Dark-eyed Junco', 'American Tree Sparrow', 'Common Redpoll'],
  },
]

export default function WildlifePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1506260408121-e353d10b87c7?auto=format&fit=crop&w=2400&q=80"
          alt="Lake reflection at Mount Auburn Cemetery"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 50%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/70 via-transparent to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-16 px-6 lg:px-16 max-w-[1440px] mx-auto w-full">
          <p className="label text-cream/70 mb-4">Explore / Ecology</p>
          <h1 className="font-display text-cream leading-[1.1]" style={{ fontSize: 'clamp(3rem, 5vw, 4rem)' }}>
            Wildlife &amp; Ecology
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-cream section-padding">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <ScrollReveal>
                <SectionLabel className="mb-4">Bird Sanctuary</SectionLabel>
                <h2 className="font-display text-evergreen leading-[1.15] mb-6" style={{ fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)' }}>
                  A Premier Birding Destination
                </h2>
                <p className="text-stone leading-[1.65] mb-6" style={{ fontSize: 'clamp(1rem, 1.1vw, 1.125rem)' }}>
                  Mount Auburn Cemetery has been a celebrated destination for birders since the mid-nineteenth
                  century. Its diverse habitats — mature deciduous woodland, shrub borders, open lawn, ponds, and
                  wetland margins — create ideal conditions for migratory songbirds navigating the Atlantic Flyway.
                </p>
                <p className="text-stone leading-[1.65] mb-6" style={{ fontSize: 'clamp(1rem, 1.1vw, 1.125rem)' }}>
                  Over 220 bird species have been recorded on the grounds. Each May, rare warblers, thrushes,
                  flycatchers, and raptors stop to rest and feed — drawing birders from across New England and
                  beyond. The citizen science program, Friends of Mount Auburn, and the Cornell Lab of Ornithology
                  collaborate on ongoing monitoring of bird populations.
                </p>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.15}>
              <div className="space-y-4">
                {[
                  { stat: '220+', label: 'Species recorded' },
                  { stat: '100+', label: 'Migratory species annually' },
                  { stat: '40+', label: 'Warbler species in May' },
                  { stat: '3', label: 'Freshwater habitats' },
                ].map(s => (
                  <div key={s.stat} className="flex items-center gap-6 py-4 border-b border-stone/15">
                    <span className="font-display text-evergreen text-3xl w-24 flex-shrink-0">{s.stat}</span>
                    <span className="text-stone">{s.label}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Seasonal guide */}
      <section className="bg-ivory section-padding">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <ScrollReveal className="mb-12">
            <SectionLabel className="mb-4">Seasonal Guide</SectionLabel>
            <h2 className="font-display text-evergreen leading-[1.1]" style={{ fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)' }}>
              What to See Each Season
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {seasons.map((s, i) => (
              <ScrollReveal key={s.season} delay={0.05 * i}>
                <div className="bg-cream rounded-[3px] p-8 border border-stone/10">
                  <h3 className="font-display text-evergreen mb-3" style={{ fontSize: '1.25rem' }}>{s.season}</h3>
                  <p className="text-stone text-sm leading-relaxed mb-5">{s.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.species.map(bird => (
                      <span key={bird} className="text-xs bg-sage/10 text-evergreen px-3 py-1 rounded-full">
                        {bird}
                      </span>
                    ))}
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
