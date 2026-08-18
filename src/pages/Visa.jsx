const individualVisaDetails = [
  { label: '14 days', value: '13,950/-' },
  { label: '15 to 20 days', value: '14,950/-' },
]

const iqamaVisaDetails = [
  { label: 'Maximum stay', value: 'Up to 85 days' },
  { label: 'Visa cost', value: 'Rs. 12,950/-' },
]

const individualRequirements = [
  'Passport copy',
  'Flight ticket up and down',
  'Nusuk approval for Makkah & Madinah',
]

const visaVisuals = [
  { title: 'Individual Visa', copy: 'Flexible options based on your stay duration.', image: '/visa-individual-generated.png', target: '#individual-visa' },
  { title: 'Visa with Iqama', copy: 'Longer-stay planning for up to 85 days.', image: '/visa-iqama-generated.png', target: '#iqama-visa' },
]

export default function Visa() {
  return (
    <main>
      <section className="visa-hero">
        <img src="/visa-hero-generated.png" alt="Pilgrimage visa documents with a view of Masjid al-Haram" />
        <div className="visa-hero-shade" />
        <div className="glow-orb opacity-50" style={{ top: '-40%', left: '-20%' }} />
        <div className="absolute inset-0 islamic-pattern opacity-20" />
        <div className="visa-hero-content">
          <span className="visa-eyebrow">Umrah visa services</span>
          <h1>Your visa,<br /><em>arranged with care.</em></h1>
          <p>Clear visa options and essential travel requirements for your Umrah journey.</p>
        </div>
      </section>

      <section className="visa-visuals-section">
        <div className="visa-visuals-heading">
          <span className="eyebrow">Choose your visa type</span>
          <h2>Prepared for every<br /><em>kind of journey.</em></h2>
        </div>
        <div className="visa-visual-grid">
          {visaVisuals.map(visual => (
            <a className="visa-visual-card" href={visual.target} key={visual.title}>
              <img src={visual.image} alt={visual.title} />
              <div className="visa-visual-card-shade" />
              <div className="visa-visual-card-copy">
                <h3>{visual.title}</h3>
                <p>{visual.copy}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="visa-details-section">
        <div className="visa-individual-grid" id="individual-visa">
          <div>
            <span className="eyebrow">Individual visa</span>
            <h2>Choose your<br /><em>stay duration.</em></h2>
          </div>
          <div className="visa-price-card">
            {individualVisaDetails.map(detail => (
              <div className="visa-price-row" key={detail.label}>
                <span>{detail.label}</span>
                <strong>{detail.value}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="visa-individual-grid visa-iqama-grid" id="iqama-visa">
          <div>
            <span className="eyebrow">Umrah Visa with Iqama</span>
            <h2>Stay longer,<br /><em>travel with ease.</em></h2>
          </div>
          <div className="visa-price-card">
            {iqamaVisaDetails.map(detail => (
              <div className="visa-price-row" key={detail.label}>
                <span>{detail.label}</span>
                <strong>{detail.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="visa-approvals-section">
        <div className="visa-approvals-content">
          <span className="eyebrow">Individual visa documents</span>
          <h2>Everything needed<br /><em>for your application.</em></h2>
          <div className="visa-requirements">
            <span className="eyebrow">Individual visa requirements</span>
            <div className="visa-approval-list">
              {individualRequirements.map((requirement, index) => (
                <div className="visa-approval-item" key={requirement}>
                  <span>0{index + 1}</span>
                  <strong>{requirement}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="visa-cta">
        <div>
          <span className="eyebrow-light">Ready to plan your Umrah journey?</span>
          <h2>Speak with our<br /><em>visa advisors.</em></h2>
        </div>
        <a className="refresh-button refresh-button-gold" href="https://wa.me/918110082222?text=I%20would%20like%20details%20about%20Umrah%20visa%20options" target="_blank" rel="noreferrer">Get visa details</a>
      </section>
    </main>
  )
}
