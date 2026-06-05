import Image from 'next/image'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function MissionSection() {
  const credentials = [
    'National Historic Landmark',
    'Accredited Arboretum',
    '175 Acres',
    'Founded 1831',
  ]

  return (
    <section className="bg-cream overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Text */}
          <div className="px-6 lg:px-16 py-20 lg:py-28">
            <ScrollReveal>
              <SectionLabel className="mb-5">Since 1831</SectionLabel>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p
                className="font-display text-evergreen leading-[1.15] mb-8"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)' }}
              >
                More than a cemetery&nbsp;&mdash; a living landscape where history, nature, and memory converge.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p
                className="text-stone leading-[1.65] mb-10"
                style={{ fontSize: 'clamp(1.0625rem, 1.2vw, 1.1875rem)' }}
              >
                Mount Auburn holds a singular place in American life. As the nation&rsquo;s first garden cemetery,
                it transformed how Americans think about death, grief, and the natural world. Today, it is
                simultaneously a National Historic Landmark, an accredited arboretum, an active memorial
                destination, and a beloved landscape open to all. Over 100,000 individuals rest here, among
                them some of the most influential figures in American history, arts, and science.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p
                className="text-stone leading-[1.65] mb-10"
                style={{ fontSize: 'clamp(1.0625rem, 1.2vw, 1.1875rem)' }}
              >
                The Cemetery&rsquo;s 175 acres contain more than 5,000 species and cultivars of woody plants, making
                it one of the most botanically rich landscapes in New England. Each season brings a new
                character to the grounds — and each visit, whether for remembrance, exploration, or simply
                the restorative power of a designed landscape, is a singular experience.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="flex flex-wrap gap-3">
                {credentials.map(c => (
                  <span
                    key={c}
                    className="text-xs font-medium uppercase tracking-widest px-4 py-2 border border-sage/40 text-stone rounded-[2px]"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Image */}
          <ScrollReveal delay={0.15} className="relative lg:h-full min-h-[480px] lg:min-h-[700px]">
            <div className="relative h-full w-full">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80"
                alt="Botanical garden landscape at Mount Auburn Cemetery"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
