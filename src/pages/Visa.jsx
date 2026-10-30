import { Link } from 'react-router-dom'
import { useScrollReveal } from '@/hooks'
import { ArrowIcon } from '@/components/common'
import {
  INDIVIDUAL_VISA_DETAILS,
  IQAMA_VISA_DETAILS,
  INDIVIDUAL_REQUIREMENTS,
  VISA_VISUALS
} from '@/data'
import { CONTACT_INFO } from '@/constants'

export default function Visa() {
  useScrollReveal()
  const visaWhatsappUrl = `${CONTACT_INFO.whatsappUrl.split('?')[0]}?text=Assalamu%20Alaikum%2C%20I%20would%20like%20details%20about%20Umrah%20visa%20options.`
  const individualWhatsappUrl = `${CONTACT_INFO.whatsappUrl.split('?')[0]}?text=Assalamu%20Alaikum%2C%20I%20would%20like%20to%20apply%20for%20an%20Individual%20Umrah%20Visa.`
  const iqamaWhatsappUrl = `${CONTACT_INFO.whatsappUrl.split('?')[0]}?text=Assalamu%20Alaikum%2C%20I%20would%20like%20to%20apply%20for%20an%20Umrah%20Visa%20with%20Iqama.`

  return (
    <main>
      {/* ─── Hero Section ─── */}
      <section className="visa-hero">
        <img src="/visa-hero-generated.png" alt="Pilgrimage visa documents with a view of Masjid al-Haram" />
        <div className="visa-hero-shade" />
        <div className="glow-orb opacity-50" style={{ top: '-40%', left: '-20%' }} />
        <div className="absolute inset-0 islamic-pattern opacity-20" />
        
        <div className="visa-hero-content">
          <span className="visa-eyebrow">
            ✦ Authorized Saudi Visa Facilitator
          </span>
          <h1>
            Your Visa,<br />
            <em>arranged with care.</em>
          </h1>
          <p>
            Fast, transparent, and reliable Umrah & tourist visa processing for Indian citizens and UAE residents. Approved by the Ministry of Hajj & Umrah with a 100% success rate.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8">
            <a
              className="refresh-button refresh-button-gold"
              href={visaWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Enquire on WhatsApp <ArrowIcon />
            </a>
            <a
              className="refresh-button refresh-button-outline"
              href="#visa-types"
            >
              View Visa Types ↓
            </a>
          </div>

          {/* Quick Trust Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-12 pt-8 border-t border-white/15 max-w-3xl">
            {[
              { icon: '⚡', label: '24–48 Hours', sub: 'Fast processing' },
              { icon: '🛡️', label: '100% Rate', sub: 'Verified approvals' },
              { icon: '🕋', label: 'Nusuk Ready', sub: 'Direct registration' },
              { icon: '👥', label: 'All Travellers', sub: 'Solo & Family Visas' },
            ].map((t) => (
              <div key={t.label} className="flex items-center gap-2.5">
                <span className="text-xl sm:text-2xl shrink-0">{t.icon}</span>
                <div>
                  <p className="font-heading font-bold text-sm sm:text-base leading-none text-white">{t.label}</p>
                  <p className="font-body text-xs text-white/60 mt-0.5">{t.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Choose Your Visa Type ─── */}
      <section className="visa-visuals-section" id="visa-types">
        <div className="visa-visuals-heading reveal">
          <span className="eyebrow">Choose your visa type</span>
          <h2>Prepared for every<br /><em>kind of journey.</em></h2>
          <p className="font-body text-base max-w-xl mx-auto mt-3" style={{ color: 'rgba(26,26,26,0.65)' }}>
            Select the visa category that best matches your stay duration and travel itinerary.
          </p>
        </div>

        <div className="visa-visual-grid">
          {VISA_VISUALS.map((visual, idx) => (
            <a className="visa-visual-card reveal" href={visual.target} key={visual.title} style={{ transitionDelay: `${idx * 0.1}s` }}>
              <img src={visual.image} alt={visual.title} />
              <div className="visa-visual-card-shade" />
              <div className="visa-visual-card-copy">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold font-body uppercase tracking-wider mb-2" style={{ background: 'rgba(201,168,76,0.25)', color: 'var(--gold)', border: '1px solid rgba(201,168,76,0.4)' }}>
                  {idx === 0 ? 'Standard Tourist / Umrah' : 'Extended Stay (GCC / Iqama)'}
                </span>
                <h3>{visual.title}</h3>
                <p>{visual.copy}</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider font-body" style={{ color: 'var(--gold)' }}>
                  View Options &amp; Pricing <ArrowIcon />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ─── Visa Details & Pricing ─── */}
      <section className="visa-details-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal">
            <span className="eyebrow">Transparent Pricing</span>
            <h2 className="mt-2">Clear Visa Options &amp;<br /><em>Stay Durations</em></h2>
            <p className="font-body text-base mt-3" style={{ color: 'rgba(26,26,26,0.65)' }}>
              All packages include government visa fees, processing support, and direct Nusuk platform synchronization.
            </p>
          </div>

          {/* Option 1: Individual Visa */}
          <div className="visa-individual-grid reveal" id="individual-visa">
            <div>
              <span className="inline-block text-xs font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3" style={{ background: 'rgba(13,74,58,0.1)', color: 'var(--emerald)', border: '1px solid rgba(13,74,58,0.2)' }}>
                Option 01 · Individual Visa
              </span>
              <h2>Choose your<br /><em>stay duration.</em></h2>
              <p className="visa-copy">
                Perfect for solo pilgrims, families, and couples planning standard Umrah journeys. Fast issuance with full access to Makkah and Madinah.
              </p>

              <div className="space-y-2.5 mb-6">
                {[
                  'Saudi eVisa issuance & approval',
                  'Makkah & Madinah entry permits',
                  'Nusuk app registration assistance',
                  'Dedicated WhatsApp support 24/7'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm font-body font-medium" style={{ color: 'var(--emerald)' }}>
                    <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-xs font-bold" style={{ background: 'rgba(201,168,76,0.2)', color: '#8a6e27' }}>✓</span>
                    {item}
                  </div>
                ))}
              </div>

              <a
                href={individualWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-emerald inline-flex items-center gap-2 px-6 py-3 rounded-full font-body font-bold text-sm"
              >
                Apply for Individual Visa <ArrowIcon />
              </a>
            </div>

            <div className="visa-price-card">
              <div className="border-b pb-3 mb-2" style={{ borderColor: 'rgba(20,60,50,0.1)' }}>
                <p className="text-xs uppercase tracking-widest font-bold font-body" style={{ color: 'var(--gold)' }}>Package Pricing</p>
                <p className="text-sm font-body" style={{ color: 'rgba(26,26,26,0.6)' }}>Transparent all-inclusive rates</p>
              </div>
              {INDIVIDUAL_VISA_DETAILS.map((detail) => (
                <div className="visa-price-row" key={detail.label}>
                  <div>
                    <span>Stay Duration</span>
                    <p className="font-heading font-bold text-lg" style={{ color: 'var(--emerald)' }}>{detail.label}</p>
                  </div>
                  <strong>Rs. {detail.value}</strong>
                </div>
              ))}
            </div>
          </div>

          {/* Option 2: Umrah Visa with Iqama */}
          <div className="visa-individual-grid visa-iqama-grid reveal" id="iqama-visa">
            <div>
              <span className="inline-block text-xs font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3" style={{ background: 'rgba(201,168,76,0.15)', color: '#8a6e27', border: '1px solid rgba(201,168,76,0.3)' }}>
                Option 02 · Extended Stay
              </span>
              <h2>Umrah Visa<br /><em>with Iqama.</em></h2>
              <p className="visa-copy">
                Designed for GCC residents, Iqama holders, and long-stay pilgrims who wish to spend up to 85 days in the holy lands with multiple-entry flexibility.
              </p>

              <div className="space-y-2.5 mb-6">
                {[
                  'Stay up to 85 days in Saudi Arabia',
                  'Multi-city travel (Jeddah, Makkah, Madinah)',
                  'Priority GCC resident verification',
                  'Complete ground assistance upon arrival'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm font-body font-medium" style={{ color: 'var(--emerald)' }}>
                    <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-xs font-bold" style={{ background: 'rgba(201,168,76,0.2)', color: '#8a6e27' }}>✓</span>
                    {item}
                  </div>
                ))}
              </div>

              <a
                href={iqamaWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-full font-body font-bold text-sm"
              >
                Apply with Iqama <ArrowIcon />
              </a>
            </div>

            <div className="visa-price-card">
              <div className="border-b pb-3 mb-2" style={{ borderColor: 'rgba(20,60,50,0.1)' }}>
                <p className="text-xs uppercase tracking-widest font-bold font-body" style={{ color: 'var(--gold)' }}>Iqama Visa Pricing</p>
                <p className="text-sm font-body" style={{ color: 'rgba(26,26,26,0.6)' }}>Maximum flexibility & duration</p>
              </div>
              {IQAMA_VISA_DETAILS.map((detail) => (
                <div className="visa-price-row" key={detail.label}>
                  <div>
                    <span>{detail.label}</span>
                    <p className="font-heading font-bold text-lg" style={{ color: 'var(--emerald)' }}>{detail.label === 'Maximum stay' ? 'Long-term' : 'Visa Processing'}</p>
                  </div>
                  <strong>{detail.value.startsWith('Rs.') ? detail.value : detail.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Required Documents & Approval Process ─── */}
      <section className="visa-approvals-section">
        <div className="visa-approvals-content">
          <div className="text-center max-w-2xl mx-auto mb-12 reveal">
            <span className="eyebrow">Clear Documentation</span>
            <h2>Everything Needed<br /><em>for your application.</em></h2>
            <p className="font-body text-base mt-3" style={{ color: 'rgba(26,26,26,0.65)' }}>
              Simple, paperless submission. Send your documents via WhatsApp or email — our team verifies and processes your visa within 24 hours.
            </p>
          </div>

          <div className="visa-approval-list reveal">
            {INDIVIDUAL_REQUIREMENTS.map((requirement, index) => (
              <div className="visa-approval-item" key={requirement}>
                <span>0{index + 1}</span>
                <div>
                  <strong>{requirement}</strong>
                  <p className="font-body text-xs sm:text-sm mt-0.5" style={{ color: 'rgba(26,26,26,0.6)' }}>
                    {index === 0 && 'Clear front and back scan copy with minimum 6 months validity.'}
                    {index === 1 && 'Confirmed round-trip airline tickets to Saudi Arabia.'}
                    {index === 2 && 'Mandatory Saudi government pilgrim permit for entry into Haramain.'}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 3-Step Process Flow */}
          <div className="grid sm:grid-cols-3 gap-5 mt-14 reveal">
            {[
              { step: 'Step 1', title: 'Send Documents', desc: 'Share your passport copy and travel dates on WhatsApp.' },
              { step: 'Step 2', title: 'Embassy Submission', desc: 'Our team verifies and lodges your application instantly.' },
              { step: 'Step 3', title: 'Receive eVisa', desc: 'Get your approved visa PDF and Nusuk barcode directly.' },
            ].map((s) => (
              <div key={s.step} className="p-6 rounded-2xl bg-white border border-emerald-950/10 shadow-sm text-center">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold font-body uppercase tracking-wider mb-3" style={{ background: 'rgba(201,168,76,0.15)', color: '#8a6e27' }}>
                  {s.step}
                </span>
                <h4 className="font-heading font-bold text-xl mb-1.5" style={{ color: 'var(--emerald)' }}>{s.title}</h4>
                <p className="font-body text-xs sm:text-sm" style={{ color: 'rgba(26,26,26,0.65)' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Contact Our Offices Section ─── */}
      <section className="py-16 sm:py-20" style={{ background: '#f8f6f0', borderTop: '1px solid rgba(20,60,50,0.12)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 reveal">
            <span className="eyebrow">Direct Assistance</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-2 mb-3" style={{ color: 'var(--emerald)' }}>
              Contact Our <em>Offices</em>
            </h2>
            <p className="font-body text-sm sm:text-base" style={{ color: 'rgba(26,26,26,0.65)' }}>
              Have questions regarding passport validity, Nusuk registration, or urgent visa processing? Reach out directly to any of our branch offices.
            </p>
          </div>

          {/* Quick Contact Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 reveal">
            <a
              href={CONTACT_INFO.phoneTel}
              className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:shadow-md"
              style={{ background: '#f1ecdf', border: '1px solid rgba(201,168,76,0.25)' }}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl shrink-0" style={{ background: 'rgba(201,168,76,0.15)' }}>
                📞
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider font-semibold font-body" style={{ color: 'var(--gold)' }}>Phone / WhatsApp</p>
                <p className="font-body font-bold text-sm" style={{ color: 'var(--emerald)' }}>{CONTACT_INFO.phoneDisplay}</p>
              </div>
            </a>

            <a
              href={CONTACT_INFO.emailMailto}
              className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:shadow-md"
              style={{ background: '#f1ecdf', border: '1px solid rgba(201,168,76,0.25)' }}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl shrink-0" style={{ background: 'rgba(201,168,76,0.15)' }}>
                📧
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider font-semibold font-body" style={{ color: 'var(--gold)' }}>Email Us</p>
                <p className="font-body font-bold text-sm truncate" style={{ color: 'var(--emerald)' }}>{CONTACT_INFO.email}</p>
              </div>
            </a>

            <div
              className="flex items-center gap-4 p-4 rounded-xl"
              style={{ background: '#f1ecdf', border: '1px solid rgba(201,168,76,0.25)' }}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl shrink-0" style={{ background: 'rgba(201,168,76,0.15)' }}>
                🕐
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider font-semibold font-body" style={{ color: 'var(--gold)' }}>Working Hours</p>
                <p className="font-body font-bold text-sm" style={{ color: 'var(--emerald)' }}>{CONTACT_INFO.workingHours}</p>
              </div>
            </div>
          </div>

          {/* Office Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {CONTACT_INFO.offices.map((office, idx) => (
              <div
                key={office.label}
                className="p-6 rounded-2xl flex flex-col justify-between reveal"
                style={{
                  background: '#f1ecdf',
                  border: '1px solid rgba(20,60,50,0.12)',
                  boxShadow: '0 10px 30px rgba(15,44,34,0.04)',
                  transitionDelay: `${idx * 0.08}s`
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl">{office.icon}</span>
                    <span
                      className="text-xs font-bold font-body uppercase tracking-wider px-2.5 py-1 rounded-full"
                      style={{ background: 'rgba(201,168,76,0.15)', color: '#8a6e27', border: '1px solid rgba(201,168,76,0.3)' }}
                    >
                      {office.city}, {office.country}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-2" style={{ color: 'var(--emerald)' }}>
                    {office.label}
                  </h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(26,26,26,0.7)' }}>
                    {office.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="visa-cta">
        <div className="reveal">
          <span className="eyebrow-light">Ready to plan your Umrah journey?</span>
          <h2>Speak with our<br /><em>visa advisors.</em></h2>
          <p className="font-body text-sm sm:text-base mt-2" style={{ color: 'rgba(250,248,243,0.75)' }}>
            Get verified assistance within 2 hours. Available 6 days a week.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 reveal">
          <a
            className="refresh-button refresh-button-gold"
            href={visaWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp
          </a>
          <Link
            to="/contact"
            className="refresh-button"
            style={{ background: 'rgba(250,248,243,0.1)', color: '#f8f6f0', border: '1px solid rgba(250,248,243,0.2)' }}
          >
            Contact Page
          </Link>
        </div>
      </section>
    </main>
  )
}
