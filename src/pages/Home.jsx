import { Link } from 'react-router-dom'
import { ArrowIcon, GeneralEnquiryModal } from '@/components/common'
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
        <a
          className="review-google-link"
          href={CONTACT_INFO.googleReviewsUrl}
          target="_blank"
          rel="noreferrer"
        >
          View all Google reviews <ArrowIcon />
        </a>
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
      <section className="refresh-hero">
        <img src="/hero-makkah-generated.png" alt="Masjid al-Haram in Makkah at dusk" />
        <div className="refresh-hero-shade" />
        <div className="refresh-hero-content">
          <p className="eyebrow-light">Crescent Haj Service · Trusted Since 2009 · 1000+ Happy Pilgrims</p>
          <h1>Answer your heart's<br /><em>deepest calling.</em></h1>
          <p className="hero-lede">
            Premium Hajj and Umrah packages combining spiritual guidance, luxury accommodations, and unwavering support.
            Make your pilgrimage a transformative journey, not a travel checklist.
          </p>
          <div className="refresh-actions">
            <Link className="refresh-button refresh-button-gold" to="/umrah-packages">
              Start your journey <ArrowIcon />
            </Link>
            <a className="refresh-button refresh-button-outline" href={whatsapp} target="_blank" rel="noreferrer">
              Free consultation
            </a>
          </div>
          <div className="hero-note">
            <span className="live-dot" /> 24/7 WhatsApp support · India & UAE departures · Scholar-led groups
          </div>
        </div>
        <div className="hero-scroll">
          Scroll to explore <span />
        </div>
        <GeneralEnquiryModal defaultOpen={true} />
      </section>

      {/* Journeys */}
      <section className="journey-section section-pad">
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
        <div className="journey-grid">
          {HOME_JOURNEYS.map((item, index) => (
            <Link to={item.path} className={`journey-card ${index === 1 ? 'featured' : ''}`} key={item.title}>
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

      {/* Testimonials */}
      <section className="testimonial-section">
        <span className="eyebrow-light">Customer reviews</span>
        <div className="testimonial-review-grid">
          <article className="testimonial-review-card">
            <div className="quote-mark">"</div>
            <blockquote>
              Assalamualaikum w.r.w.b. I strongly recommend Crescent Umrah and Hajj Service for a pleasant pilgrimage. I liked the way they organized things for our Umrah trip, including cabs for Ziyarat, hotel-to-airport transfers, food, and a moulavi for guiding you while performing Umrah and Ziyarat. It is outstanding. Alhamdulillah, this is our second year with them and, InshaAllah, many more years to go. I have also recommended their services to extended family and friends. In short, a good, reliable, and trustworthy service. They also provide customised plans on request.
            </blockquote>
            <p>— A Crescent pilgrim family</p>
            <div className="rating">★★★★★ <span>Verified customer experience</span></div>
          </article>
          <article className="testimonial-review-card">
            <div className="quote-mark">“</div>
            <blockquote>
              Crescent Umrah &amp; Hajj Services is one of the most trustworthy Umrah service providers. Alhamdulillah, this was our second time choosing them, and when we planned our Umrah again, we didn’t have to think twice before booking with them.<br /><br />
              Just as we expected, their service was exceptional. They took care of every personal arrangement, making our journey smooth and stress-free from start to finish. Their cab services were reliable, and their visa processing was incredibly efficient—they shared our visa and a detailed day-wise itinerary within just two days.<br /><br />
              We have already recommended Crescent Umrah &amp; Hajj Services to our extended family and friends, and we will continue to do so.<br /><br />
              I highly recommend them to anyone looking for a hassle-free and well-organized Umrah experience. May Allah reward the entire team for their excellent service. Ameen.
            </blockquote>
            <p className="reviewer-name">— Sabiha Sultana</p>
            <a className="review-source-link" href="https://www.google.com/maps/contrib/111608337610501191994/reviews?hl=en-IN" target="_blank" rel="noreferrer">
              View this review on Google Maps <ArrowIcon />
            </a>
          </article>
        </div>
        <a className="testimonial-youtube-link" href={CONTACT_INFO.youtubeUrl} target="_blank" rel="noreferrer">
          Watch real pilgrim testimonials on YouTube <ArrowIcon />
        </a>
      </section>

      <section className="testimonial-section additional-review-section">
        <span className="eyebrow-light">Customer review</span>
        <div className="testimonial-review-grid">
          <article className="testimonial-review-card">
            <div className="quote-mark">“</div>
            <blockquote>
              Crescent Haj Service organised our Umrah journey with care and professionalism in both Madinah and Makkah. Our travel period was from 29 December 2025 to 10 January 2026, which coincided with peak season. Despite the heavy crowds in both cities, the arrangements were well coordinated and smoothly managed.<br /><br />
              During this journey, we were able to perform three Umrahs, all of which were well facilitated and organised, allowing us to focus fully on our ibadah without unnecessary stress.<br /><br />
              We would like to specially acknowledge Mr Ryaz, who coordinated with us throughout the planning stage, including flight bookings, hotel arrangements, and overall logistics. His responsiveness, clarity, and efficiency ensured a smooth and stress-free preparation for the journey.<br /><br />
              Ziyarah was arranged in both Madinah and Makkah, and in each city the Hajrath who accompanied us was highly knowledgeable. The explanations provided were clear and insightful, adding depth and meaning to the spiritual experience.<br /><br />
              We would also like to commend Mr Mubarak, the proprietor of Crescent Haj Service, who travelled with us throughout the journey. Despite his position, he remained consistently polite, humble, and approachable. He took personal interest in each and every traveller, maintaining a genuine connection with everyone in the group. His gentle temperament, patience, and calm presence made the journey comfortable and reassuring for all of us.<br /><br />
              Our stay in Makkah was at DoubleTree by Hilton, which was very comfortable. The hotel’s close proximity to the Haram, within a five minute walk, along with the 24 hour buggy service, was especially convenient.<br /><br />
              One area for improvement would be room allocation in Madinah, as the rooms were somewhat compact. However, this is a common limitation with many mid-range hotels in Madinah, particularly during peak periods.<br /><br />
              Overall, Crescent Haj Service delivered a well organised and meaningful Umrah experience. We appreciate the dedication of the team and would confidently recommend Crescent Haj Service to others planning their Umrah journey.
            </blockquote>
            <p className="reviewer-name">— Munaawara Banu</p>
            <a className="review-source-link" href="https://www.google.com/maps/contrib/100035426218546749755/reviews?hl=en-IN" target="_blank" rel="noreferrer">
              View this review on Google Maps <ArrowIcon />
            </a>
          </article>
        </div>
      </section>

      <section className="testimonial-section additional-review-section">
        <span className="eyebrow-light">Customer review</span>
        <div className="testimonial-review-grid">
          <article className="testimonial-review-card">
            <div className="quote-mark">“</div>
            <blockquote>
              Alhamdulillah. In the name of Allah, my family and I are very, very happy with all the services provided by the Crescent team. Right from our departure to Makkah and our return, they stayed in constant contact with me to make sure everything was okay. Their response time was very quick whenever I needed clarification.<br /><br />
              Alhamdulillah, my mind was fully focused on Umrah. I am very thankful to the team, who took care of us like family. The package was five-star, the food was delivered on time, and the vehicle arrangements were excellent. The GMC ride was outstanding. I will recommend Crescent to all my family members for their Umrah and Hajj, and will always plan only through the Crescent team.
            </blockquote>
            <p className="reviewer-name">— Ansari NM</p>
            <a className="review-source-link" href="https://www.google.com/maps/contrib/117744735499775852231/reviews?hl=en-IN" target="_blank" rel="noreferrer">
              View this review on Google Maps <ArrowIcon />
            </a>
          </article>
        </div>
      </section>

      <section className="testimonial-section additional-review-section">
        <span className="eyebrow-light">Customer review</span>
        <div className="testimonial-review-grid">
          <article className="testimonial-review-card">
            <div className="quote-mark">“</div>
            <blockquote>
              I had an excellent experience with Crescent Haj Service. Their Umrah service was truly outstanding, very well organized, and professionally managed. The entire team was highly supportive and ensured that all our requirements were fulfilled perfectly without any delay. From start to finish, everything was smooth and hassle-free. I sincerely appreciate their dedication and commitment, and I strongly recommend Crescent Haj Service to anyone looking for a reliable and trustworthy Umrah service.<br /><br />
              Once again, thanks for your guidance, Haji Mubarak brother, for the wonderful service.
            </blockquote>
            <p className="reviewer-name">— Hassan Mohamed</p>
            <a className="review-source-link" href="https://www.google.com/maps/contrib/112527273426118218623/reviews?hl=en-IN" target="_blank" rel="noreferrer">
              View this review on Google Maps <ArrowIcon />
            </a>
          </article>
        </div>
      </section>

      <section className="testimonial-section additional-review-section">
        <span className="eyebrow-light">Customer review</span>
        <div className="testimonial-review-grid">
          <article className="testimonial-review-card">
            <div className="quote-mark">“</div>
            <blockquote>
              Assalamualaikum w.r.w.b. I strongly recommend Crescent Umrah and Hajj Service for a pleasant pilgrimage. I liked the way they organized things for our Umrah trip, including cabs for Ziyarat, hotel-to-airport transfers, food, and a moulavi for guiding you while performing Umrah and Ziyarat. It is outstanding. Alhamdulillah, this is our second year with them and, InshaAllah, many more years to go. I have also recommended their services to extended family and friends. In short, a good, reliable, and trustworthy service. They also provide customised plans on request.
            </blockquote>
            <p className="reviewer-name">— Farhath Aamir</p>
            <a className="review-source-link" href="https://www.google.com/maps/contrib/103967541975629886972/reviews?hl=en-IN" target="_blank" rel="noreferrer">
              View this review on Google Maps <ArrowIcon />
            </a>
          </article>
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
