import { useEffect, useRef } from 'react'

export function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .timeline-step').forEach(el => observer.observe(el))

    // Stagger groups
    const staggerObs = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return
        Array.from(target.children).forEach((child, i) => {
          if (!child.classList.contains('stagger-child')) return
          setTimeout(() => child.classList.add('stagger-in'), i * 80)
        })
        staggerObs.unobserve(target)
      })
    }, { threshold: 0.08 })
    document.querySelectorAll('.stagger-wrap').forEach(el => staggerObs.observe(el))

    return () => { observer.disconnect(); staggerObs.disconnect() }
  }, [])
}

export function SectionHeader({ eyebrow, title, subtitle, light = false }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-14 reveal">
      {eyebrow && (
        <span className="inline-block text-xs font-body font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
          style={{ background: 'rgba(201,168,76,0.12)', color: 'var(--gold)', border: '1px solid rgba(201,168,76,0.25)' }}>
          {eyebrow}
        </span>
      )}
      <h2 className={`font-heading text-4xl md:text-5xl font-bold mb-4 leading-tight ${light ? 'text-white' : ''}`}
        style={{ color: light ? 'var(--pearl)' : 'var(--emerald)' }}>
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-base md:text-lg leading-relaxed"
          style={{ color: light ? 'rgba(250,248,243,0.65)' : 'rgba(26,26,26,0.6)' }}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

export function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-3 my-4">
      <div className="h-px w-16" style={{ background: 'var(--gold)' }} />
      <svg viewBox="0 0 20 20" className="w-4 h-4" fill="var(--gold)">
        <path d="M10 2 L12 8 L18 8 L13 12 L15 18 L10 14 L5 18 L7 12 L2 8 L8 8 Z" />
      </svg>
      <div className="h-px w-16" style={{ background: 'var(--gold)' }} />
    </div>
  )
}
