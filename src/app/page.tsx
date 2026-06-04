import type { Metadata } from 'next'
import { SeasonalHero } from '@/components/signature/SeasonalTimeline'
import { MissionSection } from '@/components/home/MissionSection'
import { LocateSection } from '@/components/home/LocateSection'
import { ExploreSection } from '@/components/home/ExploreSection'
import { BloomSection } from '@/components/home/BloomSection'
import { EventsSection } from '@/components/home/EventsSection'
import { ServicesSection } from '@/components/home/ServicesSection'

export const metadata: Metadata = {
  title: 'Mount Auburn Cemetery — Cambridge, Massachusetts',
  description:
    "America's first garden cemetery — 175 acres of designed landscape, botanical garden, and active memorial destination in Cambridge, Massachusetts. Founded 1831. National Historic Landmark.",
}

export default function HomePage() {
  return (
    <>
      <SeasonalHero />
      <MissionSection />
      <LocateSection />
      <ExploreSection />
      <BloomSection />
      <EventsSection />
      <ServicesSection />
    </>
  )
}
