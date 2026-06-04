import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { events } from '@/lib/data/events'

export const metadata: Metadata = {
  title: 'Programs & Events',
  description:
    'Upcoming programs and events at Mount Auburn Cemetery — nature walks, lectures, ceremonies, and art workshops.',
}

function formatFullDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00')
  return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
}

function getDateParts(dateStr: string) {
  const date = new Date(dateStr + 'T00:00:00')
  return {
    month: date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
    day: date.toLocaleDateString('en-US', { day: '2-digit' }),
  }
}

const categoryColors: Record<string, string> = {
  Nature: 'bg-sage/15 text-evergreen border-sage/30',
  History: 'bg-brass/15 text-brass border-brass/30',
  Ceremony: 'bg-stone/15 text-stone border-stone/30',
  'Art & Culture': 'bg-cream border-stone/30 text-stone',
  Education: 'bg-evergreen/10 text-evergreen border-evergreen/20',
}

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px]">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2400&q=80"
          alt="Mount Auburn Cemetery landscape"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/70 via-deep-forest/20 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-16 px-6 lg:px-16 max-w-[1440px] mx-auto w-full">
          <p className="label text-cream/70 mb-4">Calendar</p>
          <h1 className="font-display text-cream leading-[1.1]" style={{ fontSize: 'clamp(3rem, 5vw, 4rem)' }}>
            Programs &amp; Events
          </h1>
        </div>
      </section>

      {/* Events list */}
      <section className="bg-cream section-padding">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <ScrollReveal className="mb-12">
            <SectionLabel className="mb-4">Upcoming</SectionLabel>
            <h2 className="font-display text-evergreen leading-[1.1]" style={{ fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)' }}>
              Spring &amp; Summer 2026
            </h2>
          </ScrollReveal>

          <div className="space-y-6">
            {events.map((event, i) => {
              const { month, day } = getDateParts(event.date)
              const catStyle = categoryColors[event.category] ?? 'bg-stone/10 text-stone border-stone/20'
              return (
                <ScrollReveal key={event.id} delay={0.05 * Math.min(i, 5)}>
                  <article className="group flex gap-6 md:gap-8 p-6 md:p-8 bg-ivory border border-stone/10 rounded-[3px] hover:border-sage/40 hover:shadow-md transition-all duration-500">
                    {/* Date block */}
                    <div className="flex-shrink-0 text-center bg-evergreen rounded-[2px] px-3 py-3 min-w-[60px]">
                      <p className="text-cream/60 text-[10px] font-medium uppercase tracking-widest leading-none mb-1.5">{month}</p>
                      <p className="text-cream font-display text-3xl leading-none">{day}</p>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <span className={`text-[10px] font-medium uppercase tracking-widest px-3 py-1 rounded-full border ${catStyle}`}>
                          {event.category}
                        </span>
                        {event.isFeatured && (
                          <span className="text-[10px] font-medium uppercase tracking-widest px-3 py-1 rounded-full border border-brass/30 bg-brass/10 text-brass">
                            Featured
                          </span>
                        )}
                        <div className="flex items-center gap-1.5 text-stone text-xs">
                          <Clock size={11} />
                          {event.time}
                        </div>
                      </div>
                      <h3 className="font-display text-evergreen leading-[1.25] mb-2" style={{ fontSize: 'clamp(1.125rem, 1.5vw, 1.375rem)' }}>
                        {event.title}
                      </h3>
                      <p className="text-stone text-sm leading-relaxed mb-4">{event.description}</p>
                      <div className="flex items-center gap-2 text-xs text-stone/60">
                        <Calendar size={12} />
                        {formatFullDate(event.date)}
                      </div>
                    </div>

                    {/* CTA */}
                    {event.registrationUrl && (
                      <div className="hidden md:flex items-center flex-shrink-0">
                        <Link
                          href={event.registrationUrl}
                          className="flex items-center gap-2 bg-evergreen text-cream text-sm font-medium px-5 py-3 rounded-[3px] hover:bg-deep-forest transition-colors duration-300 group-hover:gap-3 whitespace-nowrap"
                        >
                          Register <ArrowRight size={14} />
                        </Link>
                      </div>
                    )}
                  </article>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
