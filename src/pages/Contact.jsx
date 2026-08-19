import { useState } from 'react'
import { useScrollReveal } from '@/hooks'
import { CONTACT_INFO } from '@/constants'

export default function Contact() {
  useScrollReveal()
  const [form, setForm] = useState({
    name: '',
    phone: '',
    from: '',
    passengers: '',
    month: '',
    packageType: '',
    message: ''
  })

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const msg = `Hi, I want to enquire about a pilgrimage package.\nName: ${form.name}\nPhone: ${form.phone}\nTravelling From: ${form.from}\nPassengers: ${form.passengers}\nPreferred Month: ${form.month}\nPackage Type: ${form.packageType}\nMessage: ${form.message}`

  const contactList = [
    { icon: '📞', label: 'Phone / WhatsApp', value: CONTACT_INFO.phoneDisplay, href: CONTACT_INFO.phoneTel },
    { icon: '📧', label: 'Email', value: CONTACT_INFO.email, href: CONTACT_INFO.emailMailto },
    ...CONTACT_INFO.offices.map((o) => ({
      icon: o.icon,
      label: o.label,
      value: o.value,
      href: null
    })),
    { icon: '🕐', label: 'Working Hours', value: CONTACT_INFO.workingHours, href: null },
  ]

  return (
    <div>
      {/* Hero */}
      <div className="relative pt-20 sm:pt-32 pb-12 sm:pb-20 text-center" style={{ background: 'var(--dark-bg)' }}>
        <div className="glow-orb opacity-50" style={{ top: '-40%', left: '-20%' }} />
        <div className="absolute inset-0 islamic-pattern opacity-20" />
        <div className="relative z-10 px-4 sm:px-6">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-2 sm:mb-3" style={{ color: 'var(--pearl)' }}>
            Start Your Pilgrimage Journey
          </h1>
          <p className="font-body text-sm sm:text-lg" style={{ color: 'rgba(250,248,243,0.6)' }}>
            Our advisors respond within 2 hours. WhatsApp, call, or fill the form below
          </p>
        </div>
      </div>

      <section className="py-12 sm:py-20" style={{ background: 'var(--pearl)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-5 gap-8 sm:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="font-heading text-3xl font-bold reveal" style={{ color: 'var(--emerald)' }}>Reach Out to Us</h2>
            <p className="font-body text-base leading-relaxed reveal" style={{ color: 'rgba(26,26,26,0.65)' }}>
              Our pilgrimage advisors are here to guide you through every step. Available 6 days a week (9am-7pm). WhatsApp for fastest response — we answer within 2 hours. Your spiritual journey deserves expert, personal attention.
            </p>

            {contactList.map((c) => (
              <div key={c.label} className="flex gap-4 glass-card-light p-4 rounded-2xl reveal">
                <div className="text-2xl">{c.icon}</div>
                <div>
                  <p className="text-xs font-body font-semibold uppercase tracking-wider mb-0.5" style={{ color: 'var(--gold)' }}>{c.label}</p>
                  {c.href ? (
                    <a href={c.href} className="font-body text-sm font-medium" style={{ color: 'var(--emerald)' }}>
                      {c.value}
                    </a>
                  ) : (
                    <p className="font-body text-sm" style={{ color: 'rgba(26,26,26,0.7)' }}>{c.value}</p>
                  )}
                </div>
              </div>
            ))}

            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 py-4 rounded-2xl font-body font-bold text-sm reveal"
              style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)', color: 'white' }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              </svg>
              Chat on WhatsApp Now
            </a>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 glass-card-light p-8 rounded-2xl reveal-right">
            <h3 className="font-heading text-2xl font-bold mb-1" style={{ color: 'var(--emerald)' }}>Quick Enquiry</h3>
            <p className="font-body text-sm mb-6" style={{ color: 'rgba(26,26,26,0.6)' }}>Fill this form and we'll call you back with personalized package options</p>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { name: 'name', label: 'Your Name', placeholder: 'Full Name' },
                { name: 'phone', label: 'WhatsApp / Phone', placeholder: '+91 or +971...' },
                { name: 'from', label: 'Travelling From', placeholder: 'City, Country' },
                { name: 'passengers', label: 'No. of Passengers', placeholder: 'e.g. 4' },
                { name: 'month', label: 'Preferred Month', placeholder: 'e.g. March 2025' },
              ].map((f) => (
                <div key={f.name}>
                  <label className="block text-xs font-body font-semibold mb-1.5" style={{ color: 'var(--emerald)' }}>{f.label}</label>
                  <input
                    name={f.name}
                    placeholder={f.placeholder}
                    value={form[f.name]}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border font-body text-sm focus:outline-none"
                    style={{ border: '1px solid rgba(13,74,58,0.2)', background: 'rgba(13,74,58,0.02)', color: 'var(--charcoal)' }}
                  />
                </div>
              ))}
              <div>
                <label className="block text-xs font-body font-semibold mb-1.5" style={{ color: 'var(--emerald)' }}>Package Type</label>
                <select
                  name="packageType"
                  value={form.packageType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border font-body text-sm focus:outline-none"
                  style={{ border: '1px solid rgba(13,74,58,0.2)', background: 'white', color: 'var(--charcoal)' }}
                >
                  <option value="">Select package</option>
                  <option>Hajj Package</option>
                  <option>Umrah from India</option>
                  <option>Umrah from UAE</option>
                  <option>Tailor-Made Umrah</option>
                  <option>Ziyarat Tour</option>
                  <option>Nikkah in Masjid</option>
                </select>
              </div>
            </div>
            <div className="mt-5">
              <label className="block text-xs font-body font-semibold mb-1.5" style={{ color: 'var(--emerald)' }}>Message</label>
              <textarea
                name="message"
                rows={4}
                placeholder="Any specific requirements or questions..."
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border font-body text-sm focus:outline-none resize-none"
                style={{ border: '1px solid rgba(13,74,58,0.2)', background: 'rgba(13,74,58,0.02)', color: 'var(--charcoal)' }}
              />
            </div>
            <div className="flex flex-wrap gap-4 mt-6">
              <a
                href={`https://wa.me/918110082222?text=${encodeURIComponent(msg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold flex-1 py-3.5 rounded-full font-body font-bold text-sm text-center"
              >
                Submit via WhatsApp
              </a>
              <a href={CONTACT_INFO.phoneTel} className="btn-emerald flex-1 py-3.5 rounded-full font-body font-bold text-sm text-center">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
