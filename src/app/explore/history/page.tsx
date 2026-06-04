import type { Metadata } from 'next'
import Image from 'next/image'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'History',
  description:
    'The history of Mount Auburn Cemetery — America\'s first garden cemetery, founded in 1831 in Cambridge, Massachusetts.',
}

const timeline = [
  {
    year: '1831',
    title: 'Founding of Mount Auburn',
    body: 'The Massachusetts Horticultural Society, led by physician and botanist Jacob Bigelow, consecrates 72 acres in Cambridge as America\'s first designed garden cemetery. The opening ceremony draws thousands and launches a national movement.',
  },
  {
    year: '1835',
    title: 'Washington Tower Constructed',
    body: 'The landmark Egyptian Revival Washington Tower is completed, offering panoramic views of Cambridge, Boston, and the surrounding landscape. It remains one of the most recognizable features of the cemetery.',
  },
  {
    year: '1840s',
    title: 'Landscape Development',
    body: 'Under the direction of Bigelow and the Cemetery Corporation, the grounds expand dramatically. Ponds are excavated, avenues are laid, and the botanical collection begins in earnest — establishing the dual identity as memorial ground and living arboretum.',
  },
  {
    year: '1861',
    title: 'Civil War Era',
    body: 'Mount Auburn becomes a site of national mourning during the Civil War, with many prominent Union figures interred here. The cemetery\'s role as a place of civic reflection and national memory deepens.',
  },
  {
    year: '1900s',
    title: 'Continued Expansion',
    body: 'The grounds expand to their current 175 acres over the early twentieth century, with continued additions to the botanical collection, new monument areas, and evolving landscape management practices.',
  },
  {
    year: '1975',
    title: 'National Historic Landmark',
    body: 'Mount Auburn Cemetery is designated a National Historic Landmark by the United States Department of the Interior, recognizing its unparalleled significance in American cultural, horticultural, and landscape history.',
  },
  {
    year: '2003',
    title: 'Arboretum Accreditation',
    body: 'The Cemetery receives accreditation from the American Public Gardens Association as a Level I Arboretum — the highest designation — for the quality and documentation of its botanical collection.',
  },
  {
    year: 'Today',
    title: 'A Living Landmark',
    body: 'Mount Auburn continues to serve as an active cemetery, a public garden, a center for cultural programming, and a beloved landscape open to all. Over 312,000 visitors come annually to walk its paths, observe the seasons, and connect with its extraordinary history.',
  },
]

export default function HistoryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=2400&q=80"
          alt="Historic architecture at Mount Auburn Cemetery"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/75 via-deep-forest/20 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-16 px-6 lg:px-16 max-w-[1440px] mx-auto w-full">
          <p className="label text-cream/70 mb-4">Explore / History</p>
          <h1
            className="font-display text-cream leading-[1.1]"
            style={{ fontSize: 'clamp(3rem, 5vw, 4rem)' }}
          >
            History of Mount Auburn
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="max-w-3xl">
            <ScrollReveal>
              <SectionLabel className="mb-4">Founded 1831</SectionLabel>
              <h2
                className="font-display text-evergreen leading-[1.15] mb-6"
                style={{ fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)' }}
              >
                America&rsquo;s First Garden Cemetery
              </h2>
              <p className="text-stone leading-[1.65] mb-6" style={{ fontSize: 'clamp(1rem, 1.1vw, 1.125rem)' }}>
                Before Mount Auburn, the dead in American cities were buried in small, overcrowded urban
                churchyards — unsanitary, undignified, and increasingly inadequate for growing populations.
                The radical vision behind Mount Auburn was to create a place worthy of the dead and restorative
                for the living: a designed landscape of natural beauty, botanical richness, and quiet contemplation.
              </p>
              <p className="text-stone leading-[1.65]" style={{ fontSize: 'clamp(1rem, 1.1vw, 1.125rem)' }}>
                The garden cemetery movement that Mount Auburn launched spread rapidly across the United States
                and to Europe, influencing not only cemetery design but the broader development of public parks,
                landscape architecture, and urban planning. Frederick Law Olmsted, who would later design Central
                Park and the Emerald Necklace, cited Mount Auburn as a direct inspiration.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-ivory py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <ScrollReveal className="mb-16">
            <SectionLabel className="mb-4">Timeline</SectionLabel>
            <h2
              className="font-display text-evergreen leading-[1.1]"
              style={{ fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)' }}
            >
              Key Milestones
            </h2>
          </ScrollReveal>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[88px] lg:left-[120px] top-0 bottom-0 w-px bg-stone/15 hidden sm:block" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <ScrollReveal key={item.year} delay={0.05 * i}>
                  <div className="flex gap-8 sm:gap-12 items-start">
                    <div className="flex-shrink-0 text-right" style={{ minWidth: '72px' }}>
                      <span className="font-display text-brass text-xl lg:text-2xl leading-none">{item.year}</span>
                    </div>
                    <div className="relative flex-1 pb-2">
                      {/* dot */}
                      <div className="absolute -left-[1.65rem] top-2 w-3 h-3 rounded-full bg-evergreen border-2 border-cream hidden sm:block" />
                      <h3 className="font-display text-evergreen leading-[1.2] mb-3" style={{ fontSize: 'clamp(1.125rem, 1.5vw, 1.3125rem)' }}>
                        {item.title}
                      </h3>
                      <p className="text-stone text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-evergreen py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="font-display text-cream/80 leading-[1.4] italic mb-6" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
              &ldquo;The contemplation of so much beauty in nature, even in the most trifling objects, is itself a source of enjoyment which can never be exhausted.&rdquo;
            </p>
            <p className="label text-sage/70">Jacob Bigelow, Founder, 1831</p>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
