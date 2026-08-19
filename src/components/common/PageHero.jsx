export default function PageHero({ title, subtitle, tag }) {
  return (
    <div
      className="relative pt-20 sm:pt-32 pb-12 sm:pb-20 text-center overflow-hidden"
      style={{ background: 'var(--dark-bg)' }}
    >
      <div className="glow-orb opacity-50" style={{ top: '-40%', left: '-20%' }} />
      <div className="absolute inset-0 islamic-pattern opacity-20" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        {tag && (
          <span
            className="inline-block text-xs font-body font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
            style={{
              background: 'rgba(201,168,76,0.1)',
              border: '1px solid rgba(201,168,76,0.3)',
              color: 'var(--gold)'
            }}
          >
            {tag}
          </span>
        )}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6" style={{ color: 'var(--pearl)' }}>
          {title}
        </h1>
        {subtitle && (
          <p className="font-body text-base sm:text-lg leading-relaxed" style={{ color: 'rgba(250,248,243,0.7)' }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}
