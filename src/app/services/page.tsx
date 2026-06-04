import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Memorial Services',
  description:
    'Mount Auburn Cemetery offers burial, cremation, chapel venues, and pre-planning services. Our staff guides families with sensitivity and care.',
}

const services = [
  {
    id: 'burial',
    type: 'Burial',
    title: 'Traditional Burial',
    description:
      'A permanent resting place within one of America\'s most significant and beautiful landscapes. Mount Auburn offers a variety of lot sizes and types, from single graves to family lots, in settings ranging from serene woodland to lakeside garden.',
    features: [
      'Single graves and family lots',
      'Garden and woodland settings',
      'Monument selection guidance',
      'Permanent endowment care',
      'Deed and records management',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1568092562784-15d1d0c68e5c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'cremation',
    type: 'Cremation',
    title: 'Cremation & Columbarium',
    description:
      'Mount Auburn offers dignified options for those who choose cremation, including inurnment in our historic columbarium niches, garden burial of cremated remains, and scattering in designated areas of the grounds.',
    features: [
      'Indoor and outdoor columbarium niches',
      'Cremation garden burial',
      'Companion niches available',
      'Permanent engraved inscription',
      'Endowment care included',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'venues',
    title: 'Chapels & Ceremony Venues',
    type: 'Venue',
    description:
      'Mount Auburn\'s historic chapel and landscape venues offer memorable settings for memorial services, celebrations of life, and private gatherings. Our events team assists with every detail.',
    features: [
      'Story Chapel (seats 200)',
      'Bigelow Chapel (intimate, seats 60)',
      'Dell Avenue outdoor venue',
      'Garden settings for gatherings',
      'Audio-visual equipment available',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'planning',
    title: 'Pre-planning',
    type: 'Planning',
    description:
      'Planning ahead is one of the most thoughtful gifts you can give your family. Mount Auburn\'s dedicated pre-planning staff guides you through every option at your own pace, with no obligation.',
    features: [
      'No-pressure consultations',
      'Lock in current pricing',
      'Protect family from difficult decisions',
      'Document your wishes',
      'Revisions always welcome',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?auto=format&fit=crop&w=1200&q=80',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2400&q=80"
          alt="Mount Auburn Cemetery landscape"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 50%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/75 via-deep-forest/20 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-16 px-6 lg:px-16 max-w-[1440px] mx-auto w-full">
          <p className="label text-cream/70 mb-4">Memorial Services</p>
          <h1 className="font-display text-cream leading-[1.1]" style={{ fontSize: 'clamp(3rem, 5vw, 4rem)' }}>
            Services
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="text-stone leading-[1.65]" style={{ fontSize: 'clamp(1.0625rem, 1.2vw, 1.1875rem)' }}>
                We understand that planning a burial or memorial service is a profound and personal undertaking.
                The staff of Mount Auburn Cemetery is here to guide you with care, patience, and expertise.
                We serve families of all faiths, traditions, and backgrounds with equal sensitivity and respect.
              </p>
              <Link href="/about/contact" className="mt-6 inline-flex items-center gap-2 text-evergreen font-medium hover:text-brass transition-colors">
                Contact our family services team <ArrowRight size={15} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services */}
      <section className="bg-ivory section-padding">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="space-y-20">
            {services.map((service, i) => (
              <ScrollReveal key={service.id} delay={0.1}>
                <div id={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                    <SectionLabel className="mb-4">{service.type}</SectionLabel>
                    <h2 className="font-display text-evergreen leading-[1.15] mb-6" style={{ fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)' }}>
                      {service.title}
                    </h2>
                    <p className="text-stone leading-[1.65] mb-8" style={{ fontSize: 'clamp(1rem, 1.1vw, 1.125rem)' }}>
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features?.map(f => (
                        <li key={f} className="flex items-center gap-3 text-stone text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`relative aspect-[4/3] rounded-[3px] overflow-hidden ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <Image
                      src={service.imageUrl}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact band */}
      <section className="bg-evergreen py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 text-center">
          <ScrollReveal>
            <h2 className="font-display text-cream leading-[1.1] mb-4" style={{ fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)' }}>
              We&rsquo;re Here to Help
            </h2>
            <p className="text-cream/70 max-w-xl mx-auto mb-8 leading-[1.65]">
              Our family services staff is available Monday through Friday, 8:30am to 4:30pm, to answer
              questions and schedule a consultation at your convenience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+16175477105" className="flex items-center gap-2 bg-cream text-evergreen font-medium px-6 py-3.5 rounded-[3px] hover:bg-ivory transition-colors">
                Call +1 617 547 7105
              </a>
              <Link href="/about/contact" className="flex items-center gap-2 border-2 border-cream text-cream font-medium px-6 py-3.5 rounded-[3px] hover:bg-cream hover:text-evergreen transition-colors">
                Send a Message
              </Link>
              <Link href="/services/faq" className="flex items-center gap-2 border border-cream/30 text-cream/80 font-medium px-6 py-3.5 rounded-[3px] hover:border-cream hover:text-cream transition-colors">
                Read FAQs
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
