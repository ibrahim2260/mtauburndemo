import type { Metadata } from 'next'
import Image from 'next/image'
import { Leaf } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { bloomItems } from '@/lib/data/bloom'

export const metadata: Metadata = {
  title: "What's in Bloom",
  description:
    "Weekly updates on Mount Auburn Cemetery's seasonal botanical highlights — from spring cherry blossoms to autumn maples.",
}

export default function BloomPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1490750967868-88df5691cc29?auto=format&fit=crop&w=2400&q=80"
          alt="Spring blossoms in Mount Auburn's arboretum"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/70 via-transparent to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-16 px-6 lg:px-16 max-w-[1440px] mx-auto w-full">
          <p className="label text-cream/70 mb-4">Explore / Horticulture</p>
          <h1 className="font-display text-cream leading-[1.1]" style={{ fontSize: 'clamp(3rem, 5vw, 4rem)' }}>
            What&rsquo;s in Bloom
          </h1>
        </div>
      </section>

      {/* Header */}
      <section className="bg-cream py-12 lg:py-16 border-b border-stone/15">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-3">
                <Leaf size={15} className="text-sage" />
                <span className="label text-sage">Updated weekly — June 2026</span>
              </div>
              <p className="text-stone max-w-2xl leading-[1.65]" style={{ fontSize: 'clamp(1rem, 1.1vw, 1.125rem)' }}>
                Each week, our horticultural staff selects the current seasonal highlights from the arboretum
                collection. Visit the locations listed below to experience each plant at its peak.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Bloom items */}
      <section className="bg-ivory section-padding">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bloomItems.map((item, i) => (
              <ScrollReveal key={item.id} delay={0.05 * (i % 3)}>
                <article className="group bg-cream rounded-[3px] overflow-hidden border border-stone/10 hover:border-sage/30 hover:shadow-md transition-all duration-500">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.imageUrl ?? ''}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-display text-evergreen leading-[1.2]" style={{ fontSize: '1.3125rem' }}>
                          {item.name}
                        </h3>
                        <p className="text-stone/70 text-sm italic">{item.latinName}</p>
                      </div>
                      <span className="label text-brass text-[10px] mt-1">{item.season}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <Leaf size={12} className="text-sage" />
                      <span className="text-stone text-xs">{item.location}</span>
                    </div>
                    <p className="text-stone text-sm leading-relaxed">{item.description}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
