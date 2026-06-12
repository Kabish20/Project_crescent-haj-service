import { useEffect, useState, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useReveal, SectionHeader, GoldDivider } from '../components/ScrollReveal'

const packages = [
  { icon: '🕋', title: 'Hajj Packages', desc: 'Premium VIP & economy Hajj packages featuring luxury shifting & non-shifting hotels close to Haram, comprehensive visa assistance, trusted scholar guidance, and full catering.', path: '/hajj-packages', img: '/hajj_banner.png' },
  { icon: '✈️', title: 'Umrah from India', desc: 'All-inclusive sacred Umrah tours from India with direct flights, modern high-speed railway options, 5-star & premium hotel stays near Haram, fully guided historical Ziyarat, and traditional dining.', path: '/umrah-india', img: '/umrah_india.png' },
  { icon: '🇦🇪', title: 'Umrah from UAE', desc: 'Exclusively tailored Umrah itineraries for UAE residents, expats & families. Flexi-budget plans covering border-crossing transportation, express Umrah e-visas, luxury hotel stays, and multilingual support.', path: '/umrah-uae', img: '/umrah_uae.png' },
  { icon: '✨', title: 'Tailor-Made Umrah', desc: 'Completely customized individual or private family Umrah itineraries designed around your precise schedule, luxury hotel preferences, private VIP ground transport, and custom Ziyarat tours.', path: '/tailor-made', img: '/tailor_made.png' },
  { icon: '💍', title: 'Nikkah in Holy Masjids', desc: 'Complete Nikkah registration and blessed wedding service arrangements in the serene, sacred premises of Masjid al-Haram (Makkah) and Masjid an-Nabawi (Madinah) with scholar assistance.', path: '/nikkah-masjids', img: '/nikkah_banner.png' },
  { icon: '🗺️', title: 'Ziyarat Tours', desc: 'Fully immersive guided Ziyarat tours of historic battlefields, mosques, and heritage sites across Makkah, Madinah, scenic Taif, Badr, and historical landmarks with scholars.', path: '/ziyarat-tours', img: '/ziyarat_banner.png' },
]

const trustStats = [
  { value: '2009', label: 'Established', count: '2009' },
  { value: '15+', label: 'Years Experience', count: '15+' },
  { value: '1000+', label: 'Happy Pilgrims', count: '1000+' },
  { value: '2', label: 'Countries Served', count: '2' },
  { value: '24/7', label: 'Support', count: '24/7' },
]

const journeySteps = [
  { icon: '💬', title: 'Consultation', desc: 'Free advisor call to understand your needs' },
  { icon: '📄', title: 'Documentation', desc: 'Complete document checklist and guidance' },
  { icon: '🛂', title: 'Visa Processing', desc: 'Hassle-free Saudi visa application' },
  { icon: '✈️', title: 'Flights', desc: 'Best flight options from your city' },
  { icon: '🏨', title: 'Hotel Booking', desc: 'Haram-view and proximity hotels' },
  { icon: '🚌', title: 'Transport', desc: 'AC coach between Makkah & Madinah' },
  { icon: '🕌', title: 'Ziyarat', desc: 'Guided visits to holy sites' },
  { icon: '📿', title: 'Spiritual Guide', desc: 'Qualified Aalim accompanies group' },
  { icon: '🏠', title: 'Safe Return', desc: '24/7 support until you are home' },
]


/* ── Canvas constellation ── */
function useConstellationCanvas(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const POINT_COUNT = 55
    const MAX_DIST = 130

    const points = Array.from({ length: POINT_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: 1 + Math.random() * 1.5,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      // Move
      points.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
      })
      // Lines
      for (let i = 0; i < POINT_COUNT; i++) {
        for (let j = i + 1; j < POINT_COUNT; j++) {
          const dx = points[i].x - points[j].x
          const dy = points[i].y - points[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.35
            ctx.beginPath()
            ctx.moveTo(points[i].x, points[i].y)
            ctx.lineTo(points[j].x, points[j].y)
            ctx.strokeStyle = `rgba(201,168,76,${alpha})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }
      // Dots
      points.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(201,168,76,0.7)'
        ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [canvasRef])
}

/* ── Mouse parallax ── */
function useParallax() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const handle = (e) => {
      const r = el.getBoundingClientRect()
      const x = ((e.clientX - r.left) / r.width - 0.5) * 2
      const y = ((e.clientY - r.top) / r.height - 0.5) * 2
      setPos({ x, y })
    }
    el.addEventListener('mousemove', handle)
    return () => el.removeEventListener('mousemove', handle)
  }, [])

  return { pos, ref }
}

export default function Home() {
  useReveal()
  const [particles, setParticles] = useState([])
  const canvasRef = useRef(null)
  const { pos, ref: heroRef } = useParallax()

  useConstellationCanvas(canvasRef)

  useEffect(() => {
    setParticles(Array.from({ length: 28 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 5 + Math.random() * 7,
      size: 1.5 + Math.random() * 3.5,
      variant: i % 2 === 0 ? 'star-a' : 'star-b',
    })))
  }, [])

  return (
    <div>
      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: 'var(--dark-bg)' }}
      >
        {/* Aurora bg layer */}
        <div className="absolute inset-0 aurora-bg" />

        {/* Ambient orbs */}
        <div className="glow-orb" style={{ top: '-10%', left: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(201,168,76,0.09) 0%, rgba(13,74,58,0.04) 60%, transparent 80%)' }} />
        <div className="glow-orb" style={{ bottom: '5%', right: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(13,74,58,0.1) 0%, rgba(201,168,76,0.03) 60%, transparent 80%)', animationDelay: '-8s', animationDuration: '28s' }} />

        {/* Background image with parallax */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ transform: `translate(${pos.x * -8}px, ${pos.y * -8}px) scale(1.05)`, transition: 'transform 0.1s linear' }}
        >
          <img src="/hero_makkah.png" alt="Masjid al-Haram" className="w-full h-full object-cover hero-bg opacity-30" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,15,13,0.97) 0%, rgba(13,74,58,0.65) 50%, rgba(10,15,13,0.92) 100%)' }} />
        </div>

        {/* Canvas constellation */}
        <canvas ref={canvasRef} id="hero-canvas" />

        {/* Floating geometric decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Tawaf rings - multiple */}
          <div className="absolute top-1/2 right-16 -translate-y-1/2">
            <div className="ring-spin-slow w-[420px] h-[420px] rounded-full opacity-[0.07]" style={{ border: '1px solid var(--gold)' }} />
            <div className="ring-spin-med w-[280px] h-[280px] rounded-full opacity-[0.06] absolute inset-[70px]" style={{ border: '1px solid var(--gold-light)' }} />
            <div className="ring-spin-fast w-[140px] h-[140px] rounded-full opacity-[0.1] absolute inset-[140px]" style={{ border: '1px solid var(--gold)' }} />
          </div>

          {/* Floating geometric shapes */}
          <div className="float-geo-1 absolute top-32 left-[15%] w-8 h-8 border border-gold opacity-10" style={{ borderColor: 'rgba(201,168,76,0.3)', transform: 'rotate(45deg)' }} />
          <div className="float-geo-2 absolute bottom-40 left-[10%] w-5 h-5 rounded-full opacity-10" style={{ background: 'rgba(201,168,76,0.3)' }} />
          <div className="float-geo-3 absolute top-40 right-[25%] w-3 h-12 opacity-10" style={{ background: 'linear-gradient(to bottom, var(--gold), transparent)' }} />
        </div>

        {/* Enhanced Crescent */}
        <div
          className="absolute top-24 right-16 crescent-adv"
          style={{ transform: `translate(${pos.x * 12}px, ${pos.y * 8}px)`, transition: 'transform 0.12s linear' }}
        >
          <svg viewBox="0 0 100 100" className="w-24 h-24" fill="none">
            <path d="M75 20 A35 35 0 1 0 75 80 A25 25 0 1 1 75 20 Z" fill="rgba(201,168,76,0.35)" />
            <path d="M75 20 A35 35 0 1 0 75 80 A25 25 0 1 1 75 20 Z" stroke="rgba(201,168,76,0.5)" strokeWidth="0.5" fill="none" />
            <circle cx="78" cy="18" r="5" fill="rgba(201,168,76,0.5)" />
            <circle cx="82" cy="28" r="2.5" fill="rgba(201,168,76,0.3)" />
          </svg>
        </div>

        {/* Gold particles */}
        {particles.map(p => (
          <div
            key={p.id}
            className={`star ${p.variant}`}
            style={{
              left: `${p.left}%`, top: `${p.top}%`,
              width: `${p.size}px`, height: `${p.size}px`,
              '--duration': `${p.duration}s`, '--delay': `${p.delay}s`,
            }}
          />
        ))}

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Animated badge */}
            <div
              className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs font-body font-semibold tracking-widest uppercase"
              style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.35)', color: 'var(--gold)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full neon-pulse" style={{ background: 'var(--gold)' }} />
              Trusted Since 2009 · 1000+ Pilgrims Served
            </div>

            {/* Heading with text reveal */}
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6" style={{ color: 'var(--pearl)' }}>
              <span className="block text-reveal text-reveal-delay-1">Your Sacred</span>
              <span className="block text-reveal text-reveal-delay-2">
                <span className="gradient-flow-text">Journey,</span>
              </span>
              <span className="block text-reveal text-reveal-delay-3">Planned with Care</span>
            </h1>

            <p className="text-reveal text-reveal-delay-4 font-body text-lg leading-relaxed mb-8" style={{ color: 'rgba(250,248,243,0.65)', maxWidth: '500px' }}>
              Premium Hajj, Umrah, Ziyarat and tailor-made pilgrimage services from India &amp; UAE — planned with sincerity, comfort and spiritual guidance.
            </p>

            <div className="text-reveal text-reveal-delay-5 flex flex-wrap gap-4">
              <Link to="/contact" className="magnetic-btn btn-gold px-8 py-4 rounded-full font-body font-bold text-sm neon-pulse">
                Plan My Pilgrimage
              </Link>
              <Link to="/umrah-packages" className="magnetic-btn btn-ghost px-8 py-4 rounded-full font-body font-bold text-sm">
                View Packages
              </Link>
              <a
                href="https://wa.me/916382220393"
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic-btn flex items-center gap-2 px-6 py-4 rounded-full font-body font-bold text-sm transition-all"
                style={{ background: 'rgba(37,211,102,0.12)', border: '1px solid rgba(37,211,102,0.35)', color: '#25D366' }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                </svg>
                WhatsApp Advisor
              </a>
            </div>
          </div>

          {/* Stats card - with parallax */}
          <div
            className="animate-enter-right glass-card p-8 animated-border"
            style={{ transform: `translate(${pos.x * -5}px, ${pos.y * -5}px)`, transition: 'transform 0.12s linear' }}
          >
            <p className="font-heading text-2xl font-bold mb-6" style={{ color: 'var(--gold)' }}>Why Pilgrims Trust Us</p>
            <div className="space-y-5">
              {[
                { label: 'Package Satisfaction', pct: 98 },
                { label: 'On-Time Visa Processing', pct: 95 },
                { label: 'Repeat Pilgrims', pct: 72 },
                { label: 'Family Group Bookings', pct: 85 },
              ].map((s, i) => (
                <div key={s.label}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm font-body" style={{ color: 'rgba(250,248,243,0.7)' }}>{s.label}</span>
                    <span className="text-sm font-body font-bold" style={{ color: 'var(--gold)' }}>{s.pct}%</span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
                    <div
                      className="h-1.5 rounded-full gold-gradient"
                      style={{
                        width: `${s.pct}%`,
                        animation: `progressBar 1.4s ${0.2 + i * 0.15}s cubic-bezier(0.23,1,0.32,1) both`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 grid grid-cols-2 gap-4" style={{ borderTop: '1px solid rgba(201,168,76,0.15)' }}>
              <div className="text-center">
                <p className="font-heading text-3xl font-bold count-up" data-count="1000+" style={{ color: 'var(--gold)' }}>1000+</p>
                <p className="text-xs font-body mt-1" style={{ color: 'rgba(250,248,243,0.5)' }}>Happy Pilgrims</p>
              </div>
              <div className="text-center">
                <p className="font-heading text-3xl font-bold count-up" data-count="15+" style={{ color: 'var(--gold)' }}>15+</p>
                <p className="text-xs font-body mt-1" style={{ color: 'rgba(250,248,243,0.5)' }}>Years of Service</p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs font-body tracking-widest uppercase" style={{ color: 'rgba(201,168,76,0.5)' }}>Scroll</span>
          <div className="w-px h-10 overflow-hidden" style={{ background: 'rgba(201,168,76,0.15)' }}>
            <div className="scroll-line w-full h-full" style={{ background: 'linear-gradient(to bottom, transparent, var(--gold), transparent)' }} />
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section className="py-6 overflow-hidden" style={{ background: 'linear-gradient(90deg, var(--emerald) 0%, #0e5c46 50%, var(--emerald) 100%)' }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-8 md:gap-0 md:divide-x divide-white/10">
          {trustStats.map((s, i) => (
            <div key={s.label} className="flex-1 min-w-36 text-center px-6 py-3 stagger-child" style={{ transitionDelay: `${i * 0.1}s` }}>
              <p className="font-heading text-3xl font-bold count-up" data-count={s.count} style={{ color: 'var(--gold)' }}>{s.value}</p>
              <p className="text-xs font-body font-medium tracking-wider uppercase mt-1" style={{ color: 'rgba(250,248,243,0.7)' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PACKAGES ── */}
      <section className="py-24 islamic-pattern" style={{ background: 'var(--pearl)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="Our Services" title="Sacred Journeys, Carefully Crafted" subtitle="From Hajj to Nikkah — every pilgrimage need handled with sincerity and care." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <Link
                key={pkg.title}
                to={pkg.path}
                className="tilt-card hover-shimmer glass-card-light rounded-2xl overflow-hidden group reveal flex flex-col h-full"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Tilt shine overlay */}
                <div className="tilt-shine" />
                <div className="relative h-40 overflow-hidden shrink-0">
                  <img src={pkg.img} alt={pkg.title} className="pkg-img w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,15,13,0.75), transparent)' }} />
                  <div className="absolute top-4 left-4 text-3xl animate-enter-scale" style={{ animationDelay: `${0.3 + i * 0.08}s` }}>{pkg.icon}</div>
                </div>
                <div className="p-5 flex flex-col grow">
                  <h3 className="font-heading text-xl font-bold mb-2" style={{ color: 'var(--emerald)' }}>{pkg.title}</h3>
                  <p className="text-sm font-body leading-relaxed mb-4 grow" style={{ color: 'rgba(26,26,26,0.65)' }}>{pkg.desc}</p>
                  <div className="card-gold-line mt-auto" />
                  <div className="mt-4 flex items-center gap-1 text-sm font-body font-semibold" style={{ color: 'var(--emerald)' }}>
                    Learn more
                    <svg className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOURNEY TIMELINE ── */}
      <section className="py-24" style={{ background: 'var(--dark-bg)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader light eyebrow="How It Works" title="Your Complete Journey, Step by Step" subtitle="We handle every detail so you can focus purely on your Ibadah." />
          <div className="stagger-wrap grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
            {journeySteps.map((step, i) => (
              <div key={step.title} className="stagger-child timeline-step text-center flex flex-col items-center" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-3 text-2xl hover-shimmer"
                  style={{ background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.3)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.15)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(201,168,76,0.3)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
                >
                  {step.icon}
                </div>
                <p className="font-body text-xs font-bold mb-1" style={{ color: 'var(--gold)' }}>{step.title}</p>
                <p className="font-body text-xs leading-snug" style={{ color: 'rgba(250,248,243,0.45)' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER MESSAGE ── */}
      <section className="py-24" style={{ background: 'var(--sand)' }}>
        <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div className="reveal-left relative">
            <div className="ring-deco absolute -inset-6 rounded-3xl" style={{ border: '1px solid rgba(201,168,76,0.2)' }} />
            <div className="ring-deco-2 absolute -inset-12 rounded-3xl" style={{ border: '1px solid rgba(201,168,76,0.1)' }} />
            <img
              src="/founder.jpeg"
              alt="Mohamed Mubarak A - Founder"
              className="relative rounded-2xl w-full max-w-sm mx-auto object-cover shadow-2xl hover-shimmer"
              style={{ border: '3px solid rgba(201,168,76,0.3)' }}
            />
          </div>
          <div className="reveal-right">
            <span className="inline-block text-xs font-body font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
              style={{ background: 'rgba(13,74,58,0.08)', border: '1px solid rgba(13,74,58,0.2)', color: 'var(--emerald)' }}>
              ✦ A Message from Our Founder
            </span>
            <h2 className="font-heading text-4xl font-bold mb-2" style={{ color: 'var(--emerald)' }}>Mohamed Mubarak A</h2>
            <GoldDivider />
            <p className="font-heading text-xl italic mb-6 mt-2" style={{ color: 'rgba(26,26,26,0.7)' }}>
              "At Crescent Haj Service, we believe pilgrimage is not just travel. It is an <em>amanah</em>."
            </p>
            <p className="font-body text-base leading-relaxed mb-6" style={{ color: 'rgba(26,26,26,0.65)' }}>
              Every visa, every hotel, every transfer and every meal must be arranged with sincerity, transparency and genuine care. Since 2009, we have served over 1000 pilgrims — and each one has been a trust we hold sacred.
            </p>
            <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(26,26,26,0.65)' }}>
              We take care of every detail, so you can focus fully on your Ibadah. That is our promise to every pilgrim who places their trust in us.
            </p>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS & VIDEO REVIEWS ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'var(--dark-bg)' }}>
        {/* Decorative rings */}
        <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full ring-deco" style={{ border: '1px solid rgba(201,168,76,0.08)' }} />
        <div className="absolute -left-20 -bottom-20 w-72 h-72 rounded-full ring-deco-2" style={{ border: '1px solid rgba(13,74,58,0.15)' }} />

        <div className="relative z-10 max-w-full mx-auto px-6 overflow-hidden">
          <SectionHeader light eyebrow="Pilgrim Stories" title="Words from Our Pilgrims" subtitle="Real reviews and feedback from our blessed travelers" />
          
          <div className="relative w-full overflow-hidden py-4">
            {/* Left and Right fading overlays for premium look */}
            <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-linear-to-r from-(--dark-bg) to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-linear-to-l from-(--dark-bg) to-transparent z-20 pointer-events-none" />

            <div className="flex animate-marquee">
              {/* First set of videos */}
              {[
                'f8Pzcr0zpwI',
                'eAEx1n9mPzw',
                'zg7POFTSxMs',
                'gfZ4CFWJohs',
                'jjdb6Q3_5RA'
              ].map((id, idx) => (
                <div
                  key={`v1-${id}`}
                  className="shrink-0 w-[150px] md:w-[180px] aspect-9/16 rounded-2xl overflow-hidden glass-card animated-border shadow-lg group transition-transform duration-300 hover:scale-105 mr-6"
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`}
                    title={`Crescent Haj Service Customer Review ${idx + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full rounded-2xl bg-black"
                  ></iframe>
                </div>
              ))}

              {/* Duplicate set for seamless looping */}
              {[
                'f8Pzcr0zpwI',
                'eAEx1n9mPzw',
                'zg7POFTSxMs',
                'gfZ4CFWJohs',
                'jjdb6Q3_5RA'
              ].map((id, idx) => (
                <div
                  key={`v2-${id}`}
                  className="shrink-0 w-[150px] md:w-[180px] aspect-9/16 rounded-2xl overflow-hidden glass-card animated-border shadow-lg group transition-transform duration-300 hover:scale-105 mr-6"
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`}
                    title={`Crescent Haj Service Customer Review Duplicate ${idx + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full rounded-2xl bg-black"
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS COUNTER ── */}
      <section className="py-16" style={{ background: 'linear-gradient(135deg, var(--emerald), #0e5c46)' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="stagger-wrap grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: '15+', label: 'Years Experience', count: '15+' },
              { num: '1000+', label: 'Happy Pilgrims', count: '1000+' },
              { num: '50+', label: 'Group Departures', count: '50+' },
              { num: '100%', label: 'Visa Success Rate', count: '100%' },
            ].map((s, i) => (
              <div key={s.label} className="stagger-child" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div
                  className="font-heading text-4xl md:text-5xl font-bold mb-2 count-up"
                  data-count={s.count}
                  style={{ color: 'var(--gold)' }}
                >
                  {s.num}
                </div>
                <div className="font-body text-xs md:text-sm uppercase tracking-widest font-semibold" style={{ color: 'rgba(250,248,243,0.8)' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="py-20 islamic-pattern" style={{ background: 'var(--pearl)' }}>
        <div className="max-w-3xl mx-auto px-6 text-center reveal">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--emerald)' }}>
            Ready to Begin Your Sacred Journey?
          </h2>
          <p className="font-body text-base mb-8" style={{ color: 'rgba(26,26,26,0.6)' }}>
            Speak to a pilgrimage advisor today — completely free consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="magnetic-btn btn-emerald px-8 py-4 rounded-full font-body text-sm">Plan My Pilgrimage</Link>
            <a href="https://wa.me/916382220393" target="_blank" rel="noopener noreferrer"
              className="magnetic-btn btn-gold px-8 py-4 rounded-full font-body font-bold text-sm">WhatsApp Now</a>
          </div>
        </div>
      </section>
    </div>
  )
}
