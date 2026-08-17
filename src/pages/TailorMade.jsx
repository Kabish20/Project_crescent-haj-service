import { useState } from 'react'
import { useReveal, SectionHeader, GoldDivider } from '../components/ScrollReveal'

const benefits = [
  { icon: '🗓️', title: 'Your Dates, Your Rules', desc: 'No fixed group departure. Travel on any day that suits your schedule — weekdays, Ramadan, Hajj season, or school holidays.' },
  { icon: '🏨', title: 'Hotel of Your Choice', desc: 'We book from our curated list of Haram-adjacent hotels — from 3-star budget to 5-star luxury, based on your preference and budget.' },
  { icon: '✈️', title: 'Preferred Airline', desc: 'We ticket on Saudia, Emirates, IndiGo, Air India, or any airline you prefer — including business class upgrades for VIP pilgrims.' },
  { icon: '🚐', title: 'Private VIP Transport', desc: 'Dedicated private GMC, Toyota Hiace, or luxury coach available 24/7 for your group — no waiting, no sharing.' },
  { icon: '👨‍🏫', title: 'Personal Scholar/Guide', desc: 'A private Islamic scholar accompanies only your group — conducting Ziyarat, teaching rituals, and answering questions personally.' },
  { icon: '👴', title: 'Elderly & Wheelchair Care', desc: 'Full assistance for elderly pilgrims including wheelchair rentals, Tawaf wheelchairs in Haram, and slow-paced itineraries.' },
]

const hotelOptions = [
  { name: 'Fairmont Makkah Clock Royal Tower', dist: '50m', stars: 5, highlight: 'Direct Haram View' },
  { name: 'Swissôtel Al Maqam Makkah', dist: '100m', stars: 5, highlight: 'Clock Tower Views' },
  { name: 'Hilton Suites Makkah', dist: '200m', stars: 5, highlight: 'Family Suites' },
  { name: 'Dar Al Tawhid Intercontinental', dist: '150m', stars: 5, highlight: 'Premium Location' },
  { name: 'Al Shohada Hotel', dist: '300m', stars: 4, highlight: 'Best Value Premium' },
  { name: 'Al Mawaddah Concord', dist: '400m', stars: 4, highlight: 'Budget Comfort' },
]

export default function TailorMade() {
  useReveal()
  const [form, setForm] = useState({ name: '', phone: '', from: '', pilgrims: '', month: '', hotel: '', budget: '', notes: '' })
  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))
  const whatsappMsg = `Hi, I want a Tailor-Made Umrah Package.\n\nName: ${form.name}\nFrom: ${form.from}\nPilgrims: ${form.pilgrims}\nMonth: ${form.month}\nHotel: ${form.hotel}\nBudget: ${form.budget}\nNotes: ${form.notes}`

  return (
    <div>
      {/* Hero */}
      <div className="relative pt-32 pb-20 text-center overflow-hidden" style={{ background: 'var(--dark-bg)' }}>
        <div className="glow-orb opacity-50" style={{ top: '-40%', left: '-20%' }} />
        <div className="absolute inset-0 islamic-pattern opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <span className="inline-block text-xs font-body font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
            style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)', color: 'var(--gold)' }}>
            ✦ Your Pilgrimage, Your Way
          </span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6" style={{ color: 'var(--pearl)' }}>
            Tailor-Made Umrah
          </h1>
          <p className="font-body text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: 'rgba(250,248,243,0.7)' }}>
            A completely customized, private Umrah experience designed exclusively around your dates, your family's needs, and your budget — with zero compromises.
          </p>
        </div>
      </div>

      {/* Why Tailor-Made */}
      <section className="py-20" style={{ background: 'var(--sand)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            eyebrow="Why Go Custom?"
            title="No Two Pilgrimages Are the Same"
            subtitle="We believe every pilgrim is unique. A tailor-made package gives you the freedom to perform Umrah on your own terms — without compromising on quality or spirituality."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={b.title}
                className="glass-card-light p-7 rounded-2xl reveal"
                style={{ transitionDelay: `${i * 0.07}s`, borderTop: '3px solid rgba(201,168,76,0.3)' }}>
                <div className="text-3xl mb-4">{b.icon}</div>
                <h3 className="font-heading text-xl font-bold mb-2" style={{ color: 'var(--emerald)' }}>{b.title}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(26,26,26,0.65)' }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hotel Options */}
      <section className="py-20" style={{ background: 'var(--pearl)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            eyebrow="Accommodation"
            title="Preferred Hotels Near Haram"
            subtitle="We have pre-negotiated rates with top hotels in Makkah & Madinah. Choose by distance, star rating, or budget — all within walking distance of Masjid al-Haram."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {hotelOptions.map((h, i) => (
              <div key={h.name} className="glass-card-light rounded-xl p-5 reveal flex gap-4 items-start" style={{ transitionDelay: `${i * 0.05}s` }}>
                <div className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'rgba(201,168,76,0.12)' }}>
                  <span className="text-xl">🏨</span>
                </div>
                <div>
                  <h4 className="font-body font-bold text-sm mb-1" style={{ color: 'var(--emerald)' }}>{h.name}</h4>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-body" style={{ color: 'var(--gold)' }}>{'★'.repeat(h.stars)}</span>
                    <span className="text-xs font-body" style={{ color: 'rgba(26,26,26,0.45)' }}>·</span>
                    <span className="text-xs font-body" style={{ color: 'rgba(13,74,58,0.7)' }}>{h.dist} from Haram</span>
                  </div>
                  <span className="inline-block text-xs font-bold px-2 py-0.5 rounded" style={{ background: 'rgba(201,168,76,0.1)', color: 'var(--gold)' }}>{h.highlight}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center font-body text-sm" style={{ color: 'rgba(26,26,26,0.5)' }}>
            Similar curated hotels available in Madinah, near Masjid an-Nabawi. Contact us for the full hotel list.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20" style={{ background: 'var(--dark-bg)' }}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-xs font-body font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
              style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)', color: 'var(--gold)' }}>
              Get a Custom Quote
            </span>
            <h2 className="font-heading text-4xl font-bold mb-3" style={{ color: 'var(--pearl)' }}>Build Your Umrah Package</h2>
            <GoldDivider />
            <p className="font-body text-sm mt-4" style={{ color: 'rgba(250,248,243,0.5)' }}>
              Fill in your preferences and our team will craft a personalised itinerary — usually within 4 hours
            </p>
          </div>
          <div className="glass-card rounded-2xl p-8 md:p-10 reveal">
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { name: 'name', placeholder: 'Your Full Name', label: 'Name' },
                { name: 'phone', placeholder: 'WhatsApp / Phone Number', label: 'WhatsApp / Phone' },
                { name: 'from', placeholder: 'City, Country', label: 'Travelling From' },
                { name: 'pilgrims', placeholder: 'e.g. 4 (2 adults, 2 children)', label: 'No. of Pilgrims' },
                { name: 'month', placeholder: 'e.g. Ramadan 2025', label: 'Preferred Month' },
                { name: 'budget', placeholder: 'e.g. ₹1.5 Lakh per person', label: 'Approximate Budget' },
              ].map(f => (
                <div key={f.name}>
                  <label className="block text-xs font-body font-semibold mb-1.5" style={{ color: 'var(--gold)' }}>{f.label}</label>
                  <input name={f.name} placeholder={f.placeholder} value={form[f.name]} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl font-body text-sm focus:outline-none transition-all"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(201,168,76,0.2)', color: 'var(--pearl)' }} />
                </div>
              ))}
              <div className="sm:col-span-2">
                <label className="block text-xs font-body font-semibold mb-1.5" style={{ color: 'var(--gold)' }}>Hotel Preference</label>
                <select name="hotel" value={form.hotel} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl font-body text-sm focus:outline-none"
                  style={{ background: 'rgba(10,15,13,0.9)', border: '1px solid rgba(201,168,76,0.2)', color: 'var(--pearl)' }}>
                  <option value="">Select hotel distance from Haram</option>
                  <option>50m – Direct Haram View (Luxury)</option>
                  <option>100–150m – Premium Walking Distance</option>
                  <option>200–300m – Comfort Walking Distance</option>
                  <option>300–500m – Shuttle Available (Budget Premium)</option>
                  <option>500m+ – Economy Option</option>
                </select>
              </div>
            </div>
            <div className="mt-5">
              <label className="block text-xs font-body font-semibold mb-1.5" style={{ color: 'var(--gold)' }}>Special Requirements</label>
              <textarea name="notes" rows={4} placeholder="Elderly pilgrim, wheelchair access, dietary requirements, private guide, Ramadan nights, specific Ziyarat sites..." value={form.notes} onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl font-body text-sm focus:outline-none resize-none"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(201,168,76,0.2)', color: 'var(--pearl)' }} />
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <a href={`https://wa.me/918110082222?text=${encodeURIComponent(whatsappMsg)}`} target="_blank" rel="noopener noreferrer"
                className="btn-gold flex-1 py-4 rounded-full font-body font-bold text-sm text-center">
                📱 Send via WhatsApp
              </a>
              <a href="tel:+918110082222" className="btn-ghost flex-1 py-4 rounded-full font-body font-bold text-sm text-center">
                📞 Call Advisor Directly
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
