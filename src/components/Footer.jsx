import { Link } from 'react-router-dom'

const footerLinks = {
  'Packages': [
    { label: 'Umrah Packages', path: '/umrah-packages' },
    { label: 'Customized Umrah & Hajj', path: '/customizedumrah' },
    { label: 'Ziyarat Tours', path: '/ziyarat-tours' },
  ],
  'Services': [
    { label: 'Nikkah in Holy Masjids', path: '/nikkah-masjids' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ]
}

export default function Footer() {
  return (
    <footer style={{background:'var(--dark-bg)', borderTop:'1px solid rgba(201,168,76,0.15)'}}>
      {/* Top CTA Banner */}
      <div className="py-12 text-center islamic-pattern relative overflow-hidden" style={{background:'linear-gradient(135deg,var(--emerald) 0%,#0e5c46 50%,var(--emerald) 100%)'}}>
        <div className="relative z-10">
          <p className="font-heading text-3xl md:text-4xl font-bold mb-3" style={{color:'var(--gold)'}}>
            Begin Your Sacred Journey Today
          </p>
          <p className="font-body mb-6" style={{color:'rgba(250,248,243,0.7)'}}>
            Talk to our pilgrimage advisors — completely free consultation
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/918110082222"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-8 py-3 rounded-full font-body font-bold text-sm"
            >
              WhatsApp Now
            </a>
            <Link to="/contact" className="btn-ghost px-8 py-3 rounded-full font-body font-bold text-sm">
              Plan My Pilgrimage
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-grid max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12 items-start">
        {/* Brand */}
        <div>
          <div className="mb-5">
            <img src="/logo.png" alt="Crescent Haj Service" className="h-20 w-auto object-contain"
              style={{filter:'invert(1) hue-rotate(180deg) saturate(2) brightness(1.2)', opacity:0.95}} />
          </div>
          <p className="text-sm font-body leading-relaxed mb-5" style={{color:'rgba(250,248,243,0.55)'}}>
            Your journey to the Haramain, planned with care. Premium pilgrimage services from India & UAE since 2009.
          </p>
          <p className="text-xs font-body font-semibold tracking-widest uppercase mb-2" style={{color:'var(--gold)'}}>Serving Since</p>
          <p className="font-heading text-3xl font-bold" style={{color:'rgba(250,248,243,0.9)'}}>2009</p>
          <div className="mt-7">
            <p className="text-xs font-body font-bold uppercase tracking-widest mb-3" style={{color:'var(--gold)'}}>Follow Our Journey</p>
            <div className="flex items-center gap-2.5">
              <a href="https://www.youtube.com/@CRESCENTHAJSERVICE/featured" target="_blank" rel="noopener noreferrer"
                className="footer-social" aria-label="Crescent Haj Service on YouTube" title="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" /></svg>
              </a>
              <a href="https://www.instagram.com/crescenthaj/?hl=en" target="_blank" rel="noopener noreferrer"
                className="footer-social" aria-label="Crescent Haj Service on Instagram" title="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.5" cy="6.7" r="1" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="https://www.facebook.com/CrescentHaj/" target="_blank" rel="noopener noreferrer"
                className="footer-social" aria-label="Crescent Haj Service on Facebook" title="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-8h2.8l.4-3h-3.2V8.1c0-.9.3-1.6 1.7-1.6h1.8V3.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.5v3H10v8h3.5Z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Links */}
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h4 className="font-body text-sm font-bold uppercase tracking-widest mb-5" style={{color:'var(--gold)'}}>
              {heading}
            </h4>
            <ul className="space-y-2.5">
              {links.map(link => {
                const isExternal = link.path.startsWith('http');
                const linkProps = isExternal ? { href: link.path } : { to: link.path };
                const LinkComponent = isExternal ? 'a' : Link;
                return (
                  <li key={link.path}>
                    <LinkComponent
                      {...linkProps}
                      className="text-sm font-body transition-all hover:pl-2 block"
                      style={{color:'rgba(250,248,243,0.55)'}}
                      onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                      onMouseLeave={e => e.target.style.color = 'rgba(250,248,243,0.55)'}
                    >
                      {link.label}
                    </LinkComponent>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}

        {/* Contact */}
        <div>
          <h4 className="font-body text-sm font-bold uppercase tracking-widest mb-5" style={{color:'var(--gold)'}}>
            Contact
          </h4>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{background:'rgba(201,168,76,0.1)', border:'1px solid rgba(201,168,76,0.2)'}}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{color:'var(--gold)'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                </svg>
              </div>
              <div className="text-sm font-body leading-relaxed" style={{color:'rgba(250,248,243,0.55)'}}>
                <p><strong style={{color:'rgba(250,248,243,0.8)'}}>Trichy, India</strong><br />Head Office<br />5, Crescent Park Apartment, Hazrath Sulaiman Street, Kaja Nagar, Trichy – 620020</p>
                <p className="mt-3"><strong style={{color:'rgba(250,248,243,0.8)'}}>Mahabubnagar, India</strong><br />Regional Office<br />#5-3-21/5/3, Plot No: 2, Behind Ali's Mart, Z&amp;Z Colony, Raichur Road, Mahabubnagar – 509 001, Telangana</p>
                <p className="mt-3"><strong style={{color:'rgba(250,248,243,0.8)'}}>Jeddah, Saudi Arabia</strong><br />Saudi Operations<br />8807, Prince Majid Street, 2104, Al Aziziyah Dist., 23342, Jeddah</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{background:'rgba(201,168,76,0.1)', border:'1px solid rgba(201,168,76,0.2)'}}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{color:'var(--gold)'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                </svg>
              </div>
              <div className="text-sm font-body" style={{color:'rgba(250,248,243,0.55)'}}>
                <p>+91 8110082222</p>
                <p className="text-xs mt-0.5" style={{color:'rgba(201,168,76,0.6)'}}>WhatsApp Available</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{background:'rgba(201,168,76,0.1)', border:'1px solid rgba(201,168,76,0.2)'}}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{color:'var(--gold)'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                </svg>
              </div>
              <p className="text-sm font-body" style={{color:'rgba(250,248,243,0.55)'}}>
                crescenthajservice@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t py-6 px-6 flex flex-col sm:flex-row items-center justify-between gap-3" style={{borderColor:'rgba(201,168,76,0.1)'}}>
        <p className="text-xs font-body text-center" style={{color:'rgba(250,248,243,0.35)'}}>
          © 2026 Crescent Haj Service. All rights reserved. Serving pilgrims with sincerity since 2009.
        </p>
        <p className="text-xs font-body" style={{color:'rgba(250,248,243,0.25)'}}>
          Made with ♥ for every pilgrim
        </p>
      </div>
    </footer>
  )
}
