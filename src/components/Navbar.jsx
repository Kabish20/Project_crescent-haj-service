import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Packages',
    dropdown: [
      { label: 'Umrah Packages', path: '/umrah-packages' },
      { label: 'Customized Umrah & Hajj', path: '/customizedumrah' },
    ]
  },
  { label: 'Ziyarat', path: '/ziyarat-tours' },
  { label: 'Nikkah Services', path: '/nikkah-masjids' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
    setMobileExpanded(null)
  }, [location])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'navbar-scrolled' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center group" aria-label="Crescent Haj Service Home">
            <img
              src="/logo.png"
              alt="Crescent Haj Service Logo"
              className="h-20 w-auto object-contain transition-all duration-300 group-hover:scale-105"
              style={{
                filter: 'invert(1) hue-rotate(180deg) saturate(2) brightness(1.2)',
                opacity: 0.95,
              }}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className="px-4 py-2 text-sm font-body font-medium transition-colors rounded-lg flex items-center gap-1"
                    style={{color: scrolled ? 'rgba(250,248,243,0.8)' : 'rgba(250,248,243,0.9)'}}
                  >
                    {link.label}
                    <svg
                      className="w-3 h-3 opacity-70 transition-transform duration-200"
                      style={{ transform: activeDropdown === link.label ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`absolute top-full left-0 pt-2 w-52 transition-all duration-300 transform ${
                      activeDropdown === link.label
                        ? 'opacity-100 translate-y-0 pointer-events-auto visible'
                        : 'opacity-0 translate-y-2 pointer-events-none invisible'
                    }`}
                    style={{ zIndex: 50 }}
                  >
                    <div
                      className="rounded-xl overflow-hidden shadow-2xl"
                      style={{
                        background: 'rgba(10,15,13,0.97)',
                        border: '1px solid rgba(201,168,76,0.2)',
                        backdropFilter: 'blur(20px)',
                      }}
                    >
                      {link.dropdown.map(item => {
                        const isExternal = item.path.startsWith('http');
                        const linkProps = isExternal ? { href: item.path } : { to: item.path };
                        const LinkComponent = isExternal ? 'a' : Link;
                        return (
                          <LinkComponent
                            key={item.path}
                            {...linkProps}
                            className="block px-5 py-3 text-sm font-body font-medium transition-all"
                            style={{color:'rgba(250,248,243,0.8)', borderBottom:'1px solid rgba(201,168,76,0.1)'}}
                            onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold)'; e.currentTarget.style.background = 'rgba(201,168,76,0.08)'; e.currentTarget.style.paddingLeft = '28px'; }}
                            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(250,248,243,0.8)'; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.paddingLeft = '20px'; }}
                          >
                            {item.label}
                          </LinkComponent>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className="px-4 py-2 text-sm font-body font-medium transition-all rounded-lg relative group"
                  style={{color: location.pathname === link.path ? 'var(--gold)' : (scrolled ? 'rgba(250,248,243,0.8)' : 'rgba(250,248,243,0.9)')}}
                >
                  {link.label}
                  <span className="absolute bottom-1 left-4 right-4 h-px scale-x-0 group-hover:scale-x-100 transition-transform origin-left" style={{background:'var(--gold)'}}></span>
                </Link>
              )
            )}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/918110082222?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20your%20Umrah%20packages."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-5 py-2.5 rounded-full text-sm font-body font-bold flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M11.997 2C6.477 2 2 6.477 2 12c0 1.822.482 3.531 1.325 5.012L2 22l5.132-1.308A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 11.997 2z" opacity=".3"/>
              </svg>
              WhatsApp Advisor
            </a>
          </div>

          {/* Mobile Burger */}
          <button
            id="mobile-menu-btn"
            className="lg:hidden relative z-60 flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span
              className="block w-6 h-0.5 transition-all duration-300 origin-center"
              style={{
                background: 'var(--gold)',
                transform: mobileOpen ? 'translateY(8px) rotate(45deg)' : 'none'
              }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-300"
              style={{
                background: 'var(--gold)',
                opacity: mobileOpen ? 0 : 1,
                transform: mobileOpen ? 'scaleX(0)' : 'scaleX(1)'
              }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-300 origin-center"
              style={{
                background: 'var(--gold)',
                transform: mobileOpen ? 'translateY(-8px) rotate(-45deg)' : 'none'
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className="lg:hidden fixed inset-0 z-55 transition-all duration-400"
        style={{
          background: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(4px)',
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'auto' : 'none',
        }}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Panel */}
      <div
        className="lg:hidden fixed inset-y-0 right-0 w-80 z-60 transition-transform duration-400 ease-in-out"
        style={{
          background: 'rgba(10,15,13,0.99)',
          backdropFilter: 'blur(24px)',
          borderLeft: '1px solid rgba(201,168,76,0.2)',
          transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
          boxShadow: mobileOpen ? '-20px 0 60px rgba(0,0,0,0.5)' : 'none',
        }}
        aria-hidden={!mobileOpen}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Mobile Header */}
          <div className="flex items-center justify-between px-6 pt-6 pb-5" style={{ borderBottom: '1px solid rgba(201,168,76,0.15)' }}>
            <img
              src="/logo.png"
              alt="Crescent Haj Service"
              className="h-14 w-auto object-contain"
              style={{ filter: 'invert(1) hue-rotate(180deg) saturate(2) brightness(1.2)', opacity: 0.95 }}
            />
            <button
              onClick={() => setMobileOpen(false)}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all"
              style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.25)', color: 'var(--gold)' }}
              aria-label="Close menu"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex-1 px-6 py-4 space-y-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label}>
                  <button
                    className="w-full flex items-center justify-between py-3.5 text-sm font-body font-semibold"
                    style={{ color: mobileExpanded === link.label ? 'var(--gold)' : 'rgba(250,248,243,0.85)', borderBottom: '1px solid rgba(201,168,76,0.08)' }}
                    onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                  >
                    <span>{link.label}</span>
                    <svg
                      className="w-4 h-4 transition-transform duration-200"
                      style={{ transform: mobileExpanded === link.label ? 'rotate(180deg)' : 'rotate(0deg)', color: 'var(--gold)' }}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {/* Accordion submenu */}
                  <div
                    style={{
                      overflow: 'hidden',
                      maxHeight: mobileExpanded === link.label ? `${link.dropdown.length * 52}px` : '0px',
                      transition: 'max-height 0.3s ease',
                    }}
                  >
                    <div className="py-2 pl-2 space-y-0.5" style={{ background: 'rgba(201,168,76,0.04)', borderRadius: '8px', marginBottom: '4px' }}>
                      {link.dropdown.map(item => {
                        const isExternal = item.path.startsWith('http');
                        const linkProps = isExternal ? { href: item.path } : { to: item.path };
                        const LinkComponent = isExternal ? 'a' : Link;
                        return (
                          <LinkComponent
                            key={item.path}
                            {...linkProps}
                            className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-body transition-all"
                            style={{ color: location.pathname === item.path ? 'var(--gold)' : 'rgba(250,248,243,0.65)' }}
                            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.08)'; e.currentTarget.style.color = 'var(--gold)'; }}
                            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = location.pathname === item.path ? 'var(--gold)' : 'rgba(250,248,243,0.65)'; }}
                            onClick={() => setMobileOpen(false)}
                          >
                            <span className="w-1 h-1 rounded-full shrink-0" style={{ background: 'var(--gold)', opacity: 0.5 }} />
                            {item.label}
                          </LinkComponent>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className="flex items-center justify-between py-3.5 text-sm font-body font-medium transition-colors"
                  style={{
                    color: location.pathname === link.path ? 'var(--gold)' : 'rgba(250,248,243,0.85)',
                    borderBottom: '1px solid rgba(201,168,76,0.08)'
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--gold)' }} />
                  )}
                </Link>
              )
            )}
          </nav>

          {/* Mobile Footer */}
          <div className="px-6 pb-8 pt-4 space-y-3" style={{ borderTop: '1px solid rgba(201,168,76,0.12)' }}>
            <a
              href="https://wa.me/918110082222"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold w-full py-3.5 rounded-full text-sm font-bold text-center flex items-center justify-center gap-2"
              onClick={() => setMobileOpen(false)}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              </svg>
              WhatsApp Advisor
            </a>
            <a
              href="tel:+918110082222"
              className="w-full py-3.5 rounded-full text-sm font-bold text-center flex items-center justify-center gap-2 font-body transition-all"
              style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.25)', color: 'var(--gold)' }}
              onClick={() => setMobileOpen(false)}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
              </svg>
              Call: +91 8110082222
            </a>
            <p className="text-center text-xs font-body" style={{ color: 'rgba(201,168,76,0.4)' }}>
              Mon–Sat · 9am–7pm IST
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
