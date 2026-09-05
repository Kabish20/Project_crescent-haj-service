import { Link } from 'react-router-dom'
import { ArrowIcon } from '@/components/common'
import CinematicHero from '@/components/effects/CinematicHero'
import { CONTACT_INFO } from '@/constants'
import {
  HOME_JOURNEYS,
  HOME_BENEFITS,
  HOME_INCLUDED,
  CUSTOMER_REVIEWS
} from '@/data'

function CustomerReviews() {
  return (
    <section className="customer-review-showcase">
      <div className="customer-review-heading">
        <div>
          <span className="eyebrow">Customer reviews</span>
          <h2>Trusted by pilgrims<br /><em>across every journey.</em></h2>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a
            className="testimonial-youtube-link"
            href={CONTACT_INFO.youtubeUrl}
            target="_blank"
            rel="noreferrer"
            style={{ margin: 0 }}
          >
            Watch on YouTube <ArrowIcon />
          </a>
          <a
            className="review-google-link"
            href={CONTACT_INFO.googleReviewsUrl}
            target="_blank"
            rel="noreferrer"
          >
            View all Google reviews <ArrowIcon />
          </a>
        </div>
      </div>
      <div className="customer-review-window">
        <div className="customer-review-track">
          {[...CUSTOMER_REVIEWS, ...CUSTOMER_REVIEWS].map((review, index) => (
            <article className="customer-review-card" key={`${review.name}-${index}`}>
              <div className="customer-review-top">
                <div className="reviewer-identity">
                  <span className="reviewer-avatar">{review.initials}</span>
                  <div>
                    <strong>{review.name}</strong>
                    <small>{review.ago}</small>
                  </div>
                </div>
                <a className="google-review-badge" href={review.link} target="_blank" rel="noreferrer">
                  <span>G</span> REVIEW
                </a>
              </div>
              <div className="customer-stars">★★★★★</div>
              <p className="customer-review-text">“{review.text}”</p>
              <div className="customer-review-footer">
                <div>
                  <small>Service experience</small>
                  <strong>{review.service}</strong>
                </div>
                <span className="review-verified">✓</span>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="customer-review-dots" aria-hidden="true">
        <span />
        <span className="active" />
        <span />
        <span />
      </div>
    </section>
  )
}

export default function Home() {
  const whatsapp = CONTACT_INFO.whatsappUrl

  return (
    <main className="home-refresh">
      {/* Hero */}
      <CinematicHero />

      {/* Journeys */}
      <section id="pilgrimage-journeys" className="journey-section section-pad">
        <div className="section-heading-row">
          <div>
            <span className="eyebrow">Discover your pilgrimage</span>
            <h2>Three paths to spiritual<br /><em>fulfillment.</em></h2>
            <p style={{ marginTop: '12px', fontSize: '1rem', color: 'rgba(26,26,26,0.65)' }}>
              Whether you're answering the call of Hajj (the fifth pillar) or seeking the blessing of Umrah, we offer
              thoughtfully curated journeys tailored to your needs, timeline, and spiritual goals.
            </p>
          </div>
          <Link className="text-link" to="/umrah-packages">
            View all packages <ArrowIcon />
          </Link>
        </div>
        <div className="journey-marquee-window" aria-label="Featured pilgrimage journeys">
          <div className="journey-marquee-track">
            {[...HOME_JOURNEYS, ...HOME_JOURNEYS].map((item, index) => (
              <Link to={item.path} className={`journey-card ${index % HOME_JOURNEYS.length === 1 ? 'featured' : ''}`} key={`${item.title}-${index}`}>
                <img src={item.image} alt={item.title} />
                <div className="journey-card-shade" />
                <div className="journey-card-copy">
                  <span>{item.tag}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  <b>Explore details <ArrowIcon /></b>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Crescent */}
      <section className="proof-section section-pad">
        <div className="proof-intro">
          <span className="eyebrow">Why choose Crescent</span>
          <h2>Experience beyond<br /><em>a booking agency.</em></h2>
          <p>
            More than logistics — we orchestrate transformation. Every detail of your pilgrimage is designed to remove
            worldly anxieties so you can fully immerse in worship, reflection, and spiritual connection with Allah.
          </p>
          <Link className="text-link" to="/about">
            Learn our story <ArrowIcon />
          </Link>
        </div>
        <div className="benefit-list">
          {HOME_BENEFITS.map((item) => (
            <div className="benefit" key={item[0]}>
              <strong>{item[0]}</strong>
              <div>
                <h3>{item[1]}</h3>
                <p>{item[2]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Included Services */}
      <section className="included-section section-pad">
        <div className="included-visual">
          <img src="/madinah_mosque.png" alt="Masjid an-Nabawi in Madinah" />
          <div className="visual-caption">
            <span>Seamless support</span>
            <strong>From booking<br />to blessed return.</strong>
          </div>
        </div>
        <div className="included-copy">
          <span className="eyebrow">Complete pilgrimage care</span>
          <h2>Everything arranged,<br /><em>nothing overlooked.</em></h2>
          <div className="included-grid">
            {HOME_INCLUDED.map((item, i) => (
              <div key={item[0]}>
                <span>0{i + 1}</span>
                <h3>{item[0]}</h3>
                <p>{item[1]}</p>
              </div>
            ))}
          </div>
          <Link className="refresh-button refresh-button-dark" to="/contact">
            Begin your journey <ArrowIcon />
          </Link>
        </div>
      </section>

      <CustomerReviews />

      {/* Final CTA */}
      <section className="final-cta">
        <div>
          <span className="eyebrow-light">Your spiritual journey awaits</span>
          <h2>Ready to answer<br /><em>your call?</em></h2>
          <p style={{ marginTop: '16px', fontSize: '1.05rem', color: 'rgba(250,248,243,0.8)' }}>
            Connect with our pilgrimage advisors today. Free consultation, zero pressure. We're here to guide you home to the Haramain.
          </p>
        </div>
        <a className="refresh-button refresh-button-gold" href={whatsapp} target="_blank" rel="noreferrer">
          Start a conversation <ArrowIcon />
        </a>
      </section>

      {/* Mobile Action Bar */}
      <div className="mobile-action-bar">
        <Link to="/umrah-packages">Packages</Link>
        <a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
        <a href={CONTACT_INFO.phoneTel}>Call us</a>
      </div>
    </main>
  )
}
