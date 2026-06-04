'use client'
import type { Metadata } from 'next'
import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'

const faqGroups = [
  {
    category: 'Visiting the Cemetery',
    faqs: [
      { q: 'What are the hours?', a: 'The grounds are open daily 8:00 AM to 8:00 PM from April through October, and 8:00 AM to 5:00 PM from November through March. The Welcome Center is open Monday through Friday, 8:30 AM to 4:30 PM.' },
      { q: 'Is there an admission charge?', a: 'Access to the cemetery grounds is free of charge for all visitors. Some special programs and events may require registration or a fee.' },
      { q: 'Are pets allowed?', a: 'Leashed pets are welcome on all paved roadways. Pets are not permitted on garden paths, near the chapel areas, or in the Welcome Center.' },
      { q: 'Is the cemetery wheelchair accessible?', a: 'Yes. Many of our primary roadways are paved and accessible to wheelchairs and other mobility devices. Accessible parking is available near the main entrance. Please contact us for specific accessibility needs.' },
      { q: 'Can I photograph in the cemetery?', a: 'Personal and journalistic photography is welcome. Commercial photography, film production, and drone flights require an advance permit from the cemetery office.' },
    ],
  },
  {
    category: 'Burial & Interment',
    faqs: [
      { q: 'How do I inquire about a burial lot?', a: 'Please contact our Family Services office at +1 617 547 7105, Monday through Friday 8:30 AM to 4:30 PM, or use our online contact form. We offer no-obligation consultations and are happy to walk the grounds with you.' },
      { q: 'Can I pre-purchase a burial lot?', a: 'Yes. Pre-purchasing a burial lot or niche at today\'s prices is a thoughtful option for many families. Our family services team can guide you through the options and process at your own pace.' },
      { q: 'Are green burial options available?', a: 'Mount Auburn offers a natural burial area where remains may be interred without a traditional vault, in a biodegradable container. Please contact us for details on this section and its requirements.' },
      { q: 'What are my cremation options?', a: 'Cremated remains may be interred in ground, placed in a columbarium niche, or, in some areas, scattered. We offer both indoor and outdoor columbarium options with permanent engraved inscriptions.' },
      { q: 'Can a service be held in the chapel?', a: 'Yes. Mount Auburn\'s Story Chapel seats approximately 200 and is available for memorial services, celebrations of life, and private gatherings. Bigelow Chapel is a smaller, more intimate option. Contact our events team for availability and fees.' },
    ],
  },
  {
    category: 'Locating a Loved One',
    faqs: [
      { q: 'How do I find where someone is buried?', a: 'You can search our online burial records at mountauburn.org/locate, or contact the archives team for assistance. Our staff is also available at the Welcome Center to help in person.' },
      { q: 'Can I get a map to a specific grave?', a: 'Yes. If you contact us with the name of the individual, we can provide you with a map and directions to the burial location. This service is available at the Welcome Center and by phone.' },
      { q: 'How complete are the burial records?', a: 'Mount Auburn has maintained burial records since its founding in 1831. Our archives are among the most complete of any American cemetery. Records from 1831 to present are searchable online and in person.' },
    ],
  },
  {
    category: 'Programs & Support',
    faqs: [
      { q: 'How do I register for a program or event?', a: 'Most programs require advance registration, which can be completed online through the event listing on our website or by calling the Welcome Center. Some events have limited capacity and fill quickly.' },
      { q: 'What is the Friends of Mount Auburn?', a: 'The Friends of Mount Auburn is our membership program supporting the care and programming of the Cemetery. Members receive benefits including free event registration, guided tours, and discounts at the gift shop and bookstore.' },
      { q: 'How can I make a donation?', a: 'Gifts of any size are warmly welcomed. You may donate online, by mail, or by contacting our Development Office. Major gifts, planned giving, and memorial gifts are also available options.' },
    ],
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-stone/15">
      <button
        className="w-full flex items-start justify-between py-5 text-left gap-4"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-medium text-ink leading-snug pr-4">{q}</span>
        <ChevronDown
          size={18}
          className={`flex-shrink-0 text-sage mt-0.5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}
      >
        <p className="text-stone text-sm leading-relaxed pr-8">{a}</p>
      </div>
    </div>
  )
}

// NOTE: metadata export removed - can't export metadata from 'use client' component
// This page uses client component for accordion state

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[320px]">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2400&q=80"
          alt="Mount Auburn Cemetery"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 60%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/75 via-deep-forest/20 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-12 px-6 lg:px-16 max-w-[1440px] mx-auto w-full">
          <p className="label text-cream/70 mb-4">Services</p>
          <h1 className="font-display text-cream leading-[1.1]" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
            Frequently Asked Questions
          </h1>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream section-padding">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="max-w-3xl">
            {faqGroups.map((group, i) => (
              <ScrollReveal key={group.category} delay={0.1 * Math.min(i, 3)} className="mb-14">
                <SectionLabel className="mb-6">{group.category}</SectionLabel>
                <div>
                  {group.faqs.map(faq => (
                    <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
