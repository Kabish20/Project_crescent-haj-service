import { useReveal, SectionHeader } from '../components/ScrollReveal'
import { Link } from 'react-router-dom'

const features = [
  {
    icon: '✈️',
    title: 'Direct & Connecting Flights',
    desc: 'Partnered with Saudia, Air India, IndiGo, and Emirates for the best routes from all major Indian cities. Early morning and evening departures to suit your schedule.'
  },
  {
    icon: '🛂',
    title: 'Fastest Visa Processing',
    desc: 'E-Visa approval in 24–48 hours (vs. traditional 2-4 weeks). Our authorized processing channels ensure zero rejections. 100% visa success rate.'
  },
  {
    icon: '🍛',
    title: 'Authentic Home-Style Cuisine',
    desc: 'Taste Kerala parotta, Tamil idli sambhar, Andhra biryani, Hyderabadi haleem in Makkah. Chef-prepared meals in Saudi Arabia that remind you of home.'
  },
  {
    icon: '🗣️',
    title: 'Native Language Scholarship',
    desc: 'Tamil, Hindi, Urdu, and Malayalam-speaking Islamic scholars guide you through every ritual, Dua, and spiritual significance. Your language is your comfort.'
  },
  {
    icon: '🏨',
    title: 'Luxury Haram-View Hotels',
    desc: 'Stay in 4-5 star hotels within walking distance (2-5 mins) of Masjid al-Haram. Maximizes time for worship, minimizes travel fatigue. WiFi, AC, comfort.'
  },
  {
    icon: '🕌',
    title: 'Complete Ziyarat Guided Tours',
    desc: 'Visit Jabal Noor (Hira Cave), Jabal Thawr, Quba Mosque, Badr, Uhud, Medina Museum, and more. Scholar explains the historical significance of each site.'
  },
]

const inclusions = [
  'Round-trip economy / business class flights',
  'Saudi Umrah E-Visa processing',
  'Hotel accommodation (Makkah & Madinah)',
  'Full-board Indian cuisine meals',
  'AC coach from Makkah ↔ Madinah',
  'Airport pick-up & drop transfers',
  'Guided Makkah & Madinah Ziyarat',
  'Qualified Islamic scholar with the group',
  '5L Zamzam water per pilgrim',
  'Pre-departure orientation seminar',
  '24/7 on-ground support',
  'Emergency medical assistance access',
]

const departureCities = [
  { city: 'Chennai (MAA)', state: 'Tamil Nadu', airline: 'Saudia Airlines – Direct', freq: 'Multiple weekly' },
  { city: 'Mumbai (BOM)', state: 'Maharashtra', airline: 'Air India – Direct', freq: 'Daily' },
  { city: 'New Delhi (DEL)', state: 'Delhi', airline: 'Air India / IndiGo', freq: 'Daily' },
  { city: 'Hyderabad (HYD)', state: 'Telangana', airline: 'IndiGo / Emirates', freq: 'Multiple weekly' },
  { city: 'Bangalore (BLR)', state: 'Karnataka', airline: 'Emirates / Saudia', freq: 'Multiple weekly' },
  { city: 'Trichy (TRZ)', state: 'Tamil Nadu', airline: 'Charter / Saudia', freq: 'Group departures' },
]

const testimonials = [
  { name: 'Amina Fathima', city: 'Trichy', text: 'The Tamil-speaking scholar made every ritual crystal clear. We understood the Dua meanings for the first time. And the food... we felt like we were eating at home. Crescent, you have won our hearts forever! SubhanAllah.' },
  { name: 'Ibrahim Hassan', city: 'Chennai', text: 'From visa approval (24 hours!) to landing in Makkah, everything was seamless. The hotel was perfect — I walked to Haram in 3 minutes for Fajr. Focused 100% on Ibadah. Thank you, Crescent. Alhamdulillah.' },
  { name: 'Fatima Begum', city: 'Mumbai', text: 'My mother needed special care due to her age. The team arranged wheelchair Tawaf, helped with wudu facilities, and never left her side. She keeps saying Crescent feels like family. Jazakallah khair, we\'ll be back next Umrah!' },
]

export default function UmrahIndia() {
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
            🇮🇳 Departures Across India
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6" style={{ color: 'var(--pearl)' }}>
            Umrah from Every Indian City
          </h1>
          <p className="font-body text-base sm:text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: 'rgba(250,248,243,0.7)' }}>
            Experience the blessing of Umrah with packages specially designed for Indian pilgrims. Native language guides, authentic home-style meals, visa processing in 24 hours, and Haram-view hotels. Your Umrah, your way, your language.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a href="https://wa.me/918110082222?text=I%20want%20details%20about%20Umrah%20from%20India" target="_blank" rel="noopener noreferrer"
              className="btn-gold px-8 py-3.5 rounded-full font-body font-bold text-sm">
              Get Package Details
            </a>
            <Link to="/contact" className="btn-ghost px-8 py-3.5 rounded-full font-body font-bold text-sm">
              Free Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Trust Strip */}
      <section className="py-6" style={{ background: 'linear-gradient(90deg, var(--emerald) 0%, #0e5c46 50%, var(--emerald) 100%)' }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-0">
          {[
            { v: '15+', l: 'Years Experience' },
            { v: '1000+', l: 'Indian Pilgrims Served' },
            { v: '100%', l: 'Visa Success Rate' },
            { v: '6', l: 'Departure Cities' },
            { v: '24/7', l: 'Ground Support' },
          ].map(s => (
            <div key={s.l} className="flex-1 min-w-[140px] text-center px-4 py-3 border-r last:border-r-0" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
              <p className="font-heading text-2xl font-bold" style={{ color: 'var(--gold)' }}>{s.v}</p>
              <p className="text-xs font-body font-medium tracking-wider uppercase mt-0.5" style={{ color: 'rgba(250,248,243,0.65)' }}>{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-20" style={{ background: 'var(--sand)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader eyebrow="What We Offer" title="Designed for Indian Pilgrims" subtitle="Everything you need, thoughtfully planned with the Indian pilgrim's comfort and culture in mind." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={f.title} className="glass-card-light p-7 rounded-2xl reveal" style={{ transitionDelay: `${i * 0.07}s` }}>
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-heading text-xl font-bold mb-2" style={{ color: 'var(--emerald)' }}>{f.title}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(26,26,26,0.65)' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inclusions + Departures */}
      <section className="py-20" style={{ background: 'var(--pearl)' }}>
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          {/* Inclusions */}
          <div className="reveal-left">
            <span className="inline-block text-xs font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5"
              style={{ background: 'rgba(13,74,58,0.08)', color: 'var(--emerald)', border: '1px solid rgba(13,74,58,0.2)' }}>
              Package Inclusions
            </span>
            <h2 className="font-heading text-3xl font-bold mb-6" style={{ color: 'var(--emerald)' }}>Everything Included</h2>
            <div className="grid grid-cols-1 gap-2">
              {inclusions.map((item, i) => (
                <div key={i} className="flex items-center gap-3 py-2.5 px-4 rounded-lg" style={{ background: i % 2 === 0 ? 'rgba(13,74,58,0.04)' : 'transparent' }}>
                  <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, var(--gold), var(--gold-light))', fontSize: '10px', color: '#1a0e00', fontWeight: 'bold' }}>✓</span>
                  <span className="font-body text-sm" style={{ color: 'rgba(26,26,26,0.75)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Departure Cities */}
          <div className="reveal-right">
            <span className="inline-block text-xs font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5"
              style={{ background: 'rgba(201,168,76,0.1)', color: 'var(--gold)', border: '1px solid rgba(201,168,76,0.25)' }}>
              Departure Points
            </span>
            <h2 className="font-heading text-3xl font-bold mb-6" style={{ color: 'var(--emerald)' }}>We Fly From Your City</h2>
            <div className="space-y-3">
              {departureCities.map((d, i) => (
                <div key={i} className="glass-card-light p-4 rounded-xl flex justify-between items-center">
                  <div>
                    <p className="font-body font-bold text-sm" style={{ color: 'var(--emerald)' }}>{d.city}</p>
                    <p className="font-body text-xs mt-0.5" style={{ color: 'rgba(26,26,26,0.5)' }}>{d.state} · {d.airline}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold px-2 py-1 rounded" style={{ background: 'rgba(201,168,76,0.1)', color: 'var(--gold)' }}>{d.freq}</span>
                    <div className="mt-1">
                      <a href={`https://wa.me/918110082222?text=Enquiry%20for%20Umrah%20from%20${d.city}`} target="_blank" rel="noopener noreferrer"
                        className="text-xs font-bold underline" style={{ color: 'var(--emerald)' }}>
                        Book Seat
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{ background: 'var(--dark-bg)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader light eyebrow="Pilgrim Reviews" title="What Our Indian Pilgrims Say" />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="glass-card p-7 rounded-2xl reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, j) => <span key={j} style={{ color: 'var(--gold)' }}>★</span>)}
                </div>
                <p className="font-heading text-base italic mb-5 leading-relaxed" style={{ color: 'rgba(250,248,243,0.8)' }}>"{t.text}"</p>
                <p className="font-body font-bold text-sm" style={{ color: 'var(--gold)' }}>{t.name}</p>
                <p className="font-body text-xs" style={{ color: 'rgba(250,248,243,0.4)' }}>{t.city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center" style={{ background: 'linear-gradient(135deg, var(--emerald), #0e5c46)' }}>
        <div className="max-w-2xl mx-auto px-6 reveal">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--pearl)' }}>
            Ready to Begin Your Umrah Journey?
          </h2>
          <p className="font-body text-base mb-8" style={{ color: 'rgba(250,248,243,0.7)' }}>
            Speak to a pilgrimage advisor today. Free consultation, no commitment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/918110082222?text=I%20want%20details%20about%20Umrah%20packages%20from%20India" target="_blank" rel="noopener noreferrer"
              className="btn-gold px-8 py-4 rounded-full font-body font-bold text-sm">
              WhatsApp Now
            </a>
            <Link to="/contact" className="btn-ghost px-8 py-4 rounded-full font-body font-bold text-sm">
              Send Enquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
