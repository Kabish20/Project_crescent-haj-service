import { Link } from 'react-router-dom'
import { useReveal } from '../components/ScrollReveal'

export default function UmrahPackages() {
  useReveal()
  const packages = [
    { title: 'Umrah from India', desc: 'Complete end-to-end packages departing from major Indian cities. Includes flights, visa, hotels, food, transport & comprehensive Ziyarat.', path: '/umrah-india', img: '/madinah_mosque.png', icon: '🇮🇳' },
    { title: 'Umrah from UAE', desc: 'Specially tailored packages for UAE residents, expats, and families. Flexible travel dates, premium hotels, and quick visa processing.', path: '/umrah-uae', img: '/hero_makkah.png', icon: '🇦🇪' },
    { title: 'Tailor-Made Umrah', desc: 'Design your own Umrah itinerary. Choose your exact travel dates, preferred airlines, hotel distance from the Haram, and VIP transport.', path: '/tailor-made', img: '/umrah_package.png', icon: '✨' },
  ]
  const tiers = [
    { name: 'Economy Package', price: 'Ask for Price', hotel: '500m–1km', meals: 'Breakfast Only', duration: '10–12 Days', transport: 'Shared Coach', features: ['Group Departure', 'Basic Ziyarat Included', 'Group Guide Provided', 'Standard Processing Visa', 'Complimentary 5L Zamzam'] },
    { name: 'Family Comfort', price: 'Ask for Price', hotel: '200–500m', meals: 'Full Board (3 Meals)', duration: '12–14 Days', transport: 'Premium AC Coach', features: ['Interconnecting Family Rooms', 'Elderly Care Assistance', 'Extended Ziyarat + Shopping', 'Tamil/Urdu/English Guides', 'Complimentary 5L Zamzam'], popular: true },
    { name: 'Haram View Premium', price: 'Ask for Price', hotel: '50–150m (Clock Tower/Similar)', meals: 'Full Board (Buffet)', duration: '14 Days', transport: 'Private Minivan/Coach', features: ['Direct Haram View Room', 'Priority Check-In/Out', 'Dedicated Scholar/Guide', 'Premium Flight Airlines', 'VIP Ziyarat Access'] },
    { name: 'VIP Private', price: 'Ask for Price', hotel: 'Haram View 5★ Luxury', meals: 'All Inclusive A la Carte', duration: 'Fully Flexible', transport: 'Private GMC/SUV', features: ['Personal 24/7 Concierge', 'Ultra-Luxury Hotels (e.g. Fairmont)', 'Private Custom Ziyarat', 'Fast-track Visa & Airport', 'Exclusive Welcome Kit'] },
  ]
  return (
    <div>
      <div className="relative pt-32 pb-20 text-center overflow-hidden" style={{ background: 'var(--dark-bg)' }}>
        <div className="glow-orb opacity-50" style={{ top: '-40%', left: '-20%' }} />
        <div className="absolute inset-0 islamic-pattern opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <span className="inline-block text-xs font-body font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
            style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)', color: 'var(--gold)' }}>
            Year-Round Departures
          </span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6" style={{ color: 'var(--pearl)' }}>Umrah Packages</h1>
          <p className="font-body text-lg leading-relaxed" style={{ color: 'rgba(250,248,243,0.7)' }}>
            Experience the profound peace of the lesser pilgrimage. We offer meticulously crafted Umrah packages from India, UAE, and worldwide, tailored to your family's needs and budget.
          </p>
        </div>
      </div>

      <section className="py-20" style={{ background: 'var(--sand)' }}>
        <div className="max-w-5xl mx-auto px-6 text-center reveal">
          <h2 className="font-heading text-4xl font-bold mb-6" style={{ color: 'var(--emerald)' }}>The Virtues of Umrah</h2>
          <p className="font-body text-base leading-relaxed mb-6" style={{ color: 'rgba(26,26,26,0.7)' }}>
            Umrah is a beautiful Sunnah and an act of worship that purifies the heart and washes away sins. As the Prophet (ﷺ) said: <br/><br/>
            <strong className="font-heading text-2xl italic" style={{ color: 'var(--gold)' }}>"An Umrah to another Umrah is an expiation for whatever sins are committed between them."</strong>
          </p>
          <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(26,26,26,0.7)' }}>
            Whether you are embarking on your first Umrah or returning to the sacred lands, Crescent Haj Service is dedicated to making your journey smooth, deeply spiritual, and completely worry-free. From securing the best hotels near the Haram to providing knowledgeable guides, we handle every detail.
          </p>
        </div>
      </section>

      <section className="py-20" style={{ background: 'var(--pearl)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading text-4xl font-bold text-center mb-12" style={{ color: 'var(--emerald)' }}>Explore Our Core Packages</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {packages.map(p => (
              <Link key={p.path} to={p.path} className="tilt-card hover-shimmer package-card glass-card-light rounded-2xl overflow-hidden reveal flex flex-col">
                <div className="tilt-shine" />
                <img src={p.img} alt={p.title} className="pkg-img w-full h-56 object-cover" />
                <div className="p-8 flex flex-col flex-1">
                  <div className="text-4xl mb-4">{p.icon}</div>
                  <h3 className="font-heading text-2xl font-bold mb-3" style={{ color: 'var(--emerald)' }}>{p.title}</h3>
                  <p className="font-body text-sm leading-relaxed mb-6 flex-1" style={{ color: 'rgba(26,26,26,0.65)' }}>{p.desc}</p>
                  <span className="text-sm font-body font-bold inline-flex items-center gap-2 transition-transform hover:translate-x-2" style={{ color: 'var(--emerald)' }}>
                    View Detailed Itinerary <span className="text-lg">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <h2 className="font-heading text-4xl font-bold mb-4" style={{ color: 'var(--emerald)' }}>Compare Package Tiers</h2>
            <p className="font-body text-base" style={{ color: 'rgba(26,26,26,0.65)' }}>
              We believe every pilgrim deserves comfort. Choose a tier that perfectly aligns with your budget and requirements. All packages include standard visa processing and Ziyarat.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((t, i) => (
              <div key={t.name} className={`rounded-2xl p-6 reveal flex flex-col ${t.popular ? '' : 'glass-card-light'}`}
                style={{ 
                  transitionDelay: `${i * 0.1}s`,
                  ...(t.popular ? { background: 'linear-gradient(135deg,var(--emerald),#0e5c46)', border: '2px solid rgba(201,168,76,0.5)', boxShadow: '0 20px 40px rgba(13,74,58,0.15)' } : {})
                }}>
                {t.popular && <div className="text-xs font-body font-bold uppercase tracking-wider mb-3 text-center" style={{ color: 'var(--gold)' }}>✦ Most Popular Choice</div>}
                <h3 className="font-heading text-2xl font-bold mb-6 text-center" style={{ color: t.popular ? 'var(--gold)' : 'var(--emerald)' }}>{t.name}</h3>
                
                <div className="space-y-4 mb-6 flex-1">
                  {[
                    { icon: '⏱', label: 'Duration', val: t.duration },
                    { icon: '🏨', label: 'Hotel', val: t.hotel },
                    { icon: '🍽', label: 'Meals', val: t.meals },
                    { icon: '🚌', label: 'Transport', val: t.transport }
                  ].map((item) => (
                    <div key={item.label} className="flex gap-3 items-start border-b pb-3" style={{ borderColor: t.popular ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)' }}>
                      <span className="text-lg mt-0.5">{item.icon}</span>
                      <div>
                        <p className="text-xs font-body uppercase tracking-wider font-bold mb-1" style={{ color: t.popular ? 'rgba(201,168,76,0.8)' : 'rgba(13,74,58,0.6)' }}>{item.label}</p>
                        <p className="text-sm font-body font-semibold" style={{ color: t.popular ? 'var(--pearl)' : 'var(--charcoal)' }}>{item.val}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mb-8">
                  <p className="text-xs font-body uppercase tracking-wider font-bold mb-3" style={{ color: t.popular ? 'rgba(201,168,76,0.8)' : 'rgba(13,74,58,0.6)' }}>Package Highlights</p>
                  {t.features.map(f => (
                    <div key={f} className="flex items-start gap-2 text-sm font-body mb-2" style={{ color: t.popular ? 'rgba(250,248,243,0.9)' : 'rgba(26,26,26,0.75)' }}>
                      <span className="mt-0.5" style={{ color: 'var(--gold)' }}>✓</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <a href="https://wa.me/916382220393" target="_blank" rel="noopener noreferrer"
                  className={`mt-auto w-full text-center py-3.5 rounded-full font-body font-bold text-sm transition-transform hover:-translate-y-1 ${t.popular ? 'btn-gold' : 'btn-emerald'}`}>
                  Get Detailed Quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
