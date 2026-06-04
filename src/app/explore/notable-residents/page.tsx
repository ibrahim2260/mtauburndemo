import type { Metadata } from 'next'
import Image from 'next/image'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Notable Residents',
  description:
    'Explore the stories of notable individuals interred at Mount Auburn Cemetery — artists, writers, scientists, architects, and reformers who shaped American history.',
}

const notableResidents = [
  {
    id: 'mary-baker-eddy',
    name: 'Mary Baker Eddy',
    dates: '1821–1910',
    profession: 'Founder of Christian Science',
    description: 'The founder of the Church of Christ, Scientist and author of Science and Health with Key to the Scriptures. Her lakeside monument at Halcyon is among the most visited in the cemetery.',
    imageUrl: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'buckminster-fuller',
    name: 'Buckminster Fuller',
    dates: '1895–1983',
    profession: 'Architect & Designer',
    description: 'Inventor of the geodesic dome, pioneer of systems thinking, and one of the most prolific and visionary designers in American history. Author of Operating Manual for Spaceship Earth.',
    imageUrl: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'winslow-homer',
    name: 'Winslow Homer',
    dates: '1836–1910',
    profession: 'Painter',
    description: 'One of the most celebrated American painters, renowned for his bold seascapes and depictions of rural New England life. A key figure in American Realism.',
    imageUrl: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'henry-wadsworth-longfellow',
    name: 'Henry Wadsworth Longfellow',
    dates: '1807–1882',
    profession: 'Poet',
    description: 'America\'s most beloved nineteenth-century poet, author of "The Song of Hiawatha," "Paul Revere\'s Ride," and "Evangeline." A Harvard professor and Cambridge neighbor.',
    imageUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'isabella-stewart-gardner',
    name: 'Isabella Stewart Gardner',
    dates: '1840–1924',
    profession: 'Art Patron & Museum Founder',
    description: 'Founder of the Isabella Stewart Gardner Museum in Boston — one of the great personal art collections in America, housed in her Venetian palace in the Fenway.',
    imageUrl: 'https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'charles-bulfinch',
    name: 'Charles Bulfinch',
    dates: '1763–1844',
    profession: 'Architect',
    description: 'America\'s first native-born professional architect, designer of the Massachusetts State House, University Hall at Harvard, and the completion of the U.S. Capitol.',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'charles-sumner',
    name: 'Charles Sumner',
    dates: '1811–1874',
    profession: 'U.S. Senator & Abolitionist',
    description: 'Massachusetts Senator and one of the leading abolitionists in American political history. Famously beaten on the Senate floor for his anti-slavery speeches.',
    imageUrl: 'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'bf-skinner',
    name: 'B.F. Skinner',
    dates: '1904–1990',
    profession: 'Psychologist',
    description: 'One of the most influential psychologists of the twentieth century, pioneer of behavioral science, and author of Walden Two and Beyond Freedom and Dignity.',
    imageUrl: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&q=80',
  },
]

export default function NotableResidentsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=2400&q=80"
          alt="Historic monuments at Mount Auburn Cemetery"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/80 via-deep-forest/25 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-16 px-6 lg:px-16 max-w-[1440px] mx-auto w-full">
          <p className="label text-cream/70 mb-4">Explore / History</p>
          <h1 className="font-display text-cream leading-[1.1]" style={{ fontSize: 'clamp(3rem, 5vw, 4rem)' }}>
            Notable Residents
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <ScrollReveal>
            <p className="text-stone max-w-3xl leading-[1.65]" style={{ fontSize: 'clamp(1.0625rem, 1.2vw, 1.1875rem)' }}>
              Mount Auburn is the final resting place of more than 100,000 individuals, among them many
              of the most consequential figures in American arts, science, letters, and public life.
              Each tells a story of a life and a moment in history.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-ivory section-padding">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {notableResidents.map((person, i) => (
              <ScrollReveal key={person.id} delay={0.05 * (i % 4)}>
                <div id={person.id} className="group bg-cream rounded-[3px] overflow-hidden border border-stone/10 hover:border-sage/30 hover:shadow-md transition-all duration-500">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={person.imageUrl}
                      alt={`Memorial for ${person.name}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-700 group-hover:scale-105 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/60 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <p className="text-cream/70 text-xs font-medium">{person.dates}</p>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="label text-brass mb-1.5">{person.profession}</p>
                    <h3 className="font-display text-evergreen leading-[1.2] mb-3" style={{ fontSize: 'clamp(1.125rem, 1.5vw, 1.25rem)' }}>
                      {person.name}
                    </h3>
                    <p className="text-stone text-xs leading-relaxed">{person.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
