import { useReveal, SectionHeader } from '../components/ScrollReveal'
import { Link } from 'react-router-dom'

const travelOptions = [
  {
    icon: '✈️',
    title: 'Express Air Travel',
    badge: 'Most Popular',
    desc: 'Direct flights from Dubai (DXB), Sharjah (SHJ), and Abu Dhabi (AUH) via Emirates, FlyDubai, Air Arabia, and Saudia. Arrive in Jeddah or Madinah in under 3 hours — perfect for 3 to 5-day weekend Umrah trips.',
    features: ['DXB/SHJ/AUH departure', 'Flights from AED 350+', 'Land in Jeddah or Madinah', 'Ideal for short trips']
  },
  {
    icon: '🚌',
    title: 'Luxury Overland Coach',
    badge: 'Budget-Friendly',
    desc: 'Economical 10 to 14-day overland packages departing every Wednesday and Saturday from Dubai and Sharjah. Premium AC sleeper coaches with reclining seats, meals, and prayer stops en route.',
    features: ['Departs Wed & Sat from Dubai', 'Border crossing included', 'Sleeper AC coach with meals', 'Budget-conscious option']
  },
  {
    icon: '🚗',
    title: 'Private VIP Transfer',
    badge: 'Premium',
    desc: 'For families and executives who want a first-class experience. Dedicated GMC Yukon, Toyota Hiace, or Mercedes Sprinter — fully private, on-demand, no schedule to follow.',
    features: ['Private vehicle only for your group', 'Pick up from any UAE emirate', 'Professional driver + guide', 'Custom stops & schedule']
  }
]

const features = [
  { icon: '🪪', title: 'Emirates ID Fast-Track Visa', desc: 'UAE residents with valid Emirates ID get Umrah E-Visa processed within 24 hours through our authorized Saudi agent channels.' },
  { icon: '🏨', title: '5-Star Haram-View Hotels', desc: 'We book directly with Fairmont, Swissôtel, Hilton, and Marriott — negotiated rates ensure you get premium rooms at the best prices.' },
  { icon: '🚄', title: 'Haramain High-Speed Rail', desc: 'Fast-track tickets on the 300km/h Haramain Railway between Jeddah, Makkah, and Madinah — no traffic, arrives in 30 minutes.' },
  { icon: '📅', title: 'Flexible Dates Year-Round', desc: 'No fixed group departure. Book any week throughout the year including Ramadan, school holidays, and long UAE public holidays.' },
  { icon: '🌙', title: 'Ramadan Special Packages', desc: 'Exclusive Ramadan Umrah packages with extended stays (last 10 nights), Itikaf arrangements, and Eid al-Fitr in Makkah options.' },
  { icon: '👨‍👩‍👧‍👦', title: 'Family & Group Specialist', desc: 'Group discounts for 10+ pilgrims. Interconnecting family rooms, children-friendly itineraries, and multilingual guides.' },
]

const testimonials = [
  { name: 'Sameera Begum', city: 'Dubai, UAE', text: 'Booked Umrah from Dubai for my family. Seamless process, excellent hotels, and very affordable. Jazakallah khair to the Crescent team.' },
  { name: 'Rashid Al Farsi', city: 'Abu Dhabi, UAE', text: 'The weekend Executive Umrah package was perfect for my schedule. Left Thursday, back Sunday — performed a beautiful Umrah in between.' },
  { name: 'Khadeeja Noor', city: 'Sharjah, UAE', text: 'First time performing Umrah. The guide was extremely helpful and patient. Hotels were stunning. Already planning to go again!' },
]

export default function UmrahUAE() {
  useReveal()
  return (
    <div>
      {/* Hero */}
      <div className="relative pt-20 sm:pt-32 pb-12 sm:pb-20 text-center overflow-hidden" style={{ background: 'var(--dark-bg)' }}>
        <div className="glow-orb opacity-50" style={{ top: '-40%', left: '-20%' }} />
        <div className="absolute inset-0 islamic-pattern opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <span className="inline-block text-xs font-body font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
            style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)', color: 'var(--gold)' }}>
            🇦🇪 Exclusive For UAE Residents
          </span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6" style={{ color: 'var(--pearl)' }}>
            Umrah from UAE
          </h1>
          <p className="font-body text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: 'rgba(250,248,243,0.7)' }}>
            Fast-track visa processing, luxury weekend getaways, and flexible road or air travel options — specifically designed for expats, residents, and families of the United Arab Emirates.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a href="https://wa.me/918110082222?text=I%20want%20details%20about%20Umrah%20from%20UAE" target="_blank" rel="noopener noreferrer"
              className="btn-gold px-8 py-3.5 rounded-full font-body font-bold text-sm">
              Get UAE Package
            </a>
            <Link to="/contact" className="btn-ghost px-8 py-3.5 rounded-full font-body font-bold text-sm">
              Free Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* UAE Advantage Stats */}
      <section className="py-6" style={{ background: 'linear-gradient(90deg, var(--emerald) 0%, #0e5c46 50%, var(--emerald) 100%)' }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center">
          {[
            { v: '<3h', l: 'Flight Duration' },
            { v: '24h', l: 'Visa Processing' },
            { v: '5★', l: 'Hotel Partners' },
            { v: 'Weekly', l: 'Departures' },
            { v: '24/7', l: 'WhatsApp Support' },
          ].map(s => (
            <div key={s.l} className="flex-1 min-w-[120px] text-center px-4 py-3 border-r last:border-r-0" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
              <p className="font-heading text-2xl font-bold" style={{ color: 'var(--gold)' }}>{s.v}</p>
              <p className="text-xs font-body font-medium tracking-wider uppercase mt-0.5" style={{ color: 'rgba(250,248,243,0.65)' }}>{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Travel Options */}
      <section className="py-20" style={{ background: 'var(--sand)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader eyebrow="How to Travel" title="Three Ways to Reach the Haramain" subtitle="Choose the travel style that suits your schedule, budget, and comfort level." />
          <div className="grid lg:grid-cols-3 gap-8">
            {travelOptions.map((t, i) => (
              <div key={t.title} className="glass-card-light p-8 rounded-2xl reveal relative overflow-hidden" style={{ transitionDelay: `${i * 0.1}s` }}>
                {i === 0 && (
                  <div className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full" style={{ background: 'var(--gold)', color: '#1a0e00' }}>
                    Most Popular
                  </div>
                )}
                <div className="text-4xl mb-5">{t.icon}</div>
                <h3 className="font-heading text-2xl font-bold mb-3" style={{ color: 'var(--emerald)' }}>{t.title}</h3>
                <p className="font-body text-sm leading-relaxed mb-5" style={{ color: 'rgba(26,26,26,0.65)' }}>{t.desc}</p>
                <ul className="space-y-2">
                  {t.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-xs font-body" style={{ color: 'rgba(26,26,26,0.7)' }}>
                      <span className="w-4 h-4 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(201,168,76,0.15)', color: 'var(--gold)', fontSize: '9px', fontWeight: 'bold' }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="https://wa.me/918110082222?text=I%20want%20details%20on%20Umrah%20from%20UAE" target="_blank" rel="noopener noreferrer"
                  className="mt-6 btn-emerald w-full py-3 rounded-full font-body font-bold text-sm text-center block">
                  Enquire Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Package - Weekend Executive */}
      <section className="py-20" style={{ background: 'var(--dark-bg)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="glass-card rounded-3xl p-8 md:p-12 reveal">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
                  style={{ background: 'rgba(201,168,76,0.15)', color: 'var(--gold)', border: '1px solid rgba(201,168,76,0.3)' }}>
                  ✦ Most Requested Package
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--pearl)' }}>
                  The Weekend Executive Umrah
                </h2>
                <p className="font-body text-base leading-relaxed mb-6" style={{ color: 'rgba(250,248,243,0.65)' }}>
                  Designed for busy professionals in Dubai, Abu Dhabi, and Sharjah. Depart on Thursday evening, perform Umrah on Friday, visit Madinah on Saturday, and return by Sunday evening. No annual leave required.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: '🕐', label: 'Duration', value: '3–4 Days' },
                    { icon: '🏨', label: 'Hotel', value: '5★ Haram-View' },
                    { icon: '✈️', label: 'Flight', value: 'Business Option Available' },
                    { icon: '🚗', label: 'Transport', value: 'Private GMC/SUV' },
                  ].map(d => (
                    <div key={d.label} className="py-3 px-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(201,168,76,0.15)' }}>
                      <div className="text-lg mb-1">{d.icon}</div>
                      <p className="font-body text-xs uppercase tracking-wider mb-0.5" style={{ color: 'rgba(201,168,76,0.6)' }}>{d.label}</p>
                      <p className="font-body text-sm font-bold" style={{ color: 'var(--pearl)' }}>{d.value}</p>
                    </div>
                  ))}
                </div>
                <ul className="space-y-2.5 mb-8">
                  {[
                    '5-Star Haram-View Hotels (Fairmont / Swissôtel)',
                    'Private VIP GMC/SUV airport transfers',
                    'Haramain High-Speed Rail tickets (Makkah ↔ Madinah)',
                    'Guided Ziyarat in Makkah and Madinah',
                    'Full-board meals included',
                  ].map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm font-body" style={{ color: 'rgba(250,248,243,0.8)' }}>
                      <span style={{ color: 'var(--gold)' }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a href="https://wa.me/918110082222?text=I%20want%20details%20on%20the%20Weekend%20Executive%20Umrah%20from%20UAE" target="_blank" rel="noopener noreferrer"
                  className="btn-gold px-8 py-4 rounded-full font-body font-bold text-sm inline-block">
                  Get Full Package Details
                </a>
              </div>
              <div className="relative h-72 lg:h-full min-h-[350px] rounded-2xl overflow-hidden shadow-2xl">
                <img src="/hero_makkah.png" alt="Makkah Haram View" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,15,13,0.6), transparent)' }} />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-card px-4 py-3 rounded-xl text-center">
                    <p className="font-body text-xs font-semibold" style={{ color: 'var(--gold)' }}>AVAILABLE WEEKLY</p>
                    <p className="font-heading text-2xl font-bold mt-1" style={{ color: 'var(--pearl)' }}>Thu – Sun Packages</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20" style={{ background: 'var(--pearl)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader eyebrow="Why Choose Us" title="The UAE Crescent Advantage" subtitle="Our UAE-based operations give you unmatched convenience, speed, and service quality." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={f.title} className="glass-card-light p-6 rounded-2xl reveal flex gap-4 items-start" style={{ transitionDelay: `${i * 0.07}s` }}>
                <div className="text-2xl shrink-0 mt-1">{f.icon}</div>
                <div>
                  <h3 className="font-heading text-lg font-bold mb-2" style={{ color: 'var(--emerald)' }}>{f.title}</h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(26,26,26,0.65)' }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{ background: 'var(--sand)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader eyebrow="Pilgrim Stories" title="UAE Pilgrims Speak" subtitle="Join hundreds of UAE-based families who have made their Umrah dream a reality with Crescent." />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="glass-card-light p-7 rounded-2xl reveal border-t-4" style={{ borderTopColor: 'var(--gold)', transitionDelay: `${i * 0.1}s` }}>
                <div className="flex mb-3">{[...Array(5)].map((_, j) => <span key={j} style={{ color: 'var(--gold)' }}>★</span>)}</div>
                <p className="font-heading text-base italic mb-5 leading-relaxed" style={{ color: 'rgba(26,26,26,0.75)' }}>"{t.text}"</p>
                <p className="font-body font-bold text-sm" style={{ color: 'var(--emerald)' }}>{t.name}</p>
                <p className="font-body text-xs" style={{ color: 'rgba(26,26,26,0.45)' }}>{t.city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center" style={{ background: 'linear-gradient(135deg, var(--emerald), #0e5c46)' }}>
        <div className="max-w-2xl mx-auto px-6 reveal">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--pearl)' }}>
            Plan Your UAE Umrah Today
          </h2>
          <p className="font-body text-base mb-8" style={{ color: 'rgba(250,248,243,0.7)' }}>
            Fast visa. Premium hotels. Hassle-free journey. Contact us now — it's free.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/918110082222?text=I%20want%20to%20book%20Umrah%20from%20UAE" target="_blank" rel="noopener noreferrer"
              className="btn-gold px-8 py-4 rounded-full font-body font-bold text-sm">
              WhatsApp Now
            </a>
            <Link to="/contact" className="btn-ghost px-8 py-4 rounded-full font-body font-bold text-sm">
              Send Enquiry Form
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
