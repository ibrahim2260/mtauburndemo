export interface Event {
  id: string
  title: string
  date: string  // ISO date string
  time: string
  category: string
  description: string
  imageUrl?: string
  registrationUrl?: string
  isFeatured?: boolean
}

export interface BloomItem {
  id: string
  name: string
  latinName: string
  location: string
  season: string
  description: string
  imageUrl?: string
  weekUpdated: string
}

export interface GraveRecord {
  id: string
  firstName: string
  lastName: string
  birthYear?: number
  deathYear?: number
  lot?: string
  section?: string
  biographyUrl?: string
  isNotable?: boolean
  profession?: string
}

export interface StaffMember {
  id: string
  name: string
  title: string
  imageUrl?: string
  bio?: string
}

export interface NewsPost {
  id: string
  slug: string
  title: string
  date: string
  excerpt: string
  body?: string
  imageUrl?: string
  category: string
}

export interface Service {
  id: string
  name: string
  type: 'burial' | 'cremation' | 'venue' | 'planning'
  description: string
  imageUrl?: string
  features?: string[]
}

export interface MembershipTier {
  id: string
  name: string
  price: number
  benefits: string[]
  isPopular?: boolean
}
