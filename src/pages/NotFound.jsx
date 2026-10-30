import { Link } from 'react-router-dom'
import { ArrowIcon } from '@/components/common'

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center relative overflow-hidden text-center px-6 py-20" style={{ background: 'var(--dark-bg)' }}>
      <div className="glow-orb opacity-40" style={{ top: '-30%', left: '20%' }} />
      <div className="absolute inset-0 islamic-pattern opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-xl mx-auto">
        <span
          className="inline-block text-xs font-body font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
          style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)', color: 'var(--gold)' }}
        >
          404 · Page Not Found
        </span>

        <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4" style={{ color: 'var(--pearl)' }}>
          Seeking the Right Path
        </h1>

        <p className="font-body text-base md:text-lg mb-8 leading-relaxed" style={{ color: 'rgba(250,248,243,0.7)' }}>
          The page or resource you requested cannot be located. Please check the address or return to explore our blessed pilgrimage packages.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="btn-gold px-8 py-3.5 rounded-full font-body font-bold text-sm inline-flex items-center gap-2 shadow-xl"
          >
            Return to Homepage <ArrowIcon />
          </Link>
          <Link
            to="/umrah-packages"
            className="btn-ghost px-8 py-3.5 rounded-full font-body font-bold text-sm inline-flex items-center gap-2"
          >
            Explore Packages
          </Link>
        </div>
      </div>
    </div>
  )
}

