import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function ExploreSection() {
  return (
    <section className="bg-ivory section-padding">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <ScrollReveal className="mb-12">
          <SectionLabel className="mb-4">The Landscape</SectionLabel>
          <h2
            className="font-display text-evergreen leading-[1.1]"
            style={{ fontSize: 'clamp(2.25rem, 3.5vw, 2.75rem)' }}
          >
            Explore Mount Auburn
          </h2>
        </ScrollReveal>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 lg:gap-4">
          {/* Large panel — 60% */}
          <ScrollReveal className="lg:col-span-3" delay={0.1}>
            <Link href="/explore/arboretum" className="group relative block rounded-[3px] overflow-hidden">
              <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[600px]">
                <Image
                  src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80"
                  alt="Tree canopy in Mount Auburn's historic arboretum"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  className="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/85 via-deep-forest/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-cream">
                  <p className="label text-cream/60 mb-3">Arboretum</p>
                  <h3
                    className="font-display leading-[1.2] mb-3"
                    style={{ fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)' }}
                  >
                    The Historic Arboretum
                  </h3>
                  <p className="text-cream/75 text-sm leading-relaxed max-w-sm mb-4">
                    Over 5,000 species and cultivars across 175 acres — one of the most botanically
                    rich landscapes in New England, with specimens dating to the 1840s.
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-cream group-hover:gap-4 transition-all duration-300">
                    Explore the collection <ArrowRight size={15} />
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>

          {/* Two stacked panels — 40% */}
          <div className="lg:col-span-2 grid grid-rows-2 gap-3 lg:gap-4">
            <ScrollReveal delay={0.2}>
              <Link href="/explore/notable-residents" className="group relative block rounded-[3px] overflow-hidden h-full">
                <div className="relative h-64 lg:h-full min-h-[240px]">
                  <Image
                    src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=1200&q=80"
                    alt="Historic stone monuments at Mount Auburn Cemetery"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    className="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/85 via-deep-forest/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-cream">
                    <p className="label text-cream/60 mb-2">History</p>
                    <h3
                      className="font-display leading-[1.2] mb-2"
                      style={{ fontSize: 'clamp(1.25rem, 2vw, 1.625rem)' }}
                    >
                      Notable Residents
                    </h3>
                    <p className="text-cream/70 text-sm leading-relaxed">
                      Longfellow, Fuller, Eddy, Homer — the remarkable individuals who shaped American culture.
                    </p>
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Link href="/explore/tours" className="group relative block rounded-[3px] overflow-hidden h-full">
                <div className="relative h-64 lg:h-full min-h-[240px]">
                  <Image
                    src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80"
                    alt="Path through Mount Auburn Cemetery forest"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    className="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/85 via-deep-forest/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-cream">
                    <p className="label text-cream/60 mb-2">Tours</p>
                    <h3
                      className="font-display leading-[1.2] mb-2"
                      style={{ fontSize: 'clamp(1.25rem, 2vw, 1.625rem)' }}
                    >
                      Self-Guided Tours
                    </h3>
                    <p className="text-cream/70 text-sm leading-relaxed">
                      Six themed routes through the landscape — from birding walks to architectural discoveries.
                    </p>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </div>

        {/* Extra cards row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {[
            {
              href: '/explore/history',
              image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=80',
              label: 'History',
              title: 'The Garden Cemetery Movement',
              desc: 'How Mount Auburn revolutionized American attitudes toward death, landscape, and memory.',
            },
            {
              href: '/explore/bloom',
              image: 'https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?auto=format&fit=crop&w=800&q=80',
              label: 'Horticulture',
              title: "What's in Bloom",
              desc: 'Weekly updates on the arboretum\'s seasonal highlights, from spring magnolias to autumn maples.',
            },
            {
              href: '/explore/wildlife',
              image: 'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?auto=format&fit=crop&w=800&q=80',
              label: 'Ecology',
              title: 'Wildlife & Ecology',
              desc: 'A celebrated birding destination and ecological sanctuary in the heart of Cambridge.',
            },
          ].map((card, i) => (
            <ScrollReveal key={card.href} delay={0.1 + i * 0.1}>
              <Link href={card.href} className="group relative block rounded-[3px] overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-cream">
                    <p className="label text-cream/60 mb-1">{card.label}</p>
                    <h4 className="font-display text-lg leading-tight mb-1">{card.title}</h4>
                    <p className="text-cream/70 text-xs leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
