import { Link } from 'react-router-dom'
import { PageHero, SectionHeader } from '@/components/common'
import { useScrollReveal } from '@/hooks'
import { CONTACT_INFO } from '@/constants'
import { HAJJ_TYPES, HAJJ_INCLUSIONS, HAJJ_DAYS } from '@/data'

const HAJJ_FAQS = [
  {
    q: 'How far in advance should I book my Hajj package?',
    a: 'We recommend booking 6-8 months before your intended Hajj date. Hajj visas require advance planning, and early booking ensures you get the best hotel options near the Harams.'
  },
  {
    q: 'Are there payment plans available?',
    a: 'Yes! We offer flexible payment plans spread over 3-6 months to make Hajj financially manageable for families. A deposit secures your seat, with the balance due in installments.'
  },
  {
    q: 'Will there be a scholar with our group?',
    a: 'Absolutely. Every Crescent group is led by a qualified Islamic scholar (Aalim) who guides you through all rituals, explains their spiritual significance, and conducts daily Quranic reflections.'
  },
  {
    q: 'What if I have health concerns or dietary restrictions?',
    a: 'Please share your health requirements and dietary preferences during registration. We arrange Indian cuisine, diabetes-friendly options, and coordinate with hotels for any special medical needs.'
  },
  {
    q: 'Is travel insurance included?',
    a: 'Travel insurance can be added to your package for a minimal additional fee. We recommend it to cover any unexpected health emergencies during your pilgrimage.'
  },
  {
    q: 'What if Hajj gets disrupted due to unforeseen circumstances?',
    a: 'We maintain close coordination with the Saudi Ministry of Hajj. In rare cases of disruption, all bookings are refunded or deferred to the next Hajj season. Your trust is paramount.'
  },
]

export default function HajjPackages() {
  useScrollReveal()

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
          <h2 className="font-heading text-4xl font-bold mb-6" style={{ color: 'var(--emerald)' }}>
            The Fifth Pillar: A Sacred Journey
          </h2>
          <p className="font-body text-base leading-relaxed mb-6" style={{ color: 'rgba(26,26,26,0.7)' }}>
            Hajj is the fifth pillar of Islam—a spiritual pilgrimage that unites 2+ million Muslims from every corner of the world. It is a profound journey of worship, humility, and transformation. Prophet Muhammad (ﷺ) said: <br /><br />
            <strong className="font-heading text-2xl italic" style={{ color: 'var(--gold)' }}>
              "An accepted Hajj brings no less a reward than Paradise. The reward for Hajj is nothing but Jannah (Paradise)."
            </strong><br />
            <span className="text-sm">(Sahih al-Bukhari)</span>
          </p>
          <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(26,26,26,0.7)' }}>
            At Crescent Haj Service, we understand the immense spiritual weight and privilege of this undertaking. For over 15 years, we have meticulously crafted our Hajj packages to remove logistical burdens—allowing you to focus entirely on your worship, repentance, and deep connection with Allah. Our scholar-led groups ensure you perform every ritual with correct Islamic understanding.
          </p>
        </div>
      </section>

      {/* Package Types */}
      <section className="py-20" style={{ background: 'var(--pearl)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            eyebrow="Package Types"
            title="Choose Your Hajj Journey"
            subtitle="We accommodate different rituals and preferences to suit your spiritual needs."
          />
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {HAJJ_TYPES.map((h) => (
              <div
                key={h.type}
                className={`rounded-2xl p-8 reveal ${h.popular ? 'text-white' : 'glass-card-light'}`}
                style={
                  h.popular
                    ? {
                        background: 'linear-gradient(135deg,var(--emerald),#0e5c46)',
                        border: '2px solid rgba(201,168,76,0.4)',
                        boxShadow: '0 20px 40px rgba(13,74,58,0.2)',
                      }
                    : {}
                }
              >
                {h.popular && (
                  <div className="text-xs font-body font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--gold)' }}>
                    ✦ Recommended for Intl. Pilgrims
                  </div>
                )}
                <h3 className="font-heading text-2xl font-bold mb-4" style={{ color: h.popular ? 'var(--gold)' : 'var(--emerald)' }}>
                  {h.type}
                </h3>
                <p className="font-body text-sm leading-relaxed mb-8" style={{ color: h.popular ? 'rgba(250,248,243,0.8)' : 'rgba(26,26,26,0.7)' }}>
                  {h.desc}
                </p>
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3 px-6 rounded-full font-body font-bold text-sm transition-transform hover:-translate-y-1 ${
                    h.popular ? 'btn-gold' : 'btn-emerald'
                  }`}
                >
                  Enquire Now
                </a>
              </div>
            ))}
          </div>

          {/* Days of Hajj */}
          <SectionHeader
            eyebrow="The Itinerary"
            title="The 5 Days of Hajj"
            subtitle="A brief overview of the sacred rituals you will perform, guided by our expert scholars."
          />
          <div className="max-w-4xl mx-auto space-y-6 mb-20">
            {HAJJ_DAYS.map((d, i) => (
              <div key={i} className="glass-card-light p-6 md:p-8 rounded-2xl reveal flex flex-col md:flex-row gap-6 items-start">
                <div className="shrink-0 w-full md:w-48">
                  <span className="inline-block px-3 py-1 rounded-md text-xs font-bold mb-2" style={{ background: 'rgba(201,168,76,0.15)', color: 'var(--gold)' }}>
                    {d.day}
                  </span>
                  <h4 className="font-heading text-xl font-bold" style={{ color: 'var(--emerald)' }}>{d.title}</h4>
                </div>
                <div className="flex-1">
                  <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(26,26,26,0.7)' }}>{d.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Inclusions */}
          <SectionHeader
            eyebrow="What's Included"
            title="Complete Package Inclusions"
            subtitle="We take care of every detail, from visas to Ziyarat, ensuring a smooth experience."
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {HAJJ_INCLUSIONS.map((item, i) => (
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

          {/* FAQ Section */}
          <div className="mt-24 mb-20">
            <SectionHeader
              eyebrow="Your Questions"
              title="Frequently Asked Questions"
              subtitle="Everything you need to know about Hajj with Crescent."
            />
            <div className="max-w-3xl mx-auto space-y-4">
              {HAJJ_FAQS.map((item, i) => (
                <div key={i} className="glass-card-light p-6 rounded-2xl reveal">
                  <h4 className="font-heading font-bold text-base mb-3" style={{ color: 'var(--emerald)' }}>Q: {item.q}</h4>
                  <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(26,26,26,0.7)' }}>A: {item.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 text-center reveal">
            <h3 className="font-heading text-3xl font-bold mb-6" style={{ color: 'var(--emerald)' }}>Ready to Answer the Call of Hajj?</h3>
            <p className="font-body text-base mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(26,26,26,0.65)' }}>
              Limited seats are available for Hajj 2025. Our quotas fill quickly due to high demand. Join 1000+ pilgrims who have transformed their lives through Crescent's expert-led Hajj packages. Book your spiritual journey today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-emerald px-10 py-4 rounded-full font-body font-bold text-sm">
                Schedule a Free Consultation
              </Link>
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold px-10 py-4 rounded-full font-body font-bold text-sm inline-flex items-center gap-2"
              >
                WhatsApp Us Now
              </a>
            </div>
            <p className="font-body text-sm mt-6" style={{ color: 'rgba(26,26,26,0.5)' }}>Hajj is once in a lifetime. Let's make it unforgettable. 🕌</p>
          </div>
        </div>
      </section>
    </div>
  )
}
