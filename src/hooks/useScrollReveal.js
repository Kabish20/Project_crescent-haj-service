import { useEffect } from 'react'

/**
 * Custom hook to initialize IntersectionObserver for reveal animations
 * and stagger-child effects on scroll.
 */
export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12 }
    )

    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .timeline-step')
    revealElements.forEach(el => observer.observe(el))

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

    const staggerWrappers = document.querySelectorAll('.stagger-wrap')
    staggerWrappers.forEach(el => staggerObs.observe(el))

    return () => {
      observer.disconnect()
      staggerObs.disconnect()
    }
  }, [])
}

// Alias for backward compatibility if needed
export const useReveal = useScrollReveal
export default useScrollReveal
