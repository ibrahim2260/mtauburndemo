'use client'
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { Search, MapPin, User } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { searchGraves } from '@/lib/data/graves'
import type { GraveRecord } from '@/lib/types'

function LocateForm() {
  const searchParams = useSearchParams()
  const [firstName, setFirstName] = useState(searchParams.get('firstName') ?? '')
  const [lastName, setLastName] = useState(searchParams.get('lastName') ?? '')
  const [deathYear, setDeathYear] = useState(searchParams.get('deathYear') ?? '')
  const [birthYear, setBirthYear] = useState(searchParams.get('birthYear') ?? '')
  const [results, setResults] = useState<GraveRecord[] | null>(null)
  const [loading, setLoading] = useState(false)
  const [searched, setSearched] = useState(false)

  // Run initial search if params present
  useEffect(() => {
    const fn = searchParams.get('firstName')
    const ln = searchParams.get('lastName')
    const dy = searchParams.get('deathYear')
    if (fn || ln || dy) {
      runSearch(fn ?? '', ln ?? '', dy ?? '', '')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function runSearch(fn: string, ln: string, dy: string, by: string) {
    setLoading(true)
    setSearched(true)
    const found = await searchGraves({
      firstName: fn || undefined,
      lastName: ln || undefined,
      deathYear: dy ? parseInt(dy) : undefined,
      birthYear: by ? parseInt(by) : undefined,
    })
    setResults(found)
    setLoading(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await runSearch(firstName, lastName, deathYear, birthYear)
  }

  return (
    <div>
      {/* Search form */}
      <form onSubmit={handleSubmit} className="bg-ivory border border-stone/15 rounded-[3px] p-8 mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
          <div>
            <label className="label text-stone block mb-2">First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              placeholder="e.g. Henry"
              className="w-full border border-stone/25 text-ink placeholder-stone/40 bg-cream px-4 py-3 rounded-[3px] text-sm focus:outline-none focus:border-evergreen/50 transition-colors"
            />
          </div>
          <div>
            <label className="label text-stone block mb-2">Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              placeholder="e.g. Longfellow"
              className="w-full border border-stone/25 text-ink placeholder-stone/40 bg-cream px-4 py-3 rounded-[3px] text-sm focus:outline-none focus:border-evergreen/50 transition-colors"
            />
          </div>
          <div>
            <label className="label text-stone block mb-2">Year of Death <span className="text-stone/50">(optional)</span></label>
            <input
              type="number"
              value={deathYear}
              onChange={e => setDeathYear(e.target.value)}
              placeholder="e.g. 1882"
              min="1831"
              max={new Date().getFullYear()}
              className="w-full border border-stone/25 text-ink placeholder-stone/40 bg-cream px-4 py-3 rounded-[3px] text-sm focus:outline-none focus:border-evergreen/50 transition-colors"
            />
          </div>
          <div>
            <label className="label text-stone block mb-2">Year of Birth <span className="text-stone/50">(optional)</span></label>
            <input
              type="number"
              value={birthYear}
              onChange={e => setBirthYear(e.target.value)}
              placeholder="e.g. 1807"
              min="1700"
              max={new Date().getFullYear()}
              className="w-full border border-stone/25 text-ink placeholder-stone/40 bg-cream px-4 py-3 rounded-[3px] text-sm focus:outline-none focus:border-evergreen/50 transition-colors"
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="flex items-center gap-3 bg-evergreen text-cream font-medium px-8 py-3.5 rounded-[3px] hover:bg-deep-forest transition-colors duration-300 disabled:opacity-60"
        >
          <Search size={17} />
          {loading ? 'Searching…' : 'Search Burial Records'}
        </button>
      </form>

      {/* Results */}
      {loading && (
        <div className="flex items-center justify-center py-16">
          <div className="w-8 h-8 border-2 border-evergreen/30 border-t-evergreen rounded-full animate-spin" />
        </div>
      )}

      {!loading && searched && results !== null && (
        <div>
          {results.length === 0 ? (
            <div className="text-center py-16 bg-ivory rounded-[3px] border border-stone/10">
              <User size={40} className="text-stone/30 mx-auto mb-4" />
              <p className="font-display text-evergreen text-xl mb-2">No records found</p>
              <p className="text-stone text-sm max-w-md mx-auto leading-relaxed">
                No burial records match your search. Try adjusting the name spelling, removing
                the year fields, or contact our archives team for assistance.
              </p>
              <a href="/about/contact" className="mt-5 inline-block text-sm text-brass hover:underline">
                Contact the archives team →
              </a>
            </div>
          ) : (
            <div>
              <p className="text-stone text-sm mb-5">
                {results.length} record{results.length !== 1 ? 's' : ''} found
              </p>
              <div className="space-y-4">
                {results.map(record => (
                  <div
                    key={record.id}
                    className="bg-ivory border border-stone/10 rounded-[3px] p-6 hover:border-sage/30 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-display text-evergreen text-xl">
                            {record.firstName} {record.lastName}
                          </h3>
                          {record.isNotable && (
                            <span className="text-[10px] font-medium uppercase tracking-widest px-2.5 py-1 bg-brass/10 text-brass rounded-full border border-brass/20">
                              Notable Resident
                            </span>
                          )}
                        </div>
                        {record.birthYear || record.deathYear ? (
                          <p className="text-stone text-sm mb-2">
                            {record.birthYear ?? '?'} – {record.deathYear ?? 'present'}
                          </p>
                        ) : null}
                        {record.profession && (
                          <p className="text-stone/70 text-sm italic mb-3">{record.profession}</p>
                        )}
                        <div className="flex items-center gap-4 flex-wrap">
                          {record.section && (
                            <div className="flex items-center gap-2 text-stone text-xs">
                              <MapPin size={12} className="text-sage" />
                              Section: {record.section}
                            </div>
                          )}
                          {record.lot && (
                            <span className="text-stone text-xs">Lot: {record.lot}</span>
                          )}
                        </div>
                      </div>
                      {record.biographyUrl && (
                        <a
                          href={record.biographyUrl}
                          className="text-sm text-evergreen font-medium border border-evergreen/30 px-4 py-2 rounded-[3px] hover:bg-evergreen hover:text-cream transition-colors duration-300 flex-shrink-0"
                        >
                          Biography
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {!searched && (
        <div className="text-center py-12 bg-ivory rounded-[3px] border border-stone/10">
          <Search size={36} className="text-stone/25 mx-auto mb-4" />
          <p className="text-stone text-sm">Enter a name above to search burial records</p>
        </div>
      )}
    </div>
  )
}

export default function LocatePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[340px]">
        <Image
          src="https://images.unsplash.com/photo-1568092562784-15d1d0c68e5c?auto=format&fit=crop&w=2400&q=80"
          alt="Stone memorial at Mount Auburn Cemetery"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/80 via-deep-forest/25 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-14 px-6 lg:px-16 max-w-[1440px] mx-auto w-full">
          <p className="label text-cream/70 mb-4">Memorial Records</p>
          <h1 className="font-display text-cream leading-[1.1]" style={{ fontSize: 'clamp(3rem, 5vw, 4rem)' }}>
            Locate a Loved One
          </h1>
        </div>
      </section>

      <section className="bg-cream section-padding">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <ScrollReveal className="mb-10">
            <p className="text-stone max-w-2xl leading-[1.65]" style={{ fontSize: 'clamp(1rem, 1.1vw, 1.125rem)' }}>
              Search our burial records to find the resting place of those interred at Mount Auburn Cemetery.
              Records include interments from 1831 to the present. Over 100,000 individuals are in our archives.
            </p>
          </ScrollReveal>
          <Suspense fallback={
            <div className="flex items-center justify-center py-16">
              <div className="w-8 h-8 border-2 border-evergreen/30 border-t-evergreen rounded-full animate-spin" />
            </div>
          }>
            <LocateForm />
          </Suspense>
        </div>
      </section>
    </>
  )
}
