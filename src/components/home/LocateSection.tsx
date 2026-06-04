'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Search } from 'lucide-react'

export function LocateSection() {
  const router = useRouter()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [deathYear, setDeathYear] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (firstName) params.set('firstName', firstName)
    if (lastName) params.set('lastName', lastName)
    if (deathYear) params.set('deathYear', deathYear)
    router.push(`/locate?${params.toString()}`)
  }

  return (
    <section className="bg-evergreen py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <SectionLabel light className="mb-5">Memorial Records</SectionLabel>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2
              className="font-display text-cream leading-[1.1] mb-6"
              style={{ fontSize: 'clamp(2.25rem, 3.5vw, 2.75rem)' }}
            >
              Find a Loved One
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p
              className="text-cream/70 leading-[1.65] mb-10"
              style={{ fontSize: 'clamp(1.0625rem, 1.2vw, 1.1875rem)' }}
            >
              Search our records to locate burial sites, monuments, and the stories
              of those interred at Mount Auburn. Over 100,000 interments since 1831.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3"
            >
              <input
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                className="bg-white/10 border border-cream/20 text-cream placeholder-cream/40 px-4 py-3.5 rounded-[3px] text-base focus:outline-none focus:border-cream/50 transition-colors"
              />
              <input
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                className="bg-white/10 border border-cream/20 text-cream placeholder-cream/40 px-4 py-3.5 rounded-[3px] text-base focus:outline-none focus:border-cream/50 transition-colors"
              />
              <input
                type="number"
                placeholder="Year of death (optional)"
                value={deathYear}
                onChange={e => setDeathYear(e.target.value)}
                min="1831"
                max={new Date().getFullYear()}
                className="bg-white/10 border border-cream/20 text-cream placeholder-cream/40 px-4 py-3.5 rounded-[3px] text-base focus:outline-none focus:border-cream/50 transition-colors"
              />
              <button
                type="submit"
                className="sm:col-span-3 flex items-center justify-center gap-3 bg-cream text-evergreen font-medium text-base px-6 py-3.5 rounded-[3px] hover:bg-ivory transition-colors duration-300"
              >
                <Search size={18} />
                Search Burial Records
              </button>
            </form>
            <p className="text-cream/40 text-sm mt-4">
              Can&rsquo;t find who you&rsquo;re looking for?{' '}
              <a href="/about/contact" className="text-cream/60 hover:text-cream underline transition-colors">
                Contact our archives team
              </a>
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
