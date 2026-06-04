import type { GraveRecord } from '@/lib/types'

export const graves: GraveRecord[] = [
  {
    id: 'grave-001',
    firstName: 'Mary Baker',
    lastName: 'Eddy',
    birthYear: 1821,
    deathYear: 1910,
    lot: '4896',
    section: 'Halcyon',
    biographyUrl: '/explore/notable-residents#mary-baker-eddy',
    isNotable: true,
    profession: 'Founder of Christian Science',
  },
  {
    id: 'grave-002',
    firstName: 'Buckminster',
    lastName: 'Fuller',
    birthYear: 1895,
    deathYear: 1983,
    lot: '7221',
    section: 'Spruce',
    biographyUrl: '/explore/notable-residents#buckminster-fuller',
    isNotable: true,
    profession: 'Architect & Designer',
  },
  {
    id: 'grave-003',
    firstName: 'Winslow',
    lastName: 'Homer',
    birthYear: 1836,
    deathYear: 1910,
    lot: '3344',
    section: 'Oak',
    biographyUrl: '/explore/notable-residents#winslow-homer',
    isNotable: true,
    profession: 'Painter',
  },
  {
    id: 'grave-004',
    firstName: 'Henry Wadsworth',
    lastName: 'Longfellow',
    birthYear: 1807,
    deathYear: 1882,
    lot: '2188',
    section: 'Indian Ridge',
    biographyUrl: '/explore/notable-residents#henry-wadsworth-longfellow',
    isNotable: true,
    profession: 'Poet',
  },
  {
    id: 'grave-005',
    firstName: 'Isabella Stewart',
    lastName: 'Gardner',
    birthYear: 1840,
    deathYear: 1924,
    lot: '5502',
    section: 'Magnolia',
    biographyUrl: '/explore/notable-residents#isabella-stewart-gardner',
    isNotable: true,
    profession: 'Art Patron & Museum Founder',
  },
  {
    id: 'grave-006',
    firstName: 'Charles',
    lastName: 'Bulfinch',
    birthYear: 1763,
    deathYear: 1844,
    lot: '1102',
    section: 'Cypress',
    biographyUrl: '/explore/notable-residents#charles-bulfinch',
    isNotable: true,
    profession: 'Architect',
  },
  {
    id: 'grave-007',
    firstName: 'Charles',
    lastName: 'Sumner',
    birthYear: 1811,
    deathYear: 1874,
    lot: '2887',
    section: 'Myrtle',
    biographyUrl: '/explore/notable-residents#charles-sumner',
    isNotable: true,
    profession: 'U.S. Senator & Abolitionist',
  },
  {
    id: 'grave-008',
    firstName: 'B.F.',
    lastName: 'Skinner',
    birthYear: 1904,
    deathYear: 1990,
    lot: '8834',
    section: 'Birch',
    biographyUrl: '/explore/notable-residents#bf-skinner',
    isNotable: true,
    profession: 'Psychologist',
  },
  {
    id: 'grave-009',
    firstName: 'Eleanor',
    lastName: 'Whitmore',
    birthYear: 1888,
    deathYear: 1962,
    lot: '6112',
    section: 'Willow',
    isNotable: false,
    profession: undefined,
  },
  {
    id: 'grave-010',
    firstName: 'James Arthur',
    lastName: 'Pemberton',
    birthYear: 1845,
    deathYear: 1921,
    lot: '3367',
    section: 'Cedar',
    isNotable: false,
    profession: undefined,
  },
  {
    id: 'grave-011',
    firstName: 'Dorothy',
    lastName: 'Harrington',
    birthYear: 1901,
    deathYear: 1977,
    lot: '7089',
    section: 'Elm',
    isNotable: false,
    profession: undefined,
  },
  {
    id: 'grave-012',
    firstName: 'Thomas',
    lastName: 'Beaumont',
    birthYear: 1872,
    deathYear: 1944,
    lot: '4455',
    section: 'Linden',
    isNotable: false,
    profession: undefined,
  },
]

export interface GraveSearchQuery {
  firstName?: string
  lastName?: string
  deathYear?: number
  birthYear?: number
}

export async function searchGraves(query: GraveSearchQuery): Promise<GraveRecord[]> {
  // Simulate async search delay
  await new Promise(resolve => setTimeout(resolve, 400))

  const { firstName, lastName, deathYear, birthYear } = query

  if (!firstName && !lastName && !deathYear && !birthYear) {
    return []
  }

  return graves.filter(grave => {
    let matches = true

    if (firstName && firstName.trim()) {
      matches = matches && grave.firstName.toLowerCase().includes(firstName.trim().toLowerCase())
    }
    if (lastName && lastName.trim()) {
      matches = matches && grave.lastName.toLowerCase().includes(lastName.trim().toLowerCase())
    }
    if (deathYear) {
      matches = matches && grave.deathYear === deathYear
    }
    if (birthYear) {
      matches = matches && grave.birthYear === birthYear
    }

    return matches
  })
}
