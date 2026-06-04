import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Check, Heart } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Support Mount Auburn',
  description:
    'Support Mount Auburn Cemetery through Friends membership, annual giving, or a special gift. Your generosity preserves this extraordinary landscape for future generations.',
}

const membershipTiers = [
  {
    id: 'friend',
    name: 'Friend',
    price: 50,
    benefits: [
      'Unlimited free admission to ticketed programs (up to 2 per year)',
      'Members-only newsletter',
      '10% discount at the cemetery bookstore',
      'Early registration for popular events',
      'Annual impact report',
    ],
  },
  {
    id: 'supporter',
    name: 'Supporter',
    price: 125,
    isPopular: true,
    benefits: [
      'All Friend benefits',
      'Unlimited free admission to ticketed programs',
      'Invitation to annual Members\' Spring Walk',
      'Behind-the-scenes horticulture tour',
      'Recognition in annual report',
    ],
  },
  {
    id: 'patron',
    name: 'Patron',
    price: 250,
    benefits: [
      'All Supporter benefits',
      'Invitation to annual Leadership Dinner',
      'Private guided tour for 2 people',
      'Named listing in annual report',
      'Special acknowledgment in publications',
    ],
  },
  {
    id: 'benefactor',
    name: 'Benefactor',
    price: 1000,
    benefits: [
      'All Patron benefits',
      'Invitation to Trustees\' events',
      'Personal meeting with the President',
      'Personalized acknowledgment plaque',
      'Endowed recognition opportunities',
    ],
  },
]

const projects = [
  {
    title: 'Landscape Conservation Fund',
    description: 'Supports the long-term preservation and restoration of Mount Auburn\'s historic landscape infrastructure — avenues, ponds, earthworks, and monuments.',
    raised: 86,
  },
  {
    title: 'Arboretum Enhancement',
    description: 'Funds acquisition of rare plant specimens, labeling, and the development of new display gardens throughout the arboretum collection.',
    raised: 62,
  },
  {
    title: 'Education & Community Programs',
    description: 'Enables free and low-cost programs for schools, seniors, underserved communities, and lifelong learners throughout the year.',
    raised: 74,
  },
]

export default function SupportPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2400&q=80"
          alt="Forest canopy at Mount Auburn Cemetery"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 50%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/75 via-deep-forest/20 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-16 px-6 lg:px-16 max-w-[1440px] mx-auto w-full">
          <p className="label text-cream/70 mb-4">Membership &amp; Giving</p>
          <h1 className="font-display text-cream leading-[1.1]" style={{ fontSize: 'clamp(3rem, 5vw, 4rem)' }}>
            Support Mount Auburn
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="font-display text-evergreen leading-[1.2] mb-6" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
                Your support preserves one of the great landscapes of American life.
              </p>
              <p className="text-stone leading-[1.65]" style={{ fontSize: 'clamp(1rem, 1.1vw, 1.125rem)' }}>
                As a nonprofit institution, Mount Auburn relies on the generosity of our members,
                donors, and community partners to preserve and enhance 175 acres of historic landscape,
                operate free public programming, maintain a world-class botanical collection, and serve
                the families of more than 100,000 individuals interred here. Every gift, large or small, makes a difference.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="bg-ivory section-padding">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <ScrollReveal className="mb-12">
            <SectionLabel className="mb-4">Membership</SectionLabel>
            <h2 className="font-display text-evergreen leading-[1.1]" style={{ fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)' }}>
              Friends of Mount Auburn
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {membershipTiers.map((tier, i) => (
              <ScrollReveal key={tier.id} delay={0.05 * i}>
                <div className={`flex flex-col rounded-[3px] p-7 h-full border transition-all duration-300 hover:shadow-lg ${tier.isPopular ? 'bg-evergreen text-cream border-evergreen shadow-md' : 'bg-cream border-stone/15 hover:border-sage/40'}`}>
                  {tier.isPopular && (
                    <span className="label text-sage/80 text-[10px] mb-3 block">Most Popular</span>
                  )}
                  <h3 className={`font-display text-xl mb-1 ${tier.isPopular ? 'text-cream' : 'text-evergreen'}`}>
                    {tier.name}
                  </h3>
                  <div className={`font-display text-3xl mb-6 ${tier.isPopular ? 'text-cream' : 'text-brass'}`}>
                    ${tier.price}
                    <span className="text-base font-body ml-1 opacity-60">/year</span>
                  </div>
                  <ul className="space-y-3 flex-1 mb-8">
                    {tier.benefits.map(b => (
                      <li key={b} className="flex items-start gap-3">
                        <Check size={14} className={`mt-0.5 flex-shrink-0 ${tier.isPopular ? 'text-sage' : 'text-sage'}`} />
                        <span className={`text-xs leading-relaxed ${tier.isPopular ? 'text-cream/80' : 'text-stone'}`}>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 rounded-[3px] text-sm font-medium transition-colors duration-300 ${
                      tier.isPopular
                        ? 'bg-cream text-evergreen hover:bg-ivory'
                        : 'bg-evergreen text-cream hover:bg-deep-forest'
                    }`}
                  >
                    Join as {tier.name}
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Donate */}
      <section id="donate" className="bg-cream section-padding">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <ScrollReveal>
                <SectionLabel className="mb-4">Annual Giving</SectionLabel>
                <h2 className="font-display text-evergreen leading-[1.15] mb-6" style={{ fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)' }}>
                  Make a Gift
                </h2>
                <p className="text-stone leading-[1.65] mb-8" style={{ fontSize: 'clamp(1rem, 1.1vw, 1.125rem)' }}>
                  Annual gifts to the Cemetery&rsquo;s unrestricted fund provide the flexible resources
                  most needed — for horticulture, conservation, community programs, and visitor services.
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-6">
                  {[25, 50, 100, 250, 500, 1000].map(amount => (
                    <button
                      key={amount}
                      className="py-3 border border-stone/25 rounded-[3px] text-sm font-medium text-ink hover:border-evergreen hover:bg-evergreen hover:text-cream transition-colors duration-200"
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-stone text-sm">Other amount:</span>
                  <div className="flex items-center border border-stone/25 rounded-[3px] overflow-hidden">
                    <span className="px-3 py-2.5 text-stone text-sm bg-ivory">$</span>
                    <input
                      type="number"
                      min="1"
                      className="px-3 py-2.5 text-ink text-sm border-0 focus:outline-none w-28 bg-cream"
                      placeholder="Amount"
                    />
                  </div>
                </div>
                <button className="flex items-center gap-3 bg-brass text-cream font-medium px-8 py-4 rounded-[3px] hover:bg-[#8a6a2e] transition-colors duration-300">
                  <Heart size={17} />
                  Donate Now
                </button>
                <p className="text-stone/60 text-xs mt-4">
                  Mount Auburn Cemetery is a 501(c)(3) nonprofit organization. Gifts are tax-deductible to the extent permitted by law.
                </p>
              </ScrollReveal>
            </div>

            {/* Special Projects */}
            <div>
              <ScrollReveal delay={0.15}>
                <SectionLabel className="mb-4">Special Projects</SectionLabel>
                <h2 className="font-display text-evergreen leading-[1.15] mb-8" style={{ fontSize: 'clamp(1.5rem, 2vw, 1.875rem)' }}>
                  Current Campaigns
                </h2>
                <div className="space-y-8">
                  {projects.map(project => (
                    <div key={project.title} className="border-b border-stone/15 pb-8">
                      <h3 className="font-display text-evergreen mb-2" style={{ fontSize: '1.1875rem' }}>
                        {project.title}
                      </h3>
                      <p className="text-stone text-sm leading-relaxed mb-4">{project.description}</p>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-1.5 bg-stone/15 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-sage rounded-full transition-all duration-700"
                            style={{ width: `${project.raised}%` }}
                          />
                        </div>
                        <span className="text-xs text-stone/70 flex-shrink-0">{project.raised}% funded</span>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
