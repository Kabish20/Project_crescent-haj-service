import { useReveal } from '../components/ScrollReveal'
import { Link } from 'react-router-dom'

const processSteps = [
  { step: '1', title: 'Consultation & Eligibility', desc: 'We discuss your requirements, check residency status, and verify if the bride, groom, and Wali meet Saudi legal requirements for Nikkah.' },
  { step: '2', title: 'Document Preparation', desc: 'Our team guides you on gathering necessary passports, visas, consent letters, and identity documents required by Saudi authorities.' },
  { step: '3', title: 'Booking Flights & Hotels', desc: 'We arrange comfortable flights and premium family suites in hotels near the Haram for the wedding party and guests.' },
  { step: '4', title: 'Coordination with Scholar', desc: 'We coordinate with an authorized Islamic scholar (Maazoon) in Makkah or Madinah who is legally permitted to perform and register the Nikkah.' },
  { step: '5', title: 'The Blessed Ceremony', desc: 'The Nikkah is performed in the serene environment of the Haramain, followed by prayers and supplications for the couple.' },
  { step: '6', title: 'Certification & Umrah', desc: 'We assist with obtaining the official marriage certificate, after which the family can perform a group Umrah in immense gratitude.' },
]

export default function NikkahMasjids() {
  useReveal()
  return (
    <div>
      <div className="relative pt-32 pb-20 text-center overflow-hidden" style={{ background: 'var(--dark-bg)' }}>
        <div className="glow-orb opacity-50" style={{ top: '-40%', left: '-20%' }} />
        <div className="absolute inset-0 islamic-pattern opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <span className="inline-block text-xs font-body font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
            style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)', color: 'var(--gold)' }}>
            A Sacred Union
          </span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6" style={{ color: 'var(--pearl)' }}>Nikkah in Holy Masjids</h1>
          <p className="font-body text-lg leading-relaxed" style={{ color: 'rgba(250,248,243,0.7)' }}>
            Begin your married life with immense barakah. We facilitate legal, respectful, and perfectly arranged Nikkah ceremonies in Makkah and Madinah.
          </p>
        </div>
      </div>

      <section className="py-20" style={{ background: 'var(--sand)' }}>
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div className="reveal-left">
            <img src="/madinah_mosque.png" alt="Madinah Mosque for Nikkah" className="rounded-3xl shadow-2xl w-full border-4" style={{ borderColor: 'rgba(201,168,76,0.3)' }} />
          </div>
          <div className="reveal-right">
            <h2 className="font-heading text-4xl font-bold mb-6" style={{ color: 'var(--emerald)' }}>The Ultimate Blessing</h2>
            <p className="font-body text-base leading-relaxed mb-6" style={{ color: 'rgba(26,26,26,0.7)' }}>
              Marriage (Nikkah) is half of faith. To solemnize this beautiful Sunnah in the vicinity of the Kaaba in Makkah, or near the Rawdah of the Prophet (ﷺ) in Madinah, is a dream for many Muslim families.
            </p>
            <p className="font-body text-base leading-relaxed mb-6" style={{ color: 'rgba(26,26,26,0.7)' }}>
              However, arranging a Nikkah in Saudi Arabia involves strict legal procedures, specific documentation, and local coordination. Crescent Haj Service takes away the stress of planning by providing an end-to-end Nikkah arrangement service.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Authorized Saudi Scholars (Maazoon)',
                'Full Legal Document Assistance',
                'Premium Family Hotel Suites near Haram',
                'VIP Transport for the Wedding Party',
                'Wheelchair Assistance for Elders'
              ].map(item => (
                <li key={item} className="flex items-center gap-3 font-body text-sm font-semibold" style={{ color: 'var(--emerald)' }}>
                  <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: 'var(--gold)', color: 'white', fontSize: '10px' }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: 'var(--pearl)' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <h2 className="font-heading text-4xl font-bold mb-4" style={{ color: 'var(--emerald)' }}>How We Facilitate Your Nikkah</h2>
            <p className="font-body text-base" style={{ color: 'rgba(26,26,26,0.65)' }}>
              A transparent, stress-free process guided by our expert team from start to finish.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {processSteps.map((p, i) => (
              <div key={p.step} className="glass-card-light p-8 rounded-2xl reveal flex gap-6" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-heading text-2xl font-bold shadow-inner"
                    style={{ background: 'linear-gradient(135deg, var(--gold), var(--gold-light))', color: 'white' }}>
                    {p.step}
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold mb-3" style={{ color: 'var(--emerald)' }}>{p.title}</h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(26,26,26,0.65)' }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-card-light rounded-3xl p-10 text-center reveal border border-red-100" style={{ background: '#fff9f9' }}>
            <h3 className="font-heading text-2xl font-bold mb-4 text-red-800">Important Legal Notice</h3>
            <p className="font-body text-sm max-w-3xl mx-auto leading-relaxed text-red-900 opacity-80">
              Please note that Nikkah ceremonies in Saudi Arabia are subject to strict government regulations. Only certain visa types and residency statuses may permit official court registration. Our advisors will conduct a full consultation to determine your eligibility and outline the exact legal pathway before accepting any bookings.
            </p>
          </div>

          <div className="mt-16 text-center reveal">
            <h2 className="font-heading text-3xl font-bold mb-6" style={{ color: 'var(--emerald)' }}>Start Planning Your Blessed Day</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/916382220393?text=I%20would%20like%20to%20consult%20about%20arranging%20a%20Nikkah%20in%20Makkah/Madinah" target="_blank" rel="noopener noreferrer"
                className="btn-gold px-10 py-4 rounded-full font-body font-bold text-sm inline-block shadow-xl">
                Consult on WhatsApp
              </a>
              <Link to="/contact" className="btn-emerald px-10 py-4 rounded-full font-body font-bold text-sm shadow-xl">
                Submit Detailed Enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
