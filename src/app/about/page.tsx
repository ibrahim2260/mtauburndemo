import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { staff } from '@/lib/data/staff'
import { newsPosts } from '@/lib/data/news'

export const metadata: Metadata = {
  title: 'About',
  description:
    'About Mount Auburn Cemetery — our mission, leadership, history, and news.',
}

function formatDate(dateStr: string) {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2400&q=80"
          alt="Mount Auburn Cemetery autumn landscape"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/75 via-deep-forest/20 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-16 px-6 lg:px-16 max-w-[1440px] mx-auto w-full">
          <p className="label text-cream/70 mb-4">About Mount Auburn</p>
          <h1 className="font-display text-cream leading-[1.1]" style={{ fontSize: 'clamp(3rem, 5vw, 4rem)' }}>
            Our Mission
          </h1>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-cream section-padding">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="max-w-3xl">
            <ScrollReveal>
              <SectionLabel className="mb-4">Since 1831</SectionLabel>
              <blockquote
                className="font-display text-evergreen leading-[1.2] mb-8"
                style={{ fontSize: 'clamp(1.75rem, 2.5vw, 2.5rem)' }}
              >
                To be a place of beauty, solace, and learning — where the living and the memory of those who came before us exist in harmony.
              </blockquote>
              <p className="text-stone leading-[1.65] mb-6" style={{ fontSize: 'clamp(1rem, 1.1vw, 1.125rem)' }}>
                Mount Auburn Cemetery is a nonprofit organization dedicated to the preservation and
                celebration of this extraordinary landscape. We serve the families of those interred
                here, the broader public who walks our paths, the birders and botanists who study
                our collections, and the scholars who work in our archives.
              </p>
              <p className="text-stone leading-[1.65]" style={{ fontSize: 'clamp(1rem, 1.1vw, 1.125rem)' }}>
                We believe that a well-cared-for landscape is itself a form of civic generosity — that
                the beauty and serenity of Mount Auburn&rsquo;s 175 acres is a public good, and that our
                stewardship of it is a responsibility we hold on behalf of present and future generations.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="bg-ivory section-padding">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <ScrollReveal className="mb-12">
            <SectionLabel className="mb-4">Our Team</SectionLabel>
            <h2 className="font-display text-evergreen leading-[1.1]" style={{ fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)' }}>
              Leadership
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {staff.map((member, i) => (
              <ScrollReveal key={member.id} delay={0.05 * (i % 4)}>
                <div className="group">
                  <div className="relative aspect-square rounded-[3px] overflow-hidden mb-4 bg-stone/10">
                    {member.imageUrl && (
                      <Image
                        src={member.imageUrl}
                        alt={member.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        style={{ objectFit: 'cover', objectPosition: 'top' }}
                        className="grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    )}
                  </div>
                  <h3 className="font-display text-evergreen leading-tight mb-0.5" style={{ fontSize: '1.1875rem' }}>
                    {member.name}
                  </h3>
                  <p className="text-brass text-sm mb-3">{member.title}</p>
                  {member.bio && (
                    <p className="text-stone text-xs leading-relaxed line-clamp-3">{member.bio}</p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section id="news" className="bg-cream section-padding">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <ScrollReveal className="mb-12">
            <SectionLabel className="mb-4">News</SectionLabel>
            <h2 className="font-display text-evergreen leading-[1.1]" style={{ fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)' }}>
              From the Cemetery
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {newsPosts.map((post, i) => (
              <ScrollReveal key={post.id} delay={0.1 * Math.min(i, 3)}>
                <article className="group flex gap-5 border-b border-stone/15 pb-8">
                  {post.imageUrl && (
                    <div className="relative w-24 h-24 flex-shrink-0 rounded-[2px] overflow-hidden">
                      <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        sizes="96px"
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="label text-brass text-[10px]">{post.category}</span>
                      <span className="text-stone/50 text-xs">{formatDate(post.date)}</span>
                    </div>
                    <h3 className="font-display text-evergreen leading-[1.25] mb-2 group-hover:text-brass transition-colors" style={{ fontSize: '1.1875rem' }}>
                      {post.title}
                    </h3>
                    <p className="text-stone text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
