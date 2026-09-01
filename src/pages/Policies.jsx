import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CONTACT_INFO } from '@/constants'
import { PageHero } from '@/components/common'

const LAST_UPDATED = '1 September 2026'

const POLICY_LINKS = [
  { label: 'Privacy Policy', path: '/privacy-policy', key: 'privacy' },
  { label: 'Terms & Conditions', path: '/terms-conditions', key: 'terms' },
  { label: 'Cancellation Policy', path: '/cancellation-policy', key: 'cancellation' },
]

function PolicySection({ number, id, title, children }) {
  return (
    <section id={id} className="policy-section">
      <div className="policy-section-number">{number}</div>
      <div className="policy-section-copy">
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  )
}

function PolicyLayout({ type, title, subtitle, tag, notice, contents, children }) {
  useEffect(() => {
    const previousTitle = document.title
    document.title = `${title} | Crescent Haj Service`
    return () => {
      document.title = previousTitle
    }
  }, [title])

  return (
    <div className="policy-page">
      <PageHero tag={tag} title={title} subtitle={subtitle} />

      <main className="policy-main">
        <div className="policy-wrap">
          <div className="policy-meta-row">
            <div className="policy-updated">
              <span className="policy-meta-label">Last updated</span>
              <strong>{LAST_UPDATED}</strong>
            </div>
            <div className="policy-page-links" aria-label="Legal pages">
              {POLICY_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={link.key === type ? 'active' : ''}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="policy-notice">
            <span className="policy-notice-icon" aria-hidden="true">i</span>
            <p>{notice}</p>
          </div>

          <div className="policy-content-grid">
            <aside className="policy-contents" aria-label="On this page">
              <p className="policy-contents-title">On this page</p>
              <nav>
                {contents.map((item, index) => (
                  <a key={item.id} href={`#${item.id}`}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    {item.label}
                  </a>
                ))}
              </nav>
            </aside>

            <article className="policy-article">
              {children}

              <div className="policy-contact-card">
                <div>
                  <span className="policy-card-eyebrow">Questions about this policy?</span>
                  <h2>We are here to help.</h2>
                  <p>
                    Contact our team before you book or if you need help with an existing enquiry. Please include your booking reference when writing about a confirmed service.
                  </p>
                </div>
                <div className="policy-contact-actions">
                  <a href={CONTACT_INFO.emailMailto} className="btn-emerald px-6 py-3 rounded-full font-body font-bold text-sm">
                    Email our team
                  </a>
                  <a href={CONTACT_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-gold px-6 py-3 rounded-full font-body font-bold text-sm">
                    WhatsApp us
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>
    </div>
  )
}

const InlineLink = ({ to, children }) => <Link className="policy-inline-link" to={to}>{children}</Link>

export function PrivacyPolicy() {
  const contents = [
    { id: 'privacy-scope', label: 'Scope of this policy' },
    { id: 'privacy-data', label: 'Information we collect' },
    { id: 'privacy-use', label: 'How we use information' },
    { id: 'privacy-sharing', label: 'Sharing and disclosure' },
    { id: 'privacy-transfers', label: 'International transfers' },
    { id: 'privacy-retention', label: 'Retention and security' },
    { id: 'privacy-rights', label: 'Your choices and rights' },
    { id: 'privacy-cookies', label: 'Cookies and third-party links' },
    { id: 'privacy-children', label: 'Children and updates' },
    { id: 'privacy-contact', label: 'Contact and grievance support' },
  ]

  return (
    <PolicyLayout
      type="privacy"
      tag="Your information, handled with care"
      title="Privacy Policy"
      subtitle="A clear explanation of how Crescent Haj Service collects, uses, shares, and protects information when you plan your pilgrimage with us."
      contents={contents}
      notice="This website policy covers enquiries and website activity. The privacy terms of a third-party airline, hotel, visa platform, payment provider, WhatsApp, Zoho, or Goimomi service may also apply to information you provide directly to that provider."
    >
      <PolicySection number="01" id="privacy-scope" title="Scope of this policy">
        <p>This Privacy Policy applies to Crescent Haj Service and to information collected through our website, enquiry channels, and customer support conversations for Hajj, Umrah, visa assistance, Ziyarat, Nikkah, and related travel services.</p>
        <p>In this policy, “Crescent”, “we”, “us”, and “our” refer to Crescent Haj Service. “You” means a visitor, enquirer, traveller, pilgrim, or authorised representative who interacts with us.</p>
        <p>By using the website or contacting us, you acknowledge that you have read this policy. We may provide additional, service-specific notices when a booking or application requires information not covered here.</p>
      </PolicySection>

      <PolicySection number="02" id="privacy-data" title="Information we collect">
        <p>We collect only information reasonably needed to answer an enquiry, arrange a service, process a booking, meet travel requirements, or comply with law. This may include:</p>
        <ul>
          <li><strong>Contact details:</strong> name, phone number, WhatsApp number, email address, city, country, and preferred contact method.</li>
          <li><strong>Travel details:</strong> destination, dates, number of travellers, package preferences, passport or visa information, and details needed for tickets, hotels, transport, or permits.</li>
          <li><strong>Special requirements:</strong> accessibility, mobility, dietary, medical, or family information when you choose to share it for a requested service.</li>
          <li><strong>Transaction details:</strong> booking reference, payment status, invoices, refunds, and limited payment information. We do not ask you to send full card numbers or banking passwords by email or WhatsApp.</li>
          <li><strong>Communications:</strong> messages, call notes, documents, feedback, complaints, and records needed to manage your enquiry or booking.</li>
          <li><strong>Technical information:</strong> IP address, device and browser information, pages viewed, and basic logs required for security and site operation.</li>
        </ul>
        <p>Some information is collected directly from you. Some may come from a booking group organiser, a family member, an authorised agent, or a service provider helping to fulfil your request.</p>
      </PolicySection>

      <PolicySection number="03" id="privacy-use" title="How we use information">
        <p>We may use your information to:</p>
        <ul>
          <li>respond to questions, prepare quotations, and recommend suitable pilgrimage or travel options;</li>
          <li>create, administer, and support a booking, visa application, itinerary, payment plan, or refund;</li>
          <li>share essential details with airlines, hotels, transport operators, visa authorities, insurance providers, scholars, and other suppliers involved in your requested service;</li>
          <li>verify identity, prevent fraud, protect travellers, resolve complaints, and keep accurate business records;</li>
          <li>send service messages, booking updates, safety notices, and—where permitted—relevant offers or marketing communications; and</li>
          <li>secure, maintain, improve, and understand use of our website and digital forms.</li>
        </ul>
        <p>Our processing may be based on your consent, the steps needed to provide a requested service or booking, our legitimate operational interests, and legal or regulatory obligations, as applicable to the activity and jurisdiction.</p>
      </PolicySection>

      <PolicySection number="04" id="privacy-sharing" title="Sharing and disclosure">
        <p>We do not sell your personal information. We may disclose relevant information where needed to provide the service you request, including to:</p>
        <ul>
          <li>airlines, hotels, transport companies, local operators, insurance providers, visa and permit authorities, and destination partners;</li>
          <li>payment processors, banks, accountants, technology providers, customer-support tools, and professional advisers who support our operations;</li>
          <li>our enquiry form provider, Zoho, when you use the embedded enquiry form;</li>
          <li>Goimomi or another booking platform when you use an embedded or linked package-listing service; and</li>
          <li>government authorities, regulators, law-enforcement bodies, or courts when disclosure is required or reasonably necessary to protect people or legal rights.</li>
        </ul>
        <p>We ask service providers to handle information only for authorised purposes and to apply appropriate safeguards. A provider may process information under its own privacy notice, and we encourage you to read that notice before submitting information through a third-party form or platform.</p>
      </PolicySection>

      <PolicySection number="05" id="privacy-transfers" title="International transfers">
        <p>Planning a pilgrimage often requires information to move between India, Saudi Arabia, the UAE, and other countries involved in your itinerary. We may transfer relevant information to suppliers or authorities in those locations so that they can issue a visa, ticket, reservation, permit, or travel service.</p>
        <p>Where information crosses borders, we take reasonable steps to use reputable providers, limit the information shared, and apply safeguards required by applicable data-protection law. Some destination authorities and suppliers may be legally required to retain information in their own systems.</p>
      </PolicySection>

      <PolicySection number="06" id="privacy-retention" title="Retention and security">
        <p>We retain information for as long as it is reasonably required for the purpose for which it was collected, including completing a booking, handling a dispute, meeting accounting or legal obligations, and protecting our business. When it is no longer required, we take reasonable steps to delete it, anonymise it, or securely restrict access.</p>
        <p>We use practical administrative, technical, and organisational measures to protect information against unauthorised access, loss, misuse, alteration, or disclosure. No online transmission or storage system can be guaranteed completely secure, so please contact us promptly if you believe your information has been exposed.</p>
        <p>Please do not send unnecessary passport scans, payment credentials, or health information through public comments or unsecured channels. Use the specific secure or authorised channel we provide for your booking.</p>
      </PolicySection>

      <PolicySection number="07" id="privacy-rights" title="Your choices and rights">
        <p>Depending on where you live and the law applicable to your information, you may be able to ask us to:</p>
        <ul>
          <li>confirm whether we hold information about you and provide access to it;</li>
          <li>correct information that is inaccurate or incomplete;</li>
          <li>withdraw consent for a future use where consent is the basis of processing;</li>
          <li>request deletion, restriction, or a copy of information, subject to legal and operational limits; and</li>
          <li>stop non-essential marketing messages.</li>
        </ul>
        <p>To make a request, email <a className="policy-inline-link" href={CONTACT_INFO.emailMailto}>{CONTACT_INFO.email}</a> with your name, contact details, the request, and enough information for us to locate the relevant record. We may need to verify your identity before acting. You can unsubscribe from marketing at any time; service and booking messages will still be sent when necessary.</p>
      </PolicySection>

      <PolicySection number="08" id="privacy-cookies" title="Cookies and third-party links">
        <p>Our website may use essential cookies and similar technologies to keep pages secure, remember basic preferences, and understand whether pages are working. Third-party embedded services may set their own cookies or collect technical information under their own policies.</p>
        <p>You can usually manage cookies through your browser settings. Blocking essential cookies may affect some functions. Our website may also link to WhatsApp, Instagram, Facebook, YouTube, Goimomi, Zoho, and other external sites. We are not responsible for the privacy practices, content, or security of a third-party site after you leave our website.</p>
      </PolicySection>

      <PolicySection number="09" id="privacy-children" title="Children and policy updates">
        <p>Our services may involve families and group travel. A parent or legal guardian should provide information for a person under the age of majority and should review the relevant booking and privacy terms with them. We do not knowingly use a child’s information for unrelated marketing.</p>
        <p>We may update this policy when our services, technology, suppliers, or legal obligations change. The “Last updated” date at the top of this page shows when the current version took effect. We encourage you to review this page before submitting a new enquiry or booking.</p>
      </PolicySection>

      <PolicySection number="10" id="privacy-contact" title="Contact and grievance support">
        <p>If you have a privacy question, request, complaint, or concern about how information has been handled, please contact us first so that we can investigate and respond.</p>
        <div className="policy-contact-details">
          <p><strong>Crescent Haj Service</strong></p>
          <p>{CONTACT_INFO.email}</p>
          <p>{CONTACT_INFO.phoneDisplay} · {CONTACT_INFO.workingHours} IST</p>
          <p>Head Office: {CONTACT_INFO.offices[0].value}</p>
        </div>
        <p>Where applicable, you may also have the right to approach the relevant data-protection or consumer authority in your jurisdiction after using our internal contact process.</p>
      </PolicySection>
    </PolicyLayout>
  )
}

export function TermsConditions() {
  const contents = [
    { id: 'terms-acceptance', label: 'Acceptance and scope' },
    { id: 'terms-role', label: 'Our role and services' },
    { id: 'terms-enquiries', label: 'Enquiries and quotations' },
    { id: 'terms-booking', label: 'Booking and payment' },
    { id: 'terms-documents', label: 'Documents and visa assistance' },
    { id: 'terms-inclusions', label: 'Inclusions and exclusions' },
    { id: 'terms-suppliers', label: 'Suppliers and changes' },
    { id: 'terms-responsibilities', label: 'Traveller responsibilities' },
    { id: 'terms-disruption', label: 'Disruption and force majeure' },
    { id: 'terms-cancellation', label: 'Cancellation and refunds' },
    { id: 'terms-liability', label: 'Liability and complaints' },
    { id: 'terms-law', label: 'General provisions' },
  ]

  return (
    <PolicyLayout
      type="terms"
      tag="Before you confirm your journey"
      title="Terms & Conditions"
      subtitle="The practical terms that apply when you browse our website, request a quotation, or book a Hajj, Umrah, visa, Ziyarat, Nikkah, or related travel service."
      contents={contents}
      notice="Your booking confirmation, invoice, itinerary, and any supplier-specific conditions form part of your agreement with us. If they contain a service-specific term that differs from this page, the service-specific term will apply to that booking."
    >
      <PolicySection number="01" id="terms-acceptance" title="Acceptance and scope">
        <p>By using this website, submitting an enquiry, accepting a quotation, or making a payment, you agree to these Terms & Conditions. If you are booking for other travellers, you confirm that you have their authority to provide information and accept these terms on their behalf.</p>
        <p>These terms apply to website use and to services arranged through Crescent Haj Service. They should be read together with our <InlineLink to="/privacy-policy">Privacy Policy</InlineLink> and <InlineLink to="/cancellation-policy">Cancellation Policy</InlineLink>.</p>
      </PolicySection>

      <PolicySection number="02" id="terms-role" title="Our role and services">
        <p>Crescent Haj Service provides pilgrimage planning, travel coordination, visa assistance, package arrangement, and related support. Depending on the service, we may act as the organiser, booking agent, facilitator, or coordinator between you and an independent supplier.</p>
        <p>Services may include Hajj and Umrah packages, flights, accommodation, ground transport, Ziyarat, Nikkah arrangements, visa or permit assistance, meals, guides, scholars, insurance, and tailor-made itineraries. Only the items expressly listed in your written quotation or booking confirmation are included.</p>
        <p>Religious guidance, itinerary suggestions, and general travel information are provided to support your journey. They are not a substitute for advice from a qualified medical, legal, immigration, or religious professional for your individual circumstances.</p>
      </PolicySection>

      <PolicySection number="03" id="terms-enquiries" title="Enquiries and quotations">
        <p>An enquiry is not a booking. A quotation is an invitation to book and does not guarantee a seat, room, visa, price, or availability until we issue written confirmation and receive any required payment.</p>
        <p>Quotes are based on the information available at the time and may change before confirmation because of availability, exchange rates, taxes, airline or hotel pricing, government charges, or supplier terms. Any validity period, inclusions, exclusions, currency, and payment schedule shown in the quotation should be checked carefully.</p>
        <p>Please tell us about mobility, dietary, health, family, room-sharing, or other requirements before confirming. We will try to accommodate reasonable requests, but cannot guarantee a request unless it is written into the confirmation.</p>
      </PolicySection>

      <PolicySection number="04" id="terms-booking" title="Booking and payment">
        <ul>
          <li>A booking becomes confirmed only when we have received the required deposit or payment and issued written confirmation, subject to supplier acceptance.</li>
          <li>Payment deadlines are stated in the quotation, invoice, or booking confirmation. Missing a deadline may result in cancellation, loss of availability, re-pricing, or supplier penalties.</li>
          <li>Installment or saving arrangements do not change the underlying booking deadlines or cancellation charges. A seat, room, ticket, visa, or permit may remain unconfirmed until the required amount is received.</li>
          <li>All prices, taxes, service fees, currency, bank charges, and payment methods will be shown or explained before confirmation. You are responsible for providing accurate payment details and retaining receipts.</li>
          <li>We may refuse or suspend a booking where payment cannot be verified, information is materially incomplete, or a supplier or authority will not accept the request.</li>
        </ul>
      </PolicySection>

      <PolicySection number="05" id="terms-documents" title="Documents and visa assistance">
        <p>You are responsible for providing accurate, complete, and timely passport, identity, vaccination, photograph, family, financial, and other documents required for your journey or application. Names, dates of birth, passport numbers, and travel dates must match the official documents.</p>
        <p>We may assist with submitting information to a visa or permit authority, but approval is controlled by the relevant government or platform. We do not guarantee visa issuance, processing time, entry, re-entry, border clearance, or admission to a religious site. Government rules, quotas, health requirements, and eligibility criteria may change without notice.</p>
        <p>You must travel with valid original documents and comply with the laws, immigration conditions, health rules, and instructions of every country you visit. Any delay, refusal, or loss caused by incorrect, expired, incomplete, misleading, or late information may remain your responsibility.</p>
      </PolicySection>

      <PolicySection number="06" id="terms-inclusions" title="Inclusions and exclusions">
        <p>Your booking confirmation is the definitive list of what is included. Unless expressly stated, package prices may not include personal spending, optional excursions, room upgrades, excess baggage, meals outside the itinerary, travel insurance, medical costs, vaccination, tips, porterage, early check-in or late check-out, or charges arising from changes requested by you.</p>
        <p>Accommodation is subject to the room type, occupancy, dates, and hotel named or described in your confirmation. Transport and group arrangements may involve shared vehicles, scheduled departures, waiting times, and reasonable operational changes.</p>
        <p>Promotional statements, photographs, star ratings, maps, distances, and sample itineraries are illustrative unless the written confirmation says otherwise. Hotels, airlines, authorities, and local operators may apply their own rules.</p>
      </PolicySection>

      <PolicySection number="07" id="terms-suppliers" title="Suppliers and changes">
        <p>Airlines, hotels, transport operators, visa authorities, insurance providers, and local partners are independent suppliers. Their schedules, policies, capacity, safety requirements, room allocations, and operating decisions are outside our direct control.</p>
        <p>We may make a reasonable change to an itinerary, hotel, vehicle, guide, departure time, or sequence when required by availability, safety, government instructions, weather, operations, or a supplier. We will communicate material changes as soon as reasonably possible and explain available alternatives under the applicable booking terms.</p>
        <p>Where a supplier fails to provide a service, we will use reasonable efforts to assist with communication and available remedies. Your rights against the supplier or under mandatory consumer law are not removed by these terms.</p>
      </PolicySection>

      <PolicySection number="08" id="terms-responsibilities" title="Traveller responsibilities">
        <ul>
          <li>Check your confirmation, names, dates, passport details, inclusions, and payment deadlines as soon as you receive them.</li>
          <li>Arrive on time, follow airline, hotel, transport, group, scholar, and authority instructions, and treat staff, fellow pilgrims, residents, and sacred places respectfully.</li>
          <li>Tell us promptly about a change in health, mobility, contact details, travel documents, or circumstances that may affect your booking.</li>
          <li>Obtain appropriate medical advice and travel insurance for your circumstances. You remain responsible for fitness to travel and for carrying prescribed medication and relevant documents.</li>
          <li>Do not use our website or services for unlawful activity, fraudulent documents, harassment, unauthorised resale, or conduct that puts other travellers or suppliers at risk.</li>
        </ul>
      </PolicySection>

      <PolicySection number="09" id="terms-disruption" title="Disruption and force majeure">
        <p>We are not responsible for delay, change, loss, or non-performance caused by events beyond reasonable control, including severe weather, natural disasters, epidemics, war, terrorism, civil unrest, strikes, airport or airspace closure, government action, visa or quota changes, border restrictions, supplier failure, technical outage, or other force majeure event.</p>
        <p>If a disruption affects your booking, we will communicate available options and use reasonable efforts to help with rebooking, credit, deferment, or a refund where provided by the relevant supplier or authority. Any refund is subject to recoveries, booking conditions, and amounts for services already used or committed.</p>
      </PolicySection>

      <PolicySection number="10" id="terms-cancellation" title="Cancellation and refunds">
        <p>Cancellation requests must be made in writing using the contact details on this website and should include your booking reference, traveller name, services affected, and requested cancellation date. Cancellation charges depend on the booking terms and the costs already committed to airlines, hotels, visa authorities, transport operators, insurers, and other suppliers.</p>
        <p>For the complete process, non-refundable items, supplier charges, and refund timing, read our <InlineLink to="/cancellation-policy">Cancellation Policy</InlineLink>. If a booking confirmation contains a different cancellation schedule, that schedule applies to the booking.</p>
      </PolicySection>

      <PolicySection number="11" id="terms-liability" title="Liability and complaints">
        <p>To the extent permitted by law, Crescent is not liable for indirect or consequential loss, missed personal opportunities, loss of enjoyment, or costs caused by a traveller’s failure to follow instructions, provide correct information, obtain documents, or comply with supplier and government requirements.</p>
        <p>Nothing in these terms excludes or limits liability that cannot lawfully be excluded, including liability for fraud, wilful misconduct, or rights and remedies that mandatory consumer law gives you.</p>
        <p>If something goes wrong during a trip, notify the supplier and contact us as soon as possible so that we have a fair opportunity to help. Send formal complaints to <a className="policy-inline-link" href={CONTACT_INFO.emailMailto}>{CONTACT_INFO.email}</a> with your booking reference and supporting documents.</p>
      </PolicySection>

      <PolicySection number="12" id="terms-law" title="General provisions">
        <p>We may update these terms when our services, suppliers, or legal obligations change. The version applying to a confirmed booking is the version incorporated into that booking, unless a later change is required by law or accepted by you.</p>
        <p>If any part of these terms is found invalid or unenforceable, the remaining terms continue. A delay in enforcing a term is not a waiver of our right to enforce it later. You may not transfer a booking or your rights under these terms without our written consent and supplier approval.</p>
        <p>Unless your booking confirmation states otherwise, the laws and courts applicable to the Crescent contracting office identified in that confirmation will apply, subject to any mandatory consumer protections available to you. For help before booking, contact us at {CONTACT_INFO.email} or {CONTACT_INFO.phoneDisplay}.</p>
      </PolicySection>
    </PolicyLayout>
  )
}

export function CancellationPolicy() {
  const contents = [
    { id: 'cancel-principles', label: 'Our cancellation principles' },
    { id: 'cancel-request', label: 'How to request cancellation' },
    { id: 'cancel-charges', label: 'What may be deducted' },
    { id: 'cancel-stages', label: 'Booking-stage guide' },
    { id: 'cancel-visa', label: 'Visa, permit, and refusal' },
    { id: 'cancel-hajj', label: 'Hajj and regulated travel' },
    { id: 'cancel-provider', label: 'Changes by us or suppliers' },
    { id: 'cancel-refunds', label: 'Refund processing' },
    { id: 'cancel-amendments', label: 'Amendments and no-shows' },
    { id: 'cancel-support', label: 'Support and escalation' },
  ]

  return (
    <PolicyLayout
      type="cancellation"
      tag="Clear terms for peace of mind"
      title="Cancellation Policy"
      subtitle="How to cancel or amend a pilgrimage booking, which costs may apply, and what to expect when a supplier or official authority changes your plans."
      contents={contents}
      notice="There is no single cancellation percentage for every Hajj, Umrah, visa, flight, hotel, or tailor-made booking. Your written booking confirmation controls, because supplier penalties and government charges vary by service, season, and date."
    >
      <PolicySection number="01" id="cancel-principles" title="Our cancellation principles">
        <p>We understand that travel plans can change. We will explain the applicable charges clearly and help you identify whether a date change, name correction, credit, deferment, or partial cancellation may be possible before cancelling the whole booking.</p>
        <p>Cancellation is not automatic when you stop making payments or do not travel. A written request is required, and the booking remains subject to its payment deadlines until cancellation is confirmed in writing.</p>
        <p>Where a booking confirmation provides a more specific cancellation schedule, that schedule forms the governing term for that booking.</p>
      </PolicySection>

      <PolicySection number="02" id="cancel-request" title="How to request cancellation">
        <p>Send your request to <a className="policy-inline-link" href={CONTACT_INFO.emailMailto}>{CONTACT_INFO.email}</a> or contact us on <a className="policy-inline-link" href={CONTACT_INFO.phoneTel}>{CONTACT_INFO.phoneDisplay}</a>. For speed, you may also send the request through WhatsApp, but please ask us to confirm receipt in writing.</p>
        <div className="policy-checklist">
          <p><strong>Include these details:</strong></p>
          <ul>
            <li>booking or invoice reference;</li>
            <li>lead traveller’s full name and contact number;</li>
            <li>which traveller or service should be cancelled;</li>
            <li>reason for cancellation, if you wish to share it; and</li>
            <li>bank or payment details only through the channel we request for an approved refund.</li>
          </ul>
        </div>
        <p>We treat the time we receive a complete written request during our published working hours as the cancellation time. A request sent outside working hours is treated as received on the next working day. We will confirm the request, explain the calculation, and tell you whether further authorisation is needed.</p>
      </PolicySection>

      <PolicySection number="03" id="cancel-charges" title="What may be deducted">
        <p>Depending on what has already been arranged or paid, the following may be non-refundable or deductible:</p>
        <ul>
          <li>airline cancellation, reissue, fare, seat, baggage, or tax charges;</li>
          <li>hotel deposits, room blocks, no-show charges, and non-refundable accommodation;</li>
          <li>visa, permit, government, appointment, processing, or application charges;</li>
          <li>transport, local operator, guide, scholar, meal, event, or attraction charges;</li>
          <li>insurance premiums once a policy has been issued or a claim has been made;</li>
          <li>payment-gateway, bank, currency-conversion, or other charges that cannot be recovered; and</li>
          <li>reasonable administration or service fees stated in your quotation or booking confirmation.</li>
        </ul>
        <p>We do not add a charge merely because you ask for a cancellation. We deduct the applicable amount that is stated in your booking terms or actually charged or retained by a supplier, authority, or payment provider, and we will explain the basis of the calculation.</p>
      </PolicySection>

      <PolicySection number="04" id="cancel-stages" title="Booking-stage guide">
        <div className="policy-stage-table" role="table" aria-label="Cancellation by booking stage">
          <div className="policy-stage-row policy-stage-header" role="row">
            <div role="columnheader">Booking stage</div>
            <div role="columnheader">Usual treatment</div>
          </div>
          <div className="policy-stage-row" role="row">
            <div role="cell"><strong>Enquiry only</strong></div>
            <div role="cell">You can withdraw an enquiry without a cancellation charge. Any cost already paid to a third party on your instruction may still be payable.</div>
          </div>
          <div className="policy-stage-row" role="row">
            <div role="cell"><strong>Quote accepted / deposit paid</strong></div>
            <div role="cell">The deposit, service fee, visa application cost, and any supplier commitment may be non-refundable as stated in the confirmation.</div>
          </div>
          <div className="policy-stage-row" role="row">
            <div role="cell"><strong>Tickets, rooms, or permits issued</strong></div>
            <div role="cell">The applicable airline, hotel, authority, insurance, and local supplier penalties are deducted before any eligible balance is refunded.</div>
          </div>
          <div className="policy-stage-row" role="row">
            <div role="cell"><strong>Close to departure / no-show</strong></div>
            <div role="cell">Charges are usually highest and may be up to the full amount. Unused or missed services are not refundable unless the supplier confirms otherwise.</div>
          </div>
        </div>
        <p className="policy-small-note">This table is a general guide, not a guaranteed percentage schedule. Always use the cancellation terms on your quotation or booking confirmation for the exact amount.</p>
      </PolicySection>

      <PolicySection number="05" id="cancel-visa" title="Visa, permit, and refusal">
        <p>Visa and permit applications are subject to government rules, quotas, eligibility, document checks, processing times, and decisions outside our control. Government, appointment, processing, and service charges may remain non-refundable once an application has been submitted.</p>
        <p>If an application is refused, delayed, or cannot be used because of incomplete, inaccurate, late, or inconsistent information, any refund will be limited to amounts recovered from the relevant authority or supplier after applicable charges. A visa approval also does not guarantee entry or admission.</p>
        <p>If you choose not to travel after a visa or permit is issued, the normal booking cancellation terms apply.</p>
      </PolicySection>

      <PolicySection number="06" id="cancel-hajj" title="Hajj and regulated travel">
        <p>Hajj and other regulated pilgrimage travel may be subject to quotas, official packages, registration windows, health rules, permit requirements, and deadlines set by authorities in the country of departure or destination. Those rules may override a general website statement.</p>
        <p>If an official authority changes, suspends, or cancels a programme, we will communicate the options made available by the authority and our suppliers, which may include deferment, rebooking, credit, or a refund of recoverable amounts. We will not promise a result until the relevant supplier or authority confirms what can be recovered.</p>
      </PolicySection>

      <PolicySection number="07" id="cancel-provider" title="Changes by us or suppliers">
        <p>If we or a supplier must materially change or cancel a service before departure, we will make reasonable efforts to offer a suitable alternative or explain the available refund, credit, or deferment under the booking terms.</p>
        <p>When the change is caused by a force majeure event, government action, airline or hotel decision, or another event outside reasonable control, the outcome depends on the amounts recovered from the relevant supplier and any mandatory rights that apply. Services already delivered, used, or non-refundable under supplier rules may not be recoverable.</p>
        <p>We will not treat a reasonable substitution or schedule adjustment as a full cancellation where the booking terms permit the change and the core service remains available.</p>
      </PolicySection>

      <PolicySection number="08" id="cancel-refunds" title="Refund processing">
        <p>After eligibility is confirmed and supplier accounts are reconciled, we will provide a written refund calculation. Where a refund is due, we aim to process it within 14 working days after receiving the relevant supplier refund or credit and completing our reconciliation. Banks and payment providers may take additional time to display the funds.</p>
        <p>Refunds are normally made to the original payment method. If that method is unavailable, we may request proof of account ownership before using an alternative method. Currency fluctuations, bank fees, payment-gateway charges, and transfer costs may affect the amount received where they cannot be recovered.</p>
        <p>Any undisputed eligible refund will not be withheld because another part of the booking is still being investigated. If the final supplier response is pending, we will tell you what remains outstanding and provide an update when we have it.</p>
      </PolicySection>

      <PolicySection number="09" id="cancel-amendments" title="Amendments and no-shows">
        <p>A date change, passenger substitution, name correction, room change, or itinerary amendment may be possible, but it is not guaranteed. Supplier reissue, amendment, fare difference, administrative, visa, and service charges may apply. If a requested amendment is not possible, the request may be treated as a cancellation and rebooking.</p>
        <p>If you do not arrive, miss a departure, fail to present required documents, leave a group, or choose not to use part of the itinerary, the unused portion is not refundable unless the supplier or written booking terms say otherwise. Please contact us before missing a service so that we can check available options.</p>
      </PolicySection>

      <PolicySection number="10" id="cancel-support" title="Support and escalation">
        <p>We want every cancellation decision to be understandable. If you believe a charge has been calculated incorrectly, email <a className="policy-inline-link" href={CONTACT_INFO.emailMailto}>{CONTACT_INFO.email}</a> within 30 days of the refund calculation and explain the issue with your booking reference and supporting documents.</p>
        <p>Our team will review the booking, supplier terms, payment record, and correspondence and respond within a reasonable period. Your mandatory rights under applicable consumer law remain unaffected.</p>
        <div className="policy-contact-details">
          <p><strong>Crescent Haj Service</strong></p>
          <p>{CONTACT_INFO.phoneDisplay} · {CONTACT_INFO.workingHours} IST</p>
          <p>{CONTACT_INFO.email}</p>
        </div>
      </PolicySection>
    </PolicyLayout>
  )
}

export default PrivacyPolicy
