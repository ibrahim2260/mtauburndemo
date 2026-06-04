import type { Metadata } from 'next'
import Image from 'next/image'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'The Arboretum',
  description:
    'Mount Auburn Cemetery is an accredited arboretum with over 5,000 woody plant specimens across 175 acres.',
}

const collections = [
  { name: 'Oak Collection', count: '60+ species', desc: 'One of the largest oak collections in New England, including rare Asian and North American specimens.' },
  { name: 'Magnolia Collection', count: '80+ taxa', desc: 'Spectacular spring blooms ranging from early Magnolia stellata to late-season Magnolia grandiflora.' },
  { name: 'Conifer Collection', count: '150+ specimens', desc: 'A remarkable diversity of evergreens including rare dwarf cultivars, weeping forms, and species from Asia and the Americas.' },
  { name: 'Flowering Cherry', count: '30+ varieties', desc: 'Beloved for spectacular spring bloom, including rare Prunus serrulata cultivars not commonly found in New England.' },
  { name: 'Native Plants', count: '400+ taxa', desc: 'An exceptional collection of northeastern native species — essential habitat for birds, pollinators, and other wildlife.' },
  { name: 'Pond & Wetland Gardens', count: '3 water features', desc: 'Willow Pond, Halcyon Lake, and Auburn Lake support diverse aquatic and riparian plant communities.' },
]

export default function ArboretumPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px]">
        <Image
          src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2400&q=80"
          alt="Forest canopy in Mount Auburn's arboretum"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 60%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/75 via-transparent to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-16 px-6 lg:px-16 max-w-[1440px] mx-auto w-full">
          <p className="label text-cream/70 mb-4">Explore / Arboretum</p>
          <h1 className="font-display text-cream leading-[1.1]" style={{ fontSize: 'clamp(3rem, 5vw, 4rem)' }}>
            The Accredited Arboretum
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-cream section-padding">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <ScrollReveal>
                <SectionLabel className="mb-4">Living Collection</SectionLabel>
                <h2 className="font-display text-evergreen leading-[1.15] mb-6" style={{ fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)' }}>
                  A Botanical Garden Within a Historic Landscape
                </h2>
                <p className="text-stone leading-[1.65] mb-6" style={{ fontSize: 'clamp(1rem, 1.1vw, 1.125rem)' }}>
                  Mount Auburn holds accreditation from the American Public Gardens Association as a Level I
                  Arboretum — the field&rsquo;s highest standard. The collection encompasses over 5,000 accessioned
                  woody plants representing more than 1,300 species and cultivars, many of them rare or uncommon
                  in cultivation.
                </p>
                <p className="text-stone leading-[1.65]" style={{ fontSize: 'clamp(1rem, 1.1vw, 1.125rem)' }}>
                  The botanical collection has been growing since the 1830s, and today includes significant
                  holdings in oaks, maples, conifers, cherries, magnolias, and native New England flora. The
                  collection is fully documented, labeled throughout the grounds, and managed according to
                  the highest professional standards of horticultural science.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="grid grid-cols-3 gap-6 mt-10">
                  {[
                    { stat: '5,000+', label: 'Woody plants' },
                    { stat: '1,300+', label: 'Species & cultivars' },
                    { stat: '175', label: 'Acres' },
                  ].map(s => (
                    <div key={s.stat}>
                      <p className="font-display text-evergreen text-3xl lg:text-4xl">{s.stat}</p>
                      <p className="text-stone text-sm mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.15}>
              <div className="relative aspect-[4/5] rounded-[3px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80"
                  alt="Botanical garden at Mount Auburn Cemetery"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="bg-ivory section-padding">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <ScrollReveal className="mb-12">
            <SectionLabel className="mb-4">Collection Highlights</SectionLabel>
            <h2 className="font-display text-evergreen leading-[1.1]" style={{ fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)' }}>
              What to Discover
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.map((c, i) => (
              <ScrollReveal key={c.name} delay={0.05 * i}>
                <div className="bg-cream border border-stone/10 rounded-[3px] p-7 hover:border-sage/40 transition-colors duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display text-evergreen text-lg">{c.name}</h3>
                    <span className="label text-brass text-xs">{c.count}</span>
                  </div>
                  <p className="text-stone text-sm leading-relaxed">{c.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
