import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { featuredEvents } from '@/lib/data/events'

function formatDate(dateStr: string): { month: string; day: string } {
  const date = new Date(dateStr + 'T00:00:00')
  return {
    month: date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
    day: date.toLocaleDateString('en-US', { day: '2-digit' }),
  }
}

const categoryColors: Record<string, string> = {
  Nature: 'bg-sage/20 text-sage',
  History: 'bg-brass/20 text-brass',
  Ceremony: 'bg-stone/20 text-stone',
  'Art & Culture': 'bg-cream/20 text-stone',
  Education: 'bg-evergreen/20 text-evergreen',
}

export function EventsSection() {
  return (
    <section className="bg-cream section-padding">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-6">
          <div>
            <ScrollReveal>
              <SectionLabel className="mb-4">Programs</SectionLabel>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2
                className="font-display text-evergreen leading-[1.1]"
                style={{ fontSize: 'clamp(2.25rem, 3.5vw, 2.75rem)' }}
              >
                Programs &amp; Events
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.2}>
            <Link
              href="/events"
              className="flex items-center gap-2 text-evergreen hover:text-brass transition-colors duration-300 text-sm font-medium"
            >
              View full calendar <ArrowRight size={15} />
            </Link>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredEvents.map((event, i) => {
            const { month, day } = formatDate(event.date)
            const categoryStyle = categoryColors[event.category] ?? 'bg-stone/20 text-stone'
            return (
              <ScrollReveal key={event.id} delay={0.1 + i * 0.12}>
                <div className="group bg-ivory border border-stone/10 rounded-[3px] overflow-hidden hover:border-sage/40 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                  {/* Date chip header */}
                  <div className="p-6 pb-5 flex items-start gap-5">
                    <div className="flex-shrink-0 text-center bg-evergreen rounded-[2px] px-3 py-2 min-w-[56px]">
                      <p className="text-cream/60 text-[10px] font-medium uppercase tracking-widest leading-none mb-1">
                        {month}
                      </p>
                      <p className="text-cream font-display text-2xl leading-none">{day}</p>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span
                          className={`text-[10px] font-medium uppercase tracking-widest px-2.5 py-1 rounded-full ${categoryStyle}`}
                        >
                          {event.category}
                        </span>
                        <div className="flex items-center gap-1 text-stone text-xs">
                          <Calendar size={11} />
                          {event.time}
                        </div>
                      </div>
                      <h3
                        className="font-display text-evergreen leading-[1.25] group-hover:text-brass transition-colors duration-300"
                        style={{ fontSize: 'clamp(1.125rem, 1.5vw, 1.3125rem)' }}
                      >
                        {event.title}
                      </h3>
                    </div>
                  </div>
                  <div className="px-6 pb-6">
                    <p className="text-stone text-sm leading-relaxed mb-5 line-clamp-3">
                      {event.description}
                    </p>
                    {event.registrationUrl && (
                      <Link
                        href={event.registrationUrl}
                        className="flex items-center gap-2 text-sm font-medium text-evergreen hover:text-brass transition-colors duration-300 group-hover:gap-3"
                      >
                        Register <ArrowRight size={13} />
                      </Link>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
