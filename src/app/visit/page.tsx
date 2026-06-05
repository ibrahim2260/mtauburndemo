import type { Metadata } from 'next'
import Image from 'next/image'
import { MapPin, Clock, Bus, Car, Accessibility, Camera } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Plan Your Visit',
  description:
    'Visit Mount Auburn Cemetery in Cambridge, MA. Open daily 8am–8pm. Directions, parking, transit, accessibility, and visitor guidelines.',
}

const hours = [
  { period: 'General Season (Apr–Oct)', hours: '8:00 AM – 8:00 PM daily' },
  { period: 'Winter Season (Nov–Mar)', hours: '8:00 AM – 5:00 PM daily' },
  { period: 'Washington Tower', hours: 'Open daily 10:00 AM – 4:00 PM (seasonal)' },
  { period: 'Offices', hours: 'Mon–Fri 8:30 AM – 4:30 PM' },
]

export default function VisitPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2400&q=80"
          alt="Mount Auburn Cemetery landscape in autumn"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/70 via-deep-forest/20 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-16 px-6 lg:px-16 max-w-[1440px] mx-auto w-full">
          <p className="label text-cream/70 mb-4">Planning Your Visit</p>
          <h1
            className="font-display text-cream leading-[1.1]"
            style={{ fontSize: 'clamp(3rem, 5vw, 4rem)' }}
          >
            Visit Mount Auburn
          </h1>
        </div>
      </section>

      {/* Hours */}
      <section className="bg-cream section-padding">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="max-w-3xl">
            <ScrollReveal>
              <SectionLabel className="mb-4">Hours of Operation</SectionLabel>
              <h2
                className="font-display text-evergreen leading-[1.1] mb-8"
                style={{ fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)' }}
              >
                When to Visit
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="space-y-4">
                {hours.map(row => (
                  <div key={row.period} className="flex items-start justify-between py-4 border-b border-stone/15">
                    <div className="flex items-center gap-3">
                      <Clock size={16} className="text-sage mt-0.5 flex-shrink-0" />
                      <span className="text-ink font-medium">{row.period}</span>
                    </div>
                    <span className="text-stone text-right ml-6">{row.hours}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-stone text-sm leading-relaxed">
                The cemetery grounds are accessible without charge. Gates close promptly at posted times.
                Special closures may occur for private ceremonies — check our events calendar.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section id="directions" className="bg-ivory section-padding">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <ScrollReveal>
                <SectionLabel className="mb-4">Getting Here</SectionLabel>
                <h2
                  className="font-display text-evergreen leading-[1.1] mb-8"
                  style={{ fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)' }}
                >
                  Directions &amp; Parking
                </h2>
              </ScrollReveal>
              <div className="space-y-8">
                <ScrollReveal delay={0.1}>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-evergreen/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <MapPin size={17} className="text-evergreen" />
                    </div>
                    <div>
                      <h3 className="font-medium text-ink mb-2">Address</h3>
                      <p className="text-stone leading-relaxed">
                        580 Mount Auburn Street<br />
                        Cambridge, MA 02138
                      </p>
                      <a
                        href="https://maps.google.com/?q=580+Mount+Auburn+Street+Cambridge+MA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brass text-sm mt-2 inline-block hover:underline"
                      >
                        Open in Google Maps →
                      </a>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.15}>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-evergreen/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Car size={17} className="text-evergreen" />
                    </div>
                    <div>
                      <h3 className="font-medium text-ink mb-2">By Car</h3>
                      <p className="text-stone leading-relaxed text-sm">
                        From Route 2 eastbound, take the Fresh Pond Parkway exit and follow signs toward
                        Cambridge. Turn right onto Mount Auburn Street. The main entrance gate is on the left.
                        Free visitor parking is available inside the main gate.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-evergreen/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Bus size={17} className="text-evergreen" />
                    </div>
                    <div>
                      <h3 className="font-medium text-ink mb-2">By Public Transit</h3>
                      <p className="text-stone leading-relaxed text-sm">
                        Take the MBTA Red Line to Harvard Square station. From Harvard Square, board
                        the #71 or #73 bus (toward Watertown) and exit at Mount Auburn Street at Coolidge
                        Avenue — a 5-minute walk to the main entrance. Bus fare applies.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            {/* Map embed */}
            <ScrollReveal delay={0.2}>
              <div className="rounded-[3px] overflow-hidden border border-stone/20 shadow-sm w-full h-[420px] lg:h-[520px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.4819680836617!2d-71.14707172388994!3d42.37487817119151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3777876b110a3%3A0xee76deef62bead3f!2s580%20Mt%20Auburn%20St%2C%20Cambridge%2C%20MA%2002138!5e0!3m2!1sen!2sus!4v1780674993784!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mount Auburn Cemetery — 580 Mount Auburn Street, Cambridge, MA"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Accessibility */}
      <section id="accessibility" className="bg-evergreen py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="max-w-3xl">
            <ScrollReveal>
              <SectionLabel light className="mb-4">Visitor Information</SectionLabel>
              <h2
                className="font-display text-cream leading-[1.1] mb-6"
                style={{ fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)' }}
              >
                Accessibility
              </h2>
              <p className="text-cream/70 leading-[1.65] mb-8" style={{ fontSize: 'clamp(1rem, 1.1vw, 1.125rem)' }}>
                Mount Auburn is committed to making the grounds and programs accessible to all visitors.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Accessibility, title: 'Paved Paths', text: 'Many of our primary roadways and paths are paved and accessible to wheelchairs and mobility devices.' },
                  { icon: Car, title: 'Accessible Parking', text: 'Accessible parking spaces are available near the main entrance and Welcome Center.' },
                  { icon: Bus, title: 'Accessible Transit', text: 'Bus routes serving the main entrance have accessible boarding. Harvard Station is fully accessible.' },
                  { icon: Camera, title: 'Audio Guides', text: 'Our mobile app and printed materials are available in large print upon request at the Welcome Center.' },
                ].map(item => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-9 h-9 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <item.icon size={15} className="text-sage" />
                    </div>
                    <div>
                      <h3 className="text-cream font-medium mb-1.5 text-sm">{item.title}</h3>
                      <p className="text-cream/60 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Visitor Guidelines */}
      <section id="guidelines" className="bg-cream py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="max-w-3xl">
            <ScrollReveal>
              <SectionLabel className="mb-4">Guidelines</SectionLabel>
              <h2
                className="font-display text-evergreen leading-[1.1] mb-8"
                style={{ fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)' }}
              >
                Visitor Guidelines
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="space-y-4">
                {[
                  'Please observe quiet and respectful behavior throughout the grounds. This is an active cemetery serving families.',
                  'Photography is welcome for personal and journalistic use. Commercial photography requires a permit.',
                  'Leashed pets are welcome on roadways. Please clean up after your pet; pets are not permitted on garden paths.',
                  'Bicycles are welcome on the paved roads at slow speeds. Please yield to pedestrians and vehicles.',
                  'Picnicking and outdoor dining are permitted in designated areas near the Welcome Center.',
                  'Please stay on established paths and roads. Do not step on or over burial markers.',
                  'The use of amplified sound requires advance permission from the cemetery office.',
                  'Motor vehicles are subject to all posted speed limits (10 mph maximum).',
                ].map((guideline, i) => (
                  <div key={i} className="flex gap-4 py-3 border-b border-stone/10">
                    <span className="text-brass font-display text-lg leading-none mt-0.5 flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                    <p className="text-stone text-sm leading-relaxed">{guideline}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
