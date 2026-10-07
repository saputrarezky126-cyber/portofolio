import { useReducedMotion } from 'motion/react'

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4 } },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: 'easeOut' } },
}

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

export const inView = { once: true, amount: 0.15 }

const fadeOnly = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.2 } },
}

export function useMotionPreset() {
  const reduce = Boolean(useReducedMotion())

  return {
    reduce,
    // Kalau reduce motion: jangan mulai dari "hidden" (supaya konten tidak blank)
    initial: reduce ? false : 'hidden',
    fadeUp: reduce ? fadeOnly : fadeUp,
    fadeIn: reduce ? fadeOnly : fadeIn,
    scaleIn: reduce ? fadeOnly : scaleIn,
    stagger: reduce
      ? { hidden: {}, show: { transition: { staggerChildren: 0 } } }
      : stagger,
    inView,
    hoverY: (y = -4) => (reduce ? undefined : { y, transition: { duration: 0.2 } }),
    hoverScale: (scale = 1.03) => (reduce ? undefined : { scale }),
  }
}