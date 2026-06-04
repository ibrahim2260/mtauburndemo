import type { Event } from '@/lib/types'

export const events: Event[] = [
  {
    id: 'evt-001',
    title: 'Birds of Mount Auburn: Spring Migration Walk',
    date: '2026-05-10',
    time: '7:00 AM',
    category: 'Nature',
    description:
      'Join our naturalists for an early-morning walk through the grounds during peak spring migration. Mount Auburn is one of the premier birding destinations in New England, attracting rare warblers, thrushes, and raptors each May.',
    imageUrl: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80',
    registrationUrl: '/events/birds-spring-migration-2026',
    isFeatured: true,
  },
  {
    id: 'evt-002',
    title: 'Garden Cemetery: A Historical Walking Tour',
    date: '2026-05-17',
    time: '10:00 AM',
    category: 'History',
    description:
      'Explore the origins of the American garden cemetery movement with our historian-led walking tour. Discover the visionary ideas of Jacob Bigelow and how Mount Auburn became a model for Père Lachaise, Green-Wood, and Laurel Hill.',
    imageUrl: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1600&q=80',
    registrationUrl: '/events/historical-walking-tour-may-2026',
    isFeatured: true,
  },
  {
    id: 'evt-003',
    title: 'Memorial Day Ceremony',
    date: '2026-05-25',
    time: '11:00 AM',
    category: 'Ceremony',
    description:
      'Mount Auburn honors the memory of those who served with a dignified Memorial Day observance. Join us at Story Chapel for a program of reflection, music, and readings, followed by a wreath-laying at the veterans sections.',
    imageUrl: 'https://images.unsplash.com/photo-1568092562784-15d1d0c68e5c?auto=format&fit=crop&w=1600&q=80',
    registrationUrl: '/events/memorial-day-2026',
    isFeatured: true,
  },
  {
    id: 'evt-004',
    title: 'Watercolor Painting in the Landscape',
    date: '2026-06-07',
    time: '10:00 AM',
    category: 'Art & Culture',
    description:
      'Join artist and instructor Maria Chen for an outdoor watercolor workshop set among the ponds, monuments, and flowering gardens of Mount Auburn. All skill levels welcome. Materials provided.',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80',
    registrationUrl: '/events/watercolor-workshop-june-2026',
    isFeatured: false,
  },
  {
    id: 'evt-005',
    title: 'Summer Solstice Evening Walk',
    date: '2026-06-20',
    time: '7:30 PM',
    category: 'Nature',
    description:
      'Celebrate the longest day of the year with a guided evening walk through the landscape. Experience the cemetery in the golden-hour light and learn about the summer plant collections, nocturnal wildlife, and solstice traditions.',
    imageUrl: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1600&q=80',
    registrationUrl: '/events/solstice-walk-2026',
    isFeatured: false,
  },
  {
    id: 'evt-006',
    title: 'Lecture: The Horticulture of Mount Auburn',
    date: '2026-06-28',
    time: '2:00 PM',
    category: 'Education',
    description:
      'Director of Horticulture Margaret Holloway presents an illustrated lecture on the history and current practice of plant stewardship at Mount Auburn, from the original 1830s plantings to today\'s climate-adaptive collections.',
    imageUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80',
    registrationUrl: '/events/horticulture-lecture-june-2026',
    isFeatured: false,
  },
]

export const featuredEvents = events.filter(e => e.isFeatured)
