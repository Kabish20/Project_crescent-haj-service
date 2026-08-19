export default function SectionHeader({ eyebrow, title, subtitle, light = false }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-14 reveal">
      {eyebrow && (
        <span
          className="inline-block text-xs font-body font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
          style={{
            background: 'rgba(201,168,76,0.12)',
            color: 'var(--gold)',
            border: '1px solid rgba(201,168,76,0.25)'
          }}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-heading text-4xl md:text-5xl font-bold mb-4 leading-tight ${light ? 'text-white' : ''}`}
        style={{ color: light ? 'var(--pearl)' : 'var(--emerald)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="font-body text-base md:text-lg leading-relaxed"
          style={{ color: light ? 'rgba(250,248,243,0.65)' : 'rgba(26,26,26,0.6)' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
