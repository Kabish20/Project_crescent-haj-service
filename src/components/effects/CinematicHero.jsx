import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowIcon, GeneralEnquiryModal } from '@/components/common'
import './CinematicHero.css'

const SCENES = [
  { id: 'makkah', label: 'Makkah by night', place: 'Makkah Al Mukarramah', detail: 'A journey that begins in the heart', fallback: '/hero-makkah-generated.png', width: 1672, height: 941, smallWidth: 960 },
  { id: 'kaaba', label: 'The sacred call', place: 'The Holy Kaaba', detail: 'Hajj & Umrah · Moments of devotion', fallback: '/hajj_banner.png', width: 1024, height: 1024, smallWidth: 640 },
  { id: 'madinah', label: 'A sense of peace', place: 'Al Madinah Al Munawwarah', detail: 'Find a quiet moment in the blessed city', fallback: '/madinah_mosque.png', width: 1024, height: 1024, smallWidth: 640 },
]

const PARTICLES = [
  [8, 18, 2, 0], [16, 62, 1, 2.8], [24, 34, 2, 5.2], [31, 76, 1, 1.4],
  [42, 14, 1, 4.1], [49, 48, 2, 6.3], [57, 25, 1, 2.1], [64, 68, 2, 5.7],
  [71, 11, 1, 3.5], [77, 42, 2, 0.8], [84, 22, 1, 4.8], [90, 57, 2, 2.6],
]

export default function CinematicHero() {
  const heroRef = useRef(null)
  const stageRef = useRef(null)
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [visible, setVisible] = useState(true)
  const [pageVisible, setPageVisible] = useState(() => !document.hidden)
  const [enquiryOpen, setEnquiryOpen] = useState(false)
  const [loaded, setLoaded] = useState([])
  const [fallbacks, setFallbacks] = useState([])
  const running = !paused && !reducedMotion && visible && pageVisible && !enquiryOpen
  const scene = SCENES[active]

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setReducedMotion(preference.matches)
    const updateVisibility = () => setPageVisible(!document.hidden)
    preference.addEventListener('change', updatePreference)
    document.addEventListener('visibilitychange', updateVisibility)
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0 })
    observer.observe(heroRef.current)
    return () => {
      preference.removeEventListener('change', updatePreference)
      document.removeEventListener('visibilitychange', updateVisibility)
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    const hero = heroRef.current
    const stage = stageRef.current
    if (!running || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return undefined
    let frame = 0
    const move = (event) => {
      if (event.pointerType !== 'mouse') return
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const bounds = hero.getBoundingClientRect()
        stage.style.setProperty('--hero-x', `${((event.clientX - bounds.left) / bounds.width - 0.5) * -14}px`)
        stage.style.setProperty('--hero-y', `${((event.clientY - bounds.top) / bounds.height - 0.5) * -10}px`)
      })
    }
    const reset = () => {
      cancelAnimationFrame(frame)
      stage.style.setProperty('--hero-x', '0px')
      stage.style.setProperty('--hero-y', '0px')
    }
    hero.addEventListener('pointermove', move, { passive: true })
    hero.addEventListener('pointerleave', reset)
    return () => {
      hero.removeEventListener('pointermove', move)
      hero.removeEventListener('pointerleave', reset)
      reset()
    }
  }, [running])

  const nextScene = () => {
    if (!running) return
    for (let offset = 1; offset < SCENES.length; offset += 1) {
      const next = (active + offset) % SCENES.length
      if (loaded.includes(next)) {
        setActive(next)
        return
      }
    }
  }

  return (
    <section
      className="refresh-hero cinematic-hero"
      ref={heroRef}
      data-motion={running ? 'running' : 'paused'}
      aria-label="Hajj and Umrah journeys"
    >
      <div className="hero-cinematic-stage" ref={stageRef} aria-hidden="true">
        {SCENES.map((item, index) => (
          <div className={`cinematic-scene ${active === index ? 'is-active' : ''}`} data-scene={item.id} key={item.id}>
            <div className="cinematic-camera">
              <picture>
                {!fallbacks.includes(index) && (
                  <source
                    type="image/webp"
                    srcSet={`/cinematic/${item.id}-small.webp ${item.smallWidth}w, /cinematic/${item.id}.webp ${item.width}w`}
                    sizes={item.id === 'makkah' ? '100vw' : '(max-width: 900px) 100vw, 80vw'}
                  />
                )}
                <img
                  src={item.fallback}
                  alt=""
                  width={item.width}
                  height={item.height}
                  fetchPriority={index === 0 ? 'high' : 'low'}
                  decoding="async"
                  onLoad={() => setLoaded(current => current.includes(index) ? current : [...current, index])}
                  onError={() => setFallbacks(current => current.includes(index) ? current : [...current, index])}
                />
              </picture>
            </div>
          </div>
        ))}
        <div className="hero-cinematic-grade" />
        <div className="cinematic-dawn-light" />
        <div className="hero-light-rays"><span /><span /><span /></div>
        <div className="hero-particles">
          {PARTICLES.map(([left, top, size, delay]) => (
            <i key={left} style={{ '--particle-left': `${left}%`, '--particle-top': `${top}%`, '--particle-size': `${size}px`, '--particle-delay': `${-delay}s` }} />
          ))}
        </div>
        <div className="hero-film-grain" />
        <div className="hero-cinematic-vignette" />
      </div>
      <div className="refresh-hero-shade" aria-hidden="true" />

      <div className="refresh-hero-content">
        <p className="eyebrow-light">CRESCENT HAJ SERVICE · TRUSTED SINCE 2009 · 1000+ HAPPY PILGRIMS</p>
        <h1>Answer your heart's<br /><em>deepest calling.</em></h1>
        <p className="hero-lede">Premium Hajj and Umrah packages combining spiritual guidance, luxury accommodations, and unwavering support. Make your pilgrimage a transformative journey, not a travel checklist.</p>
        <div className="refresh-actions">
          <Link className="refresh-button refresh-button-gold" to="/umrah-packages">Explore Umrah <ArrowIcon /></Link>
          <Link className="refresh-button refresh-button-outline" to="/hajj-packages">Discover Hajj <ArrowIcon /></Link>
        </div>
        <div className="cinematic-advisor">
          <button type="button" onClick={() => setEnquiryOpen(true)} aria-haspopup="dialog">Speak to a pilgrimage advisor <ArrowIcon /></button>
        </div>
        <div className="hero-note"><span className="live-dot" />24/7 WhatsApp support · India & UAE departures · Scholar-led groups</div>
      </div>

      <div className="cinematic-footer">
        <div className="cinematic-playback">
          <button
            className="cinematic-pause"
            type="button"
            onClick={() => setPaused(value => !value)}
            aria-label={reducedMotion ? 'Animation disabled by your reduced motion preference' : paused ? 'Play cinematic animation' : 'Pause cinematic animation'}
            disabled={reducedMotion}
          >
            <svg viewBox="0 0 20 20" aria-hidden="true">
              {paused || reducedMotion ? <path d="m7 4 9 6-9 6Z" fill="currentColor" /> : <path d="M7 4v12M13 4v12" fill="none" stroke="currentColor" strokeWidth="2" />}
            </svg>
          </button>
          <div className="cinematic-chapters" role="group" aria-label="Choose a sacred journey scene">
            {SCENES.map((item, index) => (
              <button
                type="button"
                className={`cinematic-chapter ${active === index ? 'is-active' : ''}`}
                key={item.id}
                aria-label={`Show ${item.place}`}
                aria-pressed={active === index}
                disabled={index !== active && !loaded.includes(index)}
                onClick={() => setActive(index)}
              >
                <span className="cinematic-chapter-number">0{index + 1}</span>
                <span className="cinematic-chapter-label">{item.label}</span>
                <span className="cinematic-chapter-track" aria-hidden="true">
                  {active === index && <span key={active} className="cinematic-chapter-progress" onAnimationEnd={nextScene} style={{ animationPlayState: running && loaded.length > 1 ? 'running' : 'paused' }} />}
                </span>
              </button>
            ))}
          </div>
        </div>
        <div className="cinematic-location" key={scene.id}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>
          <div><strong>{scene.place}</strong><small>{scene.detail}</small></div>
        </div>
      </div>
      <a className="hero-scroll" href="#pilgrimage-journeys">Scroll to explore <span /></a>
      {enquiryOpen && <GeneralEnquiryModal onClose={() => setEnquiryOpen(false)} />}
    </section>
  )
}
