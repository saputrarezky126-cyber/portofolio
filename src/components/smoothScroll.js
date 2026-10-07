import { animate } from 'motion'

const NAV_OFFSET = 88

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/** Scroll halus ke #section. Reduced-motion → loncat langsung. */
export function scrollToHash(href) {
  if (!href?.startsWith('#')) return false

  const from = window.scrollY
  const to =
    href === '#'
      ? 0
      : (() => {
          const el = document.querySelector(href)
          if (!el) return null
          return el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET
        })()

  if (to == null) return false

  if (prefersReducedMotion()) {
    window.scrollTo({ top: to, behavior: 'auto' })
  } else {
    const duration = Math.min(1, Math.max(0.4, Math.abs(to - from) / 1400))
    animate(from, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => window.scrollTo({ top: v, behavior: 'auto' }),
    })
  }

  history.pushState(null, '', href)
  return true
}

export function onHashClick(e, href) {
  if (!href?.startsWith('#')) return
  e.preventDefault()
  scrollToHash(href)
}