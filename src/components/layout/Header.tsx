'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, Search } from 'lucide-react'

const navLinks = [
  { label: 'Visit', href: '/visit' },
  { label: 'Explore', href: '/explore' },
  { label: 'Events', href: '/events' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
]

const exploreLinks = [
  { label: 'History', href: '/explore/history' },
  { label: 'The Arboretum', href: '/explore/arboretum' },
  { label: 'Notable Residents', href: '/explore/notable-residents' },
  { label: 'Self-Guided Tours', href: '/explore/tours' },
  { label: "What's in Bloom", href: '/explore/bloom' },
  { label: 'Wildlife & Ecology', href: '/explore/wildlife' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [exploreOpen, setExploreOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cream border-b border-stone/20 shadow-sm'
            : 'bg-transparent'
        }`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex flex-col leading-none group">
              <span
                className={`font-display font-semibold transition-colors duration-300 ${
                  scrolled ? 'text-evergreen' : 'text-cream'
                }`}
                style={{ fontSize: '1.1875rem' }}
              >
                Mount Auburn Cemetery
              </span>
              <span
                className={`label mt-0.5 transition-colors duration-300 ${
                  scrolled ? 'text-brass' : 'text-cream/60'
                }`}
                style={{ fontSize: '0.6875rem' }}
              >
                est. 1831
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map(link => {
                if (link.label === 'Explore') {
                  return (
                    <div
                      key={link.href}
                      className="relative"
                      onMouseEnter={() => setExploreOpen(true)}
                      onMouseLeave={() => setExploreOpen(false)}
                    >
                      <button
                        className={`link-underline text-sm font-medium tracking-wide transition-colors duration-300 flex items-center gap-1 ${
                          scrolled ? 'text-ink' : 'text-cream'
                        }`}
                      >
                        {link.label}
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="mt-0.5">
                          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </button>
                      <AnimatePresence>
                        {exploreOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-cream border border-stone/20 shadow-lg rounded-[3px] py-2 w-52"
                          >
                            {exploreLinks.map(subLink => (
                              <Link
                                key={subLink.href}
                                href={subLink.href}
                                className="block px-5 py-2.5 text-sm text-ink hover:text-evergreen hover:bg-ivory transition-colors duration-200"
                                onClick={() => setExploreOpen(false)}
                              >
                                {subLink.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`link-underline text-sm font-medium tracking-wide transition-colors duration-300 ${
                      scrolled ? 'text-ink' : 'text-cream'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/support"
                className={`text-sm font-medium px-4 py-2 rounded-[3px] border transition-colors duration-300 ${
                  scrolled
                    ? 'border-evergreen text-evergreen hover:bg-evergreen hover:text-cream'
                    : 'border-cream text-cream hover:bg-cream hover:text-evergreen'
                }`}
              >
                Support
              </Link>
              <Link
                href="/locate"
                className="text-sm font-medium px-5 py-2 rounded-[3px] bg-brass text-cream hover:bg-[#8a6a2e] transition-colors duration-300 flex items-center gap-2"
              >
                <Search size={14} />
                Locate a Grave
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className={`lg:hidden p-2 rounded-[3px] transition-colors duration-300 ${
                scrolled ? 'text-ink' : 'text-cream'
              }`}
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[60] bg-black/40"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-0 top-0 bottom-0 z-[70] w-full max-w-sm bg-deep-forest flex flex-col"
            >
              <div className="flex items-center justify-between px-6 py-6 border-b border-sage/20">
                <div>
                  <p className="font-display text-cream text-lg">Mount Auburn Cemetery</p>
                  <p className="label text-cream/50 text-xs mt-0.5">est. 1831</p>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-cream/70 hover:text-cream transition-colors p-2"
                  aria-label="Close navigation menu"
                >
                  <X size={22} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-6 py-8">
                {navLinks.map((link, i) => (
                  <div key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-4 text-cream font-medium text-lg border-b border-sage/10 hover:text-sage transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                    {link.label === 'Explore' && (
                      <div className="pl-4 pb-2">
                        {exploreLinks.map(sub => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => setMobileOpen(false)}
                            className="block py-2.5 text-cream/60 text-sm hover:text-cream transition-colors duration-200"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              <div className="px-6 pb-10 pt-4 space-y-3 border-t border-sage/20">
                <Link
                  href="/locate"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-brass text-cream rounded-[3px] font-medium hover:bg-[#8a6a2e] transition-colors duration-200"
                >
                  <Search size={16} />
                  Locate a Grave
                </Link>
                <Link
                  href="/support"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-full py-3.5 border border-sage/40 text-cream/80 rounded-[3px] font-medium hover:border-cream hover:text-cream transition-colors duration-200"
                >
                  Support Our Mission
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
