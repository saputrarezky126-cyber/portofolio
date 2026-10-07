import { motion } from 'motion/react'
import Container from './Container'
import ImageFrame from './ImageFrame'
import SmoothLink from './SmoothLink'
import SocialLinks from './SocialLinks'
import { useMotionPreset } from './motion'

/**
 * Hero — tangkapan 3 detik pertama.
 * photo: { src?, label? }  → kosong = frame placeholder
 * primaryCta / secondaryCta: { label, href }
 * socials: SocialLinks items
 */
function Hero({
  name,
  title,
  value,
  photo = {},
  primaryCta,
  secondaryCta,
  socials = [],
}) {
  const { fadeUp, stagger, hoverScale } = useMotionPreset()

  return (
    <section id="home" className="relative scroll-mt-24 overflow-hidden py-16 md:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-gradient-to-b from-primary/10 to-transparent" />
      <Container className="relative grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          variants={stagger}
          initial={false}
          animate="show"
          className="order-2 lg:order-1"
        >
          <motion.p variants={fadeUp} className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Portfolio
          </motion.p>
          {/* Satu H1 untuk SEO */}
          <motion.h1 variants={fadeUp} className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            {name}
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-2 text-lg font-medium text-base-content/80 md:text-xl">
            {title}
          </motion.p>
          <motion.p variants={fadeUp} className="mt-5 max-w-lg text-base text-base-content/70 md:text-lg">
            {value}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            {primaryCta && (
              <SmoothLink
                href={primaryCta.href}
                whileHover={hoverScale(1.04)}
                className="btn btn-primary rounded-full px-6 shadow-md shadow-primary/25"
              >
                {primaryCta.label}
              </SmoothLink>
            )}
            {secondaryCta && (
              <SmoothLink
                href={secondaryCta.href}
                whileHover={hoverScale(1.03)}
                className="btn btn-outline rounded-full px-6"
              >
                {secondaryCta.label}
              </SmoothLink>
            )}
          </motion.div>

          {socials.length > 0 && (
            <motion.div variants={fadeUp} className="mt-6">
              <SocialLinks items={socials} />
            </motion.div>
          )}
        </motion.div>

        <div className="order-1 mx-auto w-full max-w-sm lg:order-2 lg:max-w-md">
          <ImageFrame
            src={photo.src}
            alt={photo.alt ?? name}
            label={photo.label ?? 'Foto profil / ilustrasi (1:1)'}
            ratio="portrait"
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-28 rounded-b-xl bg-gradient-to-t from-base-100 via-base-100/60 to-transparent" />
      </Container>
    </section>
  )
}

export default Hero