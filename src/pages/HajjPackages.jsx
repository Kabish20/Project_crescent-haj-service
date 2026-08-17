import { Link } from 'react-router-dom'
import { useReveal, SectionHeader } from '../components/ScrollReveal'

function PageHero({ title, subtitle, tag }) {
  return (
    <div className="relative pt-32 pb-20 text-center overflow-hidden" style={{ background: 'var(--dark-bg)' }}>
      <div className="glow-orb opacity-50" style={{ top: '-40%', left: '-20%' }} />
        <div className="absolute inset-0 islamic-pattern opacity-20" />
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {tag && <span className="inline-block text-xs font-body font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
          style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)', color: 'var(--gold)' }}>{tag}</span>}
        <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6" style={{ color: 'var(--pearl)' }}>{title}</h1>
        {subtitle && <p className="font-body text-lg leading-relaxed" style={{ color: 'rgba(250,248,243,0.7)' }}>{subtitle}</p>}
      </div>
    </div>
  )
}

const hajjTypes = [
  { type: 'Hajj al-Tamattu\'', desc: 'The most recommended and common type of Hajj. Pilgrims perform Umrah first, exit the state of Ihram, and then re-enter Ihram on the 8th of Dhul-Hijjah for Hajj. Ideal for those traveling from outside Saudi Arabia.', popular: true },
  { type: 'Hajj al-Qiran', desc: 'Combined Hajj and Umrah in a single state of Ihram. The pilgrim does not exit Ihram after Umrah and remains in it until the completion of Hajj rituals.', popular: false },
  { type: 'Hajj al-Ifrad', desc: 'Performing Hajj alone without Umrah. This is typically performed by residents living within the Miqat boundaries or in Makkah itself.', popular: false },
]

const inclusions = [
  { title: 'Visa & Flights', text: 'Complete processing of Saudi Hajj Visa and round-trip commercial flights from major hubs in India & UAE.' },
  { title: 'Premium Accommodation', text: '5 to 7 nights in Makkah (near Haram) and 4 to 5 nights in Madinah (near Masjid an-Nabawi) in highly-rated hotels.' },
  { title: 'Mina & Arafat Camps', text: 'Comfortable, air-conditioned tented accommodation in Mina and Arafat with mattress beds and meals provided.' },
  { title: 'Full Board Meals', text: 'Nutritious breakfast, lunch, and dinner provided daily throughout your stay in Makkah, Madinah, and during the days of Hajj.' },
  { title: 'Transportation', text: 'Dedicated, air-conditioned VIP coaches for airport transfers, inter-city travel, and movements during the 5 days of Hajj.' },
  { title: 'Spiritual Guidance', text: 'Every group is accompanied by a qualified Islamic scholar (Aalim) providing daily lectures, Q&A, and step-by-step ritual guidance.' },
  { title: 'Ziyarat Tours', text: 'Comprehensive guided tours to historical Islamic sites in both Makkah (Jabal Noor, Thawr) and Madinah (Quba, Uhud).' },
  { title: 'Pre-Departure Support', text: 'In-depth orientation seminars, detailed packing lists, and Ihram-wearing guides provided weeks before your departure.' },
  { title: 'Health & Safety', text: '24/7 on-ground emergency support, basic medical assistance, and group leaders to ensure no pilgrim is left behind.' }
]

const hajjDays = [
  { day: 'Day 1 (8th Dhul-Hijjah)', title: 'Tarwiyah - The Journey to Mina', desc: 'Pilgrims enter Ihram, declare their intention for Hajj, and travel to the tent city of Mina, spending the day and night in prayer, reading the Quran, and preparing spiritually for the Day of Arafat.' },
  { day: 'Day 2 (9th Dhul-Hijjah)', title: 'Arafat - The Pinnacle of Hajj', desc: 'After sunrise, pilgrims move to the plains of Arafat. This is the most crucial day of Hajj. Pilgrims spend the afternoon in deep supplication (Wuquf) until sunset. After sunset, they travel to Muzdalifah to pray and gather pebbles under the night sky.' },
  { day: 'Day 3 (10th Dhul-Hijjah)', title: 'Eid al-Adha & Jamarat', desc: 'Pilgrims return to Mina to throw pebbles at the largest pillar (Jamarat al-Aqabah). Following this, the Qurbani (sacrifice) is performed, hair is shaved or trimmed, and pilgrims can remove their Ihram. They then proceed to Makkah for Tawaf al-Ifadah and Sa\'i.' },
  { day: 'Day 4 & 5 (11th-12th Dhul-Hijjah)', title: 'Tashreeq - Days of Stoning', desc: 'Pilgrims stay in Mina and stone all three pillars (Jamarat) on each of these days. These are days of eating, drinking, and remembering Allah. On the 12th or 13th, pilgrims return to Makkah to perform the Farewell Tawaf (Tawaf al-Wida) before departing.' }
]

export default function HajjPackages() {
  useReveal()
  return (
    <div>
      <PageHero 
        tag="Hajj 2025 Registration Open" 
        title="Premium Hajj Packages" 
        subtitle="Embark on the journey of a lifetime. Experience the fifth pillar of Islam with unparalleled comfort, profound spiritual guidance, and complete peace of mind." 
      />
      
      {/* Introduction & Virtues */}
      <section className="py-20" style={{ background: 'var(--sand)' }}>
        <div className="max-w-5xl mx-auto px-6 text-center reveal">
          <h2 className="font-heading text-4xl font-bold mb-6" style={{ color: 'var(--emerald)' }}>The Journey of a Lifetime</h2>
          <p className="font-body text-base leading-relaxed mb-6" style={{ color: 'rgba(26,26,26,0.7)' }}>
            Hajj is a profound spiritual migration—a physical and emotional journey that cleanses the soul. Prophet Muhammad (ﷺ) said: <br/><br/>
            <strong className="font-heading text-2xl italic" style={{ color: 'var(--gold)' }}>"An accepted Hajj brings no less a reward than Paradise."</strong><br/>
            <span className="text-sm">(Sahih al-Bukhari)</span>
          </p>
          <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(26,26,26,0.7)' }}>
            At Crescent Haj Service, we understand the immense weight and privilege of this undertaking. For over 15 years, we have meticulously crafted our Hajj packages to remove the logistical burdens, allowing you to focus entirely on your worship, repentance, and connection with Allah.
          </p>
        </div>
      </section>

      {/* Package Types */}
      <section className="py-20" style={{ background: 'var(--pearl)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader eyebrow="Package Types" title="Choose Your Hajj Journey" subtitle="We accommodate different rituals and preferences to suit your spiritual needs." />
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {hajjTypes.map(h => (
              <div key={h.type} className={`rounded-2xl p-8 reveal ${h.popular ? 'text-white' : 'glass-card-light'}`}
                style={h.popular ? { background: 'linear-gradient(135deg,var(--emerald),#0e5c46)', border: '2px solid rgba(201,168,76,0.4)', boxShadow: '0 20px 40px rgba(13,74,58,0.2)' } : {}}>
                {h.popular && <div className="text-xs font-body font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--gold)' }}>✦ Recommended for Intl. Pilgrims</div>}
                <h3 className="font-heading text-2xl font-bold mb-4" style={{ color: h.popular ? 'var(--gold)' : 'var(--emerald)' }}>{h.type}</h3>
                <p className="font-body text-sm leading-relaxed mb-8" style={{ color: h.popular ? 'rgba(250,248,243,0.8)' : 'rgba(26,26,26,0.7)' }}>{h.desc}</p>
                <a href="https://wa.me/918110082222" target="_blank" rel="noopener noreferrer"
                  className={`block text-center py-3 px-6 rounded-full font-body font-bold text-sm transition-transform hover:-translate-y-1 ${h.popular ? 'btn-gold' : 'btn-emerald'}`}>
                  Enquire Now
                </a>
              </div>
            ))}
          </div>

          {/* Days of Hajj */}
          <SectionHeader eyebrow="The Itinerary" title="The 5 Days of Hajj" subtitle="A brief overview of the sacred rituals you will perform, guided by our expert scholars." />
          <div className="max-w-4xl mx-auto space-y-6 mb-20">
            {hajjDays.map((d, i) => (
              <div key={i} className="glass-card-light p-6 md:p-8 rounded-2xl reveal flex flex-col md:flex-row gap-6 items-start">
                <div className="shrink-0 w-full md:w-48">
                  <span className="inline-block px-3 py-1 rounded-md text-xs font-bold mb-2" style={{ background: 'rgba(201,168,76,0.15)', color: 'var(--gold)' }}>{d.day}</span>
                  <h4 className="font-heading text-xl font-bold" style={{ color: 'var(--emerald)' }}>{d.title}</h4>
                </div>
                <div className="flex-1">
                  <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(26,26,26,0.7)' }}>{d.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Inclusions */}
          <SectionHeader eyebrow="What's Included" title="Complete Package Inclusions" subtitle="We take care of every detail, from visas to Ziyarat, ensuring a smooth experience." />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {inclusions.map((item, i) => (
              <div key={item.title} className="glass-card-light p-6 rounded-2xl reveal" style={{ transitionDelay: `${i * 0.05}s` }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4" style={{ background: 'rgba(201,168,76,0.15)' }}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" style={{ color: 'var(--gold)' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-body font-bold text-base mb-2" style={{ color: 'var(--emerald)' }}>{item.title}</h4>
                <p className="font-body text-xs leading-relaxed" style={{ color: 'rgba(26,26,26,0.65)' }}>{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center reveal">
            <h3 className="font-heading text-3xl font-bold mb-6" style={{ color: 'var(--emerald)' }}>Limited Seats Available for Hajj 2025</h3>
            <p className="font-body text-base mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(26,26,26,0.65)' }}>
              Hajj quotas are strictly regulated. We highly recommend booking your package at least 6-8 months in advance to ensure visa processing and the best accommodation options.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-emerald px-10 py-4 rounded-full font-body font-bold text-sm">
                Request a Call Back
              </Link>
              <a href="https://wa.me/918110082222?text=I%20want%20to%20enquire%20about%20detailed%20Hajj%20packages" target="_blank" rel="noopener noreferrer"
                className="btn-gold px-10 py-4 rounded-full font-body font-bold text-sm inline-flex items-center gap-2">
                Get Hajj Details on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
