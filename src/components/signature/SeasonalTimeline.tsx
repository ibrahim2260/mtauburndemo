'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'
import Link from 'next/link'

type Season = 'spring' | 'summer' | 'autumn' | 'winter'

interface SeasonData {
  label: string
  image: string
  headline: string
  subline: string
  accent: string
  objectPosition?: string
}

const seasons: Record<Season, SeasonData> = {
  spring: {
    label: 'Spring',
    image: '/spring-chapel.jpg',
    headline: 'A landscape awakening in color and birdsong',
    subline: 'Spring at Mount Auburn brings extraordinary cherry blossoms, migrating warblers, and the first flush of the arboretum&rsquo;s extraordinary botanical collection.',
    accent: 'text-[#e8d5b8]',
    objectPosition: 'center 40%',
  },
  summer: {
    label: 'Summer',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=2400&q=80',
    headline: 'A living landscape at the fullness of its beauty',
    subline: 'Long summer evenings reveal the full splendor of 175 acres — lush canopy, still ponds, and gardens at the height of their seasonal glory.',
    accent: 'text-[#b8dbb8]',
  },
  autumn: {
    label: 'Autumn',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2400&q=80',
    headline: 'A landscape of inspirational beauty and comfort',
    subline: 'America&rsquo;s first garden cemetery — 175 acres of designed landscape, botanical garden, and active memorial destination in Cambridge, Massachusetts.',
    accent: 'text-[#f0c880]',
  },
  winter: {
    label: 'Winter',
    image: 'https://images.unsplash.com/photo-1491555103944-7c647fd857e6?auto=format&fit=crop&w=2400&q=80',
    headline: 'A serene and contemplative winter sanctuary',
    subline: 'Snow and silence transform Mount Auburn into a crystalline landscape — monuments half-veiled in frost, cedar paths hushed, the architecture of bare branches revealed.',
    accent: 'text-[#c8d8e8]',
  },
}

const seasonOrder: Season[] = ['spring', 'summer', 'autumn', 'winter']

export function SeasonalHero() {
  const [activeSeason, setActiveSeason] = useState<Season>('spring')

  const data = seasons[activeSeason]

  return (
    <section className="relative w-full overflow-hidden" style={{ height: '100svh', minHeight: '640px' }}>
      {/* Background Images — crossfade */}
      {seasonOrder.map(season => (
        <motion.div
          key={season}
          className="absolute inset-0"
          initial={false}
          animate={{ opacity: season === activeSeason ? 1 : 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <Image
            src={seasons[season].image}
            alt={`Mount Auburn Cemetery in ${season}`}
            fill
            priority={season === 'spring'}
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: seasons[season].objectPosition ?? 'center' }}
            className={season === activeSeason ? 'scale-animation' : ''}
          />
        </motion.div>
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/80 via-deep-forest/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-deep-forest/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-28 px-6 lg:px-16 max-w-[1440px] mx-auto w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSeason}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            {/* Eyebrow */}
            <motion.p
              className="label text-cream/70 mb-5"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            >
              Founded 1831 &nbsp;&middot;&nbsp; National Historic Landmark
            </motion.p>

            {/* Headline */}
            <motion.h1
              className={`font-display text-cream leading-[1.05] mb-6 ${data.accent}`}
              style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: 'easeOut', delay: 0.2 }}
              dangerouslySetInnerHTML={{ __html: data.headline }}
            />

            {/* Subline */}
            <motion.p
              className="text-cream/80 max-w-2xl mb-10"
              style={{ fontSize: 'clamp(1.0625rem, 1.3vw, 1.25rem)', lineHeight: 1.6 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: 'easeOut', delay: 0.35 }}
              dangerouslySetInnerHTML={{ __html: data.subline }}
            />

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: 'easeOut', delay: 0.5 }}
            >
              <Link
                href="/visit"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-cream text-evergreen font-medium text-base rounded-[3px] hover:bg-ivory transition-colors duration-300"
              >
                Plan Your Visit
              </Link>
              <Link
                href="/locate"
                className="inline-flex items-center justify-center px-7 py-3.5 border-2 border-cream text-cream font-medium text-base rounded-[3px] hover:bg-cream hover:text-evergreen transition-colors duration-300"
              >
                Locate a Grave
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Season Switcher */}
      <div className="absolute bottom-8 left-6 lg:left-16 z-20 flex items-center gap-1">
        {seasonOrder.map(season => (
          <button
            key={season}
            onClick={() => setActiveSeason(season)}
            className={`px-4 py-2 text-xs font-medium uppercase tracking-widest rounded-[2px] transition-all duration-300 ${
              activeSeason === season
                ? 'bg-cream text-evergreen'
                : 'bg-white/10 text-cream/70 hover:bg-white/20 hover:text-cream backdrop-blur-sm'
            }`}
          >
            {season}
          </button>
        ))}
      </div>

      {/* Ken Burns style via CSS animation on active image */}
      <style>{`
        @keyframes kenburns {
          from { transform: scale(1); }
          to { transform: scale(1.05); }
        }
        .scale-animation {
          animation: kenburns 20s ease-out forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .scale-animation { animation: none; }
        }
      `}</style>
    </section>
  )
}
