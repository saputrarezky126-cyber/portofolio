import { motion } from 'motion/react'
import Container from './Container'
import { useMotionPreset } from './motion'

function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = '',
  contained = true,
}) {
  const { fadeUp, inView, initial } = useMotionPreset()

  const heading = (eyebrow || title || subtitle) && (
    <motion.div
      variants={fadeUp}
      initial={initial}
      whileInView="show"
      viewport={inView}
      className="mb-10 max-w-2xl"
    >
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
          {eyebrow}
        </p>
      )}
      {title && <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>}
      {subtitle && <p className="mt-3 text-base-content/70">{subtitle}</p>}
    </motion.div>
  )

  const body = (
    <>
      {heading}
      {children}
    </>
  )

  return (
    <section id={id} className={`scroll-mt-24 py-16 md:py-24 ${className}`}>
      {contained ? <Container>{body}</Container> : body}
    </section>
  )
}

export default Section