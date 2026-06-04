'use client'
import { useState } from 'react'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'

const subjects = [
  'General Inquiry',
  'Plan a Visit',
  'Burial & Memorial Services',
  'Pre-planning',
  'Locate a Burial Record',
  'Press & Media',
  'Events & Programs',
  'Membership & Giving',
  'Horticulture & Arboretum',
  'Other',
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px]">
        <Image
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=2400&q=80"
          alt="Mount Auburn Cemetery"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/80 via-deep-forest/20 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-12 px-6 lg:px-16 max-w-[1440px] mx-auto w-full">
          <p className="label text-cream/70 mb-4">About / Contact</p>
          <h1 className="font-display text-cream leading-[1.1]" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
            Contact Us
          </h1>
        </div>
      </section>

      <section className="bg-cream section-padding">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <SectionLabel className="mb-4">Get in Touch</SectionLabel>
                <h2 className="font-display text-evergreen leading-[1.15] mb-8" style={{ fontSize: 'clamp(1.5rem, 2vw, 2rem)' }}>
                  Send Us a Message
                </h2>
              </ScrollReveal>

              {submitted ? (
                <ScrollReveal>
                  <div className="bg-evergreen/5 border border-evergreen/20 rounded-[3px] p-10 text-center">
                    <p className="font-display text-evergreen text-2xl mb-3">Thank you</p>
                    <p className="text-stone leading-relaxed">
                      Your message has been received. A member of our team will be in touch within two business days.
                    </p>
                  </div>
                </ScrollReveal>
              ) : (
                <ScrollReveal delay={0.1}>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="label text-stone block mb-2">Your Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          className="w-full border border-stone/25 text-ink bg-ivory px-4 py-3 rounded-[3px] text-sm focus:outline-none focus:border-evergreen/50 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="label text-stone block mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          className="w-full border border-stone/25 text-ink bg-ivory px-4 py-3 rounded-[3px] text-sm focus:outline-none focus:border-evergreen/50 transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="label text-stone block mb-2">Subject *</label>
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        required
                        className="w-full border border-stone/25 text-ink bg-ivory px-4 py-3 rounded-[3px] text-sm focus:outline-none focus:border-evergreen/50 transition-colors"
                      >
                        <option value="">Select a subject…</option>
                        {subjects.map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="label text-stone block mb-2">Message *</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full border border-stone/25 text-ink bg-ivory px-4 py-3 rounded-[3px] text-sm focus:outline-none focus:border-evergreen/50 transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-evergreen text-cream font-medium px-8 py-3.5 rounded-[3px] hover:bg-deep-forest transition-colors duration-300"
                    >
                      Send Message
                    </button>
                  </form>
                </ScrollReveal>
              )}
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={0.2}>
                <SectionLabel className="mb-4">Information</SectionLabel>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-9 h-9 rounded-full bg-evergreen/10 flex items-center justify-center flex-shrink-0">
                      <MapPin size={16} className="text-evergreen" />
                    </div>
                    <div>
                      <p className="font-medium text-ink mb-1 text-sm">Address</p>
                      <p className="text-stone text-sm leading-relaxed">
                        580 Mount Auburn Street<br />
                        Cambridge, MA 02138
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-9 h-9 rounded-full bg-evergreen/10 flex items-center justify-center flex-shrink-0">
                      <Phone size={16} className="text-evergreen" />
                    </div>
                    <div>
                      <p className="font-medium text-ink mb-1 text-sm">Phone</p>
                      <a href="tel:+16175477105" className="text-stone text-sm hover:text-evergreen transition-colors">
                        +1 617 547 7105
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-9 h-9 rounded-full bg-evergreen/10 flex items-center justify-center flex-shrink-0">
                      <Mail size={16} className="text-evergreen" />
                    </div>
                    <div>
                      <p className="font-medium text-ink mb-1 text-sm">Email</p>
                      <a href="mailto:info@mountauburn.org" className="text-stone text-sm hover:text-evergreen transition-colors">
                        info@mountauburn.org
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-9 h-9 rounded-full bg-evergreen/10 flex items-center justify-center flex-shrink-0">
                      <Clock size={16} className="text-evergreen" />
                    </div>
                    <div>
                      <p className="font-medium text-ink mb-1 text-sm">Office Hours</p>
                      <p className="text-stone text-sm leading-relaxed">
                        Monday – Friday<br />
                        8:30 AM – 4:30 PM
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
