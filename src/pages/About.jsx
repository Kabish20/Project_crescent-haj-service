import { useReveal, GoldDivider } from '../components/ScrollReveal'
import { Link } from 'react-router-dom'

const values = [
  { icon: '🤲', title: 'Sincerity (Ikhlas)', desc: 'We operate with the pure intention of aiding pilgrims in their worship, prioritizing spiritual fulfillment over commercial gain. Every decision we make is rooted in the fear of Allah.' },
  { icon: '✨', title: 'Excellence (Ihsan)', desc: 'From the moment you contact us until you return home safely, we strive for perfection in every detail — the hotel, the guide, the meal, and the transfer.' },
  { icon: '🛡️', title: 'Trust (Amanah)', desc: 'We treat your journey, your funds, and your safety as a sacred trust (Amanah), maintaining complete transparency in all our pricing and operations.' },
  { icon: '❤️', title: 'Family Care', desc: 'Every pilgrim, especially the elderly and children, is treated with the same compassion and respect as our own family members — no pilgrim is left behind.' },
]

const milestones = [
  { year: '2009', title: 'Founded in Trichy', desc: 'Crescent Haj Service was established with a single mission: to remove the worldly anxieties of travel so pilgrims can focus on their Ibadah.' },
  { year: '2012', title: 'First Group Hajj', desc: 'Successfully organized our first group Hajj expedition, earning the trust of 40 pilgrims from Tamil Nadu. 100% visa success rate achieved.' },
  { year: '2015', title: 'UAE Operations Launched', desc: 'Expanded services to serve the large Indian Muslim expat community in Dubai, Abu Dhabi, and Sharjah with specialized UAE packages.' },
  { year: '2018', title: '500 Pilgrims Milestone', desc: 'Marked the milestone of serving 500 happy pilgrims — a testament to word-of-mouth trust built through sincerity and service excellence.' },
  { year: '2021', title: 'Post-Pandemic Revival', desc: 'Among the first Tamil Nadu agencies to resume Umrah services after Saudi Arabia reopened, helping pilgrims whose trips were delayed for 2 years.' },
  { year: '2024', title: '1000+ Pilgrims Served', desc: 'Proudly crossed the milestone of 1,000 pilgrims served from India and UAE — a humbling honor we carry with deep gratitude to Allah.' },
]

const team = [
  { name: 'Mohamed Mubarak A', role: 'Founder & Director', bio: 'With over 15 years in pilgrimage services, Mubarak founded Crescent in 2009 driven by a personal mission to make Hajj and Umrah accessible to all Muslims with sincerity and care.', img: '/founder.png' },
]

export default function About() {
  useReveal()
  return (
    <div>
      {/* Hero */}
      <div className="relative pt-32 pb-20 text-center overflow-hidden" style={{ background: 'var(--dark-bg)' }}>
        <div className="glow-orb opacity-50" style={{ top: '-40%', left: '-20%' }} />
        <div className="absolute inset-0 islamic-pattern opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <span className="inline-block text-xs font-body font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
            style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)', color: 'var(--gold)' }}>
            ✦ Est. 2009 · Trichy, Tamil Nadu
          </span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6" style={{ color: 'var(--pearl)' }}>
            About Crescent Haj Service
          </h1>
          <p className="font-body text-lg leading-relaxed" style={{ color: 'rgba(250,248,243,0.7)' }}>
            More than a travel agency. We are your trusted companions on the most important spiritual journey of your life — planned with sincerity, care, and 15+ years of experience.
          </p>
        </div>
      </div>

      {/* Stats */}
      <section className="py-6" style={{ background: 'linear-gradient(90deg, var(--emerald) 0%, #0e5c46 50%, var(--emerald) 100%)' }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center">
          {[
            { v: '15+', l: 'Years Experience' },
            { v: '1000+', l: 'Happy Pilgrims' },
            { v: '50+', l: 'Group Departures' },
            { v: '100%', l: 'Visa Success Rate' },
            { v: '2', l: 'Countries Served' },
          ].map(s => (
            <div key={s.l} className="flex-1 min-w-[120px] text-center px-4 py-3 border-r last:border-r-0" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
              <p className="font-heading text-2xl font-bold" style={{ color: 'var(--gold)' }}>{s.v}</p>
              <p className="text-xs font-body font-medium tracking-wider uppercase mt-0.5" style={{ color: 'rgba(250,248,243,0.65)' }}>{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Founder Message */}
      <section className="py-20" style={{ background: 'var(--sand)' }}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal-left relative">
            <div className="absolute -inset-4 rounded-3xl" style={{ background: 'var(--gold)', opacity: 0.08, transform: 'rotate(-3deg)' }}></div>
            <img src="/founder.png" alt="Mohamed Mubarak A - Founder of Crescent Haj Service" className="relative rounded-3xl shadow-2xl w-full max-w-sm mx-auto object-cover" style={{ border: '3px solid rgba(201,168,76,0.3)' }} />
            <div className="mt-6 text-center">
              <p className="font-heading text-2xl font-bold" style={{ color: 'var(--emerald)' }}>Mohamed Mubarak A</p>
              <p className="font-body text-sm uppercase tracking-widest mt-1" style={{ color: 'var(--gold)' }}>Founder & Director</p>
            </div>
          </div>
          <div className="reveal-right">
            <span className="inline-block text-xs font-body font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
              style={{ background: 'rgba(13,74,58,0.08)', border: '1px solid rgba(13,74,58,0.2)', color: 'var(--emerald)' }}>
              ✦ A Message from Our Founder
            </span>
            <h2 className="font-heading text-4xl font-bold mb-2" style={{ color: 'var(--emerald)' }}>Our Story</h2>
            <GoldDivider />
            <p className="font-body text-base leading-relaxed mb-5" style={{ color: 'rgba(26,26,26,0.7)' }}>
              "Assalamu Alaikum wa Rahmatullahi wa Barakatuh.
            </p>
            <p className="font-body text-base leading-relaxed mb-5" style={{ color: 'rgba(26,26,26,0.7)' }}>
              When I founded Crescent Haj Service over 15 years ago, my vision was simple: to remove the worldly anxieties of travel so that pilgrims could focus entirely on their connection with Allah. I had seen too many people struggle with logistics, hotels, and visas — and it was taking away from the peace and spiritual focus of the Haramain.
            </p>
            <p className="font-body text-base leading-relaxed mb-5" style={{ color: 'rgba(26,26,26,0.7)' }}>
              Alhamdulillah, since 2009, we have had the profound honor of serving over a thousand Guests of Allah (Duyuf al-Rahman). Every package we design, every hotel we select, and every guide we appoint is chosen with the strict criterion of serving you with excellence (Ihsan). We do not just book tickets — we hold your hand through the rituals of Hajj and Umrah."
            </p>
            <p className="font-heading text-lg italic font-bold mb-1" style={{ color: 'var(--gold)' }}>
              — Mohamed Mubarak A
            </p>
            <p className="font-body text-xs uppercase tracking-widest" style={{ color: 'rgba(13,74,58,0.6)' }}>
              Founder & Director, Crescent Haj Service
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20" style={{ background: 'var(--pearl)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="glass-card-light p-10 rounded-3xl reveal-left border-l-4" style={{ borderLeftColor: 'var(--emerald)' }}>
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-heading text-3xl font-bold mb-4" style={{ color: 'var(--emerald)' }}>Our Mission</h3>
              <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(26,26,26,0.7)' }}>
                To provide every Muslim — regardless of budget or background — with a safe, spiritually enriching, and logistically seamless Hajj or Umrah experience that allows them to focus 100% on their worship and connection with Allah.
              </p>
            </div>
            <div className="glass-card-light p-10 rounded-3xl reveal-right border-l-4" style={{ borderLeftColor: 'var(--gold)' }}>
              <div className="text-4xl mb-4">🌙</div>
              <h3 className="font-heading text-3xl font-bold mb-4" style={{ color: 'var(--emerald)' }}>Our Vision</h3>
              <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(26,26,26,0.7)' }}>
                To be the most trusted name in pilgrimage services across India and the UAE — known not for the size of our operations, but for the sincerity of our service, the strength of our scholars, and the depth of our care for every pilgrim.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="text-center mb-12 reveal">
            <h2 className="font-heading text-4xl font-bold mb-4" style={{ color: 'var(--emerald)' }}>Our Core Values</h2>
            <p className="font-body text-base max-w-2xl mx-auto" style={{ color: 'rgba(26,26,26,0.65)' }}>
              These four principles guide every decision we make and every service we provide to our pilgrims.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div key={v.title} className="glass-card-light p-8 rounded-2xl reveal flex gap-5 items-start" style={{ borderLeft: '3px solid rgba(201,168,76,0.4)', transitionDelay: `${i * 0.1}s` }}>
                <div className="text-3xl shrink-0">{v.icon}</div>
                <div>
                  <h3 className="font-heading text-2xl font-bold mb-2" style={{ color: 'var(--emerald)' }}>{v.title}</h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(26,26,26,0.7)' }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey / Milestones */}
      <section className="py-20" style={{ background: 'var(--dark-bg)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14 reveal">
            <span className="inline-block text-xs font-body font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
              style={{ background: 'rgba(201,168,76,0.1)', color: 'var(--gold)', border: '1px solid rgba(201,168,76,0.25)' }}>
              Our Journey
            </span>
            <h2 className="font-heading text-4xl font-bold" style={{ color: 'var(--pearl)' }}>15 Years of Sacred Service</h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px hidden md:block" style={{ background: 'rgba(201,168,76,0.2)' }} />
            <div className="space-y-6">
              {milestones.map((m, i) => (
                <div key={m.year} className="reveal md:pl-20 relative" style={{ transitionDelay: `${i * 0.08}s` }}>
                  {/* Dot */}
                  <div className="hidden md:flex absolute left-5 top-4 w-6 h-6 rounded-full items-center justify-center"
                    style={{ background: 'var(--gold)', boxShadow: '0 0 0 4px rgba(201,168,76,0.15)' }}>
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <div className="glass-card p-6 rounded-2xl">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-body text-xs font-bold uppercase tracking-widest px-3 py-1 rounded" style={{ background: 'rgba(201,168,76,0.15)', color: 'var(--gold)' }}>{m.year}</span>
                      <h3 className="font-heading text-xl font-bold" style={{ color: 'var(--pearl)' }}>{m.title}</h3>
                    </div>
                    <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(250,248,243,0.55)' }}>{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, var(--emerald), #0e5c46)' }}>
        <div className="max-w-5xl mx-auto px-6 text-center reveal">
          <h2 className="font-heading text-4xl font-bold mb-12" style={{ color: 'var(--pearl)' }}>Our Service, by the Numbers</h2>
          <div className="stagger-wrap grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: '15+', label: 'Years Experience', sub: 'Since 2009', count: '15' },
              { num: '1000+', label: 'Happy Pilgrims', sub: 'Across India & UAE', count: '1000' },
              { num: '50+', label: 'Group Departures', sub: 'For Hajj & Umrah', count: '50' },
              { num: '100%', label: 'Visa Success Rate', sub: 'Never denied a visa', count: '100' }
            ].map((stat, i) => (
              <div key={stat.label} className="stagger-child" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="font-heading text-5xl md:text-6xl font-bold mb-2 count-up" data-count={stat.count} style={{ color: 'var(--gold)' }}>{stat.num}</div>
                <div className="font-body text-sm md:text-base uppercase tracking-widest font-semibold mb-1" style={{ color: 'rgba(250,248,243,0.9)' }}>{stat.label}</div>
                <div className="font-body text-xs" style={{ color: 'rgba(250,248,243,0.45)' }}>{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center" style={{ background: 'var(--pearl)' }}>
        <div className="max-w-2xl mx-auto px-6 reveal">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--emerald)' }}>
            Begin Your Journey with Us
          </h2>
          <p className="font-body text-base mb-8" style={{ color: 'rgba(26,26,26,0.6)' }}>
            We have guided over 1,000 pilgrims. Let us guide you too — with sincerity, care, and 15 years of expertise.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-emerald px-8 py-4 rounded-full font-body text-sm font-bold">Plan My Pilgrimage</Link>
            <a href="https://wa.me/916382220393" target="_blank" rel="noopener noreferrer" className="btn-gold px-8 py-4 rounded-full font-body font-bold text-sm">WhatsApp Now</a>
          </div>
        </div>
      </section>
    </div>
  )
}
