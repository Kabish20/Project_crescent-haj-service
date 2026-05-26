import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/* ─── Persistent effects (cursor + progress bar) — created once ─── */
let cursorRing = null
let cursorDot = null
let progressBar = null
let rafId = null
let cursorX = 0, cursorY = 0
let ringX = 0, ringY = 0

function initPersistent() {
  if (progressBar) return // already created

  // ── Scroll progress bar ──
  progressBar = document.createElement('div')
  progressBar.id = 'scroll-progress-bar'
  Object.assign(progressBar.style, {
    position: 'fixed', top: '0', left: '0', height: '2px', width: '0%',
    background: 'linear-gradient(90deg, var(--gold), #f5e6b8, var(--gold-light), var(--gold))',
    backgroundSize: '300%',
    zIndex: '99999', pointerEvents: 'none',
    boxShadow: '0 0 12px rgba(201,168,76,0.7), 0 0 30px rgba(201,168,76,0.3)',
    animation: 'barShimmer 2.5s linear infinite',
    transition: 'width 0.08s linear',
  })
  document.body.appendChild(progressBar)

  const updateBar = () => {
    const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100
    if (progressBar) progressBar.style.width = Math.min(pct, 100) + '%'
  }
  window.addEventListener('scroll', updateBar, { passive: true })

  // ── Custom cursor (desktop only) ──
  const isPointer = window.matchMedia('(pointer: fine)').matches
  if (!isPointer) return

  cursorRing = document.createElement('div')
  cursorRing.id = 'cursor-ring'
  cursorDot = document.createElement('div')
  cursorDot.id = 'cursor-dot'
  document.body.appendChild(cursorRing)
  document.body.appendChild(cursorDot)

  const moveCursor = (e) => {
    cursorX = e.clientX
    cursorY = e.clientY
    cursorDot.style.transform = `translate(${cursorX - 4}px, ${cursorY - 4}px)`
  }

  const animateRing = () => {
    ringX += (cursorX - ringX) * 0.11
    ringY += (cursorY - ringY) * 0.11
    if (cursorRing) cursorRing.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`
    rafId = requestAnimationFrame(animateRing)
  }

  document.addEventListener('mousemove', moveCursor)
  rafId = requestAnimationFrame(animateRing)
}

/* ─── Route-refreshed effects ─── */
function initRouteEffects() {

  // ── 3D Tilt via delegation ──
  const tiltMove = (e) => {
    const card = e.target.closest('.tilt-card')
    if (!card) return
    const r = card.getBoundingClientRect()
    const x = e.clientX - r.left, y = e.clientY - r.top
    const rX = ((y / r.height) - 0.5) * -14
    const rY = ((x / r.width) - 0.5) * 14
    const shine = card.querySelector('.tilt-shine')
    if (shine) {
      shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(201,168,76,0.12) 0%, rgba(255,255,255,0.05) 50%, transparent 70%)`
    }
    card.style.transform = `perspective(1100px) rotateX(${rX}deg) rotateY(${rY}deg) translateZ(14px) scale(1.02)`
    card.style.transition = 'transform 0.06s linear'
  }
  const tiltLeave = (e) => {
    const card = e.target.closest('.tilt-card')
    if (!card) return
    card.style.transform = ''
    card.style.transition = 'transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)'
    const shine = card.querySelector('.tilt-shine')
    if (shine) shine.style.background = 'transparent'
  }
  document.addEventListener('mousemove', tiltMove)
  document.addEventListener('mouseout', tiltLeave)

  // ── Magnetic buttons ──
  const magneticMove = (e) => {
    const btn = e.target.closest('.magnetic-btn')
    if (!btn) return
    const r = btn.getBoundingClientRect()
    const dx = (e.clientX - (r.left + r.width / 2)) * 0.28
    const dy = (e.clientY - (r.top + r.height / 2)) * 0.28
    btn.style.transform = `translate(${dx}px, ${dy}px) scale(1.04)`
    btn.style.transition = 'transform 0.12s ease'
  }
  const magneticLeave = (e) => {
    const btn = e.target.closest('.magnetic-btn')
    if (!btn) return
    btn.style.transform = ''
    btn.style.transition = 'transform 0.55s cubic-bezier(0.23, 1, 0.32, 1)'
  }
  document.addEventListener('mousemove', magneticMove)
  document.addEventListener('mouseout', magneticLeave)

  // ── Cursor hover state ──
  const onEnter = (e) => {
    if (!cursorRing) return
    const el = e.target.closest('a, button, [role=button], .tilt-card, label')
    if (el) cursorRing.classList.add('cursor-expanded')
  }
  const onLeave = (e) => {
    if (!cursorRing) return
    const el = e.target.closest('a, button, [role=button], .tilt-card, label')
    if (el) cursorRing.classList.remove('cursor-expanded')
  }
  document.addEventListener('mouseover', onEnter)
  document.addEventListener('mouseout', onLeave)

  // ── Number counter ──
  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(({ target, isIntersecting }) => {
      if (!isIntersecting || target.dataset.counted) return
      target.dataset.counted = '1'
      const raw = target.dataset.count
      if (!raw) return
      const match = raw.match(/^([\d.]+)(.*)$/)
      if (!match) return
      const [, numStr, suffix] = match
      const num = parseFloat(numStr)
      const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0
      const dur = 2200, t0 = performance.now()
      const tick = (now) => {
        const p = Math.min((now - t0) / dur, 1)
        const eased = 1 - Math.pow(1 - p, 4)
        target.textContent = (eased * num).toFixed(decimals) + suffix
        if (p < 1) requestAnimationFrame(tick)
        else target.textContent = raw
      }
      requestAnimationFrame(tick)
    })
  }, { threshold: 0.6 })
  document.querySelectorAll('[data-count]').forEach(el => counterObs.observe(el))

  // ── Stagger reveal ──
  const staggerObs = new IntersectionObserver((entries) => {
    entries.forEach(({ target, isIntersecting }) => {
      if (!isIntersecting) return
      Array.from(target.children).forEach((child, i) => {
        if (!child.classList.contains('stagger-child')) return
        setTimeout(() => child.classList.add('stagger-in'), i * 75)
      })
      staggerObs.unobserve(target)
    })
  }, { threshold: 0.1 })
  document.querySelectorAll('.stagger-wrap').forEach(el => staggerObs.observe(el))

  // ── Click particle burst ──
  const burstClick = (e) => {
    const btn = e.target.closest('.btn-gold, .btn-emerald, .burst-btn')
    if (!btn) return
    const cx = e.clientX, cy = e.clientY
    const count = 14
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2
      const speed = 45 + Math.random() * 65
      const size = 3 + Math.random() * 5
      const p = document.createElement('div')
      Object.assign(p.style, {
        position: 'fixed', left: cx + 'px', top: cy + 'px',
        width: size + 'px', height: size + 'px',
        background: i % 3 === 0 ? 'var(--gold-light)' : 'var(--gold)',
        borderRadius: '50%', pointerEvents: 'none', zIndex: '99999',
        '--tx': Math.cos(angle) * speed + 'px',
        '--ty': Math.sin(angle) * speed + 'px',
        animation: `burstOut 0.7s cubic-bezier(0.22,1,0.36,1) ${Math.random() * 0.06}s forwards`,
      })
      document.body.appendChild(p)
      setTimeout(() => p.remove(), 900)
    }
  }
  document.addEventListener('click', burstClick)

  // ── Ripple on btn click ──
  const rippleClick = (e) => {
    const btn = e.target.closest('.btn-gold, .btn-emerald, .btn-ghost')
    if (!btn) return
    const existing = btn.querySelector('.ripple-wave')
    if (existing) existing.remove()
    const r = btn.getBoundingClientRect()
    const ripple = document.createElement('span')
    ripple.className = 'ripple-wave'
    const size = Math.max(r.width, r.height) * 2
    Object.assign(ripple.style, {
      width: size + 'px', height: size + 'px',
      left: (e.clientX - r.left - size / 2) + 'px',
      top: (e.clientY - r.top - size / 2) + 'px',
    })
    btn.appendChild(ripple)
    setTimeout(() => ripple.remove(), 700)
  }
  document.addEventListener('click', rippleClick)

  return () => {
    document.removeEventListener('mousemove', tiltMove)
    document.removeEventListener('mouseout', tiltLeave)
    document.removeEventListener('mousemove', magneticMove)
    document.removeEventListener('mouseout', magneticLeave)
    document.removeEventListener('mouseover', onEnter)
    document.removeEventListener('mouseout', onLeave)
    document.removeEventListener('click', burstClick)
    document.removeEventListener('click', rippleClick)
    counterObs.disconnect()
    staggerObs.disconnect()
  }
}

export default function AnimationEngine() {
  const location = useLocation()

  // Persistent (once)
  useEffect(() => {
    initPersistent()
  }, [])

  // Route-refreshed
  useEffect(() => {
    const cleanup = initRouteEffects()
    return cleanup
  }, [location.pathname])

  return null
}
