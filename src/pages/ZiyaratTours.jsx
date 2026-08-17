import { useReveal } from '../components/ScrollReveal'

const sitesMakkah = [
  { name: 'Masjid al-Haram & The Kaaba', desc: 'The epicenter of Islam. We guide you through the history of the Mataf, the Black Stone (Hajar al-Aswad), Maqam Ibrahim, and the well of Zamzam.' },
  { name: 'Jabal an-Nour (Cave of Hira)', desc: 'The mountain of light where the Prophet Muhammad (ﷺ) received the very first revelation of the Quran from Angel Jibril. A site of profound reflection.' },
  { name: 'Jabal Thawr', desc: 'The cave where the Prophet (ﷺ) and Abu Bakr (RA) sought refuge for three days during the Hijrah (migration) from Makkah to Madinah.' },
  { name: 'Mount Arafat (Jabal ar-Rahmah)', desc: 'The Mount of Mercy. This is where the Prophet (ﷺ) delivered his Farewell Sermon, and it is the most critical site during the days of Hajj.' },
  { name: 'Mina & Muzdalifah', desc: 'Drive through the tent city of Mina and the plains of Muzdalifah, vital locations for Hajj rituals and steeped in prophetic history.' },
  { name: 'Jannat al-Mu\'alla', desc: 'The historical cemetery in Makkah where the Prophet’s (ﷺ) beloved wife Khadijah (RA), his grandfather, and other ancestors are resting.' },
]

const sitesMadinah = [
  { name: 'Masjid an-Nabawi', desc: 'The second holiest site in Islam. We guide you on the etiquette of visiting the Prophet’s (ﷺ) grave and praying in the Rawdah (a piece of Paradise).' },
  { name: 'Masjid Quba', desc: 'The very first mosque built in Islam. The Prophet (ﷺ) said that performing ablution at home and praying two Rakahs here brings the reward of an Umrah.' },
  { name: 'Mount Uhud & Martyrs Cemetery', desc: 'The site of the second major battle in Islam. A place to reflect on the sacrifices of the Sahabah, including the Prophet’s uncle, Hamza (RA).' },
  { name: 'Masjid al-Qiblatayn', desc: 'The Mosque of the Two Qiblas, where the revelation came to change the direction of prayer from Jerusalem to Makkah during a congregational prayer.' },
  { name: 'The Seven Mosques (Khandaq)', desc: 'The site of the Battle of the Trench, where the Muslims dug a trench to defend Madinah. Several small historical mosques mark the locations.' },
  { name: 'Jannat al-Baqi', desc: 'The main cemetery of Madinah, adjacent to Masjid an-Nabawi. Over 10,000 companions of the Prophet (ﷺ) and his family members are resting here.' },
]

export default function ZiyaratTours() {
  useReveal()
  return (
    <div>
      <div className="relative pt-32 pb-20 text-center overflow-hidden" style={{ background: 'var(--dark-bg)' }}>
        <div className="glow-orb opacity-50" style={{ top: '-40%', left: '-20%' }} />
        <div className="absolute inset-0 islamic-pattern opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <span className="inline-block text-xs font-body font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
            style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)', color: 'var(--gold)' }}>
            Guided Historical Tours
          </span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6" style={{ color: 'var(--pearl)' }}>Ziyarat Tours</h1>
          <p className="font-body text-lg leading-relaxed" style={{ color: 'rgba(250,248,243,0.7)' }}>
            Walk in the footsteps of the Prophet Muhammad (ﷺ) and his companions. Our guided Ziyarat tours offer a deep, historical, and spiritual understanding of the sacred lands.
          </p>
        </div>
      </div>

      <section className="py-20" style={{ background: 'var(--sand)' }}>
        <div className="max-w-5xl mx-auto px-6 text-center reveal">
          <h2 className="font-heading text-4xl font-bold mb-6" style={{ color: 'var(--emerald)' }}>More Than Just Sightseeing</h2>
          <p className="font-body text-base leading-relaxed mb-6" style={{ color: 'rgba(26,26,26,0.7)' }}>
            At Crescent Haj Service, we believe Ziyarat is an essential part of your pilgrimage that connects your heart to Islamic history. Visiting the sites of early Islam is not merely tourism; it is an opportunity to reflect on the immense struggles, sacrifices, and unshakeable faith of the Prophet (ﷺ) and the early Muslims.
          </p>
          <p className="font-body text-base leading-relaxed font-bold" style={{ color: 'var(--emerald)' }}>
            All our Ziyarat tours are conducted in luxurious air-conditioned buses and led by qualified Islamic scholars (Aalims) who explain the history, significance, and Sunnah practices for each site in Tamil, Urdu, or English.
          </p>
        </div>
      </section>

      <section className="py-20" style={{ background: 'var(--pearl)' }}>
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Makkah Ziyarat */}
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-10 reveal">
              <div className="h-px flex-1" style={{ background: 'rgba(201,168,76,0.3)' }} />
              <h2 className="font-heading text-3xl font-bold uppercase tracking-widest" style={{ color: 'var(--emerald)' }}>Makkah Al-Mukarramah</h2>
              <div className="h-px flex-1" style={{ background: 'rgba(201,168,76,0.3)' }} />
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sitesMakkah.map((s, i) => (
                <div key={s.name} className="glass-card-light p-8 rounded-2xl reveal border-t-4" style={{ borderTopColor: 'var(--gold)', transitionDelay: `${i * 0.05}s` }}>
                  <div className="text-3xl mb-4">🕋</div>
                  <h3 className="font-heading text-xl font-bold mb-3" style={{ color: 'var(--emerald)' }}>{s.name}</h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(26,26,26,0.65)' }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Madinah Ziyarat */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-10 reveal">
              <div className="h-px flex-1" style={{ background: 'rgba(201,168,76,0.3)' }} />
              <h2 className="font-heading text-3xl font-bold uppercase tracking-widest" style={{ color: 'var(--emerald)' }}>Madinah Al-Munawwarah</h2>
              <div className="h-px flex-1" style={{ background: 'rgba(201,168,76,0.3)' }} />
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sitesMadinah.map((s, i) => (
                <div key={s.name} className="glass-card-light p-8 rounded-2xl reveal border-t-4" style={{ borderTopColor: 'var(--emerald)', transitionDelay: `${i * 0.05}s` }}>
                  <div className="text-3xl mb-4">🕌</div>
                  <h3 className="font-heading text-xl font-bold mb-3" style={{ color: 'var(--emerald)' }}>{s.name}</h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(26,26,26,0.65)' }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Add-on Tours */}
          <div className="glass-card-light rounded-3xl p-10 md:p-14 text-center reveal border-2" style={{ borderColor: 'rgba(201,168,76,0.3)' }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6" style={{ background: 'rgba(201,168,76,0.15)', color: 'var(--gold)' }}>
              Special Add-On Tours
            </span>
            <h3 className="font-heading text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--emerald)' }}>Taif & Badr Expeditions</h3>
            <p className="font-body text-base max-w-3xl mx-auto leading-relaxed mb-8" style={{ color: 'rgba(26,26,26,0.7)' }}>
              For pilgrims wanting a deeper exploration, we offer extended day trips. Visit the city of <strong>Taif</strong>, where the Prophet (ﷺ) faced his hardest trials and experience the historical Mosque of Addas. Alternatively, join our emotional tour to <strong>Badr</strong>, the site of the pivotal first battle of Islam, to witness the terrain where angels descended to aid the believers.
            </p>
            <a href="https://wa.me/918110082222?text=I%20want%20to%20book%20a%20Ziyarat%20tour%20including%20Taif/Badr" target="_blank" rel="noopener noreferrer"
              className="btn-gold px-10 py-4 rounded-full font-body font-bold text-sm inline-block shadow-xl">
              Book Extended Ziyarat
            </a>
          </div>

        </div>
      </section>
    </div>
  )
}
