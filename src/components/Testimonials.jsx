import { motion } from 'motion/react'
import Section from './Section'
import ImageFrame from './ImageFrame'
import { useMotionPreset } from './motion'

/**
 * Testimoni klien.
 * items: [{ quote, name, role, photo?: { src?, label? } }]
 */
function Testimonials({ items = [] }) {
  const {fadeUp, stagger, inView, initial } = useMotionPreset()

  if (!items.length) return null

  return (
    <Section
      id="testimonials"
      eyebrow="Testimoni"
      title="Kata mereka"
      className="bg-base-200/50"
    >
      <motion.div
        variants={stagger}
        initial={initial}
        whileInView="show"
        viewport={inView}
        className="grid gap-6 md:grid-cols-2"
      >
        {items.map((item) => (
          <motion.blockquote
            key={item.name}
            variants={fadeUp}
            className="card border border-base-300 bg-base-100 shadow-sm"
          >
            <div className="card-body gap-5">
              <p className="text-base leading-relaxed text-base-content/80">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="flex items-center gap-3">
                <ImageFrame
                  src={item.photo?.src}
                  alt={item.photo?.alt ?? item.name}
                  label={item.photo?.label ?? 'Foto'}
                  ratio="square"
                  className="!aspect-square size-12 shrink-0 !rounded-full border border-base-300 p-0 [&>span]:hidden [&>svg]:size-4"
                />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  {item.role && <p className="text-sm text-base-content/60">{item.role}</p>}
                </div>
              </footer>
            </div>
          </motion.blockquote>
        ))}
      </motion.div>
    </Section>
  )
}

export default Testimonials