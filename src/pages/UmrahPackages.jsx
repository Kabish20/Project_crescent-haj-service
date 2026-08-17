export default function UmrahPackages() {
  return (
    <main className="pt-24" style={{ background: 'var(--pearl)' }}>
      <section className="page-hero py-16 md:py-20" style={{ background: 'var(--dark-bg)' }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block text-xs font-body font-bold uppercase tracking-[0.22em] px-4 py-2 rounded-full mb-5"
            style={{ background: 'rgba(201,168,76,0.12)', color: 'var(--gold)', border: '1px solid rgba(201,168,76,0.3)' }}>
            Curated departures
          </span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4" style={{ color: 'var(--pearl)' }}>Umrah Packages</h1>
          <p className="max-w-2xl mx-auto font-body text-base md:text-lg leading-relaxed" style={{ color: 'rgba(250,248,243,0.68)' }}>
            Browse current package options, then speak with our advisors for availability, upgrades, and a plan suited to your family.
          </p>
        </div>
      </section>
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5">
            <div>
              <p className="font-body text-sm font-semibold" style={{ color: 'var(--emerald)' }}>Live package listings</p>
              <p className="font-body text-sm" style={{ color: 'rgba(26,26,26,0.6)' }}>Prices and availability may change. Confirm details with our team before booking.</p>
            </div>
            <a href="https://www.goimomi.com/holidays?category=Umrah" target="_blank" rel="noopener noreferrer" className="btn-gold px-5 py-3 rounded-full text-sm font-body font-bold shrink-0">Open full listing ↗</a>
          </div>
          <div className="external-frame overflow-hidden rounded-2xl shadow-2xl" style={{ border: '1px solid rgba(201,168,76,0.3)', background: '#fff' }}>
            <iframe src="https://www.goimomi.com/holidays?category=Umrah" title="Live Umrah package listings" loading="lazy" style={{ display: 'block', width: '100%', minHeight: '78vh', border: 'none' }} allowFullScreen />
          </div>
        </div>
      </section>
    </main>
  )
}
