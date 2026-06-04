'use client'
import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = {
  Visit: [
    { label: 'Plan Your Visit', href: '/visit' },
    { label: 'Hours & Directions', href: '/visit#directions' },
    { label: 'Accessibility', href: '/visit#accessibility' },
    { label: 'Visitor Guidelines', href: '/visit#guidelines' },
  ],
  Explore: [
    { label: 'History', href: '/explore/history' },
    { label: 'The Arboretum', href: '/explore/arboretum' },
    { label: 'Notable Residents', href: '/explore/notable-residents' },
    { label: 'Self-Guided Tours', href: '/explore/tours' },
    { label: "What's in Bloom", href: '/explore/bloom' },
    { label: 'Wildlife & Ecology', href: '/explore/wildlife' },
  ],
  Programs: [
    { label: 'Upcoming Events', href: '/events' },
    { label: 'Education Programs', href: '/events#education' },
    { label: 'Walking Tours', href: '/explore/tours' },
  ],
  Services: [
    { label: 'Burial & Cremation', href: '/services' },
    { label: 'Chapels & Venues', href: '/services#venues' },
    { label: 'Pre-planning', href: '/services#planning' },
    { label: 'FAQs', href: '/services/faq' },
  ],
  About: [
    { label: 'Our Mission', href: '/about' },
    { label: 'Leadership', href: '/about#leadership' },
    { label: 'News', href: '/about#news' },
    { label: 'Contact Us', href: '/about/contact' },
    { label: 'Support Mount Auburn', href: '/support' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-deep-forest text-cream">
      {/* Main Footer */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-20 pb-10">
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b hairline">
          {/* Brand + mission */}
          <div className="lg:col-span-3">
            <Link href="/" className="block mb-4">
              <span className="font-display text-xl text-cream">Mount Auburn Cemetery</span>
            </Link>
            <p className="text-cream/60 text-sm leading-relaxed mb-6">
              America&rsquo;s first garden cemetery — a living landscape where history, nature, and memory converge.
            </p>
            <div className="flex items-center gap-4">
              {[
                { href: 'https://instagram.com', label: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                { href: 'https://facebook.com', label: 'Facebook', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
                { href: 'https://twitter.com', label: 'X / Twitter', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
                { href: 'https://youtube.com', label: 'YouTube', path: 'M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z' },
              ].map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-cream/50 hover:text-cream transition-colors duration-200"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8">
            {Object.entries(footerLinks).slice(0, 3).map(([section, links]) => (
              <div key={section}>
                <h4 className="label text-cream/50 mb-4">{section}</h4>
                <ul className="space-y-2.5">
                  {links.map(link => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-cream/70 hover:text-cream transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {Object.entries(footerLinks).slice(3, 5).map(([section, links]) => (
              <div key={section}>
                <h4 className="label text-cream/50 mb-4">{section}</h4>
                <ul className="space-y-2.5">
                  {links.map(link => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-cream/70 hover:text-cream transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact + Hours */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h4 className="label text-cream/50 mb-4">Hours</h4>
              <p className="text-sm text-cream/70 leading-relaxed">
                Daily 8:00 AM &ndash; 8:00 PM
                <br />
                <span className="text-cream/50 text-xs">Extended hours May&ndash;October</span>
              </p>
            </div>
            <div className="space-y-3">
              <a
                href="https://maps.google.com/?q=580+Mount+Auburn+Street+Cambridge+MA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-cream/70 hover:text-cream transition-colors group"
              >
                <MapPin size={15} className="mt-0.5 shrink-0 text-sage" />
                <span>580 Mount Auburn Street<br />Cambridge, MA 02138</span>
              </a>
              <a
                href="tel:+16175477105"
                className="flex items-center gap-3 text-sm text-cream/70 hover:text-cream transition-colors"
              >
                <Phone size={15} className="text-sage shrink-0" />
                +1 617 547 7105
              </a>
              <a
                href="mailto:info@mountauburn.org"
                className="flex items-center gap-3 text-sm text-cream/70 hover:text-cream transition-colors"
              >
                <Mail size={15} className="text-sage shrink-0" />
                info@mountauburn.org
              </a>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="label text-cream/50 mb-3">Stay in Touch</h4>
              <form
                onSubmit={e => e.preventDefault()}
                className="flex gap-2"
              >
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-white/10 border border-sage/30 text-cream placeholder-cream/30 text-sm px-3 py-2.5 rounded-[3px] focus:outline-none focus:border-sage/70 transition-colors"
                />
                <button
                  type="submit"
                  className="bg-sage text-deep-forest text-sm font-medium px-4 py-2.5 rounded-[3px] hover:bg-sage/80 transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/40">
            &copy; {new Date().getFullYear()} Mount Auburn Cemetery. All rights reserved.
          </p>
          <p className="text-xs text-cream/40 text-center">
            National Historic Landmark &nbsp;&middot;&nbsp; Accredited Arboretum &nbsp;&middot;&nbsp; American Alliance of Museums
          </p>
          <div className="flex items-center gap-5">
            <Link href="/about/contact" className="text-xs text-cream/40 hover:text-cream/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/about/contact" className="text-xs text-cream/40 hover:text-cream/70 transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
