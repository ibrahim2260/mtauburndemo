import Link from 'next/link'
import { ArrowRight, Heart, Leaf } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function ServicesSection() {
  return (
    <section className="bg-deep-forest section-padding">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Planning a Service */}
          <ScrollReveal>
            <div className="border-t border-sage/20 pt-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center">
                  <Heart size={18} className="text-sage" />
                </div>
                <p className="label text-sage/70">Memorial Services</p>
              </div>
              <h2
                className="font-display text-cream leading-[1.15] mb-6"
                style={{ fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)' }}
              >
                Planning a Service
              </h2>
              <p
                className="text-cream/65 leading-[1.65] mb-6"
                style={{ fontSize: 'clamp(1rem, 1.1vw, 1.125rem)' }}
              >
                Mount Auburn offers a range of burial, cremation, and memorial options within
                one of America&rsquo;s most beautiful landscapes. Our caring staff is available to guide
                families through every step of the process — with the dignity, sensitivity, and
                attention that such moments deserve.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Traditional in-ground burial',
                  'Cremation and columbarium niches',
                  'Chapel and garden ceremony venues',
                  'Green burial options',
                  'Pre-planning and pre-purchase',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-cream/70 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/services"
                className="flex items-center gap-2 text-cream font-medium text-sm hover:text-sage transition-colors duration-300 group"
              >
                Learn about our services <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Support */}
          <ScrollReveal delay={0.15}>
            <div className="border-t border-sage/20 pt-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-brass/10 flex items-center justify-center">
                  <Leaf size={18} className="text-brass" />
                </div>
                <p className="label text-brass/70">Membership &amp; Giving</p>
              </div>
              <h2
                className="font-display text-cream leading-[1.15] mb-6"
                style={{ fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)' }}
              >
                Support Our Mission
              </h2>
              <p
                className="text-cream/65 leading-[1.65] mb-6"
                style={{ fontSize: 'clamp(1rem, 1.1vw, 1.125rem)' }}
              >
                Friends of Mount Auburn members make it possible to preserve and enhance this
                extraordinary landscape for future generations. Your support funds horticulture,
                conservation, public programming, and the care of the grounds all of us share.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { tier: 'Friend', price: '$50', desc: 'Annual membership with discounts and newsletter' },
                  { tier: 'Patron', price: '$250', desc: 'Enhanced benefits + invitations to member events' },
                ].map(tier => (
                  <div
                    key={tier.tier}
                    className="bg-white/5 border border-white/10 rounded-[3px] p-4"
                  >
                    <div className="flex items-baseline justify-between mb-2">
                      <span className="text-cream font-medium text-sm">{tier.tier}</span>
                      <span className="text-brass font-display text-lg">{tier.price}</span>
                    </div>
                    <p className="text-cream/50 text-xs leading-relaxed">{tier.desc}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/support"
                  className="flex items-center gap-2 bg-brass text-cream font-medium text-sm px-5 py-3 rounded-[3px] hover:bg-[#8a6a2e] transition-colors duration-300"
                >
                  Become a Member <ArrowRight size={14} />
                </Link>
                <Link
                  href="/support#donate"
                  className="flex items-center gap-2 border border-cream/30 text-cream font-medium text-sm px-5 py-3 rounded-[3px] hover:border-cream/70 transition-colors duration-300"
                >
                  Make a Gift
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
