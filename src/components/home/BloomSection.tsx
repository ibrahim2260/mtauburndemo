import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Leaf } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { bloomItems } from '@/lib/data/bloom'

export function BloomSection() {
  const featured = bloomItems.slice(0, 3)

  return (
    <section className="bg-evergreen section-padding">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-6">
          <div>
            <ScrollReveal>
              <SectionLabel light className="mb-4 text-sage/80">Horticulture</SectionLabel>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2
                className="font-display text-cream leading-[1.1]"
                style={{ fontSize: 'clamp(2.25rem, 3.5vw, 2.75rem)' }}
              >
                What&rsquo;s in Bloom
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="flex items-center gap-2 mt-3">
                <Leaf size={13} className="text-sage" />
                <span className="text-sage/80 text-xs font-medium uppercase tracking-widest">
                  Updated weekly &mdash; June 2026
                </span>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.2}>
            <Link
              href="/explore/bloom"
              className="flex items-center gap-2 text-sage hover:text-cream transition-colors duration-300 text-sm font-medium"
            >
              View all seasonal highlights <ArrowRight size={15} />
            </Link>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((item, i) => (
            <ScrollReveal key={item.id} delay={0.1 + i * 0.12}>
              <div className="bg-white/5 rounded-[3px] overflow-hidden border border-white/10 hover:border-sage/30 transition-colors duration-300 group">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.imageUrl || ''}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Content */}
                <div className="p-6">
                  <p className="label text-sage/70 mb-2">{item.location}</p>
                  <h3
                    className="font-display text-cream leading-[1.2] mb-1"
                    style={{ fontSize: 'clamp(1.25rem, 1.8vw, 1.5rem)' }}
                  >
                    {item.name}
                  </h3>
                  <p className="text-sage/60 text-sm italic mb-4">{item.latinName}</p>
                  <p className="text-cream/60 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
